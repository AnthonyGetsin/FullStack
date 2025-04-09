import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home.js";
import NotHome from "./pages/NotHome.js";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/not-home" element={<NotHome />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;