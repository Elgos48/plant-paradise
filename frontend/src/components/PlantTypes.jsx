import { motion } from 'framer-motion';
import { Sprout } from 'lucide-react';

import lidahMertua from '../assets/lidah-mertua.jpeg';
import lidahBuaya from '../assets/lidah-buaya.jpg';
import sirihGading from '../assets/sirih-gading.jpg';

const plants = [
  { id: 1, 
    image: lidahMertua, 
    name: 'Lidah Mertua', 
    desc: 'Tanaman lidah mertua (Sansevieria) adalah pembersih udara alami yang sangat baik untuk rumah. Tanaman ini menyerap racun berbahaya (seperti formaldehida dan benzena) dari cat atau perabotan, menghasilkan oksigen di malam hari, menghilangkan bau tak sedap, serta memberikan efek relaksasi.', 
    url: 'https://id.wikipedia.org/wiki/Lidah_mertua',
    color: 'bg-[#FF6B6B]' },
  { id: 2,
     image: lidahBuaya, 
     name: 'Lidah Buaya', 
     desc: 'Tanaman Lidah buaya (Aloe vera) adalah tanaman herbal dengan daun berdaging tebal yang kaya akan air, vitamin, mineral, dan antioksidan. Tanaman serbaguna ini sangat populer untuk perawatan kulit, penyembuhan luka, dan pengobatan tradisional, serta dapat diolah menjadi produk makanan dan minuman yang menyegarkan.', 
     url: 'https://id.wikipedia.org/wiki/Lidah_buaya',
     color: 'bg-[#FFD166]' },
  { id: 3, 
    image: sirihGading, 
    name: 'Sirih Gading', 
    desc: 'Tanaman sirih gading (Epipremnum aureum) sangat populer karena kemampuannya menyerap racun dan polutan di udara (seperti formaldehida dan benzena) serta melepaskan oksigen. Tanaman ini juga berfungsi sebagai dekorasi estetis yang mudah dirawat sebagai tanaman hias gantung atau tanaman air di dalam ruangan.', 
    url: 'https://id.wikipedia.org/wiki/Sirih_gading',
    color: 'bg-[#40E0D0]' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.5, y: 50 },
  show: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", bounce: 0.4, duration: 0.8 } }
};

export default function PlantTypes() {
  return (
    <section id="plants" className="py-20 px-6 min-h-screen bg-gradient-to-b from-[#40E0D0] to-[#0A192F] relative">
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white text-shadow-bubbly mb-4">
            OUR PLANTS
          </h2>
          <p className="text-xl text-sand font-medium">Explore our collection of unique plants</p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {plants.map((plant) => (
            <motion.div
              key={plant.id}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05, 
                rotate: Math.random() > 0.5 ? 2 : -2,
                y: -10 
              }}
              className={`${plant.color} rounded-3xl p-6 shadow-xl border-4 border-white/20 backdrop-blur-md relative overflow-hidden group cursor-none`}
            >
              {/* Bubble decoration inside card */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500" />
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-white drop-shadow-md">{plant.name}</h3>
                  <div className="p-2 bg-white/20 rounded-full">
                    <Sprout className="w-6 h-6 text-white" />
                  </div>
                </div>

                <div className="mb-4">
                  <img src={plant.image} alt={plant.name} className="w-full h-80 object-cover rounded-2xl border-4 border-white/30 shadow-lg" />
                </div>
                
                <p className="text-white/90 mb-6 flex-grow font-medium text-lg leading-relaxed">
                  {plant.desc}
                </p>

                <a href={plant.url} target="_blank" rel="noopener noreferrer" className="inline-block w-full px-6 py-3 bg-white/20 text-white font-semibold rounded-full shadow-md hover:bg-white/30 transition-colors duration-300">
                  <span className="text-white px-20">Learn more</span>
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
