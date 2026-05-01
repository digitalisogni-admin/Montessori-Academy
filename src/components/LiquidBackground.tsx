import { motion } from 'motion/react';

export default function LiquidBackground() {
  return (
    <div className="liquid-bg">
      <motion.div 
        animate={{
          x: [0, 100, -50, 0],
          y: [0, -50, 100, 0],
          scale: [1, 1.2, 0.9, 1]
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
        className="orb w-[600px] h-[600px] bg-montessori-red top-[-100px] left-[-100px]"
      />
      <motion.div 
        animate={{
          x: [0, -150, 100, 0],
          y: [0, 100, -150, 0],
          scale: [1.1, 0.8, 1.2, 1.1]
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear"
        }}
        className="orb w-[500px] h-[500px] bg-montessori-green bottom-[-200px] right-[-100px]"
      />
      <motion.div 
        animate={{
          x: [0, 50, -100, 0],
          y: [0, -150, 50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="orb w-[400px] h-[400px] bg-montessori-yellow top-[40%] left-[60%]"
      />
      
      {/* Texture mask */}
      <div className="absolute inset-0 bg-white/20 backdrop-blur-[120px]" />
    </div>
  );
}
