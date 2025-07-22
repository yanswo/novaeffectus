import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Support from "./pages/Support/Support";
import About from "./pages/About/About";
import "./App.css"; // Import global styles

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/suporte" element={<Support />} />
      <Route path="/sobre" element={<About />} /> {}
    </Routes>
  );
}

export default App;
