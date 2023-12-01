import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Home from "./Pages/home";
import WhyShiped from "./Pages/whyshiped";
import DeliverySolutions from "./Pages/deliverysolutions";
import Login from "./Pages/login";
import Signup from "./Pages/Signup";
import ChoicePage from "./Pages/choicePage";
import RequestDelivery from "./Pages/RequestDelivery";
import DriverPortal from "./Pages/DriverPortal";
import DriverRides from "./Pages/DriverRides";
import Feedback from "./Pages/Feedback";
import Deliveries from "./Pages/deliveries";
import PaymentForm from "./components/PaymentForm";
import OrderConfirmation from "./Pages/OrderConfirmation";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="/whyshiped" element={<WhyShiped />} />
          <Route path="/deliverysolutions" element={<DeliverySolutions />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          {/* <Route path="/RequestDelivery" element={<RequestDelivery />} /> */}
          {/* <Route path="/choicePage" element={<ChoicePage />} /> */}
          <Route path="/driver-portal" element={<DriverPortal />} />
          <Route path="/driver-rides" element={<DriverRides />} />
          <Route path="/Feedback" element={<Feedback />} />
          <Route path="/deliveries" element={<Deliveries />} />
          <Route path="/PaymentForm" element={<PaymentForm />} />
          <Route path="/OrderConfirmation" element={<OrderConfirmation />} />
          
          
        </Routes>
        {/* other components like Footer */}
      </BrowserRouter>
    </div>
  );
}

export default App;
