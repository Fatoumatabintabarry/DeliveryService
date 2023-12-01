import React, { useState } from "react"; // Import useState
import styles from "../style";
import "../index.css";

import { Navbar, Footer } from "../components";
import RequestDelivery from "./RequestDelivery";
import GetEstimate from "../components/GetEstimate";

const DeliverySolutions = () => {
  const [price, setPrice] = useState(0);

  return (
    <div className="w-full overflow-hidden ">
      <div className={`${styles.paddingX} ${styles.flexCenter} pt-20`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={` ${styles.paddingY} ${styles.flexStart} bg-[#F4F5FA]`}>
        <div className={`${styles.boxWidth}`}>
          {/* Pass setPrice as a prop to GetEstimate */}
          <GetEstimate setPrice={setPrice} />
        </div>
      </div>

      <div className={`${styles.paddingX} ${styles.flexStart} bg-[#F1F2F7]`}>
        <div className={`${styles.boxWidth} `}>
          {/* Pass price as a prop to RequestDelivery */}
          <RequestDelivery price={price} />
        </div>
      </div>

      <div className={` ${styles.paddingX} ${styles.flexStart} bg-[#5F54E3] `}>
        <div className={`${styles.boxWidth} bg-[#5F54E3] `}>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default DeliverySolutions;
