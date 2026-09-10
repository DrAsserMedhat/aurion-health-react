import { X, Check } from 'lucide-react';
import { PRACTICES } from '../data/practices';

interface PracticeDrawerProps {
  drawerOpenId: string | null;
  onClose: () => void;
}

export const PracticeDrawer: React.FC<PracticeDrawerProps> = ({ drawerOpenId, onClose }) => {
  if (!drawerOpenId) return null;

  const currentPractice = PRACTICES.find(p => p.id === drawerOpenId);
  const isAll = drawerOpenId === 'all';

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        onClick={onClose}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
      />

      {/* Slide-out Drawer */}
      <div className="fixed top-0 right-0 z-50 h-full w-full max-w-xl bg-canvasPure border-l border-canvasBorder shadow-2xl flex flex-col justify-between overflow-hidden">
        
        {/* Header */}
        <div className="p-6 border-b border-canvasBorder bg-canvas flex items-center justify-between">
          <div>
            <span className="text-[10px] font-mono text-aurionTeal font-bold tracking-widest uppercase">
              {isAll ? 'Full Directory' : 'Practice Details'}
            </span>
            <h3 className="font-serif text-xl font-bold text-ink mt-0.5">
              {isAll ? 'Canonical Practice Directory (8 Disciplines)' : (currentPractice ? currentPractice.title : 'Practice Portfolio')}
            </h3>
          </div>
          <button 
            onClick={onClose} 
            className="p-2 rounded-xl text-inkDim hover:text-ink hover:bg-canvasSubtle transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6">
          {isAll ? (
            <div className="space-y-6">
              {PRACTICES.map((p) => (
                <div key={p.id} className="p-5 rounded-2xl bg-canvas border border-canvasBorder space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-aurionTeal font-bold uppercase">{p.num} · {p.tag}</span>
                    <span className="text-[11px] font-mono text-inkDim">{p.lead}</span>
                  </div>
                  <h4 className="font-serif font-bold text-base text-ink">{p.title}</h4>
                  <p className="text-xs text-inkMuted leading-relaxed">{p.overview}</p>
                  <div className="pt-2 border-t border-canvasBorder">
                    <span className="text-[10px] font-mono uppercase text-inkDim block font-bold">Target Outcome</span>
                    <p className="text-xs font-semibold text-aurionTeal mt-0.5">{p.impact}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : currentPractice ? (
            <div className="space-y-6">
              <div className="p-4 rounded-2xl bg-aurionTeal-light/50 border border-aurionTeal/30">
                <span className="text-xs font-mono font-bold text-aurionTeal uppercase block">{currentPractice.tag}</span>
                <span className="text-xs font-mono text-inkDim block mt-1">{currentPractice.lead}</span>
              </div>

              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-ink font-bold mb-2">Practice Overview</h4>
                <p className="text-sm text-inkMuted leading-relaxed">{currentPractice.overview}</p>
              </div>

              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-ink font-bold mb-3">Core Deliverables & Focus Areas</h4>
                <div className="space-y-2.5">
                  {currentPractice.deliverables.map((d, idx) => (
                    <div key={idx} className="flex items-start space-x-2.5 text-xs sm:text-sm text-ink">
                      <Check className="w-4 h-4 text-aurionTeal shrink-0 mt-0.5" />
                      <span>{d}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-canvas border border-canvasBorder">
                <span className="text-[10px] font-mono uppercase text-inkDim block font-bold">Target Institutional Outcome</span>
                <p className="text-xs font-semibold text-aurionTeal mt-1">{currentPractice.impact}</p>
              </div>
            </div>
          ) : null}
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-canvasBorder bg-canvas flex items-center justify-between">
          <span className="text-xs text-inkDim font-mono">Direct partner stewardship</span>
          <a 
            href="#contact" 
            onClick={onClose} 
            className="px-5 py-2.5 rounded-full bg-aurionTeal text-white font-bold font-mono text-xs hover:bg-aurionTeal-dark transition-all"
          >
            Schedule Consultation
          </a>
        </div>

      </div>
    </div>
  );
};
