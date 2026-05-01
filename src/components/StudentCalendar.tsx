import { Calendar, Video, Clock } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../i18n/translations';

export default function StudentCalendar() {
  const { language } = useLanguage();
  const t = translations[language].studentDashboard.calendar;

  if (!t) return null;

  return (
    <div className="bg-surface border border-border rounded-3xl p-6 h-full flex flex-col">
      <h2 className="text-xl font-bold text-brand-text flex items-center gap-2 mb-6">
        <Calendar className="w-5 h-5 text-brand-text/50" />
        {t.title}
      </h2>
      
      <div className="flex flex-col gap-4 flex-1">
        {t.items.map((item, idx) => (
          <div key={idx} className="flex items-start gap-4 p-4 bg-surface-hover rounded-2xl border border-border">
            <div className={`mt-1 w-2 h-2 rounded-full shrink-0 ${item.type === 'live' ? 'bg-pastel-orange-text' : 'bg-red-500'}`} />
            <div className="flex-1">
              <h4 className="font-bold text-brand-text mb-1">{item.title}</h4>
              <p className="text-xs font-semibold text-brand-text/60 flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {item.time}
              </p>
            </div>
            {item.type === 'live' && (
              <button className="w-8 h-8 bg-brand-text text-brand-bg flex items-center justify-center rounded-full hover:scale-110 transition-transform cursor-pointer">
                <Video className="w-4 h-4 shrink-0" />
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
