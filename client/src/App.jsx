import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/home";
import WhyShiped from "./Pages/whyshiped";
import DeliverySolutions from "./Pages/deliverysolutions";
import Login from "./Pages/login";
import SignupSender from "./Pages/SignupSender";
import SignupDriver from "./Pages/SignupDriver";
import ChoicePage from "./Pages/choicePage";
import RequestDelivery from "./Pages/RequestDelivery";
import DriverPortal from "./Pages/DriverPortal";
import DriverRides from "./Pages/DriverRides";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="/whyshiped" element={<WhyShiped />} />
          <Route path="/deliverysolutions" element={<DeliverySolutions />} />
          <Route path="/login" element={<Login />} />
          <Route path="/SignupSender" element={<SignupSender />} />
          <Route path="/SignupDriver" element={<SignupDriver />} />
          <Route path="/RequestDelivery" element={<RequestDelivery />} />
          <Route path="/choicePage" element={<ChoicePage />} />
          <Route path="/driver-portal" element={<DriverPortal />} />
          <Route path="/driver-rides" element={<DriverRides />} />
          
          {/* ... other routes */}
        </Routes>
        {/* other components like Footer */}
      </BrowserRouter>
    </div>
  );
}

export default App;
