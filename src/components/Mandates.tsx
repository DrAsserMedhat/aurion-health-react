import { TrendingUp, Plane, Gem } from 'lucide-react';

const mandates = [
  {
    num: '01',
    Icon: TrendingUp,
    category: 'Strategy & TOM',
    scope: '18–24 Mo Scope',
    scopeDark: false,
    title: 'Strategic Transformation for a Multi-Site Hospital Network',
    context: 'Comprehensive diagnostic sprint pressure-testing clinical service-line profitability across three facilities ahead of institutional capital expansion.',
    outcome: 'Board-aligned 24-month roadmap & validated investment business case.',
  },
  {
    num: '02',
    Icon: Plane,
    category: 'Medical Tourism',
    scope: 'Bilateral Corridor',
    scopeDark: true,
    title: 'Turnkey International Patient Department & SMO Gateway',
    context: 'Structuring inbound patient travel corridors, cross-border payer contracting, and a digital Second Medical Opinion triage network.',
    outcome: 'Active regional referral channel & foreign-currency revenue capture.',
  },
  {
    num: '03',
    Icon: Gem,
    category: 'Prestige Architecture',
    scope: '5-Star Luxury',
    scopeDark: false,
    title: 'Prestige Aesthetics & Wellness Clinic Architecture',
    context: 'Concept feasibility, interior spatial direction, and concierge workflow curation fusing accredited infection control with five-star hospitality.',
    outcome: 'Launch-ready flagship facility commanding top-tier private-pay margins.',
  },
];

export const Mandates: React.FC = () => {
  return (
    <section id="mandates" className="bg-[#070A0C] border-b border-white/[0.06] py-24 relative overflow-hidden">

      {/* Background grid */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: 'linear-gradient(to right, rgba(79,178,196,0.02) 1px, transparent 1px), linear-gradient(to bottom, rgba(79,178,196,0.02) 1px, transparent 1px)',
        backgroundSize: '80px 80px',
      }} />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-aurionTeal/4 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8">

        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-2xl">
            <div className="section-label-dark mb-4">Illustrative Scenarios</div>
            <h2 className="font-cormorant text-[34px] sm:text-[50px] font-bold text-white tracking-tight leading-[1.04]">
              How We'd Approach a Mandate
            </h2>
            <div className="w-12 h-px mt-5 mb-5" style={{ background: 'linear-gradient(to right, #4FB2C4, rgba(79,178,196,0.2))' }} />
            <p className="text-white/40 text-[13.5px] sm:text-[14.5px] leading-[1.80] font-sans max-w-xl">
              Illustrative scenarios only — not completed engagements — showing how our senior-only advisory approach translates strategic ambition into institutional performance.
            </p>
          </div>
          <div className="shrink-0 hidden md:block">
            <span className="font-cinzel text-[80px] font-light leading-none" style={{ color: 'rgba(79, 178, 196, 0.10)' }}>03</span>
          </div>
        </div>

        {/* Mandate cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {mandates.map((m, idx) => {
            const Icon = m.Icon;
            return (
              <div key={idx} className="mandate-card p-8 flex flex-col justify-between relative overflow-hidden group">

                {/* Large background number */}
                <div
                  className="absolute bottom-4 right-5 font-cinzel font-light leading-none select-none pointer-events-none"
                  style={{ fontSize: '100px', color: 'rgba(79, 178, 196, 0.07)' }}
                >
                  {m.num}
                </div>

                <div className="relative z-10">
                  {/* Top row: category + scope */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-2 text-[10px] font-mono font-bold text-aurionTeal uppercase tracking-wider">
                      <Icon className="w-3.5 h-3.5" />
                      <span>{m.category}</span>
                    </div>
                    <span className={`px-2.5 py-1 rounded-full text-[9.5px] font-mono font-bold ${
                      m.scopeDark
                        ? 'bg-aurionTeal/15 text-aurionTeal-glow border border-aurionTeal/20'
                        : 'bg-white/5 text-white/40 border border-white/10'
                    }`}>
                      {m.scope}
                    </span>
                  </div>

                  {/* Teal rule */}
                  <div className="w-8 h-px bg-aurionTeal/30 mb-5" />

                  {/* Title */}
                  <h3 className="font-cormorant text-[20px] sm:text-[22px] font-bold text-white leading-[1.25] mb-4">
                    {m.title}
                  </h3>

                  {/* Context */}
                  <p className="text-[12.5px] text-white/40 leading-[1.75] font-sans">
                    {m.context}
                  </p>
                </div>

                {/* Outcome footer */}
                <div className="relative z-10 mt-8 pt-6 border-t border-white/[0.08]">
                  <div className="text-[9.5px] font-mono text-aurionTeal font-bold uppercase tracking-widest mb-2">Target Outcome</div>
                  <p className="text-[12.5px] text-white/70 font-sans font-medium leading-snug">{m.outcome}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom note */}
        <div className="mt-8 text-center">
          <span className="text-[10px] font-mono text-white/18 uppercase tracking-[0.20em]">
            Illustrative · Not Client Testimonials · Scenarios Represent Aurion's Advisory Methodology
          </span>
        </div>

      </div>
    </section>
  );
};
