import { useState } from "react"
import {close, logo, menu } from '../assets';
import { navLinks } from "../constants";
import { Link } from 'react-router-dom';
import "../index.css"


/* all the text in class name you can search it on tailwind documentation */
const Navbar = () => {

  const [toggle, setToggle] = useState (false);
  return (
    //This our mobile nav bar 
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <img src={logo} alt="logo" className="w-[124px] h-[32px]"/>

        <ul className="list-none sm:flex hidden justify-end items-center flex-1">
          {navLinks.map((nav, index)=> (
          
           <li 
              key={nav.id}
              className={`font-poppins font-normal cursor-pointer 
              text-[16px] ${index===navLinks.length-1 ? `mr-0`: `mr-10`} text-white`}
             >
               <Link to={nav.id}> 
                {nav.title}
                </Link>

            </li>
          ))}
        </ul>
        
        <li className="nav-li">
    <a href="/signup" className="nav-a">
        <button 
            style={{
                backgroundColor: '#0',
                borderRadius: '10px',
                color: '#fff',
                padding: '8px',
                boxShadow: '0 0 30px , 0 0 30px , 0 0 10px',
                textDecoration: "none"
            }} 
            id="loginButton">
            Sign up 
        </button>
    </a>
</li>

        
          <div className = "sm:hidden flex flex-1 justify-end items-center">
            <img 
            src={toggle? close : menu}
            alt="menu"
            className="w-[28px] h-[28px]
            object-contain"
            onClick={()=> setToggle((prev)=> !prev)}
             />
            <div
            className={`${toggle ?'flex':'hidden'} p-6 bg-black-gradient absolute top-20 right-0 
            mx-4 my-2 min-w [140px] rounded-xl sidebar`}>
              
            <ul className="list-none flex flex-col justify-end items-center flex-1">
              {navLinks.map((nav, index)=> (
                <li 
                  key={nav.id}
                  className={`font-poppins font-normal cursor-pointer 
                  text-[16px] ${index===navLinks.length-1 ? `mr-0`: `mb-4`} text-white`}
                >
                   <Link to={nav.id}> 
                      {nav.title}
                   </Link>
                </li>
              ))}
        </ul>
              

            </div>
          </div>    

    </nav>
    
  )
}

export default Navbar;