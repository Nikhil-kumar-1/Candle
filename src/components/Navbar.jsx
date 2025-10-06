import { motion } from "framer-motion";
import { FiMenu, FiX, FiShoppingCart, FiSearch } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = ({ user, setUser }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  // WhatsApp number - replace with your actual number
  const whatsappNumber = "919876543210";
  const whatsappMessage = "Hello! I'm interested in your products.";

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

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/");
  };

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(url, "_blank");
  };

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Products", href: "/product" },
    { name: "Collections", href: "/collections" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-[#efe9e1] shadow-md" : "bg-[#F8F4EF]"
      } backdrop-blur-md`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <motion.div whileHover={{ scale: 1.05 }} className="flex items-center space-x-2">
            <Link to="/">
              <img
                src="Logo.png"
                alt="Ravangi Logo"
                className="h-15 w-auto drop-shadow-lg"
              />
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <motion.div
                key={item.name}
                className={`relative font-medium px-3 py-2 text-[#0b3d60]`}
                style={{
                  textShadow: scrolled ? "none" : "0px 2px 6px rgba(0,0,0,0.1)",
                }}
                whileHover={{ scale: 1.05 }}
              >
                <Link to={item.href}>{item.name}</Link>
              </motion.div>
            ))}
          </div>

          {/* Icons + Auth */}
          <div className="flex items-center space-x-4">
            {/* WhatsApp Icon */}
            <motion.button
              onClick={handleWhatsAppClick}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="hidden md:flex items-center justify-center p-2 rounded-full bg-green-500 text-white shadow-md hover:bg-green-600 transition-colors"
              title="Contact us on WhatsApp"
            >
              <FaWhatsapp className="h-5 w-5" />
            </motion.button>

            {user ? (
              <div className="relative profile-dropdown">
                {/* Profile Picture as Button */}
                <img
                  src={
                    "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                  }
                  alt="Profile"
                  className="w-8 h-8 rounded-full cursor-pointer border border-gray-300"
                  onClick={() => setDropdownOpen((prev) => !prev)}
                />

                {/* Dropdown */}
                {dropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 mt-2 w-64 bg-white shadow-lg rounded-lg border border-gray-200 z-50"
                  >
                    <div className="p-4 border-b border-gray-200 flex items-center space-x-3">
                      <img
                        src={
                          "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                        }
                        alt="Profile"
                        className="w-12 h-12 rounded-full"
                      />
                      <div>
                        <p className="font-semibold text-gray-800">{user.name}</p>
                        <p className="text-sm text-gray-500">{user.email}</p>
                      </div>
                    </div>
                    <div className="flex flex-col p-2">
                      <Link
                        to="/update-profile"
                        className="w-full text-left px-4 py-2 rounded hover:bg-gray-100"
                      >
                        Update Profile
                      </Link>
                      <button
                        onClick={() => navigate("/my-cart")}
                        className="w-full text-left px-4 py-2 rounded hover:bg-gray-100"
                      >
                        My Cart
                      </button>
                      <Link
                        to="/my-orders"
                        className="w-full text-left px-4 py-2 rounded hover:bg-gray-100"
                      >
                        My Orders
                      </Link>
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
              <div className="flex space-x-3">
                <button
                  onClick={() => navigate("/login")}
                  className="px-4 py-2 bg-[#0b3d60] text-white rounded hover:bg-[#174b75] transition-all"
                >
                  Login
                </button>
                <button
                  onClick={() => navigate("/register")}
                  className="px-4 py-2 border border-[#0b3d60] text-[#0b3d60] rounded hover:bg-[#0b3d60] hover:text-white transition-all"
                >
                  Register
                </button>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className={`${
                scrolled ? "text-[#0b3d60]" : "text-black"
              } focus:outline-none`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-[#0b3d60]/95 backdrop-blur-md"
        >
          <div className="px-2 pt-2 pb-3 space-y-2">
            {navItems.map((item) => (
              <motion.div
                key={item.name}
                className="block px-3 py-2 text-white font-medium hover:bg-white/10 rounded"
                whileHover={{ x: 5 }}
                onClick={() => setIsOpen(false)}
              >
                <Link to={item.href}>{item.name}</Link>
              </motion.div>
            ))}

            <motion.div
              className="block px-3 py-2 text-white font-medium hover:bg-white/10 rounded"
              whileHover={{ x: 5 }}
              onClick={handleWhatsAppClick}
            >
              <div className="flex items-center">
                <FaWhatsapp className="mr-2 text-green-400" />
                Contact via WhatsApp
              </div>
            </motion.div>

            {/* Login/Register or Logout for mobile */}
            <div className="px-3 py-2">
              {user ? (
                <button
                  onClick={handleLogout}
                  className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600"
                >
                  Logout
                </button>
              ) : (
                <div className="flex flex-col space-y-2">
                  <button
                    onClick={() => navigate("/login")}
                    className="w-full bg-[#0b3d60] text-white py-2 rounded"
                  >
                    Login
                  </button>
                  <button
                    onClick={() => navigate("/register")}
                    className="w-full border border-white text-white py-2 rounded"
                  >
                    Register
                  </button>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
