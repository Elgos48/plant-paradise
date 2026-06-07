import { motion } from 'framer-motion';
import { Anchor, Fish, Shell } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative bg-[#0A192F] pt-20 pb-10 overflow-hidden border-t-8 border-sand">
      {/* Moving seaweed */}
      <svg className="absolute bottom-0 left-0 w-24 h-32 text-[#2ECC71]" viewBox="0 0 100 200" fill="currentColor">
         <motion.path 
            d="M50,200 Q20,100 50,0 Q80,100 50,200 Z"
            animate={{ d: ["M50,200 Q20,100 50,0 Q80,100 50,200 Z", "M50,200 Q50,100 80,10 Q20,100 50,200 Z", "M50,200 Q20,100 50,0 Q80,100 50,200 Z"] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
         />
      </svg>
      <svg className="absolute bottom-0 right-10 w-16 h-24 text-[#27ae60]" viewBox="0 0 100 200" fill="currentColor">
         <motion.path 
            d="M50,200 Q20,100 50,0 Q80,100 50,200 Z"
            animate={{ d: ["M50,200 Q20,100 50,0 Q80,100 50,200 Z", "M50,200 Q0,100 20,20 Q80,100 50,200 Z", "M50,200 Q20,100 50,0 Q80,100 50,200 Z"] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
         />
      </svg>

      {/* Swimming fish */}
      <motion.div 
        className="absolute top-10"
        initial={{ x: -100 }}
        animate={{ x: '100vw' }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      >
        <Fish className="w-8 h-8 text-coral drop-shadow-lg" />
      </motion.div>
      <motion.div 
        className="absolute top-20"
        initial={{ x: '100vw', scaleX: -1 }}
        animate={{ x: -100, scaleX: -1 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear", delay: 5 }}
      >
        <Fish className="w-6 h-6 text-sand drop-shadow-lg" />
      </motion.div>

      <div className="max-w-6xl mx-auto px-6 relative z-10 grid grid-cols-1 md:grid-cols-3 gap-12 text-white">
        
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <Shell className="w-8 h-8 text-sand" />
            <h3 className="text-2xl font-bold text-shadow-bubbly">Plant Paradise</h3>
          </div>
          <p className="text-gray-400 font-medium">
            Bringing the beauty of the ocean floor to your living room. Learn, grow, and thrive with us.
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="text-xl font-bold mb-4 text-[#40E0D0]">Explore</h4>
          <ul className="space-y-2 font-medium">
            <li><a href="#" className="hover:text-sand transition-colors">Plant Types</a></li>
            <li><a href="#" className="hover:text-sand transition-colors">Media</a></li>
            <li><a href="#" className="hover:text-sand transition-colors">Care Guides</a></li>
          </ul>
        </div>

        {/* Treasure Box / CTA */}
        <div className="flex flex-col items-center md:items-start">
          <h4 className="text-xl font-bold mb-4 text-sand flex items-center gap-2">
            <Anchor className="w-5 h-5" /> Our Crew (Kel.1)
          </h4>
          <p className="text-gray-400 font-medium">
            Acelynn, Annika, Jordana, Karen, Phillipus, Eleazar, Metta, Reyna, Julian, Cheryl, Clara, Declan, Florence, Justin, Kenjiyory, Natalie, Rafaelle, Virenka.
          </p>
        </div>

      </div>

      <div className="mt-16 pt-8 border-t border-white/10 text-center text-gray-500 text-sm font-medium relative z-10">
        &copy; {new Date().getFullYear()} Plant Paradise Under The Sea. All rights reserved.
      </div>
    </footer>
  );
}
