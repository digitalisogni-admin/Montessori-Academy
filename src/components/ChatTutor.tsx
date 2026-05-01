import { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../i18n/translations';
import { Bot, User, Send, GraduationCap } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function ChatTutor() {
  const { language } = useLanguage();
  const t = (translations[language] as any).chatTool;
  
  const [activeMode, setActiveMode] = useState<'ai' | 'teacher'>('ai');
  const [input, setInput] = useState('');
  
  const [messages, setMessages] = useState<{id: string; sender: 'bot'|'user'; text: string; mode: 'ai'|'teacher'}[]>([
    { id: '1', sender: 'bot', text: t.mockTutor, mode: 'ai' }
  ]);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Whenever mode changes, inject their greeting if not already present recently? 
    // Actually letting the switch happen silently is also fine.
    // The instructions say: "switch between tuteur ai and teacher possible"
  }, [activeMode]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;
    
    const userMsg = { id: Date.now().toString(), sender: 'user' as const, text: input, mode: activeMode };
    setMessages(prev => [...prev, userMsg]);
    
    setTimeout(() => {
      let responseText = "";
      if (language === 'it') {
        responseText = activeMode === 'ai' 
          ? "Interessante punto di vista! Potresti spiegare meglio la tua idea in relazione al materiale che stiamo studiando?" 
          : "Ottima osservazione. Ricorda che la chiave nel metodo Montessori è sempre l'applicazione pratica.";
      } else if (language === 'en') {
        responseText = activeMode === 'ai' 
          ? "Interesting perspective! Could you elaborate on that relating to our current studies?" 
          : "Good observation. Remember that the key in Montessori is always practical application.";
      } else {
        responseText = activeMode === 'ai' 
          ? "Point de vue intéressant ! Pourriez-vous développer cette idée en lien avec notre sujet actuel ?" 
          : "Bonne observation. N'oubliez pas que la clé dans la pédagogie Montessori est l'application pratique.";
      }
        
      setMessages(prev => [...prev, {
        id: (Date.now() + 1).toString(),
        sender: 'bot' as const,
        text: responseText,
        mode: activeMode
      }]);
    }, 1000);
    
    setInput('');
  };

  return (
    <div className="flex flex-col h-[500px] glass rounded-[32px] overflow-hidden max-w-4xl mx-auto shadow-xl border border-white/50">
      <div className="flex items-center p-3 gap-2 bg-white/30 backdrop-blur-md border-b border-white/40">
        <button 
          onClick={() => setActiveMode('ai')}
          className={`flex-1 flex items-center justify-center gap-3 p-4 rounded-2xl font-bold transition-all ${activeMode === 'ai' ? 'bg-white shadow-md text-montessori-blue' : 'hover:bg-white/40 text-brand-text/70'}`}
        >
          <Bot className="w-5 h-5" />
          {t.aiTutor}
        </button>
        <button 
          onClick={() => setActiveMode('teacher')}
          className={`flex-1 flex items-center justify-center gap-3 p-4 rounded-2xl font-bold transition-all ${activeMode === 'teacher' ? 'bg-white shadow-md text-montessori-red' : 'hover:bg-white/40 text-brand-text/70'}`}
        >
          <GraduationCap className="w-5 h-5" />
          {t.teacher}
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-6 space-y-6">
        <AnimatePresence>
          {messages.map((m) => (
            <motion.div 
              key={m.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`flex gap-4 ${m.sender === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
            >
              <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 shadow-sm ${
                m.sender === 'user' ? 'bg-brand-text text-brand-bg' : 
                m.mode === 'ai' ? 'bg-montessori-blue text-white' : 'bg-montessori-red text-white'
              }`}>
                {m.sender === 'user' ? <User className="w-5 h-5" /> : m.mode === 'ai' ? <Bot className="w-5 h-5" /> : <GraduationCap className="w-5 h-5" />}
              </div>
              <div className={`p-4 rounded-2xl max-w-[80%] ${
                m.sender === 'user' ? 'bg-brand-text text-brand-bg rounded-tr-sm' : 
                'bg-white text-brand-text rounded-tl-sm shadow-sm border border-white/50'
              }`}>
                <p className="leading-relaxed">{m.text}</p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
        <div ref={messagesEndRef} />
      </div>

      <div className="p-4 bg-white/30 backdrop-blur-md border-t border-white/40">
        <div className="flex gap-4 items-center max-w-3xl mx-auto">
          <input 
            type="text" 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder={t.placeholder}
            className="flex-1 bg-white focus:bg-white border-none rounded-full px-6 py-4 outline-none text-brand-text shadow-sm transition-all placeholder:text-brand-text/40"
          />
          <button 
            onClick={handleSend}
            disabled={!input.trim()}
            className="w-14 h-14 rounded-full bg-montessori-blue text-white font-bold hover:opacity-90 flex items-center justify-center shrink-0 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all hover:scale-105"
          >
            <Send className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
}
