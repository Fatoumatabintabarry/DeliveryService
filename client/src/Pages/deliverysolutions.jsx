import React from 'react'
import styles from '../style'
import '../index.css'

import {Navbar,Footer} from '../components/index';
import RequestDelivery from './RequestDelivery';
import Navbar2 from '../components/navbar2';
import MyDeliveries from '../components/MyDeliveries';

const deliverysolutions = () => {
  return (
    <div className="w-full overflow-hidden ">
        <div className={`${styles.paddingX} ${styles.flexCenter}  pt-20`}>
          <div className={`${styles.boxWidth}`}>
          <Navbar2 />
          </div>
       </div>

       <div className={`bg-primary ${styles.paddingX} ${styles.flexStart} bg-[#F1F2F7]`}>
        <div className={`${styles.boxWidth} `}>
          <RequestDelivery />
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart} bg-[#F1F2F7]`}>
        <div className={`${styles.boxWidth} `}>
          <MyDeliveries />
        </div>
      </div>


    
      <div className={` ${styles.paddingX} ${styles.flexStart} bg-[#5F54E3] `}>
          <div className={`${styles.boxWidth} bg-[#5F54E3] `}>
          <Footer />
           </div>
         </div>
  


  </div>
  )
}

export default deliverysolutions;