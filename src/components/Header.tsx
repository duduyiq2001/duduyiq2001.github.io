import React from "react";
import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";

const Header: React.FC = () => {
  return (
    <motion.div
      className="header"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <ReactTyped
        strings={[
          "Welcome to My World",
          "Explore My Projects",
          "Dare to Dive Into Algorithms",
        ]}
        typeSpeed={80}
        backSpeed={50}
        loop
      />
      <motion.button
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        className="contact-button"
      >
        Get in Touch
      </motion.button>
    </motion.div>
  );
};

export default Header;
