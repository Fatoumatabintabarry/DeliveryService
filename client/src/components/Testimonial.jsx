import React from 'react';
import { box } from '../assets'; // Ensure this import points to a valid image file

const Testimonial = () => {
  return (
    <section className="relative flex">
      <div className="min-h-screen bg-white dark:bg-gray-900 md:w-3/4"></div>
      

      <div className="absolute inset-0 flex flex-col justify-center w-full min-h-screen px-4 py-10 md:mx-24">
        <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white text-center">
            What our <span className="text-blue-500">customers</span> are saying
        </h1>

        <div className="grid w-full justify-center grid-cols-1 gap-8 mt-8 md:grid-cols-2 
        lg:grid-cols-4 2xl:grid-cols-4 lg:mt-16">
         
          {/* Repeat this block for each testimonial */}
          <div className="w-full p-8 bg-white rounded-md shadow-lg dark:bg-gray-800">
            <p className="leading-loose text-gray-500 dark:text-gray-400">
              “ Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit ea tempora dolores qui eius pariatur
              odit ad voluptas iste, cum accusantium beatae tempore quasi nesciunt distinctio. ”
            </p>

            <div className="flex items-center mt-6 -mx-2">
              <img className="object-cover mx-2 rounded-full w-14 h-14" src={box} alt="Profile" />

              <div className="mx-2">
                <h1 className="font-semibold text-gray-800 dark:text-white">queen</h1>
                <span className="text-sm text-gray-500 dark:text-gray-400">CTO, fat hihihi </span>
              </div>
            </div>
          </div>
          
           {/* Repeat this block for each testimonial */}
           <div className="w-full p-8 bg-white rounded-md shadow-lg dark:bg-gray-800">
            <p className="leading-loose text-gray-500 dark:text-gray-400">
              “ Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit ea tempora dolores qui eius pariatur
              odit ad voluptas iste, cum accusantium beatae tempore quasi nesciunt distinctio. ”
            </p>

            <div className="flex items-center mt-6 -mx-2">
              <img className="object-cover mx-2 rounded-full w-14 h-14" src={box} alt="Profile" />

              <div className="mx-2">
                <h1 className="font-semibold text-gray-800 dark:text-white">queen</h1>
                <span className="text-sm text-gray-500 dark:text-gray-400">CTO, fat hihihi </span>
              </div>
            </div>
          </div>
           {/* Repeat this block for each testimonial */}
           <div className="w-full p-8 bg-white rounded-md shadow-lg dark:bg-gray-800">
            <p className="leading-loose text-gray-500 dark:text-gray-400">
              “ Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit ea tempora dolores qui eius pariatur
              odit ad voluptas iste, cum accusantium beatae tempore quasi nesciunt distinctio. ”
            </p>

            <div className="flex items-center mt-6 -mx-2">
              <img className="object-cover mx-2 rounded-full w-14 h-14" src={box} alt="Profile" />

              <div className="mx-2">
                <h1 className="font-semibold text-gray-800 dark:text-white">queen</h1>
                <span className="text-sm text-gray-500 dark:text-gray-400">CTO, fat hihihi </span>
              </div>
            </div>
          </div>
        
        </div>

     
       
       
      </div>
    </section>
  );
};

export default Testimonial;
