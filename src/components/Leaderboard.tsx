import { Trophy, Medal, Star } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../i18n/translations';

export default function Leaderboard() {
  const { language } = useLanguage();
  const t = translations[language].leaderboard;
  
  const rankings = [
    { name: "Lucie M.", points: 2450, badge: 'gold' },
    { name: t.you, points: 2100, badge: 'silver' },
    { name: "Thomas B.", points: 1850, badge: 'bronze' },
    { name: "Sarah L.", points: 1640, badge: 'none' }
  ];

  const getRankIcon = (badge: string, index: number) => {
    if (badge === 'gold') return <Medal className="w-6 h-6 text-yellow-500 drop-shadow-md" />;
    if (badge === 'silver') return <Medal className="w-6 h-6 text-gray-400 drop-shadow-md" />;
    if (badge === 'bronze') return <Medal className="w-6 h-6 text-amber-700 drop-shadow-md" />;
    return <span className="font-bold text-brand-text/40 w-6 text-center">{index + 1}</span>;
  };

  return (
    <div className="bg-surface border border-border rounded-3xl p-6 shadow-sm mt-8">
      <h2 className="text-xl font-bold text-brand-text flex items-center gap-2 mb-6">
        <Trophy className="w-5 h-5 text-amber-500" />
        {t.title}
      </h2>
      <div className="space-y-4">
        {rankings.map((student, idx) => (
          <div key={idx} className={`flex items-center justify-between p-4 rounded-2xl border ${student.name === t.you ? 'bg-brand-text/5 border-brand-text/30 shadow-sm' : 'bg-surface-hover border-border'}`}>
            <div className="flex items-center gap-4">
              <div className="w-10 flex justify-center">
                {getRankIcon(student.badge, idx)}
              </div>
              <span className={`font-bold ${student.name === t.you ? 'text-brand-text' : 'text-brand-text/80'}`}>
                {student.name}
              </span>
            </div>
            <div className="flex items-center gap-1 bg-pastel-orange/20 text-pastel-orange-text px-3 py-1 rounded-full text-sm font-bold">
              <Star className="w-4 h-4" />
              {student.points}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
