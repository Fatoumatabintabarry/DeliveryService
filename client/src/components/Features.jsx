import React from 'react';
// Import your assets here if you have any, for example:
// import { ReactComponent as CoffeeIcon } from '../assets/coffee-icon.svg';

const Features = () => {
  return (
    <div>
      <section className="bg-white dark:bg-gray-900">
        <div className="container px-6 py-10 mx-auto">
          <h1 className="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white">
            This is our feature section 
          </h1>

          <p className="mt-4 text-gray-500 xl:mt-6 dark:text-gray-300">
            We will decide after what we will add to it !  Nostrum quam voluptatibus
          </p>

          <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
            {/* Feature Card */}
            {/* Repeat this block for each feature */}
            <div className="p-8 space-y-3 border-2 border-blue-400 dark:border-blue-300 rounded-xl">
              <span className="inline-block text-blue-500 dark:text-blue-400">
                {/* SVG Icon */}
                {/* Replace "svg" element with actual SVG import if available */}
              </span>

              <h1 className="text-2xl font-semibold text-gray-700 capitalize dark:text-white">
                elegant Dark Mode
              </h1>

              <p className="text-gray-500 dark:text-gray-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet
              </p>

              <a href="#" className="inline-flex p-2 text-blue-500 capitalize transition-colors duration-200 transform bg-blue-100 rounded-full dark:bg-blue-500 dark:text-white hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                {/* SVG Icon */}
                {/* Replace "svg" element with actual SVG import if available */}
              </a>
            </div>

        
            {/* Repeat this block for each feature */}
            <div className="p-8 space-y-3 border-2 border-blue-400 dark:border-blue-300 rounded-xl">
              <span className="inline-block text-blue-500 dark:text-blue-400">
                {/* SVG Icon */}
                {/* Replace "svg" element with actual SVG import if available */}
              </span>

              <h1 className="text-2xl font-semibold text-gray-700 capitalize dark:text-white">
                elegant Dark Mode
              </h1>

              <p className="text-gray-500 dark:text-gray-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet
              </p>

              <a href="#" className="inline-flex p-2 text-blue-500 capitalize transition-colors duration-200 transform bg-blue-100 rounded-full dark:bg-blue-500 dark:text-white hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                {/* SVG Icon */}
                {/* Replace "svg" element with actual SVG import if available */}
              </a>
            </div>

          </div>
        </div>
      </section>

      
    </div>
  );
}

export default Features;
