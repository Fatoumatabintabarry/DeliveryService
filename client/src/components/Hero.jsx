import React from 'react'
import styles from '../style';
import {discount, lady, robot, smilinglady } from '../assets';
import GetStarted from './GetStarted';
const Hero = () => {
  return(
  <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
    <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 flex flex-col `}>
    <section className="flex flex-row justify-between items-center w-full">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-6">
        <h3 className="flex-1  font-poppins font-semibold ss:text-[72px] text-[52px]  ss:leading-[100px] leading-[75px] ">
        Local delivery  <br className="sm:block hidden"/>{""}
        <span className="text-gradient">made 
        </span>{""}
       </h3>
        
      
      <h3  className="flex-1 font-poppins font-semibold ss:text-[68px] 
      text-[52px]  ss:leading-[100px] leading-[75px] w-full ">
        simple.
      </h3>
            
          <p className="max-w-2xl mb-6   lg:mb-8 md:text-lg lg:text-xl ">
       Shiped is a crowdsourced delivery platform that
       enables urgent,same-day and local next-day delivery of just about anything,
        anywhere in Canada.</p>
          <a href="#" className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
            Get started
            <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
          </a>
          <a href="#" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
            Estimate
          </a>
        </div>
        <div className=" lg:mt-0 lg:col-span-5 lg:flex">
          <img src={lady} alt="mockup" />
        </div>
      </div>
    </section>
     </div>
    
    
  </section>
  );
}

export default Hero;

/* I ll use this section to entice chauffeurs to enroll 
<div className="flex flex-row items-center py-[6px] px-4 
      bg-discount-gradient rounded-[10px] mb-2">
        <img src={discount} alt="dicount"
        className="w-[32px] h-[32px]"/>
          <p className={`${styles.paragragh} ml-2`}>
              <span className="text-white">20%</span>
              Discount for {""}
              <span className='text-white'>1 Month</span>
              Account
          </p>
      </div> 

      */