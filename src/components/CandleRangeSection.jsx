import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const CandleRangeSection = () => {
  return (
    <section className="relative py-20 bg-[#F8F4EF] overflow-hidden">
      {/* Soft background glow effect */}
      <div className="absolute inset-0 overflow-hidden opacity-15">
        <div className="absolute top-1/4 -left-20 w-80 h-80 rounded-full bg-[#F6E3CE] mix-blend-multiply filter blur-[100px]"></div>
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 rounded-full bg-[#E8D5C0] mix-blend-multiply filter blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Candle Range Section */}
          <motion.div 
            className="bg-white p-10 rounded-xl shadow-lg border border-[#F0E6D9] relative z-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col h-full">
              <h2 className="text-4xl font-serif font-bold text-[#2C1E16] mb-4">CANDLE RANGE</h2>
              <p className="text-xl italic text-[#7A6A5D] mb-6">Glow with Elegance</p>
              
              <p className="text-[#5A4A42] mb-8 leading-relaxed">
                All our handmade candles are perfect for gifting or adding a soft touch of elegance to any space.
              </p>
              
              <div className="mt-auto">
                <Link 
                  to="/product" 
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#2C1E16] hover:bg-[#3E2D22] transition-all duration-300 group"
                >
                  Shop Now
                  <svg 
                    className="ml-2 -mr-1 w-5 h-5 group-hover:translate-x-1 transition-transform" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Decor Section */}
          <motion.div 
            className="bg-white p-10 rounded-xl shadow-lg border border-[#F0E6D9] relative z-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col h-full">
              <h2 className="text-4xl font-serif font-bold text-[#2C1E16] mb-4">DECOR</h2>
              <p className="text-xl italic text-[#7A6A5D] mb-6">When flowers whisper and lights twinkle</p>
              
              <p className="text-[#5A4A42] mb-8 leading-relaxed">
                Elevate your space with cozy charm and soft glowing floral elegance.
              </p>
              
              <div className="mt-auto">
                <Link 
                  to="/product" 
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#2C1E16] hover:bg-[#3E2D22] transition-all duration-300 group"
                >
                  Shop Now
                  <svg 
                    className="ml-2 -mr-1 w-5 h-5 group-hover:translate-x-1 transition-transform" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Floating candle images - More elegant version */}
        <motion.div 
          className="absolute left-0 top-1/3 hidden lg:block z-10"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          animate={{
            y: ["0%", "-5%", "0%"],
          }}
          
        >
          <div className="relative w-48 h-48">
           
          </div>
        </motion.div>

        <motion.div 
          className="absolute right-0 bottom-1/4 hidden lg:block z-10"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          animate={{
            y: ["0%", "5%", "0%"],
          }}
          
        >
          <div className="relative w-48 h-48">
           
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CandleRangeSection;