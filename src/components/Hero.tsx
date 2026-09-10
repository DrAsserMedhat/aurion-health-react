import { ArrowRight } from 'lucide-react';

interface HeroProps {
  onOpenContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContact }) => {
  return (
    <section className="relative h-[92vh] md:h-[95vh] flex items-end overflow-hidden bg-black">
      {/* Video Background: Bright & Clear */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          poster="https://drassermedhat.github.io/AurionHealth/capability-strategy-boardroom.webp" 
          className="w-full h-full object-cover opacity-100 filter brightness-95 contrast-105"
        >
          <source src="/aurion-hero-video.mp4" type="video/mp4" />
          <source src="https://drassermedhat.github.io/AurionHealth/aurion-hero-video.mp4" type="video/mp4" />
        </video>
        {/* Subtle Gradient that preserves video visibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/45 to-transparent pointer-events-none"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 pb-14 md:pb-20 w-full">
        <div className="max-w-3xl">
          
          <div className="inline-flex items-center space-x-2.5 px-4 py-1.5 rounded-full border border-white/20 bg-black/65 backdrop-blur-md mb-4 shadow-lg">
            <span className="w-2 h-2 rounded-full bg-aurionTeal-vibrant animate-pulse"></span>
            <span className="text-[10px] font-mono tracking-widest-luxury uppercase text-white font-bold">
              HEALTHCARE ADVISORY · EGYPT & GCC
            </span>
          </div>

          {/* High-Fashion / Fancy Editorial Typography */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-serif font-bold text-white tracking-tight leading-[1.12] mb-4 drop-shadow-md">
            The bridge between <span className="font-fancy-italic text-aurionTeal-glow font-normal">strategy</span> <br className="hidden sm:inline" />
            <span className="font-sans font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-slate-300">
              and enduring clinical results.
            </span>
          </h1>

          <p className="text-xs sm:text-sm md:text-base text-slate-200 max-w-2xl font-normal leading-relaxed mb-8 drop-shadow">
            We help healthcare institutions turn complex strategic priorities into clear operating models, stronger growth, and measurable execution across strategy, transformation, international patient services, and healthcare investment.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <button 
              onClick={onOpenContact} 
              className="px-6 py-3 rounded-full bg-aurionTeal-vibrant hover:bg-aurionTeal-glow text-noir font-mono text-xs font-bold uppercase tracking-wider shadow-glow-teal transition-all flex items-center space-x-2"
            >
              <span>DISCUSS A PROJECT</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <a 
              href="#capabilities" 
              className="px-6 py-3 rounded-full border border-white/30 bg-black/40 hover:bg-white/10 text-white font-mono text-xs font-semibold uppercase tracking-wider backdrop-blur-sm transition-all flex items-center space-x-2"
            >
              <span>EXPLORE PRACTICE AREAS</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};
