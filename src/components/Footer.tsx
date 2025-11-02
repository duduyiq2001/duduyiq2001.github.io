import React from "react";
import { motion } from "framer-motion";

const Footer: React.FC = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="bg-gradient-dark border-t border-neon-pink/10 py-6 text-center"
    >
      <p className="text-gray-400">
        Made with{" "}
        <span className="text-neon-pink inline-block hover:scale-110 transition-transform duration-200">
          💻
        </span>{" "}
        by{" "}
        <span className="text-neon-pink hover:text-white transition-colors duration-300">
          Deandu
        </span>
        .{" "}
        <a
          href="https://buymeacoffee.com/duyiqundean"
          target="_blank"
          rel="noopener noreferrer"
          className="text-neon-pink hover:text-white transition-colors duration-300 border-b border-neon-pink/50 hover:border-white"
        >
          Buy Me a Coffee
        </a>
      </p>
    </motion.footer>
  );
};

export default Footer;
