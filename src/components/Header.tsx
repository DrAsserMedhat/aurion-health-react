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
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-40 h-20 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/85 backdrop-blur-xl border-b border-white/10 shadow-2xl' 
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto h-full px-6 sm:px-8 flex items-center justify-between">
        
        {/* Large Logo */}
        <a href="#" className="flex items-center group">
          <img 
            src="/Aurion-Logo.png" 
            alt="Aurion Health Advisory" 
            className="h-16 sm:h-[72px] md:h-[76px] w-auto object-contain transition-transform duration-300 group-hover:scale-105 drop-shadow-md"
            onError={(e) => {
              const target = e.currentTarget;
              target.src = 'https://drassermedhat.github.io/AurionHealth/Aurion-Logo.png';
            }}
          />
        </a>

        {/* Navigation Links with Capabilities Mega Dropdown */}
        <div className="hidden lg:flex items-center space-x-8 text-xs font-semibold uppercase tracking-widest text-slate-300 font-mono">
          <a href="#about" className="hover:text-aurionTeal-vibrant transition-colors">About</a>
          
          {/* Capabilities Dropdown */}
          <div className="relative group py-6">
            <a href="#capabilities" className="flex items-center space-x-1 hover:text-aurionTeal-vibrant transition-colors cursor-pointer">
              <span>Capabilities</span>
              <ChevronDown className="w-3.5 h-3.5 transition-transform group-hover:rotate-180 text-slate-400" />
            </a>

            {/* Dropdown Panel */}
            <div className="dropdown-menu absolute top-full left-1/2 -translate-x-1/2 w-[560px] bg-canvasPure border border-canvasBorder rounded-2xl shadow-2xl p-5 grid grid-cols-2 gap-3 z-50">
              
              <button 
                onClick={() => onOpenDrawer('ips')} 
                className="col-span-2 text-left p-3.5 rounded-xl bg-aurionTeal-light/40 border border-aurionTeal/25 hover:bg-aurionTeal-light transition-all flex items-start space-x-3"
              >
                <span className="w-8 h-8 rounded-lg bg-aurionTeal text-white flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                  <PlaneTakeoff className="w-4 h-4" />
                </span>
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs font-bold text-ink font-sans">International Patient Services</span>
                    <span className="text-[9px] font-mono text-aurionGold font-bold uppercase">★ Flagship</span>
                  </div>
                  <span className="block text-[11px] text-inkDim mt-0.5 font-sans">Bilateral referral corridors & digital Second Medical Opinion networks</span>
                </div>
              </button>

              <button 
                onClick={() => onOpenDrawer('strategy')} 
                className="text-left p-2.5 rounded-xl hover:bg-canvasSubtle transition-all flex items-start space-x-2.5"
              >
                <span className="w-7 h-7 rounded-lg bg-aurionTeal-light text-aurionTeal flex items-center justify-center shrink-0 mt-0.5">
                  <TrendingUp className="w-3.5 h-3.5" />
                </span>
                <div>
                  <span className="block text-xs font-bold text-ink font-sans">Strategy & Transformation</span>
                  <span className="block text-[11px] text-inkDim font-sans">Target operating models & governance</span>
                </div>
              </button>

              <button 
                onClick={() => onOpenDrawer('ops')} 
                className="text-left p-2.5 rounded-xl hover:bg-canvasSubtle transition-all flex items-start space-x-2.5"
              >
                <span className="w-7 h-7 rounded-lg bg-aurionTeal-light text-aurionTeal flex items-center justify-center shrink-0 mt-0.5">
                  <Activity className="w-3.5 h-3.5" />
                </span>
                <div>
                  <span className="block text-xs font-bold text-ink font-sans">Operational Turnaround</span>
                  <span className="block text-[11px] text-inkDim font-sans">Surgical suite & ED throughput velocity</span>
                </div>
              </button>

              <button 
                onClick={() => onOpenDrawer('spaces')} 
                className="text-left p-2.5 rounded-xl hover:bg-canvasSubtle transition-all flex items-start space-x-2.5"
              >
                <span className="w-7 h-7 rounded-lg bg-aurionTeal-light text-aurionTeal flex items-center justify-center shrink-0 mt-0.5">
                  <Gem className="w-3.5 h-3.5" />
                </span>
                <div>
                  <span className="block text-xs font-bold text-ink font-sans">Elite Aesthetics & Wellness Design</span>
                  <span className="block text-[11px] text-inkDim font-sans">Luxury clinic spatial architecture</span>
                </div>
              </button>

              <button 
                onClick={() => onOpenDrawer('events')} 
                className="text-left p-2.5 rounded-xl hover:bg-canvasSubtle transition-all flex items-start space-x-2.5"
              >
                <span className="w-7 h-7 rounded-lg bg-aurionTeal-light text-aurionTeal flex items-center justify-center shrink-0 mt-0.5">
                  <Award className="w-3.5 h-3.5" />
                </span>
                <div>
                  <span className="block text-xs font-bold text-ink font-sans">Mega Events Management</span>
                  <span className="block text-[11px] text-inkDim font-sans">Scientific agenda curation & expos</span>
                </div>
              </button>

              <div className="col-span-2 pt-2 border-t border-canvasBorder flex items-center justify-between text-[11px] font-mono">
                <span className="text-inkDim">Direct partner stewardship</span>
                <button 
                  onClick={() => onOpenDrawer('all')} 
                  className="text-aurionTeal font-bold hover:underline flex items-center space-x-1"
                >
                  <span>View All 8 Capabilities</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          </div>

          <a href="#approach" className="hover:text-aurionTeal-vibrant transition-colors">Approach</a>
          <a href="#sectors" className="hover:text-aurionTeal-vibrant transition-colors">Sectors</a>
          <a href="#mandates" className="hover:text-aurionTeal-vibrant transition-colors">Mandates</a>
          <a href="#leadership" className="hover:text-aurionTeal-vibrant transition-colors">Leadership</a>
        </div>

        {/* Header CTA Button: Schedule a Consultation */}
        <div className="hidden sm:flex items-center space-x-4">
          <button
            onClick={onOpenContact}
            className="px-5 py-2.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider text-noir bg-gradient-to-r from-aurionTeal-vibrant to-aurionTeal-glow hover:brightness-110 shadow-glow-teal transition-all"
          >
            Schedule a Consultation
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Navigation" 
          className="lg:hidden text-white hover:text-aurionTeal-vibrant focus:outline-none"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-black/95 backdrop-blur-xl border-b border-white/10 px-6 py-6 space-y-4 shadow-xl">
          <a href="#about" onClick={() => setMobileMenuOpen(false)} className="block text-xs uppercase tracking-widest text-white font-semibold hover:text-aurionTeal-vibrant">About</a>
          <a href="#capabilities" onClick={() => setMobileMenuOpen(false)} className="block text-xs uppercase tracking-widest text-white font-semibold hover:text-aurionTeal-vibrant">Capabilities</a>
          <a href="#approach" onClick={() => setMobileMenuOpen(false)} className="block text-xs uppercase tracking-widest text-white font-semibold hover:text-aurionTeal-vibrant">Approach</a>
          <a href="#sectors" onClick={() => setMobileMenuOpen(false)} className="block text-xs uppercase tracking-widest text-white font-semibold hover:text-aurionTeal-vibrant">Sectors</a>
          <a href="#mandates" onClick={() => setMobileMenuOpen(false)} className="block text-xs uppercase tracking-widest text-white font-semibold hover:text-aurionTeal-vibrant">Mandates</a>
          <a href="#leadership" onClick={() => setMobileMenuOpen(false)} className="block text-xs uppercase tracking-widest text-white font-semibold hover:text-aurionTeal-vibrant">Leadership</a>
          <button 
            onClick={() => { setMobileMenuOpen(false); onOpenContact(); }}
            className="w-full text-center py-3 rounded-full text-xs font-mono font-bold uppercase text-noir bg-aurionTeal-vibrant mt-4"
          >
            Schedule a Consultation
          </button>
        </div>
      )}
    </nav>
  );
};
