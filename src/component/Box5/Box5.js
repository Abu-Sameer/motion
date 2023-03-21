import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import './Box5.css';

export default function Box5() {
  const control = useAnimation();
  return (
    <div className="box5-container">
      <button
        onClick={() => {
          control.start({
            x: 1000,
            transition: {
              duration: 2,
            },
          });
        }}
      >
        Move Left
      </button>
      <button
        onClick={() => {
          control.start({
            x: 0,
            transition: { duration: 2 },
          });
        }}
      >
        Move Right
      </button>
      <button
        onClick={() => {
          control.start({
            borderRadius: '50%',
            transition: { duration: 1 },
          });
        }}
      >
        Circle
      </button>
      <button
        onClick={() => {
          control.start({
            borderRadius: '5px',
            transition: { duration: 1 },
          });
        }}
      >
        Square
      </button>
      <button
        onClick={() => {
          control.stop();
        }}
      >
        Stop
      </button>
      <motion.div className="box5" animate={control} />
    </div>
  );
}
