import { motion } from "framer-motion";
import { FiMail, FiPhone, FiMapPin, FiSend, FiClock, FiInstagram, FiFacebook, FiTwitter } from "react-icons/fi";

const ContactUs = () => {
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

  return (
    <div className="min-h-screen bg-[#fafaf1] font-poppins overflow-hidden">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
      `}</style>

      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center bg-[#152336] overflow-hidden">
        <motion.div 
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1604514281397-7fdd5a6a6951?ixlib=rb-4.1.0&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-30"
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
            Connect With Us
          </motion.h1>
          <motion.p 
            className="text-lg text-[#f1ead8]/90 mb-8"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            We'd love to hear from you! Reach out for inquiries, collaborations, or just to say hello.
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

      {/* Contact Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12"
          >
            {/* Contact Form */}
            <motion.div 
              variants={slideUp}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <h2 className="text-2xl font-bold text-[#152336] mb-6">Send Us a Message</h2>
              
              <form className="space-y-6">
                <motion.div 
                  whileHover={{ scale: 1.01 }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-[#152336]/80 mb-1">Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full px-4 py-3 border border-[#152336]/20 rounded-lg focus:ring-2 focus:ring-[#f4aa2d] focus:border-transparent"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-[#152336]/80 mb-1">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full px-4 py-3 border border-[#152336]/20 rounded-lg focus:ring-2 focus:ring-[#f4aa2d] focus:border-transparent"
                      placeholder="your@email.com"
                    />
                  </div>
                </motion.div>

                <motion.div whileHover={{ scale: 1.01 }}>
                  <label htmlFor="subject" className="block text-sm font-medium text-[#152336]/80 mb-1">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    className="w-full px-4 py-3 border border-[#152336]/20 rounded-lg focus:ring-2 focus:ring-[#f4aa2d] focus:border-transparent"
                    placeholder="What's this about?"
                  />
                </motion.div>

                <motion.div whileHover={{ scale: 1.01 }}>
                  <label htmlFor="message" className="block text-sm font-medium text-[#152336]/80 mb-1">Message</label>
                  <textarea 
                    id="message" 
                    rows={5}
                    className="w-full px-4 py-3 border border-[#152336]/20 rounded-lg focus:ring-2 focus:ring-[#f4aa2d] focus:border-transparent"
                    placeholder="Your message here..."
                  ></textarea>
                </motion.div>

                <motion.button
                  whileHover={{ scale: 1.03, boxShadow: "0 10px 25px -5px rgba(244, 170, 45, 0.3)" }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center justify-center px-6 py-4 bg-[#f4aa2d] hover:bg-[#e69900] text-white font-medium rounded-lg shadow-md transition-all duration-300"
                >
                  <FiSend className="mr-2" />
                  Send Message
                </motion.button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div 
              variants={slideUp}
              className="space-y-8"
            >
              {/* Info Cards */}
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all"
              >
                <div className="flex items-start">
                  <div className="bg-[#f4aa2d]/10 p-3 rounded-full mr-4">
                    <FiMail className="text-[#f4aa2d] text-xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#152336] mb-1">Email Us</h3>
                    <p className="text-[#152336]/90 mb-2">hello@ravangi.com</p>
                    <p className="text-[#152336]/90">support@ravangi.com</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all"
              >
                <div className="flex items-start">
                  <div className="bg-[#f4aa2d]/10 p-3 rounded-full mr-4">
                    <FiPhone className="text-[#f4aa2d] text-xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#152336] mb-1">Call Us</h3>
                    <p className="text-[#152336]/90 mb-2">+91 98765 43210</p>
                    <p className="text-[#152336]/90">Mon-Fri: 9am-6pm</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all"
              >
                <div className="flex items-start">
                  <div className="bg-[#f4aa2d]/10 p-3 rounded-full mr-4">
                    <FiMapPin className="text-[#f4aa2d] text-xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#152336] mb-1">Visit Us</h3>
                    <p className="text-[#152336]/90">123 Fragrance Lane,<br />Mumbai, Maharashtra 400001</p>
                  </div>
                </div>
              </motion.div>

              {/* Social Media */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="bg-[#152336] p-6 rounded-xl shadow-lg"
              >
                <h3 className="text-lg font-bold text-[#f1ead8] mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  {[
                    { icon: <FiInstagram size={24} />, name: "Instagram" },
                    { icon: <FiFacebook size={24} />, name: "Facebook" },
                    { icon: <FiTwitter size={24} />, name: "Twitter" }
                  ].map((social, index) => (
                    <motion.a
                      key={index}
                      href="#"
                      whileHover={{ y: -3, color: "#f4aa2d" }}
                      className="text-[#f1ead8] hover:text-[#f4aa2d] transition-colors"
                      aria-label={social.name}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Map and Hours */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12"
          >
            {/* Map */}
            <motion.div 
              variants={slideUp}
              className="relative h-96 rounded-xl overflow-hidden shadow-xl"
            >
              <div className="absolute inset-0 bg-[#152336] opacity-20 z-0"></div>
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <div className="text-center p-6 bg-white/90 backdrop-blur-sm rounded-lg shadow-md">
                  <FiMapPin className="mx-auto text-3xl text-[#f4aa2d] mb-2" />
                  <h3 className="text-xl font-bold text-[#152336]">Our Location</h3>
                  <p className="text-[#152336]/90 mt-2">123 Fragrance Lane, Mumbai</p>
                </div>
              </div>
            </motion.div>

            {/* Hours */}
            <motion.div 
              variants={slideUp}
              className="bg-[#f1ead8] p-8 rounded-xl shadow-lg"
            >
              <h2 className="text-2xl font-bold text-[#152336] mb-6 flex items-center">
                <FiClock className="mr-3 text-[#f4aa2d]" />
                Opening Hours
              </h2>
              
              <div className="space-y-4">
                {[
                  { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM" },
                  { day: "Saturday", hours: "10:00 AM - 4:00 PM" },
                  { day: "Sunday", hours: "Closed" },
                  { day: "Holidays", hours: "Special Hours" }
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    whileHover={{ x: 5 }}
                    className="flex justify-between py-3 border-b border-[#152336]/10"
                  >
                    <span className="font-medium text-[#152336]">{item.day}</span>
                    <span className="text-[#152336]/90">{item.hours}</span>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                viewport={{ once: true }}
                className="mt-8 p-4 bg-[#152336]/5 rounded-lg border border-[#152336]/10"
              >
                <p className="text-[#152336]/90 italic">
                  "Our customer care team responds to all inquiries within 24 hours. For immediate assistance, please call us during business hours."
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 bg-[#152336]">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center px-4"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-[#f1ead8] mb-6">
            Have Questions About Our Products?
          </h2>
          <p className="text-lg text-[#f1ead8]/90 mb-8">
            Our fragrance experts are happy to help you find the perfect attar for any occasion.
          </p>
          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: "#f4aa2d" }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-[#2d526e] text-white font-medium rounded-lg shadow-lg transition-all duration-300"
          >
            Chat With an Expert
          </motion.button>
        </motion.div>
      </section>
    </div>
  );
};

export default ContactUs;