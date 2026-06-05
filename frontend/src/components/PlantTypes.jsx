import { motion } from 'framer-motion';
import { Sprout, Fish } from 'lucide-react';

import snakePlant from '../assets/snake-plant.jpg';
import lidahBuaya from '../assets/lidah-buaya.jpg';
import sirihGading from '../assets/sirih-gading.jpg';
import dolar from '../assets/tanaman-dolar.jpg';
import spongebob from '../assets/spongebob-backgrounds.jpg';
import patrick from '../assets/dotted-pattern-background.jpg';
import squiward from '../assets/ocean-bg.jpeg';
import cross from '../assets/cross-background.jpg';

const plants = [
  { id: 1, 
    image: snakePlant, 
    name: 'Snake Plant (Dracaena trifasciata)', 
    desc: 'Snake plant merupakan tanaman hias yang terkenal karena daya tahannya yang tinggi. Tanaman ini juga membantu meningkatkan kualitas udara dan cocok ditempatkan di dalam maupun luar ruangan.', 
    care: ['Dapat diletakkan di tempat terang maupun teduh.','Siram sekitar 1 kali seminggu atau saat tanah mulai kering.','Hindari penyiraman berlebihan.','Berikan pupuk secukupnya setiap beberapa bulan.'],
    url: 'https://www.plantsandflowersfoundationholland.org/en/indoor-plantguide/snake-plant/',
    bgimage: patrick,
    color: 'bg-[#FF6B6B]' },
  { id: 2,
     image: lidahBuaya, 
     name: 'Lidah Buaya (Aloe vera)', 
     desc: 'Lidah buaya merupakan tanaman sukulen yang memiliki daun tebal dan mengandung banyak air. Tanaman ini dikenal karena manfaatnya untuk kesehatan, kecantikan, dan pengobatan tradisional.', 
     care: ['Letakkan di tempat yang mendapat cahaya matahari cukup.','Siram 1-2 kali seminggu.','Gunakan media tanam yang gembur dan tidak mudah tergenang air.','Berikan pupuk organik secara berkala.'],
     url: 'https://id.wikipedia.org/wiki/Lidah_buaya',
     bgimage: spongebob,
     color: 'bg-[#FFD166]' },
  { id: 3, 
    image: sirihGading, 
    name: 'Sirih Gading (Epipremnum aureum)', 
    desc: 'Sirih gading merupakan tanaman merambat yang memiliki daun hijau bercorak kuning atau putih. Tanaman ini mudah tumbuh, mudah diperbanyak, dan sering digunakan sebagai tanaman hias indoor.', 
    care: ['Letakkan di tempat yang terang tetapi tidak terkena sinar matahari langsung.','Siram saat media tanam mulai kering.','Pangkas batang yang terlalu panjang agar tetap rapi.','Berikan pupuk cair atau kompos secara berkala.'],
    url: 'https://id.wikipedia.org/wiki/Sirih_gading',
    bgimage: squiward,
    color: 'bg-[#40E0D0]' },
  { id: 4, 
    image: dolar, 
    name: 'Tanaman Dolar (Zamioculcas zamiifolia)',
    desc: 'Dollar plant merupakan tanaman hias dengan daun hijau mengilap yang melambangkan keberuntungan dan kemakmuran. Tanaman ini sangat tahan terhadap kondisi minim cahaya dan perawatan yang sederhana.', 
    care: ['Letakkan di tempat yang teduh atau mendapat cahaya tidak langsung.','Siram 1–2 minggu sekali.','Pastikan media tanam memiliki drainase yang baik.','Bersihkan daun secara berkala agar tetap mengilap.'],
    url: 'https://jurnal.stkipmb.ac.id/11-manfaat-tanaman-dolar-penarik-rezeki-ampuh-e-jurnal/',
    bgimage: cross,
    color: 'bg-[#9B5DE5]' }
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
        className="absolute top-70"
        initial={{ x: '100vw', scaleX: -1 }}
        animate={{ x: -100, scaleX: -1 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear", delay: 5 }}
      >
        <Fish className="w-6 h-6 text-sand drop-shadow-lg" />
      </motion.div>
      <motion.div 
        className="absolute top-100"
        initial={{ x: -100 }}
        animate={{ x: '100vw' }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      >
        <Fish className="w-8 h-8 text-coral drop-shadow-lg" />
      </motion.div>
      <motion.div 
        className="absolute top-120"
        initial={{ x: '100vw', scaleX: -1 }}
        animate={{ x: -100, scaleX: -1 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear", delay: 5 }}
      >
        <Fish className="w-6 h-6 text-coral drop-shadow-lg" />
      </motion.div>
      <motion.div 
        className="absolute top-300"
        initial={{ x: -100 }}
        animate={{ x: '100vw' }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear"}}
      >
        <Fish className="w-6 h-6 text-sand drop-shadow-lg" />
      </motion.div>
      <motion.div 
        className="absolute top-470"
        initial={{ x: '100vw', scaleX: -1 }}
        animate={{ x: -100, scaleX: -1 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear", delay: 5 }}
      >
        <Fish className="w-6 h-6 text-sand drop-shadow-lg" />
      </motion.div>
      <motion.div 
        className="absolute top-630"
        initial={{ x: -100 }}
        animate={{ x: '100vw', scaleX: -1 }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear", delay: 5 }}
      >
        <Fish className="w-6 h-6 text-coral drop-shadow-lg" />
      </motion.div>


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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
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
              {/* Background overlay */}
              <div 
                className="absolute inset-0 bg-cover bg-center opacity-10"
                style={{ backgroundImage: `url(${plant.bgimage})` }}
              />
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
                <div className="bg-white/20 rounded-lg p-4 mb-6">
                  <h4 className="text-lg font-bold text-white mb-2">Perawatan:</h4>
                  <ul className="list-disc list-inside text-white/90">
                    {plant.care.map((step, index) => (
                      <li key={index} className="mb-1">
                        {step}
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href={plant.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center px-6 py-3 bg-white/20 text-white font-semibold rounded-full shadow-md hover:bg-white/30 transition-colors duration-300 text-center"
                >
                  Learn more
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
