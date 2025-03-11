import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Comparison from "./Components/Comparison";
import "@fontsource/chakra-petch"; // Defaults to weight 400
import "@fontsource/chakra-petch/400.css"; // Specify weight
import "@fontsource/chakra-petch/400-italic.css"; // Specify weight and style

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar /> {/* Navbar is rendered once at the top level */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Comparison" element={<Comparison />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
