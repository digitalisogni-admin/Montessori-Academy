import { motion } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../i18n/translations';
import { Headphones, PlayCircle } from 'lucide-react';

export default function PodcastsPreview() {
  const { language } = useLanguage();
  const t = translations[language].podcasts;

  if (!t) return null;

  return (
    <section className="py-24 bg-transparent transition-colors duration-300">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        <div className="glass p-12 md:p-16 rounded-[64px] shadow-sm flex flex-col md:flex-row gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 space-y-8"
          >
            <div className="inline-flex items-center gap-3 px-4 py-1.5 bg-montessori-green/10 text-montessori-green rounded-full text-sm font-bold tracking-widest uppercase mb-4">
              <Headphones className="w-5 h-5" />
              {t.title}
            </div>
            <h2 className="font-serif text-4xl md:text-6xl font-bold text-brand-text leading-[1.1]">{t.subtitle}</h2>
            <p className="text-xl text-brand-text/60 max-w-md italic">
              {t.description}
            </p>
          </motion.div>

          <div className="flex-1 w-full space-y-4">
            {t.items.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group p-5 pr-8 glass glass-hover rounded-[32px] flex items-center justify-between transition-all cursor-pointer shadow-sm hover:shadow-lg"
              >
                <div className="flex items-center gap-6">
                  <button className="w-14 h-14 rounded-2xl bg-montessori-green text-montessori-cream flex items-center justify-center group-hover:rotate-12 transition-all shadow-md">
                    <PlayCircle className="w-8 h-8" />
                  </button>
                  <div>
                    <h4 className="font-serif font-bold text-xl text-brand-text">{item.title}</h4>
                    <p className="text-sm font-bold text-montessori-red uppercase tracking-widest">{item.duration}</p>
                  </div>
                </div>
                
                {/* Audio Waveform mock */}
                <div className="hidden sm:flex gap-1.5 items-center h-10 opacity-40 group-hover:opacity-100 transition-opacity">
                  {[4, 10, 6, 14, 8, 10, 5, 4, 12, 9].map((height, i) => (
                    <div key={i} className="w-1.5 bg-montessori-green rounded-full animate-pulse" style={{ height: `${height * 2.5}px`, animationDelay: `${i * 0.1}s` }} />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
