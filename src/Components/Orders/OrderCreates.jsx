import React, { useContext } from 'react'
import { ProductContext } from '../../Context/ProductProvider'
import OrderVarients from './OrderVarients'

const OrderCreates = () => {

    const {products} = useContext(ProductContext)

  return (
    <div className='flex justify-between'>
    <label htmlFor="my_modal_6" className="btn px-10">Create</label>
  <input type="checkbox" id="my_modal_6" className="modal-toggle" />
<div className="modal" role="dialog">
<div className="modal-box"  style={{maxWidth: "0 !important", maxHeight:"0 !important"}}>
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
