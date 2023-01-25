import axios from "axios";
import actionTypes from "./types";




export const fetchCoinList = () => {
  return (dispatch) => {
    axios.get('https://api.coingecko.com/api/v3/exchange_rates')
      .then(response => {
        const data = response.data.rates
        dispatch({
          type: actionTypes.EXCHANGE_SUCCESS,
          payload: data
        })
      })
      .catch(error => {
        console.log("error")

      })
  }
}


export const sideList = () => {
  return (dispatch) => {
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&per_page=100&page=1&sparkline=false')
      .then(response => {
        const data = response.data
        dispatch({
          type: actionTypes.COIN_API_SUCCESS,
          payload: data
        })
      })
      .catch(error => {
        console.log("error")

      })
  }
}



export const pieChartData = () => {
  return (dispatch) => {
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&per_page=100&page=1&sparkline=false')
      .then(response => {
        const data = response.data
        dispatch({
          type: actionTypes.COIN_API_SUCCESS,
          payload: data
        })
      })
      .catch(error => {
        console.log("error")

      })
  }
}