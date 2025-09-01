import React, { useState } from "react";
import { motion } from "framer-motion";
import SilkenGlow from "../assets/Category/SilkenGlow2.webp";
import DuskRitual from "../assets/Category/DuskRitual.webp";
import EnchantedWood from "../assets/Category/EnchantedWood2.webp";
import MistBloom from "../assets/Category/MistBloom.webp";
import TipsyPetal from "../assets/Category/TipsyPetal2.webp";
import Classic from "../assets/Category/Classic.webp";
import Cover from "../assets/Category/heart.webp";
import { Link } from "react-router-dom";

const categories = [
  {
    name: "SILKEN GLOW",
    items: 18,
    hoverText: "Mystical fragrances that transform your space",
    candleImg: SilkenGlow,
  },
  {
    name: "DUSK RITUAL",
    items: 18,
    hoverText: "Stellar scents that elevate your senses",
    candleImg: DuskRitual,
  },
  {
    name: "ENCHANTED WOODS",
    items: 18,
    hoverText: "Free-spirited aromas for your wanderlust soul",
    candleImg: EnchantedWood,
  },
  {
    name: "MIST & BLOOM",
    items: 18,
    hoverText: "Warm coffee-inspired fragrances to awaken",
    candleImg: MistBloom,
  },
  {
    name: "TIPSY PETALS",
    items: 18,
    hoverText: "Our most loved creations by customers",
    candleImg: TipsyPetal,
  },
  {
    name: "CLASSIC",
    items: 18,
    hoverText: "Zesty and refreshing energy boosters",
    candleImg: Classic,
  },
];

// Generate particle initial positions once
const generateParticles = (count = 15) =>
  Array.from({ length: count }, () => ({
    width: Math.random() * 5 + 2,
    height: Math.random() * 5 + 2,
    left: Math.random() * 100,
    top: Math.random() * 100,
    opacity: Math.random() * 0.3 + 0.1,
    yAnim: (Math.random() - 0.5) * 30,
    xAnim: (Math.random() - 0.5) * 15,
    duration: Math.random() * 8 + 4,
  }));

export default function HeroSection() {
  const [bgImage, setBgImage] = useState(Cover);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const particles = React.useMemo(() => generateParticles(15), []);

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
                setBgImage(Cover);
                setHoveredIndex(null);
              }}
              className="relative h-48 cursor-pointer group"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            >
              <Link to={`/category/${cat.name.replace(/\s+/g, "-").toLowerCase()}`} >
              {/* Box Overlay */}
              <div
                className="absolute inset-0 border border-[#f1ead8]/30 transition-all duration-300"
                style={{
                  backgroundColor:
                    hoveredIndex === index
                      ? "rgba(21, 35, 54, 0.5)"
                      : "rgba(21, 35, 54, 0)", // Opaque when hovered
                  backdropFilter: hoveredIndex === index ? "blur(2px)" : "none",
                }}
              />

              <div className="relative h-full p-6 flex flex-col justify-end">
                <motion.h2
                  className="text-xl font-semibold text-[#f1ead8]"
                  whileHover={{ x: 5 }}
                >
                  {cat.name}
                </motion.h2>
                <p className="text-sm text-[#f1ead8]/80 mt-1">
                  {cat.items} Items
                </p>

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
                    boxShadow: "0 0 40px 15px rgba(244, 170, 45, 0.2)",
                    transition: "all 0.5s ease",
                  }}
                  />
              )}
          </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((particle, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-[#f4aa2d]"
            style={{
              width: `${particle.width}px`,
              height: `${particle.height}px`,
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              opacity: particle.opacity,
              filter: "blur(1px)",
            }}
            animate={{
              y: [0, particle.yAnim],
              x: [0, particle.xAnim],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>
    </section>
  );
}
