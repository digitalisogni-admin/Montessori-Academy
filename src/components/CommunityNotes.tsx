import { motion } from 'motion/react';
import { Download, Heart, Users, FileText } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../i18n/translations';
import { FixedSizeList as List } from 'react-window';

export default function CommunityNotes() {
  const { language } = useLanguage();
  const t = translations[language].studentDashboard.notes;

  if (!t) return null;

  // We duplicate items simply to demonstrate virtualization on a "long" list for the portfolio mock
  const mockLongList = Array.from({ length: 100 }).map((_, i) => ({
    ...t.items[i % t.items.length],
    id: i
  }));

  const Row = ({ index, style }: { index: number, style: React.CSSProperties }) => {
    const item = mockLongList[index];
    return (
      <div style={style} className="border-b border-border">
        <div className="p-5 flex items-center justify-between hover:bg-surface-hover transition-colors group h-full">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-pastel-blue/20 text-pastel-blue-text rounded-lg flex items-center justify-center">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <p className="font-bold text-brand-text">{item.title} #{index + 1}</p>
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
      </div>
    );
  };

  return (
    <div className="bg-surface rounded-3xl border border-border overflow-hidden">
      <div className="p-6 border-b border-border flex justify-between items-center">
        <div>
          <h2 className="text-xl font-bold text-brand-text flex items-center gap-2">
            <Users className="w-5 h-5 text-brand-text/50" />
            {t.title} <span className="text-xs bg-montessori-blue/10 text-montessori-blue px-2 py-1 rounded-full ml-2">Virtualized</span>
          </h2>
          <p className="text-sm text-brand-text/60">{t.subtitle}</p>
        </div>
        <button className="px-4 py-2 bg-pastel-orange text-pastel-orange-text rounded-full text-sm font-bold hover:scale-105 transition-transform">
          {t.uploadTitle}
        </button>
      </div>
      <div>
        <List
          height={400}
          itemCount={mockLongList.length}
          itemSize={80}
          width="100%"
          className="scrollbar-thin"
        >
          {Row}
        </List>
      </div>
    </div>
  );
}
