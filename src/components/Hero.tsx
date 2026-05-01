import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight, BookOpen } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../i18n/translations';
import { Link } from 'react-router-dom';
import { useRef } from 'react';

export default function Hero() {
  const { language } = useLanguage();
  const t = translations[language].hero;
  
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      <motion.div 
        style={{ y, opacity }}
        className="absolute inset-0 z-0"
      >
        <img 
          src="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=3840&auto=format&fit=crop" 
          alt="Teacher background" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-brand-bg/90" />
      </motion.div>

      <div className="container relative z-10 mx-auto px-6 lg:px-12 flex flex-col items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-[900px] p-12"
        >
          <h1 className="font-serif text-[40px] md:text-[64px] text-white font-bold leading-[1.1] tracking-tight">
            {t.titlePart1}
            <span className="text-white/60 block">{t.titlePart2}</span>
          </h1>
          <p className="mt-8 text-[20px] md:text-[24px] text-white/50 italic max-w-2xl mx-auto leading-relaxed">
            {t.welcome} <span className="text-white border-b border-white/30">{t.teacher}</span>{t.description}
          </p>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <span className="text-xs tracking-widest uppercase font-medium">{t.discover}</span>
        <motion.div 
          className="w-[1px] h-12 bg-gradient-to-b from-white/50 to-transparent"
          animate={{ scaleY: [1, 1.5, 1], originY: 0 }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}
