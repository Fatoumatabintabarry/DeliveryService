
import React from 'react'
import styles from '../style'
import '../index.css'
import GetEstimate from '../components/GetEstimate'
//Export them from index.js file inside components before importing them in this list 
import {Navbar, Hero, Testimonial, Footer} from '../components/index';
import Navbar2 from '../components/navbar2';
import Features from '../components/Features';

const home = () => (
    // 1rst div will wrap up our entire page 
<div className="w-full overflow-hidden ">

        {/* 2nd  div is navbar section . We are making a direct reference to the style.js file */}
        <div className={`bg-primary${styles.paddingX} ${styles.flexCenter} bg-[#FCF9FC]`}>
          <div className={`${styles.boxWidth}`}>
          <Navbar2 />
          </div>
        </div>

        {/*3rd div is the hero section */}
        <div className={`bg-primary ${styles.flexStart} bg-white `}>
          <div className={`${styles.boxWidth}`}>
          <Hero />
         </div>
        </div>

        <div className={`bg-primary ${styles.paddingY} ${styles.flexStart} login-background  `}>
          <div className={`${styles.boxWidth}`}>
            <GetEstimate />
          </div>
         </div>
          {/*3rd div is the hero section */}
        <div className={`bg-primary ${styles.flexStart} bg-white `}>
          <div className={`${styles.boxWidth}`}>
          <Features />
         </div>
        </div>

         
    {/*4th div is for all different sections  */}
    <div className={` ${styles.paddingX} ${styles.flexStart} bg-[#5F54E3] `}>
          <div className={`${styles.boxWidth} bg-[#5F54E3] `}>
          <Footer />
           </div>
         </div>
    </div>
  );


export default home;