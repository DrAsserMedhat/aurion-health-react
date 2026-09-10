import { Compass, GitMerge, Zap, Award } from 'lucide-react';

export const Approach: React.FC = () => {
  const phases = [
    {
      phase: "[ Phase I ]",
      icon: Compass,
      title: "Diagnose & Align",
      desc: "Rapid, evidence-based diagnostic sprints engaging board chairs, medical directors, and finance leads to isolate systemic bottlenecks and quantify growth opportunities.",
      deliverable: "Deliverable: Diagnostic Memo & Audit"
    },
    {
      phase: "[ Phase II ]",
      icon: GitMerge,
      title: "Architect & Plan",
      desc: "Formulating board-ready target operating models, cross-border corridor pathways, or spatial designs with phased, actionable 18-24 month execution roadmaps.",
      deliverable: "Deliverable: Board Strategy Blueprint"
    },
    {
      phase: "[ Phase III ]",
      icon: Zap,
      title: "Mobilize & Execute",
      desc: "Direct partner oversight of PMO cadence, clinical SOP adoption, vendor alignment, and bilateral government/payer agreements to drive sustained velocity.",
      deliverable: "Deliverable: PMO & Governance Cadence"
    },
    {
      phase: "[ Phase IV ]",
      icon: Award,
      title: "Realize & Sustain",
      desc: "Tracking realized clinical throughput, foreign patient revenue, and operational velocity against baseline KPIs, transferring internal capabilities to client leadership.",
      deliverable: "Deliverable: Benefits Realization & Handover"
    }
  ];

  return (
    <section id="approach" className="py-24 bg-canvas border-b border-canvasBorder relative bg-drafting-grid">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        <div className="max-w-3xl mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 text-[10px] font-mono uppercase tracking-widest text-aurionTeal font-bold">
            <span className="w-1.5 h-1.5 rounded-full bg-aurionTeal"></span>
            <span>Delivery Framework</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-ink tracking-tight">
            How We Partner
          </h2>
          <p className="text-inkMuted text-sm sm:text-base leading-relaxed pt-1">
            A disciplined, four-phase engagement framework designed to translate high-level boardroom vision into measurable clinical and financial reality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {phases.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div 
                key={idx} 
                className="p-8 rounded-3xl bg-canvasPure border border-canvasBorder shadow-sm flex flex-col justify-between group hover:border-aurionTeal/40 transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-9 h-9 rounded-xl bg-aurionTeal-light text-aurionTeal flex items-center justify-center font-bold">
                      <Icon className="w-4 h-4" />
                    </span>
                    <span className="font-mono text-xs font-bold text-inkDim uppercase tracking-wider">{p.phase}</span>
                  </div>
                  <h3 className="text-lg font-bold text-ink mb-2 font-serif">{p.title}</h3>
                  <p className="text-xs text-inkMuted leading-relaxed">
                    {p.desc}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-canvasBorder text-[11px] font-mono text-aurionTeal font-semibold">
                  {p.deliverable}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
