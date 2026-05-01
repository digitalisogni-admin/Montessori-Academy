import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Ghost } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../i18n/translations';

export default function NotFound() {
  const { language } = useLanguage();
  const t = translations[language].subjectPage; // Reuse backHome string

  return (
    <div className="min-h-screen bg-brand-bg flex items-center justify-center p-6 relative overflow-hidden">
      {/* Decorative background Elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-pastel-blue rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-pastel-orange rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 text-center max-w-lg"
      >
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          className="inline-flex justify-center items-center w-32 h-32 rounded-[40px] bg-surface border border-border shadow-2xl mb-8 text-brand-text"
        >
          <Ghost className="w-16 h-16 opacity-50" />
        </motion.div>
        
        <h1 className="font-sans text-[64px] md:text-[80px] font-black text-brand-text leading-none mb-4 tracking-tighter">
          404
        </h1>
        <h2 className="text-2xl font-bold text-brand-text/80 mb-6">
          Page non trouvée / Page not found
        </h2>
        <p className="text-brand-text/60 mb-10">
          Cette page semble avoir disparu dans un trou noir. / This page seems to have disappeared into a black hole.
        </p>
        
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 bg-brand-text text-brand-bg px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform"
        >
          <ArrowLeft className="w-5 h-5" />
          {t.backHome}
        </Link>
      </motion.div>
    </div>
  );
}
