import { createStore } from "redux";

const initialState = {
    converter: "USD",
    symbol: "$"
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case "CHANGE_CONVERTER":
            switch (action.converter) {
                case "USD":
                    return { ...state, converter: action.converter, symbol: "$"}
                case "BRL":
                    return { ...state, converter: action.converter, symbol: "R$"}
                case "BTC":
                    return { ...state, converter: action.converter, symbol: "BTC"}
            }
    }

    return state
}

const store = createStore(reducer)

export default store