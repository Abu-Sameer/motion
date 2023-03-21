import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Box1.css';

export default function Box1() {
  const [animating, setAnimating] = useState(false);
  return (
    <div className="box-container">
      <motion.div
        className="box"
        onClick={() => setAnimating(!animating)}
        animate={{
          x: animating ? 1050 : 0,
          opacity: animating ? 1 : 0.3,
          rotate: animating ? 360 : 0,
          borderRadius: 5,
        }}
        initial={{
          opacity: 0.3,
        }}
        transition={{
          type: 'spring',
          stiffness: 80,
        }}
      />
    </div>
  );
}
