import { connect } from "react-redux"

function changeConverter(converter) {
    return {
        type: 'CHANGE_CONVERTER',
        converter
    }
}

function Header({ dispatch }) {
    return (
        <header>
            <h1 className="title">Cryptocurrency</h1>
            <div>
                <span className="converter-text">Conversor</span>
                <select className="converter" onChange={event => dispatch(changeConverter(event.target.value))}>
                    <option value="USD">USD</option>
                    <option value="BRL">BRL</option>
                    <option value="BTC">BTC</option>
                </select>
            </div>
        </header>
    )
}

export default connect()(Header)