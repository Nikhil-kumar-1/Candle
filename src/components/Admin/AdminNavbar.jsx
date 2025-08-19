import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiBell, FiChevronDown } from "react-icons/fi";
import { motion } from "framer-motion";

const AdminNavbar = ( { user, setUser } ) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
    const navigate = useNavigate();
  const navLinks = [
    { name: "Dashboard", href: "/admin" },
    { name: "Products", href: "/admin/products" },
    { name: "Orders", href: "/admin/orders" },
    { name: "Users", href: "/admin/users" },
  ];

    const handleLogout = () => {
    // Implement logout logic here
    console.log("User logged out");
    localStorage.clear();
    setUser(null);
    navigate("/");
  };


  return (
    <nav className="w-full bg-white shadow px-6 py-4 flex justify-between items-center sticky top-0 z-50">
      {/* Left: Brand */}
      <div className="flex items-center gap-3">
        <img src="Logo.png" alt="CandleShop Logo" className="h-8 w-8" />
      </div>

      {/* Middle: Nav Links */}
      <div className="hidden md:flex items-center gap-6">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            to={link.href}
            className="text-gray-700 hover:text-amber-700 font-medium transition"
          >
            {link.name}
          </Link>
        ))}
      </div>

      {/* Right: Notifications + Profile */}
      <div className="flex items-center gap-4 relative">
        <FiBell className="text-gray-700 text-xl cursor-pointer" />
        <div className="relative">
          <div
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="flex items-center gap-2 cursor-pointer"
          >
            <img
              src={user?.picture }
              alt="Admin"
              className="w-8 h-8 rounded-full border border-gray-300"
            />
            <FiChevronDown className="text-gray-600" />
          </div>

          {dropdownOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 shadow-md rounded-md z-50"
            >
              <div className="px-4 py-3 text-sm text-gray-800">
                <p className="font-semibold">{user.name}</p>
                <p className="text-gray-500">{user.email}</p>
              </div>
              <hr />
              <Link
                to="/admin/settings"
                className="block px-4 py-2 text-sm hover:bg-gray-100"
              >
                Settings
              </Link>
              <button
                onClick={handleLogout}
                className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100 cursor-pointer"
              >
                Logout
              </button>
            </motion.div>
          )}
        </div>
      </div>
    </nav>
  );
};
export default AdminNavbar;