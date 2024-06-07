import React from 'react';
import OrderInformation from './OrderInformation';
// import ''
const OrderVarients = () => {
  return (
    <div>
      {/* The button to open modal */}
<label htmlFor="my_modal_7" className="btn">Next</label>

{/* Put this part before </body> tag */}
<input type="checkbox" id="my_modal_7" className="modal-toggle "/>

<div className="modal" role="dialog">
  <div className="w-full bg-white h-full p-40">
    <h3 className="font-bold text-lg">Hello!</h3>
    <p className="py-4">This modal works with a hidden checkbox!</p>
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
