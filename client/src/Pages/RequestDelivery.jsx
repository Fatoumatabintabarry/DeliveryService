import React from "react";

export default class RequestDelivery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addressReceiver: "",
      // newAddressReceiver: "",
      addressSender: "",
      // newAddressSender: "",
      cost: 0.00,
      tax: 0.00,
      totalCost: 0.00,

      // newTotalCost: "",

      // deliveryInfo: {
      //   // sName: "",
      //   sAddress: "",
      //   // rName: "",
      //   rAddress: "",
      //   price: 0,
      // },
      //price: 0, // Added for storing the calculated price
    };
  }

  readTextBoxAddressSender = (userInputAddressS) => {
    this.setState({ addressSender: userInputAddressS.target.value });
    // this.setState({ newAddressSender: userInputAddressS.target.value });
  };

 
  readTextBoxAddressReceiver = (userInputAddressR) => {
    this.setState({ addressReceiver: userInputAddressR.target.value });
    // this.setState({ newAddressReceiver: userInputAddressR.target.value });
  };

  readTextBoxTotalCost = (userInputCost) => {
    let cost = (Number(userInputCost.target.value)).toFixed(2);
    this.setState({ cost: cost });
    let tax = (Number(cost * 0.15)).toFixed(2);
    this.setState({ tax: tax});
    let totalCost = (+cost + +tax).toFixed(2);
    this.setState({ totalCost: totalCost});
    // this.setState({ newAddressSender: userInputAddressS.target.value });
  };


  // saveAddressSender() {
  //   this.setState({ addressSender: this.state.newAddressSender });
  // }


  // saveAddressReceiver() {
  //   this.setState({ addressReceiver: this.state.newAddressReceiver });
  // }

  // saveTotalCost() {
  //   this.setState({ totalCost: this.state.newTotalCost });
  // }

  // saveObjectInfo() {
  //   this.setState((prevState) => ({
  //     deliveryInfo: {
  //       ...prevState.deliveryInfo,
       
  //       sAddress: this.state.addressSender,
  //       rAddress: this.state.addressReceiver,
  //       price: this.state.totalCost, // Include price in deliveryInfo
  //     },
  //   }));
  // }

  // saveInfo() {
  //   if (document.getElementById("senderAddy").value.trim() !== "") {
  //     this.saveAddressSender();
  //   }

  //   if (document.getElementById("receiverAddy").value.trim() !== "") {
  //     this.saveAddressReceiver();
  //   }

  //   if (document.getElementById("totalCost").value.trim() !== "") {
  //     this.saveTotalCost();
  //   }

  //   this.saveObjectInfo();
  //   console.log("New Info Saved!");
  // }

  submitForm = () => {
    const url = "http://localhost:3000/api/orders/create";
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state),//.deliveryInfo
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
      <div className="flex h-screen mb-36 ">
        <div className="m-auto w-full max-w-4xl">
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


            </div>

            <div className="flex">
              <div class="flex-1 py-5 pl-5 oPostal codeverflow-hidden">
             
                <h1 class="inline text-2xl font-semibold leading-none">
                  Cost
                </h1>
              </div>
            </div>
            <div class="flex-none pt-2.5 pr-2.5 pl-1"></div>

            <div className="px-5 pb-5">
              
              <input
                onChange={this.readTextBoxTotalCost}
                id="totalCost"
                placeholder="Cost"
                // readOnly
                className="text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200 focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
              />


            </div>
      
            
      

        
        
        
        
         <hr className="mt-4" />
          
              
          {/* Pre-filled Addresses */}
          <div className="mt-5 bg-white shadow cursor-pointer rounded-xl">

          <div class=" px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50 dark:bg-gray-800 space-y-6 ">
            <h3 class="text-xl dark:text-white font-semibold leading-5 text-gray-800">Summary</h3>
            <div class="flex justify-center items-center w-full space-y-4 flex-col border-gray-200 border-b pb-4">
              <div class="flex justify-between w-full">
                <p class="text-base dark:text-white leading-4 text-gray-800">Subtotal</p>
                <p class="text-base dark:text-gray-300 leading-4 text-gray-600">${this.state.cost}</p>
              </div>
              
              <div class="flex justify-between items-center w-full">
                <p class="text-base dark:text-white leading-4 text-gray-800">taxPrice</p>
                <p class="text-base dark:text-gray-300 leading-4 text-gray-600">${this.state.tax}</p>
              </div>
            </div>
            <div class="flex justify-between items-center w-full">
              <p class="text-base dark:text-white font-semibold leading-4 text-gray-800">Total</p>
              <p class="text-base dark:text-gray-300 font-semibold leading-4 text-gray-600">${this.state.totalCost}</p>
            </div>

            
       
              
            </div>
              {/* Button request delivery*/}
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
          <div className="flex rounded-lg shadow mt-6  ">
            
              {/* Address details */}
              <div class="flex-1 py-5 pl-5 overflow-hidden">
                <ul>
                  <li class="text-xs text-gray-600 uppercase ">Receiver</li>
                  <li>{this.state.addressReceiver}</li>
                </ul>
              </div>

              <div class="flex-1 py-5 pl-1 overflow-hidden">
                <ul>
                  <li class="text-xs text-gray-600 uppercase">Ship from</li>
                  <li>{this.state.addressSender}</li>
                </ul>
              </div>
              <div class="flex-1 py-5 pl-1 overflow-hidden">
                <ul>
                  <li class="text-xs text-gray-600 uppercase">Total cost</li>
                  <li>{this.state.totalCost}</li>
                </ul>
              </div>
              <div class="flex-1 py-5 pl-1 overflow-hidden">
              <a href="#" className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 
            dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
              Pay 
            </a>
            
          </div>
              

             
            </div>
         

        </div>

        
      </div>
    );
  }

  //export default RequestDelivery;
}
