import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/home';
import WhyShiped from './Pages/whyshiped';
import DeliverySolutions from './Pages/deliverysolutions';
import pricing from './Pages/pricing';
import Login from './Pages/login';
import Signup from './Pages/signup';
import ChoicePage from './Pages/choicePage';
// ... make sure to import any other components or routes you need

function App() {
  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/whyshiped" element={<WhyShiped />} />
        <Route path="/deliverysolutions" element={<DeliverySolutions />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/choicePage" element={<ChoicePage/>}/>
        
        {/* ... other routes */}
      </Routes>
      {/* other components like Footer */}
    </BrowserRouter>
    </div>
  );
}

export default App;
