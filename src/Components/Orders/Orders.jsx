import React, { useContext, useEffect, useState } from 'react'
import OrdersList from './OrdersList';
import OrderCreates from './OrderCreates';
import { OrderContext } from '../../Context/OrderProvider';

const Orders = () => {

   const {orders}= useContext(OrderContext)

   console.log(orders)
  
    return (
  
     <div className='mx-20 my-10'>
        <OrderCreates></OrderCreates>
        <OrdersList orders = {orders}></OrdersList>
      
     </div>
    
  )
}

export default Orders
