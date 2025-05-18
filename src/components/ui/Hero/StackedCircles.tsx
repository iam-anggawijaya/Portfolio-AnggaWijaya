import { motion } from 'framer-motion';
import React from 'react';

type StackedCirclesProps = {
  className?: string;
  style?: React.CSSProperties;
};

// Definisikan animasi bounce-in
const bounceInVariants = {
  hidden: { scale: 0.5, opacity: 0, y: 50 },
  visible: {
    scale: 1,
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 50, damping: 8 },
  },
};

const StackedCircles = ({ className, style }: StackedCirclesProps) => (
  <motion.div
    initial='hidden'
    animate='visible'
    variants={bounceInVariants}
    className={`flex-center rounded-full bg-[rgba(102,0,235,0.2)] opacity-70${className ? ` ${className}` : ''}`}
    style={{
      width: 'clamp(37.94rem, 70.69vw, 63.63rem)',
      height: 'clamp(37.94rem, 70.69vw, 63.63rem)',
      ...style,
    }}
  >
    <motion.div
      initial='hidden'
      animate='visible'
      variants={bounceInVariants}
      className='flex-center rounded-full bg-[rgba(102,0,235,0.4)]'
      style={{
        width: 'clamp(29.81rem, 55.49vw, 49.94rem)',
        height: 'clamp(29.81rem, 55.49vw, 49.94rem)',
      }}
    >
      <motion.div
        initial='hidden'
        animate='visible'
        variants={bounceInVariants}
        className='flex-center rounded-full bg-[rgba(102,0,235,0.6)]'
        style={{
          width: 'clamp(21.63rem, 40.28vw, 36.25rem)',
          height: 'clamp(21.63rem, 40.28vw, 36.25rem)',
        }}
      >
        <motion.div
          initial='hidden'
          animate='visible'
          variants={bounceInVariants}
          className='flex-center rounded-full bg-[rgba(102,0,235,0.8)]'
          style={{
            width: 'clamp(13.5rem, 25.14vw, 22.63rem)',
            height: 'clamp(13.5rem, 25.14vw, 22.63rem)',
          }}
        />
      </motion.div>
    </motion.div>
  </motion.div>
);

export default StackedCircles;
