import React from 'react'
import Footer from '../component/footer'
import Get from '../component/getintouch'
import Navbar from '../component/navbar'
import TopPage from '../component/GoToTop'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSnowflake} from '@fortawesome/free-regular-svg-icons'
import { NavLink } from 'react-router-dom'
function services() {
  return (
    
    <div>
       <Navbar>
      <h1 className='mt-11 w-48 text-3xl font-semibold'>IT Services</h1>
      <p className='my-5 md:w-80 sm:w-72 font-normal '>we offer technology solutions for each client to met your business goals. Contact us today to know how our services could be the right fit for your business.</p>
      
     <NavLink to='/contact'> <button  className='border-borderColor py-1.5 px-3 font-semibold  border-2 mb-10 rounded'>
      Get in touch </button></NavLink>
     </Navbar>
     <div className='text-center flex flex-col items-center p-10'>
      <p className='w-60 text-darkblue mb-5 font-semibold '>Custom IT solutions for your business</p>
      <p className='md:w-128 sm:96'>There’s a process involved in creating  your Technical Support solutions to make sure we meet your business goals. That process involves  getting to know your business, and what you want to accomplish then delivering the best solutions that fit your needs.</p>
     </div>
     <div id='services' className='bg-bg'>
     <div className='container pb-5'>
<h2 className='text-center text-xl text-white font-medium pt-5 pb-1.5 w-fit mx-auto   border-b-2'>Our Services</h2>
 <div className='flex flex-wrap lg:gap-x-20 md:gap-x-1 gap-y-5 mt-10 md:justify-between sm:justify-center  mb-10'>

  <div className='bg-white rounded md:w-60  pb-10 p-3 sm:w-80 md:h-80 sm:h-60 sm:mr-1'>
  <FontAwesomeIcon className='text-darkblue text-5xl' icon={faSnowflake} />
    <h3 className='my-1 font-semibold text-darkblue'>Network Infrastructure</h3>
    <p className='md:w-52 sm:w-86 text-sm'>Services outside the core administrative systems that support auxiliary or ancillary Company systems, activities, and operations to provide ticketing system.
</p>
  </div>

  <div className='bg-white rounded md:w-60  pb-10 p-3 sm:w-80 md:h-80 sm:h-60 sm:mr-1'>
  <FontAwesomeIcon className='text-darkblue text-5xl' icon={faSnowflake} />
    <h3 className='my-1 font-semibold text-darkblue'>Auxiliary Systems
</h3>
    <p className='md:w-52 sm:w-86 text-sm'>Includes maintenance of infrastructure items required to offer network connectivity.</p>
  </div>

  <div className='bg-white rounded md:w-60  pb-10 p-3 sm:w-80 md:h-80 sm:h-60 sm:mr-1'>
  <FontAwesomeIcon className='text-darkblue text-5xl' icon={faSnowflake} />
    <h3 className='my-1 font-semibold text-darkblue'>Conferencing</h3>
    <p className='md:w-52 sm:w-86 text-sm'>IT Services provides audio, video, and web conferencing to allow individuals to communicate and collaborate with each other.
</p>
  </div>

  <div className='bg-white rounded md:w-60  pb-10 p-3 sm:w-80 md:h-80 sm:h-60 sm:mr-1'>
  <FontAwesomeIcon className='text-darkblue text-5xl' icon={faSnowflake} />
    <h3 className='my-1  font-semibold text-darkblue'>File Storage & Sharing
</h3>
    <p className='md:w-52 sm:w-86 text-sm'>IT service offers a variety of platforms to staff for the purposes of storing and sharing files.</p>
  </div>

  <div className='bg-white rounded md:w-60  pb-10 p-3 sm:w-80 md:h-80 sm:h-60 sm:mr-1'>
  <FontAwesomeIcon className='text-darkblue text-5xl' icon={faSnowflake} />
    <h3 className='my-1  font-semibold text-darkblue'>Server Infrastructure
</h3>
    <p className='md:w-52 sm:w-86  text-sm'>IT Services offers Virtual Server Hosting to the Company community, with all underlying hardware residing in the IT Services data center. We also offer Physical Server Hosting when needed by software or vendor requirements.

</p>
  </div>

   <div className='bg-white rounded md:w-60  pb-10 p-3 sm:w-80 md:h-80 sm:h-60 sm:mr-1'>
  <FontAwesomeIcon className='text-darkblue text-5xl' icon={faSnowflake} />
    <h3 className='my-1 font-semibold text-darkblue'>Data Centers
</h3>
    <p className='md:w-52 sm:w-86 text-sm'>IT Services provides technology for many classrooms on company to support company teaching needs. This includes providing audio visual tools for general lecture classrooms and classrooms with computers for hands-on laboratory activities.</p>
  </div>

  <div className='bg-white rounded md:w-60  pb-10 p-3 sm:w-80 md:h-80 sm:h-60 sm:mr-1'>
  <FontAwesomeIcon className='text-darkblue text-5xl' icon={faSnowflake} />
    <h3 className='my-1  font-semibold text-darkblue'>Server Infrastructure
</h3>
    <p className='md:w-52 sm:w-86  text-sm'>IT Services offers Virtual Server Hosting to the Company community, with all underlying hardware residing in the IT Services data center. We also offer Physical Server Hosting when needed by software or vendor requirements.

</p>
  </div>

  <div className='bg-white rounded md:w-60  pb-10 p-3 sm:w-80 md:h-80 sm:h-60 sm:mr-1'>
  <FontAwesomeIcon className='text-darkblue text-5xl' icon={faSnowflake} />
    <h3 className='my-1  font-semibold text-darkblue'>Server Infrastructure
</h3>
    <p className='md:w-52 sm:w-86  text-sm'>IT Services offers Virtual Server Hosting to the Company community, with all underlying hardware residing in the IT Services data center. We also offer Physical Server Hosting when needed by software or vendor requirements.

</p>
  </div>

  <div className='bg-white rounded md:w-60  pb-10 p-3 sm:w-80 md:h-80 sm:h-60 sm:mr-1'>
  <FontAwesomeIcon className='text-darkblue text-5xl' icon={faSnowflake} />
    <h3 className='my-1  font-semibold text-darkblue'>Server Infrastructure
</h3>
    <p className='md:w-52 sm:w-86  text-sm'>IT Services offers Virtual Server Hosting to the Company community, with all underlying hardware residing in the IT Services data center. We also offer Physical Server Hosting when needed by software or vendor requirements.

</p>
  </div>

  <div className='bg-white rounded md:w-60  pb-10 p-3 sm:w-80 md:h-80 sm:h-60 sm:mr-1'>
  <FontAwesomeIcon className='text-darkblue text-5xl' icon={faSnowflake} />
    <h3 className='my-1  font-semibold text-darkblue'>Server Infrastructure
</h3>
    <p className='md:w-52 sm:w-86  text-sm'>IT Services offers Virtual Server Hosting to the Company community, with all underlying hardware residing in the IT Services data center. We also offer Physical Server Hosting when needed by software or vendor requirements.

</p>
  </div>

  <div className='bg-white rounded md:w-60  pb-10 p-3 sm:w-80 md:h-80 sm:h-60 sm:mr-1'>
  <FontAwesomeIcon className='text-darkblue text-5xl' icon={faSnowflake} />
    <h3 className='my-1  font-semibold text-darkblue'>Server Infrastructure
</h3>
    <p className='md:w-52 sm:w-86  text-sm'>IT Services offers Virtual Server Hosting to the Company community, with all underlying hardware residing in the IT Services data center. We also offer Physical Server Hosting when needed by software or vendor requirements.

</p>
  </div>

  <div className='bg-white rounded md:w-60  pb-10 p-3 sm:w-80 md:h-80 sm:h-60 sm:mr-1'>
  <FontAwesomeIcon className='text-darkblue text-5xl' icon={faSnowflake} />
    <h3 className='my-1  font-semibold text-darkblue'>Server Infrastructure
</h3>
    <p className='md:w-52 sm:w-86  text-sm'>IT Services offers Virtual Server Hosting to the Company community, with all underlying hardware residing in the IT Services data center. We also offer Physical Server Hosting when needed by software or vendor requirements.

</p>
  </div>

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

export default services