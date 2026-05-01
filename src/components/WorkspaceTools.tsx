import { 
  LayoutGrid, PenTool, MonitorPlay, Award, Users, 
  GraduationCap, ListMusic, FlaskConical, MessageCircle, Mic, 
  Network, FileText, Smile, FolderKanban, History, 
  Accessibility, CloudOff, Coins, Calculator, HeartPulse, ChevronLeft, ChevronRight
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../i18n/translations';
import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import ScientificCalculator from './ScientificCalculator';
import ChatTutor from './ChatTutor';

export default function WorkspaceTools() {
  const { language } = useLanguage();
  const t = translations[language].tools;
  const [activeToolId, setActiveToolId] = useState<string | null>('calculator');
  const carouselRef = useRef<HTMLDivElement>(null);

  const tools = [
    { id: "calculator", name: t.calculator, icon: Calculator, color: "text-stone-500", bg: "bg-stone-500/10", border: "border-stone-500/20" },
    { id: "chat", name: t.messaging, icon: MessageCircle, color: "text-teal-500", bg: "bg-teal-500/10", border: "border-teal-500/20" },
    { id: "essay", name: t.essayGrader, icon: PenTool, color: "text-blue-500", bg: "bg-blue-500/10", border: "border-blue-500/20" },
    { id: "whiteboard", name: t.whiteboard, icon: MonitorPlay, color: "text-purple-500", bg: "bg-purple-500/10", border: "border-purple-500/20" },
    { id: "certificate", name: t.certificate, icon: Award, color: "text-amber-500", bg: "bg-amber-500/10", border: "border-amber-500/20" },
    { id: "parent", name: t.parentDash, icon: Users, color: "text-green-500", bg: "bg-green-500/10", border: "border-green-500/20" },
    { id: "tutoring", name: t.tutoring, icon: GraduationCap, color: "text-indigo-500", bg: "bg-indigo-500/10", border: "border-indigo-500/20" },
    { id: "playlists", name: t.playlists, icon: ListMusic, color: "text-pink-500", bg: "bg-pink-500/10", border: "border-pink-500/20" },
    { id: "vr", name: t.vrLab, icon: FlaskConical, color: "text-cyan-500", bg: "bg-cyan-500/10", border: "border-cyan-500/20" },
    { id: "pronunciation", name: t.pronunciation, icon: Mic, color: "text-red-500", bg: "bg-red-500/10", border: "border-red-500/20" },
    { id: "mindmap", name: t.mindmap, icon: Network, color: "text-orange-500", bg: "bg-orange-500/10", border: "border-orange-500/20" },
    { id: "reports", name: t.reports, icon: FileText, color: "text-slate-500", bg: "bg-slate-500/10", border: "border-slate-500/20" },
    { id: "pomodoro", name: t.pomodoroPet, icon: Smile, color: "text-yellow-500", bg: "bg-yellow-500/10", border: "border-yellow-500/20" },
    { id: "group", name: t.groupHub, icon: FolderKanban, color: "text-emerald-500", bg: "bg-emerald-500/10", border: "border-emerald-500/20" },
    { id: "simulator", name: t.simulator, icon: History, color: "text-rose-500", bg: "bg-rose-500/10", border: "border-rose-500/20" },
    { id: "accessibility", name: t.accessibility, icon: Accessibility, color: "text-fuchsia-500", bg: "bg-fuchsia-500/10", border: "border-fuchsia-500/20" },
    { id: "offline", name: t.offline, icon: CloudOff, color: "text-zinc-500", bg: "bg-zinc-500/10", border: "border-zinc-500/20" },
    { id: "bidding", name: t.bidding, icon: Coins, color: "text-amber-500", bg: "bg-amber-500/10", border: "border-amber-500/20" },
    { id: "health", name: t.mentalHealth, icon: HeartPulse, color: "text-sky-500", bg: "bg-sky-500/10", border: "border-sky-500/20" }
  ];

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <div className="glass rounded-[40px] p-8 shadow-sm mt-12 w-full max-w-full overflow-hidden">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-serif font-bold text-brand-text flex items-center gap-3">
          <div className="p-2 bg-montessori-red/10 rounded-lg">
            <LayoutGrid className="w-6 h-6 text-montessori-red" />
          </div>
          {t.title}
        </h2>
        <div className="flex gap-2">
          <button onClick={scrollLeft} className="p-3 rounded-full hover:bg-white/40 text-brand-text transition-colors shadow-sm bg-white/20">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button onClick={scrollRight} className="p-3 rounded-full hover:bg-white/40 text-brand-text transition-colors shadow-sm bg-white/20">
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>

      <div 
        ref={carouselRef}
        className="flex gap-4 pb-6 overflow-x-auto snap-x snap-mandatory hide-scrollbar"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {tools.map((tool) => {
          const isActive = activeToolId === tool.id;
          return (
            <button 
              key={tool.id} 
              onClick={() => setActiveToolId(tool.id)}
              className={`flex items-center gap-4 min-w-[280px] p-5 rounded-[24px] snap-start transition-all ${
                isActive ? 'glass border-montessori-blue shadow-md scale-[1.02] border-2 bg-white/60' : 'bg-white/10 hover:bg-white/30 border-transparent border hover:border-border/50 opacity-80 hover:opacity-100 object-scale-down'
              }`}
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 shadow-inner transition-transform ${isActive ? 'bg-white/80 scale-110' : 'bg-white/40'} ${tool.color}`}>
                <tool.icon className="w-6 h-6" />
              </div>
              <span className={`font-bold text-[15px] leading-tight text-left ${isActive ? 'text-brand-text' : 'text-brand-text/80'}`}>
                {tool.name}
              </span>
            </button>
          );
        })}
      </div>

      <div className="mt-8 border-t border-white/20 pt-8">
        <AnimatePresence mode="wait">
          {activeToolId === 'calculator' && (
            <motion.div
              key="calculator"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <ScientificCalculator />
            </motion.div>
          )}
          {activeToolId === 'chat' && (
            <motion.div
              key="chat"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <ChatTutor />
            </motion.div>
          )}
          {activeToolId !== 'calculator' && activeToolId !== 'chat' && activeToolId !== null && (
            <motion.div
              key="coming-soon"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="flex items-center justify-center p-12 glass rounded-[32px] border-dashed border-2 border-white/40 max-w-2xl mx-auto"
            >
              <div className="text-center">
                <LayoutGrid className="w-16 h-16 mx-auto text-brand-text/30 mb-6" />
                <h3 className="text-2xl font-serif font-bold text-brand-text/60 mb-3">
                  {language === 'it' ? 'In Arrivo' : language === 'en' ? 'Coming Soon' : 'Bientôt Disponible'}
                </h3>
                <p className="text-brand-text/40 text-lg">
                  {language === 'it' ? 'Questo strumento sarà disponibile nel prossimo aggiornamento.' : language === 'en' ? 'This tool will be available in the next update.' : 'Cet outil sera disponible dans la prochaine mise à jour.'}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
