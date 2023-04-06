import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Card.css';

export default function Card(props) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <motion.div
      className="card"
      transition={{ layout: { duration: 1, type: 'spring' } }}
      layout
      style={{
        borderRadius: '0.5rem',
      }}
    >
      <motion.h2 layout="position">{props.title} 🚀</motion.h2>
      {!isOpen && (
        <button onClick={() => setIsOpen(!isOpen)} className="framer-btn">
          Expand
        </button>
      )}
      {isOpen && (
        <motion.div
          className="expand"
          animate={{
            opacity: 1,
          }}
          initial={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <p>{props.textOne}</p>
          <p>{props.textTwo}</p>
          <button onClick={() => setIsOpen(!isOpen)}>Compress</button>
        </motion.div>
      )}
    </motion.div>
  );
}
