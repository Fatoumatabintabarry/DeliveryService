import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const dummyOrders = [
  {
    id: 1,
    pickupLocation: "1234 Broadway St, New York, NY",
    dropoffLocation: "4321 River Rd, New York, NY",
    packageDetails: "Small box, 2 lbs",
    distance: "5 miles",
    payout: "$15.00",
  },
  {
    id: 2,
    pickupLocation: "555 Harmony Rd, Newark, NJ",
    dropoffLocation: "111 Unity St, Newark, NJ",
    packageDetails: "Envelope",
    distance: "2 miles",
    payout: "$8.00",
  },
  {
    id: 3,
    pickupLocation: "678 Market St, San Francisco, CA",
    dropoffLocation: "101 Main St, San Francisco, CA",
    packageDetails: "Large package, 10 lbs",
    distance: "8 miles",
    payout: "$20.00",
  },
];

const DriverRides = () => {
  const acceptDelivery = (orderId) => {
    console.log(`Accepted delivery with ID: ${orderId}`);
    // add some stuff here in the next sprint
  };

  return (
    <div className="w-full overflow-hidden">
      <Navbar />

      <div className="min-h-screen bg-[#F1F2F7]">
        <div className="py-12">
          <h1 className="text-4xl font-bold text-center mb-8">
            Available Deliveries
          </h1>
          <div className="max-w-2xl mx-auto">
            {dummyOrders.map((order) => (
              <div
                key={order.id}
                className="bg-white my-4 p-4 rounded-lg shadow-lg"
              >
                <h2 className="text-xl font-semibold">Order ID: {order.id}</h2>
                <p>Pickup: {order.pickupLocation}</p>
                <p>Dropoff: {order.dropoffLocation}</p>
                <p>Package: {order.packageDetails}</p>
                <p>Distance: {order.distance}</p>
                <p>Payout: {order.payout}</p>
                <button
                  onClick={() => acceptDelivery(order.id)}
                  className="bg-[#F4F5FA] px-4 py-3 rounded-full border border-[#F0F0F6] shadow-xl mt-4"
                >
                  Accept Delivery
                </button>

     

              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default DriverRides;
