import { motion, useScroll, useTransform } from 'motion/react';
import { Calendar as CalendarIcon, Clock, Users } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useRef } from 'react';

export default function TuitionCalendar() {
  const { language } = useLanguage();
  
  const translations = {
    fr: {
      title: "Calendrier des Cours",
      subtitle: "Planifier votre réussite",
      schedule: [
        { day: "Lundi - Mercredi", type: "Cours Particuliers", time: "16h00 - 20h00", audience: "Collège / Lycée" },
        { day: "Mardi - Jeudi", type: "Ateliers Scientifiques", time: "17h00 - 19h00", audience: "Primaire" },
        { day: "Samedi", type: "Stages Intensifs", time: "09h00 - 13h00", audience: "Préparation Examens" }
      ],
      book: "Réserver un créneau"
    },
    en: {
      title: "Tuition Calendar",
      subtitle: "Plan your success",
      schedule: [
        { day: "Mon - Wed", type: "Private Tutoring", time: "16:00 - 20:00", audience: "Middle/High School" },
        { day: "Tue - Thu", type: "Science Workshops", time: "17:00 - 19:00", audience: "Elementary" },
        { day: "Saturday", type: "Intensive Courses", time: "09:00 - 13:00", audience: "Exam Prep" }
      ],
      book: "Book a slot"
    },
    it: {
      title: "Calendario dei Corsi",
      subtitle: "Pianifica il tuo successo",
      schedule: [
        { day: "Lun - Mer", type: "Lezioni Private", time: "16:00 - 20:00", audience: "Medie / Superiori" },
        { day: "Mar - Gio", type: "Laboratori Scientifici", time: "17:00 - 19:00", audience: "Elementari" },
        { day: "Sabato", type: "Corsi Intensivi", time: "09:00 - 13:00", audience: "Prep. Esami" }
      ],
      book: "Prenota"
    }
  };

  const t = translations[language as keyof typeof translations] || translations.fr;

  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  return (
    <section ref={ref} className="py-24 relative overflow-hidden bg-black text-white">
      <motion.div 
        style={{ y }}
        className="absolute inset-0 z-0"
      >
        <img 
          src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=3840&auto=format&fit=crop" 
          alt="Classroom Background" 
          className="w-full h-full object-cover opacity-40 grayscale-[20%]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-bg/90 via-black/50 to-brand-bg/90" />
      </motion.div>

      <div className="container relative z-10 mx-auto px-6 lg:px-12 max-w-5xl">
        <div className="glass rounded-[64px] p-12 md:p-16 border-white/20 shadow-2xl relative overflow-hidden">
          {/* Decorative shapes */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-montessori-yellow/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
          
          <div className="flex flex-col md:flex-row gap-16 justify-between items-center relative z-10">
            <div className="max-w-sm">
              <span className="text-sm font-bold tracking-widest text-montessori-yellow uppercase mb-3 block">{t.subtitle}</span>
              <h2 className="font-serif text-4xl md:text-[48px] font-bold text-white mb-6 tracking-tight leading-[1.1]">{t.title}</h2>
              <div className="w-16 h-1.5 bg-montessori-yellow rounded-full mb-8" />
              <button className="flex items-center gap-4 glass glass-hover text-white transition-all rounded-full px-8 py-4 text-[16px] font-bold shadow-sm border border-white/30 group hover:border-montessori-yellow/50">
                <CalendarIcon className="w-5 h-5 text-montessori-yellow" />
                {t.book}
              </button>
            </div>

            <div className="flex-1 w-full space-y-4">
              {t.schedule.map((slot, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="bg-black/30 backdrop-blur-md p-6 rounded-[32px] border border-white/10 hover:border-montessori-yellow/50 transition-colors shadow-lg flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                >
                  <div className="flex-1">
                    <h4 className="font-bold text-lg text-white mb-1">{slot.type}</h4>
                    <p className="text-montessori-yellow font-bold text-sm tracking-widest uppercase">{slot.day}</p>
                  </div>
                  
                  <div className="flex gap-6 text-white/70">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-montessori-yellow/70" />
                      <span className="text-sm font-bold">{slot.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-montessori-blue/70" />
                      <span className="text-sm font-bold">{slot.audience}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
