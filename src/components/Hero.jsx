import React, { useState } from "react";
import { motion } from "framer-motion";

const categories = [
  {
    name: "SILKEN GLOW",
    items: 18,
    hoverText: "Mystical fragrances that transform your space",
    candleImg: "https://images.unsplash.com/photo-1608085021802-e886468f5fc1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGNhbmRsZXxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    name: "DUSK RITUAL",
    items: 18,
    hoverText: "Stellar scents that elevate your senses",
    candleImg: "https://plus.unsplash.com/premium_photo-1695449332324-8e790ea66bf0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njl8fGJsYWNrJTIwY2FuZGxlfGVufDB8fDB8fHww"
  },
  {
    name: "ENCHANTED WOODS",
    items: 18,
    hoverText: "Free-spirited aromas for your wanderlust soul",
    candleImg: "https://images.unsplash.com/photo-1477313372947-d68a7d410e9f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODR8fGJsYWNrJTIwY2FuZGxlfGVufDB8fDB8fHww"
  },
  {
    name: "MIST & BLOOM",
    items: 18,
    hoverText: "Warm coffee-inspired fragrances to awaken",
    candleImg: "https://images.unsplash.com/photo-1477659803863-c1bf91b34c90?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTIyfHxibGFjayUyMGNhbmRsZXxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    name: "TIPSY PETALS",
    items: 18,
    hoverText: "Our most loved creations by customers",
    candleImg: "https://images.unsplash.com/photo-1705838942246-1002aa0fdd93?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTMwfHxibGFjayUyMGNhbmRsZXxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    name: "CLASSIC",
    items: 18,
    hoverText: "Zesty and refreshing energy boosters",
    candleImg: "https://images.unsplash.com/photo-1683640862718-c001169c8514?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQ4fHxibGFjayUyMGNhbmRsZXxlbnwwfHwwfHx8MA%3D%3D"
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