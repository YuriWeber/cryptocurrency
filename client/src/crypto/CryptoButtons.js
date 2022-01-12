export default function CryptoButton() {
    const cryptos = {"bitcoin": 1, "litecoin": 2, "xrp": 52, "ethereum": 1027,"cardano": 2010, "cosmos": 3794,
                    "algorand": 4030, "terra": 4172, "solana": 5426}
                    
    return (
        <>
        {
            Object.keys(cryptos).map((key, index) => {
                return (
                <button className="btn" id={`${key}-btn`} key={index}>
                    <img src={`/images/${key}.png`} alt={key} className="crypto-img"/>
                    <p className="crypto-name">{key.toUpperCase()}</p>
                </button>
                )
            })
        }
        </>
    )
}