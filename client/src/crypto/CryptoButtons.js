export default function CryptoButton({ cryptoData }) {
    // objeto a ser usada para a criação dos botões
    const cryptos = {"bitcoin": 1, "litecoin": 2, "xrp": 52, "ethereum": 1027,"cardano": 2010, "cosmos": 3794,
                    "algorand": 4030, "terra": 4172, "solana": 5426}

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