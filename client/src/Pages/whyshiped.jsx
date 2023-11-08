
import React from 'react'
import styles from '../style'
import '../index.css'

//Export them from index.js file inside components before importing them in this list 
import {Navbar, Hero, Testimonial, Footer} from '../components/index';
import Navbar2 from '../components/navbar2';
import Features from '../components/Features';

const whyshiped = () => {
  return (
    <div className="  w-full overflow-hidden ">
      <div className={`${styles.paddingX} ${styles.flexCenter} bg-gradient-to-r from-violet-500 to-fuchsia-500`}>
          <div className={`${styles.boxWidth}`}>
          <Navbar2 />
          </div>
      </div>
      
        

       {/*3rd div is the testimonial section section */}
       <div className={`bg-primary ${styles.flexStart} bg-white `}>
          <div className={`${styles.boxWidth}`}>
          <Testimonial />
         </div>
        </div>


       {/*4th div is for all different sections  */}
       <div className={` ${styles.paddingX} ${styles.flexStart} bg-[#5F54E3] `}>
          <div className={`${styles.boxWidth} bg-[#5F54E3] `}>
          <Footer />
           </div>
         </div>
    
      
  </div>
  )
}

export default whyshiped;