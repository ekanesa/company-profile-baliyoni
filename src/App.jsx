import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from './pages/Homepage';
import About from './pages/About';
import Example from "./pages/Example";
import { Icon } from "@iconify/react";

const App = () => {
  return(
    <Router>
      <Routes>
        <Route path="/Homepage" element={<Homepage/>} />
        <Route path="/About" element={<About/>} />
        <Route path="/Services" element={<Example/>} />
        <Route path="/Partnership" element={<Example/>} />
      </Routes>
    </Router>
  )
}

export default App;
