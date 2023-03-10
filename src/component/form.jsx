import React from 'react'

function form({lang}) {
  return (
    <>
   {lang ? <div className='form sm:mb-10 md:mb-0 text-darkblue'>
        <p className='text-sm'>contact</p>
        <form className='border-2 border-line  flex flex-col  w-80 h-108 py-5 ' action="">
         <div className='flex  justify-evenly'>
                <div>
                <label className='block text-sm mb-1' htmlFor="firstname">First name</label>
                <input className='w-32 border-2 border-line' type='text' name='firstname' placeholder='Enter Firstname' />
                </div>
                <div>
                <label className='block text-sm mb-1' htmlFor="lastname">Last name</label>
                <input className='w-32 border-2 border-line' type='text' name='lastname' placeholder='Enter Lastname' />
                </div>
                </div>
                <div className='flex  justify-evenly mt-10'>
                <div >
                <label className='block text-sm mb-1' htmlFor="company">Company name</label>
                <input className='w-32 border-2 border-line' type='text' name='company' placeholder='Compnay Name' />
                </div>
                <div>
                <label className='block text-sm mb-1' htmlFor="email">Email</label>
                <input className='w-32 border-2 border-line' type='email' name='email' placeholder='Enter Email' />
                </div>
              
                </div>
                <div className=' px-5 mt-10'>
                <label className='block text-sm mb-1' htmlFor="text">How can we help You!</label>
                <textarea className='border-2 border-line' name='text' rows="5" cols="27"></textarea>
                </div>
                <button className='text-left w-fit ml-5 mt-5 px-3 py-0.5 border-2 border-line'>Submit</button>
        </form>
    </div> : 

<div className='form sm:mb-10 md:mb-0 text-darkblue'>
<p className='text-sm text-right'>تواصل</p>
<form className='border-2 border-line  flex flex-col  w-80 h-108 py-5 ' action="">
 <div className='flex flex-row-reverse text-right  justify-evenly'>
        <div>
        <label className='block text-sm mb-1' htmlFor="firstname">الاسم الاول</label>
        <input className='w-32 border-2 border-line' type='text' name='firstname' placeholder='ادخل الاسم الاول' />
        </div>
        <div>
        <label className='block text-sm mb-1' htmlFor="lastname">الاسم الثانى</label>
        <input className='w-32 border-2 border-line' type='text' name='lastname' placeholder='ادخل الاسم الثانى' />
        </div>
        </div>
        <div className='flex text-right justify-evenly mt-10'>
        <div >
        <label className='block text-sm mb-1' htmlFor="company">اسم الشركة</label>
        <input className='w-32 border-2 border-line' type='text' name='company' placeholder='اسم الشركة' />
        </div>
        <div>
        <label className='block text-sm mb-1' htmlFor="email">الايميل</label>
        <input className='w-32 border-2 border-line' type='email' name='email' placeholder='ادخل الايميل' />
        </div>
      
        </div>
        <div className=' px-5 mt-10 text-right'>
        <label className='block text-sm mb-1' htmlFor="text">! كيف يمكننا مساعدتك  </label>
        <textarea className='border-2 border-line' name='text' rows="5" cols="27"></textarea>
        </div>
        <button className='text-left  w-fit ml-60 mt-5 px-3 py-0.5 border-2 border-line'>ارسال</button>
</form>
</div>
    
    
    }
    </>
  )
}

export default form