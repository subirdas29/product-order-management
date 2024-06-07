import React, { useEffect, useState } from 'react'
import ProductsList from './ProductsList';

const Product = () => {
   
  const [products, setProducts] = useState([]);

  useEffect(()=>{
    fetch('https://reactjr.coderslab.online/api/products?page=2')
    .then((res)=>res.json())
    .then(data => setProducts(data))
  },[])

  return (
    <div className='mx-20'>
      <div className="overflow-x-auto">
  <table className="table table-xs">
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
          </tr>
        )
      
      
}
      
    </tbody>
     
   
    </table>
    </div>
    </div>
  )
}

export default Product
