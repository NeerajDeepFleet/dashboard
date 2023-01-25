import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { sideList } from '../redux/action/action';

export default function Sidebar() {


  const dispatch = useDispatch();




  useEffect(() => {

    dispatch(sideList());


  }, []);

  const data = useSelector((state) => state.sidelist);

  console.log(data.coin)


  return (
    <div>Sidebar</div>
  )
}
