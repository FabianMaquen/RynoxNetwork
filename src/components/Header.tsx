import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Header() {
  const [showBanner, setShowBanner] = useState(true);
  const [hideBanner, setHideBanner] = useState(false);

  const handleScheduleClick = () => {
    setHideBanner(true);
    setTimeout(() => {
      setShowBanner(false);
      const contactoElement = document.getElementById('contacto');
      if (contactoElement) {
        window.scrollTo({
          top: contactoElement.offsetTop,
          behavior: 'smooth'
        });
      }
    }, 500); // Duración de la transición en milisegundos
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100">
      {showBanner && (
        <div className={`bg-blue-600/50 backdrop-blur-md text-white text-center py-4 px-6 transition-opacity duration-500 ${hideBanner ? 'opacity-0' : 'opacity-100'}`}>
          <div className="flex justify-between items-center max-w-7xl mx-auto">
            <div>
              <p className="text-xl font-bold">¡Obtén una consultoría gratuita sobre automatización inteligente!</p>
              <p className="text-md">Haz crecer tu negocio con nuestras soluciones personalizadas. Agenda tu sesión ahora.</p>
            </div>
            <button
              onClick={() => setHideBanner(true)}
              className="text-white ml-4 text-2xl"
            >
              ✕
            </button>
          </div>
          <div className="mt-4">
            <button
              onClick={handleScheduleClick}
              className="bg-white text-blue-600 px-6 py-3 rounded-lg shadow-lg hover:bg-gray-100 transition duration-300"
            >
              Agendar Consultoría
            </button>
          </div>
        </div>
      )}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center"
          >
            <img src='/IMG/RynoxLogo-removebg-preview.webp' alt="Logo" className="h-12 w-auto" />
          </motion.div>
          
          <nav className="hidden md:flex space-x-8">
            {['Inicio', 'Servicios', 'Nosotros', 'Contacto'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-700 hover:text-primary transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}