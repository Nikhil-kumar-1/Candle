import { motion } from "framer-motion";
import { FiMenu, FiX, FiShoppingCart, FiSearch } from "react-icons/fi";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/product" },
    { name: "Collections", href: "/collections" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav
      className={` top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-[#efe9e1] shadow-md" : "bg-[#F8F4EF]"
      } backdrop-blur-md`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          {/* Logo */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2"
          >
            <img src="Logo.png" alt="Ravangi Logo" className="h-15 w-auto drop-shadow-lg" />
            
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
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

          {/* Icons */}
          <div className="hidden md:flex items-center space-x-6">
            <motion.button 
              whileHover={{ scale: 1.1 }} 
              whileTap={{ scale: 0.9 }} 
              className={`${scrolled ? "text-[#0b3d60]" : "text-[#0b3d60]"}`}
              style={{
                textShadow: scrolled ? "none" : "0px 2px 6px rgba(0,0,0,0.7)",
              }}
            >
              <FiSearch className="h-5 w-5" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className={`${scrolled ? "text-[#0b3d60]" : "text-[#0b3d60]"} relative`}
              style={{
                textShadow: scrolled ? "none" : "0px 2px 6px rgba(0,0,0,0.7)",
              }}
            >
              <FiShoppingCart className="h-5 w-5" />
              <span className="absolute -top-2 -right-2 bg-[#0b3d60] text-white font-bold text-xs rounded-full h-5 w-5 flex items-center justify-center">
                0
              </span>
            </motion.button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className={`${scrolled ? "text-[#0b3d60]" : "text-black"} focus:outline-none`}
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
              <motion.a
                key={item.name}
                href={item.href}
                className="block px-3 py-2 text-white font-medium hover:bg-white/10 rounded"
                style={{ textShadow: "0px 2px 6px rgba(0,0,0,0.7)" }}
                whileHover={{ x: 5 }}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </motion.a>
            ))}
            <div className="flex space-x-4 px-3 py-2">
              <motion.button 
                whileHover={{ scale: 1.1 }} 
                whileTap={{ scale: 0.9 }} 
                className="text-white"
                style={{ textShadow: "0px 2px 6px rgba(0,0,0,0.7)" }}
              >
                <FiSearch className="h-5 w-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="text-white relative"
                style={{ textShadow: "0px 2px 6px rgba(0,0,0,0.7)" }}
              >
                <FiShoppingCart className="h-5 w-5" />
                <span className="absolute -top-2 -right-2 bg-white text-[#0b3d60] font-bold text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  0
                </span>
              </motion.button>
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
