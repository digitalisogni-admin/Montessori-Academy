import { motion } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../i18n/translations';
import { Link } from 'react-router-dom';
import { ArrowLeft, BookOpen, Clock, Activity, Award, CheckCircle } from 'lucide-react';
import PomodoroTimer from '../components/PomodoroTimer';
import StudentCalendar from '../components/StudentCalendar';
import CommunityNotes from '../components/CommunityNotes';
import Leaderboard from '../components/Leaderboard';
import WorkspaceTools from '../components/WorkspaceTools';
import { useSEO } from '../hooks/useSEO';

export default function StudentDashboard() {
  const { language } = useLanguage();
  const t = translations[language].studentDashboard;
  const common = translations[language].subjectPage;

  useSEO({
    title: {
      fr: 'Espace Élève',
      en: 'Student Dashboard',
      it: 'Area Studente'
    },
    description: {
      fr: 'Accédez à votre espace élève, suivez votre progression et retrouvez tous vos outils d\'apprentissage.',
      en: 'Access your student dashboard, track your progress and find all your learning tools.',
      it: 'Accedi alla tua area studente, segui i tuoi progressi e trova tutti i tuoi strumenti di apprendimento.'
    }
  });

  return (
    <div className="pt-32 pb-24 min-h-screen bg-brand-bg transition-colors duration-300">
      <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
        <Link to="/" className="inline-flex items-center gap-2 text-brand-text/60 hover:text-brand-text transition-colors mb-8 font-medium">
          <ArrowLeft className="w-5 h-5" />
          {common.backHome}
        </Link>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-6"
        >
          <div>
            <h1 className="font-sans text-[40px] md:text-[56px] font-bold text-brand-text leading-tight tracking-tight mb-2">
              {t.welcome}
            </h1>
            <p className="text-xl text-brand-text/60">
              {t.title}
            </p>
          </div>
          
          <div className="flex gap-2">
            <span className="px-4 py-2 rounded-full border border-border text-brand-text text-sm font-semibold flex items-center gap-2 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              En ligne
            </span>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* Progress */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="bg-surface rounded-3xl p-6 border border-border shadow-sm flex flex-col justify-between overflow-hidden relative"
          >
            <div className="flex justify-between items-start mb-6">
              <div className="w-12 h-12 bg-pastel-blue rounded-2xl flex items-center justify-center text-pastel-blue-text">
                <Activity className="w-6 h-6" />
              </div>
              <span className="font-bold text-brand-text/50 uppercase tracking-widest text-xs">{t.stats.progress}</span>
            </div>
            
            <div className="flex items-end gap-2">
              <span className="text-5xl font-black text-brand-text relative z-10">68<span className="text-2xl text-brand-text/50">%</span></span>
            </div>
            
            {/* Progress bar visual */}
            <div className="w-full h-2 bg-border rounded-full mt-6 overflow-hidden">
              <motion.div 
                className="h-full bg-pastel-blue-text"
                initial={{ width: 0 }}
                animate={{ width: "68%" }}
                transition={{ duration: 1, delay: 0.5 }}
              />
            </div>
          </motion.div>
          
          {/* Due items */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-surface rounded-3xl p-6 border border-border shadow-sm flex flex-col justify-between hover:border-pastel-orange-border transition-colors cursor-pointer group"
          >
            <div className="flex justify-between items-start mb-6">
              <div className="w-12 h-12 bg-pastel-orange rounded-2xl flex items-center justify-center text-pastel-orange-text group-hover:scale-110 transition-transform">
                <Clock className="w-6 h-6" />
              </div>
              <span className="font-bold text-brand-text/50 uppercase tracking-widest text-xs">{t.stats.due}</span>
            </div>
            
            <div className="flex items-end gap-2">
              <span className="text-5xl font-black text-brand-text">2</span>
            </div>
            <p className="text-sm font-medium text-brand-text/60 mt-2">Avant ce vendredi</p>
          </motion.div>
        </div>

        {/* Row 3: Outils, Emploi du temps, Minuteur */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <WorkspaceTools />
            </motion.div>
          </div>
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <StudentCalendar />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
            >
              <PomodoroTimer />
            </motion.div>
          </div>
        </div>

        {/* Row 4: Activité Récente, Classement */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
            >
              <h2 className="text-2xl font-bold text-brand-text mb-6 flex items-center gap-3">
                <Activity className="w-6 h-6 text-brand-text/40" />
                {t.recentActivity}
              </h2>
              <div className="bg-surface rounded-3xl border border-border overflow-hidden h-full">
                {t.activities.map((activity, i) => (
                  <div key={i} className={`p-6 flex items-center justify-between ${i !== t.activities.length - 1 ? 'border-b border-border' : ''} hover:bg-surface-hover transition-colors`}>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-border/50 flex items-center justify-center text-brand-text">
                        <CheckCircle className="w-6 h-6 opacity-60" />
                      </div>
                      <div>
                        <p className="font-bold text-lg text-brand-text">{activity.title}</p>
                        <p className="text-sm font-semibold text-brand-text/50 uppercase tracking-wider">{activity.date}</p>
                      </div>
                    </div>
                    <span className="font-bold text-lg text-brand-text/80 bg-brand-bg px-4 py-2 rounded-xl border border-border">
                      {activity.score}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 }}
              className="h-full"
            >
              <Leaderboard />
            </motion.div>
        </div>

        {/* Row 5: Badges Obtenus */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-brand-text mb-6 flex items-center gap-3">
            <Award className="w-6 h-6 text-brand-text/40" />
            {t.badges}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {t.badgeList.map((badge, i) => {
              const colors = ['bg-amber-100 text-amber-700 border-amber-200 dark:bg-amber-900/20 dark:text-amber-400 dark:border-amber-800', 
                              'bg-sky-100 text-sky-700 border-sky-200 dark:bg-sky-900/20 dark:text-sky-400 dark:border-sky-800', 
                              'bg-purple-100 text-purple-700 border-purple-200 dark:bg-purple-900/20 dark:text-purple-400 dark:border-purple-800'];
              const colorIndex = i % colors.length;
              
              return (
                <motion.div 
                  key={i}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className={`p-8 rounded-3xl border flex flex-col items-center text-center justify-center gap-4 shadow-sm ${colors[colorIndex]}`}
                >
                  <Award className="w-12 h-12" />
                  <span className="font-bold text-lg">{badge}</span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
