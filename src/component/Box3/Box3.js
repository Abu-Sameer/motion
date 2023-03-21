import { motion } from 'framer-motion';
import React from 'react';
import './Box3.css';

export default function Box3() {
  const boxVarient = {
    hidden: { x: '-100vw' },
    visible: {
      x: 0,
      transition: { delay: 0.5, when: 'beforeChildren' },
    },
  };

  const listVarient = {
    hidden: { x: -10, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      staggerChildren: 0.2,
    },
  };
  return (
    <div className="box3-container">
      <motion.div
        className="box3"
        variants={boxVarient}
        animate="visible"
        initial="hidden"
      >
        {[1, 2, 3].map((boxItem) => {
          return (
            <motion.li className="boxItem" variants={listVarient}></motion.li>
          );
        })}
      </motion.div>
    </div>
  );
}
