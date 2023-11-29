
import React from 'react'
import { useState, useEffect } from 'react'

import styles from '../style'
import '../index.css'
import GetEstimate from '../components/GetEstimate'
import {Navbar, Hero, Testimonial, Footer} from '../components/index';
import Features from '../components/Features';
import DriverPortal from './DriverPortal';
import CreateReview from '../components/CreateReview';
import DisplayReviews from '../components/DisplayReviews';

const home = () => {
  const [reviews, setReviews] = useState([]);

  // Function to fetch reviews from the database
  const fetchReviews = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/reviews');
      if (response.ok) {
        const data = await response.json();
        setReviews(data);
      } else {
        console.error('Failed to fetch reviews');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  // Use useEffect to fetch reviews when the component mounts
  useEffect(() => {
    fetchReviews();
  }, []);

  // Function to handle review submission
  const handleReviewSubmit = async (newReview) => {
    try {
      const response = await fetch('http://localhost:3000/api/reviews', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newReview)
      });
      if (response.ok) {
        // Fetch all reviews again to refresh the list
        fetchReviews();
      } else {
        console.error('Failed to submit review');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };


    
    return(

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

        <div className={` ${styles.flexStart} `}>
          <div className={`${styles.boxWidth}`}>
          <CreateReview onReviewSubmit={handleReviewSubmit} />
          <DisplayReviews reviews={reviews}  />
          
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

}

export default home;