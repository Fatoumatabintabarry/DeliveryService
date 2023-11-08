
import React from 'react'
import styles from '../style'
import '../index.css'

//Export them from index.js file inside components before importing them in this list 
import {Navbar, Hero, Testimonial, Footer} from '../components/index';
import Navbar2 from '../components/navbar2';

const whyshiped = () => {
  return (
    <div className="  w-full overflow-hidden ">
      <div className={`${styles.paddingX} ${styles.flexCenter} bg-gradient-to-r from-violet-500 to-fuchsia-500`}>
          <div className={`${styles.boxWidth}`}>
          <Navbar2 />
          </div>
      </div>
       {/*4th div is for all different sections  */}
    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart} bg-purple-500`}>
          <div className={`${styles.boxWidth} bg-purple-500`}>
          <Footer />
           </div>
     </div>
    
      
  </div>
  )
}

export default whyshiped;