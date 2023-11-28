import React, { useState } from "react";
import { navLinks } from "../constants";
import { close, logoBlack, menu } from "../assets";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const [toggle, setToggle] = useState(false); // Define toggle state

  return (
    <nav className=" fixed bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Logo and title */}
        <a href="/" className="flex items-center">
          <img src={logoBlack} className="h-10 mr-3" alt="Flowbite Logo" />
        </a>

        {/* Get started button */}
        <div className="flex md:order-2">
          <a
            href="/Signup"
            className="inline-flex items-center justify-center px-5 py-3 text-base
           font-medium text-center text-gray-900 border border-gray-300 rounded-lg 
           hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white 
           dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800 outline outline-offset-2 
           outline-blue-500"
            id="loginButton"
          >
            Sign up
          </a>

          {/* Hamburger button */}
          <button
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm
           text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 
           focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            onClick={() => setToggle((prev) => !prev)}
            aria-controls="navbar-sticky"
            aria-expanded={isNavExpanded}
          >
            <span className="sr-only">Open main menu</span>
            <img
              src={toggle ? close : menu}
              alt="menu"
              className="w-[28px] h-[28px] object-contain"
            />
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 bg-black-gradient absolute top-20
         right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex flex-col justify-end items-center flex-1">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-[16px] ${
                  index === navLinks.length - 1 ? "mr-0" : "mb-4"
                } text-white`}
              >
                <Link to={nav.id}>{nav.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Navbar links */}
        <div
          className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
            isNavExpanded ? "block" : "hidden"
          }`}
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-[16px] ${
                  index === navLinks.length - 1 ? "mr-0" : "mr-10"
                } text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700`}
              >
                <Link to={nav.id}>{nav.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
