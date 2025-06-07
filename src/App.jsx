import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import Services from "./pages/Services";
import Partnership from "./pages/Partnership";
import ServiceCentre from "./pages/ServiceCentre";
import Example from "./pages/Example";
import { Icon } from "@iconify/react";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/About" element={<About />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Partnership" element={<Partnership />} />
        <Route path="/pages/ServiceCentre" element={<ServiceCentre />} />
      </Routes>
    </Router>
  );
};

export default App;
