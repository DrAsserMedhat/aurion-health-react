import { useState } from 'react';
import { Compass, Quote, ShieldCheck, Crosshair, ArrowRight, ArrowLeft, Target, Microscope, Network, Globe2, Building2, Sparkles } from 'lucide-react';

export const AboutThesis: React.FC = () => {
  const [activeCharterTab, setActiveCharterTab] = useState<'vm' | 'val'>('vm');

  const values = [
    { num: '01', Icon: Target, title: 'OWN THE OUTCOME', tag: 'We take responsibility for results, not just recommendations.', body: 'We stay accountable from diagnosis through execution, measuring our work by the value it creates for the institution.' },
    { num: '02', Icon: Microscope, title: 'LEAD WITH EVIDENCE', tag: 'We earn confidence through rigor.', body: 'We test assumptions, challenge conclusions, and ground our advice in facts, analysis, and operational reality rather than rhetoric or opinion.' },
    { num: '03', Icon: Network, title: 'THINK IN SYSTEMS', tag: 'We solve interconnected problems as one system.', body: 'We connect strategy, operations, technology, commercial priorities, and patient journeys to address root causes and create solutions that work together.' },
    { num: '04', Icon: Globe2, title: 'KNOW THE CONTEXT', tag: 'We combine global standards with regional intelligence.', body: 'Our recommendations reflect the institutional, regulatory, commercial, cultural, and market realities of Egypt, the GCC, and the wider region.' },
    { num: '05', Icon: Building2, title: 'BUILD INSTITUTIONAL VALUE', tag: 'We leave institutions stronger than we found them.', body: 'We build capability, decision-making discipline, and sustainable systems so value remains with the organization and continues beyond the engagement.' },
    { num: '06', Icon: Sparkles, title: 'CHALLENGE AND IMPROVE', tag: 'We never confuse experience with certainty.', body: 'We challenge our own thinking, learn from every engagement, and continuously improve how we advise, execute, and create impact.' },
  ];

  return (
    <section id="about" className="bg-[#F8F9FB] border-b border-canvasBorder relative">

      {/* ── Part 1: Institutional Mandate (Light, editorial, asymmetric) ── */}
      <div className="py-24 lg:py-28 max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Left: Narrative column */}
          <div className="lg:col-span-5 space-y-7 lg:pt-4">
            <div className="section-label">Institutional Mandate</div>

            <h2 className="font-cormorant text-[34px] sm:text-[44px] lg:text-[50px] font-bold text-ink tracking-tight leading-[1.05]">
              Healthcare transformation fails when executed in{' '}
              <span className="font-fancy-italic text-aurionTeal font-normal">silos</span>.
            </h2>

            <div className="teal-rule" />

            <p className="text-sm sm:text-[15px] text-inkMuted leading-[1.75] font-sans">
              Healthcare organizations across Egypt and the GCC are operating in a defining era of privatization, universal coverage reforms, and cross-border mobility. Yet institutions routinely struggle with fragmented advisory: strategy conceived far from the clinic floor, digital investments stalling without physician buy-in, and expansion plans faltering without structured referral pipelines.
            </p>
            <p className="text-sm sm:text-[15px] text-inkMuted leading-[1.75] font-sans">
              Aurion acts as an ecosystem integrator. We align clinical governance, financial capital, spatial prestige, and operational velocity into one cohesive advisory mandate.
            </p>

            {/* Geography tags */}
            <div className="flex flex-wrap gap-2 pt-2">
              {['Cairo, Egypt', 'Saudi Arabia', 'UAE & GCC'].map(g => (
                <span key={g} className="px-3 py-1 rounded-full border border-aurionTeal/20 bg-aurionTeal/5 text-[10.5px] font-mono text-aurionTeal font-bold uppercase tracking-widest">
                  {g}
                </span>
              ))}
            </div>
          </div>

          {/* Right: Quote card */}
          <div className="lg:col-span-7">
            <div
              className="relative rounded-2xl overflow-hidden p-10 sm:p-12"
              style={{
                background: 'linear-gradient(145deg, #1C2024 0%, #141820 100%)',
                border: '1px solid rgba(255,255,255,0.07)',
                boxShadow: '0 40px 80px -20px rgba(0,0,0,0.40), 0 0 0 1px rgba(79,178,196,0.08)',
              }}
            >
              {/* Ambient glow */}
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-aurionTeal/15 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-20 -left-20 w-48 h-48 bg-aurionTeal/8 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10">
                {/* Quote mark */}
                <Quote className="w-10 h-10 mb-6" style={{ color: 'rgba(79, 178, 196, 0.25)' }} />

                {/* The quote */}
                <blockquote
                  className="font-cormorant italic leading-relaxed text-white/90 mb-8"
                  style={{ fontSize: 'clamp(17px, 1.6vw, 22px)' }}
                >
                  "We founded Aurion to close the divide between boardroom ambition and clinic-floor reality. Every engagement is delivered personally by our partners, combining clinical authority with commercial discipline to deliver outcomes that endure."
                </blockquote>

                {/* Attribution */}
                <div className="flex items-center justify-between pt-7 border-t border-white/[0.10]">
                  <div>
                    <div className="text-sm font-bold text-white font-sans">Dr. Asser Medhat & Dr. Asmaa Salman</div>
                    <div className="text-[11px] font-mono text-aurionTeal-glow font-semibold mt-1 tracking-wide">Founders & Managing Partners</div>
                  </div>
                  <div className="flex items-center -space-x-2">
                    <img
                      src="/dr-asser-medhat.png"
                      alt="Dr. Asser Medhat"
                      className="w-10 h-10 rounded-full object-cover object-center border-2 border-black shadow-md ring-1 ring-aurionTeal/35"
                      onError={(e) => { e.currentTarget.src = 'https://drassermedhat.github.io/AurionHealth/dr-asser-medhat.png'; }}
                    />
                    <img
                      src="/dr-asmaa-salman.png"
                      alt="Dr. Asmaa Salman"
                      className="w-10 h-10 rounded-full object-cover object-center border-2 border-black shadow-md ring-1 ring-aurionTeal/35"
                      onError={(e) => { e.currentTarget.src = 'https://drassermedhat.github.io/AurionHealth/dr-asmaa-salman.png'; }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Horizontal rule */}
      <div className="section-divider mx-6 sm:mx-8 max-w-7xl lg:mx-auto" />

      {/* ── Part 2: Strategic Charter ── */}
      <div className="py-20 max-w-7xl mx-auto px-6 sm:px-8">

        {/* Header row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className="max-w-xl">
            <div className="section-label mb-3">Institutional Foundation</div>
            <h3 className="font-cormorant text-[28px] sm:text-[38px] font-bold text-ink tracking-tight leading-tight">
              Strategic Charter & Operating DNA
            </h3>
            <p className="text-inkMuted text-sm leading-relaxed mt-2 font-sans">
              The institutional vision, transformation mandate, and foundational principles guiding our advisory across Egypt and the GCC.
            </p>
          </div>

          {/* Segmented Control */}
          <div className="inline-flex p-1.5 bg-white rounded-2xl border border-canvasBorder shadow-sm self-start md:self-auto shrink-0">
            <button
              onClick={() => setActiveCharterTab('vm')}
              className={`px-5 py-2.5 rounded-xl text-[10.5px] font-mono uppercase tracking-wider font-bold transition-all duration-300 flex items-center space-x-2 ${
                activeCharterTab === 'vm'
                  ? 'bg-ink text-white shadow-sm'
                  : 'text-inkMuted hover:text-ink hover:bg-canvas'
              }`}
            >
              <Compass className="w-3.5 h-3.5 text-aurionTeal-vibrant shrink-0" />
              <span>Vision & Mission</span>
            </button>
            <button
              onClick={() => setActiveCharterTab('val')}
              className={`px-5 py-2.5 rounded-xl text-[10.5px] font-mono uppercase tracking-wider font-bold transition-all duration-300 flex items-center space-x-2 ${
                activeCharterTab === 'val'
                  ? 'bg-ink text-white shadow-sm'
                  : 'text-inkMuted hover:text-ink hover:bg-canvas'
              }`}
            >
              <ShieldCheck className="w-3.5 h-3.5 text-aurionTeal shrink-0" />
              <span>6 Institutional Values</span>
            </button>
          </div>
        </div>

        {/* Vision & Mission */}
        {activeCharterTab === 'vm' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Vision */}
            <div
              className="lg:col-span-5 p-9 rounded-2xl text-white border relative overflow-hidden flex flex-col justify-between"
              style={{
                background: 'linear-gradient(145deg, #1C2024 0%, #141820 100%)',
                border: '1px solid rgba(255,255,255,0.07)',
                boxShadow: '0 24px 48px -12px rgba(0,0,0,0.35)',
              }}
            >
              <div className="absolute -top-16 -right-16 w-48 h-48 bg-aurionTeal/20 rounded-full blur-3xl pointer-events-none" />
              <div className="relative z-10">
                <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/8 border border-white/12 text-aurionTeal-glow text-[9.5px] font-mono uppercase tracking-[0.18em] font-bold mb-7">
                  <span className="w-1.5 h-1.5 rounded-full bg-aurionTeal-glow animate-pulse" />
                  <span>OUR VISION</span>
                </div>
                <p className="font-cormorant text-xl sm:text-2xl font-bold text-white leading-[1.4] tracking-tight">
                  To become the region's most trusted healthcare advisory partner for turning{' '}
                  <span className="italic text-aurionTeal-glow">complexity</span> into clarity,{' '}
                  <span className="underline decoration-aurionTeal/40 decoration-2 underline-offset-4">strategy into execution</span>, and ambition into impact.
                </p>
              </div>
              <div className="mt-8 pt-5 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-slate-400 relative z-10">
                <span className="flex items-center space-x-1.5">
                  <Crosshair className="w-3 h-3 text-aurionTeal-glow" />
                  <span>Long-Term Horizon</span>
                </span>
                <span className="text-aurionTeal-glow font-semibold">Egypt · GCC</span>
              </div>
            </div>

            {/* Mission */}
            <div className="lg:col-span-7 p-9 rounded-2xl bg-white border border-canvasBorder shadow-executive flex flex-col justify-between hover:border-aurionTeal/30 transition-all">
              <div>
                <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-aurionTeal/8 border border-aurionTeal/18 text-aurionTeal text-[9.5px] font-mono uppercase tracking-[0.18em] font-bold mb-7">
                  <span className="w-1.5 h-1.5 rounded-full bg-aurionTeal" />
                  <span>OUR MISSION</span>
                </div>
                <p className="text-[14px] text-inkMuted leading-[1.80] font-sans">
                  Aurion helps healthcare organizations across Egypt, the GCC, and the wider region improve performance and build sustainable growth through integrated advisory across strategy, operations, digital health, international patient services, and commercial transformation, combining senior, founder-led expertise, evidence-based thinking, and practical execution to strengthen institutions, develop people, and create lasting value.
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-canvasBorder flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="grid grid-cols-3 gap-3 flex-1">
                  {[['Focus', 'Founder-Led'], ['Method', 'Evidence-Based'], ['Impact', 'Lasting Value']].map(([k, v]) => (
                    <div key={k} className="p-2.5 rounded-xl bg-canvas border border-canvasBorder text-center">
                      <div className="text-[9px] font-mono text-aurionTeal font-bold uppercase tracking-wider">{k}</div>
                      <div className="text-[11.5px] font-bold text-ink mt-0.5 font-sans">{v}</div>
                    </div>
                  ))}
                </div>
                <button
                  onClick={() => setActiveCharterTab('val')}
                  className="inline-flex items-center space-x-1.5 text-[11px] font-mono text-aurionTeal font-bold uppercase hover:underline whitespace-nowrap"
                >
                  <span>View 6 Values</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* 6 Values */}
        {activeCharterTab === 'val' && (
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {values.map(({ num, Icon, title, tag, body }) => (
                <div
                  key={num}
                  className="p-7 rounded-2xl bg-white border border-canvasBorder shadow-sm flex flex-col justify-between hover:border-aurionTeal/40 hover:shadow-executive transition-all duration-300 group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-9 h-9 rounded-xl bg-aurionTeal/8 border border-aurionTeal/18 text-aurionTeal flex items-center justify-center group-hover:bg-aurionTeal group-hover:text-white group-hover:border-transparent transition-all duration-300">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="font-mono text-[9.5px] text-aurionTeal/70 font-bold uppercase tracking-wider">[ VALUE {num} ]</span>
                    </div>
                    <div className="teal-rule mb-4" />
                    <h4 className="font-cinzel text-[13px] font-bold text-ink tracking-tight mb-2">{title}</h4>
                    <div className="text-[11.5px] font-mono font-semibold text-aurionTeal mb-3">{tag}</div>
                    <p className="text-[12px] text-inkMuted leading-relaxed font-sans">{body}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex items-center justify-between pt-6 border-t border-canvasBorder mt-7">
              <button
                onClick={() => setActiveCharterTab('vm')}
                className="inline-flex items-center space-x-1.5 text-[11px] font-mono text-aurionTeal font-bold uppercase hover:underline"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Back to Vision & Mission</span>
              </button>
              <span className="text-[10px] font-mono text-inkDim uppercase tracking-wider hidden sm:inline">Six Foundational Principles · Egypt & GCC</span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
