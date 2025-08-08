import React, { useState } from "react";
import { motion } from "framer-motion";

const categories = [
  {
    name: "ALCHEMY",
    items: 18,
    hoverText: "Mystical fragrances that transform your space",
    candleImg: "https://images.unsplash.com/photo-1605101600616-a8c6db5b98aa"
  },
  {
    name: "CELESTIAL",
    items: 18,
    hoverText: "Stellar scents that elevate your senses",
    candleImg: "https://images.unsplash.com/photo-1476900164809-ff19b8ae5968"
  },
  {
    name: "BOHEMIAN BLISS",
    items: 18,
    hoverText: "Free-spirited aromas for your wanderlust soul",
    candleImg: "https://images.unsplash.com/photo-1608085021802-e886468f5fc1"
  },
  {
    name: "CAFÉ DELIGHTS",
    items: 18,
    hoverText: "Warm coffee-inspired fragrances to awaken",
    candleImg: "https://images.unsplash.com/photo-1605101600616-a8c6db5b98aa"
  },
  {
    name: "BEST SELLER",
    items: 18,
    hoverText: "Our most loved creations by customers",
    candleImg: "https://images.unsplash.com/photo-1512275428636-76c9d55af6e3"
  },
  {
    name: "CITRUS BURST",
    items: 18,
    hoverText: "Zesty and refreshing energy boosters",
    candleImg: "https://images.unsplash.com/photo-1603959452586-78397d087b62"
  },
];

export default function HeroSection() {
  const [bgImage, setBgImage] = useState(
    "https://images.unsplash.com/photo-1636714477840-3968c444f8ed"
  );
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="relative w-full h-screen overflow-hidden bg-[#152336] font-poppins">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
      `}</style>

      {/* Background Image */}
      <motion.div
        className="absolute inset-0 bg-center bg-cover"
        style={{ backgroundImage: `url(${bgImage})` }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        key={bgImage}
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#152336]/50" />

      {/* Navbar */}
      <nav className="relative z-20 py-4 px-8">
        <div className="flex justify-between items-center">
          <div className="text-3xl font-bold tracking-wider text-[#f1ead8]">RAVANGI</div>
          <div className="hidden md:flex space-x-8">
            {["Shop", "Collections", "About", "Journal", "Contact"].map((item) => (
              <a 
                key={item} 
                href="#" 
                className="text-[#f1ead8] hover:text-[#f4aa2d] transition-colors duration-300 font-medium"
              >
                {item}
              </a>
            ))}
          </div>
          <div className="flex space-x-6">
            <svg className="w-6 h-6 text-[#f1ead8] hover:text-[#f4aa2d] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <div className="relative">
              <svg className="w-6 h-6 text-[#f1ead8] hover:text-[#f4aa2d] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span className="absolute -top-2 -right-2 bg-[#eb4636] text-[#fafaf1] rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                0
              </span>
            </div>
          </div>
        </div>
      </nav>

      {/* Category Grid */}
      <div className="relative z-10 max-w-7xl mx-auto h-full flex items-center px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 w-full">
          {categories.map((cat, index) => (
            <motion.div
              key={index}
              onMouseEnter={() => {
                setBgImage(cat.candleImg);
                setHoveredIndex(index);
              }}
              onMouseLeave={() => {
                setBgImage("https://images.unsplash.com/photo-1636714477840-3968c444f8ed");
                setHoveredIndex(null);
              }}
              className="relative h-48 cursor-pointer group"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            >
              {/* Box Overlay - Transparent by default, slightly opaque when hovered */}
              <div 
                className="absolute inset-0 border border-[#f1ead8]/30 transition-all duration-300"
                style={{
                  backgroundColor: hoveredIndex === index 
                    ? 'rgba(21, 35, 54, 0.5)' // Slightly opaque when hovered
                    : 'rgba(21, 35, 54, 0)', // Fully transparent by default
                  backdropFilter: hoveredIndex === index ? 'blur(2px)' : 'none'
                }}
              />
              
              <div className="relative h-full p-6 flex flex-col justify-end">
                <motion.h2 
                  className="text-xl font-semibold text-[#f1ead8]"
                  whileHover={{ x: 5 }}
                >
                  {cat.name}
                </motion.h2>
                <p className="text-sm text-[#f1ead8]/80 mt-1">{cat.items} Items</p>
                
                {hoveredIndex === index && (
                  <motion.p 
                    className="text-[#f1ead8] mt-2 text-sm font-light"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    {cat.hoverText}
                  </motion.p>
                )}
              </div>
              
              {/* Glow Effect */}
              {hoveredIndex === index && (
                <div 
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    boxShadow: `0 0 40px 15px rgba(244, 170, 45, 0.2)`,
                    transition: 'all 0.5s ease'
                  }}
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-[#f4aa2d]"
            style={{
              width: `${Math.random() * 5 + 2}px`,
              height: `${Math.random() * 5 + 2}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.3 + 0.1,
              filter: 'blur(1px)'
            }}
            animate={{
              y: [0, (Math.random() - 0.5) * 30],
              x: [0, (Math.random() - 0.5) * 15],
              opacity: [0.2, 0.5, 0.2]
            }}
            transition={{
              duration: Math.random() * 8 + 4,
              repeat: Infinity,
              repeatType: 'reverse'
            }}
          />
        ))}
      </div>
    </section>
  );
}