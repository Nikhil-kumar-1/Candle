import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/Home";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Product from "./components/Product/Product";
import About from "./components/About/About";
import ContactUs from "./components/ContactUs/ContactUs";

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        {/* Routes for different pages */}
        <Routes>
          {/* Home page */}
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<ContactUs/>} />
        </Routes>

        {/* Footer will be shown on every page */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
