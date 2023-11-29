import React from 'react';
import { group } from '../assets';

const Features = () => {
  return (
    <div>
      <section className="bg-white dark:bg-gray-900">
        <div className="container px-6 py-10 mx-auto">
          <div className="lg:flex lg:items-center">
            <div className="w-full space-y-12 lg:w-1/2">

              <div className="md:flex md:items-start md:-mx-4">
              <span class="inline-block p-3 text-blue-500 bg-blue-100 rounded-full dark:text-white dark:bg-blue-500">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
                    </svg>
                </span>
                <div className="mt-4 md:mx-4 md:mt-0">
                  <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">Ship with confidence</h1>

                  <p className="mt-3 text-gray-500 dark:text-gray-300">
                  Forget expensive couriers and long shipping lines. Whether you’re sending something local or nationwide, Roadie is an easy, inexpensive way 
                  for businesses and individuals to get stuff delivered.
                  </p>
                </div>
              </div>
              {/* Additional sections omitted for brevity */}
    
              <div class="md:flex md:items-start md:-mx-4">
              <span class="inline-block p-3 text-blue-500 bg-blue-100 rounded-xl dark:text-white dark:bg-blue-500">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                        </svg>
                    </span>

                    <div class="mt-4 md:mx-4 md:mt-0">
                        <h1 class="text-xl font-semibold text-gray-700 capitalize dark:text-white">Easy pizzy</h1>

                        <p class="mt-3 text-gray-500 dark:text-gray-300">
                        Easy. Simple Awesome. This intuitively easy shipping platform allows you
                         to do all things shipping - ship, track,
                         compare prices, schedule pickups, and more!
                        </p>
                    </div>
                </div>

                <div class="md:flex md:items-start md:-mx-4">
                <span class="inline-block p-3 text-blue-500 bg-blue-100 rounded-full dark:text-white dark:bg-blue-500">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                    </svg>
                </span>

                    <div class="mt-4 md:mx-4 md:mt-0">
                        <h1 class="text-xl font-semibold text-gray-700 capitalize dark:text-white">Personal</h1>

                        <p class="mt-3 text-gray-500 dark:text-gray-300">
                        Perfect for one-off or occasional deliveries .Get an estimate up-front and then create your delivery
                        </p>
                    </div>
                </div>
                <a href="/whyshiped" className="inline-flex items-center justify-center px-5 py-3 mr-3 
                      text-base font-medium text-center rounded-lg bg-primary-700 hover:bg-blue-500 focus:ring-4 ">
                      Learn More
                <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" 
                xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0
                011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 
                1 0 010-1.414z" clipRule="evenodd"></path>
                </svg>
            </a>

            </div>

            <div className="hidden lg:flex lg:items-center lg:w-1/2 lg:justify-center">
              <img className="w-[28rem] h-[28rem] object-cover xl:w-[34rem] xl:h-[34rem] rounded-full" src={group} alt="Feature Presentation" />
            </div>
          </div>

        
       


        
          
        </div>
      </section>
    </div>
  );
}

export default Features;
