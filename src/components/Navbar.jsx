import { motion } from "framer-motion";
import { FiMenu, FiX, FiShoppingCart, FiSearch } from "react-icons/fi";
import { useState, useEffect } from "react";
import { GoogleLogin, googleLogout } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [user, setUser] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    if (!dropdownOpen) return;

    const handleClickOutside = (e) => {
      if (!e.target.closest(".profile-dropdown")) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [dropdownOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLoginSuccess = (credentialResponse) => {
    const token = credentialResponse.credential;
    const decoded = jwtDecode(token);
    setUser(decoded);
    localStorage.setItem("user", JSON.stringify(decoded));
    fetch("http://localhost:4000/api/v1/auth/google", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token }),
    })
      .then((res) => res.json())
      .then((data) => console.log("Backend Response:", data));
  };

  const handleLogout = () => {
    googleLogout();
    setUser(null);
  };

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/product" },
    { name: "Collections", href: "#" },
    { name: "About", href: "#" },
    { name: "Contact", href: "#" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-[9999] transition-all duration-300 ${
        scrolled ? "bg-white/85 shadow-md" : "bg-white"
      } backdrop-blur-md`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2"
          >
            <img
              src="Logo.png"
              alt="Ravangi Logo"
              className="h-15 w-auto drop-shadow-lg"
            />
            <span
              className={`text-2xl font-bold ${
                scrolled ? "text-[#0b3d60]" : "text-[#0b3d60]"
              }`}
              style={{
                textShadow: scrolled ? "none" : "0px 2px 6px rgba(0,0,0,0.1)",
              }}
            >
              Ravangi
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 ">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                className={`relative font-medium px-3 py-2 ${
                  scrolled ? "text-[#0b3d60]" : "text-[#0b3d60]"
                }`}
                style={{
                  textShadow: scrolled ? "none" : "0px 2px 6px rgba(0,0,0,0.1)",
                }}
                whileHover={{ scale: 1.05 }}
              >
                {item.name}
                <motion.span
                  className={`absolute bottom-0 left-0 w-0 h-0.5 ${
                    scrolled ? "bg-[#0b3d60]" : "bg-white"
                  }`}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            ))}
          </div>

          {/* Icons + Google Login */}
          {user ? (
            <div className="relative profile-dropdown">
              {/* Profile Picture as Button */}
              <img
                src={user.picture}
                alt="Profile"
                className="w-8 h-8 rounded-full cursor-pointer border border-gray-300 z-50"
                onClick={() => setDropdownOpen((prev) => !prev)}
              />

              {/* Dropdown Card */}
              {dropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className="absolute right-0 m-0 w-64 bg-white shadow-lg rounded-lg border border-gray-200 z-50"
                >
                  {/* User Info */}
                  <div className="p-4 border-b border-gray-200 flex items-center space-x-3">
                    <img
                      src={user.picture}
                      alt="Profile"
                      className="w-12 h-12 rounded-full"
                    />
                    <div>
                      <p className="font-semibold text-gray-800">{user.name}</p>
                      <p className="text-sm text-gray-500">{user.email}</p>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col p-2">
                    <Link to ="/update-profile" className="w-full text-left px-4 py-2 rounded hover:bg-gray-100">
                      
                    
                      Update Profile
                    </Link>
                    <button
                      onClick={() => alert("My Orders Clicked")}
                      className="w-full text-left px-4 py-2 rounded hover:bg-gray-100"
                    >
                      My Orders
                    </button>
                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-2 text-red-500 rounded hover:bg-gray-100"
                    >
                      Logout
                    </button>
                  </div>
                </motion.div>
              )}
            </div>
          ) : (
            <GoogleLogin
              onSuccess={handleLoginSuccess}
              onError={() => console.log("Login Failed")}
            />
          )}

          {/* Mobile menu button */}
          <div className="md:hidden">
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className={`${
                scrolled ? "text-[#0b3d60]" : "text-white"
              } focus:outline-none`}
              style={{
                textShadow: scrolled ? "none" : "0px 2px 6px rgba(0,0,0,0.7)",
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </motion.button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
