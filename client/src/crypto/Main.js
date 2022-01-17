import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { FaRedo } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import CryptoButton from "./CryptoButtons";
import GetData from "./scripts/GetData";

function Main({ converter }) {
    const [crypto, setCrypto] = useState()
    const [timer, setTimer] = useState({minute: 0, changer: false})
    // lista de timeouts para poder encerra-los
    const timeouts = []


    const cryptoData = async (cryptoId) => {
        // chama a função para pegar as informações da moeda e as define em um useState
        const data = await GetData(cryptoId, converter.converter)
        const data_converter = {...data, converterCoin: converter.converter, symbol: converter.symbol}
        
        setCrypto(data_converter)
        TimeoutReset()
    }

    useEffect(() => {
        timeouts.push(setTimeout(() => {setTimer({minute: timer.minute+1, changer: timer.changer})}, 60000))
    }, [timer])

    const TimeoutReset = () => {
        // reinicia o timer
        setTimer({minute: 0, changer: !timer.changer})
        clearTimeout(timeouts[timeouts.length-1])
    }

    const HandleClickClear = () => { 
        setCrypto(undefined)
        TimeoutReset()
    }
    const HandleClickReset = () => {
        cryptoData(crypto.id)
        TimeoutReset()
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
                            <p className="time-ago">{timer.minute <= 60 ? `${timer.minute} minuto(s) atrás` : `+60 minutos atrás`}</p>
                            <p className="cmc-rank">CoinMarketCap rank: <b>{crypto.cmc_rank}</b></p>
                            <p className="price-now">Preço USD: <b>{crypto.symbol} {crypto.quote[crypto.converterCoin].price.toFixed(10)}</b></p>
                            <div className="percent-change">
                                <p>Mudança percentual</p>
                                <p className="percent percent-hour">1 hora: <b>{crypto.quote[crypto.converterCoin].percent_change_1h.toFixed(8)}%</b></p>
                                <p className="percent percent-week">7 dias: <b>{crypto.quote[crypto.converterCoin].percent_change_7d.toFixed(8)}%</b></p>
                                <p className="percent percent-month">30 dias: <b>{crypto.quote[crypto.converterCoin].percent_change_30d.toFixed(8)}%</b></p>
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

export default connect(state => ({ converter: state }))(Main)