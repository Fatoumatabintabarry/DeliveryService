
import React from 'react'
import styles from '../style'
import '../index.css'
import GetEstimate from '../components/GetEstimate'
//Export them from index.js file inside components before importing them in this list 
import {Navbar, Hero, Testimonial, Footer} from '../components/index';

const home = () => (
    // 1rst div will wrap up our entire page 
<div className="w-full overflow-hidden ">

        {/* 2nd  div is navbar section . We are making a direct reference to the style.js file */}
        <div className={`${styles.paddingX} ${styles.flexCenter} bg-gradient-to-r from-fuchsia-600 to-purple-600`}>
          <div className={`${styles.boxWidth}`}>
          <Navbar />
         
          </div>
        </div>

        {/*3rd div is the hero section */}
        <div className={`bg-primary ${styles.flexStart} bg-gradient-to-r from-fuchsia-600 to-purple-600`}>
          <div className={`${styles.boxWidth}`}>
          <Hero />
          <GetEstimate />
        </div>
    </div>
    {/*4th div is for all different sections  */}
    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart} bg-purple-500`}>
          <div className={`${styles.boxWidth} bg-purple-500`}>
          <Footer />
           </div>
         </div>
    </div>
  );


export default home;