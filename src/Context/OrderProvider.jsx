import React, { createContext, useEffect, useState } from 'react'

export const OrderContext = createContext(null)

const OrderProvider = ({children}) => {
    const [orders, setOrders] = useState([]);

    useEffect(()=>{
      fetch('https://reactjr.coderslab.online/api/orders')
      .then((res)=>res.json())
      .then(data => setOrders(data))
    },[])

  return (
    <OrderContext.Provider value={{orders}}>
        {children}
    </OrderContext.Provider>
  )
}

export default OrderProvider
