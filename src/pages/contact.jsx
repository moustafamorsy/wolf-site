import React from 'react'
import Navbar from '../component/navbar'
import Footer from '../component/footer'
import Get from '../component/getintouch'
import Form from '../component/form'
import TopPage from '../component/GoToTop'


function contact() {
  return (
  
    <div>
      <Navbar>
      <h1 className='mt-11 w-48 text-3xl font-semibold'>Get Started</h1>
      <p className='my-5 md:w-80 sm:w-72 font-normal mb-20 '>
We specialize in IT support, backup, custom solutions. If your goal is to find the best IT services for your business don't worry you came to the right place. Contact us and we will do our best to provide you with everything your business need</p>
     
     </Navbar>
     <div className='contact'>
     <div className='text-center mt-10'>
      <h2 className='text-darkblue font-semibold text-xl' >Get in Touch!</h2>
      <p className='text-darkblue text-sm'>we will reach out to you soon.</p>
     </div>
     <div className=' flex md:flex-row sm:flex-col md:justify-evenly sm:items-center py-20'>
      <Form />
      <div className='w-80 h-108 bg-bg flex flex-col items-center p-7 text-white'>
        <h2 className='w-44 text-center text-lg'>Have you ever asked yourself ...?</h2>
        <div className=' my-10 w-60 text-sm flex flex-col items-center'>
        <p>how can i secure my Network and Business </p>
        <p className='my-2'>how can i optimize my Business Growth and Development</p>
        <p>what is the best technology to use for my business</p>
        <p className='mt-2'>trying to make the best investment to save money and time</p>
        </div>
        <h3 className='w-60 text-center text-sm'>we can help you by taking all the unnecessary thinking so you can focus on your business</h3>
      </div>
     </div>
     </div>
      <Get />
 <Footer />
      <div className='text-center text-sm'>
        <p className='text-gray'>Wolf Technology 2023 © All Rights Reserved.</p>
      </div>
      <TopPage />
      </div>
  )
}

export default contact