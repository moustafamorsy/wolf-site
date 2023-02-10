import React from 'react'
import Footer from '../component/footer'
import Get from '../component/getintouch'
import Navbar from '../component/navbar'
import TopPage from '../component/GoToTop'
import { NavLink } from 'react-router-dom'
import data from '../../data'
import Card from '../component/card'

function services({lang , language}) {

  const cards = data.map( item => <Card lang={lang} key={item.id} icon ={item.icon}  titleEN ={ item.titleEN}  desEN ={item.descriptionEN} titleAB ={item.titleAB}  desAB ={item.descriptionAB} /> )
  
  return (
    
    <div>
   
       <Navbar lang={lang} language={language}>
       <div className={lang ? '' : 'flex flex-col items-end text-right'}>
      <h1 className='mt-11 w-48 text-3xl font-semibold'>{lang ?' IT Services' : 'خدمات تكنولوجيا المعلومات'}</h1>
      <p className='my-5 md:w-80 sm:w-72 font-normal '>{lang ? "we offer technology solutions for each client to met your business goals. Contact us today to know how our services could be the right fit for your business." : 'نحن نقدم حلول تقنية لكل عميل لتحقيق أهداف عملك. اتصل بنا اليوم لتعرف كيف يمكن أن تكون خدماتنا مناسبة لعملك.'}</p>
      
     <NavLink to='/contact'> <button  className='border-borderColor py-1.5 px-3 font-semibold  border-2 mb-10 rounded'>
     {lang ? "Get in touch" : "تواصل معنا"} </button></NavLink>
      </div>
     </Navbar>
     <div className='bg-white text-center flex flex-col items-center p-10'>
      <p className='w-60 text-darkblue mb-5 font-semibold '>{lang ?' Custom IT solutions for your business' : 'حلول تكنولوجيا تناسب عملك الخاص'}</p>
      <p className='md:w-128 sm:96'>{lang ? "There’s a process involved in creating  your Technical Support solutions to make sure we meet your business goals. That process involves  getting to know your business, and what you want to accomplish then delivering the best solutions that fit your needs." : 'هناك عملية متضمنة في إنشاء حلول الدعم الفني للتأكد من أننا نلبي أهداف عملك. تتضمن هذه العملية التعرف على عملك ، وما تريد تحقيقه ، ثم تقديم أفضل الحلول التي تناسب احتياجاتك.'}</p>
     </div>
     <div id='services' className='bg-bg'>
     <div className='container pb-5'>
<h2 className='text-center text-xl text-white font-medium pt-5 pb-1.5 w-fit mx-auto   border-b-2'>Our Services</h2>
 <div className='flex flex-wrap lg:gap-x-20 md:gap-x-1 gap-y-5 mt-10 md:justify-between sm:justify-center  mb-10'>

{cards}

 </div>


 </div>
 </div>
      <Get  lang={lang} />
 <Footer  lang={lang} />
 <div className='text-center text-sm bg-white'>
        <p className='text-gray font-semibold'>Wolf Technology 2023 © All Rights Reserved.</p>
      </div>

      <TopPage />
      </div>
  )
}

export default services