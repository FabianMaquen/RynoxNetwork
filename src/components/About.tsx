import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="nosotros" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Sobre Rynox Network
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              En Rynox Network, nos dedicamos a hacer que la tecnología sea accesible y efectiva para todas las empresas. Nuestra misión es transformar procesos complejos en soluciones automatizadas simples y eficientes.
            </p>
            <p className="text-lg text-gray-600">
              Con años de experiencia en automatización y desarrollo de IA, ayudamos a las empresas a optimizar sus operaciones y alcanzar su máximo potencial.
            </p>
          </div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="relative h-[400px] rounded-xl overflow-hidden"
          >
            <img
              src="/IMG/LogoRynox.webp"
              alt="Rynex Network Team"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}