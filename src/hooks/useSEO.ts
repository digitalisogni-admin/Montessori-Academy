import { useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

interface SEOProps {
  title: Record<'fr' | 'en' | 'it', string>;
  description: Record<'fr' | 'en' | 'it', string>;
}

export function useSEO({ title, description }: SEOProps) {
  const { language } = useLanguage();

  useEffect(() => {
    // Update title
    document.title = `${title[language]} | Accademia Montessori`;

    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description[language]);
    } else {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      metaDescription.setAttribute('content', description[language]);
      document.head.appendChild(metaDescription);
    }
    
    // Update og:title
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', title[language]);
    }

    // Update og:description
    let ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', description[language]);
    }

    // Update html lang attribute
    document.documentElement.lang = language;
  }, [language, title, description]);
}
