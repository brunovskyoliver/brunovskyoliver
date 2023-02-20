import React, { useState } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import "./App.css";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import Loading from "./Components/Loading";
import Blob from "./Components/Blob";

function App() {
  return (
    <Router>
      <Loading>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Blob />
      </Loading>
    </Router>
  );
}

export default App;
