// BackToTop.jsx
import { motion } from "framer-motion";

export default function BackToTop() {
  return (
    <motion.div
      className="fixed bottom-8 right-8 z-50"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1 }}
    >
      <motion.button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="cursor-pointer p-3 bg-[#152336] text-[#f1ead8] rounded-full shadow-lg"
        whileHover={{ scale: 1.1, backgroundColor: "#2d526e" }}
        whileTap={{ scale: 0.95 }}
        aria-label="Back to Top"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </motion.button>
    </motion.div>
  );
}
