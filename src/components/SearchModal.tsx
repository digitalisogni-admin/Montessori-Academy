import { motion, AnimatePresence } from 'motion/react';
import { Search, X, BookOpen, Loader2 } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../i18n/translations';
import { Link } from 'react-router-dom';
import { useDebounce } from '../hooks/useDebounce';

export default function SearchModal({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  const { language } = useLanguage();
  const t = translations[language].nav;
  const subjects = translations[language].subjects.items;
  
  const inputRef = useRef<HTMLInputElement>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const debouncedSearchTerm = useDebounce(searchTerm, 300);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) {
      setSearchTerm('');
      setIsSearching(false);
    }
  }, [isOpen]);

  // Mock API call or complex filtering triggered ONLY when debounced value changes
  useEffect(() => {
    if (debouncedSearchTerm) {
      setIsSearching(true);
      const timer = setTimeout(() => {
        setIsSearching(false);
      }, 500); // Simulate network latency
      return () => clearTimeout(timer);
    } else {
      setIsSearching(false);
    }
  }, [debouncedSearchTerm]);

  // Filter subjects based on the debounced search term
  const filteredSubjects = Object.entries(subjects).filter(([_, subject]: [string, any]) => {
    const term = debouncedSearchTerm.toLowerCase();
    return subject.title.toLowerCase().includes(term) || subject.description.toLowerCase().includes(term);
  });

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        if (!isOpen) onClose(); 
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
            onClick={onClose}
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed top-[20%] left-1/2 -translate-x-1/2 w-[90%] max-w-xl glass rounded-[40px] shadow-2xl z-[70] overflow-hidden"
          >
            <div className="flex items-center px-10 py-8 border-b border-border/50">
              {isSearching ? (
                <Loader2 className="w-6 h-6 text-montessori-blue animate-spin mr-4" />
              ) : (
                <Search className="w-6 h-6 text-montessori-blue/50 mr-4" />
              )}
              <input 
                ref={inputRef}
                type="text" 
                placeholder={t.search + " (Cmd+K)"}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="flex-1 bg-transparent border-none outline-none text-xl font-serif text-brand-text placeholder:text-brand-text/30"
              />
              {searchTerm && (
                <button onClick={() => setSearchTerm('')} className="p-2 mr-2 rounded-full hover:bg-white/40 text-brand-text/50 transition-colors">
                  <X className="w-4 h-4" />
                </button>
              )}
              <button onClick={onClose} className="p-2 rounded-full hover:bg-white/40 text-brand-text/50 transition-colors">
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="p-8 max-h-[60vh] overflow-y-auto">
              {filteredSubjects.length > 0 ? (
                <>
                  <p className="text-xs font-bold text-montessori-red mb-6 px-4 uppercase tracking-widest">Esplora Materiali</p>
                  <div className="flex flex-col gap-3">
                    {filteredSubjects.map(([id, subject]: [string, any]) => (
                      <Link
                        key={id}
                        to={`/enseignement/${id}`}
                        onClick={onClose}
                        className="flex items-center gap-4 px-6 py-5 rounded-[24px] hover:bg-white/40 transition-all border border-transparent hover:border-border/50 cursor-pointer group shadow-sm hover:shadow-md"
                      >
                        <div className="w-10 h-10 rounded-xl bg-montessori-blue/10 flex items-center justify-center text-montessori-blue group-hover:bg-montessori-blue group-hover:text-montessori-cream transition-colors">
                          <BookOpen className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="font-serif font-bold text-lg text-brand-text">{subject.title}</h4>
                          <p className="text-sm text-brand-text/60 truncate max-w-sm italic">{subject.description}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </>
              ) : (
                <div className="text-center py-10 text-brand-text/50 italic font-serif">
                  No results found for "{debouncedSearchTerm}"
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
