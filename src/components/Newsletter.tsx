import { motion } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../i18n/translations';
import { Send } from 'lucide-react';

export default function Newsletter() {
  const { language } = useLanguage();
  const t = translations[language].newsletter;

  if (!t) return null;

  return (
    <section className="py-24 bg-transparent transition-colors duration-300">
      <div className="container mx-auto px-6 lg:px-12 max-w-4xl text-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass p-12 md:p-16 rounded-[64px] shadow-sm relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-montessori-red via-montessori-green to-montessori-yellow"></div>
          
          <h2 className="font-serif text-4xl md:text-[56px] font-bold text-brand-text mb-4 tracking-tight">{t.title}</h2>
          <p className="text-xl text-brand-text/60 mb-12 max-w-2xl mx-auto italic">
            {t.subtitle}
          </p>
          
          <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder={t.placeholder}
              className="flex-1 bg-white/40 border-2 border-border/50 rounded-full px-8 py-5 text-brand-text placeholder:text-brand-text/40 focus:outline-none focus:border-montessori-red transition-all"
              required
            />
            <button 
              type="submit"
              className="bg-montessori-blue text-montessori-cream rounded-full px-12 py-5 font-bold hover:bg-opacity-90 transition-all flex items-center justify-center gap-3 whitespace-nowrap shadow-lg shadow-montessori-blue/20"
            >
              {t.cta}
              <Send className="w-5 h-5" />
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
