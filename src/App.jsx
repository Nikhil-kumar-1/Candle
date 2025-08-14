import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/Home";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Product from "./components/Product/Product";
import About from "./components/About/About";
import ContactUs from "./components/ContactUs/ContactUs";
import Collections from "./components/Collections/Collections";
import CollectionDetail from "./components/Collections/CollectionDetails";
import PrivacyPolicy from "./components/PrivacyPolicy/PrivacyPolicy";
import FloatingButtons from "./components/WhatsApp";
import TermsAndConditions from "./components/TermAndCondition/TermsAndCondition";
import ScrollToTop from "./components/ScrollToTop";
import FAQ from "./components/Faq/Faq";


const App = () => {
  return (
    <Router>
      <div>
        <ScrollToTop />
        <Navbar />
        {/* Routes for different pages */}
        <Routes>
          {/* Home page */}
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<ContactUs/>} />
          <Route path="/collections" element={<Collections/>} />
          <Route path="/collections/:id" element={<CollectionDetail />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy/>} />
          <Route path="/terms-&-conditions" element={<TermsAndConditions />} />
          <Route path="/faq" element={<FAQ />} />

        </Routes>

        {/* Footer will be shown on every page */}
        
   
        <FloatingButtons />
      
        <Footer />
      </div>
    </Router>
  );
};

export default App;
