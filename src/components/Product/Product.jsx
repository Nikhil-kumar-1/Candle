import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiFilter, FiX, FiChevronDown, FiChevronUp, FiStar, FiShoppingCart } from 'react-icons/fi';
import SilkenGlow from '../../assets/Category/SilkenGlow2.webp';
import DuskRitual from '../../assets/Category/DuskRitual.webp';
import EnchantedWood from '../../assets/Category/EnchantedWood2.webp';
import MIstBloom from '../../assets/Category/MistBloom.webp';
import TipsyPetal from '../../assets/Category/TipsyPetal2.webp';
import Classic from '../../assets/Category/Classic.webp';
const ProductPage = () => {
  const [showFilters, setShowFilters] = useState(false);
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [sortBy, setSortBy] = useState('featured');
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
  { 
    id: 1, 
    name: 'SILKEN GLOW', 
    price: 24.99, 
    category: 'Floral', 
    rating: 4.5, 
    description: 'Soft lavender and creamy vanilla notes blend to create a calming ambiance, perfect for unwinding after a long day.',
    details: '100% soy wax, 50hr burn time, phthalate-free fragrance, hand-poured in small batches',
    image: SilkenGlow
  },
  { 
    id: 2, 
    name: 'Majestic Flames', 
    price: 19.99, 
    category: 'Fruity', 
    rating: 4.2, 
    description: 'Bright citrus blend of orange, lemon, and grapefruit to energize your space and uplift your mood.',
    details: '100% soy wax, 45hr burn time, phthalate-free fragrance, eco-friendly packaging',
    image: DuskRitual
  },
{
    id: 3, 
    name: 'ENCHANTED WOODS', 
    price: 29.99, 
    category: 'Sweet', 
    rating: 4.8, 
    description: 'Warm vanilla intertwined with caramel and almond notes for a cozy, inviting fragrance.',
    details: '100% soy wax, 60hr burn time, phthalate-free fragrance, slow-burning wick',
    image: EnchantedWood
  },
  { 
    id: 4, 
    name: 'MIST & BLOOM', 
    price: 22.99, 
    category: 'Fresh', 
    rating: 4.3, 
    description: 'Refreshing aquatic notes combined with sea salt and driftwood to create a crisp and clean atmosphere.',
    details: '100% soy wax, 48hr burn time, phthalate-free fragrance, natural cotton wick',
    image: MIstBloom
  },
  { 
    id: 5, 
    name: 'MiniGlow', 
    price: 27.99, 
    category: 'Woody', 
    rating: 4.6, 
    description: 'Rich sandalwood fused with warm amber and floral petals for a sophisticated and grounding aroma.',
    details: '100% soy wax, 55hr burn time, phthalate-free fragrance, eco-friendly soy wax blend',
    image: TipsyPetal 
  },
  { 
    id: 6, 
    name: 'CLASSIC', 
    price: 26.99, 
    category: 'Floral', 
    rating: 4.7, 
    description: 'Elegant bouquet of fresh roses complemented with subtle green undertones for a timeless floral scent.',
    details: '100% soy wax, 52hr burn time, phthalate-free fragrance, handmade with premium ingredients',
    image: Classic
  },
  { 
    id: 6, 
    name: 'TEALIGHTS REVERIE', 
    price: 26.99, 
    category: 'Floral', 
    rating: 4.7, 
    description: 'Elegant bouquet of fresh roses complemented with subtle green undertones for a timeless floral scent.',
    details: '100% soy wax, 52hr burn time, phthalate-free fragrance, handmade with premium ingredients',
    image: Classic
  },
  { 
    id: 6, 
    name: 'DECOR LIGHTS', 
    price: 26.99, 
    category: 'Floral', 
    rating: 4.7, 
    description: 'Elegant bouquet of fresh roses complemented with subtle green undertones for a timeless floral scent.',
    details: '100% soy wax, 52hr burn time, phthalate-free fragrance, handmade with premium ingredients',
    image: Classic
  },
  { 
    id: 6, 
    name: 'WAX MELTS', 
    price: 26.99, 
    category: 'Floral', 
    rating: 4.7, 
    description: 'Elegant bouquet of fresh roses complemented with subtle green undertones for a timeless floral scent.',
    details: '100% soy wax, 52hr burn time, phthalate-free fragrance, handmade with premium ingredients',
    image: Classic
  },
  
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
    <div className="min-h-screen bg-[#fafaf1] font-poppins">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
      `}</style>
      
      {/* Hero Section */}
     <div className="relative h-96 w-full bg-[#152336] overflow-hidden">
  {/* Background Image */}
  <div
    className="absolute inset-0 bg-cover bg-center opacity-50"
    style={{
      backgroundImage: `url("https://plus.unsplash.com/premium_photo-1701207574420-05ce35eba8d7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njl8fGRhbmdlciUyMGNhbmRsZSUyMGJsYWNrfGVufDB8fDB8fHww")`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  />

  {/* Content Overlay */}
  <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
    <div className="max-w-2xl">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold text-[#f1ead8] mb-4"
      >
        Handcrafted Candles
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-xl text-[#f1ead8]/90 mb-8"
      >
        Each candle is carefully crafted with premium ingredients for the perfect ambiance
      </motion.p>
      
    </div>
  </div>
</div>
      {/* Main Content */}
      <div className="pt-12 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header and Filter Button */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <div>
              <h1 className="text-3xl font-bold text-[#152336]">Our Collection</h1>
              <p className="text-[#152336]/80 mt-2">Discover our premium hand-poured candles</p>
            </div>
            <div className="flex gap-4 w-full md:w-auto">
              <motion.button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2 px-4 py-2 bg-[#f1ead8] border border-[#152336]/20 rounded-lg text-[#152336] hover:bg-[#f4aa2d]/20 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {showFilters ? <FiX size={18} /> : <FiFilter size={18} />}
                <span>Filters</span>
              </motion.button>
              
              <div className="relative flex-1 md:w-48">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full p-2 pl-3 pr-8 border border-[#152336]/20 rounded-lg focus:ring-[#f4aa2d] focus:border-[#f4aa2d] text-[#152336] bg-[#f1ead8] appearance-none"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                </select>
                <FiChevronDown className="absolute right-3 top-3 text-[#152336]/60" />
              </div>
            </div>
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

                  {/* Clear Filters */}
                  <div className="flex items-end">
                    <button
                      onClick={() => {
                        setSelectedCategories([]);
                        setPriceRange([0, 1000]);
                      }}
                      className="px-4 py-2 bg-[#152336]/10 hover:bg-[#152336]/20 text-[#152336] rounded-lg transition-colors"
                    >
                      Clear All Filters
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 border border-[#152336]/10 cursor-pointer"
                onClick={() => setSelectedProduct(product)}
              >
                <div className="h-64 overflow-hidden relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 bg-[#f4aa2d] text-white text-xs font-bold px-2 py-1 rounded-full">
                    ${product.price}
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex justify-between items-start">
                    <h3 className="text-xl font-semibold text-[#152336]">{product.name}</h3>
                    <div className="flex items-center">
                      <FiStar className="h-4 w-4 text-[#f4aa2d] fill-[#f4aa2d]" />
                      <span className="ml-1 text-sm text-[#152336]/80">{product.rating}</span>
                    </div>
                  </div>
                  <span className="inline-block mt-2 px-3 py-1 text-xs font-medium bg-[#f1ead8] text-[#152336] rounded-full">
                    {product.category}
                  </span>
                  <p className="mt-3 text-[#152336]/80 line-clamp-2">{product.description}</p>
                  <motion.button
                    className="mt-4 w-full cursor-pointer flex items-center justify-center gap-2 bg-[#2d526e] hover:bg-[#152336] text-white py-2 px-4 rounded-lg transition-colors duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={(e) => {
                      e.stopPropagation();
                      // Add to cart functionality here
                    }}
                  >
                    <FiShoppingCart />
                    Add to Cart
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-16">
              <h3 className="text-2xl font-medium text-[#152336] mb-2">No products found</h3>
              <p className="text-[#152336]/80 mb-6">Try adjusting your filters to find what you're looking for</p>
              <button
                onClick={() => {
                  setSelectedCategories([]);
                  setPriceRange([0, 1000]);
                }}
                className="px-6 py-2 bg-[#f4aa2d] hover:bg-[#e69c27] text-[#152336] font-medium rounded-lg transition-colors"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Product Detail Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProduct(null)}
          >
            <motion.div 
              className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="h-96 lg:h-full">
                  <img 
                    src={selectedProduct.image} 
                    alt={selectedProduct.name} 
                    className="w-full h-full object-cover rounded-t-xl lg:rounded-l-xl lg:rounded-tr-none"
                  />
                </div>
                <div className="p-8">
                  <button 
                    className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100"
                    onClick={() => setSelectedProduct(null)}
                  >
                    <FiX size={24} />
                  </button>
                  
                  <div className="mb-6">
                    <span className="inline-block px-3 py-1 text-sm font-medium bg-[#f1ead8] text-[#152336] rounded-full mb-3">
                      {selectedProduct.category}
                    </span>
                    <h2 className="text-3xl font-bold text-[#152336] mb-2">{selectedProduct.name}</h2>
                    <div className="flex items-center mb-4">
                      {[...Array(5)].map((_, i) => (
                        <FiStar
                          key={i}
                          className={`h-5 w-5 ${i < Math.floor(selectedProduct.rating) ? 'text-[#f4aa2d] fill-[#f4aa2d]' : 'text-gray-300'}`}
                        />
                      ))}
                      <span className="ml-2 text-[#152336]/80">({selectedProduct.rating})</span>
                    </div>
                    <p className="text-2xl font-bold text-[#2d526e] mb-6">${selectedProduct.price}</p>
                  </div>
                  
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold text-[#152336] mb-3">Description</h3>
                    <p className="text-[#152336]/90">{selectedProduct.description}</p>
                  </div>
                  
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold text-[#152336] mb-3">Details</h3>
                    <p className="text-[#152336]/90">{selectedProduct.details}</p>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <motion.button
                      className="flex-1 cursor-pointer flex items-center justify-center gap-2 bg-[#2d526e] hover:bg-[#152336] text-white py-3 px-6 rounded-lg transition-colors"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <FiShoppingCart size={20} />
                      Add to Cart
                    </motion.button>
                    <button className="flex-1 cursor-pointer border border-[#2d526e] text-[#2d526e] hover:bg-[#2d526e]/10 py-3 px-6 rounded-lg transition-colors">
                      Add to Wishlist
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProductPage;