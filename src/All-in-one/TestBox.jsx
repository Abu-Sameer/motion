import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import './TestBox.css';
import { useState } from 'react';

export default function TestBox() {
  const [rotateScale, setrotateScale] = useState(false);
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
              y: -250,
              rotate: -270,
              transition: { duration: 3 },
            });
          }}
        >
          move up
        </button>
        <button
          onClick={() => {
            control.start({ y: 345, rotate: 270, transition: { duration: 3 } });
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
        <motion.div className="conto" animate={controller} />
        <div className="btn">
          <button
            onClick={() => {
              controller.start({
                x: 600,
                rotate: 360,
                opacity: 1,
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
                transition: { type: 'spring', stiffness: 30 },
              });
            }}
          >
            roll right
          </button>
        </div>
        <motion.div
          className="cont-last"
          onClick={() => setrotateScale(!rotateScale)}
          animate={{
            scale: rotateScale ? [1.1, 1.3, 1.5, 1.3, 1.1] : '',
            rotate: rotateScale ? [0, 220, 360, 360, 0] : '',
            borderRadius: rotateScale
              ? ['10%', '30%', ' 50%', '50%', '10%']
              : '',
            transition: rotateScale ? { duration: 2 } : '',
          }}
        />
      </div>
    </div>
  );
}
