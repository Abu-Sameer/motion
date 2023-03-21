import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import './TestBox.css';

export default function TestBox() {
  const control = useAnimation();
  const controller = useAnimation();
  return (
    <div className="main">
      <div className="main-btn">
        <button
          onClick={() => {
            control.start({
              x: -600,
              rotate: -360,
              transition: { duration: 3 },
            });
          }}
        >
          move left
        </button>
        <button
          onClick={() => {
            control.start({
              x: 600,
              rotate: 360,
              transition: { duration: 3 },
            });
          }}
        >
          move right
        </button>
        <button
          onClick={() => {
            control.start({
              y: -300,
              rotate: -270,
              transition: { duration: 3 },
            });
          }}
        >
          move up
        </button>
        <button
          onClick={() => {
            control.start({ y: 300, rotate: 270, transition: { duration: 3 } });
          }}
        >
          move down
        </button>
        <button
          onClick={() => {
            control.start({ borderRadius: '50%', transition: { duration: 2 } });
          }}
        >
          circle
        </button>
        <button
          onClick={() => {
            control.start({
              borderRadius: '5px',
              transition: { duration: 2 },
            });
          }}
        >
          square
        </button>
        <button
          onClick={() => {
            control.stop();
          }}
        >
          stop
        </button>
      </div>
      <div className="testContainer">
        <motion.div className="cont" animate={control} />
        <div className="btn">
          <button
            onClick={() => {
              controller.start({
                x: 600,
                rotate: 360,
                opacity: 1,
                initial: { opacity: 0.3 },
                transition: { type: 'spring', stiffness: 30 },
              });
            }}
          >
            roll left
          </button>
          <button
            onClick={() => {
              controller.start({
                x: -600,
                rotate: -360,
                opacity: 1,
                initial: { opacity: 0.3 },
                transition: { type: 'spring', stiffness: 30 },
              });
            }}
          >
            roll right
          </button>
        </div>
        <motion.div className="conto" animate={controller} />
      </div>
    </div>
  );
}
