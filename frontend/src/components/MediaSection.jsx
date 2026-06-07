import { motion } from 'framer-motion';
import potSketch from '../assets/pot-sketch.png';

const bubbles = [
  { size: 28, left: '6%', duration: 7, delay: 0, sway: -10 },
  { size: 18, left: '18%', duration: 9, delay: 1, sway: 8 },
  { size: 36, left: '32%', duration: 8, delay: 2, sway: -14 },
  { size: 24, left: '47%', duration: 10, delay: 0.5, sway: 12 },
  { size: 30, left: '58%', duration: 7.5, delay: 1.8, sway: -8 },
  { size: 20, left: '72%', duration: 8.5, delay: 2.8, sway: 10 },
  { size: 26, left: '82%', duration: 9.5, delay: 0.2, sway: -12 },
  { size: 16, left: '90%', duration: 6.5, delay: 1.5, sway: 6 },
  { size: 22, left: '12%', duration: 8, delay: 3.2, sway: 7 },
  { size: 32, left: '66%', duration: 11, delay: 2.1, sway: -15 },
];

export default function MediaSection() {
  return (
    <section className="py-24 px-4 sm:px-6 bg-[#0A192F] relative flex items-center justify-center overflow-hidden">
      {/* Background Bubbles */}
      {bubbles.map((bubble, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full border border-white/20 bg-white/5 backdrop-blur-sm pointer-events-none"
          style={{
            width: bubble.size,
            height: bubble.size,
            left: bubble.left,
            bottom: -50,
          }}
          animate={{
            y: [0, -900],
            x: [0, bubble.sway, 0],
          }}
          transition={{
            duration: bubble.duration,
            repeat: Infinity,
            ease: 'linear',
            delay: bubble.delay,
          }}
        />
      ))}

      <div className="max-w-6xl w-full mx-auto relative z-10 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#FFD166] text-shadow-bubbly mb-4" style={{ fontFamily: 'var(--font-spongebob)' }}>
            Media Gallery
          </h2>
          <p className="text-xl text-white font-medium">Dive deeper into our underwater designs!</p>
        </motion.div>

        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -8, scale: 1.02 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative p-6 rounded-[2.5rem] bg-white/8 border border-white/15 shadow-[0_18px_40px_rgba(15,23,42,0.35)] backdrop-blur-md overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#40E0D0]/10 via-transparent to-[#FFD166]/5" />
            <div className="relative z-10 flex flex-col gap-4 h-full">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-[#FFD166]">Sketch</p>
                  <h3 className="text-2xl font-bold text-white">Our Pot Sketches</h3>
                </div>
                <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs text-sand">Fresh look</span>
              </div>
              <div className="rounded-[2rem] overflow-hidden border border-white/20 bg-black/20 p-2 shadow-inner">
                <img
                  src={potSketch}
                  alt="Pot sketch preview"
                  className="w-full h-64 md:h-72 object-full rounded-[1.5rem] transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <p className="text-white/80 text-sm md:text-base leading-relaxed">Unique pot sketches for the plants with spongeBob themes.</p>
            </div>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -8, scale: 1.02 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="relative p-6 rounded-[2.5rem] bg-white/8 border border-white/15 shadow-[0_18px_40px_rgba(15,23,42,0.35)] backdrop-blur-md overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#00BFFF]/10 via-transparent to-[#40E0D0]/5" />
            <div className="relative z-10 flex flex-col gap-4 h-full">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-[#40E0D0]">Video</p>
                  <h3 className="text-2xl font-bold text-white">Watch Our Video Action</h3>
                </div>
                <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs text-sand">HD view</span>
              </div>
              <div className="rounded-[2rem] overflow-hidden border border-white/20 bg-black/40 aspect-video shadow-inner">
                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/69sTvFbTToM?si=sgLJxrTLYPsY1h6K" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              </div>
              <p className="text-white/80 text-sm md:text-base leading-relaxed">Watch our latest video showcasing the underwater world of Spongegarden!</p>
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  );
}
