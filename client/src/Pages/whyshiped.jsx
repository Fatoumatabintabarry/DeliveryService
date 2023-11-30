
import React from 'react'
import styles from '../style'
import '../index.css'
import {Navbar,Testimonial, Footer} from '../components/index';
import CommunicationForm from '../components/CommunicationForm';
import Aboutus from '../components/Aboutus';
import ChoicePageHeader from '../components/ChoicePageHeader';
import DisplayReviews from '../components/DisplayReviews';


const whyshiped = () => {
   // Assuming reviews are fetched or managed globally
   const reviews = []; // This should be replaced with actual state management logic
  return (
    
    <div className="  w-full overflow-hidden ">
      <div className={`${styles.paddingX} ${styles.flexCenter} `}>
          <div className={`${styles.boxWidth}`}>
          <Navbar />
          </div>
      </div>

      <div className={`${styles.paddingX} ${styles.flexCenter} `}>
          
          <Aboutus />
        
        </div>

   


      <div className={`${styles.paddingX} ${styles.flexCenter} bg-[#F1F2F7] `}>
          <div className={`${styles.boxWidth}`}>
          <ChoicePageHeader
         heading="Send us an email "
         paragraph="Avg 1hr response time during the business day?"
         linkName=" Signup"
        
        />
          <CommunicationForm />
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