import { FaRedo } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

export default function Main() {
    return (
        <div className="main-container">
            <section className="button-container">
                <button className="btn" id="bitcoin-btn">
                    <img src="/images/bitcoin.png" alt="bitcoin" className="crypto-img"/>
                    <p className="crypto-name">Bitcoin</p>
                </button>

                <button className="btn" id="litecoin-btn">
                    <img src="/images/litecoin.png" alt="litecoin" className="crypto-img"/>
                    <p className="crypto-name">Litecoin</p>
                </button>

                <button className="btn" id="xrp-btn">
                    <img src="/images/xrp.png" alt="xrp" className="crypto-img"/>
                    <p className="crypto-name">XRP</p>
                </button>

                <button className="btn" id="ethereum-btn">
                    <img src="/images/ethereum.png" alt="ethereum" className="crypto-img"/>
                    <p className="crypto-name">Ethereum</p>
                </button>

                <button className="btn" id="cardano-btn">
                    <img src="/images/cardano.png" alt="cardano" className="crypto-img"/>
                    <p className="crypto-name">Cardano</p>
                </button>

                <button className="btn" id="cosmos-btn">
                    <img src="/images/cosmos.png" alt="cosmos" className="crypto-img"/>
                    <p className="crypto-name">Cosmos</p>
                </button>

                <button className="btn" id="algorand-btn">
                    <img src="/images/algorand.png" alt="algorand" className="crypto-img"/>
                    <p className="crypto-name">Algorand</p>
                </button>

                <button className="btn" id="Terra-btn">
                    <img src="/images/Terra.png" alt="Terra" className="crypto-img"/>
                    <p className="crypto-name">Terra</p>
                </button>

                <button className="btn" id="solana-btn">
                    <img src="/images/solana.png" alt="solana" className="crypto-img"/>
                    <p className="crypto-name">Solana</p>
                </button>


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