import { motion } from 'motion/react';
import AboutTeacher from '../components/AboutTeacher';
import { Leaf } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Pedagogy() {
  const { language } = useLanguage();

  const translations = {
    fr: {
      titlePart1: "Une Approche",
      titlePart2: "Vivante",
      titlePart3: "de l'Apprentissage.",
      desc: "Une pédagogie bienveillante, active et centrée sur la réussite de chaque élève, inspirée de la méthode Montessori."
    },
    en: {
      titlePart1: "A",
      titlePart2: "Living",
      titlePart3: "Approach to Learning.",
      desc: "A caring, active pedagogy centered on each student's success, inspired by the Montessori method."
    },
    it: {
      titlePart1: "Un Approccio",
      titlePart2: "Vivo",
      titlePart3: "all'Apprendimento.",
      desc: "Una pedagogia attenta, attiva e centrata sul successo di ogni studente, ispirata al metodo Montessori."
    }
  };

  const t = translations[language];

  return (
    <motion.main 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-brand-bg relative overflow-hidden"
    >
      {/* Grand Hero Section */}
      <section className="pt-40 pb-20 relative z-10">
        <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="w-20 h-20 bg-montessori-green/10 rounded-full flex items-center justify-center mx-auto mb-8 text-montessori-green">
              <Leaf className="w-10 h-10" />
            </div>
            <h1 className="font-serif text-[48px] md:text-[72px] font-bold text-brand-text mb-8 leading-tight tracking-tight">
              {t.titlePart1} <span className="text-montessori-green">{t.titlePart2}</span> {t.titlePart3}
            </h1>
            <p className="text-[20px] md:text-[24px] text-brand-text/70 leading-relaxed italic mb-12">
              {t.desc}
            </p>
          </motion.div>
        </div>
      </section>

      <div className="relative z-20">
        <AboutTeacher />
      </div>

      {/* Aesthetic shapes */}
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-montessori-green/5 rounded-full blur-[100px] pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-montessori-yellow/5 rounded-full blur-[120px] pointer-events-none -z-10" />
    </motion.main>
  );
}
