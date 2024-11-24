import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const services = [
  {
    title: 'Evaluación y Personalización',
    description: 'Analizamos tus procesos y diseñamos un plan personalizado con herramientas de IA para maximizar tu eficiencia.',
    icon: '📊'
  },
  {
    title: 'Implementación de Soluciones',
    description: 'Automatizamos tareas repetitivas y configuramos herramientas como chatbots o planes personalizados.',
    icon: '⚙️'
  },
  {
    title: 'Optimización y Soporte',
    description: 'Probamos, optimizamos y aseguramos que tus soluciones funcionen al máximo rendimiento.',
    icon: '🔄'
  }
];

export default function Services() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="servicios" className="py-16 bg-gray-100 text-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.3 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-extrabold mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-xl mb-8">
            Potenciamos tu negocio con automatización inteligente
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.3, delay: index * 0.2 }}
              whileHover={{ scale: 1.05, boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)' }}
              className="bg-white text-gray-900 p-6 rounded-lg shadow-lg transform transition-transform duration-300"
            >
              <div className="text-5xl mb-4 text-center">{service.icon}</div>
              <h3 className="text-2xl font-bold mb-2 text-center">{service.title}</h3>
              <p className="text-lg text-center">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}