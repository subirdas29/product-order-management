import React, { useState } from 'react'
import { Link, useNavigate} from 'react-router-dom'

const ProductsList = ({products}) => {

  // const [empdata, empdatachange] = useState(null);
    const navigate = useNavigate();
  const LoadEdit = (id) => {
    navigate("/product/edit/" + id);
}
  // const removeFunction=(id)=>{

  // }

  return (
    <div>
       <div >
      <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr className='text-lg'>
        <th>ID</th>
        <th>Name</th>
        <th>Brand</th>
        <th>Type</th>
        <th>Created At</th>
        <th>Actions</th>
      </tr>
    </thead>
  
     <tbody>
      
      {
        products?.data?.data?.map(product => <tr key={product.id}>
          <td>{product.id}</td>
          <td>{product.name}</td>
          <td>{product.brand}</td>
          <td>{product.type}</td>
          <td>{product.created_at}</td>
          <td className='text-red-600 font-bold'><span><Link to={`/product/${product?.id}`}>View</Link></span>| <span>  <Link onClick={() => { LoadEdit(product?.id) }}>Edit</Link></span>| <span >Delete</span></td>
          {/* onClick={()=>{removeFunction(product.id)}} */}
          {/* // onClick={()=>{loadEdit(product.id)}} */}
          </tr>
        )
      
}
      
    </tbody>
     
   
    </table>
    </div>
    </div>
    </div>
  )
}

export default ProductsList
