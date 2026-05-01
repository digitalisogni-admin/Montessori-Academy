import { motion } from 'motion/react';
import { Award, CheckCircle, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Certifications() {
  const { language } = useLanguage();
  
  const translations = {
    fr: {
      title: "Certifications & Double Compétence",
      subtitle: "Un enseignement d'excellence",
      certs: [
        { title: "Diplôme d'Ingénieur", org: "INSA Lyon", icon: ShieldCheck },
        { title: "Éducateur Montessori AMI", org: "Association Montessori Internationale", icon: Award },
        { title: "Médiation Scientifique", org: "Universcience", icon: CheckCircle }
      ]
    },
    en: {
      title: "Certifications & Dual Expertise",
      subtitle: "Excellence in Teaching",
      certs: [
        { title: "Engineering Degree", org: "INSA Lyon", icon: ShieldCheck },
        { title: "AMI Montessori Educator", org: "Association Montessori Internationale", icon: Award },
        { title: "Scientific Mediation", org: "Universcience", icon: CheckCircle }
      ]
    },
    it: {
      title: "Certificazioni & Doppia Competenza",
      subtitle: "Insegnamento di Eccellenza",
      certs: [
        { title: "Laurea in Ingegneria", org: "INSA Lione", icon: ShieldCheck },
        { title: "Educatore Montessori AMI", org: "Association Montessori Internationale", icon: Award },
        { title: "Mediazione Scientifica", org: "Universcience", icon: CheckCircle }
      ]
    }
  };

  const t = translations[language as keyof typeof translations] || translations.fr;

  return (
    <section className="py-24 bg-brand-bg relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-sm font-bold tracking-widest text-montessori-blue uppercase mb-3 block">{t.subtitle}</span>
          <h2 className="font-serif text-4xl md:text-[56px] font-bold text-brand-text mb-6 tracking-tight">{t.title}</h2>
          <div className="w-24 h-1.5 bg-montessori-blue mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.certs.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="glass p-10 rounded-[40px] shadow-sm flex flex-col items-center text-center border-white/50"
            >
              <div className="w-20 h-20 rounded-3xl bg-white/40 flex items-center justify-center text-montessori-blue mb-6 shadow-inner">
                <cert.icon className="w-10 h-10" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-brand-text mb-2">{cert.title}</h3>
              <p className="text-brand-text/60 font-medium uppercase tracking-widest text-sm">{cert.org}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
