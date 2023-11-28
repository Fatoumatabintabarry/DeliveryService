import React, { useState } from "react";
import "../quotation.css";
const GetEstimate = () => {
  const [Height, setHeight] = useState("");
  const [Weight, setWeight] = useState("");
  const [Address1, setAddress1] = useState("");
  const [Address2, setAddress2] = useState("");
  const [Distance, setDistance] = useState("");
  const [Price, setPrice] = useState(0);
  function handleForm(event) {
    event.preventDefault();
    let productDetails = {
      Height: Height,
      Weight: Weight,
      SAddress: Address1,
      RAddress: Address2,
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
    <div className="flex justify-center items-center form-container ">
      <div className="w-full px-4 md:px-32 lg:px-24">
        <form
          onSubmit={handleForm}
          className="bg-white rounded-lg shadow-xl p-8 mt-10 md:mt-0 border-indigo-600 "
        >
          <h4 className="text-2xl md:text-3xl font-bold text-center mb-6">
            Quotation
          </h4>

          <div className="grid grid-cols-1 lg:grid-cols-7 gap-4  mb-6">
            <div className="col-span-1 lg:col-span-1">
              <input
                type="text"
                name="Height"
                onChange={(e) => setHeight(e.target.value)}
                className="form-input w-full p-2 border border-gray-300 rounded"
                placeholder="Height"
              />
            </div>

            <div className="col-span-1 lg:col-span-1">
              <input
                type="text"
                name="Weight"
                onChange={(e) => setWeight(e.target.value)}
                className="form-input w-full p-2 border border-gray-300 rounded"
                placeholder="Weight"
              />
            </div>

            <div className="col-span-1 lg:col-span-1">
              <input
                type="text"
                name="Address1"
                onChange={(e) => setAddress1(e.target.value)}
                className="form-input w-full p-2 border border-gray-300 rounded"
                placeholder="Sender's Address"
              />
            </div>

            <div className="col-span-1 lg:col-span-1">
              <input
                type="text"
                name="Address2"
                onChange={(e) => setAddress2(e.target.value)}
                className="form-input w-full p-2 border border-gray-300 rounded"
                placeholder="Receiver's address"
              />
            </div>

            <div className="col-span-1 lg:col-span-1">
              <input
                type="text"
                name="Distance"
                onChange={(e) => setDistance(e.target.value)}
                className="form-input w-full p-2 border border-gray-300 rounded"
                placeholder="Distance between the source and destination"
              />
              <br />
            </div>

            <div className="col-span-1 lg:col-span-1">
              <button
                type="submit"
                className="form-button-3 w-full p-2 border border-transparent
                    bg-purple-600 text-white rounded hover:bg-purple-700 focus:outline-none focus:ring-2
                      focus:ring-purple-500 focus:ring-opacity-50"
                value="Submit"
              >
                Get Estimate
              </button>
            </div>

            <div>
              <h4 className="form-input w-full p-2 border border-gray-300 rounded">
                {" "}
                Your delivery estimate is ${Price}
              </h4>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default GetEstimate;
