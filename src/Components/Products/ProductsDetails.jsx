import React, { useState } from 'react'
import { useLoaderData } from 'react-router-dom'

const ProductsDetails = () => {
    const user = useLoaderData()
    const allvariants = user.data.variants


    const varan =allvariants.filter(allvariant => allvariant.product_id === user.data.id)


        
    console.log(varan)
  
    console.log(user)
    console.log(allvariants.length)

  return (
    <div className='text-center mt-20'>
 
      <h1><span className='text-2xl font-bold mr-4  '>Name:</span>{user.data.name}</h1>
      <h1><span className='text-2xl font-bold mr-4 '>Brand:</span>{user.data.brand}</h1>
      <p><span className='text-2xl font-bold mr-4 '>Type:</span>{user.data.type}</p>
      <p><span className='text-2xl font-bold mr-4'>Created At:</span>{user.data.created_at}</p>
      <div>
        <h1 className='mt-10 mb-4 font-bold text-2xl'>AllVariants</h1>
      {
            varan?.map(variant => <p key={variant.id}><span className='font-bold'> color:</span> {variant.color}</p>)
      }
      </div>
        
    </div>
  )
}

export default ProductsDetails
