import React from "react";
import { motion } from "framer-motion"; // assuming you're using framer-motion

const About: React.FC = () => {
  return (
    <div className="relative min-h-screen pt-20">
      {/* Background image container with cropping */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="w-full h-[105%] -mt-2" // 105% height to allow for bottom crop
          style={{
            backgroundImage: "url(/img/hacker.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            // Filter to darken the background slightly to ensure text readability
            filter: "brightness(0.7)",
          }}
        />
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 container mx-auto px-4 pt-16"
      >
        <div className="card rounded-xl p-8 max-w-3xl mx-auto backdrop-blur-sm bg-card-bg/90">
          <h2 className="text-3xl font-bold mb-6 neon-text">About Me</h2>
          <p className="text-gray-300 leading-relaxed">
            Passionate computer engineering student with a focus on software
            engineering, computer security and machine learning. Combining
            technical expertise ,creative problem-solving, as well as high
            attention to details to build elegant solutions.
          </p>

          {/* Additional details */}
          <div className="mt-6 space-y-4 text-gray-300">
            <div className="flex items-center space-x-2">
              <span className="text-neon-pink">📍</span>
              <span>Location: Saint Louis, Missouri</span>
            </div>
            <div className="flex items-top space-x-2">
              <span className="text-neon-pink">🎓</span>
              <span>
                Education: UC Irvine 2024: B.S. in Computer Science/ Washu 2026
                M.S. in Computer Engineering
              </span>
            </div>
          </div>

          {/* Goals or Mission Statement */}
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4 text-neon-pink">
              Mission
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Dedicated to creating innovative solutions that make a positive
              impact. I strive to combine cutting-edge technology with practical
              applications, whether it's developing efficient algorithms,
              building user-friendly applications, or exploring the frontiers of
              AI.
            </p>
          </div>

          {/* Call to action */}
          <div className="mt-8 flex justify-center">
            <a
              href="#contact"
              className="inline-block px-8 py-3 bg-neon-pink rounded-lg button-glow text-white"
            >
              Let's Connect
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
