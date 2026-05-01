import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../i18n/translations';
import { useState } from 'react';
import { HelpCircle, Check, X } from 'lucide-react';

export default function QuizPreview() {
  const { language } = useLanguage();
  const t = translations[language].subjectPage;
  
  const [selected, setSelected] = useState<number | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const correctIndex = 2; // "Paris"

  const handleSelect = (index: number) => {
    if (isSubmitted) return;
    setSelected(index);
  };

  const handleSubmit = () => {
    if (selected !== null) {
      setIsSubmitted(true);
    }
  };

  const handleReset = () => {
    setSelected(null);
    setIsSubmitted(false);
  };

  return (
    <div className="glass p-10 rounded-[48px] mt-16 shadow-lg relative overflow-hidden backdrop-blur-2xl">
      <div className="flex items-center gap-4 mb-8">
        <div className="w-12 h-12 rounded-2xl bg-white/40 flex items-center justify-center text-montessori-blue shadow-inner">
          <HelpCircle className="w-6 h-6" />
        </div>
        <h3 className="font-serif text-3xl font-bold text-brand-text">{t.quizPreview}</h3>
      </div>
      
      <p className="text-2xl font-serif text-brand-text/80 mb-10 font-bold italic leading-relaxed">
        {t.quizQuestion}
      </p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
        {t.quizAnswers.map((answer, index) => {
          const isSelected = selected === index;
          const isCorrect = index === correctIndex;
          
          let btnClass = "border-white/30 bg-white/20 text-brand-text hover:bg-white/40";
          
          if (isSelected && !isSubmitted) {
            btnClass = "border-montessori-blue bg-montessori-blue/10 text-brand-text";
          } else if (isSubmitted) {
            if (isCorrect) {
              btnClass = "border-montessori-green bg-montessori-green/20 text-montessori-green font-bold";
            } else if (isSelected && !isCorrect) {
              btnClass = "border-montessori-red bg-montessori-red/20 text-montessori-red font-bold";
            } else {
              btnClass = "border-white/10 bg-white/5 text-brand-text/40 opacity-50";
            }
          }

          return (
            <motion.button
              key={index}
              whileTap={!isSubmitted ? { scale: 0.98 } : {}}
              onClick={() => handleSelect(index)}
              className={`p-6 rounded-[24px] border-2 text-left font-bold transition-all text-lg flex justify-between items-center shadow-sm ${btnClass}`}
            >
              <span>{answer}</span>
              {isSubmitted && isCorrect && <Check className="w-7 h-7 text-montessori-green shadow-sm" />}
              {isSubmitted && isSelected && !isCorrect && <X className="w-7 h-7 text-montessori-red shadow-sm" />}
            </motion.button>
          );
        })}
      </div>

      <AnimatePresence mode="wait">
        {!isSubmitted ? (
          <motion.button
            key="submit"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            onClick={handleSubmit}
            disabled={selected === null}
            className={`px-12 py-4 rounded-full font-bold text-lg transition-all ${selected === null ? 'bg-white/20 text-brand-text/40 cursor-not-allowed' : 'bg-montessori-blue text-montessori-cream hover:shadow-xl hover:-translate-y-1'}`}
          >
            {language === 'it' ? 'Conferma' : 'Valider'}
          </motion.button>
        ) : (
          <motion.div
            key="result"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex items-center gap-6"
          >
            <p className={`text-xl font-bold font-serif ${selected === correctIndex ? 'text-montessori-green' : 'text-montessori-red'}`}>
              {selected === correctIndex ? t.quizCorrect : t.quizIncorrect}
            </p>
            <button 
              onClick={handleReset} 
              className="text-sm font-bold uppercase tracking-widest text-montessori-blue hover:text-montessori-red transition-colors"
            >
              {language === 'it' ? 'Riprova' : 'Rejouer'}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
