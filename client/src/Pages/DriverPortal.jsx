import React, { useState } from "react"; // Import React and useState together
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "../style";

// Helper function to send location to the server (if we wanna share the location with the client we just fetch it)
const sendLocationToServer = async (latitude, longitude, isDriving, userId) => {
  try {
    const response = await fetch("/api/user/updateLocation", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // we can include something like authorization tokens here for validating the id of the user.
      },
      body: JSON.stringify({
        userId,
        latitude,
        longitude,
        isDriving,
      }),
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    console.log(data.message);
  } catch (error) {
    console.error("Error sending location:", error);
  }
};

const DriverPortal = () => {
  const [isDriving, setIsDriving] = useState(false);
  const navigate = useNavigate();

  const handleReady = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const { latitude, longitude } = position.coords;
        //add the sendLocationToServer here, but just wait for the database!
        await sendLocationToServer(latitude, longitude, true);
        setIsDriving(true);
        // once done, will navigate to the page where they can accept rides.
        navigate("/driver-rides");
      });
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  };

  return (
    <div className="w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter} bg-[#FCF9FC]`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`${styles.flexCenter} ${styles.paddingY} bg-[#F1F2F7]`}>
        <div className={`${styles.boxWidth}`}>
          <div className="flex flex-col items-center py-12">
            <h1 className="text-4xl font-bold text-center mb-4">
              Ready to Deliver?
            </h1>
            <p className="mb-8 text-lg text-gray-700">
              Click the button below to share your location and start receiving
              delivery requests.
            </p>
            <button
              onClick={handleReady}
              disabled={isDriving}
              className={`text-white bg-[#5F54E3] hover:bg-[#4e43cc] 
                font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline 
                transition duration-300 ${
                  isDriving ? "opacity-50 cursor-not-allowed" : ""
                }`}
            >
              {isDriving
                ? "Location is being shared"
                : "Share Location and Start Driving"}
            </button>
          </div>
        </div>
      </div>

      <div className={`${styles.paddingX} ${styles.flexStart} bg-[#5F54E3]`}>
        <div className={`${styles.boxWidth}`}>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default DriverPortal;
