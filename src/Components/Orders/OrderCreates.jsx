import React, { useContext, useEffect, useState } from 'react'
import { ProductContext } from '../../Context/ProductProvider'
import OrderVarients from './OrderVarients'

const OrderCreates = () => {

    const {products} = useContext(ProductContext)


  

    useEffect(()=>{

    },[])

  return (

    
    <div className='flex justify-between'>
         <label htmlFor="my_modal_6" className="btn px-10">Create</label>
         <input type="checkbox" id="my_modal_6" className="modal-toggle" />
        <div className="carousel w-full modal" role="dialog">
      <div className='modal-box'>
         
       <div id="slide1" className="carousel-item relative w-full">
         <img src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg" className="w-full" />
         <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
           <a href="#slide4" className="btn btn-circle">❮</a> 
           <a href="#slide2" className="btn btn-circle">❯</a>
         </div>
       </div> 
       <div id="slide2" className="carousel-item relative w-full">
         <img src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg" className="w-full" />
         <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
           <a href="#slide1" className="btn btn-circle">❮</a> 
           <a href="#slide3" className="btn btn-circle">❯</a>
         </div>
       </div> 
       <div id="slide3" className="carousel-item relative w-full">
         <img src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg" className="w-full" />
         <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
           <a href="#slide2" className="btn btn-circle">❮</a> 
           <a href="#slide4" className="btn btn-circle">❯</a>
         </div>
       </div> 
       <div id="slide4" className="carousel-item relative w-full">
         <img src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg" className="w-full" />
         <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
           <a href="#slide3" className="btn btn-circle">❮</a> 
           <a href="#slide1" className="btn btn-circle">❯</a>
         </div>
       </div>
       <div className="modal-action">
  <label htmlFor="my_modal_6" className="btn">Cancel</label>
  <OrderVarients ></OrderVarients>
</div>
     </div>
      </div>






    {/* <label htmlFor="my_modal_6" className="btn px-10">Create</label>
  <input type="checkbox" id="my_modal_6" className="modal-toggle" /> */}
<div className="modal" role="dialog">
<div className="modal-box">
<h3 className="font-semibold text-center text-lg mb-10">Order(Create)</h3>
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
        <th>Select</th>
       
      </tr>
    </thead>
  
     <tbody>
      
      {
        products?.data?.data?.map(product => <tr key={product.id}>
          <td>{product.id}</td>
          <td>{product.name}</td>
          <td>{product.brand}</td>
          <td>{product.type}</td>
        
          <td>+</td>
          </tr>
        )
      
}
      
    </tbody>
     
   
    </table>
    </div>
    </div>

<div className="modal-action">
  <label htmlFor="my_modal_6" className="btn">Cancel</label>
  <OrderVarients ></OrderVarients>
</div>


</div>
</div>
<input type="text" placeholder="Search" className="input input-bordered  w-full max-w-xs" />
</div>
  )
}

export default OrderCreates
