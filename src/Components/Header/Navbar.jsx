import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav className='ml-20 my-4 text-xl font-semibold'>
        <Link to="/" className='mr-6'>Products</Link>
        <Link to='/orders'>Orders</Link>
      </nav>
    </div>
  )
}

export default Navbar
