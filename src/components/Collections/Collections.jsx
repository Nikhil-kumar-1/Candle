import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiArrowRight, FiStar, FiMoon, FiSun, FiDroplet } from "react-icons/fi";
import Cover from '../../assets/Category/CoverPhoto.webp';
import Silken from "../../assets/Category/SilkenGlow2.webp";
import Dusk from "../../assets/Category/DuskRitual.webp";
import Enchanted from "../../assets/Category/EnchantedWood2.webp";  
import Mist from "../../assets/Category/MistBloom.webp";
import Tipsy from "../../assets/Category/TipsyPetal2.webp";
import Classic from "../../assets/Category/Classic.webp";
// import Tealights from "../../assets/Category/TealightsReverie.webp";
// import DecorLights from "../../assets/Category/DecorLights.webp";
// import WaxMelts from "../../assets/Category/WaxMelts.webp";

const Collections = () => {
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } }
  };

  const slideUp = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } }
  };

  const slideIn = {
    hidden: { x: -50, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.7 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const collections = [
    {
      id: 1,
      name: "SILKEN GLOW",
      description: "Traditional fragrances inspired by ancient Indian attars",
      image: Silken,
      candles: 12,
      featured: true,
      icon: <FiDroplet className="text-[#f4aa2d] text-xl" />
    },
    {
      id: 2,
      name: "Majestic Flames",
      description: "Delicate floral bouquets captured in wax",
      image: Dusk,
      candles: 8,
      featured: true,
      icon: <FiMoon className="text-[#f4aa2d] text-xl" />
    },
    {
      id: 3,
      name: "ENCHANTED WOODS",
      description: "Warm, earthy fragrances with a spicy kick",
      image: Enchanted,
      candles: 10,
      icon: <FiDroplet className="text-[#f4aa2d] text-xl" />
    },
    {
      id: 4,
      name: "MIST & BLOOM",
      description: "Limited edition scents for each season",
      image: Mist,
      candles: 6,
      icon: <FiSun className="text-[#f4aa2d] text-xl" />
    },
    {
      id: 5,
      name: "MiniGlow",
      description: "Premium candles with rare fragrance oils",
      image: Tipsy,
      candles: 5,
      icon: <FiDroplet className="text-[#f4aa2d] text-xl" />
    },
    {
      id: 6,
      name: "CLASSIC",
      description: "Aromatherapy candles for relaxation and focus",
      image: Classic,
      candles: 7,
      icon: <FiDroplet className="text-[#f4aa2d] text-xl" />
    },
    {
      id: 7,
      name: "TEALIGHTS REVERIE",
      description: "Miniature candles creating intimate moments",
      image: "https://images.unsplash.com/photo-1561821632-0ac8d40ad4d1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fFRFQUxJR0hUUyUyMFJFVkVSSUUlMjBjYW5kbGV8ZW58MHx8MHx8fDA%3D",
      candles: 9,
      icon: <FiSun className="text-[#f4aa2d] text-xl" />
    },
    {
      id: 8,
      name: "DECOR LIGHTS",
      description: "Elegant candles that illuminate and decorate",
      image: "https://plus.unsplash.com/premium_photo-1678197482538-d27655ac2ec9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZGVjb3IlMjBsaWdodCUyMGNhbmRsZXxlbnwwfHwwfHx8MA%3D%3D",
      candles: 11,
      icon: <FiMoon className="text-[#f4aa2d] text-xl" />
    },
    {
      id: 9,
      name: "WAX MELTS",
      description: "Scented wax for melt warmers and diffusers",
      image: "https://images.unsplash.com/photo-1618324395109-82adcad01043?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHdheCUyMG1lbHR8ZW58MHx8MHx8fDA%3D",
      candles: 14,
      icon: <FiDroplet className="text-[#f4aa2d] text-xl" />
    }
  ];

  return (
    <div className="min-h-screen bg-[#fafaf1] font-poppins overflow-hidden">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
      `}</style>

      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center bg-[#152336] overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${Cover})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
        
        <div className="absolute inset-0 bg-gradient-to-r from-[#152336]/80 to-[#2d526e]/70"></div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.h1 
            className="text-5xl md:text-6xl font-bold text-[#f1ead8] mb-6"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Our Collections
          </motion.h1>
          <motion.p 
            className="text-xl text-[#f1ead8]/90 mb-8 max-w-2xl mx-auto"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Discover the perfect fragrance for every mood and occasion
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="w-32 h-1 bg-[#f4aa2d] mx-auto"
          ></motion.div>
        </div>
        
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <div className="w-6 h-10 border-2 border-[#f1ead8] rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="w-1 h-3 bg-[#f1ead8] rounded-full mt-2"
            ></motion.div>
          </div>
        </motion.div>
      </section>

      {/* Introduction Text */}
      <motion.section 
        className="py-16 px-4 sm:px-6 lg:px-8 bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#152336] mb-6">Crafting Fragrant Moments</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Each of our collections is meticulously crafted to transport you to a different world through scent. 
            From the warm embrace of ancient traditions to the delicate whisper of seasonal blooms, 
            discover candles that don't just illuminate spaces but transform them into sanctuaries of aroma and memory.
          </p>
        </div>
      </motion.section>

      {/* Category Navigation */}
      <motion.section 
        className="py-12 bg-[#fafaf1] sticky top-0 z-20 shadow-sm"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            <button className="px-4 py-2 bg-[#2d526e] text-white rounded-full font-medium">All Collections</button>
            <button className="px-4 py-2 bg-white text-[#2d526e] rounded-full font-medium hover:bg-[#2d526e] hover:text-white transition-colors">Signature Candles</button>
            <button className="px-4 py-2 bg-white text-[#2d526e] rounded-full font-medium hover:bg-[#2d526e] hover:text-white transition-colors">Tealights</button>
            <button className="px-4 py-2 bg-white text-[#2d526e] rounded-full font-medium hover:bg-[#2d526e] hover:text-white transition-colors">Decor Lights</button>
            <button className="px-4 py-2 bg-white text-[#2d526e] rounded-full font-medium hover:bg-[#2d526e] hover:text-white transition-colors">Wax Melts</button>
          </div>
        </div>
      </motion.section>

      {/* Featured Collections */}
      <section className="py-10 px-4 sm:px-6 lg:px-8 bg-[#fafaf1]">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            className="text-3xl font-bold text-center text-[#152336] mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Featured Collections
          </motion.h2>
          
          <div className="grid grid-cols-1 gap-12 mb-20">
            {collections.filter(c => c.featured).map((collection, index) => (
              <motion.div 
                key={collection.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8`}
              >
                <div className="md:w-1/2 relative">
                  <div className="overflow-hidden rounded-2xl shadow-xl">
                    <motion.img 
                      src={collection.image} 
                      alt={collection.name}
                      className="w-full h-[400px] object-cover"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                  {collection.featured && (
                    <div className="absolute top-4 left-4 bg-[#f4aa2d] text-white px-4 py-2 rounded-full flex items-center">
                      <FiStar className="mr-1" />
                      <span>Featured</span>
                    </div>
                  )}
                </div>
                
                <div className="md:w-1/2 text-center md:text-left">
                  <div className="flex items-center justify-center md:justify-start mb-4">
                    {collection.icon}
                    <h3 className="text-3xl font-bold text-[#152336] ml-2">{collection.name}</h3>
                  </div>
                  <p className="text-gray-700 mb-6 text-lg">{collection.description}</p>
                  <p className="text-[#2d526e] font-medium mb-6">{collection.candles} unique products</p>
                  
                  <motion.div whileHover={{ x: 5 }}>
                    <Link 
                      to={`/collections/${collection.id}`}
                      className="inline-flex items-center text-[#f4aa2d] font-medium group"
                    >
                      <span className="mr-2 border-b border-transparent group-hover:border-[#f4aa2d] transition-all">
                        Explore Collection
                      </span>
                      <FiArrowRight />
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All Collections Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            className="text-3xl font-bold text-center text-[#152336] mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            All Collections
          </motion.h2>
          
          <motion.p 
            className="text-center text-gray-600 mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Explore our complete range of handcrafted collections
          </motion.p>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {collections.map((collection) => (
              <motion.div 
                key={collection.id}
                variants={slideUp}
                whileHover={{ y: -10 }}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 bg-white"
              >
                <Link to={`/collections/${collection.id}`}>
                  <div className="relative h-72">
                    <img 
                      src={collection.image} 
                      alt={collection.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-90 flex items-end p-6">
                      <div className="w-full">
                        <div className="flex items-center mb-2">
                          {collection.icon}
                          <h3 className="text-xl font-bold text-white ml-2">{collection.name}</h3>
                        </div>
                        <p className="text-white/90 mb-3 text-sm">{collection.description}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-[#f4aa2d] text-sm">{collection.candles} products</span>
                          <div className="flex items-center text-white group-hover:text-[#f4aa2d] transition-colors">
                            <span className="text-sm mr-1">Explore</span>
                            <FiArrowRight />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* New Collections Highlight */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#fafaf1]">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            className="text-3xl font-bold text-center text-[#152336] mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            New Arrivals
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {collections.slice(6).map((collection) => (
              <motion.div 
                key={collection.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <Link to={`/collections/${collection.id}`}>
                  <div className="relative h-60">
                    <img 
                      src={collection.image} 
                      alt={collection.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-[#f4aa2d] text-white text-xs font-bold px-3 py-1 rounded-full">
                      New
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center mb-3">
                      {collection.icon}
                      <h3 className="text-xl font-bold text-[#152336] ml-2">{collection.name}</h3>
                    </div>
                    <p className="text-gray-600 mb-4">{collection.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-[#2d526e] font-medium">{collection.candles} products</span>
                      <span className="text-[#f4aa2d] flex items-center">
                        Explore <FiArrowRight className="ml-1" />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#fafaf1]">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto bg-gradient-to-r from-[#2d526e] to-[#152336] rounded-2xl p-12 text-center text-white overflow-hidden relative"
        >
          <div className="absolute -right-10 -top-10 w-40 h-40 bg-[#f4aa2d] rounded-full opacity-20"></div>
          <div className="absolute -left-10 -bottom-10 w-32 h-32 bg-[#f4aa2d] rounded-full opacity-20"></div>
          
          <h2 className="text-2xl md:text-3xl font-bold mb-6 relative z-10">
            Can't find what you're looking for?
          </h2>
          <p className="text-lg mb-8 opacity-90 relative z-10">
            We create custom fragrance blends for special occasions and corporate gifting.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-[#f4aa2d] hover:bg-[#e09a25] text-[#152336] font-medium rounded-lg shadow-lg transition-colors duration-300 relative z-10"
          >
            Request Custom Scents
          </motion.button>
        </motion.div>
      </section>
    </div>
  );
};

export default Collections;