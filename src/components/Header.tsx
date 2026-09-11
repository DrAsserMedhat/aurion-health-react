import { useState, useEffect } from 'react';
import { ChevronDown, Menu, X, PlaneTakeoff, TrendingUp, Activity, Gem, Award, ArrowRight } from 'lucide-react';

interface HeaderProps {
  onOpenDrawer: (practiceId: string) => void;
  onOpenContact: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenDrawer, onOpenContact }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Teal accent line — visible always at top of viewport */}
      <div
        className="fixed top-0 left-0 right-0 z-50 h-[2px] pointer-events-none"
        style={{
          background: 'linear-gradient(to right, transparent 0%, #1B8A9E 20%, #4FB2C4 50%, #1B8A9E 80%, transparent 100%)',
          opacity: isScrolled ? 1 : 0.6,
          transition: 'opacity 0.4s ease',
        }}
      />

      <nav
        className={`fixed top-[2px] left-0 right-0 z-40 h-[72px] transition-all duration-400 ${
          isScrolled
            ? 'bg-black/90 backdrop-blur-2xl border-b border-white/[0.07] shadow-[0_4px_32px_rgba(0,0,0,0.5)]'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto h-full px-6 sm:px-8 flex items-center justify-between">

          {/* Logo */}
          <a href="#" className="flex items-center group shrink-0">
            <img
              src="/Aurion-Logo.svg"
              alt="Aurion Health Advisory"
              className="h-[58px] sm:h-[65px] md:h-[68px] w-auto object-contain transition-all duration-300 group-hover:scale-[1.03]"
              onError={(e) => {
                const t = e.currentTarget;
                if (!t.src.includes('AurionHealth')) t.src = '/Aurion-Logo.png';
              }}
            />
          </a>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center space-x-7 text-[10.5px] font-mono font-semibold uppercase tracking-[0.15em] text-white/70">
            <a
              href="#about"
              className="hover:text-aurionTeal-glow transition-colors duration-200 hover:tracking-[0.18em]"
            >
              About
            </a>

            {/* Capabilities Dropdown */}
            <div className="relative group py-5">
              <a
                href="#capabilities"
                className="flex items-center space-x-1.5 hover:text-aurionTeal-glow transition-colors duration-200 cursor-pointer"
              >
                <span>Capabilities</span>
                <ChevronDown className="w-3 h-3 transition-transform group-hover:rotate-180 text-white/40" />
              </a>

              {/* Dropdown Panel */}
              <div className="dropdown-menu absolute top-full left-1/2 -translate-x-1/2 w-[580px] bg-black/95 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.7)] p-5 grid grid-cols-2 gap-2.5 z-50">

                {/* Flagship */}
                <button
                  onClick={() => onOpenDrawer('ips')}
                  className="col-span-2 text-left p-3.5 rounded-xl bg-aurionTeal-deep/40 border border-aurionTeal/20 hover:border-aurionTeal/50 hover:bg-aurionTeal-deep/60 transition-all flex items-start space-x-3 group/item"
                >
                  <span className="w-8 h-8 rounded-lg bg-aurionTeal text-white flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                    <PlaneTakeoff className="w-4 h-4" />
                  </span>
                  <div>
                    <div className="flex items-center space-x-2">
                      <span className="text-[11px] font-bold text-white font-sans">International Patient Services</span>
                      <span className="text-[9px] font-mono text-aurionGold font-bold uppercase">★ Flagship</span>
                    </div>
                    <span className="block text-[11px] text-white/50 font-sans mt-0.5">Bilateral corridors · Digital SMO networks</span>
                  </div>
                </button>

                {[
                  { id: 'strategy', icon: TrendingUp, label: 'Strategy & Transformation', sub: 'Target Operating Models' },
                  { id: 'ops', icon: Activity, label: 'Operations & Turnaround', sub: 'Clinical velocity & efficiency' },
                  { id: 'spaces', icon: Gem, label: 'Elite Aesthetics & Wellness', sub: 'Five-star clinical design' },
                  { id: 'events', icon: Award, label: 'Mega Events Management', sub: 'Scientific agenda & expos' },
                ].map(item => (
                  <button
                    key={item.id}
                    onClick={() => onOpenDrawer(item.id)}
                    className="text-left p-3 rounded-xl border border-white/[0.06] hover:border-aurionTeal/30 hover:bg-aurionTeal/5 transition-all flex items-start space-x-2.5"
                  >
                    <span className="w-7 h-7 rounded-lg bg-white/[0.06] text-aurionTeal flex items-center justify-center shrink-0 mt-0.5">
                      <item.icon className="w-3.5 h-3.5" />
                    </span>
                    <div>
                      <span className="block text-[11px] font-bold text-white font-sans leading-snug">{item.label}</span>
                      <span className="block text-[10px] text-white/40 font-sans">{item.sub}</span>
                    </div>
                  </button>
                ))}

                <div className="col-span-2 pt-2 mt-0.5 border-t border-white/[0.07] flex items-center justify-between text-[10.5px] font-mono">
                  <span className="text-white/35">Direct partner stewardship</span>
                  <button
                    onClick={() => onOpenDrawer('all')}
                    className="text-aurionTeal-glow font-bold hover:underline flex items-center space-x-1"
                  >
                    <span>View All 8 Capabilities</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>

            <a href="#approach" className="hover:text-aurionTeal-glow transition-colors duration-200">Approach</a>
            <a href="#sectors" className="hover:text-aurionTeal-glow transition-colors duration-200">Sectors</a>
            <a href="#mandates" className="hover:text-aurionTeal-glow transition-colors duration-200">Mandates</a>
            <a href="#leadership" className="hover:text-aurionTeal-glow transition-colors duration-200">Leadership</a>
          </div>

          {/* CTA */}
          <div className="hidden sm:flex items-center space-x-3">
            <button
              onClick={onOpenContact}
              className="px-5 py-2.5 rounded-full text-[10.5px] font-mono font-bold uppercase tracking-[0.12em] text-white transition-all duration-300"
              style={{
                background: 'linear-gradient(135deg, #1B8A9E 0%, #126673 100%)',
                boxShadow: '0 0 20px rgba(27, 138, 158, 0.25)',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 0 32px rgba(27, 138, 158, 0.50)';
                (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(-1px)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 0 20px rgba(27, 138, 158, 0.25)';
                (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(0)';
              }}
            >
              Schedule a Consultation
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden text-white/70 hover:text-white transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-black/97 backdrop-blur-2xl border-b border-white/10 px-6 py-6 space-y-4 shadow-2xl">
            {['About', 'Capabilities', 'Approach', 'Sectors', 'Mandates', 'Leadership'].map(item => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block text-[11px] uppercase tracking-widest text-white/70 font-semibold font-mono hover:text-aurionTeal-glow transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <button
              onClick={() => { onOpenContact(); setMobileMenuOpen(false); }}
              className="block w-full text-center py-3 rounded-full text-[11px] font-mono font-bold uppercase tracking-wider text-white mt-4"
              style={{ background: 'linear-gradient(135deg, #1B8A9E, #126673)' }}
            >
              Schedule a Consultation
            </button>
          </div>
        )}
      </nav>
    </>
  );
};
