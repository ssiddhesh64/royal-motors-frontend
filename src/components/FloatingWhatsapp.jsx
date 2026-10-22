import { FaWhatsapp } from 'react-icons/fa';
import { whatsappUrl } from '../constants/contact';

function FloatingWhatsApp() {
  return (
    <div>
      <a
        href={whatsappUrl()}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-green-700 text-white shadow-lg transition duration-300 hover:scale-105 hover:bg-green-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-700 focus-visible:ring-offset-2 motion-reduce:animate-none"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp />
      </a>
    </div>
  );
}

export default FloatingWhatsApp;
