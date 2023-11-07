import React from 'react'
import styles from '../style';
import { lady } from '../assets';
import GetStarted from './GetStarted';
const Hero = () => {
  return(
  <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY} `}>
    <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 flex flex-col`}>
      
      <div className="flex flex-row justify-between items-center w-full"> 
       <h1 className="flex-1  font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px] ">
        Yep, you can <br className="sm:block hidden"/>{""}
        <span className="text-gradient">Deliver 
        </span>{""}
       </h1>

       {/* Get started circle  <GetStarted /> add this in the middle when you ready */}
       <div className="ss:flex hidden md:mr-4 mr-0 ">
        
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
    
    <div className='flex flex-col  grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-2'>
      <img src={lady} alt="girlinhero"className="w-[600px] relative " 
      />
     </div>
    
    
  </section>
  );
}

export default Hero;
