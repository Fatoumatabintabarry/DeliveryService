import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
// import router from "../../../server/routes/orderRoutes";

const Deliveries = () => {
//   const acceptDelivery = (orderId) => {
//     console.log(`Accepted delivery with ID: ${orderId}`);
//     // add some stuff here in the next sprint
//   };

//   fetch("/api/orders",{
//     method:'get',
//     headers:{
//         "Content-Type":"application/json"
//     },
//     //body:JSON.stringify(productDetails)
// }).then


const [data, setData] = useState([]);
useEffect(() => {
fetch('/api/orders') // Assuming React is served from the same domain as Express
      .then((response) => response.json())
      .then((responseData) => {
        setData(responseData);
        // console.log(responseData)
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
    }, []);

  return (
    <div className="w-full overflow-hidden">
      <Navbar />

      <div className="min-h-screen bg-[#F1F2F7]">
        <div className="py-12">
          <h1 className="text-4xl font-bold text-center mb-8">
            All Deliveries    
          </h1>
          <div className="max-w-2xl mx-auto">
            {data.map((order) => (
              <div
                key={order._id}
                className="bg-white my-4 p-4 rounded-lg shadow-lg"
              >
                <h2 className="text-xl font-semibold">Order ID: {order._id}</h2>
                <p>From: {order.shippingAddress.sAddress}</p>
                <p>To: {order.shippingAddress.rAddress}</p>
                <p>Payment Method: {order.paymentMethod}</p>
                <p>Total Price: {order.totalCost}</p>
                <p>Status: {order.status}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Deliveries;
