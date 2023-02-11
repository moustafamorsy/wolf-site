import React from 'react'
import Navbar from '../component/navbar'
import Footer from '../component/footer'
import Get from '../component/getintouch'
import Form from '../component/form'
import TopPage from '../component/GoToTop'


function contact({lang , language}) {
  return (
  
    <div>
      <Navbar lang={lang} language={language}>
      <div className={lang ? '' : 'flex flex-col items-end text-right'}>
      <h1 className='mt-11 w-48 text-3xl font-semibold'>{lang ?'Get Started' : 'ابدا الان'}</h1>
      <p className='my-5 md:w-80 sm:w-72 font-normal mb-20 '>
{lang ? 'We specialize in IT support, backup, and custom solutions. If your goal is to find the best IT services for your business, do not worry, you are in the right place. Contact us we will do our best to provide you with everything your business need.' : 'نحن متخصصون في دعم تكنولوجيا المعلومات والنسخ الاحتياطي والحلول المخصصة. إذا كان هدفك هو العثور على أفضل خدمات تكنولوجيا المعلومات لعملك ، فلا تقلق ، فقد وصلت إلى المكان الصحيح. اتصل بنا وسنبذل قصارى جهدنا لتزويدك بكل ما تحتاجه عملك'}</p>
     </div>
     </Navbar>

     <div className='contact'>
     <div className='text-center pt-10'>
      <h2 className='text-darkblue font-semibold text-xl' >{lang ?'Get in Touch!' : 'تواصل معنا'}</h2>
      <p className='text-darkblue text-sm'>{lang ? 'we will reach out to you soon.' : 'سنتواصل معك فى اقرب وقت ممكن'}</p>
     </div>
     <div className=' flex md:flex-row sm:flex-col md:justify-center  sm:items-center py-20'>
      <Form lang={lang} />
    { lang ? <div className='w-80 h-108 bg-bg flex flex-col items-center p-7 md:m-5 sm:m-0 text-white'>
        <h2 className='w-44 text-center text-lg'>Have you ever asked yourself ...?</h2>
        <div className=' my-10 w-60 text-sm flex flex-col items-center'>
        <p>how can i secure my Network and Business </p>
        <p className='my-2'>how can i optimize my Business Growth and Development</p>
        <p>what is the best technology to use for my business</p>
        <p className='mt-2'>trying to make the best investment to save money and time</p>
        </div>
        <h3 className='w-60 text-center text-sm'>We can help you by managing your business IT needs so you can focus on your business.</h3>
      </div> 
      :

       <div className='w-80 h-108 bg-bg flex flex-col items-center p-7 md:m-5 sm:m-0 text-white'>
       <h2 className='w-44 text-center text-lg'>هل تسالت من قبل ...؟</h2>
       <div className=' my-10 w-60 text-sm flex flex-col items-center'>
       <p>كيف يمكنني تأمين شبكتي وعملي </p>
       <p className='my-2'>كيف يمكنني تحسين نمو عملي وتطوره</p>
       <p>ما هي أفضل التقنيات التى تناسب  عملي</p>
       <p className='mt-2'>محاوله ايجاد افضل الطرق لتوفير الوقت و المال</p>
       </div>
       <h3 className='w-60 text-center text-sm'>يمكننا مساعدتك من خلال التفكير غير الضروري حتى تتمكن من التركيز على عملك</h3>
     </div>
      }
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

export default contact