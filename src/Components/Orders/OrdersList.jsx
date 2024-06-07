import React from 'react'

const OrdersList = ({orders}) => {
  console.log(orders)
  return (
    <div>
       <div >
      <div className="overflow-x-auto ">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Email</th>
        <th>Address</th>
        <th>Total Quantity</th>
        <th>Created At</th>
        <th>Actions</th>
      </tr>
    </thead>
  
     <tbody>
      
      {
        orders?.data?.data?.map(order=> <tr key={order.id}>
          <td>{order.id}</td>
          <td>{order.name}</td>
          <td>{order.email}</td>
          <td>{order.address}</td>
          <td>{order.total_quantity}</td>
          <td>{order.created_at}</td>
         
          <td>view | Edit | Delete</td>
          </tr>
        )
      
}
      
    </tbody>
   
    </table>
    </div>
    </div>
    </div>
  )
}

export default OrdersList
