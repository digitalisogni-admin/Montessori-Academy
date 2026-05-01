import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Shapes, FlaskConical, PenTool, Globe, ArrowLeft, BookOpen, FileText, Video, CheckCircle, Lock, PlayCircle, Filter } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../i18n/translations';
import QuizPreview from '../components/QuizPreview';
import Flashcards from '../components/Flashcards';
import { useState } from 'react';
import { useSEO } from '../hooks/useSEO';

export default function SubjectPage() {
  const { id } = useParams<{ id: string }>();
  const { language } = useLanguage();
  const t = translations[language].subjectPage;
  const subjectsData = translations[language].subjects.items;
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  
  const getSubjectDetails = (subjectId: string) => {
    const base = (subjectsData as any)[subjectId];
    if (!base) return null;
    
    let icon, colorClass;
    if (subjectId === 'vita-pratica') {
      icon = <Shapes className="w-12 h-12" />;
      colorClass = "bg-montessori-red/20";
    } else if (subjectId === 'sensoriale') {
      icon = <FlaskConical className="w-12 h-12" />;
      colorClass = "bg-montessori-green/20";
    } else if (subjectId === 'linguaggio') {
      icon = <PenTool className="w-12 h-12" />;
      colorClass = "bg-montessori-yellow/20";
    } else if (subjectId === 'matematica-cultura') {
      icon = <Globe className="w-12 h-12" />;
      colorClass = "bg-montessori-blue/20";
    }

    const modules = (t.modules as any)[subjectId] || [];
    
    // Add icons to modules based on their type
    const enrichedModules = modules.map((m: any) => {
      let mIcon = <BookOpen className="w-5 h-5"/>;
      if (m.type.includes("Exercices") || m.type.includes("Atelier") || m.type.includes("Laboratoire") || m.type.includes("Projet")) mIcon = <FileText className="w-5 h-5"/>;
      if (m.type.includes("Vidéo") || m.type.includes("Video")) mIcon = <Video className="w-5 h-5"/>;
      return { ...m, icon: mIcon };
    });

    return { ...base, icon, colorClass, modules: enrichedModules };
  };

  const subject = id ? getSubjectDetails(id) : null;

  useSEO({
    title: {
      fr: subject ? subject.title : 'Matière non trouvée',
      en: subject ? subject.title : 'Subject not found',
      it: subject ? subject.title : 'Materia non trovata'
    },
    description: {
      fr: subject ? subject.description : 'Découvrez nos ressources Montessori.',
      en: subject ? subject.description : 'Discover our Montessori resources.',
      it: subject ? subject.description : 'Scopri le nostre risorse Montessori.'
    }
  });

  if (!subject) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center bg-brand-bg">
        <h2 className="text-2xl font-bold mb-4">{t.notFound}</h2>
        <Link to="/" className="text-pastel-blue-text hover:underline flex items-center gap-2">
          <ArrowLeft className="w-4 h-4" /> {t.backHome}
        </Link>
      </div>
    );
  }

  const totalModules = subject.modules.length;
  const completedModules = subject.modules.filter((m: any) => m.status === 'completed').length;
  const progressPercentage = Math.round((completedModules / totalModules) * 100) || 0;

  return (
    <div className="pt-32 pb-24 min-h-screen bg-transparent">
      <div className="container mx-auto px-8 lg:px-16 max-w-5xl">
        <Link to="/ressources" className="inline-flex items-center gap-3 text-montessori-blue hover:text-montessori-red transition-colors mb-12 font-bold uppercase tracking-widest text-sm">
          <ArrowLeft className="w-5 h-5" />
          {t.backSubjects}
        </Link>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className={`rounded-[64px] p-12 md:p-16 mb-16 relative overflow-hidden glass ${subject.colorClass}`}
        >
          <div className="relative z-10 flex flex-col md:flex-row gap-12 items-start md:items-center justify-between">
            <div className="max-w-2xl">
              <div className="w-24 h-24 rounded-[32px] bg-white/40 backdrop-blur-xl flex items-center justify-center mb-10 text-brand-text shadow-inner">
                {subject.icon}
              </div>
              <h1 className="font-serif text-[56px] md:text-[72px] font-bold text-brand-text mb-8 tracking-tight leading-none">
                {subject.title}
              </h1>
              <p className="text-[20px] md:text-[24px] text-brand-text/70 leading-relaxed italic">
                {subject.description}
              </p>
            </div>
            
            {/* Progress Circular Badge */}
            <div className="glass rounded-[40px] p-8 shadow-xl border-white/40 flex flex-col items-center justify-center min-w-[220px]">
              <div className="text-xs font-bold text-montessori-red uppercase tracking-widest mb-6">{t.progress}</div>
              <div className="relative w-28 h-28 flex items-center justify-center">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="42" className="stroke-white/30 fill-transparent" strokeWidth="8" />
                  <motion.circle 
                    cx="50" cy="50" r="42" 
                    className="stroke-montessori-blue fill-transparent" 
                    strokeWidth="8"
                    strokeLinecap="round"
                    initial={{ strokeDasharray: "0 264" }}
                    animate={{ strokeDasharray: `${(progressPercentage / 100) * 264} 264` }}
                    transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center text-2xl font-bold text-brand-text">
                  {progressPercentage}%
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-border pb-6 gap-6">
            <div>
              <h2 className="text-[28px] font-bold text-brand-text mb-2">{t.program}</h2>
              <span className="text-brand-text/60 font-medium">{subject.modules.length} {t.modulesCount}</span>
            </div>
            
            {/* Filters */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-sm font-bold text-brand-text/40 mr-2 flex items-center gap-1"><Filter className="w-4 h-4"/> Filters:</span>
              <button 
                onClick={() => setActiveFilter(null)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                  activeFilter === null ? 'bg-brand-text text-brand-bg' : 'bg-surface border border-border text-brand-text hover:bg-surface-hover'
                }`}
              >
                All
              </button>
              {Array.from(new Set(subject.modules.map((m: any) => m.type))).map((type: any, idx) => (
                <button 
                  key={idx}
                  onClick={() => setActiveFilter(type)}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                    activeFilter === type ? 'bg-brand-text text-brand-bg' : 'bg-surface border border-border text-brand-text hover:bg-surface-hover'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          <div className="grid gap-6">
            <AnimatePresence>
              {subject.modules
                .filter((module: any) => activeFilter === null || module.type === activeFilter)
                .map((module: any, index: number) => {
                const isLocked = module.status === 'locked';
                const isCompleted = module.status === 'completed';
                
                return (
                  <motion.div 
                    key={module.title}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    layout
                    className={`group flex flex-col sm:flex-row items-start sm:items-center justify-between p-8 rounded-[32px] glass glass-hover transition-all ${isLocked ? 'opacity-50 grayscale' : 'shadow-sm hover:shadow-lg hover:border-montessori-blue/30 cursor-pointer'}`}
                  >
                  <div className="flex items-center gap-6 mb-4 sm:mb-0">
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center bg-white/40 shadow-inner ${isLocked ? 'text-brand-text/40' : 'text-montessori-blue'}`}>
                      {isLocked ? <Lock className="w-7 h-7" /> : module.icon}
                    </div>
                    <div>
                      <h3 className="font-serif text-[22px] font-bold text-brand-text mb-1 transition-colors flex items-center gap-3">
                        {module.title}
                        {isCompleted && <CheckCircle className="w-6 h-6 text-montessori-green" />}
                      </h3>
                      <p className="text-montessori-red text-[14px] font-bold uppercase tracking-widest">{module.type}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <span className={`px-5 py-2.5 rounded-full text-[14px] font-bold whitespace-nowrap bg-white/30 text-brand-text/70`}>
                      {module.duration}
                    </span>
                    {!isLocked && (
                      <div className="w-12 h-12 rounded-2xl bg-white/40 flex items-center justify-center text-montessori-blue shadow-sm border border-white/50 group-hover:bg-montessori-blue group-hover:text-montessori-cream transition-all shrink-0">
                        {isCompleted ? <ArrowLeft className="w-6 h-6 rotate-180" /> : <PlayCircle className="w-6 h-6" />}
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
            </AnimatePresence>
          </div>
        </div>

        <Flashcards />
        <QuizPreview />
      </div>
    </div>
  );
}
