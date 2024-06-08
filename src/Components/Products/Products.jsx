import React, { useContext, useEffect, useState } from 'react'
import ProductsList from './ProductsList';
import ProductCreates from './ProductCreates';
import { ProductContext } from '../../Context/ProductProvider';




const Products = () => {
   
  const {products} = useContext(ProductContext)
  // console.log(products)
  return (

   <div className='mx-20'>
  <ProductCreates></ProductCreates>
  
    <ProductsList products={products}> </ProductsList>
   </div>
  )
}

export default Products
