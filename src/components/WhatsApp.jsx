import React, { useState } from "react";
import { FaWhatsapp, FaPhoneAlt, FaArrowUp, FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function FloatingIcons() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed right-4 bottom-4 flex flex-col items-end z-50">
      {/* Icons container */}
      <div
        className={`flex flex-col items-end gap-3 mb-2 transition-all duration-300 ${
          isOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20 pointer-events-none"
        }`}
      >
        {/* WhatsApp Icon */}
        <a
          href="https://wa.me/919999999999" // replace with your number
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition"
        >
          <FaWhatsapp size={24} />
        </a>

        {/* Call Icon */}
        <a
          href="tel:+919999999999" // replace with your number
          className="cursor-pointer bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition"
        >
          <FaPhoneAlt size={22} />
        </a>

        {/* Back to Top Icon */}
        <button
          onClick={scrollToTop}
          className="cursor-pointer bg-gray-700 text-white p-3 rounded-full shadow-lg hover:bg-gray-800 transition"
        >
          <FaArrowUp size={22} />
        </button>
      </div>

      {/* Toggle Arrow Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="cursor-pointer bg-yellow-500 text-white p-3 rounded-full shadow-lg hover:bg-yellow-600 transition"
      >
        {isOpen ? <FaChevronRight size={20} /> : <FaChevronLeft size={20} />}
      </button>
    </div>
  );
}
