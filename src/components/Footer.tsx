interface FooterProps {
  onOpenDrawer: (practiceId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenDrawer }) => {
  return (
    <footer className="bg-[#050809] relative overflow-hidden">

      {/* Top teal rule */}
      <div className="footer-rule" />

      {/* Ambient glow */}
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-aurionTeal/4 rounded-full blur-[100px] pointer-events-none" />

      {/* Main content */}
      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-14">

          {/* Brand column */}
          <div className="md:col-span-5 space-y-5">
            <a href="#" className="inline-block">
              <img
                src="/Aurion-Logo.svg"
                alt="Aurion Health Advisory"
                className="h-16 md:h-20 w-auto object-contain"
                onError={(e) => { e.currentTarget.src = 'https://drassermedhat.github.io/AurionHealth/Aurion-Logo.png'; }}
              />
            </a>

            {/* Tagline in Cormorant italic */}
            <p
              className="font-cormorant italic leading-[1.55]"
              style={{ fontSize: '17px', color: 'rgba(255,255,255,0.55)' }}
            >
              "The bridge between strategy and results."
            </p>

            <p className="text-[12px] text-white/28 max-w-sm leading-[1.75] font-sans">
              An elite boutique healthcare advisory practice integrating board strategy, cross-border patient corridors, and next-generation clinical ecosystems.
            </p>

            {/* Founding note */}
            <div className="flex items-center space-x-2 pt-2">
              <span className="w-1.5 h-1.5 rounded-full bg-aurionTeal/50" />
              <span className="text-[10px] font-mono text-white/20 uppercase tracking-[0.18em]">Founded · Cairo, Egypt · 2024</span>
            </div>
          </div>

          {/* Capabilities column */}
          <div className="md:col-span-4 space-y-4">
            <div className="text-[9.5px] font-mono uppercase tracking-[0.22em] text-white/40 font-bold mb-4">Capabilities</div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-2.5 gap-x-4">
              {[
                { id: 'ips', label: '★ International Corridors' },
                { id: 'strategy', label: 'Strategy & Transformation' },
                { id: 'ops', label: 'Operations & Turnaround' },
                { id: 'spaces', label: 'Elite Aesthetics & Wellness' },
                { id: 'events', label: 'Mega Events Management' },
                { id: 'digital', label: 'Digital Health Informatics' },
                { id: 'commercial', label: 'Business Development' },
                { id: 'pmo', label: 'Healthcare Project Mgmt.' },
              ].map(({ id, label }) => (
                <li key={id}>
                  <button
                    onClick={() => onOpenDrawer(id)}
                    className="text-[11.5px] font-mono text-white/35 hover:text-aurionTeal-glow transition-colors text-left leading-snug"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Presence column */}
          <div className="md:col-span-3 space-y-4">
            <div className="text-[9.5px] font-mono uppercase tracking-[0.22em] text-white/40 font-bold mb-4">Regional Presence</div>
            <div className="space-y-2.5">
              {[
                { dot: true, text: 'Operating HQ: Cairo, Egypt' },
                { dot: false, text: 'Regional Corridors: KSA · UAE · GCC' },
              ].map(({ dot, text }) => (
                <div key={text} className="flex items-start space-x-2">
                  {dot && <span className="w-1.5 h-1.5 rounded-full bg-aurionTeal/50 mt-1.5 shrink-0" />}
                  <span className="text-[12px] font-mono text-white/35">{text}</span>
                </div>
              ))}
            </div>

            <div className="pt-3">
              <div className="text-[9.5px] font-mono text-white/25 uppercase tracking-widest mb-1.5">Confidential</div>
              <a
                href="mailto:executive@aurionadvisory.com"
                className="text-[12px] font-mono text-aurionTeal-glow hover:underline"
              >
                executive@aurionadvisory.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
        >
          <div className="text-[10.5px] font-mono text-white/18">
            © 2026 Aurion Health Advisory. All Rights Reserved.
          </div>
          <div className="flex items-center space-x-3 text-[9.5px] font-mono font-bold tracking-[0.20em] text-aurionTeal/60 uppercase">
            <span>Strategy</span>
            <span className="text-aurionTeal/25">·</span>
            <span>Transformation</span>
            <span className="text-aurionTeal/25">·</span>
            <span>Impact</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
