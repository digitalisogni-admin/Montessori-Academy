import { motion } from 'motion/react';
import { Menu, Globe, Search, Moon, Sun } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';
import { translations } from '../i18n/translations';
import { useState } from 'react';
import SearchModal from './SearchModal';

export default function Navigation() {
  const location = useLocation();
  const isHome = location.pathname === '/';
  
  const { language, setLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const t = translations[language].nav;
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <>
      <motion.header 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed top-6 left-6 right-6 z-50 py-4 bg-transparent"
      >
        <div className="container mx-auto px-8 lg:px-12">
          <div className="flex items-center justify-between">
            <Link to="/" className="font-serif text-[24px] font-bold tracking-tight text-brand-text flex items-center gap-3 md:gap-4">
              <img src="/logo1.png" alt="Accademia Montessori Logo" className="h-16 w-16 md:h-20 md:w-20 rounded-full object-cover shadow-sm" />
              <span>Accademia<span className="font-normal opacity-70">Montessori</span></span>
            </Link>
            
            <nav className="hidden md:flex items-center gap-6 lg:gap-8 opacity-80">
              <Link to="/ressources" className="text-[14px] font-medium text-brand-text hover:opacity-60 transition-opacity">
                {t.resources}
              </Link>
              <Link to="/pedagogie" className="text-[14px] font-medium text-brand-text hover:opacity-60 transition-opacity">
                {t.pedagogy}
              </Link>
              <Link to="/contact" className="text-[14px] font-medium text-brand-text hover:opacity-60 transition-opacity">
                {t.contact}
              </Link>
              
              <div className="w-[1px] h-4 bg-border mx-2"></div>
              
              <button onClick={() => setSearchOpen(true)} className="text-brand-text hover:opacity-60 transition-opacity" aria-label="Search">
                <Search className="w-4 h-4" />
              </button>

              {/* Theme Switcher */}
              <button 
                onClick={toggleTheme}
                className="text-brand-text hover:opacity-60 transition-opacity"
                aria-label="Toggle Theme"
              >
                {theme === 'light' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
              </button>

              {/* Language Switcher */}
              <div className="relative">
                <button 
                  onClick={() => setLangMenuOpen(!langMenuOpen)}
                  className="flex items-center gap-2 text-[14px] font-medium text-brand-text hover:opacity-60 transition-opacity uppercase"
                >
                  <Globe className="w-4 h-4" />
                  {language}
                </button>
                {langMenuOpen && (
                  <div className="absolute top-full mt-4 right-0 bg-surface shadow-2xl rounded-xl border border-border py-2 w-32 flex flex-col z-50">
                    <button onClick={() => { setLanguage('fr'); setLangMenuOpen(false); }} className={`px-4 py-2 text-left text-sm text-brand-text hover:bg-surface-hover uppercase ${language === 'fr' ? 'font-bold' : ''}`}>FR - Français</button>
                    <button onClick={() => { setLanguage('en'); setLangMenuOpen(false); }} className={`px-4 py-2 text-left text-sm text-brand-text hover:bg-surface-hover uppercase ${language === 'en' ? 'font-bold' : ''}`}>EN - English</button>
                    <button onClick={() => { setLanguage('it'); setLangMenuOpen(false); }} className={`px-4 py-2 text-left text-sm text-brand-text hover:bg-surface-hover uppercase ${language === 'it' ? 'font-bold' : ''}`}>IT - Italiano</button>
                  </div>
                )}
              </div>

              <Link to="/student" className="bg-brand-text text-brand-bg rounded-full px-5 py-2.5 text-[14px] font-semibold hover:opacity-80 transition-opacity shadow-lg">
                {t.studentArea}
              </Link>
            </nav>

            <button className="md:hidden p-2 text-brand-text hover:opacity-80 transition-opacity">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </motion.header>
      
      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
