import { useState } from 'react';
import { motion } from 'framer-motion';

const socialLinks = [
  {
    name: 'Facebook',
    href: 'https://facebook.com',
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg {...props} viewBox="0 0 24 24" fill="currentColor">
        <path d="M18 2h-3a6 6 0 00-6 6v3H6v4h3v8h4v-8h3l1-4h-4V8a2 2 0 012-2h3z" />
      </svg>
    ),
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com',
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg {...props} viewBox="0 0 24 24" fill="currentColor">
        <path d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0016 2a4.48 4.48 0 00-4.48 4.48c0 .35.04.7.1 1.03A12.94 12.94 0 013 4.1a4.48 4.48 0 001.39 5.97A4.48 4.48 0 012 9.7v.06A4.48 4.48 0 004.48 14a4.48 4.48 0 01-2 .08A4.48 4.48 0 006 17.54a9 9 0 01-5.56 1.92A9.32 9.32 0 010 19.5a12.94 12.94 0 007 2.05c8.4 0 13-6.96 13-13 0-.2 0-.39-.02-.58A9.35 9.35 0 0023 3z" />
      </svg>
    ),
  },
  {
    name: 'Instagram',
    href: 'https://instagram.com',
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg {...props} viewBox="0 0 24 24" fill="currentColor">
        <path
          fillRule="evenodd"
          d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const response = await fetch('https://script.google.com/macros/s/AKfycbzNQ18iaQi1huEHEpQZ4Q6pKmY-FvIZallPvU_DuCCeWoZ5ytV_sBTg4wD5K9-Lde30NQ/exec', {
      method: 'POST',
      body: JSON.stringify(formData)
    });

    if (response.ok) {
      setSubmitted(true);
    }

    setIsSubmitting(false);
  };

  return (
    <section id="contacto" className="py-16 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-white">Contacto</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <div className="mb-4">
              <h3 className="text-xl font-bold">Ubicación</h3>
              <p>Lima, Perú</p>
            </div>
            <div className="mb-4">
              <h3 className="text-xl font-bold">Teléfono</h3>
              <p>(+51) 953176460</p>
            </div>
            <div className="mb-4">
              <h3 className="text-xl font-bold">Email</h3>
              <p>rynoxnetwork@gmail.com</p>
            </div>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a key={link.name} href={link.href} className="text-gray-400 hover:text-white transition-colors">
                  <link.icon className="h-6 w-6" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
          <div>
            {!submitted ? (
              <form onSubmit={handleSubmit} className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <div className="mb-4">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300">Nombre Completo</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full p-2 border border-gray-600 rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm bg-gray-700 text-white"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full p-2 border border-gray-600 rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm bg-gray-700 text-white"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300">Número Telefónico</label>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full p-2 border border-gray-600 rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm bg-gray-700 text-white"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300">Mensaje</label>
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full p-2 border border-gray-600 rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm bg-gray-700 text-white"
                  ></textarea>
                </div>
                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full bg-blue-600 text-white px-4 py-2 rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm ${
                      isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-700 transition duration-300'
                    }`}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center">
                        <svg
                          className="animate-spin h-5 w-5 mr-3 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8v8H4z"
                          ></path>
                        </svg>
                        Enviando...
                      </div>
                    ) : (
                      'Enviar'
                    )}
                  </button>
                </div>
              </form>
            ) : (
              <div className="text-center text-lg text-gray-400 transition-opacity duration-500">
                Muchas Gracias! Te enviaremos una respuesta lo antes posible.
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}