import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../i18n/translations';
import { Sparkles, Trophy, Check, X, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function DailyChallenge() {
  const { language } = useLanguage();
  const t = translations[language].dailyChallenge;
  const isEn = language === 'en';
  const isIt = language === 'it';
  
  const questionLogic = isEn 
    ? "Solve: 12 × 3 + 4 = ?" 
    : isIt 
    ? "Risolvi: 12 × 3 + 4 = ?" 
    : "Résous : 12 × 3 + 4 = ?";
  
  const [answer, setAnswer] = useState('');
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [hasSolved, setHasSolved] = useState(false);

  if (!t) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (answer.trim() === '40') {
      setIsCorrect(true);
      setHasSolved(true);
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#FFE1A8', '#E2F1E7', '#E1E9FF']
      });
    } else {
      setIsCorrect(false);
    }
  };

  return (
    <section className="py-12 bg-transparent md:py-24 transition-colors duration-300">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative overflow-hidden group glass rounded-[48px] p-10 md:p-16 shadow-lg"
        >
          <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12 justify-between">
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-montessori-red/10 text-montessori-red text-sm font-bold tracking-widest uppercase mb-6">
                <Sparkles className="w-4 h-4" />
                {t.title}
              </div>
              <h3 className="font-serif text-3xl md:text-4xl font-bold text-brand-text mb-4 leading-tight">
                {t.question}
              </h3>
              <p className="text-2xl font-mono text-montessori-red font-bold mb-8">
                {questionLogic}
              </p>
            </div>
            
            <div className="flex-1 w-full max-w-lg">
              <AnimatePresence mode="wait">
                {!hasSolved ? (
                  <motion.form 
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    onSubmit={handleSubmit}
                    className="w-full flex w-full max-w-md items-center gap-2"
                  >
                    <div className="relative flex-1">
                      <input 
                        type="text" 
                        value={answer}
                        onChange={(e) => {
                          setAnswer(e.target.value);
                          setIsCorrect(null);
                        }}
                        placeholder="Ex: 40"
                        className={`w-full bg-brand-bg/50 border ${isCorrect === false ? 'border-red-500 text-red-500 focus:border-red-500' : 'border-border focus:border-brand-text'} text-brand-text rounded-2xl px-6 py-4 focus:outline-none transition-colors text-lg font-bold`}
                      />
                      {isCorrect === false && (
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 text-red-500">
                          <X className="w-5 h-5" />
                        </div>
                      )}
                    </div>
                    <button 
                      type="submit"
                      disabled={!answer.trim()}
                      className="bg-brand-text text-brand-bg hover:opacity-80 disabled:opacity-50 transition-all rounded-2xl px-6 py-4 text-lg font-bold shadow-md flex items-center justify-center shrink-0"
                    >
                      <ArrowRight className="w-6 h-6" />
                    </button>
                  </motion.form>
                ) : (
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="w-full max-w-md bg-pastel-green-text/10 border border-pastel-green-text/20 rounded-2xl p-6 flex flex-col justify-center items-center text-center shadow-sm"
                  >
                    <div className="w-12 h-12 bg-pastel-green-text text-white rounded-full flex items-center justify-center mb-3">
                      <Check className="w-6 h-6" />
                    </div>
                    <h4 className="font-bold text-pastel-green-text text-xl mb-1 text-center">
                      {isEn ? "Correct!" : isIt ? "Corretto!" : "Correct !"}
                    </h4>
                    <p className="font-bold text-pastel-orange-text flex items-center gap-1">
                      <Trophy className="w-4 h-4" />
                      {t.points} {isEn ? "added" : isIt ? "aggiunti" : "ajoutés"}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
