import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Timeline from "./Components/Timeline";
import Comparison from "./Components/Comparison";
import "@fontsource/chakra-petch"; // Defaults to weight 400
import "@fontsource/chakra-petch/400.css"; // Specify weight
import "@fontsource/chakra-petch/400-italic.css"; // Specify weight and style

function App() {
  const [selectedMonster, setSelectedMonster] = useState("adult-black-dragon");

  return (
    <Router>
      <div className="App">
        <Navbar onMonsterSelect={setSelectedMonster} /> {/* Pass the state updater */}
        <Routes>
          <Route path="/" element={<Home selectedMonster={selectedMonster} />} />
          <Route path="/Comparison" element={<Comparison />} />
          <Route path="/Timeline" element={<Timeline selectedMonster={selectedMonster} />} /> {/* Pass selectedMonster */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
