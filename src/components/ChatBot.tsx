import { useEffect } from 'react';

declare global {
  interface Window {
    createChat: any;
  }
}

export default function ChatBot() {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'module';
    script.src = 'https://cdn.jsdelivr.net/npm/@n8n/chat/dist/chat.bundle.es.js';
    script.onload = () => {
      window.createChat({
        webhookUrl: 'YOUR_PRODUCTION_WEBHOOK_URL',
        target: '#n8n-chat',
        mode: 'window',
        showWelcomeScreen: true,
        initialMessages: [
          '¡Hola! 👋',
          'Soy Nathan. ¿Cómo puedo ayudarte hoy?'
        ],
        i18n: {
          es: {
            title: '¡Hola! 👋',
            subtitle: 'Inicia una conversación. Estamos aquí para ayudarte 24/7.',
            inputPlaceholder: 'Escribe tu pregunta...'
          }
        },
        defaultLanguage: 'es'
      });
    };
    document.body.appendChild(script);

    const styleSheet = document.createElement('link');
    styleSheet.rel = 'stylesheet';
    styleSheet.href = 'https://cdn.jsdelivr.net/npm/@n8n/chat/dist/style.css';
    document.head.appendChild(styleSheet);

    return () => {
      document.body.removeChild(script);
      document.head.removeChild(styleSheet);
    };
  }, []);

  return <div id="n8n-chat"></div>;
}