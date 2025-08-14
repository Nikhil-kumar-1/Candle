import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What makes Ravangi candles special?",
      answer: "Our candles are hand-poured in small batches using premium soy wax and pure essential oils. Each candle is crafted with intention, designed to transform spaces and create meaningful experiences through carefully curated fragrances."
    },
    {
      question: "How long do Ravangi candles burn?",
      answer: "Our standard 8oz candles burn for approximately 50-60 hours. Proper care (trimming wicks to 1/4\" before each use and allowing the wax to melt fully across the surface) will ensure maximum burn time."
    },
    {
      question: "Are your candles eco-friendly?",
      answer: "Yes! We use 100% natural soy wax, cotton wicks, and recyclable packaging. Our fragrances are phthalate-free, and we never test on animals. Sustainability is at the heart of everything we do."
    },
    {
      question: "How should I care for my candle?",
      answer: "For best results: Always trim wick to 1/4\" before lighting, allow wax to melt fully to the edges on first burn (3-4 hours), keep away from drafts, and discontinue use when 1/2\" of wax remains. Never leave a burning candle unattended."
    },
    {
      question: "Do you offer international shipping?",
      answer: "We currently ship within India and to select international destinations. Shipping costs and delivery times vary by location. Please check our Shipping Policy for details or contact us for specific country inquiries."
    },
    {
      question: "Can I return or exchange a candle?",
      answer: "We offer returns within 14 days of delivery for unused, unburned candles in their original packaging. Due to the nature of our products, we cannot accept returns of used candles. See our Returns Policy for full details."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-[#faf8f5]">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-black/20 z-10"
        />
        <motion.img
          src="https://images.unsplash.com/photo-1602036598416-5604b2e2a7ed?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjJ8fGNhbmRsZSUyMGJsYWNrfGVufDB8fDB8fHww"
          alt="Ravangi Candles"
          className="w-full h-[400px] object-cover"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
        <motion.div 
          className="absolute inset-0 flex items-center justify-center z-20"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <div className="text-center px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white font-poppins mb-4 drop-shadow-lg">
              Your Questions Answered
            </h1>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="w-32 h-1 bg-[#f4aa2d] mx-auto mb-6"
            />
            <p className="text-xl text-white font-poppins max-w-2xl mx-auto drop-shadow-md">
              Everything you need to know about our candles and services
            </p>
          </div>
        </motion.div>
      </div>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#152336] font-poppins mb-4">
              Frequently Asked Questions
            </h2>
            <div className="w-24 h-1 bg-[#f4aa2d] mx-auto"></div>
            <p className="mt-6 text-lg text-[#152336]/90 font-poppins max-w-2xl mx-auto">
              Find answers to common questions about our candles, shipping, and more.
            </p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
                className="overflow-hidden"
              >
                <motion.div
                  className={`p-6 rounded-xl cursor-pointer transition-all duration-300 ${activeIndex === index ? 'bg-white shadow-lg border-l-4 border-[#f4aa2d]' : 'bg-white/90 hover:bg-white shadow-md'}`}
                  onClick={() => toggleFAQ(index)}
                  whileHover={{ scale: 1.01 }}
                >
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg md:text-xl font-semibold text-[#152336] font-poppins">
                      {faq.question}
                    </h3>
                    <motion.div
                      animate={{ rotate: activeIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-[#f4aa2d]"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </motion.div>
                  </div>

                  <AnimatePresence>
                    {activeIndex === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="pt-4 pb-2">
                          <p className="text-[#152336]/90 font-poppins">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <h3 className="text-xl font-semibold text-[#152336] font-poppins mb-4">
              Still have questions?
            </h3>
            <p className="text-[#152336]/90 font-poppins mb-6 max-w-2xl mx-auto">
              Our customer care team is here to help with any additional questions you may have.
            </p>
            <motion.button onClick={() => {
              window.location.href = "/contact"; // Redirect to the Contact page}
            }
              }
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(0,0,0,0.1)" }}
              whileTap={{ scale: 0.98 }}
              className="px-8 cursor-pointer py-3 bg-[#2d526e] hover:bg-[#152336] text-white font-medium rounded-lg shadow-lg transition-all duration-300 font-poppins"
            >
              Contact Our Team
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;