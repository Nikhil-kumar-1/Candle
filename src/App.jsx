import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import HeroSection from "./components/Hero";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";



const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        {/* Routes for different pages */}
        <Routes>
          {/* Home page */}
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <Home />
              </>
            }
          />


        </Routes>

        {/* Footer will be shown on every page */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
