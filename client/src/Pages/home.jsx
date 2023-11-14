
import React from 'react'
import styles from '../style'
import '../index.css'
import GetEstimate from '../components/GetEstimate'
import {Navbar, Hero, Testimonial, Footer} from '../components/index';
import Features from '../components/Features';
import DriverPortal from './DriverPortal';

const home = () => (
    // 1rst div will wrap up our entire page 
<div className="w-full overflow-hidden ">

        {/* 2nd  div is navbar section . We are making a direct reference to the style.js file */}
        <div className={`bg-primary${styles.paddingX} ${styles.flexCenter} bg-[#FCF9FC]`}>
          <div className={`${styles.boxWidth}`}>
          <Navbar />
          </div>
        </div>

        {/*3rd div is the hero section */}
        <div className={`bg-primary ${styles.flexStart} bg-white `}>
          <div className={`${styles.boxWidth}`}>
          <Hero />
         </div>
        </div>
        

        <div className={` ${styles.paddingY} ${styles.flexStart} bg-[#F4F5FA]`}>
          <div className={`${styles.boxWidth}`}>
            <GetEstimate />
          </div>
         </div>

         <div className={` ${styles.paddingY} ${styles.flexStart} bg-[#F4F5FA]`}>
          <div className={`${styles.boxWidth}`}>
            <DriverPortal />
          </div>
         </div>
         
          {/*3rd div is the hero section */}
        <div className={`bg-primary ${styles.flexStart}  `}>
          <div className={`${styles.boxWidth}`}>
          <Features />
         </div>
        </div>

        /* 
    {/*4th div is for all different sections  */}
    <div className={` ${styles.paddingX} ${styles.flexStart} bg-[#5F54E3] `}>
          <div className={`${styles.boxWidth} bg-[#5F54E3] `}>
          <Footer />
           </div>
         </div>
    </div>
  );


export default home;