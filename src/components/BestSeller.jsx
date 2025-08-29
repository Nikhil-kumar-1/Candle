import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const API_URL = import.meta.env.VITE_API_URL;

const BestsellersGrid = () => {
  const [products, setProducts] = useState([]);
  const [cartLoading, setCartLoading] = useState(false);
  const [cartError, setCartError] = useState(null);
  const [cartSuccess, setCartSuccess] = useState(null);

  const handleAddToCart = async (product) => {
    const token = localStorage.getItem("token");
    if (!token) {
      alert("Please login first to add items to your cart.");
      return;
    }

    setCartLoading(true);
    setCartError(null);
    setCartSuccess(null);

    try {
      const res = await fetch(`${API_URL}/add-to-cart`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          productId: product._id,
          quantity: 1,
        }),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.message || "Failed to add to cart");

      setCartSuccess("Product added to cart!");
    } catch (err) {
      setCartError(err.message);
    } finally {
      setCartLoading(false);
    }
  };

  useEffect(() => {
    const fetchTopRatedProducts = async () => {
      try {
        const res = await fetch(`${API_URL}/top-rated-products`);
        const data = await res.json();
        console.log("Top Rated Products:", data);
        setProducts(data);
      } catch (error) {
        console.error("Error fetching top-rated products:", error);
      }
    };

    fetchTopRatedProducts();
  }, []);

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
            filter: "blur(1px)",
          }}
          animate={{
            y: [0, (Math.random() - 0.5) * 40],
            x: [0, (Math.random() - 0.5) * 20],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: Math.random() * 10 + 5,
            repeat: Infinity,
            repeatType: "reverse",
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
        Top Rated Products
        <div className="w-20 h-1 bg-[#F6C89F] mx-auto mt-4"></div>
      </motion.h2>
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <motion.div
            key={product._id}
            className="relative group overflow-hidden rounded-lg shadow-xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.02 }}
          >
          <Link to={`/product/${product._id}`}>
            {/* Product Image */}
            <div className="relative h-96 overflow-hidden">
              <img
                src={product.images?.[0] || "https://via.placeholder.com/600"}
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
                <p className="text-[#F6C89F] text-lg font-medium mb-2">
                  ₹{product.price}
                </p>
                <div className="text-sm text-white/80 mb-4">
                  <p>Brand: {product.brand}</p>
                  <p>Category: {product.category}</p>
                  <p>⭐ {product.ratings} / 5</p>
                </div>

                {/* Add to Cart Button - Always Visible */}
                <motion.button
                  className="bg-[#F6C89F] text-[#2C1E16] px-6 py-3 rounded-full font-medium shadow-lg w-full"
                  whileHover={{ scale: 1.05 }}
                  disabled={cartLoading}
                  onClick={() => handleAddToCart(product)}
                >
                  {cartLoading ? "Adding..." : "Add to Cart"}
                </motion.button>

                {/* Feedback */}
                {cartError && (
                  <p className="text-red-400 text-sm mt-2">{cartError}</p>
                )}
                {cartSuccess && (
                  <p className="text-green-400 text-sm mt-2">{cartSuccess}</p>
                )}
              </motion.div>
            </div>
        </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default BestsellersGrid;
