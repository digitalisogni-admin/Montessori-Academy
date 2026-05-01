import { motion } from 'motion/react';
import { Send, MapPin, Mail, Phone, Eye } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../i18n/translations';
import { useSEO } from '../hooks/useSEO';

export default function Contact() {
  const { language } = useLanguage();
  const t = translations[language].contactLocal;

  useSEO({
    title: {
      fr: 'Contact',
      en: 'Contact',
      it: 'Contatto'
    },
    description: {
      fr: 'Une question ? Un projet ? N\'hésitez pas à nous contacter. Nous sommes là pour vous aider dans votre parcours éducatif.',
      en: 'A question? A project? Don\'t hesitate to contact us. We are here to help you in your educational journey.',
      it: 'Una domanda? Un progetto? Non esitare a contattarci. Siamo qui per aiutarti nel tuo percorso educativo.'
    }
  });

  return (
    <motion.main 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-24 min-h-screen bg-brand-bg relative overflow-hidden"
    >
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <span className="text-sm font-bold tracking-widest text-montessori-blue uppercase mb-3 block">{t.subtitle}</span>
          <h1 className="font-serif text-4xl md:text-[56px] font-bold text-brand-text mb-6 tracking-tight">{t.title}</h1>
          <p className="text-[20px] text-brand-text/70 italic max-w-2xl mx-auto leading-relaxed">{t.desc}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="glass border-white/20 p-10 md:p-12 rounded-[40px] shadow-xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-montessori-red/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            
            <form className="space-y-6 relative z-10" onSubmit={(e) => { e.preventDefault(); alert("Message envoyé ! (Simulation)"); }}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-brand-text/50">{t.name}</label>
                  <input type="text" required className="w-full px-5 py-4 bg-surface-hover border border-border/50 rounded-2xl focus:outline-none focus:ring-2 focus:ring-montessori-red text-brand-text shadow-inner transition-all placeholder:text-brand-text/30" placeholder="Jean Dupont" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-brand-text/50">{t.email}</label>
                  <input type="email" required className="w-full px-5 py-4 bg-surface-hover border border-border/50 rounded-2xl focus:outline-none focus:ring-2 focus:ring-montessori-red text-brand-text shadow-inner transition-all placeholder:text-brand-text/30" placeholder="jean@example.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-brand-text/50">{t.subject}</label>
                <input type="text" required className="w-full px-5 py-4 bg-surface-hover border border-border/50 rounded-2xl focus:outline-none focus:ring-2 focus:ring-montessori-red text-brand-text shadow-inner transition-all placeholder:text-brand-text/30" placeholder="Comment pouvons-nous vous aider ?" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-brand-text/50">{t.message}</label>
                <textarea required rows={5} className="w-full px-5 py-4 bg-surface-hover border border-border/50 rounded-2xl focus:outline-none focus:ring-2 focus:ring-montessori-red text-brand-text shadow-inner transition-all resize-none placeholder:text-brand-text/30" placeholder="Votre message..."></textarea>
              </div>
              <button type="submit" className="w-full bg-montessori-blue text-montessori-cream font-bold py-5 rounded-2xl flex justify-center items-center gap-3 hover:opacity-90 transition-opacity shadow-lg mt-4 group">
                {t.send}
                <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col space-y-8"
          >
            {/* Vision Section */}
            <div className="glass border-white/20 p-8 rounded-[32px] hover:border-white/40 transition-colors shadow-sm relative overflow-hidden group">
               <div className="absolute top-0 right-0 w-32 h-32 bg-montessori-yellow/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-montessori-yellow/20 transition-colors pointer-events-none" />
               <div className="flex items-center gap-4 mb-4 relative z-10">
                 <div className="w-12 h-12 rounded-2xl bg-white/40 flex items-center justify-center text-montessori-yellow shadow-inner">
                    <Eye className="w-6 h-6" />
                 </div>
                 <h2 className="font-serif text-2xl font-bold text-brand-text">{t.visionTitle}</h2>
               </div>
               <p className="text-brand-text/70 leading-relaxed italic relative z-10">
                 {t.visionDesc}
               </p>
            </div>

            {/* Info Section */}
            <div>
              <h2 className="text-xl font-bold text-brand-text mb-6 pl-2">{t.info}</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-6 glass p-4 rounded-2xl shadow-sm border-white/20 hover:border-montessori-blue/30 transition-colors group">
                  <div className="w-14 h-14 bg-white/40 rounded-xl flex justify-center items-center shrink-0 shadow-inner text-montessori-blue group-hover:scale-110 transition-transform">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm tracking-widest uppercase text-brand-text/50 mb-1">{t.labelAddress}</h3>
                    <p className="text-brand-text font-medium">{t.address}</p>
                  </div>
                </div>
                <div className="flex items-center gap-6 glass p-4 rounded-2xl shadow-sm border-white/20 hover:border-montessori-red/30 transition-colors group">
                  <div className="w-14 h-14 bg-white/40 rounded-xl flex justify-center items-center shrink-0 shadow-inner text-montessori-red group-hover:scale-110 transition-transform">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm tracking-widest uppercase text-brand-text/50 mb-1">{t.labelEmail}</h3>
                    <p className="text-brand-text font-medium">{t.emailAddress}</p>
                  </div>
                </div>
                <div className="flex items-center gap-6 glass p-4 rounded-2xl shadow-sm border-white/20 hover:border-montessori-green/30 transition-colors group">
                  <div className="w-14 h-14 bg-white/40 rounded-xl flex justify-center items-center shrink-0 shadow-inner text-montessori-green group-hover:scale-110 transition-transform">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm tracking-widest uppercase text-brand-text/50 mb-1">{t.labelPhone}</h3>
                    <p className="text-brand-text font-medium">{t.phone}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white/30 backdrop-blur-md border border-white/40 rounded-[24px] p-6 shadow-sm flex items-start gap-4">
              <div className="w-2 h-2 mt-2 rounded-full bg-montessori-green animate-pulse" />
              <div>
                <h3 className="font-bold text-brand-text mb-1">{t.hoursTitle}</h3>
                <p className="text-sm text-brand-text/70">{t.hoursDesc}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.main>
  );
}
