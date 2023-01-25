import actionTypes from "../action/types";


const initialState = {
  coin: [],
}


export const sideListReducer = (state = initialState, action) => {

  switch (action.type) {

    case actionTypes.COIN_API_SUCCESS:
      return {
        ...state,
        coin: action.payload
      }

    default: return state
  }
}