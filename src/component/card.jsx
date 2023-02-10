import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function card({lang , icon , titleEN , desEN ,titleAB , desAB}) {

  return (
    
<>
   { lang ? <div className='bg-white rounded md:w-60  pb-10 p-3 sm:w-80 md:h-80 sm:h-60 sm:mr-1'>

    <FontAwesomeIcon className='text-darkblue text-4xl' icon={icon} />
      <h3 className='my-1 font-semibold text-darkblue'>{titleEN}</h3>
      <p className='md:w-52 sm:w-86 text-sm'>{desEN} </p> 

      </div>
       :
       <div className=' bg-white text-right rounded md:w-60  pb-10 p-3 sm:w-80 md:h-80 sm:h-60 sm:mr-1'>
       <FontAwesomeIcon className='text-darkblue text-4xl' icon={icon} />
      <h3 className='  my-1 font-semibold text-darkblue'>{titleAB}</h3>
      <p className=' ml-auto md:w-52 sm:w-86 text-sm'>{desAB} </p> 

      </div>

      }

      </> 
    
    
   
  )
}

export default card