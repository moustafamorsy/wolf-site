import React from 'react'
import Navbar from '../component/navbar'
import Footer from '../component/footer'
import Get from '../component/getintouch'
import TopPage from '../component/GoToTop'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHandshake, faGem , faLightbulb} from '@fortawesome/free-solid-svg-icons'


function about({lang , language}) {
  return (
    
    <div>
      <Navbar lang={lang} language={language}>
      <div className={lang ? '' : 'flex flex-col items-end text-right'}>
     <h1 className='mt-11 w-48 text-3xl font-semibold'>{lang ? 'Who we are' : 'من نحن'}</h1>
      <p className='my-5 md:w-80 sm:w-72'>{lang ? "IT driven business specializing in solutions, supply and support of computer equipment, software, cabling and other IT related functions." : 'أعمال تكنولوجيا المعلومات متخصصة في الحلول ، وتوريد ودعم أجهزة الكمبيوتر ، والبرمجيات ، والكابلات والوظائف الأخرى المتعلقة بتكنولوجيا المعلومات'}</p>
      
    <NavLink to='/contact'>  <button  className='border-borderColor py-1.5 px-3 font-semibold  border-2 mb-10 rounded'>
     {lang ? "Get in touch" : 'تواصل معنا'} </button></NavLink>
      </div>
     </Navbar>

{lang ?<div className='about  flex flex-col items-center pt-20'>
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
 :
 // arabic
 <div className=' about   flex flex-col items-center pt-20'>
<div className='container  flex justify-between items-center md:mb-40 sm:mb-10 md:flex-row sm:flex-col'>
  <div className='relative md:w-80 sm:w-72 md:h-80 sm:h-72 border-2 border-line'>
<img className=' absolute  md:w-80 sm:w-72 md:h-80 sm:h-72 left-5 top-3 ' src="./meeting.jpg" alt="close-up-businesspeople-working-with-document" />
</div>
  <div className=' lg:w-96 md:w-80 sm:w-96 md:ml-7 sm:ml-0'>
    <h2 className=' text-darkblue font-semibold mb-2 md:mt-0 sm:mt-10 text-xl  md:text-right sm:text-center '>مهمتنا هي المساعدة وحل مشاكل عملك</h2>
    <p className=' md:text-right sm:text-center w-full md:mx-0 sm:mx-auto text-sm '>نهدف إلى توفير حلول تقنية معلومات فعالة وذات صلة وموثوقة لعملائنا ، يتم تقديمها مع خدمة عملاء استثنائية وشفافية من البداية إلى النهاية.</p>
  </div>
</div>
<div className=' container  flex  justify-between items-center md:mb-40 sm:mb-20 md:flex-row-reverse sm:flex-col'>
<div className='relative md:w-80 sm:w-72 md:h-80 sm:h-72 border-2 border-line'>
<img className=' absolute  md:w-80 sm:w-72 md:h-80 sm:h-72 right-5 top-3 ' src="./anaylsis.jpg" alt="young-man-engineer-making-program-analyses" />
 </div>
  <div className='lg:w-96 md:w-80 sm:w-96 '>
  <h2 className='text-darkblue font-semibold mb-2 md:mt-0 sm:mt-10 md:text-xl sm:text-lg  md:text-right sm:text-center'>هدفنا هو تقديم خدمات من الدرجة الأولى لجميع عملائنا</h2>
    <p className='text-sm md:text-right sm:text-center w-full md:mx-0 sm:mx-auto text-sm'>نوفر لعملائنا الأدوات والتقنيات المناسبة لتسهيل إدارة أعمالهم. إنشاء وتحديث وتوحيد البنية التحتية وأنظمة المعلومات لعملائنا. تضييق الفجوات بين النظرية وبيئة التطبيق الفعلية </p>
  </div>
</div>
</div>


}


<div id='our-value' className='bg-bg '>
<h2 className='text-center pt-5 text-lg font-semibold text-white mb-5'>{lang ? "Our Values" : "القيم الخاصة بنا"}</h2>
<div className='container flex md:flex-row sm:flex-col text-center justify-between sm:items-center  '>
<div className='lg:w-72 md:w-52 sm:w-72 md:h-48 sm:h-40 p-2 bg-white rounded  md:mb-10 sm:mb-3'>
  <div className='flex justify-center'>
  <FontAwesomeIcon className='text-darkblue text-2xl' icon={faGem} />
  <h3 className='text-darkblue font-semibold ml-1'>{lang ? 'Passion' : 'شغف'}</h3>
  </div>
 
  <p className='md:w-48 sm:w-60 mx-auto text-sm mt-3' >{lang ? 'We’re passionate about our technology , clients, community, and each other.' : 'نحن متحمسون لتقنيتنا وعملائنا ومجتمعنا وبعضنا البعض'}</p>
</div>

<div className='lg:w-72 md:w-52 sm:w-72 md:h-48 sm:h-40 p-2 bg-white rounded  md:mb-10 sm:mb-3 '>
  <div className='flex justify-center'>
  <FontAwesomeIcon className='text-darkblue text-2xl' icon={faHandshake} />
  <h3 className='text-darkblue font-semibold ml-1'>{lang ? 'COMMITMENT' : 'التزام'}</h3>
  </div>
  <p className='md:w-48 sm:w-60 mx-auto text-sm mt-3'>{lang ? ' Our loyalty to our clients and each other is unimaginable. we are responsible for overseeing and protecting our clients' : 'ولاءنا لعملائنا وللبعض الآخر لا يمكن تصوره. نحن مسؤولون عن الإشراف على عملائنا وحمايتهم'}</p>
</div>

<div className='lg:w-72 md:w-52 sm:w-72 md:h-48 sm:h-40 p-2 bg-white rounded md:mb-10 sm:mb-5'>
<div className='flex justify-center'>
  <FontAwesomeIcon className='text-darkblue text-2xl' icon={faLightbulb} />
  <h3 className='text-darkblue font-semibold ml-1'>{lang ? 'INNOVATION' : 'ابتكار'}</h3>
  </div>
  <p className='md:w-48 sm:w-60 mx-auto text-sm mt-3'> {lang ? 'We always developing the best method As we strive to promote creative, open-minded thinking to provide our client with the best solutions' : 'نعمل دائمًا على تطوير أفضل طريقة حيث نسعى جاهدين لتعزيز التفكير الإبداعي المنفتح لتزويد عملائنا بأفضل الحلول'} 
</p>
</div>

</div>

</div>
      
      <Get lang={lang} />
 <Footer lang={lang} />
 <div className='text-center text-sm bg-white'>
        <p className='text-gray font-semibold'>Wolf Technology 2023 © All Rights Reserved.</p>
      </div>
      <TopPage />
      </div>
  )
}

export default about