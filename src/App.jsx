import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/Home";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Product from "./components/Product/Product";
import {GoogleOAuthProvider} from "@react-oauth/google";
import UpdateProfile from "./components/UpdateProfile";
import { CartProvider } from "./contexts/CartContext";
const App = () => {
  return (
    <Router>
      <div>
        {/* Google OAuth Provider for authentication */}
        <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
        <Navbar />
        {/* Routes for different pages */}
        <CartProvider>
        <Routes>
          {/* Home page */}
          <Route path="/" element={<Home />} />
          
          <Route path="/update-profile" element={<UpdateProfile />} />
          <Route path="/product" element={<Product />} />
        </Routes>

        {/* Footer will be shown on every page */}
        <Footer />
        </CartProvider>
        </GoogleOAuthProvider>
      </div>
    </Router>
  );
};

export default App;
