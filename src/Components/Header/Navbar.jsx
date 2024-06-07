import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav className='ml-20 my-4  font-semibold text-center'>
        <Link to="/" className='btn btn-outline btn-primary mr-6'>Products</Link>
        <Link to='/orders' className='btn btn-outline btn-primary'>Orders</Link>
      </nav>
    </div>
  )
}

export default Navbar
