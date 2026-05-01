import { useLanguage } from '../contexts/LanguageContext';
import ScientificCalculator from './ScientificCalculator';
import { Sparkles, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

export default function InteractiveToolPreview() {
  const { language } = useLanguage();
  
  const translations = {
    fr: {
      title: "Outils Intéractifs",
      subtitle: "Apprendre par la pratique",
      desc: "Découvrez notre suite d'outils interactifs conçus pour rendre l'apprentissage des sciences et des mathématiques concret et amusant.",
      cta: "Découvrir tous les outils",
      try: "Essayez notre calculatrice en ligne"
    },
    en: {
      title: "Interactive Tools",
      subtitle: "Learning by doing",
      desc: "Discover our suite of interactive tools designed to make learning science and math hands-on and fun.",
      cta: "Discover all tools",
      try: "Try our online calculator"
    },
    it: {
      title: "Strumenti Interattivi",
      subtitle: "Imparare facendo",
      desc: "Scopri la nostra suite di strumenti interattivi progettati per rendere l'apprendimento delle scienze e della matematica pratico e divertente.",
      cta: "Scopri tutti gli strumenti",
      try: "Prova la calcolatrice online"
    }
  };

  const t = translations[language as keyof typeof translations] || translations.fr;

  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "30%"]);

  return (
    <section ref={ref} className="py-24 relative overflow-hidden bg-black text-white text-brand-text">
      <motion.div 
        style={{ y }}
        className="absolute inset-0 z-0"
      >
        <img 
          src="https://images.unsplash.com/photo-1635316131802-f3fcd426d1d4?q=80&w=3840&auto=format&fit=crop" 
          alt="Science Background" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-bg via-brand-bg/80 to-brand-bg" />
      </motion.div>

      <div className="container relative z-10 mx-auto px-6 lg:px-12 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 space-y-8">
            <span className="text-sm font-bold tracking-widest text-montessori-blue uppercase block">{t.subtitle}</span>
            <h2 className="font-serif text-4xl md:text-[56px] font-bold tracking-tight leading-[1.1]">
              {t.title}
            </h2>
            <div className="w-16 h-1.5 bg-montessori-blue rounded-full" />
            
            <p className="text-[20px] opacity-80 italic leading-relaxed max-w-lg">
              {t.desc}
            </p>
            
            <div className="pt-4">
              <Link 
                to="/espace-eleve"
                className="inline-flex items-center gap-4 glass glass-hover transition-all rounded-full px-8 py-4 text-[16px] font-bold shadow-sm border border-white/20 group"
              >
                <Sparkles className="w-5 h-5 text-montessori-blue" />
                <span className="text-brand-text group-hover:text-montessori-blue">{t.cta}</span>
                <ArrowRight className="w-5 h-5 text-brand-text opacity-50 group-hover:translate-x-1 group-hover:text-montessori-blue transition-all" />
              </Link>
            </div>
          </div>

          <div className="flex-1 w-full max-w-md relative">
            <div className="absolute -top-12 -left-12 w-32 h-32 bg-montessori-blue/40 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-montessori-red/40 rounded-full blur-3xl pointer-events-none" />
            
            <div className="relative text-center">
              <p className="text-sm font-bold text-montessori-blue mb-6 tracking-widest uppercase">{t.try}</p>
              <div className="transform scale-95 md:scale-100 origin-center transition-transform hover:scale-[1.02] duration-500 shadow-2xl rounded-[32px]">
                <ScientificCalculator />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
