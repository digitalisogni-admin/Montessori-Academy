import { useState, useEffect } from 'react';
import { Play, Pause, RotateCcw, Timer } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../i18n/translations';

export default function PomodoroTimer() {
  const [timeLeft, setTimeLeft] = useState(25 * 60);
  const [isRunning, setIsRunning] = useState(false);
  const { language } = useLanguage();
  const t = translations[language].studentDashboard.pomodoro;

  useEffect(() => {
    let interval: any;
    if (isRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsRunning(false);
    }
    return () => clearInterval(interval);
  }, [isRunning, timeLeft]);

  const toggleTimer = () => setIsRunning(!isRunning);
  const resetTimer = () => {
    setIsRunning(false);
    setTimeLeft(25 * 60);
  };

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <div className="bg-surface rounded-3xl border border-border p-6 shadow-sm flex flex-col items-center justify-center h-full">
      <div className="flex items-center gap-2 mb-4 text-brand-text/60">
        <Timer className="w-5 h-5" />
        <span className="font-bold text-sm tracking-wide uppercase">{t.title}</span>
      </div>
      
      <div className="text-6xl font-black font-mono text-brand-text mb-6">
        {formatTime(timeLeft)}
      </div>
      
      <div className="flex items-center gap-4">
        <button 
          onClick={toggleTimer}
          className="px-6 py-3 bg-brand-text text-brand-bg rounded-full font-bold hover:scale-105 transition-transform flex items-center gap-2"
        >
          {isRunning ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
          {isRunning ? t.pause : t.start}
        </button>
        <button 
          onClick={resetTimer}
          className="p-3 bg-surface-hover border border-border text-brand-text rounded-full hover:bg-brand-text hover:text-brand-bg transition-colors"
          title={t.reset}
        >
          <RotateCcw className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
