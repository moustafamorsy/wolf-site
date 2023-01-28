import React from 'react'
import { NavLink } from 'react-router-dom'

function getintouch() {
  return (
    <div id='get-in-touch' className='text-center p-5 text-white'>
      <h2 className='w-72 mx-auto font-semibold text-2xl mt-5'>A TRUE TECHNOLOGY PARTNER</h2>
      <p className=' md:w-128 sm:w-fit mx-auto py-10'>We are successful when your business is successful. As partners, we’re invested in your success by delivering the best it service for your company </p>
    <NavLink to='/contact' > <button  className='bg-gradient-to-t from-first to-second py-1.5 px-3 font-semibold mb-10 rounded'>
     Get in touch </button></NavLink>
    </div>
  )
}

export default getintouch