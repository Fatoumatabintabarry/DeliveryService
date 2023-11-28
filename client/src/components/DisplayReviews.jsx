import React from 'react'
import CreateReview from './CreateReview'
const DisplayReviews = ({reviews}) => {
  return (
    
  <div className="w-full items-center text-white mr-4 ">

<h2 className=" mr-4 text-gray-800 text-3xl font-semibold  p-4">Reviews!</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 p-4
      "> 
     
    {reviews.map((review, rIndex) => {
      return (
        <div key={rIndex} className="rounded-lg shadow-xl 
        bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 
        dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 
            dark:shadow-lg dark:shadow-purple-800/80 p-4 text-black border bg-[#F4F5FA] ">
          
  
          <div className="flex justify-between
          ">
              <div className="flex gap-1 text-orange-300">
                  {[...Array(review.rating)].map((_, sIndex) => (
                      <svg key={sIndex} className="w-6 h-6 text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                  ))}
              </div>
  
              <div className="flex gap-2">
                  <span>{review.reviewerName}</span>
              </div>
              
          </div>
          <p>{review.description}</p>
        </div>
      );
    })}
  </div>
  </div>
  
  );
}

export default DisplayReviews