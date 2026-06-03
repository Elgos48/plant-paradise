import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const StartupAnimation = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Hide animation after 3 seconds
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 1000);
    }, 3000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  // Generate random bubbles
  const [bubbles] = useState(() => 
    Array.from({ length: 25 }).map((_, i) => ({
      id: i,
      size: Math.random() * 60 + 20,
      left: `${Math.random() * 100}%`,
      duration: Math.random() * 2 + 2,
      delay: Math.random() * 1
    }))
  );

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-blue-900 overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: '-100%' }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {/* Bubbles */}
          {bubbles.map(bubble => (
            <motion.div
              key={bubble.id}
              className="absolute bottom-[-100px] rounded-full bg-white/20 backdrop-blur-sm border border-white/30 shadow-[inset_0_0_10px_rgba(255,255,255,0.5)]"
              style={{
                width: bubble.size,
                height: bubble.size,
                left: bubble.left,
              }}
              animate={{ 
                y: ['0vh', '-120vh'], 
                opacity: [0, 1, 1, 0],
                x: ['0px', '30px', '-30px', '0px']
              }}
              transition={{
                duration: bubble.duration,
                delay: bubble.delay,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          ))}

          {/* Logo / Text */}
          <motion.div
            className="z-10 text-center text-white"
            initial={{ scale: 0.8, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 1.1, opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-4 drop-shadow-lg"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Are you ready kids?
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-blue-200"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              ~Kelompok 1~
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default StartupAnimation;
