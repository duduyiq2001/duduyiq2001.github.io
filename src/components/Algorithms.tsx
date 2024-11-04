import React from "react";
import { motion } from "framer-motion";

const Algorithms: React.FC = () => {
  return (
    <motion.div
      className="section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 1.5 }}
    >
      <h1 className="glitch">Cool Algorithms</h1>
      <p>
        Dive into the world of algorithms where I've crafted innovative
        solutions to complex problems.
      </p>
      <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        Explore Algorithms
      </motion.button>
    </motion.div>
  );
};

export default Algorithms;
