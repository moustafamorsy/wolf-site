import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars , faX} from '@fortawesome/free-solid-svg-icons'

function navbar({ children }) {
 const [isOpen , setIsOpen] = useState(false);

  const activeLink = 'text-darkblue'
function openMenu() {
  setIsOpen(prevIsOpen => !prevIsOpen)
}
  return (
    <header className="header">
    <div id="content-container" className="container ">
        <div id="button-container" className="text-end relative md:flex sm:hidden">
        <NavLink to='/contact'> <button className="border-2 border-borderColor w-fit text-center rounded font-semibold text-xs py-2.5 px-5  absolute top-6 right-0">
         FREE CONSULTATION
          </button></NavLink> 
        </div>
        <nav className="flex justify-between items-center mt-9 md:flex sm:hidden">
          <h3 className="font-medium">
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
          <h3 className="font-medium ">
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
          <img className="w-36" src="./LOGO t.png" alt="wolf-techonolgy" />
          <h3 className="font-medium ">
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
          <h3 className="font-medium ">
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
        </nav> 

        <nav className="flex justify-between items-center mt-9 md:hidden sm:flex">
        <img className="w-36" src="./LOGO t.png" alt="wolf-techonolgy" />
        <FontAwesomeIcon onClick={openMenu} className='text-white text-3xl cursor-pointer' icon={faBars} />
        </nav>

     
        {children}
      </div>


      {isOpen && <div className="mini-nav text-black p-5 md:hidden sm:visible">
      <FontAwesomeIcon onClick={openMenu} className='text-black text-1xl cursor-pointer absolute right-5' icon={faX} />
      <h3 className="font-medium mb-3 mt-10">
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
          <h3 className="font-medium mb-3">
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
          <h3 className="font-medium mb-3">
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
          <h3 className="font-medium mb-3">
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
      </div>}
        
    </header>
  );
}

export default navbar;
