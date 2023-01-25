import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchCoinList } from '../redux/action/action';

export default function SearchBar() {
  const dispatch = useDispatch();




  useEffect(() => {

    dispatch(fetchCoinList());


  }, []);

  const exchangeData = useSelector((state) => state.exchange);

  console.log(exchangeData.coinList)

  return (
    <div>SearchBar</div>
  )
}
