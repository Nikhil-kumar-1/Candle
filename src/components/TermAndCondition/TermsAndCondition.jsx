import { motion } from "framer-motion";
import {
  FiShoppingBag,
  FiAlertTriangle,
  FiUser,
  FiFileText,
  FiRotateCcw,
  FiShield,
  FiDownload,
  FiMail,

} from "react-icons/fi";


const TermsAndConditions = () => {
  // Enhanced animations
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const slideUp = {
    hidden: { y: 60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
      },
    },
  };

  const floatAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  const keySections = [
  {
    icon: <FiShoppingBag className="text-3xl text-[#f4aa2d]" />,
    title: "Orders & Shipment",
    summary: "Terms related to product purchases, order processing, and fulfillment.",
  },
  {
    icon: <FiAlertTriangle className="text-3xl text-[#f4aa2d]" />,
    title: "Product Use & Safety",
    summary: "Guidelines for safe use, candle care, and customer responsibilities.",
  },
  {
    icon: <FiRotateCcw className="text-3xl text-[#f4aa2d]" />,
    title: "Return & Refund",
    summary: "Policies regarding returns, exchanges, and refunds.",
  },
  
  {
    icon: <FiShield className="text-3xl text-[#f4aa2d]" />,
    title: "Limitation of Liability",
    summary: "Limitations of our responsibility for product use and damages.",
  },
  
];

  return (
    <div className="min-h-screen bg-[#fafaf1] font-poppins overflow-hidden">
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap");
      `}</style>

      {/* Hero Section with enhanced animations */}
      <section className="relative h-96 flex items-center justify-center bg-[#152336] overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1652690527826-dcddbd1eb46e?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center opacity-30"
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.8, ease: "easeOut" }}
        />

        {/* Animated decorative elements */}
        <motion.div
          className="absolute top-20 left-10 w-6 h-6 rounded-full bg-[#f4aa2d] opacity-20"
          animate={floatAnimation}
        />
        <motion.div
          className="absolute bottom-16 right-16 w-10 h-10 rounded-full bg-[#f4aa2d] opacity-30"
          animate={{
            ...floatAnimation,
            y: [0, -15, 0],
            transition: { duration: 5, delay: 0.5 },
          }}
        />

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-[#f1ead8] mb-6"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            Terms & <span className="text-[#f4aa2d]">Conditions</span>
          </motion.h1>
          <motion.p
            className="text-lg text-[#f1ead8]/90 mb-8 max-w-2xl mx-auto"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            Please read these terms carefully before using our services
          </motion.p>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="h-1 bg-[#f4aa2d] mx-auto"
          />
        </div>
      </section>

      {/* Key Sections Overview */}
      <section className="py-16 bg-[#f1ead8] relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-[#f4aa2d] opacity-10"></div>
        <div className="absolute -bottom-16 -left-16 w-32 h-32 rounded-full bg-[#152336] opacity-10"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-50px" }}
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
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {keySections.map((section, index) => (
              <motion.div
                key={index}
                variants={slideUp}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 text-center group relative overflow-hidden"
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <div className="absolute -z-10 top-0 left-0 w-full h-1 bg-[#f4aa2d] group-hover:h-full transition-all duration-500 opacity-10"></div>
                <div className="mb-4 flex justify-center">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    {section.icon}
                  </motion.div>
                </div>
                <h3 className="text-xl font-bold text-[#152336] mb-2">
                  {section.title}
                </h3>
                <p className="text-[#152336]/80">{section.summary}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
        {/* Background pattern */}
        <div
          className="absolute inset-0 opacity-[0.03] bg-repeat"
          style={{
            backgroundImage:
              'url(\'data:image/svg+xml,%3Csvg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M0 0h20v20H0z" fill="none"/%3E%3Cpath d="M1 1v18h18V1H1zm1 1h16v16H2V2zm2 2h12v12H4V4zm1 1v10h10V5H5z" fill="%23000000"/%3E%3C/svg%3E\')',
          }}
        ></div>

        <div className="max-w-5xl mx-auto relative z-10">
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
                  "You must be at least 18 years old to make purchases on our website.",
                ],
              },
              {
                title: "Product Information",
                content: [
                  "Slight variations in color, scent strength, and appearance may occur due to the handmade nature of our products. These variations do not affect the performance or quality of the candle.  ",
                  "Burn times are approximate and may vary depending on the environment in which the candle is used (e.g., airflow, room size, wick trimming).   ",
                  "All fragrance descriptions and images are for general guidance only.",
                  "It is the responsibility of the customer to review product ingredients before purchase. We are not liable for any allergic reactions or sensitivities.",
                ],
              },
              {
                title: "Order and Shipment",
                content: [
                  "Orders are typically processed within 3 business days.",
                  "Delivery times may vary depending on your location, courier delays, or public holidays.",
                  "Your receipt of an order confirmation does not signify our acceptance of your order.",
                  "Once dispatched, tracking details will be shared (if applicable).",
                  "We reserve the right to refuse any order for any reason, including limitations on quantities available.",
                  "In the event we make a change to your order, we will contact you using the information provided.",
                ],
              },
              {
                title: "Returns & Refunds",
                content: [
                  "Due to the handmade and personal nature of our products, we do not accept returns or exchanges unless the item arrives damaged or defective.",
                  "For exchange or refund, please make video of the product while opening the packaging for damage confirmation.",
                  "If your item arrives damaged, please contact us within 3 days of delivery with clear video while opening the packaging and your order number.",
                ],
              },
              {
                title: "Limitation of Liability",
                content: [
                  "Customers are responsible for following all candle care and safety instructions provided with the product or on our website.",
                  "Ravangi shall not be liable for any direct, indirect, incidental, or consequential damages resulting from the use or misuse of our products.   ",
                  "Our total liability for any claim related to our products shall not exceed the price paid for the product.",
                  "We do not guarantee that our website will be uninterrupted or error-free.",
                ],
              },
              {
                title: "Intellectual Property",
                content: [
                  "All product descriptions, images, designs, and branding are the intellectual property of Ravangi and may not be reproduced or used without permission.",
                  "Ravangi is a registered trademark. Unauthorized use of our trademarks is prohibited.",
                ],
              },

              {
                title: "Governing Law",
                content: [
                  "These Terms shall be governed by the laws of the State of Delhi India without regard to conflict of law principles.",
                  "These Terms and Conditions shall be governed by and interpreted in accordance with the laws of India. Any disputes arising out of or in connection with these terms shall be subject to the exclusive jurisdiction of the courts in Delhi, India.",
                  "If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions shall continue in full force and effect.",
                ],
              },
            ].map((section, index) => (
              <motion.div
                key={index}
                variants={slideUp}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border-l-4 border-[#f4aa2d]"
                whileHover={{ x: 5 }}
              >
                <h2 className="text-2xl font-bold text-[#152336] mb-4 flex items-center">
                  <motion.span
                    className="w-4 h-4 bg-[#f4aa2d] rounded-full mr-3"
                    whileHover={{ scale: 1.2 }}
                  ></motion.span>
                  {section.title}
                </h2>
                <ul className="space-y-3 text-[#152336]/90 leading-relaxed">
                  {section.content.map((item, i) => (
                    <motion.li
                      key={i}
                      className="flex items-start"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      viewport={{ once: true, margin: "-20px" }}
                    >
                      <span className="text-[#f4aa2d] mr-2 mt-1.5">•</span>
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Acceptance Section */}
      <section className="py-20 bg-[#152336] text-[#f1ead8] relative overflow-hidden">
        {/* Animated background elements */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-[#f4aa2d] opacity-5"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute bottom-10 right-20 w-40 h-40 rounded-full bg-[#f4aa2d] opacity-5"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, -180, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">
              Terms & Conditions{" "}
              <span className="text-[#f4aa2d]">Questions?</span>
            </h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="h-1 bg-[#f4aa2d] mx-auto"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-[#2d526e] rounded-xl p-8 shadow-lg border border-[#f4aa2d]/20"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">Acceptance of Terms</h2>
                <p className="mb-6">
                  By using our website or purchasing our products, you
                  acknowledge that you have read, understood, and agree to be
                  bound by these Terms and Conditions.
                </p>
                <div className="flex cursor-pointer items-center space-x-4">
                  <motion.div
                    className="w-12 h-12 bg-[#f4aa2d] rounded-full flex items-center justify-center"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <FiFileText className="text-xl text-[#152336]" />
                  </motion.div>
                  <span className="text-sm opacity-80">
                    Full document version available for download
                  </span>
                </div>
              </div>
              <div className="space-y-4">
                <motion.button
                  whileHover={{
                    scale: 1.03,
                    boxShadow: "0 10px 25px -5px rgba(244, 170, 45, 0.3)",
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full cursor-pointer py-4 bg-[#f4aa2d] hover:bg-[#e69c27] text-[#152336] font-medium rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <FiDownload />
                  Download Full Terms (PDF)
                </motion.button>

                <motion.button
                  whileHover={{
                    scale: 1.03,
                    boxShadow: "0 10px 25px -5px rgba(241, 234, 216, 0.2)",
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="cursor-pointer w-full py-4 border-2 border-[#f1ead8] text-[#f1ead8] hover:bg-[#f1ead8]/10 font-medium rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <FiMail />
                  Contact Legal Team
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default TermsAndConditions;
