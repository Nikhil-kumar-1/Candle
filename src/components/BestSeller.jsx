import React from "react";
import { motion } from "framer-motion";

const products = [
  {
    id: 1,
    name: "Sacred Sanctuary",
    price: "₹799",
    image: "https://plus.unsplash.com/premium_photo-1695304999895-7605f13f8b02?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8U2FjcmVkJTIwU2FuY3R1YXJ5JTIwY2FuZGxlfGVufDB8fDB8fHww",
    scent: "Sandalwood & Vanilla",
    burnTime: "60 hours"
  },
  {
    id: 2,
    name: "Sunset Serenade",
    price: "₹899",
    image: "https://images.unsplash.com/photo-1631729371254-42c2892f0e6e",
    scent: "Amber & Citrus",
    burnTime: "55 hours"
  },
  {
    id: 3,
    name: "Prairie Bliss",
    price: "₹999",
    image: "https://images.unsplash.com/photo-1602874801007-bd458bb1b8b6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGFyaXNzJTIwYmxpc3MlMjBjYW5kbGV8ZW58MHx8MHx8fDA%3D",
    scent: "Lavender & Sage",
    burnTime: "70 hours"
  },
  {
    id: 4,
    name: "Lavender Fields",
    price: "₹849",
    image: "https://images.unsplash.com/photo-1605101600616-a8c6db5b98aa",
    scent: "Pure Lavender",
    burnTime: "65 hours"
  },
  {
    id: 5,
    name: "Citrus Bloom",
    price: "₹899",
    image: "https://images.unsplash.com/photo-1668699011542-155f8553220d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2l0cnVzJTIwYmxvb20lMjBjYW5kbGV8ZW58MHx8MHx8fDA%3D",
    scent: "Orange & Grapefruit",
    burnTime: "50 hours"
  },
  {
    id: 6,
    name: "Rosewood Charm",
    price: "₹749",
    image: "https://images.unsplash.com/photo-1603959452586-78397d087b62",
    scent: "Rose & Cedar",
    burnTime: "45 hours"
  }
];

const BestsellersGrid = () => {
  return (
    <section className="bg-[#F8F4EF] py-20 relative overflow-hidden">
      {/* Floating Candle Particles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-[#F6C89F]"
          style={{
            width: `${Math.random() * 6 + 2}px`,
            height: `${Math.random() * 6 + 2}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            opacity: Math.random() * 0.3 + 0.1,
            filter: 'blur(1px)'
          }}
          animate={{
            y: [0, (Math.random() - 0.5) * 40],
            x: [0, (Math.random() - 0.5) * 20],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{
            duration: Math.random() * 10 + 5,
            repeat: Infinity,
            repeatType: 'reverse'
          }}
        />
      ))}

      <motion.h2 
        className="text-center text-4xl md:text-5xl font-serif font-bold text-[#2C1E16] mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Our Bestsellers
        <div className="w-20 h-1 bg-[#F6C89F] mx-auto mt-4"></div>
      </motion.h2>

      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <motion.div
            key={product.id}
            className="relative group overflow-hidden rounded-lg shadow-xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.02 }}
          >
            {/* Product Image */}
            <div className="relative h-96 overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#2C1E16]/70"></div>
            </div>

            {/* Product Info */}
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-[#2C1E16] to-transparent">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-white"
              >
                <h3 className="text-xl font-bold mb-1">{product.name}</h3>
                <p className="text-[#F6C89F] text-lg font-medium mb-2">{product.price}</p>
                <div className="text-sm text-white/80">
                  <p>{product.scent}</p>
                  <p>Burn time: {product.burnTime}</p>
                </div>
              </motion.div>
            </div>

            {/* Add to Cart Button - Hidden until hover */}
            <motion.button
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#F6C89F] text-[#2C1E16] px-6 py-3 rounded-full font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg"
              whileHover={{ scale: 1.05 }}
            >
              Add to Cart
            </motion.button>

            {/* Floating Flame Effect on Hover */}
            <motion.div
              className="absolute top-8 right-8 w-4 h-6 bg-gradient-to-b from-[#F6C89F] to-[#FF7E5F] rounded-full opacity-0 group-hover:opacity-100"
              initial={{ y: 0 }}
              animate={{
                y: [-5, 5, -5],
                opacity: [0.8, 1, 0.8]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: 'reverse',
                delay: 0.3
              }}
              style={{
                filter: 'blur(1px)',
                boxShadow: '0 0 15px 5px rgba(246, 200, 159, 0.5)'
              }}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default BestsellersGrid;