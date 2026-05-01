import { useState } from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../i18n/translations';
import { Beaker, Search, Share2, Play, Settings2 } from 'lucide-react';

export default function VirtualLabPreview() {
  const { language } = useLanguage();
  // We can add distinct translation keys, or just hardcode some for now.
  const isEn = language === 'en';
  const isIt = language === 'it';
  const tTitle = isEn ? "Interactive Sandbox" : isIt ? "Sandbox Interattivo" : "Bac à Sable Interactif";
  const tDesc = isEn 
    ? "Practice your knowledge with our simulator. Experiment in real time with physics and math concepts." 
    : isIt 
    ? "Metti in pratica le tue conoscenze con il nostro simulatore. Sperimenta in tempo reale concetti di fisica e matematica." 
    : "Mettez en pratique vos connaissances avec notre simulateur. Expérimentez en temps réel avec des concepts de physique et de mathématiques.";
  const tBtn = isEn ? "Try the simulator" : isIt ? "Prova il simulatore" : "Essayer le simulateur";
  const tPause = isEn ? "Pause" : isIt ? "Pausa" : "Pause";
  const tLength = isEn ? "Length" : isIt ? "Lunghezza" : "Longueur";
  const tMass = isEn ? "Mass" : isIt ? "Massa" : "Masse";
  const tGravity = isEn ? "Gravity" : isIt ? "Gravità" : "Gravité";
  
  const [length, setLength] = useState(50);
  const [mass, setMass] = useState(20);
  const [gravity, setGravity] = useState(9.8);
  const [isPlaying, setIsPlaying] = useState(true);

  // Calculating period of pendulum: T = 2 * PI * sqrt(L/g)
  // We'll map length to a reasonable visual value
  const visualLength = 50 + (length / 100) * 150; // 50 to 200px
  const visualMass = 10 + (mass / 100) * 40; // 10 to 50px
  
  // Animation duration based on formula
  const period = 2 * Math.PI * Math.sqrt((length || 1) / (gravity * 10));

  return (
    <section className="py-24 bg-transparent transition-colors duration-300 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        <div className="glass p-12 md:p-16 rounded-[64px] shadow-sm flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 space-y-8">
            <div className="inline-flex items-center justify-center p-4 rounded-3xl bg-montessori-blue/10 text-montessori-blue mb-2">
              <Beaker className="w-10 h-10" />
            </div>
            <h2 className="font-serif text-4xl md:text-6xl font-bold text-brand-text tracking-tight leading-[1.1]">
              {tTitle}
            </h2>
            <p className="text-xl text-brand-text/70 max-w-md italic">
              {tDesc}
            </p>
            <div className="flex gap-4 pt-4">
              <button 
                onClick={() => setIsPlaying(!isPlaying)}
                className="flex items-center gap-3 bg-montessori-blue text-montessori-cream px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform shadow-lg shadow-montessori-blue/20"
              >
                <Play className="w-5 h-5" />
                {isPlaying ? tPause : tBtn}
              </button>
            </div>
          </div>
          
          <div className="flex-1 w-full relative">
            <motion.div 
              initial={{ rotateY: -10, rotateX: 5 }}
              whileInView={{ rotateY: 0, rotateX: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              viewport={{ once: true }}
              style={{ perspective: 1000 }}
            >
              <div className="glass p-8 rounded-[40px] shadow-2xl relative overflow-hidden flex flex-col gap-8 border-white/40">
                {/* Header */}
                <div className="flex justify-between items-center relative z-10">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-montessori-red shadow-[0_0_10px_rgba(230,57,70,0.5)]" />
                    <div className="w-3 h-3 rounded-full bg-montessori-yellow shadow-[0_0_10px_rgba(241,196,15,0.5)]" />
                    <div className="w-3 h-3 rounded-full bg-montessori-green shadow-[0_0_10px_rgba(42,157,143,0.5)]" />
                  </div>
                  <div className="flex gap-4 text-brand-text/40">
                    <Settings2 className="w-5 h-5 hover:text-montessori-blue transition-colors cursor-pointer" />
                    <Share2 className="w-5 h-5 hover:text-montessori-blue transition-colors cursor-pointer" />
                  </div>
                </div>

                {/* Canvas Mock */}
                <div className="bg-white/30 backdrop-blur-md border border-white/50 h-80 rounded-[32px] flex items-center justify-center relative overflow-hidden shadow-inner">
                  <svg className="absolute inset-0 w-full h-full opacity-10 pointer-events-none" viewBox="0 0 100 100">
                    <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                      <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" />
                    </pattern>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                  </svg>
                  
                  {/* Interactive Pendulum */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-6 h-6 bg-montessori-blue rounded-b-full z-10 shadow-md" />
                  
                  <motion.div 
                    className="absolute top-0 left-1/2 bg-montessori-blue/30 origin-top flex flex-col items-center"
                    style={{ height: visualLength, width: 3 }}
                    animate={{ rotate: isPlaying ? [-35, 35] : 0 }}
                    transition={{ 
                      repeat: Infinity, 
                      duration: period, 
                      repeatType: 'reverse', 
                      ease: "easeInOut" 
                    }}
                  >
                    <div 
                      className="absolute bottom-0 rounded-full bg-montessori-red shadow-xl border-4 border-white/80 flex items-center justify-center text-[10px] text-white font-bold"
                      style={{ 
                        width: visualMass * 1.2, 
                        height: visualMass * 1.2,
                        transform: `translate(0, 50%)`,
                      }}
                    >
                      {visualMass > 30 && `${mass}kg`}
                    </div>
                  </motion.div>
                </div>
                
                {/* Controls */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 relative z-10">
                  <div className="space-y-3">
                    <label className="text-xs font-bold text-brand-text/60 uppercase tracking-widest flex justify-between">
                      <span>{tLength}</span>
                      <span className="text-montessori-red">{length} cm</span>
                    </label>
                    <input 
                      type="range" min="10" max="100" value={length} 
                      onChange={(e) => setLength(Number(e.target.value))}
                      className="w-full h-2 bg-white/40 rounded-full appearance-none cursor-pointer accent-montessori-blue"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-xs font-bold text-brand-text/60 uppercase tracking-widest flex justify-between">
                      <span>{tMass}</span>
                      <span className="text-montessori-red">{mass} kg</span>
                    </label>
                    <input 
                      type="range" min="1" max="100" value={mass} 
                      onChange={(e) => setMass(Number(e.target.value))}
                      className="w-full h-2 bg-white/40 rounded-full appearance-none cursor-pointer accent-montessori-blue"
                    />
                  </div>
                </div>

              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
