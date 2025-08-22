import React, { useEffect, useState } from "react";
import {  Routes, Route, useNavigate } from "react-router-dom";

import Home from "./components/Home";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { CartProvider } from "./contexts/CartContext";
import UpdateProfile from "./components/UpdateProfile";
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
import AdminNavbar from "./components/Admin/AdminNavbar";
import Admin from "./components/Admin/Admin";
import Users from "./components/Admin/Components/Users";
import Products from "./components/Admin/Components/Products";
import Cart from "./components/Cart/Cart";
import Orders from "./components/Orders/Orders";
import OrdersAdmin from "./components/Admin/Components/Orders";

// Protected route component
const AdminRoute = ({ user, children }) => {
  if (!user || user.role !== "admin") {
    return <h2 className="text-center mt-10 text-xl text-red-500">Unauthorized</h2>;
  }
  return children;
};

const App = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  useEffect(() => {
    console.log("User state updated:", user);
    if (user?.role === "admin" ) {
      navigate("/admin");
    }
  }, [user]);

  return (
    
      <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
        {/* Navbar conditionally rendered based on user role */}
        {user?.role === "admin" ? <AdminNavbar user={user} setUser={setUser} /> : <Navbar user={user} setUser={setUser} />}

        <CartProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/update-profile" element={<UpdateProfile />} />
            <Route path="/product" element={<Product />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/collections" element={<Collections />} />
            <Route path="/collections/:id" element={<CollectionDetail />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-&-conditions" element={<TermsAndConditions />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/my-cart" element={<Cart />} />
            <Route path="/my-orders" element={<Orders />} />

            {/* ✅ Admin-only route */}
            <Route
              path="/admin"
              element={
                <AdminRoute user={user}>
                  <Admin />
                </AdminRoute>
              }
            />
            <Route
              path="/admin/users"
              element={
                <AdminRoute user={user}>
                  <Users />
                </AdminRoute>
              }
            />
            <Route
              path="/admin/products"
              element={
                <AdminRoute user={user}>
                  <Products />
                </AdminRoute>
              }
            />
            <Route
              path="/admin/orders"
              element={
                <AdminRoute user={user}>
                  <OrdersAdmin />
                </AdminRoute>
              }
            />
          </Routes>

          <FloatingButtons />
          <ScrollToTop />
          <Footer />
        </CartProvider>
      </GoogleOAuthProvider>
    
  );
};

export default App;
