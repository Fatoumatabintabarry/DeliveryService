import React from "react";
import { anime } from "../assets";


  
  
  export default function Aboutus() {
    return (



  <section class="mb-20 text-center md:text-left  my-24 mx-auto md:px-6">
    <div
      class=" ">
      <div class="flex flex-wrap items-center">
        <div class="block w-full shrink-0 grow-0 basis-auto lg:flex lg:w-3/12 xl:w-4/12">
          <img src={anime} alt="Trendy Pants and Shoes"
            class="w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg" />
        </div>
        <div class="w-full shrink-0 grow-0 basis-auto lg:w-6/12 xl:w-8/12">
          <div class="px-6 py-12 md:px-12">
            <h2 class="mb-6 pb-2 text-3xl font-bold">
            Simple. Easy
            </h2>
            <p class="mb-6 pb-2 text-neutral-500 dark:text-neutral-300">
            Spend less time shipping and more time on the things that matter to you 
            </p>
          


            <div class="mb-6 flex flex-wrap">
              <div class="mb-4 w-full md:w-4/12">
                <p class="flex">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                    stroke="currentColor" class="mr-3 h-5 w-5 text-neutral-900 dark:text-neutral-50">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>Save Time on Errands
                </p>
              </div>
              <div class="mb-4 w-full md:w-4/12">
                <p class="flex">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                    stroke="currentColor" class="mr-3 h-5 w-5 text-neutral-900 dark:text-neutral-50">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>Send Oversized Items For Less
                </p>
              </div>
              <div class="mb-4 w-full md:w-4/12">
                <p class="flex">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                    stroke="currentColor" class="mr-3 h-5 w-5 text-neutral-900 dark:text-neutral-50">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>Enjoy Peace of Mind
                </p>
              </div>
              
              
             
            </div>

            <a href="#contact-us-section" className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 
   dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
  Need help?
</a>



          </div>
        </div>
      </div>
    </div>
  </section>


       )
  }
  