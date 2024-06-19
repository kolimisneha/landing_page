import React from 'react';
import { motion } from 'framer-motion';
import './App.css';


const Herosection = () => (
  <section className="hero">
    <motion.h2
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      Smart Digital Watch For Luxurious Life
    </motion.h2>
    <motion.p
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <p>Discover a world where precision meets elegance. Our luxury watches are 
        crafted with meticulous attention to detail, blending timeless design with cutting-edge technology. 
        Each timepiece reflects our commitment to quality, ensuring sophistication that stands the test of time.
        Explore the artistry and heritage behind every watch, and find the perfect companion for your journey.</p>
    </motion.p>
   
    <motion.button
      className="hero-button"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      Learn More
    </motion.button>
  </section>
);

export default Herosection;
