import React from 'react'
import styles from '../style';
import {discount, robot } from '../assets';
import GetStarted from './GetStarted';
const Hero = () => {
  return(
  <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY} `}>
    <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 bg-gradient-to-r from-violet-500 to-fuchsia-500`}>
      
      <div className="flex flex-row justify-between
       items-center w-full"> 
       <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px] ">
        Yep, you can <br className="sm:block hidden"/>{""}
        <span className="text-gradient">Deliver 
        </span>{""}
       </h1>

       {/* Get started circle*/}
       <div className="ss:flex hidden md:mr-4 mr-0 ">
        <GetStarted />
       </div>
      </div>
      <h1  className="flex-1 font-poppins font-semibold ss:text-[68px] 
      text-[52px] text-white ss:leading-[100px] leading-[75px] w-full ">
        that.
      </h1>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`} >
      Local delivery made simple ! Shiped is a crowdsourced delivery platform that
       enables urgent,same-day and local next-day delivery of just about anything,
        anywhere in Canada.
      </p>
    </div>
    
    <div>
      <img src={discount} alt="billing"
      className="w-[100%] h-[100%] relative  z-[5]" 
      />
      <div className="z-[0] w-[40%] h-[35%] top-0 pink__gradient"></div>
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