import { motion } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';
import { useSEO } from '../hooks/useSEO';

export default function Legal() {
  const { language } = useLanguage();
  
  useSEO({
    title: {
      fr: 'Mentions Légales',
      en: 'Legal Notice',
      it: 'Note Legali'
    },
    description: {
      fr: 'Informations légales et conditions d\'utilisation du site Accademia Montessori.',
      en: 'Legal information and terms of use of the Accademia Montessori website.',
      it: 'Informazioni legali e condizioni d\'uso del sito Accademia Montessori.'
    }
  });

  const translations = {
    fr: {
      title: "Mentions Légales",
      desc: "Ces informations légales sont fournies à titre indicatif pour ce prototype.",
      editor: "Éditeur du site",
      hosting: "Hébergement",
      intellectual: "Propriété intellectuelle",
      copyright: "L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés."
    },
    en: {
      title: "Legal Notice",
      desc: "This legal information is provided for indicative purposes for this prototype.",
      editor: "Site Editor",
      hosting: "Hosting",
      intellectual: "Intellectual Property",
      copyright: "The entire site is subject to international legislation on copyright and intellectual property. All reproduction rights are reserved."
    },
    it: {
      title: "Note Legali",
      desc: "Queste informazioni legali sono fornite a titolo indicativo per questo prototipo.",
      editor: "Editore del sito",
      hosting: "Hosting",
      intellectual: "Proprietà intellettuale",
      copyright: "L'intero sito è soggetto alla legislazione internazionale sul diritto d'autore e sulla proprietà intellettuale. Tutti i diritti di riproduzione sono riservati."
    }
  };

  const t = translations[language];

  return (
    <motion.main 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-24 min-h-screen bg-brand-bg relative overflow-hidden"
    >
      <div className="container mx-auto px-6 lg:px-12 max-w-4xl relative z-10">
        <h1 className="font-serif text-4xl md:text-[48px] font-bold text-brand-text mb-6 tracking-tight">{t.title}</h1>
        <div className="bg-surface border border-border p-8 rounded-[32px] shadow-sm prose prose-neutral max-w-none text-brand-text/80">
          <p className="text-lg mb-4">{t.desc}</p>
          <hr className="border-border my-6" />
          <h2 className="text-2xl font-bold text-brand-text mb-4">{t.editor}</h2>
          <p>Accademia Montessori<br/>123 Viale dell'Educazione, 75000 Roma<br/>contact@accademiamontessori.it</p>
          
          <h2 className="text-2xl font-bold text-brand-text mt-8 mb-4">{t.hosting}</h2>
          <p>Google Cloud Run<br/>Google LLC</p>
          
          <h2 className="text-2xl font-bold text-brand-text mt-8 mb-4">{t.intellectual}</h2>
          <p>{t.copyright}</p>
        </div>
      </div>
    </motion.main>
  );
}
