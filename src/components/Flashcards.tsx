import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../i18n/translations';
import { RefreshCw, Zap } from 'lucide-react';

export default function Flashcards() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const { language } = useLanguage();
  const t = translations[language].flashcards;

  if (!t) return null;

  const currentCard = t.cards[currentIdx];

  const handleNext = () => {
    setIsFlipped(false);
    setTimeout(() => {
      setCurrentIdx((prev) => (prev + 1) % t.cards.length);
    }, 150);
  };

  return (
    <div className="glass rounded-[48px] p-12 mt-16 shadow-lg flex flex-col items-center">
      <div className="flex items-center gap-3 mb-10">
        <div className="p-2 bg-montessori-red/10 rounded-lg">
          <Zap className="w-6 h-6 text-montessori-red" />
        </div>
        <h3 className="font-serif font-bold text-2xl text-brand-text">{t.title}</h3>
      </div>

      <div 
        className="w-full max-w-lg h-72 relative cursor-pointer"
        style={{ perspective: "1000px" }}
        onClick={() => setIsFlipped(!isFlipped)}
      >
        <AnimatePresence initial={false} mode="wait">
          {!isFlipped ? (
            <motion.div
              key="front"
              initial={{ rotateY: 90, opacity: 0 }}
              animate={{ rotateY: 0, opacity: 1 }}
              exit={{ rotateY: -90, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="absolute inset-0 bg-white/40 border-2 border-white/50 backdrop-blur-xl rounded-[40px] flex items-center justify-center p-12 text-center shadow-xl"
            >
              <h4 className="font-serif text-3xl font-bold text-brand-text">{currentCard.front}</h4>
            </motion.div>
          ) : (
            <motion.div
              key="back"
              initial={{ rotateY: 90, opacity: 0 }}
              animate={{ rotateY: 0, opacity: 1 }}
              exit={{ rotateY: -90, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="absolute inset-0 bg-montessori-blue text-montessori-cream rounded-[40px] flex items-center justify-center p-12 text-center shadow-2xl border-2 border-white/20"
            >
              <h4 className="font-serif text-4xl font-black italic">{currentCard.back}</h4>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="flex items-center gap-6 mt-12">
        <button 
          onClick={() => setIsFlipped(!isFlipped)}
          className="px-8 py-3 rounded-full glass glass-hover font-bold text-montessori-blue transition-all flex items-center gap-2 border-white/50"
        >
          <RefreshCw className="w-5 h-5" />
          {t.flip}
        </button>
        <button 
          onClick={handleNext}
          className="px-10 py-4 rounded-full bg-montessori-red text-montessori-cream font-bold text-lg hover:opacity-90 shadow-lg shadow-montessori-red/20 transition-all"
        >
          {t.next}
        </button>
      </div>
      
      <div className="flex gap-3 mt-10">
        {t.cards.map((_, idx) => (
          <div 
            key={idx} 
            className={`h-2.5 rounded-full transition-all duration-300 ${idx === currentIdx ? 'w-8 bg-montessori-blue' : 'w-2.5 bg-brand-text/10'}`}
          />
        ))}
      </div>
    </div>
  );
}
