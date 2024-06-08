import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

const ProductsEdit = () => {
    const {editId} = useParams();

    const navigate = useNavigate();
    // const [nextId, setNextId] = useState(1000);
    // const [variantId, setVariantId] = useState(10030);
    // const [nextId, setNextId] = useState(1000);
//   const [variantId, setVariantId] = useState(10030);
  const [name, setName] = useState("")
  const [brand, setBrand] = useState("")
  const [type, setType] = useState("")
  const [origin, setOrigin] = useState("")
  const [color, setColor] = useState("")
  const [spec, setSpec] = useState("")
  const [size, setSize] = useState("")

     const handleSubmit = (e) =>{
    e.preventDefault();
   

    const newProduct = {
      id: nextId,
      name,
      brand,
      type,
      origin,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
      variants: [{
        id:variantId,
        product_id:nextId,
        color,
        specification: spec,
        size,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      }]
    };
    console.log(nextId)
    console.log(newProduct)


   fetch('https://reactjr.coderslab.online/api/products'+editId).then((res)=> {
    return res.json();
   }).then((resp)=>{
    alert('Product added successfully!')
    navigate('/'); 
   
  }).catch(error => console.error('Error adding product:', error));
};


const handleNameChange = (e)=>{
    setName(e.target.value)
  }
  const handleBrandChange = (e)=>{
    setBrand(e.target.value)
  }
  const handleTypeChange = (e)=>{
    setType(e.target.value)
  }
  const handleOriginChange = (e)=>{
    setOrigin(e.target.value)
  }
  const handleColorChange = (e)=>{
    setColor(e.target.value)
  }
  const handleSpecChange = (e)=>{
    setSpec(e.target.value)
  }
  const handleSizeChange = (e)=>{
    setSize(e.target.value)
  }


  return (
   
         
<div>
<h3 className="font-semibold text-center  mb-4 mt-10 text-2xl">Product Edit</h3>
  <div className="bg-white p-10 flex justify-center">
    
   <form onSubmit={handleSubmit}>
   <div>
   <div className='flex mb-6 gap-4'>
   <input type="text" placeholder="Name" onChange={handleNameChange} name='name' className="input input-bordered input-info w-full max-w-xs" />

   <input type="text" placeholder="Brand" onChange={handleBrandChange} name='brand' className="input input-bordered input-info w-full max-w-xs" />
   </div>
  <div className='flex gap-4'>
  <input type="text" placeholder="Type"  onChange={handleTypeChange} name='type' className="input input-bordered input-info w-full max-w-xs" />
  <input type="text" placeholder="Origin" onChange={handleOriginChange} name='origin' className="input input-bordered input-info w-full max-w-xs" />
  </div>
    </div>
   <div className='mt-10'>
   <h3 className="font-semibold text-center mb-10 text-2xl">Variants</h3>
   <div className='flex gap-4'>
  <input type="text" placeholder="Color" onChange={handleColorChange} name='color'  className="input input-bordered input-info" />
  <input type="text" placeholder="Specification" onChange={handleSpecChange} name='spec' className="input input-bordered input-info" />
  <input type="text" placeholder="Size" onChange={handleSizeChange} name='size' className="input input-bordered input-info " />
  <button className="btn    btn-outline btn-primary">+</button>
  <button className="btn  btn-outline btn-primary">-</button>
  </div>

  
   </div>

    <div className=" flex justify-center mt-12">
      <Link to="/" className="btn px-10  btn-outline btn-primary mr-6">Cancel</Link>
    


   <input type="submit" className='btn px-10  btn-outline btn-primary'/>
   </div>

   </form>
    
  </div>
</div>



  
   
  )
}

export default ProductsEdit
