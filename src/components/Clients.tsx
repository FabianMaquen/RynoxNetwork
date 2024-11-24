import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Adrian',
    role: 'Personal Trainer',
    description: 'Gracias al asistente automatizado desarrollado por nuestro equipo, Adrian ahora puede enviar correos personalizados, administrar su base de datos, generar rutinas físicas automatizadas y crear recordatorios en Google Calendar. Todo esto ha optimizado su flujo de trabajo, permitiéndole dedicar más tiempo a sus clientes.',
    photo: '/IMG/IMG_6206.webp'
  },
  {
    name: 'Orlando',
    role: 'Empresario corporativo',
    description: 'Hemos entrenado una IA personalizada con información clave de la empresa de Orlando, capaz de responder preguntas frecuentes, explicar procesos y facilitar etapas de entrenamiento. Esto ha reducido significativamente el tiempo y costo de entrenamiento de nuevos empleados.',
    photo: '/IMG/IMG_0894.webp'
  }
];

export default function Clients() {
  return (
    <section id="testimonios" className="py-16 bg-gray-100 text-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold mb-4">Casos de Éxito</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.2 }}
              className="bg-white text-gray-900 p-6 rounded-lg shadow-lg transform transition-transform duration-300"
            >
              <div className="flex flex-col md:flex-row items-center md:items-start">
                <img src={testimonial.photo} alt={testimonial.name} className="w-24 h-24 rounded-lg mb-4 md:mb-0 md:mr-6 object-cover" />
                <div className="flex flex-col">
                  <h3 className="text-xl font-bold mb-2">{testimonial.name}</h3>
                  <p className="text-gray-600 mb-4">{testimonial.role}</p>
                  <p className="text-left mb-4">{testimonial.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
       
      </div>
    </section>
  );
}