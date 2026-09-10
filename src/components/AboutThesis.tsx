import { useState } from 'react';
import { Compass, Quote, ShieldCheck, Crosshair, ArrowRight, ArrowLeft, Target, Microscope, Network, Globe2, Building2, Sparkles } from 'lucide-react';

export const AboutThesis: React.FC = () => {
  const [activeCharterTab, setActiveCharterTab] = useState<'vm' | 'val'>('vm');

  return (
    <section id="about" className="py-24 bg-canvas border-b border-canvasBorder relative bg-drafting-grid">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Executive Mandate & Perspective */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-aurionTeal/10 border border-aurionTeal/20 text-aurionTeal text-[10px] font-mono uppercase tracking-widest font-bold">
              <Compass className="w-3 h-3" />
              <span>Institutional Mandate</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-ink tracking-tight leading-tight">
              Healthcare transformation fails when executed in <span className="font-fancy-italic text-aurionTeal font-normal">silos</span>.
            </h2>
            <p className="text-sm sm:text-base text-inkMuted leading-relaxed">
              Healthcare organizations across Egypt and the GCC are operating in a defining era of privatization, universal coverage reforms, and cross-border mobility. Yet institutions routinely struggle with fragmented advisory: strategy conceived far from the clinic floor, digital investments stalling without physician buy-in, and expansion plans faltering without structured referral pipelines.
            </p>
            <p className="text-sm sm:text-base text-inkMuted leading-relaxed">
              Aurion acts as an ecosystem integrator. We align clinical governance, financial capital, spatial prestige, and operational velocity into one cohesive advisory mandate.
            </p>
          </div>

          <div className="lg:col-span-6">
            {/* Executive Quote Card */}
            <div className="p-8 sm:p-10 rounded-3xl bg-canvasPure border border-canvasBorder shadow-executive relative">
              <Quote className="w-10 h-10 text-aurionTeal/20 mb-4" />
              <blockquote className="font-cormorant italic text-lg sm:text-xl text-ink leading-relaxed mb-6">
                “We founded Aurion to close the divide between boardroom ambition and clinic-floor reality. Every engagement is delivered personally by our partners, combining clinical authority with commercial discipline to deliver outcomes that endure.”
              </blockquote>
              
              <div className="pt-6 border-t border-canvasBorder flex items-center justify-between">
                <div>
                  <div className="font-bold text-sm text-ink">Dr. Asser Medhat & Dr. Asmaa Salman</div>
                  <div className="text-xs font-mono text-aurionTeal font-semibold mt-0.5">Founders & Managing Partners</div>
                </div>
                <div className="flex items-center -space-x-2">
                  <img 
                    src="/dr-asser-medhat.png" 
                    alt="Dr. Asser Medhat" 
                    className="w-9 h-9 rounded-full object-cover object-center border-2 border-white shadow-sm ring-1 ring-aurionTeal/30" 
                    onError={(e) => { e.currentTarget.src = 'https://drassermedhat.github.io/AurionHealth/dr-asser-medhat.png'; }} 
                  />
                  <img 
                    src="/dr-asmaa-salman.png" 
                    alt="Dr. Asmaa Salman" 
                    className="w-9 h-9 rounded-full object-cover object-center border-2 border-white shadow-sm ring-1 ring-aurionTeal/30" 
                    onError={(e) => { e.currentTarget.src = 'https://drassermedhat.github.io/AurionHealth/dr-asmaa-salman.png'; }} 
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Strategic Charter & Operating DNA */}
        <div className="mt-16 pt-16 border-t border-canvasBorder">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6">
            <div>
              <div className="inline-flex items-center space-x-2 text-[10px] font-mono uppercase tracking-widest text-aurionTeal font-bold">
                <span className="w-1.5 h-1.5 rounded-full bg-aurionTeal"></span>
                <span>Institutional Foundation</span>
              </div>
              <h3 className="text-2xl sm:text-4xl font-serif font-bold text-ink tracking-tight mt-1">
                Strategic Charter & Operating DNA
              </h3>
              <p className="text-inkMuted text-xs sm:text-sm leading-relaxed mt-1 max-w-xl">
                The institutional vision, transformation mandate, and foundational principles guiding our advisory across Egypt and the GCC.
              </p>
            </div>

            {/* Segmented Control */}
            <div className="inline-flex p-1.5 bg-canvasPure rounded-2xl border border-canvasBorder shadow-sm self-start md:self-auto shrink-0">
              <button 
                onClick={() => setActiveCharterTab('vm')} 
                className={`px-5 py-2.5 rounded-xl text-xs font-mono uppercase tracking-wider font-bold transition-all duration-300 flex items-center space-x-2 ${
                  activeCharterTab === 'vm'
                    ? 'bg-ink text-white shadow-sm'
                    : 'text-inkMuted hover:text-ink hover:bg-canvas'
                }`}
              >
                <Compass className="w-3.5 h-3.5 text-aurionTeal-vibrant" />
                <span>Vision & Mission</span>
              </button>
              <button 
                onClick={() => setActiveCharterTab('val')} 
                className={`px-5 py-2.5 rounded-xl text-xs font-mono uppercase tracking-wider font-bold transition-all duration-300 flex items-center space-x-2 ${
                  activeCharterTab === 'val'
                    ? 'bg-ink text-white shadow-sm'
                    : 'text-inkMuted hover:text-ink hover:bg-canvas'
                }`}
              >
                <ShieldCheck className="w-3.5 h-3.5 text-aurionTeal" />
                <span>6 Institutional Values</span>
              </button>
            </div>
          </div>

          {/* Panel 1: Vision & Mission */}
          {activeCharterTab === 'vm' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              
              {/* Vision Card */}
              <div className="lg:col-span-5 p-8 sm:p-10 rounded-3xl bg-[#1C2024] text-white border border-white/10 shadow-2xl flex flex-col justify-between relative overflow-hidden group">
                <div className="absolute -top-24 -right-24 w-56 h-56 bg-aurionTeal/20 rounded-full blur-3xl pointer-events-none"></div>
                
                <div className="relative z-10">
                  <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-aurionTeal-vibrant text-[10px] font-mono uppercase tracking-widest font-bold mb-6">
                    <span className="w-1.5 h-1.5 rounded-full bg-aurionTeal-vibrant animate-pulse"></span>
                    <span>OUR VISION</span>
                  </div>
                  <p className="font-serif text-xl sm:text-2xl font-bold text-white leading-relaxed tracking-tight">
                    To become the region’s most trusted healthcare advisory partner for turning <span className="text-aurionTeal-vibrant font-fancy-italic font-normal">complexity</span> into clarity, <span className="text-white underline decoration-aurionTeal/40 decoration-2 underline-offset-4">strategy into execution</span>, and ambition into impact.
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-slate-400 relative z-10">
                  <span className="flex items-center space-x-1.5">
                    <Crosshair className="w-3 h-3 text-aurionTeal-vibrant" />
                    <span>Long-Term Horizon</span>
                  </span>
                  <span className="text-aurionTeal-vibrant font-semibold">Egypt · GCC</span>
                </div>
              </div>

              {/* Mission Card */}
              <div className="lg:col-span-7 p-8 sm:p-10 rounded-3xl bg-canvasPure border border-canvasBorder shadow-executive flex flex-col justify-between relative group hover:border-aurionTeal/40 transition-all">
                <div>
                  <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-aurionTeal/10 border border-aurionTeal/20 text-aurionTeal text-[10px] font-mono uppercase tracking-widest font-bold mb-6">
                    <span className="w-1.5 h-1.5 rounded-full bg-aurionTeal"></span>
                    <span>OUR MISSION</span>
                  </div>
                  <p className="text-xs sm:text-sm text-inkMuted leading-relaxed font-sans">
                    Aurion helps healthcare organizations across Egypt, the GCC, and the wider region improve performance and build sustainable growth through integrated advisory across strategy, operations, digital health, international patient services, and commercial transformation, combining senior, founder-led expertise, evidence-based thinking, and practical execution to strengthen institutions, develop people, and create lasting value.
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-canvasBorder flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="grid grid-cols-3 gap-3 flex-1">
                    <div className="p-2.5 rounded-xl bg-canvas border border-canvasBorder text-center sm:text-left">
                      <div className="text-[9px] font-mono text-aurionTeal font-bold uppercase">Focus</div>
                      <div className="text-xs font-bold text-ink mt-0.5 font-sans">Founder-Led</div>
                    </div>
                    <div className="p-2.5 rounded-xl bg-canvas border border-canvasBorder text-center sm:text-left">
                      <div className="text-[9px] font-mono text-aurionTeal font-bold uppercase">Method</div>
                      <div className="text-xs font-bold text-ink mt-0.5 font-sans">Evidence-Based</div>
                    </div>
                    <div className="p-2.5 rounded-xl bg-canvas border border-canvasBorder text-center sm:text-left">
                      <div className="text-[9px] font-mono text-aurionTeal font-bold uppercase">Impact</div>
                      <div className="text-xs font-bold text-ink mt-0.5 font-sans">Lasting Value</div>
                    </div>
                  </div>
                  <button 
                    onClick={() => setActiveCharterTab('val')} 
                    className="inline-flex items-center space-x-1.5 text-xs font-mono text-aurionTeal font-bold uppercase hover:underline whitespace-nowrap self-end sm:self-center"
                  >
                    <span>View 6 Values</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

            </div>
          )}

          {/* Panel 2: 6 Institutional Values */}
          {activeCharterTab === 'val' && (
            <div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                
                {/* VALUE 01 */}
                <div className="p-6 rounded-2xl bg-canvasPure border border-canvasBorder shadow-sm flex flex-col justify-between hover:border-aurionTeal/50 hover:shadow-executive transition-all group">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-8 h-8 rounded-xl bg-aurionTeal/10 border border-aurionTeal/20 text-aurionTeal flex items-center justify-center group-hover:bg-aurionTeal group-hover:text-white transition-all">
                        <Target className="w-4 h-4" />
                      </div>
                      <span className="font-mono text-[10px] text-aurionTeal font-bold uppercase tracking-wider">[ VALUE 01 ]</span>
                    </div>
                    <h4 className="font-serif text-base font-bold text-ink tracking-tight mb-1">OWN THE OUTCOME</h4>
                    <div className="text-xs font-mono font-semibold text-aurionTeal mb-2">We take responsibility for results, not just recommendations.</div>
                    <p className="text-xs text-inkMuted leading-relaxed font-sans">
                      We stay accountable from diagnosis through execution, measuring our work by the value it creates for the institution.
                    </p>
                  </div>
                </div>

                {/* VALUE 02 */}
                <div className="p-6 rounded-2xl bg-canvasPure border border-canvasBorder shadow-sm flex flex-col justify-between hover:border-aurionTeal/50 hover:shadow-executive transition-all group">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-8 h-8 rounded-xl bg-aurionTeal/10 border border-aurionTeal/20 text-aurionTeal flex items-center justify-center group-hover:bg-aurionTeal group-hover:text-white transition-all">
                        <Microscope className="w-4 h-4" />
                      </div>
                      <span className="font-mono text-[10px] text-aurionTeal font-bold uppercase tracking-wider">[ VALUE 02 ]</span>
                    </div>
                    <h4 className="font-serif text-base font-bold text-ink tracking-tight mb-1">LEAD WITH EVIDENCE</h4>
                    <div className="text-xs font-mono font-semibold text-aurionTeal mb-2">We earn confidence through rigor.</div>
                    <p className="text-xs text-inkMuted leading-relaxed font-sans">
                      We test assumptions, challenge conclusions, and ground our advice in facts, analysis, and operational reality rather than rhetoric or opinion.
                    </p>
                  </div>
                </div>

                {/* VALUE 03 */}
                <div className="p-6 rounded-2xl bg-canvasPure border border-canvasBorder shadow-sm flex flex-col justify-between hover:border-aurionTeal/50 hover:shadow-executive transition-all group">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-8 h-8 rounded-xl bg-aurionTeal/10 border border-aurionTeal/20 text-aurionTeal flex items-center justify-center group-hover:bg-aurionTeal group-hover:text-white transition-all">
                        <Network className="w-4 h-4" />
                      </div>
                      <span className="font-mono text-[10px] text-aurionTeal font-bold uppercase tracking-wider">[ VALUE 03 ]</span>
                    </div>
                    <h4 className="font-serif text-base font-bold text-ink tracking-tight mb-1">THINK IN SYSTEMS</h4>
                    <div className="text-xs font-mono font-semibold text-aurionTeal mb-2">We solve interconnected problems as one system.</div>
                    <p className="text-xs text-inkMuted leading-relaxed font-sans">
                      We connect strategy, operations, technology, commercial priorities, and patient journeys to address root causes and create solutions that work together.
                    </p>
                  </div>
                </div>

                {/* VALUE 04 */}
                <div className="p-6 rounded-2xl bg-canvasPure border border-canvasBorder shadow-sm flex flex-col justify-between hover:border-aurionTeal/50 hover:shadow-executive transition-all group">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-8 h-8 rounded-xl bg-aurionTeal/10 border border-aurionTeal/20 text-aurionTeal flex items-center justify-center group-hover:bg-aurionTeal group-hover:text-white transition-all">
                        <Globe2 className="w-4 h-4" />
                      </div>
                      <span className="font-mono text-[10px] text-aurionTeal font-bold uppercase tracking-wider">[ VALUE 04 ]</span>
                    </div>
                    <h4 className="font-serif text-base font-bold text-ink tracking-tight mb-1">KNOW THE CONTEXT</h4>
                    <div className="text-xs font-mono font-semibold text-aurionTeal mb-2">We combine global standards with regional intelligence.</div>
                    <p className="text-xs text-inkMuted leading-relaxed font-sans">
                      Our recommendations reflect the institutional, regulatory, commercial, cultural, and market realities of Egypt, the GCC, and the wider region.
                    </p>
                  </div>
                </div>

                {/* VALUE 05 */}
                <div className="p-6 rounded-2xl bg-canvasPure border border-canvasBorder shadow-sm flex flex-col justify-between hover:border-aurionTeal/50 hover:shadow-executive transition-all group">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-8 h-8 rounded-xl bg-aurionTeal/10 border border-aurionTeal/20 text-aurionTeal flex items-center justify-center group-hover:bg-aurionTeal group-hover:text-white transition-all">
                        <Building2 className="w-4 h-4" />
                      </div>
                      <span className="font-mono text-[10px] text-aurionTeal font-bold uppercase tracking-wider">[ VALUE 05 ]</span>
                    </div>
                    <h4 className="font-serif text-base font-bold text-ink tracking-tight mb-1">BUILD INSTITUTIONAL VALUE</h4>
                    <div className="text-xs font-mono font-semibold text-aurionTeal mb-2">We leave institutions stronger than we found them.</div>
                    <p className="text-xs text-inkMuted leading-relaxed font-sans">
                      We build capability, decision-making discipline, and sustainable systems so value remains with the organization and continues beyond the engagement.
                    </p>
                  </div>
                </div>

                {/* VALUE 06 */}
                <div className="p-6 rounded-2xl bg-canvasPure border border-canvasBorder shadow-sm flex flex-col justify-between hover:border-aurionTeal/50 hover:shadow-executive transition-all group">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-8 h-8 rounded-xl bg-aurionTeal/10 border border-aurionTeal/20 text-aurionTeal flex items-center justify-center group-hover:bg-aurionTeal group-hover:text-white transition-all">
                        <Sparkles className="w-4 h-4" />
                      </div>
                      <span className="font-mono text-[10px] text-aurionTeal font-bold uppercase tracking-wider">[ VALUE 06 ]</span>
                    </div>
                    <h4 className="font-serif text-base font-bold text-ink tracking-tight mb-1">CHALLENGE AND IMPROVE</h4>
                    <div className="text-xs font-mono font-semibold text-aurionTeal mb-2">We never confuse experience with certainty.</div>
                    <p className="text-xs text-inkMuted leading-relaxed font-sans">
                      We challenge our own thinking, learn from every engagement, and continuously improve how we advise, execute, and create impact.
                    </p>
                  </div>
                </div>

              </div>

              <div className="flex items-center justify-between pt-6 border-t border-canvasBorder mt-6">
                <button 
                  onClick={() => setActiveCharterTab('vm')} 
                  className="inline-flex items-center space-x-1.5 text-xs font-mono text-aurionTeal font-bold uppercase hover:underline"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Back to Vision & Mission</span>
                </button>
                <span className="text-[10px] font-mono text-inkDim uppercase tracking-wider hidden sm:inline">Six Foundational Principles · Egypt & GCC</span>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
