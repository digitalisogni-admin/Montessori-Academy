import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, X, Send, User, Bot } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../i18n/translations';

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputMsg, setInputMsg] = useState('');
  const { language } = useLanguage();
  const t = translations[language].chat;
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  // Basic mock AI messages
  const tAI = {
    title: language === 'fr' ? "Tuteur IA" : language === 'it' ? "Tutor AI" : "AI Tutor",
    subtitle: language === 'fr' ? "Toujours là pour aider" : language === 'it' ? "Sempre pronto ad aiutare" : "Always here to help",
    welcome: language === 'fr' ? "Bonjour ! Comment puis-je t'aider aujourd'hui ?" : language === 'it' ? "Ciao! Come posso aiutarti oggi?" : "Hello! How can I help you today?"
  };

  const [messages, setMessages] = useState([
    ...t.messages,
    { sender: 'ai', text: tAI.welcome }
  ]);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  const handleSend = () => {
    if (!inputMsg.trim()) return;
    
    setMessages(prev => [...prev, { sender: 'student', text: inputMsg }]);
    
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        sender: 'ai', 
        text: language === 'fr' 
          ? "C'est une excellente question. Laisse-moi t'expliquer cela en détail..." 
          : language === 'it' 
          ? "Questa è un'ottima domanda. Lasciami spiegare nel dettaglio..."
          : "That's a great question. Let me explain it in detail..."
      }]);
    }, 1000);
    
    setInputMsg('');
  };

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-brand-text text-brand-bg rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform z-50"
      >
        <MessageCircle className="w-6 h-6" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 right-6 w-80 md:w-96 bg-surface border border-border shadow-2xl rounded-2xl overflow-hidden z-50 flex flex-col"
            style={{ maxHeight: '600px', height: 'calc(100vh - 120px)' }}
          >
            {/* Header Tabs */}
            <div className="bg-brand-text text-brand-bg flex flex-col">
              <div className="p-3 flex justify-between items-center border-b border-white/10">
                <span className="font-bold flex items-center gap-2">
                  <MessageCircle className="w-5 h-5" /> 
                  {tAI.title}
                </span>
                <button onClick={() => setIsOpen(false)} className="hover:bg-brand-bg/20 p-1.5 rounded-full transition-colors">
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
            
            {/* Context Info */}
            <div className="bg-surface-hover border-b border-border p-3 flex justify-between items-center">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-brand-text/10 text-brand-text rounded-full flex items-center justify-center">
                    <User className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-bold">{t.teacher}</p>
                    <p className="text-[10px] text-green-500 font-medium">{t.online}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 border-l border-border pl-4">
                  <div className="w-8 h-8 bg-pastel-orange text-pastel-orange-text rounded-full flex items-center justify-center">
                    <Bot className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-bold">{tAI.title}</p>
                    <p className="text-[10px] text-brand-text/60 font-medium whitespace-nowrap">{tAI.subtitle}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-surface-hover/30">
              {messages.map((msg, idx) => {
                const isStudent = msg.sender === 'student';
                const isAI = msg.sender === 'ai';
                return (
                  <div key={idx} className={`flex ${isStudent ? 'justify-end' : 'justify-start'} gap-2 items-end`}>
                    {!isStudent && isAI && (
                      <div className="w-6 h-6 rounded-full bg-pastel-orange text-pastel-orange-text flex justify-center items-center shrink-0">
                        <Bot className="w-3 h-3" />
                      </div>
                    )}
                    {!isStudent && msg.sender === 'teacher' && (
                      <div className="w-6 h-6 rounded-full bg-brand-text/10 text-brand-text flex justify-center items-center shrink-0">
                        <User className="w-3 h-3" />
                      </div>
                    )}
                    <div className={`max-w-[85%] p-3 rounded-2xl ${
                      isStudent 
                        ? 'bg-pastel-blue text-pastel-blue-text rounded-tr-sm' 
                        : isAI
                        ? 'bg-surface border border-pastel-orange/50 text-brand-text rounded-tl-sm shadow-sm'
                        : 'bg-surface border border-border text-brand-text rounded-tl-sm'
                    }`}>
                      <p className="text-sm font-medium">{msg.text}</p>
                    </div>
                  </div>
                );
              })}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 bg-surface border-t border-border flex items-center gap-2">
              <input 
                type="text" 
                placeholder={t.type} 
                value={inputMsg}
                onChange={(e) => setInputMsg(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                className="flex-1 bg-surface-hover border border-border text-brand-text rounded-full px-4 py-2 focus:outline-none focus:border-brand-text text-sm"
              />
              <button onClick={handleSend} className="w-10 h-10 bg-brand-text text-brand-bg rounded-full flex items-center justify-center shrink-0 hover:opacity-80 transition-opacity">
                <Send className="w-4 h-4 ml-0.5" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
