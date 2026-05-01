import { motion } from 'motion/react';
import { Download, Heart, Users, FileText } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../i18n/translations';

export default function CommunityNotes() {
  const { language } = useLanguage();
  const t = translations[language].studentDashboard.notes;

  if (!t) return null;

  return (
    <div className="bg-surface rounded-3xl border border-border overflow-hidden">
      <div className="p-6 border-b border-border flex justify-between items-center">
        <div>
          <h2 className="text-xl font-bold text-brand-text flex items-center gap-2">
            <Users className="w-5 h-5 text-brand-text/50" />
            {t.title}
          </h2>
          <p className="text-sm text-brand-text/60">{t.subtitle}</p>
        </div>
        <button className="px-4 py-2 bg-pastel-orange text-pastel-orange-text rounded-full text-sm font-bold hover:scale-105 transition-transform">
          {t.uploadTitle}
        </button>
      </div>
      <div className="divide-y divide-border">
        {t.items.map((item, idx) => (
          <div key={idx} className="p-5 flex items-center justify-between hover:bg-surface-hover transition-colors group">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-pastel-blue/20 text-pastel-blue-text rounded-lg flex items-center justify-center">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <p className="font-bold text-brand-text">{item.title}</p>
                <p className="text-xs text-brand-text/60 font-medium">{item.author} • {item.subject}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button className="flex items-center gap-1 text-xs font-bold text-brand-text/50 hover:text-red-500 transition-colors">
                <Heart className="w-4 h-4" /> {item.likes}
              </button>
              <button className="w-8 h-8 rounded-full border border-border flex items-center justify-center text-brand-text/50 hover:bg-brand-text hover:text-brand-bg transition-colors">
                <Download className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
