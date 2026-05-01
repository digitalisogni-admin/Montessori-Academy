import { MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

export default function FloatingContactBtn() {
  return (
    <motion.button
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200, damping: 20 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 right-8 w-14 h-14 bg-brand-text text-brand-bg rounded-full flex items-center justify-center shadow-2xl z-40 hover:shadow-brand-text/20 transition-shadow"
      aria-label="Contact Teacher"
    >
      <MessageCircle className="w-6 h-6" />
      {/* Optional ping animation */}
      <span className="absolute flex h-full w-full rounded-full bg-brand-text opacity-20 animate-ping" />
    </motion.button>
  );
}
