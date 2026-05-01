import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../i18n/translations';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

export default function FAQ() {
  const { language } = useLanguage();
  const t = translations[language].faq;
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  if (!t) return null;

  return (
    <section className="py-24 bg-transparent transition-colors duration-300">
      <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex justify-center items-center w-20 h-20 rounded-3xl glass text-montessori-blue mb-8">
            <HelpCircle className="w-10 h-10" />
          </div>
          <h2 className="font-serif text-4xl md:text-[56px] font-bold text-brand-text mb-6 tracking-tight">{t.title}</h2>
        </motion.div>
        
        <div className="space-y-6">
          {t.items.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass rounded-3xl overflow-hidden shadow-sm"
            >
              <button 
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left px-8 py-6 flex items-center justify-between focus:outline-none glass-hover"
              >
                <span className="font-bold text-brand-text text-xl pr-8">{item.q}</span>
                <span className="text-montessori-red shrink-0">
                  {openIndex === index ? <ChevronUp className="w-7 h-7" /> : <ChevronDown className="w-7 h-7" />}
                </span>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  >
                    <div className="px-8 pb-6 text-brand-text/70 leading-relaxed pt-2 text-lg italic">
                      {item.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
