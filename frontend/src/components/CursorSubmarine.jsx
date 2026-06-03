import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FishSymbolIcon} from 'lucide-react';

export default function CursorSubmarine() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMobile] = useState(() => {
    if (typeof window === 'undefined') return false;
    return (
      window.matchMedia('(pointer: coarse)').matches ||
      ('ontouchstart' in window) ||
      navigator.maxTouchPoints > 0
    );
  });

  useEffect(() => {
    if (isMobile) return;

    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, [isMobile]);

  if (isMobile) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-[9999] flex items-center justify-center text-sand drop-shadow-md"
      animate={{
        x: mousePosition.x - 10,
        y: mousePosition.y - 10,
      }}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 28,
        mass: 0.5
      }}
    >
      <FishSymbolIcon className="w-8 h-8 rotate-220 fill-sand text-coral" />
    </motion.div>
  );
}
