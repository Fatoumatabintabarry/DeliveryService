import React from 'react'
import styles from '../style'
import '../index.css'

import {Navbar,Footer} from '../components/index';
import RequestDelivery from './RequestDelivery';
import Navbar2 from '../components/navbar2';

const deliverysolutions = () => {
  return (
    <div className="w-full overflow-hidden ">
        <div className={`${styles.paddingX} ${styles.flexCenter}  pt-20`}>
          <div className={`${styles.boxWidth}`}>
          <Navbar2 />
          </div>
       </div>

       <div className={`bg-primary ${styles.paddingX} ${styles.flexStart} bg-purple-100`}>
        <div className={`${styles.boxWidth} `}>
          <RequestDelivery />
        </div>
      </div>


      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart} bg-purple-500`}>
        <div className={`${styles.boxWidth} bg-purple-500`}>
          <Footer />
        </div>
      </div>


  </div>
  )
}

export default deliverysolutions;