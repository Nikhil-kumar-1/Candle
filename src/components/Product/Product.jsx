import React, { useState, useEffect, useMemo } from "react";
import { FiShoppingCart, FiHeart, FiSearch, FiChevronDown } from "react-icons/fi";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const API_URL = import.meta.env.VITE_API_URL;

function Product() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [cartCounts, setCartCounts] = useState({});
  const [isAddingMap, setIsAddingMap] = useState({});
  const [wishlist, setWishlist] = useState({});

  // Filters
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("");
  const [priceRange, setPriceRange] = useState([0, 10000]);
  const [sortBy, setSortBy] = useState("");
  const [showFilters, setShowFilters] = useState(false);

  // Fetch products
  useEffect(() => {
    async function fetchProducts() {
      setLoading(true);
      setError(null);
      try {
        let url = `${API_URL}/get-all-products`;

        if (searchQuery) {
          url = `${API_URL}/search?query=${encodeURIComponent(searchQuery)}`;
        } else if (selectedCategory) {
          url = `${API_URL}/products-by-category/${encodeURIComponent(selectedCategory)}`;
        } else if (selectedBrand) {
          url = `${API_URL}/products-by-brand/${encodeURIComponent(selectedBrand)}`;
        } else if (sortBy === "top-rated") {
          url = `${API_URL}/top-rated-products`;
        } else if (sortBy === "latest") {
          url = `${API_URL}/latest-products`;
        } else if (sortBy === "featured") {
          url = `${API_URL}/featured-products`;
        } else if (sortBy === "price-low" || sortBy === "price-high") {
          url = `${API_URL}/products-by-price?min=${priceRange[0]}&max=${priceRange[1]}`;
        }

        const res = await fetch(url);
        if (!res.ok) throw new Error("Failed to fetch products");
        const data = await res.json();
        setProducts(data || []);
      } catch (err) {
        setError(err.message);
        setProducts([]);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, [searchQuery, selectedCategory, selectedBrand, priceRange, sortBy]);

  // Categories & Brands
  const categories = useMemo(
    () => Array.from(new Set(products.map((p) => p.category))),
    [products]
  );

  const brands = useMemo(
    () => Array.from(new Set(products.map((p) => p.brand))),
    [products]
  );

  const sortedProducts = useMemo(() => {
    let sorted = [...products];
    if (sortBy === "price-low") sorted.sort((a, b) => a.price - b.price);
    else if (sortBy === "price-high") sorted.sort((a, b) => b.price - a.price);
    else if (sortBy === "rating") sorted.sort((a, b) => b.ratings - a.ratings);
    return sorted;
  }, [products, sortBy]);

  // Cart handler
  const handleClick = async (product, quantityChange) => {
    const productId = product._id;

    if (!localStorage.getItem("token")) {
      alert("Please login to modify your cart.");
      return;
    }
    setIsAddingMap((prev) => ({ ...prev, [productId]: true }));
    try {
      if (quantityChange > 0) {
        await fetch(`${API_URL}/add-to-cart`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify({ productId, quantity: 1 }),
        });
      } else {
        await fetch(`${API_URL}/remove-from-cart/${productId}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
      }
      setCartCounts((prev) => {
        const current = prev[productId] || 0;
        const newCount = Math.max(0, current + quantityChange);
        return { ...prev, [productId]: newCount };
      });
    } catch (err) {
      console.error("Error updating cart:", err);
    }
    setIsAddingMap((prev) => ({ ...prev, [productId]: false }));
  };

  // Toggle wishlist
  const toggleWishlist = (productId) => {
    setWishlist((prev) => ({
      ...prev,
      [productId]: !prev[productId]
    }));
  };

  return (
    <div className="bg-[#fafaf1] min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-[#152336] overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1675016347509-093144919151?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdCUyMGNhbmRsZSUyMGJsYWNrfGVufDB8fDB8fHww')] bg-cover bg-center opacity-30"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.h1
            className="text-5xl md:text-6xl font-bold text-[#f1ead8] mb-6 leading-tight"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Explore Our Product Catalog
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-[#f1ead8]/90 mb-8 font-light"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Discover premium products with the best deals, curated just for you.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <div className="w-24 h-1 bg-[#f4aa2d] mx-auto"></div>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <svg
            className="w-8 h-8 text-[#f1ead8]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </section>

      {/* Filters */}
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div className="relative w-full md:w-1/3">
            <FiSearch className="absolute left-3 top-3.5 text-gray-400" />
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 p-3 w-full border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#152336]"
            />
          </div>

          <button 
            onClick={() => setShowFilters(!showFilters)}
            className="md:hidden flex items-center justify-center gap-2 bg-[#152336] text-white py-2 px-4 rounded-lg"
          >
            Filters <FiChevronDown className={`transition-transform ${showFilters ? 'rotate-180' : ''}`} />
          </button>

          <div className={`${showFilters ? 'flex' : 'hidden'} md:flex flex-wrap gap-4`}>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="border border-gray-300 rounded-lg p-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#152336]"
            >
              <option value="">All Categories</option>
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>

            <select
              value={selectedBrand}
              onChange={(e) => setSelectedBrand(e.target.value)}
              className="border border-gray-300 rounded-lg p-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#152336]"
            >
              <option value="">All Brands</option>
              {brands.map((brand) => (
                <option key={brand} value={brand}>
                  {brand}
                </option>
              ))}
            </select>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="border border-gray-300 rounded-lg p-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#152336]"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Top Rated</option>
              <option value="latest">Latest</option>
              <option value="top-rated">Top Rated (Backend)</option>
            </select>
          </div>
        </div>

        {/* Products */}
        {loading && (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#152336]"></div>
          </div>
        )}
        
        {error && <p className="text-red-600 text-center py-10">{error}</p>}
        
        {!loading && !error && sortedProducts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-500 text-xl">No products found. Try changing filters.</p>
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <AnimatePresence>
            {sortedProducts.map((product) => {
              const productId = product._id;
              const count = cartCounts[productId] || 0;
              const isAdding = isAddingMap[productId] || false;
              const isWishlisted = wishlist[productId] || false;

              return (
                <motion.div
                  key={productId}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col transform hover:-translate-y-2"
                >
                  <div className="relative overflow-hidden">
                    <Link to={`/product/${productId}`} className="block">
                      <img
                        src={product.images?.[0] || product.image}
                        alt={product.name}
                        className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </Link>
                    
                    {/* Wishlist button */}
                    <button
                      onClick={() => toggleWishlist(productId)}
                      className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md hover:bg-red-50 transition-colors"
                    >
                      <FiHeart 
                        className={`text-lg ${isWishlisted ? 'text-red-500 fill-red-500' : 'text-gray-600'}`} 
                      />
                    </button>
                    
                    {/* Quick view button */}
                    <button className="absolute top-12 right-3 p-2 bg-white rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <FiSearch className="text-lg text-gray-600" />
                    </button>
                    
                    {/* Discount badge */}
                    {product.discount && (
                      <div className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                        -{product.discount}%
                      </div>
                    )}
                  </div>
                  
                  <div className="p-5 flex-1 flex flex-col">
                    <Link to={`/product/${productId}`} className="flex-1">
                      <h2 className="text-lg font-semibold text-[#152336] line-clamp-2 mb-2 group-hover:text-[#f4aa2d] transition-colors">
                        {product.name}
                      </h2>
                      <p className="text-sm text-gray-500 mb-3">
                        {product.category} • {product.brand}
                      </p>
                      
                      <div className="flex items-center mb-3">
                        <div className="flex text-yellow-400">
                          {[...Array(5)].map((_, i) => (
                            <svg 
                              key={i} 
                              className={`w-4 h-4 ${i < Math.floor(product.ratings || product.rating || 0) ? 'fill-current' : 'stroke-current'}`} 
                              viewBox="0 0 24 24"
                            >
                              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                            </svg>
                          ))}
                        </div>
                        <span className="text-xs text-gray-500 ml-1">
                          ({product.reviewCount || 0})
                        </span>
                      </div>
                      
                      <div className="mt-auto">
                        <div className="flex items-center justify-between">
                          <p className="text-xl font-bold text-[#152336]">
                            ₹{product.price}
                          </p>
                          {product.originalPrice && (
                            <p className="text-sm text-gray-500 line-through">
                              ₹{product.originalPrice}
                            </p>
                          )}
                        </div>
                      </div>
                    </Link>
                    
                    <div className="flex gap-2 mt-4">
                      <button
                        onClick={() => handleClick(product, 1)}
                        disabled={isAdding}
                        className="flex-1 flex items-center justify-center gap-2 bg-[#152336] text-white py-3 rounded-lg hover:bg-[#1e3450] transition-all disabled:opacity-50 group/cart"
                      >
                        <FiShoppingCart className="group-hover/cart:scale-110 transition-transform" />
                        {isAdding ? 'Adding...' : count > 0 ? `Cart (${count})` : 'Add to Cart'}
                      </button>

                      {count > 0 && (
                        <button
                          onClick={() => handleClick(product, -1)}
                          disabled={isAdding}
                          className="w-12 flex items-center justify-center bg-red-500 text-white py-3 rounded-lg hover:bg-red-600 transition-all disabled:opacity-50"
                        >
                          -
                        </button>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

export default Product;