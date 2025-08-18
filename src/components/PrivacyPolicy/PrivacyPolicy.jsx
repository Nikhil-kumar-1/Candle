import { motion } from "framer-motion";
import { FiLock, FiShield, FiDatabase, FiMail } from "react-icons/fi";

const PrivacyPolicy = () => {
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

  const privacyPrinciples = [
    {
      icon: <FiLock className="text-3xl text-[#f4aa2d]" />,
      title: "Data Encryption",
      description: "All sensitive information is encrypted using industry-standard protocols"
    },
    {
      icon: <FiShield className="text-3xl text-[#f4aa2d]" />,
      title: "Limited Access",
      description: "Only authorized personnel have access to your personal data"
    },
    {
      icon: <FiDatabase className="text-3xl text-[#f4aa2d]" />,
      title: "Minimal Collection",
      description: "We only collect data necessary for providing our services"
    },
    {
      icon: <FiMail className="text-3xl text-[#f4aa2d]" />,
      title: "Transparent Communication",
      description: "We'll notify you of any significant changes to our policies"
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
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1590856029826-c7a73142bbf1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHByaXZhY3klMjBwb2xpY3l8ZW58MHx8MHx8fDA%3D')] bg-cover bg-center opacity-30"
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
            Privacy Policy
          </motion.h1>
          <motion.p 
            className="text-lg text-[#f1ead8]/90 mb-8"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Your trust is important to us. Learn how we protect your information.
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

      {/* Privacy Principles */}
      <section className="py-16 bg-[#f1ead8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {privacyPrinciples.map((principle, index) => (
              <motion.div 
                key={index}
                variants={slideUp}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow text-center"
                whileHover={{ y: -5 }}
              >
                <div className="mb-4 flex justify-center">
                  {principle.icon}
                </div>
                <h3 className="text-xl font-bold text-[#152336] mb-2">{principle.title}</h3>
                <p className="text-[#152336]/80">{principle.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Policy Content */}
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
                title: "Information We Collect",
                content: "We collect information you provide directly, including name, email, shipping address, and payment details when you make a purchase. We also automatically collect certain information about your device and interaction with our website through cookies and similar technologies."
              },
              {
                title: "How We Use Your Information",
                content: "Your information is used to process transactions, communicate with you about orders, improve our services, and personalize your experience. We may also use aggregated data for analytics and marketing purposes."
              },
              {
                title: "Data Sharing",
                content: "We do not sell your personal information. We may share data with trusted third-party service providers who assist with payment processing, shipping, and marketing, all of whom are contractually obligated to protect your data."
              },
              {
                title: "Your Rights",
                content: "You have the right to access, correct, or delete your personal information. You may opt out of marketing communications at any time. For requests, please contact our privacy team using the information below."
              },
              {
                title: "Security Measures",
                content: "We implement industry-standard security measures including encryption, secure servers, and regular security audits. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security."
              },
              {
                title: "Policy Updates",
                content: "We may update this policy periodically. We'll notify you of significant changes through email or a notice on our website. Your continued use of our services after such changes constitutes acceptance of the new policy."
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
                <p className="text-[#152336]/90 leading-relaxed">{section.content}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
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
              Privacy <span className="text-[#f4aa2d]">Questions?</span>
            </h2>
            <div className="w-24 h-1 bg-[#f4aa2d] mx-auto"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-[#2d526e] rounded-xl p-8 shadow-lg"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Contact Our Privacy Team</h3>
                <p className="mb-6">We're committed to protecting your personal information and being transparent about our data practices.</p>
                <div className="space-y-4">
                  <p><strong>Email:</strong> ravangicandles@gmail.com</p>
                  <p><strong>Phone:</strong> +91 98105 10825</p>
                  <p><strong>Mail:</strong> 123 Fragrance Lane, Candle City, CC 12345</p>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Last Updated</h3>
                <p className="mb-6">This policy was last updated on January 1, 2023.</p>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3 bg-[#f4aa2d] hover:bg-[#e69c27] text-[#152336] font-medium rounded-lg transition-colors"
                >
                  Download Full Policy (PDF)
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      
    </div>
  );
};

export default PrivacyPolicy;