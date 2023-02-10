
import Navbar from '../component/navbar'
import { NavLink } from 'react-router-dom'
import Footer from '../component/footer'
import Get from '../component/getintouch'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSnowflake} from '@fortawesome/free-regular-svg-icons'
import TopPage from '../component/GoToTop'
import Testimonials from '../component/Testimonials'
import data from '../../data'
import Card from '../component/card'

function Home({lang , language}) {
  const cards =  data.slice(0,6).map( item => <Card lang={lang} key={item.id} icon ={item.icon}  titleEN ={ item.titleEN}  desEN ={item.descriptionEN} titleAB ={item.titleAB}  desAB ={item.descriptionAB} /> )
  return (
    <div>
      
     <Navbar lang={lang} language={language}>
      <div className={lang ? '' : 'flex flex-col items-end text-right'}>
   <h1 className='mt-11 md:w-96 sm:w-72 text-3xl sm:text-2xl font-semibold'>{lang ? 'IT Support , IT Services & IT Consultant' : "دعم تكنولوجيا المعلومات وخدمات تكنولوجيا المعلومات واستشاري تكنولوجيا المعلومات"}</h1>
      <p  className='my-5 md:w-80 sm:w-72 font-normal '> {lang ? 'We are working with our customers to help them plan, build, support, and manage their IT infrastructure.' : "نحن نعمل مع عملائنا لمساعدتهم على تخطيط وبناء ودعم وإدارة البنية التحتية لتكنولوجيا المعلومات الخاصة بهم."}</p>
      <NavLink  to='/contact'><button  className={'border-borderColor py-1.5 px-3 font-semibold  border-2 mb-10   rounded'}>
     {lang ? "Get in touch" : "تواصل معنا"} </button></NavLink> 
     </div>
     
     </Navbar>

{  lang ?  
<div className='bg-white'>
<div className=' container flex md:justify-between sm:justify-center items-center  pt-10 mt-5 mb-10'>
       <div className='sm:text-center md:text-left md:w-fit sm:w-screen md:block sm:flex sm:flex-col sm:items-center'>
       <p className='text-lightblue md:mb-0 sm:mb-1'> Who we are </p> 
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
      </div>
      :
// arabic part
<div className='bg-white'>
       <div className='container flex flex-row-reverse md:justify-between sm:justify-center items-center  pt-10 mt-5 mb-10'>
       <div className='sm:text-center md:text-right md:w-fit sm:w-screen md:block sm:flex sm:flex-col sm:items-center '>
       <p className='text-lightblue md:mb-0 sm:mb-1'> من نحن </p> 
        <h2 className='md:w-80 sm:w-72 text-darkblue md:text-3xl sm:text-2xl font-semibold'>حلول تكنولوجيا تناسب عملك الخاص</h2>
        <p className='w-64  my-6  text-sm md:ml-auto sm:ml-0'> <span className='text-text font-semibold'>وولف تكنولوجى</span>  تقدم خدمات ومنتجات تكنولوجيا بما في ذلك ، أجهزة الكمبيوتر المحمولة والخوادم وأجهزة الكمبيوتر والشبكات والأمن وغيرها
</p>
<NavLink to='/about'><button  className='border-borderColor py-1.5 px-3 font-semibold  border-2 mb-10 rounded'>
تعرف اكثر</button></NavLink> 
       </div>
      <div className=''>
      <img className='w-80 md:block sm:hidden' src="/it-main.jpg" alt="it enigneering doing maintiance" />
      </div>
      </div>
      </div>
      }
      


{ lang ? <div id='services' className='bg-bg'>
  <div className='container'>
<h2 className='text-center text-xl text-white font-medium pt-5 pb-1.5 w-fit mx-auto   border-b-2'>our Services</h2>
 <div className='flex flex-wrap lg:gap-x-20 md:gap-x-1 gap-y-5 mt-10 md:justify-between sm:justify-center  mb-10'>


 {cards} 
 

 </div>
 <div className='flex justify-center items-center pb-10 text-white'>
 <p className='mr-3 font-semibold md:text-lg sm:text-sm'>explore our services </p>
 <NavLink to='/services'><button  className='border-borderColor py-0.5 px-4 font-semibold  border-2  rounded'>
     Click here </button></NavLink> 
 </div>

 </div>
 </div>
 
 :
// arabic
 <div id='services' className='bg-bg'>
  <div className='container'>
<h2 className='text-center text-xl text-white font-medium pt-5 pb-1.5 w-fit mx-auto   border-b-2'>الخدمات الخاصه بنا</h2>
 <div className='flex flex-wrap lg:gap-x-20 md:gap-x-1 gap-y-5 mt-10 md:justify-between sm:justify-center  mb-10'>

 {cards}

 </div>
 <div className='flex justify-center items-center pb-10 text-white'>
 <p className='mr-3 font-semibold md:text-lg sm:text-sm'>تصفح جميع خدماتنا </p>
 <NavLink to='/services'><button  className='border-borderColor py-0.5 px-4 font-semibold  border-2  rounded'>
     اضغط هنا </button></NavLink> 
 </div>

 </div>
 </div>
 }
 
 <Testimonials lang={lang} />
 <Get lang={lang} />
 <Footer lang={lang} />
      <div className='text-center text-sm bg-white'>
        <p className='text-gray font-semibold'>Wolf Technology 2023 © All Rights Reserved.</p>
      </div>
      <TopPage />
    </div>
  )
}

export default Home