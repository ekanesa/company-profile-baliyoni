import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from './pages/Homepage';
import Home from './pages/Home';
import About from './pages/About';
import Example from "./pages/Example";
import { Icon } from "@iconify/react";

const App = () => {
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/Home" element={<Home/>} />
        <Route path="/About" element={<About/>} />
        <Route path="/Services" element={<Example/>} />
        <Route path="/Partnership" element={<Example/>} />
      </Routes>
    </Router>
  )
}

export default App;
