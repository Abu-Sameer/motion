import { motion } from 'framer-motion';
import React from 'react';
import { useState } from 'react';
import './Box4.css';

export default function Box4() {
  const [roll, setRoll] = useState(false);
  return (
    <div className="box4-container">
      <motion.div
        className="box4"
        onClick={() => setRoll(!roll)}
        animate={{
          scale: roll ? [1, 1.4, 1.4, 1.1, 1] : [],
          borderRadius: roll ? ['10px', '20%', '50%', '50%', '10px'] : [],
          rotate: roll ? [0, 190, 360, 360, 0] : [],
        }}
        transition={{ duration: 2 }}
      />
    </div>
  );
}
