import React from 'react'

const ProductsList = ({products}) => {
  return (
    <div>
       <div >
      <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Brand</th>
        <th>Type</th>
        <th>Created At</th>
        <th>Actions</th>
      </tr>
    </thead>
  
     <tbody>
      
      {
        products?.data?.data?.map(product => <tr key={product.id}>
          <td>{product.id}</td>
          <td>{product.name}</td>
          <td>{product.brand}</td>
          <td>{product.type}</td>
          <td>{product.created_at}</td>
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

export default ProductsList