import { ArrowRight } from 'lucide-react';

const sectors = [
  {
    num: '01',
    tag: 'Hospital Networks',
    title: 'Private Hospital Groups',
    image: 'https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?auto=format&fit=crop&w=800&q=80',
    desc: 'Multi-facility operators addressing inpatient volume stabilization, clinical throughput bottlenecks, and cross-border patient acquisition.',
    target: 'CEO / COO / Board',
  },
  {
    num: '02',
    tag: 'Public Reform',
    title: 'Sovereign Health Entities',
    image: '/sector-sovereign-health.jpg',
    fallback: 'https://drassermedhat.github.io/AurionHealth/sector-sovereign-health.jpg',
    desc: 'Government health bodies and reform offices requiring specialized, agile advisors to execute national healthcare delivery milestones.',
    target: 'Program Leads / Ministry',
  },
  {
    num: '03',
    tag: 'Private Equity',
    title: 'Healthcare Investors & PE',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
    desc: 'Infrastructure funds and private equity firms conducting clinical-commercial due diligence, asset turnaround, and post-merger integration.',
    target: 'Investment Partners',
  },
  {
    num: '04',
    tag: 'Prestige Wellness',
    title: 'Aesthetic & Longevity Clinics',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80',
    desc: 'High-tier wellness and elective medical clinics requiring five-star patient journey design paired with accredited clinical governance.',
    target: 'Clinic Owners & Medical Leads',
  },
];

export const Sectors: React.FC = () => {
  return (
    <section id="sectors" className="bg-[#F8F9FB] border-b border-canvasBorder py-24 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">

        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-2xl">
            <div className="section-label mb-4">Institutional Sectors</div>
            <h2 className="font-cormorant text-[34px] sm:text-[48px] font-bold text-ink tracking-tight leading-[1.05]">
              Advising Healthcare Decision-Makers
            </h2>
            <div className="teal-rule mt-4 mb-4" />
            <p className="text-inkMuted text-[14px] sm:text-[15px] leading-[1.75] font-sans max-w-xl">
              We operate at the convergence of clinical authority, institutional capital, and health policy across Egypt and the GCC.
            </p>
          </div>
          <div className="shrink-0">
            <span className="font-cinzel text-[72px] font-light leading-none" style={{ color: 'rgba(27, 138, 158, 0.12)' }}>04</span>
          </div>
        </div>

        {/* 4 Sector cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {sectors.map((s, idx) => (
            <div key={idx} className="sector-card group flex flex-col">

              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={s.image}
                  alt={s.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  onError={(e) => {
                    if (s.fallback) e.currentTarget.src = s.fallback;
                  }}
                />
                {/* Dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/25 to-transparent" />
                {/* Number */}
                <div className="absolute top-4 left-4 font-mono text-[10px] text-white/50 font-bold tracking-widest">{s.num}</div>
                {/* Tag */}
                <div className="absolute bottom-4 left-4">
                  <span className="inline-block px-2.5 py-1 rounded-full bg-aurionTeal/90 text-white text-[9.5px] font-mono font-bold uppercase tracking-widest">
                    {s.tag}
                  </span>
                </div>
              </div>

              {/* Body */}
              <div className="p-6 flex-1 flex flex-col justify-between bg-white">
                <div>
                  <h3 className="font-cormorant text-[18px] font-bold text-ink mb-2 leading-tight">{s.title}</h3>
                  <div className="w-6 h-px bg-aurionTeal/30 mb-3" />
                  <p className="text-[12.5px] text-inkMuted leading-[1.70] font-sans">{s.desc}</p>
                </div>
                <div className="pt-5 mt-5 border-t border-canvasBorder flex items-center justify-between">
                  <div>
                    <div className="text-[9px] font-mono text-aurionTeal/70 font-bold uppercase tracking-widest mb-0.5">Target</div>
                    <div className="text-[11px] font-mono text-aurionTeal font-bold">{s.target}</div>
                  </div>
                  <div className="w-7 h-7 rounded-full border border-aurionTeal/25 text-aurionTeal flex items-center justify-center group-hover:bg-aurionTeal group-hover:text-white group-hover:border-transparent transition-all duration-300">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
