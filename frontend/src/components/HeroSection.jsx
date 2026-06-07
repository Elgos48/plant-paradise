import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Leaf } from 'lucide-react';
import oceanbg from '../assets/ocean-bg.jpeg';
import spongebobHouse from '../assets/spongebob-house.png';
import squidwardHouse from '../assets/squidward_house.png';
import patrickHouse from '../assets/patrick_house.png';

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
      <div className="relative z-30 flex flex-col items-center text-center px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, type: "spring", bounce: 0.5 }}
          className="mb-6 flex items-center justify-center gap-2 md:gap-4"
        >
          <Leaf className="w-8 h-8 md:w-12 md:h-12 text-seaweed drop-shadow-md animate-pulse" />
          <h1
            className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-sand text-shadow-bubbly drop-shadow-xl tracking-wide"
            style={{ fontFamily: 'var(--font-spongebob)' }}
          >
            SPONGEGARDEN
          </h1>
          <Leaf className="w-8 h-8 md:w-12 md:h-12 text-seaweed drop-shadow-md animate-pulse" style={{ transform: 'scaleX(-1)' }} />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-lg md:text-2xl text-white font-semibold mb-10 max-w-2xl drop-shadow-md"
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

      {/* Background Sand Layers for depth */}
      <div className="absolute bottom-12 w-full h-40 bg-[#E5C158] rounded-t-[50%] scale-x-[1.5] transform origin-bottom z-0 opacity-90 shadow-[inset_0_-20px_20px_rgba(0,0,0,0.1)]" />
      <div className="absolute bottom-8 -left-20 w-[60%] h-32 bg-[#D4AF37] rounded-t-[60%] transform origin-bottom z-0 opacity-80" />
      <div className="absolute bottom-10 -right-10 w-[50%] h-36 bg-[#F4D03F] rounded-t-[50%] transform origin-bottom z-0 opacity-80" />

      {/* SpongeBob Houses */}
      <div className="absolute bottom-16 w-full flex justify-center items-end gap-2 sm:gap-4 md:gap-12 px-2 sm:px-4 z-10 pointer-events-auto drop-shadow-2xl">
        <motion.img 
          src={patrickHouse} 
          alt="Patrick's House" 
          className="w-25 sm:w-40 md:w-56 drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)] z-10"
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          whileHover={{ y: -10, rotate: -2, scale: 1.05 }}
        />
        <motion.img 
          src={squidwardHouse} 
          alt="Squidward's House" 
          className="w-30 sm:w-48 md:w-64 drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)] z-20"
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          whileHover={{ y: -10, rotate: 2, scale: 1.05 }}
        />
        <motion.img 
          src={spongebobHouse} 
          alt="SpongeBob's House" 
          className="w-32 sm:w-56 md:w-72 drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)] z-30"
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          whileHover={{ y: -15, scale: 1.1 }}
        />
      </div>

      {/* Main Foreground Sand */}
      <div className="absolute bottom-0 w-full h-24 bg-sand rounded-t-[40%] scale-x-[1.2] transform origin-bottom z-30 shadow-[0_-10px_20px_rgba(0,0,0,0.15)]" />

      {/* SpongeBob Road */}
      <div className="absolute bottom-0 w-full flex justify-center z-30 pointer-events-none">
        <div className="w-[120%] h-14 bg-[#95a5a6] rounded-t-[100%] border-t-[6px] border-[#7f8c8d] opacity-90 transform translate-y-6" />
      </div>

      {/* Foreground Elements (Rocks, Starfish, Coral) */}
      {/* Left Rocks */}
      <div className="absolute bottom-6 left-[10%] w-16 h-10 bg-[#7f8c8d] rounded-[40%] z-40 shadow-[inset_-5px_-5px_10px_rgba(0,0,0,0.3)]" />
      <div className="absolute bottom-4 left-[15%] w-10 h-6 bg-[#95a5a6] rounded-[50%] z-40 shadow-[inset_-3px_-3px_5px_rgba(0,0,0,0.2)]" />
      
      {/* Starfish SVG */}
      <motion.svg 
        className="absolute bottom-8 left-[30%] w-10 h-10 text-[#FF6B6B] z-40 drop-shadow-[0_4px_4px_rgba(0,0,0,0.4)]" 
        viewBox="0 0 24 24" 
        fill="currentColor"
        animate={{ rotate: [0, 5, 0, -5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </motion.svg>

      {/* Right Rocks */}
      <div className="absolute bottom-4 right-[20%] w-24 h-12 bg-[#8B4513] rounded-[45%] z-40 shadow-[inset_-6px_-6px_12px_rgba(0,0,0,0.4)]" />
      <div className="absolute bottom-2 right-[15%] w-14 h-8 bg-[#A0522D] rounded-[40%] z-40 shadow-[inset_-4px_-4px_8px_rgba(0,0,0,0.3)]" />

      {/* Seaweed in foreground */}
      <svg className="absolute bottom-8 right-[5%] w-20 h-32 text-seaweed z-40 drop-shadow-xl" viewBox="0 0 100 200" fill="currentColor">
         <motion.path 
            d="M50,200 Q20,100 50,0 Q80,100 50,200 Z"
            animate={{ d: ["M50,200 Q20,100 50,0 Q80,100 50,200 Z", "M50,200 Q50,100 80,10 Q20,100 50,200 Z", "M50,200 Q20,100 50,0 Q80,100 50,200 Z"] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
         />
      </svg>
      <svg className="absolute bottom-10 left-[5%] w-16 h-28 text-green-600 z-40 drop-shadow-lg" viewBox="0 0 100 200" fill="currentColor">
         <motion.path 
            d="M50,200 Q20,100 50,0 Q80,100 50,200 Z"
            animate={{ d: ["M50,200 Q20,100 50,0 Q80,100 50,200 Z", "M50,200 Q0,100 20,20 Q80,100 50,200 Z", "M50,200 Q20,100 50,0 Q80,100 50,200 Z"] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
         />
      </svg>
    </section>
  );
}
