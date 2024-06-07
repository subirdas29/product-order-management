import React, { useEffect, useState } from 'react'
import OrdersList from './OrdersList';

const Orders = () => {

    const [orders, setOrders] = useState([]);

    useEffect(()=>{
      fetch('https://reactjr.coderslab.online/api/orders')
      .then((res)=>res.json())
      .then(data => setOrders(data))
    },[])
  
    return (
  
     <div className='mx-20'>

        <OrdersList orders = {orders}></OrdersList>
      
     </div>
    
  )
}

export default Orders
