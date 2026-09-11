import { Compass, GitMerge, Zap, Award } from 'lucide-react';

const phases = [
  {
    num: 'I',
    phase: 'Phase 01',
    icon: Compass,
    title: 'Diagnose & Align',
    desc: 'Rapid, evidence-based diagnostic sprints engaging board chairs, medical directors, and finance leads to isolate systemic bottlenecks and quantify growth opportunities.',
    deliverable: 'Diagnostic Memo & Audit',
  },
  {
    num: 'II',
    phase: 'Phase 02',
    icon: GitMerge,
    title: 'Architect & Plan',
    desc: 'Formulating board-ready target operating models, cross-border corridor pathways, or spatial designs with phased, actionable 18-24 month execution roadmaps.',
    deliverable: 'Board Strategy Blueprint',
  },
  {
    num: 'III',
    phase: 'Phase 03',
    icon: Zap,
    title: 'Mobilize & Execute',
    desc: 'Direct partner oversight of PMO cadence, clinical SOP adoption, vendor alignment, and bilateral government/payer agreements to drive sustained velocity.',
    deliverable: 'PMO & Governance Cadence',
  },
  {
    num: 'IV',
    phase: 'Phase 04',
    icon: Award,
    title: 'Realize & Sustain',
    desc: 'Tracking realized clinical throughput, foreign patient revenue, and operational velocity against baseline KPIs, transferring internal capabilities to client leadership.',
    deliverable: 'Benefits Realization & Handover',
  },
];

export const Approach: React.FC = () => {
  return (
    <section id="approach" className="bg-[#050809] border-b border-white/[0.06] py-24 relative overflow-hidden">

      {/* Background texture */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: 'linear-gradient(to right, rgba(79,178,196,0.025) 1px, transparent 1px), linear-gradient(to bottom, rgba(79,178,196,0.025) 1px, transparent 1px)',
        backgroundSize: '80px 80px',
      }} />

      {/* Ambient glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-aurionTeal/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8">

        {/* Section header */}
        <div className="max-w-3xl mb-16">
          <div className="section-label-dark mb-4">Delivery Framework</div>
          <h2 className="font-cormorant text-[36px] sm:text-[52px] font-bold text-white tracking-tight leading-[1.02]">
            How We Partner
          </h2>
          <div className="w-12 h-px mt-5 mb-5" style={{ background: 'linear-gradient(to right, #4FB2C4, rgba(79,178,196,0.2))' }} />
          <p className="text-white/45 text-[14px] sm:text-[15px] leading-[1.80] font-sans">
            A disciplined, four-phase engagement framework designed to translate high-level boardroom vision into measurable clinical and financial reality.
          </p>
        </div>

        {/* Timeline grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
          {phases.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div
                key={idx}
                className="relative executive-card-dark rounded-2xl p-8 flex flex-col"
                style={{ minHeight: '320px' }}
              >
                {/* Phase connector line (between cards, desktop only) */}
                {idx < phases.length - 1 && (
                  <div className="hidden md:block phase-connector" />
                )}

                {/* Large display number */}
                <div
                  className="display-number text-[80px] sm:text-[90px] absolute top-4 right-5 pointer-events-none select-none leading-none"
                  style={{ color: 'rgba(79, 178, 196, 0.10)' }}
                >
                  {p.num}
                </div>

                <div className="relative z-10 flex flex-col h-full">
                  {/* Top: phase label + icon */}
                  <div className="flex items-center space-x-3 mb-7">
                    <div className="w-9 h-9 rounded-xl border border-aurionTeal/30 bg-aurionTeal/8 text-aurionTeal flex items-center justify-center">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="font-mono text-[9.5px] text-aurionTeal/60 font-bold uppercase tracking-[0.20em]">{p.phase}</span>
                  </div>

                  {/* Title */}
                  <h3 className="font-cormorant text-[20px] sm:text-[22px] font-bold text-white leading-tight mb-3">
                    {p.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[12.5px] text-white/45 leading-[1.75] font-sans flex-1">
                    {p.desc}
                  </p>

                  {/* Deliverable */}
                  <div className="mt-7 pt-5 border-t border-white/[0.08]">
                    <div className="inline-flex items-center space-x-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-aurionTeal shrink-0" />
                      <span className="text-[10.5px] font-mono text-aurionTeal font-bold tracking-wide">{p.deliverable}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom note */}
        <div className="mt-10 flex items-center justify-center">
          <span className="text-[10px] font-mono text-white/20 uppercase tracking-[0.20em]">
            Founder-Led · Partner-Delivered · Evidence-Based
          </span>
        </div>

      </div>
    </section>
  );
};
