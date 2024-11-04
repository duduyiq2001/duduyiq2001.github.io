import React from "react";
import { motion } from "framer-motion";

const About: React.FC = () => {
  return (
    <motion.div
      className="section"
      initial={{ x: "-100vw" }}
      animate={{ x: 0 }}
      transition={{ delay: 0.5, type: "spring", stiffness: 80 }}
    >
      <h1 className="glitch">About Me</h1>
      <p>
        Passionate about the art of programming. With a strong foundation in
        data structures, algorithms, and problem-solving, I continuously push
        the boundaries of technology.
      </p>
    </motion.div>
  );
};

export default About;
