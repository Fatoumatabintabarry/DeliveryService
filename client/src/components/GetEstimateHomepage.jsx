import React, { useState } from "react";
import "../quotation.css";
const GetEstimate = () => {
  const [Height, setHeight] = useState("");
  const [Weight, setWeight] = useState("");
  const [Description, setDescription] = useState("");

  const [Distance, setDistance] = useState("");
  const [Price, setPrice] = useState(0);
  function handleForm(event) {
    event.preventDefault();
    let productDetails = {
      Height: Height,
      Weight: Weight,
      SDescription: Description,
   
      Distance: Distance,
    };
    fetch("/api/quote", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productDetails),
    })
      .then((response) => response.json())
      .then((data) => {
        let DistanceFare = 0;
        let HeightCharges = 0;
        let WeightCharges = 0;
        if (data["Height"] > 0 && data["Height"] <= 12) {
          if (data["Weight"] >= 1 && data["Weight"] <= 20) {
            setPrice(data["Distance"] * 0.75);
          } else if (data["Weight"] > 20) {
            DistanceFare = data["Distance"] * 0.75;
            WeightCharges = (data["Weight"] - 20) * 0.5;
            setPrice(DistanceFare + WeightCharges);
          }
        }

        if (data["Height"] > 12) {
          if (data["Weight"] >= 1 && data["Weight"] <= 20) {
            DistanceFare = data["Distance"] * 0.75;
            HeightCharges = (data["Height"] - 12) * 0.05;
            setPrice(DistanceFare + HeightCharges);
          } else if (data["Weight"] > 20) {
            DistanceFare = data["Distance"] * 0.75;
            WeightCharges = (data["Weight"] - 20) * 0.5;
            HeightCharges = (data["Height"] - 12) * 0.05;
            setPrice(DistanceFare + HeightCharges + WeightCharges);
          }
        }

        setData(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });

    console.log("Clicked");
  }
  return (
    <div className="flex justify-center items-center form-container " >
      <div className="w-full px-4 md:px-32 lg:px-24 " >
        <form
         
          onSubmit={handleForm}
          className="bg-white rounded-lg shadow-xl p-8 mt-10 md:mt-0 border-indigo-600 "
        >
          <h4 className="text-2xl md:text-3xl font-bold text-center mb-6"  id='GetEstimate'>
           Get an estimate 


          </h4>

          <div className="grid grid-cols-1 lg:grid-cols-6 gap-4  mb-6 ml-12">

          <div className="col-span-1 lg:col-span-1 ">
              <input
                type="text"
                name="Description"
                onChange={(e) => setDescription(e.target.value)}
                className=" h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans
                 text-sm font-normal text-blue-gray-700 outline outline-0 transition-all 
                 placeholder-shown:border-blue-gray-200 focus:border-gray-900 focus:outline-0 disabled:border-0 
                 disabled:bg-blue-gray-50"
                placeholder=" What are you shipping ?"
              />

            </div>

            <div className="col-span-1 lg:col-span-1 flex items-center">
  <input
    type="text"
    name="Height"
    onChange={(e) => setHeight(e.target.value)}
    className="h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
    placeholder="Height"
  />
  <span className="ml-2 text-sm text-gray-400">cm</span>
</div>

<div className="col-span-1 lg:col-span-1 flex items-center">
  <input
    type="text"
    name="Weight"
    onChange={(e) => setWeight(e.target.value)}
    className="h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
    placeholder="Weight"
  />
  <span className="ml-2 text-sm text-gray-400">kg</span>
</div>

<div className="col-span-1 lg:col-span-1 flex items-center">
  <input
    type="text"
    name="Distance"
    onChange={(e) => setDistance(e.target.value)}
    className="h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
    placeholder="Distance between the source and destination"
  />
  <span className="ml-2 text-sm text-gray-400">km</span>
</div>


            <div className="col-span-1 lg:col-span-1 ml-6">
              <button
                type="submit"
                className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 
                dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                value="Submit"
              >
                Get Estimate
              </button>

            

            </div>

            {
            Price !== 0 && (
              <div>
                <h4>
                  Your delivery estimate is ${Price}
                </h4>
  
              </div>
            )
          }
          </div>
         
          {
            Price !== 0 && (
              <div className="flex justify-center items-center ">
                 <a href="/Signup" className="inline-flex items-center justify-center px-5 py-3 mr-3 
                      text-base font-medium text-center rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 
                    focus:ring-primary-300 dark:focus:ring-primary-900">
                      Request a delivery
                <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" 
                xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0
                011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 
                1 0 010-1.414z" clipRule="evenodd"></path>
                </svg>
            </a>





            
  
              </div>
            )
          }
        
        
        </form>

        
        
      </div>
    </div>
  );
};

export default GetEstimate;