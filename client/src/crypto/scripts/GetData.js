import api from "../../api"

export default async function GetData(crypto, converter) {
  // crypto ID
  // 1 - Bitcoin, 2 - Litecoin, 52 - XRP, 1027 - Ethereum, 2010 - Cardano, 3794 - Cosmos,
  // 4030 - Algorand, 4172 - Terra, 5426 - Solana
    try {
      // faz a requisição para o back-end enviando o id e a moeda para converter
      const {data} = await api.get('/getData', {
        params: {
          crypto: crypto,
          converter: converter
        }
      })
      return data[0]
    } catch (error) {
      return console.error(error)
    }
  }
