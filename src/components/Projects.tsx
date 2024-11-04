import React from "react";
import { motion } from "framer-motion";

const Projects: React.FC = () => {
  return (
    <motion.div
      className="section"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 1.5, type: "spring" }}
    >
      <h1 className="glitch">Projects</h1>
      <p>
        Explore my diverse projects, from sleek web interfaces to complex data
        analysis tools. Each project demonstrates my versatility and dedication
        to impactful software solutions.
      </p>
      <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        Contact Me
      </motion.button>
    </motion.div>
  );
};

export default Projects;
