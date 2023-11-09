import React from 'react';
// Import your assets here if you have any, for example:
// import { ReactComponent as CoffeeIcon } from '../assets/coffee-icon.svg';

const Features = () => {
  return (
    <div>
      <section className="bg-white dark:bg-gray-900">
        <div className="container px-6 py-10 mx-auto">
          <h1 className="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white">
            explore our <br /> awesome <span className="underline decoration-blue-500">Components</span>
          </h1>

          <p className="mt-4 text-gray-500 xl:mt-6 dark:text-gray-300">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum quam voluptatibus
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

            {/* ... other feature blocks ... */}
          </div>
        </div>
      </section>

      <div className="fixed inset-x-0 lg:inset-x-auto bottom-6 lg:right-8 xl:right-10 xl:bottom-8">
        <div className="lg:w-72 px-6 lg:px-0">
          <div className="p-2 bg-blue-600 rounded-lg shadow-lg sm:p-3">
            <div className="flex flex-wrap items-center justify-between">
              <a target="_blank" href="https://www.buymeacoffee.com/khatabwedaa" className="flex items-center flex-1 w-0">
                <span className="flex p-2 bg-blue-800 rounded-lg">
                  {/* SVG Icon */}
                  {/* Here you would use your SVG import, e.g., <CoffeeIcon className="h-6 w-6 text-white" /> */}
                </span>

                <p className="ml-3 font-medium tracking-wide text-white truncate">
                  By me a coffee
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
