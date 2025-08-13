import { FaFacebookF, FaInstagram, FaBehance, FaTwitter } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa6";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// Animation variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function Footer() {
  return (
    <footer className="bg-white text-[#152336] border-t border-[#152336]/10">
      <motion.div 
        className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={container}
      >
        
        {/* Brand Info */}
        <motion.div variants={item}>
          <h2 className="text-2xl font-serif mb-3 font-bold">RAVANGI</h2>
          <p className="text-sm text-[#152336]/80 mb-4">
            At Ravangi Candle, we believe in spreading warmth, light, and serenity through every candle we craft.
          </p>
          <p className="text-sm text-[#152336]/80 mb-4">
            Whether you have questions or just want to say hello, our team is here to assist you.
          </p>
          <div className="space-y-1 text-sm text-[#152336]/80">
            <p>1234 Heaven Street, USA</p>
            <p>ravangicandles@gmail.com</p>
            <p>+91 98105 10825</p>
          </div>
        </motion.div>

        {/* Info Links */}
        <motion.div variants={item}>
          <h3 className="text-sm font-semibold mb-3 border-b border-[#152336]/20 pb-2">INFO</h3>
          <ul className="space-y-3">
            <motion.li 
              whileHover={{ x: 5 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            >
              <Link to="/custom-service" className="text-sm text-[#152336]/80 hover:text-[#f4aa2d] transition-colors">
                Custom Service
              </Link>
            </motion.li>
            <motion.li 
              whileHover={{ x: 5 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            >
              <Link to="/faq" className="text-sm text-[#152336]/80 hover:text-[#f4aa2d] transition-colors">
                F.A.Q.
              </Link>
            </motion.li>
            <motion.li 
              whileHover={{ x: 5 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            >
              <Link to="/order-tracking" className="text-sm text-[#152336]/80 hover:text-[#f4aa2d] transition-colors">
                Order Tracking
              </Link>
            </motion.li>
            <motion.li 
              whileHover={{ x: 5 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            >
              <Link to="/contact" className="text-sm text-[#152336]/80 hover:text-[#f4aa2d] transition-colors">
                Contact Us
              </Link>
            </motion.li>
            <motion.li 
              whileHover={{ x: 5 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            >
              <Link to="/events" className="text-sm text-[#152336]/80 hover:text-[#f4aa2d] transition-colors">
                Events
              </Link>
            </motion.li>
            <motion.li 
              whileHover={{ x: 5 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            >
              <Link to="/popular" className="text-sm text-[#152336]/80 hover:text-[#f4aa2d] transition-colors">
                Popular
              </Link>
            </motion.li>
          </ul>
        </motion.div>

        {/* Services Links */}
        <motion.div variants={item}>
          <h3 className="text-sm font-semibold mb-3 border-b border-[#152336]/20 pb-2">SERVICES</h3>
          <ul className="space-y-3">
            <motion.li 
              whileHover={{ x: 5 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            >
              <Link to="/sitemap" className="text-sm text-[#152336]/80 hover:text-[#f4aa2d] transition-colors">
                Sitemap
              </Link>
            </motion.li>
            <motion.li 
              whileHover={{ x: 5 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            >
              <Link to="/privacy-policy" className="text-sm text-[#152336]/80 hover:text-[#f4aa2d] transition-colors">
                Privacy Policy
              </Link>
            </motion.li>
            <motion.li 
              whileHover={{ x: 5 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            >
              <Link to="/your-account" className="text-sm text-[#152336]/80 hover:text-[#f4aa2d] transition-colors">
                Your Account
              </Link>
            </motion.li>
            <motion.li 
              whileHover={{ x: 5 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            >
              <Link to="/advanced-search" className="text-sm text-[#152336]/80 hover:text-[#f4aa2d] transition-colors">
                Advanced Search
              </Link>
            </motion.li>
            <motion.li 
              whileHover={{ x: 5 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            >
              <Link to="/terms-&-conditions" className="text-sm text-[#152336]/80 hover:text-[#f4aa2d] transition-colors">
                Terms & Conditions
              </Link>
            </motion.li>
            <motion.li 
              whileHover={{ x: 5 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            >
              <Link to="/contact" className="text-sm text-[#152336]/80 hover:text-[#f4aa2d] transition-colors">
                Contact
              </Link>
            </motion.li>
          </ul>
        </motion.div>

        {/* Newsletter */}
        <motion.div variants={item}>
          <h3 className="text-sm font-semibold mb-3 border-b border-[#152336]/20 pb-2">NEWSLETTER</h3>
          <p className="text-sm text-[#152336]/80 mb-4">
            Join 40,000+ subscribers and get a new discount coupon
          </p>
          <motion.div 
            className="flex mb-6"
            whileHover={{ scale: 1.02 }}
          >
            <input
              type="email"
              placeholder="Your email address..."
              className="flex-1 border border-[#152336]/20 px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#f4aa2d]"
            />
            <button className="bg-[#152336] text-[#f1ead8] px-4 hover:bg-[#f4aa2d] transition-colors">
              <FaEnvelope />
            </button>
          </motion.div>
          <div className="flex space-x-3">
            <motion.a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 border border-[#152336]/20 rounded-full text-[#152336]/80 hover:bg-[#152336] hover:text-[#f1ead8] transition-colors"
              whileHover={{ scale: 1.1, rotate: 10 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaTwitter />
            </motion.a>
            <motion.a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 border border-[#152336]/20 rounded-full text-[#152336]/80 hover:bg-[#152336] hover:text-[#f1ead8] transition-colors"
              whileHover={{ scale: 1.1, rotate: 10 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaFacebookF />
            </motion.a>
            <motion.a
              href="https://behance.net"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 border border-[#152336]/20 rounded-full text-[#152336]/80 hover:bg-[#152336] hover:text-[#f1ead8] transition-colors"
              whileHover={{ scale: 1.1, rotate: 10 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaBehance />
            </motion.a>
            <motion.a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 border border-[#152336]/20 rounded-full text-[#152336]/80 hover:bg-[#152336] hover:text-[#f1ead8] transition-colors"
              whileHover={{ scale: 1.1, rotate: 10 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaInstagram />
            </motion.a>
          </div>
        </motion.div>
      </motion.div>

      {/* Bottom Bar */}
      <motion.div 
        className="border-t border-[#152336]/10 py-4 text-center text-sm text-[#152336]/80"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
      >
        © {new Date().getFullYear()} RAVANGI | Designed by Adonomics Technologies
      </motion.div>
    </footer>
  );
}