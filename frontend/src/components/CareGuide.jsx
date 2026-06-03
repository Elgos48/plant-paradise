import { motion } from 'framer-motion';
import { CloudRain, SunMedium, FlaskConical, Scissors } from 'lucide-react';

const careItems = [
  {
    id: 'water',
    title: 'Watering',
    icon: CloudRain,
    color: 'text-blue-400',
    bg: 'bg-blue-400/20',
    tips: 'Water deeply when top soil is dry.',
    mistake: 'Overwatering causes root rot.',
    freq: '1-2 times a week',
    hoverAnim: { y: [0, -5, 0], transition: { repeat: Infinity, duration: 1 } }
  },
  {
    id: 'sun',
    title: 'Sunlight',
    icon: SunMedium,
    color: 'text-yellow-400',
    bg: 'bg-yellow-400/20',
    tips: 'Bright indirect light is best for most.',
    mistake: 'Direct sun can burn leaves.',
    freq: '6-8 hours daily',
    hoverAnim: { rotate: [0, 90, 180, 270, 360], transition: { repeat: Infinity, duration: 4, ease: "linear" } }
  },
  {
    id: 'feed',
    title: 'Fertilizer',
    icon: FlaskConical,
    color: 'text-purple-400',
    bg: 'bg-purple-400/20',
    tips: 'Use liquid fertilizer during growth season.',
    mistake: 'Fertilizing in winter.',
    freq: 'Once a month (Spring/Summer)',
    hoverAnim: { scale: [1, 1.1, 1], transition: { repeat: Infinity, duration: 1.5 } }
  },
  {
    id: 'prune',
    title: 'Pruning',
    icon: Scissors,
    color: 'text-green-400',
    bg: 'bg-green-400/20',
    tips: 'Remove dead or yellowing leaves.',
    mistake: 'Cutting more than 20% at once.',
    freq: 'As needed',
    hoverAnim: { rotate: [0, -20, 20, 0], transition: { repeat: Infinity, duration: 0.5 } }
  }
];

export default function CareGuide() {
  return (
    <section className="py-24 px-6 bg-[#0A192F] relative text-white z-10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-shadow-bubbly mb-4 text-[#40E0D0]">
            Plant Care Guide
          </h2>
          <p className="text-xl text-sand">Keep your underwater garden thriving with these tips.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {careItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover="hover"
              className="bg-white/5 border border-white/10 rounded-3xl p-8 flex flex-col md:flex-row items-center gap-6 backdrop-blur-md group"
            >
              <div className={`p-6 rounded-2xl ${item.bg} flex-shrink-0 relative overflow-hidden`}>
                <motion.div variants={{ hover: item.hoverAnim }}>
                  <item.icon className={`w-12 h-12 ${item.color}`} />
                </motion.div>
                {/* Bubble ripple effect on hover */}
                <motion.div 
                  className="absolute inset-0 bg-white/30 rounded-2xl"
                  initial={{ scale: 0, opacity: 0 }}
                  variants={{
                    hover: { scale: 2, opacity: 0, transition: { duration: 0.8, repeat: Infinity } }
                  }}
                />
              </div>

              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li><strong className="text-white">Tip:</strong> {item.tips}</li>
                  <li><strong className="text-red-400">Avoid:</strong> {item.mistake}</li>
                  <li><strong className="text-sand">Frequency:</strong> {item.freq}</li>
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
