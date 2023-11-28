import React from 'react'
import styles from '../style'
import '../index.css'

import {Navbar,Footer} from '../components/index';
import RequestDelivery from './RequestDelivery';
import GetEstimate from '../components/GetEstimate';


const deliverysolutions = () => {
  return (
    <div className="w-full overflow-hidden ">
        <div className={`${styles.paddingX} ${styles.flexCenter}  pt-20`}>
          <div className={`${styles.boxWidth}`}>
          <Navbar />
          </div>
       </div>
       
       <div className={` ${styles.paddingY} ${styles.flexStart} bg-[#F4F5FA]`}>
          <div className={`${styles.boxWidth}`}>
            <GetEstimate />
          </div>
         </div>

       <div className={`${styles.paddingX} ${styles.flexStart} bg-[#F1F2F7]`}>
        <div className={`${styles.boxWidth} `}>
          <RequestDelivery />
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