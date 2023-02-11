import React from 'react'
import { NavLink } from 'react-router-dom'

function getintouch({lang}) {
  return (
    <>
  { lang ? <div id='get-in-touch' className='text-center p-5 text-white'>
      <h2 className='w-72 mx-auto font-semibold text-2xl mt-5'>A TRUE TECHNOLOGY PARTNER</h2>
      <p className=' md:w-128 sm:w-fit mx-auto py-10'>We are successful when your business is a success. As partners, we are investing in your success by delivering the best service for your company. </p>
    <NavLink to='/contact' > <button  className='bg-gradient-to-t from-first to-second py-1.5 px-3 font-semibold mb-10 rounded'>
     Get in touch </button></NavLink>
    </div> 

    :

    <div id='get-in-touch' className='text-center p-5 text-white'>
    <h2 className='w-72 mx-auto font-semibold text-2xl mt-5'>شريك حقيقي في التكنولوجيا</h2>
    <p className=' md:w-128 sm:w-fit mx-auto py-10'>نحن ناجحون عندما يكون عملك ناجحًا. كشركاء ، نستثمر في نجاحك من خلال تقديم أفضل خدمة لشركتك </p>
  <NavLink to='/contact' > <button  className='bg-gradient-to-t from-first to-second py-1.5 px-3 font-semibold mb-10 rounded'>
   تواصل معنا</button></NavLink>
  </div>

    }
    </>
  )
}

export default getintouch