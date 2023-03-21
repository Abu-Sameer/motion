import React from 'react';
import { motion } from 'framer-motion';
import './Box2.css';

export default function Box2() {
  return (
    <div className="box2-container">
      <motion.div
        className="box2"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        drag
        dragConstraints={{
          left: -20,
          right: 20,
          top: 5,
          bottom: 5,
        }}
      />
    </div>
  );
}
