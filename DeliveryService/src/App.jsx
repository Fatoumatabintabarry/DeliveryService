import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/home';
import WhyShiped from './Pages/whyshiped';
import DeliverySolutions from './Pages/deliverysolutions';
import login from './Pages/login';
// ... make sure to import any other components or routes you need

function App() {
  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/why-shiped" element={<WhyShiped />} />
        <Route path="/delivery-solutions" element={<DeliverySolutions />} />
        <Route path="/login" element={<login />} />
        
        {/* ... other routes */}
      </Routes>
      {/* other components like Footer */}
    </BrowserRouter>
    </div>
  );
}

export default App;
