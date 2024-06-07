import React from 'react'

const OrderInformation = () => {
  return (
    <div>


<label htmlFor="my_modal_8" className="btn">Next</label>


<input type="checkbox" id="my_modal_8" className="modal-toggle "/>
<div className="modal mt-10" style={{maxWidth: "100% !important", maxHeight:"100% !important ", backgroundColor:"white", padding:"20px"}}  role="dialog" >
  <div >
    <h1 className='text-center text-2xl mb-10 font-semibold '>Information</h1>
  <div className='flex mb-6 gap-4'>
   <input type="text" placeholder="Name" className="input input-bordered input-info w-full max-w-xs" />
   <input type="text" placeholder="Email" className="input input-bordered input-info w-full max-w-xs" />
   </div>
  <div className='flex gap-4'>
  <input type="text" placeholder="Address" className="input input-bordered input-info w-full max-w-xs" />
  <input type="text" placeholder="Total Quantity" className="input input-bordered input-info w-full max-w-xs" />
  </div>
    <div className="modal-action">
    <label htmlFor="my_modal_8" className="btn">Back</label>
    <label htmlFor="my_modal_8" className="btn">Submit</label>
    </div>
  </div>
</div>
    </div>
  )
}

export default OrderInformation
