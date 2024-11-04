import React from "react";
import { motion } from "framer-motion";

const Footer: React.FC = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="footer"
    >
      <p>
        Made with 💻 by Deandu.{" "}
        <a href="https://buymeacoffee.com/your-link">Buy Me a Coffee</a>
      </p>
    </motion.footer>
  );
};

export default Footer;
