import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Instagram, Github } from "lucide-react";

const Contact: React.FC = () => {
  const contactInfo = {
    email: "duyiqundean@gmail.com",
    phone: "+1 (949) 539-6502",
    linkedin: "https://www.linkedin.com/in/yiqun-dean-du-4b4583200/",
    instagram: "https://www.instagram.com/deanduinsta",
    github: "https://github.com/duduyiq2001",
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className="min-h-screen pt-20 bg-dark-bg flex items-center justify-center px-4">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        transition={{ duration: 0.6 }}
        className="card rounded-xl p-8 max-w-lg w-full backdrop-blur-lg 
                   bg-gradient-to-br from-card-bg/90 to-card-bg/70 
                   border border-neon-pink/20"
      >
        <h2 className="text-3xl font-bold mb-8 text-center neon-text">
          Let's Connect
        </h2>

        {/* Contact Methods Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Email */}
          <motion.a
            href={`mailto:${contactInfo.email}`}
            variants={itemVariants}
            transition={{ delay: 0.2 }}
            className="flex items-center space-x-3 p-4 rounded-lg 
                     bg-dark-bg/50 hover:bg-neon-pink/10 
                     transition-colors duration-300 group"
          >
            <Mail className="w-6 h-6 text-neon-pink" />
            <span className="text-gray-300 group-hover:text-white transition-colors">
              {contactInfo.email}
            </span>
          </motion.a>

          {/* Phone */}
          <motion.a
            href={`tel:${contactInfo.phone}`}
            variants={itemVariants}
            transition={{ delay: 0.3 }}
            className="flex items-center space-x-3 p-4 rounded-lg 
                     bg-dark-bg/50 hover:bg-neon-pink/10 
                     transition-colors duration-300 group"
          >
            <Phone className="w-6 h-6 text-neon-pink" />
            <span className="text-gray-300 group-hover:text-white transition-colors">
              {contactInfo.phone}
            </span>
          </motion.a>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center space-x-6">
          <motion.a
            href={contactInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            variants={itemVariants}
            transition={{ delay: 0.4 }}
            className="social-icon-link"
          >
            <div
              className="p-4 rounded-full bg-dark-bg/50 hover:bg-neon-pink/10 
                          transition-all duration-300 group"
            >
              <Linkedin className="w-6 h-6 text-gray-400 group-hover:text-neon-pink" />
            </div>
            <span className="sr-only">LinkedIn Profile</span>
          </motion.a>

          <motion.a
            href={contactInfo.instagram}
            target="_blank"
            rel="noopener noreferrer"
            variants={itemVariants}
            transition={{ delay: 0.5 }}
            className="social-icon-link"
          >
            <div
              className="p-4 rounded-full bg-dark-bg/50 hover:bg-neon-pink/10 
                          transition-all duration-300 group"
            >
              <Instagram className="w-6 h-6 text-gray-400 group-hover:text-neon-pink" />
            </div>
            <span className="sr-only">Instagram Profile</span>
          </motion.a>

          <motion.a
            href={contactInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            variants={itemVariants}
            transition={{ delay: 0.6 }}
            className="social-icon-link"
          >
            <div
              className="p-4 rounded-full bg-dark-bg/50 hover:bg-neon-pink/10 
                          transition-all duration-300 group"
            >
              <Github className="w-6 h-6 text-gray-400 group-hover:text-neon-pink" />
            </div>
            <span className="sr-only">GitHub Profile</span>
          </motion.a>
        </div>

        {/* Additional Message */}
        <motion.p
          variants={itemVariants}
          transition={{ delay: 0.7 }}
          className="text-center text-gray-400 mt-8"
        >
          Available for collaborations and opportunities
        </motion.p>
      </motion.div>
    </div>
  );
};

export default Contact;
