import { ArrowRight } from 'lucide-react';

interface HeroProps {
  onOpenContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContact }) => {
  return (
    <section className="relative min-h-[100svh] flex items-center overflow-hidden bg-black">
      {/* Full-bleed Edge-to-Edge Cinematic Background Video */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          poster="https://drassermedhat.github.io/AurionHealth/capability-strategy-boardroom.webp" 
          className="w-full h-full object-cover opacity-60 filter brightness-85 contrast-110"
        >
          <source src="/aurion-hero-video.mp4" type="video/mp4" />
          <source src="https://drassermedhat.github.io/AurionHealth/aurion-hero-video.mp4" type="video/mp4" />
        </video>
        {/* Directional scrim: Strong contrast behind text on left, cinematic atmosphere on right */}
        <div className="absolute inset-0 bg-black/35 pointer-events-none"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/70 to-transparent pointer-events-none"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/40 pointer-events-none"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 pt-24 pb-16 w-full flex items-center">
        <div className="max-w-3xl">
          
          {/* Eyebrow: Category marker */}
          <div className="inline-flex items-center space-x-2.5 px-4 py-1.5 rounded-full border border-white/20 bg-black/60 backdrop-blur-md mb-6 shadow-lg">
            <span className="w-2 h-2 rounded-full bg-aurionTeal-vibrant animate-pulse"></span>
            <span className="text-[10px] font-mono tracking-widest-luxury uppercase text-white font-bold">
              Healthcare Ecosystem Advisory
            </span>
          </div>

          {/* Headline: Dominant typographic element with intentional editorial line breaks */}
          <h1 className="text-[34px] sm:text-[46px] md:text-[56px] lg:text-[66px] xl:text-[70px] font-cormorant text-white tracking-tight leading-[1.08] mb-6 drop-shadow-xl">
            <span className="font-light text-slate-100">The bridge between</span> <br />
            <span 
              className="font-hero-keyword font-serif italic font-extrabold text-aurionTeal-glow drop-shadow-[0_0_35px_rgba(79,178,196,0.55)]"
              style={{ fontWeight: 800, color: '#4FB2C4' }}
            >
              &ldquo;Strategy&rdquo;
            </span> <br />
            <span className="font-light text-slate-100">
              and measurable{' '}
              <span 
                className="font-hero-keyword font-serif italic font-extrabold text-aurionTeal-glow drop-shadow-[0_0_35px_rgba(79,178,196,0.55)]"
                style={{ fontWeight: 800, color: '#4FB2C4' }}
              >
                &ldquo;Results&rdquo;
              </span>
            </span>
          </h1>

          {/* Key Executive Statement: Point of view connecting headline with client value */}
          <p className="text-base sm:text-lg md:text-xl text-white font-normal leading-snug tracking-tight mb-4 max-w-[620px] drop-shadow-md">
            Healthcare strategy is only valuable when it changes what happens next.
          </p>

          {/* Supporting Body Copy: Client-centric, concise, outcome-oriented editorial column */}
          <p className="text-sm sm:text-base text-slate-300 max-w-[620px] font-normal leading-relaxed mb-9 drop-shadow">
            Aurion works with healthcare leaders to turn complex priorities into executable strategies, stronger operating models, international growth, and measurable performance.
          </p>

          {/* Executive CTA Group */}
          <div className="flex flex-wrap items-center gap-4">
            <button 
              onClick={onOpenContact} 
              className="group px-7 py-3.5 rounded-full bg-white hover:bg-slate-100 text-noir font-mono text-xs font-bold uppercase tracking-wider shadow-lg transition-all flex items-center space-x-2"
            >
              <span>Schedule an Executive Consultation</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
            <a 
              href="#capabilities" 
              className="px-7 py-3.5 rounded-full border border-white/30 bg-black/40 hover:bg-white/10 hover:border-white/50 text-white font-mono text-xs font-semibold uppercase tracking-wider backdrop-blur-sm transition-all flex items-center space-x-2"
            >
              <span>Explore Our Capabilities</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};
