import React from 'react'
import styles from '../style'
import '../index.css'

import {Navbar,Footer} from '../components/index';
import RequestDelivery from './RequestDelivery';

const deliverysolutions = () => {
  return (
    <div className="w-full overflow-hidden ">
        <div className={`${styles.paddingX} ${styles.flexCenter} bg-gradient-to-r from-violet-500 to-fuchsia-500`}>
          <div className={`${styles.boxWidth}`}>
          <Navbar />
          </div>
       </div>

       <div className={`bg-primary ${styles.paddingX} ${styles.flexStart} bg-purple-500`}>
        <div className={`${styles.boxWidth} bg-purple-500`}>
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