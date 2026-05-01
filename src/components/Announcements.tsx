import { Bell } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../i18n/translations';
import { motion } from 'motion/react';

export default function Announcements() {
  const { language } = useLanguage();
  const t = translations[language].announcements;

  return (
    <div className="absolute top-[120px] left-1/2 -translate-x-1/2 z-40 w-full max-w-4xl px-4">
      <div className="glass rounded-full py-3 px-6 overflow-hidden relative shadow-xl border-white/30">
        <div className="flex items-center">
          <div className="flex items-center gap-2 font-bold whitespace-nowrap mr-8 bg-transparent z-10 text-montessori-blue">
            <Bell className="w-5 h-5 text-montessori-red animate-pulse" />
            <span className="text-sm tracking-widest uppercase">{t.title}</span>
          </div>
          
          <div className="flex flex-1 overflow-hidden relative">
            <motion.div 
              className="flex gap-12 whitespace-nowrap text-sm font-medium text-brand-text/80"
              animate={{ x: [0, -1000] }}
              transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
            >
              {t.items.map((item, i) => (
                <span key={i} className="flex items-center gap-4 italic uppercase tracking-wider">
                  <span className="w-2 h-2 rounded-full bg-montessori-red inline-block" />
                  {item}
                </span>
              ))}
              {/* Duplicate for infinite loop illusion */}
              {t.items.map((item, i) => (
                <span key={`dup-${i}`} className="flex items-center gap-4 italic uppercase tracking-wider">
                  <span className="w-2 h-2 rounded-full bg-montessori-red inline-block" />
                  {item}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
