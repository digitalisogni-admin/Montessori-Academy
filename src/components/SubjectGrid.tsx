import { motion } from 'motion/react';
import { Shapes, FlaskConical, PenTool, Globe, ArrowRight } from 'lucide-react';
import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../i18n/translations';

interface SubjectCardProps {
  id: string;
  title: string;
  description: string;
  concepts?: string[];
  icon: ReactNode;
  colorClass: string;
  delay: number;
}

function SubjectCard({ id, title, description, concepts, icon, colorClass, delay }: SubjectCardProps) {
  return (
    <Link to={`/enseignement/${id}`} className="block h-full cursor-pointer group focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-montessori-red rounded-[32px]">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay, ease: "easeOut" }}
        className={`relative p-10 rounded-[32px] h-full flex flex-col gap-6 overflow-hidden shadow-sm glass glass-hover transition-all duration-500 hover:shadow-xl ${colorClass}`}
      >
        <div className="flex items-center justify-between">
          <div className="w-16 h-16 rounded-3xl bg-white/40 flex items-center justify-center text-brand-text shadow-inner transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
            {icon}
          </div>
          <div className="w-10 h-10 rounded-full flex items-center justify-center bg-transparent border border-brand-text/10 text-brand-text/50 group-hover:bg-brand-text group-hover:text-brand-bg transition-all duration-300 transform group-hover:translate-x-1 group-hover:-translate-y-1">
            <ArrowRight className="w-5 h-5" />
          </div>
        </div>
        
        <div className="flex-1">
          <h3 className="font-serif text-[28px] font-bold mb-4 text-brand-text leading-tight group-hover:text-montessori-red transition-colors">{title}</h3>
          
          <div className="w-12 h-1 bg-brand-text/10 rounded-full mb-6 group-hover:w-24 transition-all duration-500 ease-out" />
          
          <p className="text-[16px] text-brand-text/70 leading-relaxed font-medium mb-8">
            {description}
          </p>
          
          {concepts && (
            <div className="flex flex-wrap gap-2 mt-auto">
              {concepts.map((concept, idx) => (
                <span key={idx} className="px-3 py-1.5 rounded-full text-xs font-bold tracking-wide uppercase bg-black/5 text-brand-text/60 group-hover:bg-brand-text/5 group-hover:text-brand-text/80 transition-colors">
                  {concept}
                </span>
              ))}
            </div>
          )}
        </div>
      </motion.div>
    </Link>
  );
}

export default function SubjectGrid() {
  const { language } = useLanguage();
  const t = translations[language].subjects;

  const subjects = [
    {
      id: "vita-pratica",
      ...t.items['vita-pratica'],
      icon: <Shapes className="w-7 h-7" />,
      colorClass: "hover:bg-montessori-red/20",
    },
    {
      id: "sensoriale",
      ...t.items['sensoriale'],
      icon: <FlaskConical className="w-7 h-7" />,
      colorClass: "hover:bg-montessori-green/20",
    },
    {
      id: "linguaggio",
      ...t.items['linguaggio'],
      icon: <PenTool className="w-7 h-7" />,
      colorClass: "hover:bg-montessori-yellow/20",
    },
    {
      id: "matematica-cultura",
      ...t.items['matematica-cultura'],
      icon: <Globe className="w-7 h-7" />,
      colorClass: "hover:bg-montessori-blue/20",
    }
  ];

  return (
    <section id="ressources" className="py-32 bg-transparent relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        <motion.div 
          className="flex flex-col md:flex-row gap-6 justify-between items-end mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-2xl">
            <span className="text-sm font-bold tracking-widest text-montessori-red uppercase mb-3 block">{t.subtitle}</span>
            <h2 className="font-serif text-4xl md:text-[56px] font-bold text-brand-text tracking-tight leading-[1.1]">{t.title}</h2>
          </div>
          <div className="hidden md:block w-24 h-1.5 bg-montessori-red rounded-full self-start mt-6" />
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {subjects.map((subject, index) => (
            <div key={index} className={index % 2 === 1 ? 'md:mt-16' : ''}>
              <SubjectCard
                {...subject}
                delay={index * 0.15}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
