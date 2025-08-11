import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import Silken from "../../assets/Category/SilkenGlow2.webp";
import Dusk from "../../assets/Category/DuskRitual.webp";
import Enchanted from "../../assets/Category/EnchantedWood2.webp";  
import Mist from "../../assets/Category/MistBloom.webp";
import Tipsy from "../../assets/Category/TipsyPetal2.webp";
import Classic from "../../assets/Category/Classic.webp";

const Collections = () => {
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } }
  };

  const slideUp = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const collections = [
    {
      id: 1,
      name: "SILKEN GLOW",
      description: "Traditional fragrances inspired by ancient Indian attars",
      image: Silken,
      candles: 12
    },
    {
      id: 2,
      name: "DUSK RITUAL",
      description: "Delicate floral bouquets captured in wax",
      image: Dusk,
      candles: 8
    },
    {
      id: 3,
      name: "ENCHANTED WOODS",
      description: "Warm, earthy fragrances with a spicy kick",
      image: Enchanted,
      candles: 10
    },
    {
      id: 4,
      name: "MIST & BLOOM",
      description: "Limited edition scents for each season",
      image: Mist,
      candles: 6
    },
    {
      id: 5,
      name: "TIPSY PETALS",
      description: "Premium candles with rare fragrance oils",
      image: Tipsy,
      candles: 5,
    },
    {
      id: 6,
      name: "CLASSIC",
      description: "Aromatherapy candles for relaxation and focus",
      image: Classic,
      candles: 7
    }
  ];

  return (
    <div className="min-h-screen bg-[#fafaf1] font-poppins overflow-hidden">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
      `}</style>

      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center bg-[#152336] overflow-hidden">
        <motion.div 
          className="absolute inset-0 bg-[url('https://plus.unsplash.com/premium_photo-1701207574420-05ce35eba8d7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njl8fGRhbmdlciUyMGNhbmRsZSUyMGJsYWNrfGVufDB8fDB8fHww')] bg-cover bg-center opacity-30"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold text-[#f1ead8] mb-6"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Our Collections
          </motion.h1>
          <motion.p 
            className="text-lg text-[#f1ead8]/90 mb-8"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Discover the perfect fragrance for every mood and occasion
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <div className="w-24 h-1 bg-[#f4aa2d] mx-auto"></div>
          </motion.div>
        </div>
      </section>

      {/* Collections Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
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
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Link to={`/collections/${collection.id}`}>
                  <div className="relative h-80">
                    <img 
                      src={collection.image} 
                      alt={collection.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2">{collection.name}</h3>
                        <p className="text-white/90 mb-4">{collection.description}</p>
                        <div className="flex items-center text-[#f4aa2d]">
                          <span>Explore {collection.candles} candles</span>
                          <FiArrowRight className="ml-2" />
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

      {/* CTA Section */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto bg-[#f4aa2d]/10 rounded-2xl p-12 text-center"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-[#152336] mb-6">
            Can't find what you're looking for?
          </h2>
          <p className="text-lg text-[#152336]/90 mb-8">
            We create custom fragrance blends for special occasions and corporate gifting.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-[#2d526e] hover:bg-[#152336] text-white font-medium rounded-lg shadow-lg transition-colors duration-300"
          >
            Request Custom Scents
          </motion.button>
        </motion.div>
      </section>
    </div>
  );
};

export default Collections;