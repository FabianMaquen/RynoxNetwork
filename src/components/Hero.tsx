import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="inicio" className="pt-24 pb-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6"
        >
          Automatización Inteligente para tu Negocio
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto"
        >
          Potencia tu empresa con soluciones de automatización inteligente y chatbots impulsados por IA
        </motion.p>

        <div className="aspect-video max-w-4xl mx-auto rounded-xl overflow-hidden shadow-2xl">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/cCmCFImCsSQ"
            title="Rynex Network Overview"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
}