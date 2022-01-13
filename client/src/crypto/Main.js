import { useState } from "react";
import { FaRedo } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import CryptoButton from "./CryptoButtons";
import GetData from "./scripts/GetData";

export default function Main() {
    const [crypto, setCrypto] = useState()
    const converter = {name: "USD", symbol: "$"} // deve vir do header depois


    const cryptoData = async (cryptoId) => {
        // chama a função para pegar as informações da moeda e as define em um useState
        const data = await GetData(cryptoId, converter.name)

        setCrypto(data)
    }

    const HandleClickClear = () => { 
        setCrypto(undefined)
    }
    const HandleClickReset = () => {
        cryptoData(crypto.id)
    }

    return (
        <div className="main-container">
            <section className="button-container">
                <CryptoButton cryptoData={cryptoData}/>
            </section>
            <aside className="info-container">
                {
                    crypto ?
                        // caso crypto esteja definito irá retornar todas informações da moeda ao usuário
                        // se não irá retornar nada
                        <>
                        <div className="info-text-container">
                            <div className="info-title">   
                                <img src={`/images/${crypto.name.toLowerCase()}.png`} alt={`${crypto.name}`} className="info-crypto-img" />
                                <h2 className="info-crypto-name">{crypto.name}</h2>
                            </div>
                            <p className="time-ago">1 minuto(s) atrás </p>
                            <p className="cmc-rank">CoinMarketCap rank: <b>{crypto.cmc_rank}</b></p>
                            <p className="price-now">Preço USD: <b>{converter.symbol} {crypto.quote.USD.price.toFixed(10)}</b></p>
                            <div className="percent-change">
                                <p>Mudança percentual</p>
                                <p className="percent percent-hour">1 hora: <b>{crypto.quote.USD.percent_change_1h.toFixed(8)}%</b></p>
                                <p className="percent percent-week">7 dias: <b>{crypto.quote.USD.percent_change_7d.toFixed(8)}%</b></p>
                                <p className="percent percent-month">30 dias: <b>{crypto.quote.USD.percent_change_30d.toFixed(8)}%</b></p>
                            </div>
                        </div>
                        <div className="info-btns-container">
                            <button className="btn-info reset-btn" onClick={HandleClickReset}><FaRedo /></button>
                            <button className="btn-info clear-btn" onClick={HandleClickClear}><IoClose /></button>
                        </div>
                        </>
                        :
                        <></>
                }
            </aside>
        </div>
    )
}