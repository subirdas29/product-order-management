import React, { useEffect, useState } from 'react'
import ProductsList from './ProductsList';
import ProductCreates from './ProductCreates';



const Products = () => {
   
  const [products, setProducts] = useState([]);

  useEffect(()=>{
    fetch('https://reactjr.coderslab.online/api/products')
    .then((res)=>res.json())
    .then(data => setProducts(data))
  },[])

  return (

   <div className='mx-20'>
  <ProductCreates></ProductCreates>
  
    <ProductsList products={products}> </ProductsList>
   </div>
  )
}

export default Products
