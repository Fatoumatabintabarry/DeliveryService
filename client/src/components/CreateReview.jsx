import React from 'react'
import { useState } from 'react'

function CreateReview ({onReviewSubmit }) {
    const [clicked, setClicked] = useState(false);
    const [stars, setStars] = useState(1);
    const [review, setReview] = useState("");
   

   
    const onMouseOver = (rating) => {
        if (clicked) return;

        // Then highlight the stars up to the rating
        [...Array(rating)].forEach((x, i) => {
          document.querySelector(`#star-${i + 1}`).classList.replace("text-grey-500", "text-yellow-500");
        });
      };
    
    const onMouseOut = (rating) => {

        if (clicked) return;
       
          [...Array(rating)].forEach((x, i) => {
            document.querySelector(`#star-${i + 1}`).classList.replace("text-yellow-500", "text-grey-500");
          });
        };
          
    

    const onClick = (rating) => {

        setClicked(true);
        setStars(rating);
    //reset 
  
      [...Array(rating)].forEach((x, i) => {
        document.querySelector(`#star-${i + 1}`).classList.replace("text-yellow-500", "text-grey-500");
      });
        // Then highlight the stars up to the rating
        [...Array(rating)].forEach((x, i) => {
            document.querySelector(`#star-${i + 1}`).classList.replace("text-grey-500", "text-yellow-500");
          });

    };
    const resetForm = () => {
        // No need to prevent default since we're not submitting a form.
        
        // Reset stars
        [...Array(5)].forEach((_, i) => {
          document.querySelector(`#star-${i + 1}`).classList.replace("text-yellow-500", "text-grey-500");
        });
      
        // Reset state
        setReview("");
        setStars(1);
        setClicked(false);
      };
      
    const submitReview = (e) => {
        e.preventDefault();
        const newReview = {
         rating: stars,
        description: review,
    
  };

  onReviewSubmit(newReview); 
  resetForm(); // Call without passing the event 'e'
};

  
  return (
 
<div className="min-h-screen bg-gray-300 py-6 flex flex-col justify-center sm:py-12">
  <div className="py-3 sm:max-w-xl sm:mx-auto">
    
    <div className="bg-white min-w-1xl flex flex-col rounded-xl shadow-lg">
      <div className="px-12 py-5">
        <h2 className="text-gray-800 text-3xl font-semibold">Your opinion matters to us!</h2>
      </div>
      <div className="bg-gray-200 w-full flex flex-col items-center">
                <div className="flex flex-col items-center py-6 space-y-3">
                    <span className="text-lg text-gray-800">How was the service ?</span>
                {/*This is the row for the starts */}

                        <div className="flex space-x-3">
                            {[...Array(5)].map((x,i)=>{
                                
                                return<svg  className="w-12 h-12 text-grey-500" 
                                key={i}
                                id={`star-${i + 1}`}
                                onMouseOver={(e) => onMouseOver(i + 1)}
                                onMouseOut={(e) => onMouseOut(i + 1)}
                                onClick={(e) => onClick(i + 1)}
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20" 
                                fill="currentColor"
                                >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371
                                1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1
                                1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1
                                0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            

                            })}
                        
                        </div>


                </div>
                <div className="w-3/4 flex flex-col">
                    <textarea 
                        rows="3" 
                        className="p-4 text-gray-500 rounded-xl resize-none"
                        value={review}
                        onChange={(e) =>setReview(e.target.value)}
                        placeholder="Leave a message, if you want" // Use placeholder attribute for placeholder text
                    />

                    <button 
                        className="py-3 my-2 " // Tailwind classes for a warning button
                        onClick={(e) =>resetForm(e)}
                    >
                        Reset
                    </button>
                    
                    <button
                        className="py-3 my-8 text-lg bg-gradient-to-r from-purple-500 to-indigo-600 rounded-xl text-white disabled:opacity-50" // Tailwind classes for a success button
                        onClick={(e) =>submitReview(e)}
                        disabled={review === ""}
                    >
                        Rate now
                    </button>
                </div>

          </div>
     
        </div>

   
     </div>

   
</div>



  );
}

export default CreateReview