import React from "react";
import "./App.css";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

function App() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-black text-white text-center px-4 overflow-hidden">
      {/* Animated Background Gradient */}
      {/* <div className="absolute inset-0 bg-gradient-to-br from-black via-cyan-900 to-black opacity-40 animate-pulse" /> */}
      {/* Main Heading with animation */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }} // Start animation from top and hidden
        animate={{ opacity: 1, y: 0 }} // Fade in and move into place
        transition={{ duration: 1 }} // Animation duration
        className="text-5xl font-bold text-cyan-400 drop-shadow-lg"
      >
        🚀 Coming Soon
      </motion.h1>

      {/* Subtitle with fade-in effect */}
      <motion.p
        initial={{ opacity: 0 }} // Start completely hidden
        animate={{ opacity: 1 }} // Fade in
        transition={{ delay: 0.5, duration: 1 }} // Slight delay for smooth appearance
        className="text-lg mt-4 text-gray-400"
      >
        A new version is on the way. Stay connected!
      </motion.p>

      {/* Social Media Links with hover effects */}
      <div className="flex gap-6 mt-6">
        <motion.a
          href="https://github.com/your-username"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2 }} // Enlarge on hover for interactive effect
          className="text-4xl text-cyan-400 hover:text-cyan-200 transition"
        >
          <FaGithub />
        </motion.a>

        <motion.a
          href="https://linkedin.com/in/your-username"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2 }} // Enlarge on hover for interactive effect
          className="text-4xl text-cyan-400 hover:text-cyan-200 transition"
        >
          <FaLinkedin />
        </motion.a>
      </div>
    </div>
  );
}

export default App;
