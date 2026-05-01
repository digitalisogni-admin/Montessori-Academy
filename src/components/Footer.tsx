import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../i18n/translations';
import { Link } from 'react-router-dom';

export default function Footer() {
  const { language } = useLanguage();
  const t = translations[language].footer;

  return (
    <footer className="mt-auto bg-transparent py-16 text-center text-brand-text/60 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="glass max-w-7xl mx-auto rounded-[48px] py-12 px-8 flex flex-col items-center">
          <h3 className="font-serif text-[24px] font-bold tracking-tight text-brand-text mb-4">
            Accademia<span className="font-normal opacity-70">Montessori</span>
          </h3>
          <p className="text-[16px] mb-10 italic max-w-lg">{t.slogan}</p>
          <div className="flex justify-center gap-10 text-[15px] font-bold text-montessori-blue mb-12">
            <Link to="/legal" className="hover:text-montessori-red transition-colors uppercase tracking-widest">{t.legal}</Link>
            <Link to="/" className="hover:text-montessori-red transition-colors uppercase tracking-widest">{t.sitemap}</Link>
            <Link to="/contact" className="hover:text-montessori-red transition-colors uppercase tracking-widest">{t.contact}</Link>
          </div>
          <p className="text-xs text-brand-text/40">
            &copy; {new Date().getFullYear()} Maria Montessori Academy. {t.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
