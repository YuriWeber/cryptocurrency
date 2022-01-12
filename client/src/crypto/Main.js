import { FaRedo } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import CryptoButton from "./CryptoButtons";

export default function Main() {
    return (
        <div className="main-container">
            <section className="button-container">
                <CryptoButton />
            </section>
            <aside className="info-container">
                
                <div className="info-text-container">
                    <div className="info-title">   
                        <img src="/images/litecoin.png" alt="litecoin" className="info-crypto-img" />
                        <h2 className="info-crypto-name">Litecoin</h2>
                    </div>
                    <p className="time-ago">1 minuto(s) atrás </p>
                    <p className="cmc-rank">CoinMarketCap rank: <b>24</b></p>
                    <p className="price-now">Preço USD: <b>132.02</b></p>
                    <div className="percent-change">
                        <p>Mudança percentual</p>
                        <p className="percent percent-hour">1 hora: <b>0.15256292%</b></p>
                        <p className="percent percent-week">7 dias: <b>-12.898289%</b></p>
                        <p className="percent percent-month">30 dias: <b>-17.92289292%</b></p>
                    </div>
                </div>
                <div className="info-btns-container">
                    <button className="btn-info reset-btn"><FaRedo /></button>
                    <button className="btn-info clear-btn"><IoClose /></button>
                </div>
            </aside>
        </div>
    )
}