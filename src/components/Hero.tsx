import React from 'react';
import { ArrowRight, ShieldCheck, ChevronDown } from 'lucide-react';

interface HeroProps {
  onOpenContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContact }) => {
  return (
    <section className="relative h-[92vh] md:h-[95vh] flex items-end overflow-hidden bg-black pt-20">
      {/* Background Video with Fallback */}
      <video
        autoPlay
        loop
        muted
        playsInline
        poster="https://drassermedhat.github.io/AurionHealth/sector-sovereign-health.jpg"
        className="absolute inset-0 w-full h-full object-cover opacity-35 filter brightness-90 contrast-110"
      >
        <source src="/aurion-hero-video.mp4" type="video/mp4" />
        <source src="https://drassermedhat.github.io/AurionHealth/aurion-hero-video.mp4" type="video/mp4" />
      </video>

      {/* Luxury Cinematic Gradients */}
      <div className="absolute inset-0 bg-gradient-to-t from-noir via-noir/70 to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-noir/90 via-noir/40 to-transparent pointer-events-none" />

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 md:pb-24 w-full">
        <div className="max-w-3xl space-y-6">
          {/* Sovereign Badge */}
          <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-aurionTeal-subtle border border-aurionTeal/30 backdrop-blur-md">
            <ShieldCheck className="w-3.5 h-3.5 text-aurionTeal-vibrant" />
            <span className="text-[11px] font-mono tracking-widest text-aurionTeal-glow uppercase font-semibold">
              Sovereign & Institutional Healthcare Advisory
            </span>
          </div>

          {/* Luxury Executive Title */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-serif tracking-tight text-white leading-[1.12]">
            Architecting Healthcare Transformation Across Emerging & Sovereign Markets
          </h1>

          {/* Subtitle */}
          <p className="text-sm sm:text-base md:text-lg text-slate-300 font-sans leading-relaxed max-w-2xl font-light">
            An elite advisory practice guiding sovereign health authorities, sovereign wealth funds, hospital networks, and medical tourism corridors across Egypt, the GCC, and emerging economies.
          </p>

          {/* Action CTAs */}
          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
            <a
              href="#capabilities"
              className="inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-xl text-xs font-mono uppercase tracking-wider text-white bg-aurionTeal hover:bg-aurionTeal-vibrant shadow-lg hover:shadow-glow-teal transition-all font-semibold"
            >
              <span>Explore Advisory Capabilities</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <button
              onClick={onOpenContact}
              className="inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-xl text-xs font-mono uppercase tracking-wider text-slate-200 bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md transition-all"
            >
              <span>Initiate Strategic Mandate</span>
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 right-8 hidden md:flex items-center space-x-2 text-slate-400 text-xs font-mono tracking-widest uppercase opacity-70">
        <span>Scroll to Explore</span>
        <ChevronDown className="w-4 h-4 animate-bounce" />
      </div>
    </section>
  );
};
