
import Navbar from '../component/navbar'
import { NavLink } from 'react-router-dom'
import Footer from '../component/footer'
import Get from '../component/getintouch'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSnowflake} from '@fortawesome/free-regular-svg-icons'
import TopPage from '../component/GoToTop'
function Home() {

  return (
    <div>
      
     <Navbar>
      <h1 className='mt-11 md:w-96 sm:w-72 text-3xl sm:text-2xl font-semibold'>IT Support , IT Services & IT Management</h1>
      <p className='my-5 md:w-80 sm:w-72 font-normal '> We are working with our customers to help them plan, build, support, and manage their IT infrastructure.</p>
      
      <NavLink to='/contact'><button  className='border-borderColor py-1.5 px-3 font-semibold  border-2 mb-10 rounded'>
     Get in touch </button></NavLink> 
     </Navbar>

      <div className='container flex md:justify-between sm:justify-center items-center  pt-10 mt-5 mb-10'>
       <div className='sm:text-center md:text-left md:w-fit sm:w-screen md:block sm:flex sm:flex-col sm:items-center'>
        <p className='text-lightblue md:mb-0 sm:mb-1'>Who we are</p>
        <h2 className='md:w-80 sm:w-72 text-darkblue md:text-3xl sm:text-2xl font-semibold'>Custom IT solution for your business.</h2>
        <p className='w-64 my-6 text-sm'> <span className='text-text font-semibold'>Wolf Technology</span> offers IT services and products including , Servers Laptops , PCs , Networking , Security & ets.
</p>
<NavLink to='/about'><button  className='border-borderColor py-1.5 px-3 font-semibold  border-2 mb-10 rounded'>
Learn more </button></NavLink> 
       </div>
      <div className=''>
      <img className='w-80 md:block sm:hidden' src="/it-main.jpg" alt="it enigneering doing maintiance" />
      </div>
      </div>
      


 <div id='services' className='bg-bg'>
  <div className='container'>
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

 </div>
 <div className='flex justify-center items-center pb-10 text-white'>
 <p className='mr-3 font-semibold md:text-lg sm:text-sm'>explore our services </p>
 <NavLink to='/services'><button  className='border-borderColor py-0.5 px-4 font-semibold  border-2  rounded'>
     Click here </button></NavLink> 
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

export default Home