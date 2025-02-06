import { useState } from "react";
import Logo from "../../assets/Logo.svg";
import {Link} from 'react-router-dom'



function Navbar() {
  const [isOpen, setIsOpen] = useState(false); 
  return (
    <nav className="bg-white border-white dark:bg-white pl-10 px-10 sticky top-0 z-50 ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-3">
        <img
          src={Logo}
          alt="Logo"
          className="h-14"
        />

        {/* Hamburger Button for Mobile View */}
        <div
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
          className="md:hidden"
        >
          <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 18L20 18" stroke="#000" strokeWidth="2" strokeLinecap="round" />
            <path d="M4 12L20 12" stroke="#000" strokeWidth="2" strokeLinecap="round" />
            <path d="M4 6L20 6" stroke="#000" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>


        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-16 left-0 w-full bg-white shadow-md md:hidden p-5">
            <ul className="flex flex-col space-y-4">
              <li><Link to="/" className="block text-black hover:text-blue-500">Home</Link></li>
              <li><Link to="/About" className="block text-black hover:text-blue-500">About Us</Link></li>
              <li><Link to="/OurSolution" className="block text-black hover:text-blue-500">Tradebooths</Link></li>
              <li><Link to="#" className="block text-black hover:text-blue-500">Contact Us</Link></li>
              <li>
                <button className="w-40  bg-blue-900 text-white sm:hover:bg-blue-300  py-2 rounded-3xl sm:hover:underline ">Join</button>
              </li>
            </ul>
          </div>
        )}
        {/* dekstop view */}


        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-semibold flex flex-col p-4 md:p-0 mt-4 border border-white rounded-lg bg-white md:flex-row items-center  md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-white md:dark:bg-white dark:border-white">
            <li>
              <Link to="/"
                className="block py-2 px-3 text-black rounded  md:hover:underline md:border-0 md:hover:text-blue-500 md:p-0 dark:text-black md:dark:hover:text-blue-500 dark:hover:underline dark:hover:text-blue-500 md:dark:hover:underline decoration-blue-800"
                aria-current="page"
              >
                HOME
              </Link>
            </li>
            <li>
              <Link to="/About"
                className="block py-2 px-3 text-black rounded  md:hover:underline md:border-0 md:hover:text-blue-500 md:p-0 dark:text-black md:dark:hover:text-blue-500 dark:hover:underline dark:hover:text-blue-500 md:dark:hover:underline decoration-blue-800"
              >
                ABOUT US
              </Link>
            </li>
            <li>
              <Link to="/OurSolution"
                className="block py-2 px-3 text-black rounded  md:hover:underline md:border-0 md:hover:text-blue-500 md:p-0 dark:text-black md:dark:hover:text-blue-500 dark:hover:underline dark:hover:text-blue-500 md:dark:hover:underline decoration-blue-800"
              >
                OUR SOLUTIONS
              </Link>
            </li>
            <li>
              <Link to   ="/Contactus"
                className="block py-2 px-3 text-black rounded  md:hover:underline md:border-0 md:hover:text-blue-500 md:p-0 dark:text-black md:dark:hover:text-blue-500 dark:hover:underline dark:hover:text-blue-500 md:dark:hover:underline decoration-blue-800"
              >
                CONTACT US
              </Link>
            </li>
            <li>
              <button
                type="button"
                className="text-white bg-blue-950 font-medium rounded-3xl text-sm px-6 py-2 text-center lg:hover:underline   md:border-blue-500 md:hover:border-blue-700 lg:hover:bg-blue-800   "
              >
                Join
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
