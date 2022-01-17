import { useEffect, useState } from "react";
import { cryptos } from "./cryptos"

export default function CryptoButton({ cryptoData }) {
    const [windowWidth, setWindowWidth] = useState(window.outerWidth)
    // objeto a ser usada para a criação dos botões
    
    useEffect(() => {
        // ao renderizar
        // de acordo com o número de cryptos no objeto ele definirá a quantidade de colunas e linhas
        (() => {
            const buttonContainer = document.querySelector(".button-container").style
            const cryptoQtySqrt = Math.ceil(Math.sqrt(Object.keys(cryptos).length))

            // colunas de acordo com o tamanho da tela ou raiz quadrada do tamanho do objeto com limite de 5
            const column = windowWidth <= 600 && cryptoQtySqrt > 2 ? 3 : cryptoQtySqrt > 5 ? 5 : cryptoQtySqrt
            const row = cryptoQtySqrt
            buttonContainer.gridTemplateColumns = `repeat(${column}, 100px)`
            buttonContainer.gridTemplateRows = `repeat(${row}, 100px)`

        })()
    }, [windowWidth])

    useEffect(() => {
        // contra o redimensionamento da janela
        function resizeSetter() {
            setWindowWidth(window.outerWidth)
        }
    
        window.addEventListener('resize', resizeSetter)
    })

    
    const HandleClickCrypto = (cryptoId) => {
        cryptoData(cryptoId)
    }
                    
    return (
        <>
        {
            Object.keys(cryptos).map((key, index) => {
                // criação de cada botão a partir dos dados de um objeto
                return (
                <button className="btn" id={`${key}-btn`} key={index} onClick={() => {HandleClickCrypto(cryptos[key])}}>
                    <img src={`/images/${key}.png`} alt={key} className="crypto-img"/>
                    <p className="crypto-name">{key.toUpperCase()}</p>
                </button>
                )
            })
        }
        </>
    )
}