import React from 'react'

const ProductCreates = () => {
  return (
    <div className='flex justify-between'>
        <label htmlFor="my_modal_6" className="btn   btn-outline btn-primary px-10">Create</label>
      <input type="checkbox" id="my_modal_6" className="modal-toggle" />
<div className="modal" role="dialog">
  <div className="bg-white p-10">
    <h3 className="font-semibold text-center text-lg mb-10 text-2xl">Product (Create/View/Edit)</h3>
    <div className='mx-28'>
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
   <h3 className="font-semibold text-center text-lg mb-10 text-2xl">Variants</h3>
   <div className='flex gap-4'>
  <input type="text" placeholder="Color" className="input input-bordered input-info" />
  <input type="text" placeholder="Specification" className="input input-bordered input-info w-full px-20" />
  <input type="text" placeholder="Size" className="input input-bordered input-info " />
  <button className="btn    btn-outline btn-primary">+</button>
  <button className="btn  btn-outline btn-primary">-</button>
  </div>
   <div className='flex gap-4 my-4'>
  <input type="text" placeholder="Color" className="input input-bordered input-info" />
  <input type="text" placeholder="Specification" className="input input-bordered input-info w-full px-20" />
  <input type="text" placeholder="Size" className="input input-bordered input-info " />
  <button className="btn    btn-outline btn-primary">+</button>
  <button className="btn  btn-outline btn-primary">-</button>
  </div>
   <div className='flex gap-4 mb-4'>
  <input type="text" placeholder="Color" className="input input-bordered input-info" />
  <input type="text" placeholder="Specification" className="input input-bordered input-info w-full px-20" />
  <input type="text" placeholder="Size" className="input input-bordered input-info " />
  <button className="btn    btn-outline btn-primary">+</button>
  <button className="btn  btn-outline btn-primary">-</button>
  </div>
   <div className='flex gap-4'>
  <input type="text" placeholder="Color" className="input input-bordered input-info" />
  <input type="text" placeholder="Specification" className="input input-bordered input-info w-full px-20" />
  <input type="text" placeholder="Size" className="input input-bordered input-info " />
  <button className="btn    btn-outline btn-primary">+</button>
  <button className="btn  btn-outline btn-primary">-</button>
  </div>
   </div>

    <div className="modal-action">
      <label htmlFor="my_modal_6" className="btn px-10  btn-outline btn-primary">Cancel</label>
      <label htmlFor="my_modal_6" className="btn px-10  btn-outline btn-primary">Submit</label>
    </div>
    
  </div>
</div>
<input type="text" placeholder="Search" className="input input-bordered  w-full max-w-xs" />
    </div>
  )
}

export default ProductCreates
