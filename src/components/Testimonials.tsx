import { motion } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../i18n/translations';
import { Quote } from 'lucide-react';

export default function Testimonials() {
  const { language } = useLanguage();
  const t = translations[language].testimonials;

  return (
    <section className="py-24 bg-transparent">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-sm font-bold tracking-widest text-montessori-red uppercase mb-3 block">{t.subtitle}</span>
          <h2 className="font-serif text-4xl md:text-[56px] font-bold text-brand-text mb-6 tracking-tight">{t.title}</h2>
          <div className="w-24 h-1.5 bg-montessori-red mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              className="glass p-10 rounded-[48px] relative group glass-hover transition-all shadow-sm"
            >
              <Quote className="absolute top-10 right-10 w-12 h-12 text-montessori-blue/10 group-hover:text-montessori-blue/40 transition-colors" />
              <p className="text-brand-text/80 leading-relaxed mb-10 relative z-10 text-[18px] italic serif">
                "{item.content}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-montessori-blue text-montessori-cream flex items-center justify-center font-bold text-xl shadow-lg">
                  {item.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-brand-text text-lg">{item.name}</h4>
                  <p className="text-sm font-bold text-montessori-red uppercase tracking-wider">{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
