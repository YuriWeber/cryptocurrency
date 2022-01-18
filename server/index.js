const express = require("express");
const cors = require('cors')
const axios = require('axios')

const port = 3031
const app = express()

// define a url e a chave da api
const api = axios.create({
    baseURL: 'https://pro-api.coinmarketcap.com/v1/',
    headers: {'X-CMC_PRO_API_KEY': 'INSIRA SUA CHAVE'},
})

app.use(cors())

app.get("/getData", async (req, res) => {
    const params = req.query
    try {
        // pede as últimas informações de 9 moedas para a api
        const { data } = await api.get('cryptocurrency/quotes/latest', {
                                params: {
                                    'id': params.crypto,
                                    'convert': params.converter
                                }
                            })
        
        // organiza um array contento apenas o que vai ser necessário
        let coins = []
        for (item in data.data) {
            const element = data.data[item]
            const coin = {name: element.name, id: element.id, last_updated: element.last_updated,
                quote: element.quote, cmc_rank: element.cmc_rank}
            coins.push(coin)
        }

        // envia a resposta em json
        return res.json(coins)
    } catch (error) { 
        console.error(error)
        res.sendStatus(400)
    }
})

app.listen(port, () => {
    console.log("Porta: "+port)
})
