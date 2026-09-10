import { ArrowRight } from 'lucide-react';

export const Sectors: React.FC = () => {
  const sectors = [
    {
      num: "Sector 01",
      tag: "Hospital Networks",
      title: "Private Hospital Groups",
      image: "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?auto=format&fit=crop&w=600&q=80",
      desc: "Multi-facility operators addressing inpatient volume stabilization, clinical throughput bottlenecks, and cross-border patient acquisition.",
      target: "Target: CEO / COO / Board"
    },
    {
      num: "Sector 02",
      tag: "Public Reform",
      title: "Sovereign Health Entities",
      image: "/sector-sovereign-health.jpg",
      fallback: "https://drassermedhat.github.io/AurionHealth/sector-sovereign-health.jpg",
      desc: "Government health bodies and reform offices requiring specialized, agile advisors to execute national healthcare delivery milestones.",
      target: "Target: Program Leads / Ministry"
    },
    {
      num: "Sector 03",
      tag: "Private Equity",
      title: "Healthcare Investors & PE",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80",
      desc: "Infrastructure funds and private equity firms conducting clinical-commercial due diligence, asset turnaround, and post-merger integration.",
      target: "Target: Investment Partners"
    },
    {
      num: "Sector 04",
      tag: "Prestige Wellness",
      title: "Aesthetic & Longevity Clinics",
      image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=600&q=80",
      desc: "High-tier wellness and elective medical clinics requiring five-star patient journey design paired with accredited clinical governance.",
      target: "Target: Clinic Owners & Medical Leads"
    }
  ];

  return (
    <section id="sectors" className="py-24 bg-canvasPure border-b border-canvasBorder relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        <div className="max-w-3xl mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 text-[10px] font-mono uppercase tracking-widest text-aurionTeal font-bold">
            <span className="w-1.5 h-1.5 rounded-full bg-aurionTeal"></span>
            <span>Institutional Sectors</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-ink tracking-tight">
            Advising Healthcare Decision-Makers
          </h2>
          <p className="text-inkMuted text-sm sm:text-base leading-relaxed pt-1">
            We operate at the convergence of clinical authority, institutional capital, and health policy across Egypt and the GCC.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {sectors.map((s, idx) => (
            <div 
              key={idx} 
              className="rounded-3xl bg-canvas border border-canvasBorder hover:border-aurionTeal/40 transition-all shadow-sm overflow-hidden flex flex-col justify-between group"
            >
              <div className="h-36 overflow-hidden relative">
                <img 
                  src={s.image} 
                  alt={s.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                  onError={(e) => {
                    if (s.fallback) e.currentTarget.src = s.fallback;
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent"></div>
                <div className="absolute bottom-2 left-3 text-white text-xs font-mono font-bold uppercase">
                  {s.tag}
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-base font-bold text-ink mb-2 font-serif">{s.title}</h3>
                  <p className="text-xs text-inkMuted leading-relaxed">
                    {s.desc}
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-canvasBorder text-[11px] font-mono text-aurionTeal font-semibold flex items-center justify-between">
                  <span>{s.target}</span>
                  <ArrowRight className="w-3 h-3" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
