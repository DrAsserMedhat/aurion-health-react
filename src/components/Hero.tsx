import { ArrowRight, ChevronDown } from 'lucide-react';

interface HeroProps {
  onOpenContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContact }) => {
  return (
    <section className="relative min-h-[100svh] flex items-center overflow-hidden bg-black">

      {/* ── LAYER 0: Full-bleed background video ── */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="https://drassermedhat.github.io/AurionHealth/capability-strategy-boardroom.webp"
          className="w-full h-full object-cover opacity-50 brightness-[0.85] contrast-[1.10]"
        >
          <source src="/aurion-hero-video.mp4" type="video/mp4" />
          <source src="https://drassermedhat.github.io/AurionHealth/aurion-hero-video.mp4" type="video/mp4" />
        </video>

        {/* Deep left-to-right cinematic gradient — text zone is opaque, right breathes */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/10 pointer-events-none" />
        {/* Top-to-bottom depth gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80 pointer-events-none" />
        {/* Subtle overall tint for color grading */}
        <div className="absolute inset-0 bg-black/20 pointer-events-none" />
      </div>

      {/* ── LAYER 1: Decorative vertical accent line (left edge) ── */}
      <div
        className="absolute left-0 top-0 bottom-0 w-[3px] z-10 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, transparent 0%, #1B8A9E 30%, #4FB2C4 60%, transparent 100%)',
          opacity: 0.7,
        }}
      />

      {/* ── LAYER 2: Subtle horizontal rule at hero bottom ── */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px z-10 pointer-events-none"
        style={{
          background: 'linear-gradient(to right, #1B8A9E33, #4FB2C4aa 40%, #1B8A9E33 100%)',
        }}
      />

      {/* ── MAIN CONTENT ── */}
      <div className="relative z-20 max-w-7xl mx-auto px-8 sm:px-10 lg:px-12 pt-32 pb-24 w-full">

        {/* Glassmorphic text panel with ultra-subtle border */}
        <div
          className="relative max-w-[660px] lg:max-w-[720px]"
          style={{
            background: 'linear-gradient(135deg, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.18) 100%)',
            backdropFilter: 'blur(2px)',
            WebkitBackdropFilter: 'blur(2px)',
            borderLeft: '1px solid rgba(79, 178, 196, 0.18)',
            borderTop: '1px solid rgba(255, 255, 255, 0.06)',
            borderRight: '1px solid rgba(255,255,255,0.03)',
            borderBottom: '1px solid rgba(255,255,255,0.03)',
            borderRadius: '2px',
            padding: '48px 52px 44px 44px',
          }}
        >

          {/* ─ Eyebrow ─ */}
          <div className="inline-flex items-center space-x-2.5 mb-[36px] sm:mb-[40px] lg:mb-[44px]">
            {/* Animated teal pulse dot */}
            <span className="relative flex h-[7px] w-[7px]">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-aurionTeal-glow opacity-60" />
              <span className="relative inline-flex rounded-full h-[7px] w-[7px] bg-aurionTeal-vibrant" />
            </span>
            {/* Fine-ruled separator */}
            <span
              className="inline-block w-5 h-px"
              style={{ background: 'linear-gradient(to right, #1B8A9E, transparent)' }}
            />
            <span
              className="text-[10px] sm:text-[10.5px] font-mono uppercase tracking-[0.22em] text-white/90 font-semibold"
              style={{ letterSpacing: '0.22em' }}
            >
              Healthcare Ecosystem Advisory
            </span>
          </div>

          {/* ─ Headline ─ */}
          <h1
            className="font-cormorant text-white tracking-tight drop-shadow-2xl mb-[30px] sm:mb-[34px] lg:mb-[38px]"
            style={{
              fontSize: 'clamp(32px, 5.2vw, 58px)',
              lineHeight: '1.00',
            }}
          >
            <span className="font-light text-white/95 block">The bridge between</span>
            <span
              className="font-bold italic block"
              style={{
                fontFamily: "'Cormorant Garamond', 'Italiana', serif",
                color: '#4FB2C4',
                textShadow: '0 0 40px rgba(79,178,196,0.55), 0 0 80px rgba(79,178,196,0.20)',
              }}
            >
              &ldquo;Strategy&rdquo;
            </span>
            <span className="font-light text-white/95 block">
              and measurable{' '}
              <span
                className="font-bold italic"
                style={{
                  fontFamily: "'Cormorant Garamond', 'Italiana', serif",
                  color: '#4FB2C4',
                  textShadow: '0 0 40px rgba(79,178,196,0.55), 0 0 80px rgba(79,178,196,0.20)',
                }}
              >
                &ldquo;Results&rdquo;
              </span>
            </span>
          </h1>

          {/* Teal thin rule separating headline from statement */}
          <div
            className="mb-[22px] sm:mb-[24px] lg:mb-[26px]"
            style={{
              width: '48px',
              height: '1.5px',
              background: 'linear-gradient(to right, #4FB2C4, #1B8A9E66)',
              borderRadius: '2px',
            }}
          />

          {/* ─ Executive Statement ─ */}
          <p
            className="text-slate-100 font-cormorant mb-[20px] sm:mb-[22px] lg:mb-[24px]"
            style={{
              fontSize: 'clamp(15px, 1.45vw, 20px)',
              lineHeight: '1.40',
              maxWidth: '560px',
              fontWeight: 400,
              letterSpacing: '0.005em',
              textShadow: '0 1px 8px rgba(0,0,0,0.5)',
            }}
          >
            Healthcare strategy is only valuable when it changes what happens next.
          </p>

          {/* ─ Supporting Body Copy ─ */}
          <p
            className="font-sans text-white/60 mb-[34px] sm:mb-[38px] lg:mb-[42px]"
            style={{
              fontSize: 'clamp(11.5px, 1.1vw, 14px)',
              lineHeight: '1.70',
              maxWidth: '520px',
              fontWeight: 400,
              letterSpacing: '0.01em',
            }}
          >
            Aurion works with healthcare leaders to turn complex priorities into executable strategies,
            stronger operating models, international growth, and measurable performance.
          </p>

          {/* ─ CTA Group ─ */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">

            {/* Primary CTA */}
            <button
              onClick={onOpenContact}
              className="group relative overflow-hidden rounded-full font-mono font-bold uppercase text-[11px] tracking-[0.12em] transition-all duration-300"
              style={{
                height: '48px',
                paddingLeft: '28px',
                paddingRight: '22px',
                background: 'rgba(255,255,255,1)',
                color: '#0C4A54',
                boxShadow: '0 0 0 0 rgba(79,178,196,0)',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 0 24px rgba(79,178,196,0.35), 0 4px 20px rgba(0,0,0,0.4)';
                (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(-1px)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 0 0 0 rgba(79,178,196,0)';
                (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(0)';
              }}
            >
              <span className="flex items-center space-x-2.5">
                <span>Schedule an Executive Consultation</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </button>

            {/* Divider dot — desktop only */}
            <span className="hidden sm:block w-1 h-1 rounded-full bg-white/20 shrink-0" />

            {/* Secondary CTA */}
            <a
              href="#capabilities"
              className="group rounded-full font-mono font-semibold uppercase text-[11px] tracking-[0.10em] text-white/80 transition-all duration-300 flex items-center justify-center space-x-2"
              style={{
                height: '48px',
                paddingLeft: '24px',
                paddingRight: '24px',
                border: '1px solid rgba(79,178,196,0.30)',
                background: 'rgba(79,178,196,0.04)',
                backdropFilter: 'blur(8px)',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.borderColor = 'rgba(79,178,196,0.65)';
                el.style.background = 'rgba(79,178,196,0.10)';
                el.style.color = 'rgba(255,255,255,1)';
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.borderColor = 'rgba(79,178,196,0.30)';
                el.style.background = 'rgba(79,178,196,0.04)';
                el.style.color = 'rgba(255,255,255,0.80)';
              }}
            >
              <span>Explore Our Capabilities</span>
            </a>
          </div>

        </div>{/* end glassmorphic panel */}

        {/* ─ Scroll indicator ─ */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-1.5 opacity-40 hover:opacity-70 transition-opacity">
          <span className="text-[9px] font-mono uppercase tracking-[0.20em] text-white">Scroll</span>
          <ChevronDown className="w-3.5 h-3.5 text-white animate-bounce" />
        </div>

      </div>
    </section>
  );
};
