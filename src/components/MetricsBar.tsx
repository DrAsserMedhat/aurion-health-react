import { Stethoscope, PlaneTakeoff, Layers, TrendingUp } from 'lucide-react';

const proofs = [
  {
    icon: Stethoscope,
    label: 'Clinically Informed',
    headline: 'Healthcare Expertise',
    copy: 'Senior advisory grounded in clinical, operational, and institutional reality.',
    stat: '16+',
    statLabel: 'Years in Practice',
  },
  {
    icon: PlaneTakeoff,
    label: 'Cross-Border',
    headline: 'Egypt ↔ GCC',
    copy: 'Structured international patient pathways and cross-border partnerships.',
    stat: '115+',
    statLabel: 'Source Countries',
  },
  {
    icon: Layers,
    label: 'Integrated',
    headline: '8 Core Capabilities',
    copy: 'Strategy, operations, digital health, and commercial growth as one agenda.',
    stat: '08',
    statLabel: 'Disciplines',
  },
  {
    icon: TrendingUp,
    label: 'Performance',
    headline: 'Execution That Moves',
    copy: 'Turning strategic priorities into measurable clinical and financial performance.',
    stat: '24h',
    statLabel: 'Partner Response',
  },
];

export const MetricsBar: React.FC = () => {
  return (
    <section className="bg-[#080B0C] border-b border-white/[0.06] py-14 relative overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-aurionTeal-deep/20 via-transparent to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8">

        {/* Section header */}
        <div className="mb-10 flex items-center justify-between">
          <div className="section-label-dark">Proof of Practice</div>
          <div className="hidden sm:block h-px flex-1 mx-8" style={{ background: 'linear-gradient(to right, rgba(79,178,196,0.20), transparent)' }} />
          <div className="hidden sm:block text-[10px] font-mono text-white/25 tracking-widest uppercase">Founded · Cairo · Egypt</div>
        </div>

        {/* 4-column strip */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.04] rounded-2xl overflow-hidden border border-white/[0.06]">
          {proofs.map((p, i) => {
            const Icon = p.icon;
            return (
              <div
                key={i}
                className="relative bg-[#080B0C] p-8 flex flex-col justify-between group hover:bg-[#0E1416] transition-colors duration-300"
              >
                {/* Top row: icon + label */}
                <div>
                  <div className="flex items-center space-x-2.5 mb-6">
                    <div className="w-8 h-8 rounded-lg bg-aurionTeal/10 border border-aurionTeal/20 flex items-center justify-center text-aurionTeal group-hover:bg-aurionTeal/18 transition-colors">
                      <Icon className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-[9.5px] font-mono uppercase tracking-[0.20em] text-aurionTeal font-bold">{p.label}</span>
                  </div>

                  {/* Large stat */}
                  <div
                    className="font-cinzel text-[44px] leading-none font-light mb-1"
                    style={{ color: 'rgba(79, 178, 196, 0.60)' }}
                  >
                    {p.stat}
                  </div>
                  <div className="text-[10px] font-mono text-white/30 uppercase tracking-widest mb-5">{p.statLabel}</div>

                  {/* Thin rule */}
                  <div className="w-8 h-px bg-aurionTeal/30 mb-5" />

                  {/* Serif title */}
                  <div className="font-cormorant text-lg font-semibold text-white leading-tight mb-2">
                    {p.headline}
                  </div>
                  <p className="text-[11.5px] text-white/40 leading-relaxed font-sans">
                    {p.copy}
                  </p>
                </div>

                {/* Bottom teal accent on hover */}
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-aurionTeal/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
