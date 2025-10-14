import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const whatsappNumber = '5516988326932';
  const message = 'Olá! Gostaria de saber mais sobre os planos da Integral Dental.';
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(message)}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Falar no WhatsApp"
    >
      {/* Pulse Effect */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 0, 0.5]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute inset-0 bg-green-500 rounded-full"
      />

      {/* Button */}
      <div className="relative w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-full shadow-2xl flex items-center justify-center hover:shadow-green-500/50 transition-shadow">
        <MessageCircle className="w-8 h-8 text-white" fill="white" />
      </div>

      {/* Tooltip */}
      <motion.div
        initial={{ opacity: 0, x: 10 }}
        whileHover={{ opacity: 1, x: 0 }}
        className="absolute right-full mr-3 top-1/2 -translate-y-1/2 whitespace-nowrap bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-medium shadow-xl pointer-events-none"
      >
        Fale conosco no WhatsApp
        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 rotate-45 w-2 h-2 bg-gray-900" />
      </motion.div>
    </motion.a>
  );
};

export default WhatsAppButton;
