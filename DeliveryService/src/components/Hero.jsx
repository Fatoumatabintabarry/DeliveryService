import React from 'react'
import styles from '../style';
import '../index.css';
import {discount, lady, robot, smilinglady } from '../assets';
import GetStarted from './GetStarted';
const Hero = () => {
  return(
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
    <div className="flex-1 flex flex-col xl:px-0 sm:px-16 px-6">
      {/* Title and Subtitle */}
      <h2 className="font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]">
        Yep, you can <br className="sm:block hidden" />
        <span className="text-gradient">Deliver</span>
      </h2>
      <h2 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px]">
        that.
      </h2>
  
      {/* Paragraph */}
      <p className={`${styles.paragraph} `}>
        Local delivery made simple! Shiped is a crowdsourced delivery platform that
        enables urgent, same-day and local next-day delivery of just about anything,
        anywhere in Canada.
      </p>
    </div>
  
    <div className="flex-1 flex justify-center items-center">
      {/* Image */}
      <img src={lady} alt="girlinhero" className="w-full h-auto max-w-[500px] object-cover" />
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