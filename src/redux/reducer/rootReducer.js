import { combineReducers } from "redux";
import { exchangeReducer } from "./reducerOne";
import { sideListReducer } from "./reducerTwo";

const rootReducer = combineReducers({
  sidelist: sideListReducer,
  exchange: exchangeReducer
})


export default rootReducer