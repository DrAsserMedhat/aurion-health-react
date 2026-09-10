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
          className="w-full h-full object-cover opacity-50 filter brightness-85 contrast-110"
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
        <div className="max-w-2xl lg:max-w-[700px]">
          
          {/* Eyebrow: Category marker (+10%) */}
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full border border-white/20 bg-black/60 backdrop-blur-md mb-4 shadow-lg">
            <span className="w-1.5 h-1.5 rounded-full bg-aurionTeal-vibrant animate-pulse"></span>
            <span className="text-[10px] sm:text-[11px] font-mono tracking-widest-luxury uppercase text-white font-bold">
              Healthcare Ecosystem Advisory
            </span>
          </div>

          {/* Headline: Scaled up 10%, using ultra-fancy Cormorant Garamond / Italiana font palette */}
          <h1 className="text-[29px] sm:text-[38px] md:text-[46px] lg:text-[53px] xl:text-[57px] font-cormorant text-white tracking-tight leading-[1.12] mb-4.5 drop-shadow-xl">
            <span className="font-light text-slate-100">The bridge between</span> <br />
            <span 
              className="font-hero-keyword font-cormorant italic font-bold text-aurionTeal-glow drop-shadow-[0_0_25px_rgba(79,178,196,0.5)]"
              style={{ fontFamily: "'Cormorant Garamond', 'Italiana', serif", fontWeight: 700, color: '#4FB2C4' }}
            >
              &ldquo;Strategy&rdquo;
            </span> <br />
            <span className="font-light text-slate-100">
              and measurable{' '}
              <span 
                className="font-hero-keyword font-cormorant italic font-bold text-aurionTeal-glow drop-shadow-[0_0_25px_rgba(79,178,196,0.5)]"
                style={{ fontFamily: "'Cormorant Garamond', 'Italiana', serif", fontWeight: 700, color: '#4FB2C4' }}
              >
                &ldquo;Results&rdquo;
              </span>
            </span>
          </h1>

          {/* Key Executive Statement: Point of view in website font palette (+10%) */}
          <p className="font-cormorant text-[15.5px] sm:text-[17.5px] md:text-[20px] text-slate-100 font-normal leading-snug tracking-tight mb-3.5 max-w-2xl drop-shadow-md">
            Healthcare strategy is only valuable when it changes what happens next.
          </p>

          {/* Supporting Body Copy: Client-centric in Plus Jakarta Sans font-sans (+10%) */}
          <p className="font-sans text-[12px] sm:text-[13px] md:text-[14.5px] text-slate-300 max-w-2xl font-normal leading-relaxed mb-7.5 drop-shadow">
            Aurion works with healthcare leaders to turn complex priorities into executable strategies, stronger operating models, international growth, and measurable performance.
          </p>

          {/* Executive CTA Group (+10%) */}
          <div className="flex flex-wrap items-center gap-3.5">
            <button 
              onClick={onOpenContact} 
              className="group px-6.5 py-3.5 rounded-full bg-white hover:bg-slate-100 text-noir font-mono text-[12px] font-bold uppercase tracking-wider shadow-lg transition-all flex items-center space-x-2"
            >
              <span>Schedule an Executive Consultation</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
            <a 
              href="#capabilities" 
              className="px-6.5 py-3.5 rounded-full border border-white/30 bg-black/40 hover:bg-white/10 hover:border-white/50 text-white font-mono text-[12px] font-semibold uppercase tracking-wider backdrop-blur-sm transition-all flex items-center space-x-2"
            >
              <span>Explore Our Capabilities</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};
