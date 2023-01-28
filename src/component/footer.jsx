import React from 'react'
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot , faPhone } from '@fortawesome/free-solid-svg-icons'
import { faSquareFacebook , faLinkedin} from '@fortawesome/free-brands-svg-icons'
function footer() {
  const activeLink = 'text-darkblue'
  return (
    <div className='bg-bg flex justify-evenly items-start text-white pt-5'>

      <div className='mb-10'>
        <img className="w-36" src="./LOGO t.png" alt="wolf techonolgy logo" />
        <div className='flex items-center'>
        <FontAwesomeIcon className='mr-2'  icon={faLocationDot} />
        <p className='w-32 text-center my-4'>13 .Lorem ipsum,  Lorem ipsum</p>
        </div>
        <div className='flex items-center'>
        <FontAwesomeIcon className='mr-2'   icon={faPhone} />
        <p className='text-center'>
        +2 01064632164
        <br></br>
        +97188951177
        </p>
        </div>
      </div>
      <div className='mt-10'>
        <h2 className='line font-semibold'>Company</h2>
        
        <div>
        <h3 className="font-regular my-1">
            {" "}
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? activeLink : undefined
              }
            >
              {" "}
              Home{" "}
            </NavLink>{" "}
          </h3 >
          <h3 className="font-regular ">
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? activeLink : undefined
              }
            >
              {" "}
              About Us{" "}
            </NavLink>
          </h3>
          <h3 className="font-regular my-1">
            <NavLink
              to="/services"
              className={({ isActive }) =>
                isActive ? activeLink : undefined
              }
            >
              {" "}
             Our Services{" "}
            </NavLink>
          </h3>
          <h3 className="font-regular ">
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? activeLink : undefined
              }
            >
              {" "}
              Contact{" "}
            </NavLink>
          </h3>
        </div>
      </div>
      <div className='mt-10'>
        <h2 className='line font-semibold'>Social Media</h2>
     <a href="https://www.facebook.com/WolfTechnologyCompany" target='_blank'> <FontAwesomeIcon className='mr-2 hover:text-darkblue mt-2 text-2xl'   icon={faSquareFacebook} /></a>  
      <a href="https://www.linkedin.com/in/wolf-technology-435232256" target='_blank'><FontAwesomeIcon className='hover:text-darkblue mt-2 text-2xl'   icon={faLinkedin} /></a>  
      </div>
   
    </div>
  )
}

export default footer