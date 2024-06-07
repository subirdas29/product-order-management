import React from 'react'

const ProductCreates = () => {
  return (
    <div className='flex justify-between'>
        <label htmlFor="my_modal_6" className="btn px-10">Create</label>
      <input type="checkbox" id="my_modal_6" className="modal-toggle" />
<div className="modal" role="dialog">
  <div className="modal-box">
    <h3 className="font-semibold text-center text-lg mb-10">Product (Create/View/Edit)</h3>
    <div>
   <div className='flex mb-6 gap-4'>
   <input type="text" placeholder="Name" className="input input-bordered input-info w-full max-w-xs" />
   <input type="text" placeholder="Brand" className="input input-bordered input-info w-full max-w-xs" />
   </div>
  <div className='flex gap-4'>
  <input type="text" placeholder="Type" className="input input-bordered input-info w-full max-w-xs" />
  <input type="text" placeholder="Origin" className="input input-bordered input-info w-full max-w-xs" />
  </div>
    </div>
   <div className='mt-10'>
   <h3 className="font-semibold text-center text-lg mb-10">Variants</h3>
   <div className='flex gap-4'>
  <input type="text" placeholder="Color" className="input input-bordered input-info w-full max-w-xs" />
  <input type="text" placeholder="Specification" className="input input-bordered input-info w-full max-w-xs" />
  <input type="text" placeholder="Size" className="input input-bordered input-info w-full max-w-xs" />
  </div>
   </div>

    <div className="modal-action">
      <label htmlFor="my_modal_6" className="btn">Cancel</label>
      <label htmlFor="my_modal_6" className="btn">Submit</label>
    </div>
    
  </div>
</div>
<input type="text" placeholder="Search" className="input input-bordered  w-full max-w-xs" />
    </div>
  )
}

export default ProductCreates
