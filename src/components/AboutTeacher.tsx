import { motion } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../i18n/translations';
import { Lightbulb, Target, Heart } from 'lucide-react';

export default function AboutTeacher() {
  const { language } = useLanguage();
  const t = translations[language].about;

  const icons = [<Lightbulb className="w-6 h-6" />, <Target className="w-6 h-6" />, <Heart className="w-6 h-6" />];
  const iconColors = ['text-montessori-yellow', 'text-montessori-blue', 'text-montessori-red'];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute top-0 -left-12 w-32 h-32 bg-montessori-yellow/10 rounded-full blur-[40px] pointer-events-none -z-10" />
            
            <span className="text-sm font-bold tracking-widest text-montessori-blue uppercase mb-4 block font-serif">{t.subtitle}</span>
            <h2 className="font-serif text-4xl md:text-[56px] font-bold text-brand-text mb-8 tracking-tight leading-[1.1]">
              {t.title}
            </h2>
            <div className="w-16 h-2 bg-gradient-to-r from-montessori-blue via-montessori-red to-montessori-yellow rounded-full mb-8 opacity-60" />
            <p className="text-[20px] text-brand-text/70 leading-relaxed italic mb-8">
              {t.content}
            </p>
          </motion.div>

          <div className="grid gap-6">
            {t.values.map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.1, duration: 0.6 }}
                className="flex items-start gap-6 p-8 rounded-[32px] glass hover:bg-white/40 border border-white/30 hover:border-white/60 transition-all shadow-sm group"
              >
                <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-white/50 flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform">
                  <div className={iconColors[i % iconColors.length]}>
                     {icons[i % icons.length]}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold font-serif text-brand-text mb-2">{value.title}</h3>
                  <p className="text-brand-text/70 leading-relaxed">{value.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
