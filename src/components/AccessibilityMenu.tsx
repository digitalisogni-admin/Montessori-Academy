import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Accessibility, Type, Contrast, ZoomIn, ZoomOut, EyeOff, RotateCcw } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../i18n/translations';

export default function AccessibilityMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const { language } = useLanguage();
  const [fontSize, setFontSize] = useState(16);
  const [highContrast, setHighContrast] = useState(false);
  const [hideImages, setHideImages] = useState(false);

  useEffect(() => {
    document.documentElement.style.fontSize = `${fontSize}px`;
  }, [fontSize]);

  useEffect(() => {
    if (highContrast) {
      document.body.classList.add('high-contrast');
    } else {
      document.body.classList.remove('high-contrast');
    }
  }, [highContrast]);

  useEffect(() => {
    if (hideImages) {
      document.body.classList.add('hide-images');
    } else {
      document.body.classList.remove('hide-images');
    }
  }, [hideImages]);

  // If translation for accessibility doesn't exist, provide a fallback.
  const t = (translations[language] as any).accessibility || {
    title: "Accessibilité",
    increaseText: "Agrandir le texte",
    decreaseText: "Réduire le texte",
    highContrast: "Contraste élevé",
    hideImages: "Masquer les images",
    reset: "Réinitialiser"
  };

  const handleReset = () => {
    setFontSize(16);
    setHighContrast(false);
    setHideImages(false);
  };

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed top-1/2 left-0 -translate-y-1/2 bg-brand-text text-brand-bg p-3 rounded-r-xl shadow-2xl z-50 hover:bg-opacity-90 transition-all border-y border-r border-brand-bg/20"
        aria-label="Options d'accessibilité"
      >
        <Accessibility className="w-6 h-6" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            className="fixed top-1/2 left-0 -translate-y-1/2 w-72 bg-surface border border-border shadow-2xl rounded-r-2xl overflow-hidden z-50 flex flex-col pointer-events-auto"
          >
            <div className="bg-brand-text text-brand-bg p-4 flex justify-between items-center shadow-md">
              <h4 className="font-bold flex items-center gap-2">
                <Accessibility className="w-5 h-5" />
                {t.title}
              </h4>
              <button onClick={() => setIsOpen(false)} className="hover:bg-brand-bg/20 p-1.5 rounded-full transition-colors">
                <span className="sr-only">Fermer</span>
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="p-4 flex flex-col gap-3">
              <div className="flex gap-2">
                <button 
                  onClick={() => setFontSize(f => Math.max(12, f - 2))}
                  className="flex-1 bg-surface-hover border border-border rounded-xl p-3 flex flex-col items-center justify-center gap-1 hover:bg-border/50 transition-colors"
                >
                  <ZoomOut className="w-5 h-5" />
                  <span className="text-xs font-semibold">{t.decreaseText}</span>
                </button>
                <button 
                  onClick={() => setFontSize(f => Math.min(24, f + 2))}
                  className="flex-1 bg-surface-hover border border-border rounded-xl p-3 flex flex-col items-center justify-center gap-1 hover:bg-border/50 transition-colors"
                >
                  <ZoomIn className="w-5 h-5" />
                  <span className="text-xs font-semibold">{t.increaseText}</span>
                </button>
              </div>

              <button 
                onClick={() => setHighContrast(!highContrast)}
                className={`border rounded-xl p-3 flex items-center gap-3 transition-colors ${highContrast ? 'bg-brand-text text-brand-bg border-brand-text' : 'bg-surface-hover border-border hover:bg-border/50'}`}
              >
                <Contrast className="w-5 h-5" />
                <span className="text-sm font-semibold">{t.highContrast}</span>
              </button>

              <button 
                onClick={() => setHideImages(!hideImages)}
                className={`border rounded-xl p-3 flex items-center gap-3 transition-colors ${hideImages ? 'bg-brand-text text-brand-bg border-brand-text' : 'bg-surface-hover border-border hover:bg-border/50'}`}
              >
                <EyeOff className="w-5 h-5" />
                <span className="text-sm font-semibold">{t.hideImages}</span>
              </button>
              
              <button 
                onClick={handleReset}
                className="mt-2 text-brand-text/60 hover:text-brand-text text-sm font-semibold flex items-center justify-center gap-2 py-2"
              >
                <RotateCcw className="w-4 h-4" />
                {t.reset}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
