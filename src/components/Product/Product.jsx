import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiFilter, FiX, FiChevronDown, FiChevronUp, FiStar } from 'react-icons/fi';

const Product = () => {
  const [showFilters, setShowFilters] = useState(false);
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [sortBy, setSortBy] = useState('featured');

  const products = [
    { id: 1, name: 'Lavender Dream', price: 24.99, category: 'Floral', rating: 4.5, image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e' },
    { id: 2, name: 'Citrus Burst', price: 19.99, category: 'Fruity', rating: 4.2, image: 'https://images.unsplash.com/photo-1603959452586-78397d087b62' },
    { id: 3, name: 'Vanilla Cloud', price: 29.99, category: 'Sweet', rating: 4.8, image: 'https://images.unsplash.com/photo-1512275428636-76c9d55af6e3' },
    { id: 4, name: 'Ocean Breeze', price: 22.99, category: 'Fresh', rating: 4.3, image: 'https://images.unsplash.com/photo-1605000797499-95a51c5269ae' },
    { id: 5, name: 'Sandalwood', price: 27.99, category: 'Woody', rating: 4.6, image: 'https://images.unsplash.com/photo-1608085021802-e886468f5fc1' },
    { id: 6, name: 'Rose Petals', price: 26.99, category: 'Floral', rating: 4.7, image: 'https://images.unsplash.com/photo-1476900966873-ab290e38e3f7' },
  ];

  const categories = [...new Set(products.map(product => product.category))];

  const toggleCategory = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter(c => c !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  const filteredProducts = products
    .filter(product => 
      (selectedCategories.length === 0 || selectedCategories.includes(product.category)) &&
      product.price >= priceRange[0] && product.price <= priceRange[1]
    )
    .sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return a.id - b.id; // default featured
    });

  return (
    <div className="min-h-screen bg-[#fafaf1] pt-24 pb-8 px-4 sm:px-6 lg:px-8 font-poppins">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
      `}</style>
      
      <div className="max-w-7xl mx-auto">
        {/* Header and Filter Button */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-[#152336]">Our Candles</h1>
          <motion.button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 px-4 py-2 bg-[#f1ead8] border border-[#152336]/20 rounded-lg text-[#152336] hover:bg-[#f4aa2d]/20"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {showFilters ? <FiX size={18} /> : <FiFilter size={18} />}
            <span>Filters</span>
          </motion.button>
        </div>

        {/* Filter Panel */}
        <AnimatePresence>
          {showFilters && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-[#f1ead8] rounded-lg shadow-md p-6 mb-8 overflow-hidden border border-[#152336]/10"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Price Range Filter */}
                <div>
                  <h3 className="font-medium text-[#152336] mb-3 flex items-center justify-between">
                    Price Range
                    <span className="text-sm font-normal text-[#152336]/80">
                      ${priceRange[0]} - ${priceRange[1]}
                    </span>
                  </h3>
                  <div className="px-2">
                    <input
                      type="range"
                      min="0"
                      max="1000"
                      value={priceRange[0]}
                      onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])}
                      className="w-full mb-2 accent-[#f4aa2d]"
                    />
                    <input
                      type="range"
                      min="0"
                      max="1000"
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                      className="w-full accent-[#f4aa2d]"
                    />
                  </div>
                </div>

                {/* Category Filter */}
                <div>
                  <h3 className="font-medium text-[#152336] mb-3">Categories</h3>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <motion.label
                        key={category}
                        whileHover={{ x: 5 }}
                        className="flex items-center space-x-3 cursor-pointer"
                      >
                        <input
                          type="checkbox"
                          checked={selectedCategories.includes(category)}
                          onChange={() => toggleCategory(category)}
                          className="h-4 w-4 text-[#f4aa2d] rounded border-[#152336]/30 focus:ring-[#f4aa2d]"
                        />
                        <span className="text-[#152336]">{category}</span>
                      </motion.label>
                    ))}
                  </div>
                </div>

                {/* Sort By */}
                <div>
                  <h3 className="font-medium text-[#152336] mb-3">Sort By</h3>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="w-full p-2 border border-[#152336]/20 rounded-md focus:ring-[#f4aa2d] focus:border-[#f4aa2d] text-[#152336] bg-[#fafaf1]"
                  >
                    <option value="featured">Featured</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="rating">Highest Rated</option>
                  </select>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-[#f1ead8] rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-[#152336]/10"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <div className="flex justify-between items-start">
                  <h3 className="text-lg font-semibold text-[#152336]">{product.name}</h3>
                  <span className="text-lg font-bold text-[#2d526e]">${product.price}</span>
                </div>
                <div className="mt-1 flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <FiStar
                      key={i}
                      className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'text-[#f4aa2d] fill-[#f4aa2d]' : 'text-[#152336]/30'}`}
                    />
                  ))}
                  <span className="ml-1 text-sm text-[#152336]/80">({product.rating})</span>
                </div>
                <span className="inline-block mt-2 px-3 py-1 text-xs font-medium bg-[#a4c8d8] text-[#152336] rounded-full">
                  {product.category}
                </span>
                <motion.button
                  className="mt-4 w-full bg-[#2d526e] hover:bg-[#152336] text-[#f1ead8] py-2 px-4 rounded-lg transition-colors duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Add to Cart
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-lg font-medium text-[#152336]">No products match your filters</h3>
            <p className="mt-2 text-[#152336]/80">Try adjusting your filters to find what you're looking for</p>
            <button
              onClick={() => {
                setSelectedCategories([]);
                setPriceRange([0, 1000]);
              }}
              className="mt-4 text-[#2d526e] hover:text-[#152336] font-medium"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Product;