import { motion } from "framer-motion";
import { FiFileText, FiShoppingBag, FiCreditCard, FiUser } from "react-icons/fi";

const TermsAndConditions = () => {
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

  const keySections = [
    {
      icon: <FiShoppingBag className="text-3xl text-[#f4aa2d]" />,
      title: "Purchases & Orders",
      summary: "Terms related to product purchases, order processing, and fulfillment"
    },
    {
      icon: <FiCreditCard className="text-3xl text-[#f4aa2d]" />,
      title: "Payments & Pricing",
      summary: "Information about payment methods, pricing, and taxes"
    },
    {
      icon: <FiUser className="text-3xl text-[#f4aa2d]" />,
      title: "Account Terms",
      summary: "Rules governing user accounts and responsibilities"
    },
    {
      icon: <FiFileText className="text-3xl text-[#f4aa2d]" />,
      title: "Intellectual Property",
      summary: "Copyright and trademark information"
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
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-4.1.0&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-30"
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
            Terms & Conditions
          </motion.h1>
          <motion.p 
            className="text-lg text-[#f1ead8]/90 mb-8"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Please read these terms carefully before using our services
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

      {/* Key Sections Overview */}
      <section className="py-16 bg-[#f1ead8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-[#152336] mb-4">
              Key <span className="text-[#f4aa2d]">Sections</span>
            </h2>
            <p className="text-[#152336]/90 max-w-2xl mx-auto">
              Quick overview of the main areas covered in our terms
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {keySections.map((section, index) => (
              <motion.div 
                key={index}
                variants={slideUp}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow text-center"
                whileHover={{ y: -5 }}
              >
                <div className="mb-4 flex justify-center">
                  {section.icon}
                </div>
                <h3 className="text-xl font-bold text-[#152336] mb-2">{section.title}</h3>
                <p className="text-[#152336]/80">{section.summary}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-12"
          >
            {[
              {
                title: "General Terms",
                content: [
                  "By accessing and using the Ravangi website, you accept and agree to be bound by these Terms and Conditions.",
                  "All content on this website is for your general information and use only. We reserve the right to modify these terms at any time.",
                  "You must be at least 18 years old to make purchases on our website."
                ]
              },
              {
                title: "Product Information",
                content: [
                  "We make every effort to display our products as accurately as possible, but cannot guarantee your device will accurately reflect colors.",
                  "All products are subject to availability. We may limit quantities available for purchase.",
                  "Prices are subject to change without notice. We are not responsible for typographical errors."
                ]
              },
              {
                title: "Order Acceptance",
                content: [
                  "Your receipt of an order confirmation does not signify our acceptance of your order.",
                  "We reserve the right to refuse any order for any reason, including limitations on quantities available.",
                  "In the event we make a change to your order, we will contact you using the information provided."
                ]
              },
              {
                title: "Returns & Refunds",
                content: [
                  "Unopened, unused products in original packaging may be returned within 30 days for a full refund.",
                  "Sale items are final sale and cannot be returned or exchanged.",
                  "To complete your return, we require proof of purchase."
                ]
              },
              {
                title: "Limitation of Liability",
                content: [
                  "Ravangi shall not be liable for any special or consequential damages resulting from use of our products.",
                  "Our total liability for any claim related to our products shall not exceed the price paid for the product.",
                  "We do not guarantee that our website will be uninterrupted or error-free."
                ]
              },
              {
                title: "Governing Law",
                content: [
                  "These Terms shall be governed by the laws of the State of California without regard to conflict of law principles.",
                  "Any disputes shall be resolved in the state or federal courts located in Los Angeles County, California."
                ]
              }
            ].map((section, index) => (
              <motion.div 
                key={index}
                variants={slideUp}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <h2 className="text-2xl font-bold text-[#152336] mb-4 flex items-center">
                  <span className="w-4 h-4 bg-[#f4aa2d] rounded-full mr-3"></span>
                  {section.title}
                </h2>
                <ul className="space-y-3 text-[#152336]/90 leading-relaxed">
                  {section.content.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-[#f4aa2d] mr-2">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Acceptance Section */}
      <section className="py-20 bg-[#152336] text-[#f1ead8]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">
              Terms & Conditions <span className="text-[#f4aa2d]">Questions?</span>
            </h2>
            <div className="w-24 h-1 bg-[#f4aa2d] mx-auto"></div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-[#2d526e] rounded-xl p-8 shadow-lg"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">Acceptance of Terms</h2>
                <p className="mb-6">
                  By using our website or purchasing our products, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.
                </p>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-[#f4aa2d] rounded-full flex items-center justify-center">
                    <FiFileText className="text-xl text-[#152336]" />
                  </div>
                  <p>Last Updated: January 1, 2023</p>
                </div>
              </div>
              <div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full cursor-pointer py-4 bg-[#f4aa2d] hover:bg-[#e69c27] text-[#152336] font-medium rounded-lg transition-colors mb-4"
                >
                  Download Full Terms (PDF)
                </motion.button>
                <button className="cursor-pointer w-full py-4 border-2 border-[#f1ead8] text-[#f1ead8] hover:bg-[#f1ead8]/10 font-medium rounded-lg transition-colors">
                  Contact Legal Team
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      
    </div>
  );
};

export default TermsAndConditions;