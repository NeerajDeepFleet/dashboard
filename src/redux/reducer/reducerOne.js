import actionTypes from "../action/types";


const initialState = {
  coinList: [],
}


export const exchangeReducer = (state = initialState, action) => {

  switch (action.type) {

    case actionTypes.EXCHANGE_SUCCESS:
      return {
        ...state,
        coinList: action.payload
      }

    default: return state
  }
}