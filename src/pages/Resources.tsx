import { motion } from 'motion/react';
import SubjectGrid from '../components/SubjectGrid';
import PodcastsPreview from '../components/PodcastsPreview';
import VirtualLabPreview from '../components/VirtualLabPreview';
import DailyChallenge from '../components/DailyChallenge';
import { Telescope } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Resources() {
  const { language } = useLanguage();
  
  const translations = {
    fr: {
      title1: "Explorer.",
      title2: "Expérimenter.",
      title3: "Grandir.",
      desc: "Découvrez tous nos outils interactifs, laboratoires virtuels, podcasts et leçons pour apprendre autrement et à votre rythme."
    },
    en: {
      title1: "Explore.",
      title2: "Experiment.",
      title3: "Grow.",
      desc: "Discover all our interactive tools, virtual laboratories, podcasts and lessons to learn differently and at your own pace."
    },
    it: {
      title1: "Esplora.",
      title2: "Sperimenta.",
      title3: "Cresci.",
      desc: "Scopri tutti i nostri strumenti interattivi, laboratori virtuali, podcast e lezioni per imparare diversamente e al tuo ritmo."
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
            <div className="w-20 h-20 bg-montessori-blue/10 rounded-full flex items-center justify-center mx-auto mb-8 text-montessori-blue">
              <Telescope className="w-10 h-10" />
            </div>
            <h1 className="font-serif text-[48px] md:text-[72px] font-bold text-brand-text mb-8 leading-tight tracking-tight">
              {t.title1} <span className="text-montessori-blue">{t.title2}</span> {t.title3}
            </h1>
            <p className="text-[20px] md:text-[24px] text-brand-text/70 leading-relaxed italic mb-12">
              {t.desc}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Daily Challenge */}
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl mb-24 relative z-20">
        <DailyChallenge />
      </div>

      {/* Main grids */}
      <SubjectGrid />
      <VirtualLabPreview />
      <PodcastsPreview />
      
      {/* Aesthetic shapes */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-montessori-red/5 rounded-full blur-[100px] pointer-events-none -z-10" />
      <div className="absolute top-2/3 left-0 w-[600px] h-[600px] bg-montessori-blue/5 rounded-full blur-[120px] pointer-events-none -z-10" />
    </motion.main>
  );
}
