import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
// import { v4 as uuidv4 } from 'uuid';
// import { useHistory } from 'react-router-dom';
const ProductCreates = () => {
  const navigate = useNavigate();
  useEffect(() => {
    // Fetch the last used ID or determine it based on existing products
    // Example: Fetching the last ID from your JSON server
    fetch('https://reactjr.coderslab.online/api/products')
      .then(response => response.json())
      .then(data => {
        const lastProductId = Math.max(...data.data.data.map(product => product.id),1000 ); // Assuming 900 is the starting ID
        setNextId(lastProductId + 1); // Set the next available ID
      })
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  useEffect(() => {
    // Fetch the last used ID or determine it based on existing products
    // Example: Fetching the last ID from your JSON server
    fetch('https://reactjr.coderslab.online/api/products')
      .then(response => response.json())
      .then(data => {
        const lastVariantId = Math.max(...data.data.data.map(product => product.id),10030 ); // Assuming 900 is the starting ID
        setVariantId(lastVariantId + 1); // Set the next available ID
      })
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  // const [id, setId] = useState(uuidv4()); 

  // console.log(id)
  const [nextId, setNextId] = useState(1000);
  const [variantId, setVariantId] = useState(10030);
  const [name, setName] = useState("")
  const [brand, setBrand] = useState("")
  const [type, setType] = useState("")
  const [origin, setOrigin] = useState("")
  const [color, setColor] = useState("")
  const [spec, setSpec] = useState("")
  const [size, setSize] = useState("")
  // const history = useHistory();

  const handleSubmit = (e) =>{
    e.preventDefault();
    // const navigate = useNavigate();

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
   console.log({name,brand,type,origin,color,spec,size})

   fetch('https://reactjr.coderslab.online/api/products', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newProduct),
  })
  .then(response => response.json())
  .then(data => {
    alert('Product added successfully!');
    navigate('/');
    // history.push('/'); // Navigate to the home page or product list after successful addition
  })
  .catch(error => console.error('Error adding product:', error));
};


  // const handleGenerateId = () => {
  //   setId(uuidv4());
  // };

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
    <div className='flex justify-between'>
        <label htmlFor="my_modal_6" className="btn   btn-outline btn-primary px-10">Create</label>
      <input type="checkbox" id="my_modal_6" className="modal-toggle" />
<div className="modal" role="dialog">
  <div className="bg-white p-10">
    <h3 className="font-semibold text-center  mb-10 text-2xl">Product (Create/View/Edit)</h3>
   <form onSubmit={handleSubmit}>
   <div className='mx-28'>
   <div className='flex mb-6 gap-4'>
   <input type="text" placeholder="Name" onChange={handleNameChange} name='name' className="input input-bordered input-info w-full max-w-xs" />
   {/* <input type="text" placeholder="Id" value={id} className="input input-bordered input-info w-full max-w-xs" /> */}
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
  <input type="text" placeholder="Specification" onChange={handleSpecChange} name='spec' className="input input-bordered input-info w-full px-20" />
  <input type="text" placeholder="Size" onChange={handleSizeChange} name='size' className="input input-bordered input-info " />
  <button className="btn    btn-outline btn-primary">+</button>
  <button className="btn  btn-outline btn-primary">-</button>
  </div>

  
   </div>

    <div className="modal-action flex">
      <label htmlFor="my_modal_6" className="btn px-10  btn-outline btn-primary">Cancel</label>
    


   <input type="submit" className='btn px-10  btn-outline btn-primary'/>
   </div>

   </form>
    
  </div>
</div>
<div>
<input type="text" placeholder="Search" className="input input-bordered  w-full max-w-xs" />
</div>
    </div>
  )
}

export default ProductCreates
