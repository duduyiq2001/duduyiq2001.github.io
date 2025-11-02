import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Brain, AudioWaveform } from "lucide-react";
interface AlgorithmCard {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  imageSrc?: string;
  tags: string[];
}

const AlgorithmShowcase = () => {
  const navigate = useNavigate();

  const algorithms: AlgorithmCard[] = [
    {
      id: "neural-network",
      title: "Neural Network Visualization",
      description:
        "Interactive visualization of a feedforward neural network with ReLU activation. Explore how data flows through layers, understand weights, biases, and activation functions.",
      icon: <Brain className="w-8 h-8" />,
      imageSrc: "/img/deep-learning.png", // Add your preview image
      tags: ["Machine Learning", "ReLU", "Interactive"],
    },
    {
      id: "fourier-transform",
      title: "Fourier Transform Drawing",
      description:
        "Visualize how Fourier transforms can decompose complex drawings into simple circular motions. Draw any shape and watch it being reconstructed through epicycles.",
      icon: <AudioWaveform className="w-8 h-8" />,
      imageSrc: "/img/radio-waves.png", // Add your preview image
      tags: ["Mathematics", "Animation", "Drawing"],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
    hover: {
      scale: 1.02,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <div className="min-h-screen pt-20 bg-dark-bg ">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold neon-text mb-4">
            Algorithm Visualizations
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore complex algorithms through interactive visualizations. Click
            on any card to dive deeper into the algorithm.
          </p>
        </motion.div>

        {/* Algorithm Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto"
        >
          {algorithms.map((algo) => (
            <motion.div
              key={algo.id}
              variants={cardVariants}
              whileHover="hover"
              className="cursor-pointer"
              onClick={() => navigate(`/algorithms/${algo.id}`)}
            >
              <div className="card rounded-xl overflow-hidden hover:border-neon-pink/50 transition-colors duration-300">
                {/* Preview Image */}
                <div className="relative h-48 bg-gradient-to-br from-gray-900 to-gray-800 overflow-hidden">
                  {algo.imageSrc ? (
                    <div className="w-full h-full flex justify-center">
                      <img
                        src={algo.imageSrc}
                        alt={algo.title}
                        className="w-full object-contain opacity-80 scale-75 transform -translate-y-0"
                      />
                    </div>
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-neon-pink">
                      {algo.icon}
                    </div>
                  )}
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-card-bg via-transparent" />
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Title and Icon */}
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-neon-pink">{algo.icon}</span>
                    <h3 className="text-xl font-bold text-white">
                      {algo.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-gray-400 mb-4">{algo.description}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {algo.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-neon-pink/10 rounded-full text-sm text-gray-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Call to action */}
                <div className="px-6 pb-6 flex justify-end">
                  <span className="text-neon-pink text-sm font-semibold flex items-center gap-2">
                    Explore Visualization
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default AlgorithmShowcase;
