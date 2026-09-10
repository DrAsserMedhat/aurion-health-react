import { ArrowRight } from 'lucide-react';

interface HeroProps {
  onOpenContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContact }) => {
  return (
    <section className="relative min-h-screen h-screen flex items-center overflow-hidden bg-black">
      {/* Full-bleed Edge-to-Edge Video */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          poster="https://drassermedhat.github.io/AurionHealth/capability-strategy-boardroom.webp" 
          className="w-full h-full object-cover opacity-70 filter brightness-90 contrast-105"
        >
          <source src="/aurion-hero-video.mp4" type="video/mp4" />
          <source src="https://drassermedhat.github.io/AurionHealth/aurion-hero-video.mp4" type="video/mp4" />
        </video>
        {/* Subtle Bottom & Side Vignette: High transparency and strong text contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/55 to-black/35 pointer-events-none"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 pt-20 w-full">
        <div className="max-w-3xl">
          
          {/* Badge: Healthcare Ecosystem Advisory */}
          <div className="inline-flex items-center space-x-2.5 px-4 py-1.5 rounded-full border border-white/20 bg-black/60 backdrop-blur-md mb-5 shadow-lg">
            <span className="w-2 h-2 rounded-full bg-aurionTeal-vibrant animate-pulse"></span>
            <span className="text-[10px] font-mono tracking-widest-luxury uppercase text-white font-bold">
              Healthcare Ecosystem Advisory
            </span>
          </div>

          {/* Executive luxury typography: both strategy and impact in bold teal */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-cormorant text-white tracking-tight leading-[1.18] mb-5 drop-shadow-lg">
            <span className="font-light">The bridge between</span> <br />
            <span className="font-fancy-italic font-bold text-aurionTeal-glow drop-shadow-[0_0_30px_rgba(79,178,196,0.45)]">
              strategy
            </span> <br />
            <span className="font-light">
              and measurable{' '}
              <span className="font-fancy-italic font-bold text-aurionTeal-glow drop-shadow-[0_0_30px_rgba(79,178,196,0.45)]">
                impact
              </span>
            </span>
          </h1>

          {/* Subtitle: 0 em-dashes */}
          <p className="text-xs sm:text-sm md:text-base text-slate-200 max-w-2xl font-normal leading-relaxed mb-8 drop-shadow">
            Aurion is a founder-led advisory practice that turns healthcare strategy into clear operating models, international patient pathways, and measurable execution, delivered personally, not handed off.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4">
            <button 
              onClick={onOpenContact} 
              className="px-7 py-3.5 rounded-full bg-white hover:bg-slate-100 text-noir font-mono text-xs font-bold uppercase tracking-wider shadow-lg transition-all flex items-center space-x-2"
            >
              <span>Schedule a Consultation</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <a 
              href="#capabilities" 
              className="px-7 py-3.5 rounded-full border border-white/30 bg-black/40 hover:bg-white/10 text-white font-mono text-xs font-semibold uppercase tracking-wider backdrop-blur-sm transition-all flex items-center space-x-2"
            >
              <span>View Capabilities</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};
