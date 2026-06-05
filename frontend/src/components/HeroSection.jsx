import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Leaf } from 'lucide-react';
import oceanbg from '../assets/ocean-bg.jpeg';

export default function HeroSection() {
  const [bubbles, setBubbles] = useState([]);

  useEffect(() => {
    // Generate random bubbles
    const newBubbles = Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      size: Math.random() * 40 + 10,
      left: Math.random() * 100,
      duration: Math.random() * 10 + 5,
      delay: Math.random() * 5,
    }));
    setBubbles(newBubbles);
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden flex flex-col items-center justify-center bg-gradient-to-b from-[#00BFFF] to-[#40E0D0]" 
    style={{ backgroundImage: `url(${oceanbg})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}>
      {/* Light rays from top */}
      <div className="absolute top-0 left-0 w-full h-[50vh] opacity-30 mix-blend-overlay pointer-events-none" 
           style={{
             background: 'linear-gradient(to bottom, rgba(255,255,255,0.8) 0%, transparent 100%)',
             maskImage: 'repeating-linear-gradient(90deg, transparent, rgba(255,255,255,1) 10%, transparent 20%)',
             WebkitMaskImage: 'repeating-linear-gradient(90deg, transparent, rgba(255,255,255,1) 10%, transparent 20%)'
           }} 
      />

      {/* Floating Bubbles */}
      {bubbles.map((bubble) => (
        <motion.div
          key={bubble.id}
          className="absolute rounded-full border border-white/40 bg-white/10 backdrop-blur-sm pointer-events-none"
          style={{
            width: bubble.size,
            height: bubble.size,
            left: `${bubble.left}%`,
            bottom: -50,
          }}
          animate={{
            y: [0, -window.innerHeight - 100],
            x: [0, Math.random() * 50 - 25, 0],
          }}
          transition={{
            duration: bubble.duration,
            repeat: Infinity,
            ease: "linear",
            delay: bubble.delay,
          }}
        />
      ))}

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, type: "spring", bounce: 0.5 }}
          className="mb-6 flex items-center justify-center gap-4"
        >
          <Leaf className="w-12 h-12 text-seaweed drop-shadow-md animate-pulse" />
          <h1
            className="text-5xl md:text-7xl font-extrabold text-[#FFD166] text-shadow-bubbly drop-shadow-xl tracking-wide"
            style={{ fontFamily: 'var(--font-spongebob)' }}
          >
            SPONGEGARDEN
          </h1>
          <Leaf className="w-12 h-12 text-seaweed drop-shadow-md animate-pulse" style={{ transform: 'scaleX(-1)' }} />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-xl md:text-2xl text-white font-semibold mb-10 max-w-2xl drop-shadow-md"
        >
          Learn everything about growing healthy and beautiful plants in our playful underwater world.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.1, rotate: [-2, 2, -2, 0] }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="px-8 py-4 bg-coral text-white text-2xl font-bold rounded-full shadow-[0_8px_0_#c0392b] active:shadow-[0_0px_0_#c0392b] active:translate-y-2 transition-all relative overflow-hidden group"
          onClick={() => {
            document.getElementById('plants').scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <span className="relative z-10">Start Exploring</span>
          <div className="absolute inset-0 bg-white/20 transform -translate-x-full group-hover:translate-x-full transition-transform duration-500 ease-in-out" />
        </motion.button>
      </div>

      {/* Sea Floor and Plants (Static SVG simulation) */}
      <div className="absolute bottom-0 w-full h-32 bg-sand rounded-t-[50%] scale-x-150 transform origin-bottom" />
      <svg className="absolute bottom-10 left-10 w-24 h-40 text-seaweed" viewBox="0 0 100 200" fill="currentColor">
         <motion.path 
            d="M50,200 Q20,100 50,0 Q80,100 50,200 Z"
            animate={{ d: ["M50,200 Q20,100 50,0 Q80,100 50,200 Z", "M50,200 Q50,100 80,10 Q20,100 50,200 Z", "M50,200 Q20,100 50,0 Q80,100 50,200 Z"] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
         />
      </svg>
      <svg className="absolute bottom-5 right-20 w-32 h-48 text-[#27ae60]" viewBox="0 0 100 200" fill="currentColor">
         <motion.path 
            d="M50,200 Q20,100 50,0 Q80,100 50,200 Z"
            animate={{ d: ["M50,200 Q20,100 50,0 Q80,100 50,200 Z", "M50,200 Q0,100 20,20 Q80,100 50,200 Z", "M50,200 Q20,100 50,0 Q80,100 50,200 Z"] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
         />
      </svg>
    </section>
  );
}
