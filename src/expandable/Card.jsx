import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Card.css';

export default function Card() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <motion.div
        className="card"
        transition={{ layout: { duration: 1, type: 'spring' } }}
        layout
        style={{
          borderRadius: '0.5rem',
        }}
      >
        <motion.h2 layout="position">Framer Motion 🚀</motion.h2>
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
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit
              quos autem perferendis explicabo assumenda eaque quia id atque
              laboriosam repellat.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet,
              aut?
            </p>
            <button onClick={() => setIsOpen(!isOpen)}>Compress</button>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}
