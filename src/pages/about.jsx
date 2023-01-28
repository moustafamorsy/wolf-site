import React from 'react'
import Navbar from '../component/navbar'
import Footer from '../component/footer'
import Get from '../component/getintouch'
import TopPage from '../component/GoToTop'
import { NavLink } from 'react-router-dom'
function about() {
  return (
    
    <div>
      <Navbar>
      <h1 className='mt-11 w-48 text-3xl font-semibold'>Who we are</h1>
      <p className='my-5 md:w-80 sm:w-72'>IT driven business specializing in solutions, supply and support of computer equipment, software, cabling and other IT related functions.</p>
      
    <NavLink to='/contact'>  <button  className='border-borderColor py-1.5 px-3 font-semibold  border-2 mb-10 rounded'>
      Get in touch </button></NavLink>
     </Navbar>

<div className='about  flex flex-col items-center pt-20'>
<div className='container  flex justify-between items-center md:mb-40 sm:mb-10 md:flex-row sm:flex-col'>
  <div className='relative md:w-80 sm:w-72 md:h-80 sm:h-72 border-2 border-line'>
<img className=' absolute  md:w-80 sm:w-72 md:h-80 sm:h-72 left-5 top-3 ' src="./meeting.jpg" alt="close-up-businesspeople-working-with-document" />
</div>
  <div className=' lg:w-96 md:w-80 sm:w-96 md:ml-7 sm:ml-0'>
    <h2 className='text-darkblue font-semibold mb-2 md:mt-0 sm:mt-10 text-xl  md:text-left sm:text-center '>our mission is to help and solve your business it problems</h2>
    <p className=' md:text-left sm:text-center w-72 md:mx-0 sm:mx-auto text-sm'>We aim to provide effective, relevant, and reliable IT solutions to our clients, delivered with exceptional customer service and transparency from start to finish.</p>
  </div>
</div>
<div className=' container  flex  justify-between items-center md:mb-40 sm:mb-20 md:flex-row-reverse sm:flex-col'>
<div className='relative md:w-80 sm:w-72 md:h-80 sm:h-72 border-2 border-line'>
<img className=' absolute  md:w-80 sm:w-72 md:h-80 sm:h-72 right-5 top-3 ' src="./anaylsis.jpg" alt="young-man-engineer-making-program-analyses" />
 </div>
  <div className='lg:w-96 md:w-80 sm:w-96 '>
  <h2 className='text-darkblue font-semibold mb-2 md:mt-0 sm:mt-10 md:text-xl sm:text-lg  md:text-left sm:text-center'>our objective is to deliver a top notch it services to all our client</h2>
    <p className='text-sm md:text-left sm:text-center w-72 md:mx-0 sm:mx-auto text-sm'>we provide our customers with the tools and techniques appropriate to facilitate the management of their business. Create, update and standardize the infrastructure and information systems for our customers. Narrowing the gaps between theory and actual application environment. </p>
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

export default about