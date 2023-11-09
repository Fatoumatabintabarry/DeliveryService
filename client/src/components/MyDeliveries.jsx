import React from 'react';
// Assuming you have these images locally or hosted, replace with your actual paths
import { box } from '../assets';
const MyDeliveries = () => {
  return (
    
      <div className=" p-10 rounded-xl">
        <div className="flex flex-col justify-center items-center text-center">
          <div className="max-w-sm font-bold font-sans">
           The driver is supposed to see a list of delivery Request here -- later well move this component to driver profile only 
          </div>
          
        </div>

        <div class="flex flex-wrap justify-center items-center mt-10 gap-4">
  <div class="bg-[#ECEEFF] rounded-xl p-4 w-full md:w-auto">
    <div class="flex flex-col rounded-xl bg-white shadow-xl p-10 w-full md:w-96">
    <img src={box} className="w-12" alt="Telenor Logo" />
              <div className="mt-3 font-semibold text-lg"><small></small> package</div>
              <div className="text-sm font-light"> Pickup from: </div>
              <div className="text-sm font-light"> Ship to: </div>

      <div class="my-4">
        <span class="font-bold text-base">Price</span>
      </div>

      <button class="bg-[#F4F5FA] px-4 py-3 rounded-full border border-[#F0F0F6] shadow-xl mt-4">
      Accept
      </button>
    </div>
  </div>


  <div class="bg-[#ECEEFF] rounded-xl p-4 w-full md:w-auto">
    <div class="flex flex-col rounded-xl bg-white shadow-xl p-10 w-full md:w-96">
    <img src={box} className="w-12" alt="Telenor Logo" />
              <div className="mt-3 font-semibold text-lg">Medium package</div>
              <div className="text-sm font-light"> Pickup from: </div>
              <div className="text-sm font-light"> Ship to: </div>

      <div class="my-4">
        <span class="font-bold text-base">Price</span>
      </div>

      <button class="bg-[#F4F5FA] px-4 py-3 rounded-full border border-[#F0F0F6] shadow-xl mt-4">
      Accept
      </button>
    </div>
  </div>
  <div class="bg-[#ECEEFF] rounded-xl p-4 w-full md:w-auto">
    <div class="flex flex-col rounded-xl bg-white shadow-xl p-10 w-full md:w-96">
    <img src={box} className="w-12" alt="Telenor Logo" />
              <div className="mt-3 font-semibold text-lg">Large package</div>
              <div className="text-sm font-light"> Pickup from: </div>
              <div className="text-sm font-light"> Ship to: </div>

      <div class="my-4">
        <span class="font-bold text-base">Price</span>
      </div>

      <button class="bg-[#F4F5FA] px-4 py-3 rounded-full border border-[#F0F0F6] shadow-xl mt-4">
      Accept
      </button>
    </div>
  </div>

        </div>

      </div>
   
  );
};

export default MyDeliveries;
