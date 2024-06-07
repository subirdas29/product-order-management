import React, { useContext } from 'react';
import OrderInformation from './OrderInformation';
import { ProductContext } from '../../Context/ProductProvider';
// import ''
const OrderVarients = () => {
    const {products} = useContext(ProductContext)
  return (
    <div>
      {/* The button to open modal */}
<label htmlFor="my_modal_7" className="btn">Next</label>

{/* Put this part before </body> tag */}
<input type="checkbox" id="my_modal_7" className="modal-toggle "/>

<div className="modal mt-10" role="dialog">
    
  <div className="w-full bg-white h-full px-16 ">
  <h1 className='text-center text-2xl mb-10 font-semibold '>Orders Varients</h1>
  <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th>ID</th>
        <th>Color</th>
        <th>Specification</th>
        <th>Size</th>
        <th>Quantity</th>
        <th>Select</th>
       
      </tr>
    </thead>
  
     <tbody>
      
      {
        products?.data?.data?.map(product => <tr key={product.id}>
          <td>{product.id}</td>
          <td>{product.color}</td>
          <td>{product.specification}</td>
          <td>{product.size}</td>
          <td><input type="text" className='border-2 h-full border-slate-200' /></td>
          <td>{product.select}</td>
        
      
          </tr>
        )

}
    </tbody>
     
    </table>
    </div>
    <div className="modal-action">
      <label htmlFor="my_modal_7" className="btn">Back</label>
      <OrderInformation></OrderInformation>
     
    </div>
  </div>
</div>
    </div>
  )
}

export default OrderVarients
