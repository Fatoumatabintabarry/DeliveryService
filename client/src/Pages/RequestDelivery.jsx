import React from "react";

export default class RequestDelivery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addressReceiver: "4020 Linz",
      newAddressReceiver: "",
      addressSender: "1000 Vienna",
      newAddressSender: "",
      deliveryInfo: {
        sName: "",
        sAddress: "",
        rName: "",
        rAddress: "",
      },
      price: 0, // Added for storing the calculated price
    };
  }

  

  readTextBoxAddressSender = (userInputAddressS) => {
    this.setState({ newAddressSender: userInputAddressS.target.value });
  };

 
  readTextBoxAddressReceiver = (userInputAddressR) => {
    this.setState({ newAddressReceiver: userInputAddressR.target.value });
  };



  saveAddressSender() {
    this.setState({ addressSender: this.state.newAddressSender });
  }


  saveAddressReceiver() {
    this.setState({ addressReceiver: this.state.newAddressReceiver });
  }

  saveObjectInfo() {
    this.setState((prevState) => ({
      deliveryInfo: {
        ...prevState.deliveryInfo,
       
        sAddress: this.state.newAddressSender,
     
        rAddress: this.state.newAddressReceiver,
        price: this.state.price, // Include price in deliveryInfo
      },
    }));
  }

  saveInfo() {


    if (document.getElementById("senderAddy").value.trim() !== "") {
      this.saveAddressSender();
    }

  

    if (document.getElementById("receiverAddy").value.trim() !== "") {
      this.saveAddressReceiver();
    }
    this.saveObjectInfo();
    console.log("New Info Saved!");
  }

  submitForm = () => {
    const url = "http://localhost:3000/api/orders";
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state.deliveryInfo),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  render() {
    return (
      <div className="flex h-screen ">
        <div className="m-auto">
          {/* Sender Information */}
          <div className="mt-5 bg-white rounded-lg shadow">
            <div className="flex">
              <div className="flex-1 py-5 pl-5 overflow-hidden">
                {/* SVG */}
                <svg
                  className="inline align-text-top"
                  height="24px"
                  viewBox="0 0 24 24"
                  width="24px"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#000000"
                >
                  <g>
                    <path
                      d="m4.88889,2.07407l14.22222,0l0,20l-14.22222,0l0,-20z"
                      fill="none"
                      id="svg_1"
                      stroke="null"
                    ></path>
                    <path
                      d="m7.07935,0.05664c-3.87,0 -7,3.13 -7,7c0,5.25 7,13 7,13s7,-7.75 7,-13c0,-3.87 -3.13,-7 -7,-7zm-5,7c0,-2.76 2.24,-5 5,-5s5,2.24 5,5c0,2.88 -2.88,7.19 -5,9.88c-2.08,-2.67 -5,-7.03 -5,-9.88z"
                      id="svg_2"
                    ></path>
                    <circle
                      cx="7.04807"
                      cy="6.97256"
                      r="2.5"
                      id="svg_3"
                    ></circle>
                  </g>
                </svg>

                <h1 className="inline text-2xl font-semibold leading-none">
                  Ship From
                </h1>
              </div>
            </div>

            <div className="px-5 pb-5">
            
              <input
                onChange={this.readTextBoxAddressSender}
                id="senderAddy"
                placeholder="Address"
                className="text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200 focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
              />
              <div class="flex">
                  <div class="flex-grow w-1/4 pr-2">
                 <input  placeholder="Postal code " class=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"/>
                 </div>
                 <div class="flex-grow w-1/4 pr-2">
                  <input placeholder="City" class=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"/>
                  </div>
                  <div class="flex-grow w-1/4 pr-2">
                  <input placeholder="country" class=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"/>
                  </div>
                </div>
            </div>

            
            <div className="flex">
              <div class="flex-1 py-5 pl-5 oPostal codeverflow-hidden">
                <svg
                  class="inline align-text-top"
                  width="21"
                  height="20.5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#000000"
                >
                  <g>
                    <path
                      d="m4.88889,2.07407l14.22222,0l0,20l-14.22222,0l0,-20z"
                      fill="none"
                      id="svg_1"
                      stroke="null"
                    ></path>
                    <path
                      d="m7.07935,0.05664c-3.87,0 -7,3.13 -7,7c0,5.25 7,13 7,13s7,-7.75 7,-13c0,-3.87 -3.13,-7 -7,-7zm-5,7c0,-2.76 2.24,-5 5,-5s5,2.24 5,5c0,2.88 -2.88,7.19 -5,9.88c-2.08,-2.67 -5,-7.03 -5,-9.88z"
                      id="svg_2"
                    ></path>
                    <circle
                      cx="7.04807"
                      cy="6.97256"
                      r="2.5"
                      id="svg_3"
                    ></circle>
                  </g>
                </svg>
                <h1 class="inline text-2xl font-semibold leading-none">
                  Ship To
                </h1>
              </div>
            </div>
            <div class="flex-none pt-2.5 pr-2.5 pl-1"></div>
            <div className="px-5 pb-5">
              
              <input
                onChange={this.readTextBoxAddressReceiver}
                id="receiverAddy"
                placeholder="Address"
                className="text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200 focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
              />

                 <div class="flex">
                  <div class="flex-grow w-1/4 pr-2">
                 <input  placeholder="Postal code " class=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"/>
                 </div>
                 <div class="flex-grow w-1/4 pr-2">
                  <input placeholder="City" class=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"/>
                  </div>
                  <div class="flex-grow w-1/4 pr-2">
                  <input placeholder="country" class=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"/>
                  </div>
                </div>


                

            </div>

            <div className="flex">
              <div class="flex-1 py-5 pl-5 oPostal codeverflow-hidden">
             
                <h1 class="inline text-2xl font-semibold leading-none">
                 Total Cost
                </h1>
              </div>
            </div>
            <div class="flex-none pt-2.5 pr-2.5 pl-1"></div>
            <div className="px-5 pb-5">
              
              <input
                onChange={this.readTextBoxAddressReceiver}
                id="receiverAddy"
                placeholder="Address"
                className="text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200 focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
              />


            </div>
      
            

            <hr className="mt-4" />
            <div className="flex flex-row-reverse p-3">
              {/* Buttons and SVGs */}
              <button
                onClick={() => this.saveInfo()}
                type="button"
                class="flex items-center px-5 py-2.5 font-medium tracking-wide text-white capitalize   bg-black rounded-md hover:bg-gray-800  focus:outline-none focus:bg-gray-900  transition duration-300 transform active:scale-95 ease-in-out"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 0 24 24"
                  width="24px"
                  fill="#FFFFFF"
                >
                  <path d="M0 0h24v24H0V0z" fill="none"></path>
                  <path
                    d="M5 5v14h14V7.83L16.17 5H5zm7 13c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-8H6V6h9v4z"
                    opacity=".3"
                  ></path>
                  <path d="M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm2 16H5V5h11.17L19 7.83V19zm-7-7c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zM6 6h9v4H6z"></path>
                </svg>
                <span class="pl-2 mx-1">Save</span>
              </button>
              <div class="flex-initial">
                <button
                  type="button"
                  class="flex items-center px-5 py-2.5 font-medium tracking-wide text-black capitalize rounded-md  hover:bg-red-200 hover:fill-current hover:text-red-600  focus:outline-none  transition duration-300 transform active:scale-95 ease-in-out"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 0 24 24"
                    width="24px"
                  >
                    <path d="M0 0h24v24H0V0z" fill="none"></path>
                    <path d="M8 9h8v10H8z" opacity=".3"></path>
                    <path d="M15.5 4l-1-1h-5l-1 1H5v2h14V4zM6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9z"></path>
                  </svg>
                  <span class="pl-2 mx-1">Delete</span>
                </button>
              </div>
              {/* Button */}
              <button
                type="button"
                className="relative w-full flex 
        justify-center items-center px-5 py-2.5 font-medium tracking-wide text-white 
        capitalize bg-[#5F54E3] rounded-md hover:bg-gray-900 focus:outline-none transition 
        duration-300 transform active:scale-95 ease-in-out"
              >
                {/* SVG */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  height="24px"
                  width="24px"
                  fill="#FFFFFF"
                >
                  <g>
                    <rect fill="none" height="24" width="24"></rect>
                  </g>
                  <g>
                    <path d="M19,13h-6v6h-2v-6H5v-2h6V5h2v6h6V13z"></path>
                  </g>
                </svg>
                <button
                  onClick={this.submitForm}
                  className="pl-2 mx-1 bg-[#5F54E3]"
                >
                  Request a delivery
                </button>
              </button>
            </div>
          </div>

          <button onClick={() => this.checkInfos()}>check infos</button>

          {/* Pre-filled Addresses */}
          <div className="mt-5 bg-white shadow cursor-pointer rounded-xl">
            <div className="flex">
              {/* Address details */}
              <div class="flex-1 py-5 pl-5 overflow-hidden">
                <ul>
                  <li class="text-xs text-gray-600 uppercase ">Receiver</li>
                  <li>{this.state.nameReceiver}</li>
                  <li>Musterstrasse 1</li>
                  <li>{this.state.addressReceiver}</li>
                </ul>
              </div>
              <div class="flex-1 py-5 pl-1 overflow-hidden">
                <ul>
                  <li class="text-xs text-gray-600 uppercase">Ship from</li>
                  <li>{this.state.nameSender}</li>
                  <li>Rickrolled 11</li>
                  <li>{this.state.addressSender}</li>
                </ul>
              </div>
              <div class="flex-none pt-2.5 pr-2.5 pl-1">
                <button
                  type="button"
                  class="px-2 py-2 font-medium tracking-wide text-black capitalize transition duration-300 ease-in-out transform rounded-xl hover:bg-gray-300 focus:outline-none active:scale-95"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 0 24 24"
                    width="24px"
                    fill="#000000"
                  >
                    <path d="M0 0h24v24H0V0z" fill="none"></path>
                    <path
                      d="M5 18.08V19h.92l9.06-9.06-.92-.92z"
                      opacity=".3"
                    ></path>
                    <path d="M20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29s-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83zM3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM5.92 19H5v-.92l9.06-9.06.92.92L5.92 19z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  //export default RequestDelivery;
}
