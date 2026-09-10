interface FooterProps {
  onOpenDrawer: (practiceId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenDrawer }) => {
  return (
    <footer className="bg-black border-t border-white/10 py-16">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-12">
          
          <div className="md:col-span-5 space-y-4">
            <a href="#" className="inline-block">
              <img 
                src="/Aurion-Logo.png" 
                alt="Aurion Health Advisory" 
                className="h-20 md:h-24 w-auto object-contain"
                onError={(e) => { e.currentTarget.src = 'https://drassermedhat.github.io/AurionHealth/Aurion-Logo.png'; }}
              />
            </a>
            <p className="text-xs text-slate-400 max-w-sm leading-relaxed mt-2 font-sans">
              The bridge between strategy and results. An elite boutique healthcare advisory practice integrating board strategy, cross-border patient corridors, and next-generation clinical ecosystems.
            </p>
          </div>

          <div className="md:col-span-4 space-y-3">
            <div className="text-xs font-mono uppercase tracking-widest text-white font-bold">Capabilities</div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-400 font-mono">
              <li><button onClick={() => onOpenDrawer('ips')} className="hover:text-aurionTeal-vibrant transition-colors text-left">★ International Corridors</button></li>
              <li><button onClick={() => onOpenDrawer('strategy')} className="hover:text-aurionTeal-vibrant transition-colors text-left">Strategy & Transformation</button></li>
              <li><button onClick={() => onOpenDrawer('ops')} className="hover:text-aurionTeal-vibrant transition-colors text-left">Operations & Turnaround</button></li>
              <li><button onClick={() => onOpenDrawer('spaces')} className="hover:text-aurionTeal-vibrant transition-colors text-left">Elite Aesthetics & Wellness</button></li>
              <li><button onClick={() => onOpenDrawer('events')} className="hover:text-aurionTeal-vibrant transition-colors text-left">Mega Events Management</button></li>
              <li><button onClick={() => onOpenDrawer('digital')} className="hover:text-aurionTeal-vibrant transition-colors text-left">Digital Health Informatics</button></li>
              <li><button onClick={() => onOpenDrawer('commercial')} className="hover:text-aurionTeal-vibrant transition-colors text-left">Business Development, Brand</button></li>
              <li><button onClick={() => onOpenDrawer('pmo')} className="hover:text-aurionTeal-vibrant transition-colors text-left">Healthcare Project Management</button></li>
            </ul>
          </div>

          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-mono uppercase tracking-widest text-white font-bold">Regional Presence</div>
            <p className="text-xs text-slate-400 leading-relaxed font-mono">
              Operating Headquarters: Cairo, Egypt.<br />
              Regional Corridors: Saudi Arabia, UAE & GCC.
            </p>
            <div className="pt-2 text-xs font-mono text-aurionTeal-vibrant font-semibold">
              Confidential: <span className="text-white">executive@aurionadvisory.com</span>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-slate-400 gap-4">
          <div>
            © 2026 Aurion Health Advisory. All Rights Reserved.
          </div>
          <div className="flex items-center space-x-3 text-aurionTeal-vibrant font-bold tracking-widest">
            <span>STRATEGY</span>
            <span>•</span>
            <span>TRANSFORMATION</span>
            <span>•</span>
            <span>IMPACT</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
