export default function Header() {
    return (
        <header>
            <h1 className="title">Cryptocurrency</h1>
            <div>
                <span className="converter-text">Conversor</span>
                <select className="converter">
                    <option value="USD">USD</option>
                    <option value="BRL">BRL</option>
                </select>
            </div>
        </header>
    )
}