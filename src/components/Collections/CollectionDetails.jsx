import { motion } from "framer-motion";
import { FiArrowLeft, FiArrowRight, FiShoppingCart, FiHeart, FiStar } from "react-icons/fi";
import { Link, useParams } from "react-router-dom";

const CollectionDetail = () => {
  const { id } = useParams();
  
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

  // Complete collections data
  const collections = {
    1: {
      name: "SILKEN GLOW",
      description: "Traditional fragrances inspired by ancient Indian attars, crafted using time-honored techniques passed down through generations of perfumers.",
      mainImage: "https://plus.unsplash.com/premium_photo-1743592742764-ad126f9c21db?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2lsaWNvbiUyMGdsb3clMjBjYW5kbGV8ZW58MHx8MHx8fDA%3D",
      coverImage: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80",
      candles: [
        {
          id: 101,
          name: "Royal Oudh",
          description: "Rich, woody oudh with hints of amber and spice",
          price: 2499,
          image: "https://images.unsplash.com/photo-1605001011156-cbf0b0f67a51?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80",
          burnTime: "60 hours",
          size: "8oz",
          rating: 4.8,
          notes: ["Oudh", "Amber", "Saffron", "Cardamom"]
        },
        {
          id: 102,
          name: "Mysore Sandal",
          description: "Pure sandalwood fragrance from Karnataka",
          price: 1999,
          image: "https://images.unsplash.com/photo-1605106702734-205df224ecce?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80",
          burnTime: "50 hours",
          size: "6oz",
          rating: 4.9,
          notes: ["Sandalwood", "Vanilla", "Musk"]
        },
        {
          id: 103,
          name: "Kashmiri Saffron",
          description: "Luxurious saffron with floral undertones",
          price: 2999,
          image: "https://images.unsplash.com/photo-1604514281397-7fdd5a6a6951?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80",
          burnTime: "55 hours",
          size: "8oz",
          rating: 4.7,
          notes: ["Saffron", "Rose", "Honey"]
        }
      ]
    },
    2: {
      name: "DUSK RITUAL",
      description: "Delicate floral bouquets captured in wax, perfect for evening relaxation and meditation.",
      mainImage: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80",
      coverImage: "https://images.unsplash.com/photo-1595425970377-2f8ded7c7b19?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80",
      candles: [
        {
          id: 201,
          name: "Lavender Dream",
          description: "Calming lavender with hints of chamomile",
          price: 1899,
          image: "https://images.unsplash.com/photo-1595425972660-5d59a3d5ad9f?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80",
          burnTime: "45 hours",
          size: "6oz",
          rating: 4.6,
          notes: ["Lavender", "Chamomile", "Vanilla"]
        },
        {
          id: 202,
          name: "Jasmine Night",
          description: "Intoxicating jasmine with night-blooming flowers",
          price: 2199,
          image: "https://images.unsplash.com/photo-1595425972660-5d59a3d5ad9f?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80",
          burnTime: "50 hours",
          size: "8oz",
          rating: 4.8,
          notes: ["Jasmine", "Gardenia", "Musk"]
        }
      ]
    },
    3: {
      name: "ENCHANTED WOODS",
      description: "Warm, earthy fragrances with a spicy kick that transport you to mystical forests.",
      mainImage: "https://images.unsplash.com/photo-1603712610494-73e1524f7015?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80",
      coverImage: "https://images.unsplash.com/photo-1603712610494-73e1524f7015?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80",
      candles: [
        {
          id: 301,
          name: "Cedar & Sage",
          description: "Earthy cedarwood with cleansing sage",
          price: 2299,
          image: "https://images.unsplash.com/photo-1603712610494-73e1524f7015?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80",
          burnTime: "55 hours",
          size: "8oz",
          rating: 4.7,
          notes: ["Cedarwood", "Sage", "Patchouli"]
        },
        {
          id: 302,
          name: "Pine Forest",
          description: "Fresh pine with hints of balsam and citrus",
          price: 1999,
          image: "https://images.unsplash.com/photo-1603712610494-73e1524f7015?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80",
          burnTime: "50 hours",
          size: "6oz",
          rating: 4.5,
          notes: ["Pine", "Balsam", "Bergamot"]
        }
      ]
    },
    4: {
      name: "MIST & BLOOM",
      description: "Limited edition scents for each season that capture the essence of nature's transitions.",
      mainImage: "https://images.unsplash.com/photo-1603712610494-73e1524f7015?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80",
      coverImage: "https://images.unsplash.com/photo-1603712610494-73e1524f7015?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80",
      candles: [
        {
          id: 401,
          name: "Spring Dew",
          description: "Fresh rain on blooming flowers",
          price: 2399,
          image: "https://images.unsplash.com/photo-1603712610494-73e1524f7015?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80",
          burnTime: "52 hours",
          size: "8oz",
          rating: 4.8,
          notes: ["Rain", "Lily", "Green Notes"]
        }
      ]
    },
    5: {
      name: "TIPSY PETALS",
      description: "Premium candles with rare fragrance oils that create an intoxicating floral experience.",
      mainImage: "https://images.unsplash.com/photo-1603712610494-73e1524f7015?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80",
      coverImage: "https://images.unsplash.com/photo-1603712610494-73e1524f7015?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80",
      candles: [
        {
          id: 501,
          name: "Rose Champagne",
          description: "Elegant rose with bubbly champagne notes",
          price: 2799,
          image: "https://images.unsplash.com/photo-1603712610494-73e1524f7015?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80",
          burnTime: "60 hours",
          size: "8oz",
          rating: 4.9,
          notes: ["Rose", "Champagne", "Pear"]
        }
      ]
    },
    6: {
      name: "CLASSIC",
      description: "Aromatherapy candles for relaxation and focus with timeless fragrance profiles.",
      mainImage: "https://images.unsplash.com/photo-1603712610494-73e1524f7015?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80",
      coverImage: "https://images.unsplash.com/photo-1603712610494-73e1524f7015?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80",
      candles: [
        {
          id: 601,
          name: "Vanilla Comfort",
          description: "Warm vanilla with creamy undertones",
          price: 1799,
          image: "https://images.unsplash.com/photo-1603712610494-73e1524f7015?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80",
          burnTime: "45 hours",
          size: "6oz",
          rating: 4.7,
          notes: ["Vanilla", "Cream", "Tonka Bean"]
        }
      ]
    },
    7: {
      name: "TEALIGHTS REVERIE",
      description: "Miniature candles creating intimate moments and perfect for small spaces.",
      mainImage: "https://images.unsplash.com/photo-1603712610494-73e1524f7015?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80",
      coverImage: "https://images.unsplash.com/photo-1603712610494-73e1524f7015?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80",
      candles: [
        {
          id: 701,
          name: "Mini Lavender",
          description: "Calming lavender in a small tealight",
          price: 499,
          image: "https://images.unsplash.com/photo-1603712610494-73e1524f7015?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80",
          burnTime: "6 hours",
          size: "1.5oz",
          rating: 4.5,
          notes: ["Lavender", "Herbal Notes"]
        }
      ]
    },
    8: {
      name: "DECOR LIGHTS",
      description: "Elegant candles that illuminate and decorate your space with style.",
      mainImage: "https://images.unsplash.com/photo-1603712610494-73e1524f7015?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80",
      coverImage: "https://images.unsplash.com/photo-1603712610494-73e1524f7015?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80",
      candles: [
        {
          id: 801,
          name: "Geometric Lantern",
          description: "Modern geometric design with sandalwood scent",
          price: 3299,
          image: "https://images.unsplash.com/photo-1603712610494-73e1524f7015?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80",
          burnTime: "40 hours",
          size: "12oz",
          rating: 4.8,
          notes: ["Sandalwood", "Amber", "Musk"]
        }
      ]
    },
    9: {
      name: "WAX MELTS",
      description: "Scented wax for melt warmers and diffusers that fill your space with fragrance.",
      mainImage: "https://images.unsplash.com/photo-1603712610494-73e1524f7015?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80",
      coverImage: "https://images.unsplash.com/photo-1603712610494-73e1524f7015?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80",
      candles: [
        {
          id: 901,
          name: "Vanilla Bloom Melts",
          description: "Vanilla and floral wax melts for warmers",
          price: 899,
          image: "https://images.unsplash.com/photo-1603712610494-73e1524f7015?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80",
          burnTime: "20 hours",
          size: "6 cubes",
          rating: 4.6,
          notes: ["Vanilla", "Jasmine", "Ylang-Ylang"]
        }
      ]
    }
  };

  const collection = collections[id] || collections[1]; // Fallback to first collection if invalid id

  return (
    <div className="min-h-screen bg-[#fafaf1] font-poppins overflow-hidden">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
      `}</style>

      {/* Back Button */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="pt-8 px-4 sm:px-6 lg:px-8"
      >
        <Link to="/collections" className="inline-flex items-center text-[#2d526e] hover:text-[#152336]">
          <FiArrowLeft className="mr-2" />
          Back to Collections
        </Link>
      </motion.div>

      {/* Collection Header with Main Image */}
      <section className="relative py-16">
        <div className="absolute inset-0 overflow-hidden h-full">
          <img 
            src={collection.mainImage} 
            alt={collection.name}
            className="w-full h-full object-cover opacity-100"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#fafaf1]"></div>
        </div>
        
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <motion.div variants={slideUp} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-xl overflow-hidden shadow-xl h-96">
              <img 
                src={collection.coverImage} 
                alt={collection.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            <div>
              <motion.h1 variants={slideUp} className="text-3xl md:text-4xl font-bold text-[#152336] mb-4">
                {collection.name}
              </motion.h1>
              <motion.div variants={slideUp} className="w-24 h-1 bg-[#f4aa2d] mb-6"></motion.div>
              <motion.p variants={slideUp} className="text-lg text-[#152336]/90 mb-8">
                {collection.description}
              </motion.p>
              <motion.p variants={slideUp} className="text-lg text-[#152336] font-medium">
                {collection.candles.length} unique {collection.candles.length === 1 ? 'fragrance' : 'fragrances'}
              </motion.p>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Candles Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-[#f1ead8]">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-bold text-[#152336] mb-8"
          >
            Products in this Collection
          </motion.h2>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {collection.candles.map((candle) => (
              <motion.div 
                key={candle.id}
                variants={slideUp}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="relative h-64">
                  <img 
                    src={candle.image} 
                    alt={candle.name}
                    className="w-full h-full object-cover"
                  />
                  <button className="absolute top-4 right-4 p-2 bg-white/80 rounded-full hover:bg-white transition-colors">
                    <FiHeart className="text-[#f4aa2d]" />
                  </button>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-[#152336]">{candle.name}</h3>
                    <div className="flex items-center bg-[#f4aa2d]/10 px-2 py-1 rounded">
                      <FiStar className="text-[#f4aa2d] mr-1" />
                      <span className="text-sm font-medium">{candle.rating}</span>
                    </div>
                  </div>
                  
                  <p className="text-[#152336]/90 mb-4">{candle.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-[#152336] mb-1">Fragrance Notes:</h4>
                    <div className="flex flex-wrap gap-2">
                      {candle.notes.map((note, index) => (
                        <span key={index} className="text-xs px-2 py-1 bg-[#152336]/5 rounded-full">
                          {note}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm text-[#152336]/70">Size: {candle.size}</span>
                    <span className="text-sm text-[#152336]/70">Burn time: {candle.burnTime}</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-bold text-[#152336]">₹{candle.price}</span>
                    <button className="flex items-center px-4 py-2 bg-[#f4aa2d] hover:bg-[#e69900] text-white rounded-lg transition-colors">
                      <FiShoppingCart className="mr-2" />
                      Add to Cart
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Collection Story */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-[#152336] mb-4">
              The Story Behind This Collection
            </h2>
            <div className="w-24 h-1 bg-[#f4aa2d] mx-auto"></div>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative rounded-xl overflow-hidden h-64 md:h-80"
            >
              <img 
                src={collection.coverImage} 
                alt="Crafting process"
                className="w-full h-full object-cover"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <p className="text-[#152336]/90 mb-4">
                Our {collection.name} collection was carefully crafted to bring unique fragrances into your home. Each product is made with premium ingredients and attention to detail.
              </p>
              <p className="text-[#152336]/90 mb-4">
                We source the finest materials from sustainable suppliers to ensure that every candle not only smells wonderful but is also environmentally conscious.
              </p>
              <p className="text-[#152336]/90">
                The collection represents hours of testing and refinement to create the perfect scent experience for your space.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Related Collections */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8 bg-[#f1ead8]">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-bold text-[#152336] mb-8 text-center"
          >
            Explore More Collections
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Object.keys(collections)
              .filter(key => key !== id)
              .slice(0, 3)
              .map(key => (
                <motion.div
                  key={key}
                  whileHover={{ y: -5 }}
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all"
                >
                  <div className="h-48 mb-4 rounded-lg overflow-hidden">
                    <img 
                      src={collections[key].coverImage} 
                      alt={collections[key].name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-[#152336] mb-2">{collections[key].name}</h3>
                  <p className="text-[#152336]/90 mb-4">{collections[key].description.substring(0, 60)}...</p>
                  <Link 
                    to={`/collections/${key}`} 
                    className="inline-flex items-center text-[#f4aa2d] hover:text-[#e69900]"
                  >
                    View Collection <FiArrowRight className="ml-2" />
                  </Link>
                </motion.div>
              ))
            }
          </div>
        </div>
      </section>
    </div>
  );
};

export default CollectionDetail;