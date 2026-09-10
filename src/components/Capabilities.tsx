import { PlaneTakeoff, Globe, Plane, ArrowUpRight, TrendingUp, PieChart, Activity, Users, Gem, Sparkles, Award, Mic, Cpu, Server, BriefcaseBusiness, ClipboardCheck, ArrowRight } from 'lucide-react';

interface CapabilitiesProps {
  onOpenDrawer: (id: string) => void;
}

export const Capabilities: React.FC<CapabilitiesProps> = ({ onOpenDrawer }) => {
  return (
    <section id="capabilities" className="py-24 bg-canvasPure border-b border-canvasBorder relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center space-x-2 text-[10px] font-mono uppercase tracking-widest text-aurionTeal font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-aurionTeal"></span>
              <span>Strategic Capabilities</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-ink tracking-tight">
              Integrated Practice Areas
            </h2>
            <p className="text-inkMuted text-sm sm:text-base leading-relaxed pt-1">
              Structured advisory disciplines designed for health system boards, sovereign reform offices, and capital allocators seeking verified clinical and financial acceleration.
            </p>
          </div>

          <button 
            onClick={() => onOpenDrawer('all')} 
            className="inline-flex items-center space-x-2 text-xs font-mono text-aurionTeal font-bold uppercase hover:underline"
          >
            <span>Open Full Practice Directory</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* 8 Curated High-End Visual Cards with Exact Photography */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          
          {/* 1. International Patient Services */}
          <div className="executive-card lg:col-span-2 rounded-3xl overflow-hidden flex flex-col justify-between shadow-executive hover:shadow-executive-hover group border-aurionTeal/40">
            <div className="h-64 overflow-hidden relative">
              <img 
                src="/capability-international-patients.jpg" 
                alt="International Patient Travel & Medical Tourism Corridor" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-95"
                onError={(e) => { e.currentTarget.src = 'https://drassermedhat.github.io/AurionHealth/capability-international-patients.jpg'; }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/25 to-transparent"></div>
              
              <div className="absolute top-4 left-4 font-mono text-[11px] font-bold text-white bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/20 flex items-center space-x-1.5">
                <PlaneTakeoff className="w-3 h-3 text-aurionTeal-vibrant" />
                <span>[ 01 ]</span>
              </div>
              <span className="absolute top-4 right-4 px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider bg-aurionGold text-white font-bold backdrop-blur-md shadow">★ Flagship Practice</span>
              
              <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-[11px] font-mono text-slate-200">
                <span className="inline-flex items-center space-x-1 bg-black/50 backdrop-blur-sm px-2.5 py-1 rounded-md border border-white/10">
                  <Globe className="w-3 h-3 text-aurionTeal-glow" />
                  <span>Cross-Border Medical Corridors</span>
                </span>
                <span className="text-white font-bold">KSA · UAE · Egypt</span>
              </div>
            </div>
            <div className="p-8 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center space-x-2 text-aurionTeal mb-2">
                  <Plane className="w-4 h-4" />
                  <span className="text-[11px] font-mono uppercase font-bold">Medical Tourism Practice</span>
                </div>
                <h3 className="text-xl font-bold text-ink mb-2 group-hover:text-aurionTeal transition-colors font-serif">
                  International Patient Services, Medical Tourism & Telehealth
                </h3>
                <p className="text-xs sm:text-sm text-inkMuted leading-relaxed mb-6">
                  Turnkey International Patient Department (IPD) architecture, bilateral government & payer corridors, and digital Second Medical Opinion networks connecting foreign patients with tertiary providers.
                </p>
              </div>
              <div className="pt-4 border-t border-canvasBorder flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono uppercase text-inkDim block">Outcome</span>
                  <span className="text-xs font-semibold text-ink">Hard-Currency Patient Liquidity</span>
                </div>
                <button 
                  onClick={() => onOpenDrawer('ips')} 
                  className="w-9 h-9 rounded-full bg-canvasSubtle group-hover:bg-aurionTeal group-hover:text-white flex items-center justify-center text-ink transition-colors"
                >
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* 2. Strategy & Transformation */}
          <div className="executive-card lg:col-span-2 rounded-3xl overflow-hidden flex flex-col justify-between shadow-executive hover:shadow-executive-hover group">
            <div className="h-64 overflow-hidden relative">
              <img 
                src="/capability-strategy-boardroom.webp" 
                alt="Healthcare Strategy Boardroom" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-95"
                onError={(e) => { e.currentTarget.src = 'https://drassermedhat.github.io/AurionHealth/capability-strategy-boardroom.webp'; }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/25 to-transparent"></div>
              
              <div className="absolute top-4 left-4 font-mono text-[11px] font-bold text-white bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/20 flex items-center space-x-1.5">
                <TrendingUp className="w-3 h-3 text-aurionTeal-vibrant" />
                <span>[ 02 ]</span>
              </div>
              <span className="absolute top-4 right-4 px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider bg-canvasPure/90 text-ink font-bold backdrop-blur-md">Board Advisory</span>
              
              <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-[11px] font-mono text-slate-200">
                <span className="inline-flex items-center space-x-1 bg-black/50 backdrop-blur-sm px-2.5 py-1 rounded-md border border-white/10">
                  <PieChart className="w-3 h-3 text-aurionTeal-glow" />
                  <span>Hospital Operating Models & KPIs</span>
                </span>
              </div>
            </div>
            <div className="p-8 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center space-x-2 text-aurionTeal mb-2">
                  <TrendingUp className="w-4 h-4" />
                  <span className="text-[11px] font-mono uppercase font-bold">Strategic Governance</span>
                </div>
                <h3 className="text-xl font-bold text-ink mb-2 group-hover:text-aurionTeal transition-colors font-serif">
                  Strategy & Institutional Transformation
                </h3>
                <p className="text-xs sm:text-sm text-inkMuted leading-relaxed mb-6">
                  Target Operating Model (TOM) architecture, clinical service-line consolidation, regional market feasibility, and board-level governance alignment.
                </p>
              </div>
              <div className="pt-4 border-t border-canvasBorder flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono uppercase text-inkDim block">Outcome</span>
                  <span className="text-xs font-semibold text-ink">Enterprise Value & Board Alignment</span>
                </div>
                <button 
                  onClick={() => onOpenDrawer('strategy')} 
                  className="w-9 h-9 rounded-full bg-canvasSubtle group-hover:bg-aurionTeal group-hover:text-white flex items-center justify-center text-ink transition-colors"
                >
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* 3. Operations & Turnaround */}
          <div className="executive-card lg:col-span-2 rounded-3xl overflow-hidden flex flex-col justify-between shadow-executive hover:shadow-executive-hover group">
            <div className="h-64 overflow-hidden relative">
              <img 
                src="/capability-operations-clinical.jpg" 
                alt="Clinical Operations & Surgical Throughput" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-95"
                onError={(e) => { e.currentTarget.src = 'https://drassermedhat.github.io/AurionHealth/capability-operations-clinical.jpg'; }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/25 to-transparent"></div>
              
              <div className="absolute top-4 left-4 font-mono text-[11px] font-bold text-white bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/20 flex items-center space-x-1.5">
                <Activity className="w-3 h-3 text-aurionTeal-vibrant" />
                <span>[ 03 ]</span>
              </div>
              <span className="absolute top-4 right-4 px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider bg-canvasPure/90 text-ink font-bold backdrop-blur-md">Clinical Velocity</span>
              
              <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-[11px] font-mono text-slate-200">
                <span className="inline-flex items-center space-x-1 bg-black/50 backdrop-blur-sm px-2.5 py-1 rounded-md border border-white/10">
                  <Users className="w-3 h-3 text-aurionTeal-glow" />
                  <span>Physician & Floor Team Alignment</span>
                </span>
              </div>
            </div>
            <div className="p-8 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center space-x-2 text-aurionTeal mb-2">
                  <Activity className="w-4 h-4" />
                  <span className="text-[11px] font-mono uppercase font-bold">Throughput Practice</span>
                </div>
                <h3 className="text-xl font-bold text-ink mb-2 group-hover:text-aurionTeal transition-colors font-serif">
                  Operations & Clinical Performance Turnaround
                </h3>
                <p className="text-xs sm:text-sm text-inkMuted leading-relaxed mb-6">
                  Re-engineering emergency department triage velocity, operating theatre utilization, inpatient discharge flow, and floor-level clinical SOP institutionalization.
                </p>
              </div>
              <div className="pt-4 border-t border-canvasBorder flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono uppercase text-inkDim block">Outcome</span>
                  <span className="text-xs font-semibold text-ink">Bed Velocity & Bottleneck Removal</span>
                </div>
                <button 
                  onClick={() => onOpenDrawer('ops')} 
                  className="w-9 h-9 rounded-full bg-canvasSubtle group-hover:bg-aurionTeal group-hover:text-white flex items-center justify-center text-ink transition-colors"
                >
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* 4. Elite Aesthetics & Wellness */}
          <div className="executive-card lg:col-span-2 rounded-3xl overflow-hidden flex flex-col justify-between shadow-executive hover:shadow-executive-hover group">
            <div className="h-64 overflow-hidden relative">
              <img 
                src="/capability-wellness-spaces.jpg" 
                alt="Elite Aesthetic & Wellness Clinic Procedure Suite" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-95"
                onError={(e) => { e.currentTarget.src = 'https://drassermedhat.github.io/AurionHealth/capability-wellness-spaces.jpg'; }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/25 to-transparent"></div>
              
              <div className="absolute top-4 left-4 font-mono text-[11px] font-bold text-white bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/20 flex items-center space-x-1.5">
                <Gem className="w-3 h-3 text-aurionTeal-vibrant" />
                <span>[ 04 ]</span>
              </div>
              <span className="absolute top-4 right-4 px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider bg-canvasPure/90 text-ink font-bold backdrop-blur-md">Prestige Design</span>
              
              <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-[11px] font-mono text-slate-200">
                <span className="inline-flex items-center space-x-1 bg-black/50 backdrop-blur-sm px-2.5 py-1 rounded-md border border-white/10">
                  <Sparkles className="w-3 h-3 text-aurionTeal-glow" />
                  <span>5-Star Treatment & Reception Spatial Design</span>
                </span>
              </div>
            </div>
            <div className="p-8 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center space-x-2 text-aurionTeal mb-2">
                  <Gem className="w-4 h-4" />
                  <span className="text-[11px] font-mono uppercase font-bold">Luxury Healthcare</span>
                </div>
                <h3 className="text-xl font-bold text-ink mb-2 group-hover:text-aurionTeal transition-colors font-serif">
                  Elite Aesthetics, Wellness & Premium Clinic Design
                </h3>
                <p className="text-xs sm:text-sm text-inkMuted leading-relaxed mb-6">
                  Turnkey spatial curation, five-star hospitality workflows, and brand architecture for luxury aesthetic clinics, longevity centers, and high-prestige medical facilities.
                </p>
              </div>
              <div className="pt-4 border-t border-canvasBorder flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono uppercase text-inkDim block">Outcome</span>
                  <span className="text-xs font-semibold text-ink">Premium Private-Pay Patient Loyalty</span>
                </div>
                <button 
                  onClick={() => onOpenDrawer('spaces')} 
                  className="w-9 h-9 rounded-full bg-canvasSubtle group-hover:bg-aurionTeal group-hover:text-white flex items-center justify-center text-ink transition-colors"
                >
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* 5. Mega Events Management (Split Visual: Stage + Audience) */}
          <div className="executive-card lg:col-span-2 rounded-3xl overflow-hidden flex flex-col justify-between shadow-executive hover:shadow-executive-hover group">
            <div className="h-64 overflow-hidden relative flex">
              {/* Left: Stage */}
              <div className="w-1/2 h-full overflow-hidden relative">
                <img 
                  src="/capability-congresses-stage.jpg" 
                  alt="Healthcare Congress Plenary Stage" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-95"
                  onError={(e) => { e.currentTarget.src = 'https://drassermedhat.github.io/AurionHealth/capability-congresses-stage.jpg'; }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-black/50"></div>
              </div>
              {/* Right: Audience */}
              <div className="w-1/2 h-full overflow-hidden relative border-l border-white/15">
                <img 
                  src="/capability-congresses-audience.jpg" 
                  alt="Physician Leadership Delegation" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-95"
                  onError={(e) => { e.currentTarget.src = 'https://drassermedhat.github.io/AurionHealth/capability-congresses-audience.jpg'; }}
                />
                <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-black/50"></div>
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/20 to-transparent pointer-events-none"></div>
              
              <div className="absolute top-4 left-4 font-mono text-[11px] font-bold text-white bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/20 flex items-center space-x-1.5 z-10">
                <Award className="w-3 h-3 text-aurionTeal-vibrant" />
                <span>[ 05 ]</span>
              </div>
              <span className="absolute top-4 right-4 px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider bg-canvasPure/90 text-ink font-bold backdrop-blur-md z-10">Summit Advisory</span>
              
              <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-[11px] font-mono text-slate-200 z-10">
                <span className="inline-flex items-center space-x-1 bg-black/60 backdrop-blur-sm px-2.5 py-1 rounded-md border border-white/10">
                  <Mic className="w-3 h-3 text-aurionTeal-glow" />
                  <span>Plenary Stage & Physician Delegation</span>
                </span>
              </div>
            </div>
            <div className="p-8 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center space-x-2 text-aurionTeal mb-2">
                  <Award className="w-4 h-4" />
                  <span className="text-[11px] font-mono uppercase font-bold">Summits & Expos</span>
                </div>
                <h3 className="text-xl font-bold text-ink mb-2 group-hover:text-aurionTeal transition-colors font-serif">
                  Mega Events Management
                </h3>
                <p className="text-xs sm:text-sm text-inkMuted leading-relaxed mb-6">
                  Scientific agenda curation, sovereign sponsor alignment, medical diplomacy protocol, and executive delivery oversight for pan-regional healthcare conferences.
                </p>
              </div>
              <div className="pt-4 border-t border-canvasBorder flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono uppercase text-inkDim block">Outcome</span>
                  <span className="text-xs font-semibold text-ink">Ecosystem Convening Power & Standing</span>
                </div>
                <button 
                  onClick={() => onOpenDrawer('events')} 
                  className="w-9 h-9 rounded-full bg-canvasSubtle group-hover:bg-aurionTeal group-hover:text-white flex items-center justify-center text-ink transition-colors"
                >
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* 6. Digital Health Informatics */}
          <div className="executive-card lg:col-span-2 rounded-3xl overflow-hidden flex flex-col justify-between shadow-executive hover:shadow-executive-hover group">
            <div className="h-64 overflow-hidden relative">
              <img 
                src="/capability-digital-health.jpg" 
                alt="Digital Health Architecture, AI Diagnostics & Clinical Telemetry" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-95"
                onError={(e) => { e.currentTarget.src = 'https://drassermedhat.github.io/AurionHealth/capability-digital-health.jpg'; }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/25 to-transparent"></div>
              
              <div className="absolute top-4 left-4 font-mono text-[11px] font-bold text-white bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/20 flex items-center space-x-1.5">
                <Cpu className="w-3 h-3 text-aurionTeal-vibrant" />
                <span>[ 06 ]</span>
              </div>
              <span className="absolute top-4 right-4 px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider bg-canvasPure/90 text-ink font-bold backdrop-blur-md">Informatics Practice</span>
              
              <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-[11px] font-mono text-slate-200">
                <span className="inline-flex items-center space-x-1 bg-black/50 backdrop-blur-sm px-2.5 py-1 rounded-md border border-white/10">
                  <Server className="w-3 h-3 text-aurionTeal-glow" />
                  <span>Clinical EMR & Interoperability</span>
                </span>
              </div>
            </div>
            <div className="p-8 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center space-x-2 text-aurionTeal mb-2">
                  <Cpu className="w-4 h-4" />
                  <span className="text-[11px] font-mono uppercase font-bold">Digital Transformation</span>
                </div>
                <h3 className="text-xl font-bold text-ink mb-2 group-hover:text-aurionTeal transition-colors font-serif">
                  Digital Health Architecture & Interoperability
                </h3>
                <p className="text-xs sm:text-sm text-inkMuted leading-relaxed mb-6">
                  Structuring clinical informatics roadmaps, Electronic Medical Record (EMR/HIS) adoption governance, hospital data interoperability, and AI foundations.
                </p>
              </div>
              <div className="pt-4 border-t border-canvasBorder flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono uppercase text-inkDim block">Outcome</span>
                  <span className="text-xs font-semibold text-ink">Clinical Data Fidelity & AI Readiness</span>
                </div>
                <button 
                  onClick={() => onOpenDrawer('digital')} 
                  className="w-9 h-9 rounded-full bg-canvasSubtle group-hover:bg-aurionTeal group-hover:text-white flex items-center justify-center text-ink transition-colors"
                >
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* 7. Business Development, Brand & Commercial Advisory */}
          <div className="executive-card md:col-start-auto lg:col-start-2 lg:col-span-2 rounded-3xl overflow-hidden flex flex-col justify-between shadow-executive hover:shadow-executive-hover group">
            <div className="h-64 overflow-hidden relative">
              <img 
                src="/capability-commercial-advisory.jpg" 
                alt="Business Development, Brand & Commercial Advisory" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-95"
                onError={(e) => { e.currentTarget.src = 'https://drassermedhat.github.io/AurionHealth/capability-commercial-advisory.jpg'; }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/25 to-transparent"></div>
              
              <div className="absolute top-4 left-4 font-mono text-[11px] font-bold text-white bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/20 flex items-center space-x-1.5">
                <BriefcaseBusiness className="w-3 h-3 text-aurionTeal-vibrant" />
                <span>[ 07 ]</span>
              </div>
              <span className="absolute top-4 right-4 px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider bg-canvasPure/90 text-ink font-bold backdrop-blur-md">COMMERCIAL GROWTH</span>
              
              <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-[11px] font-mono text-slate-200">
                <span className="inline-flex items-center space-x-1 bg-black/50 backdrop-blur-sm px-2.5 py-1 rounded-md border border-white/10">
                  <TrendingUp className="w-3 h-3 text-aurionTeal-glow" />
                  <span>Institutional Market Positioning</span>
                </span>
              </div>
            </div>
            <div className="p-8 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center space-x-2 text-aurionTeal mb-2">
                  <BriefcaseBusiness className="w-4 h-4" />
                  <span className="text-[11px] font-mono uppercase font-bold">COMMERCIAL GROWTH</span>
                </div>
                <h3 className="text-xl font-bold text-ink mb-2 group-hover:text-aurionTeal transition-colors font-serif">
                  Business Development, Brand & Commercial Advisory
                </h3>
                <p className="text-xs sm:text-sm text-inkMuted leading-relaxed mb-6">
                  Sharper positioning, stronger growth strategy, structured business development, and commercially disciplined sales processes built around institutional priorities.
                </p>
              </div>
              <div className="pt-4 border-t border-canvasBorder flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono uppercase text-inkDim block">Outcome</span>
                  <span className="text-xs font-semibold text-ink">Stronger Market Position & Commercial Momentum</span>
                </div>
                <button 
                  onClick={() => onOpenDrawer('commercial')} 
                  className="w-9 h-9 rounded-full bg-canvasSubtle group-hover:bg-aurionTeal group-hover:text-white flex items-center justify-center text-ink transition-colors"
                >
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* 8. Healthcare Project Management & Corporate Training */}
          <div className="executive-card lg:col-span-2 rounded-3xl overflow-hidden flex flex-col justify-between shadow-executive hover:shadow-executive-hover group">
            <div className="h-64 overflow-hidden relative">
              <img 
                src="/capability-pmo-training.jpg" 
                alt="Healthcare Project Management & Corporate Training" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-95"
                onError={(e) => { e.currentTarget.src = 'https://drassermedhat.github.io/AurionHealth/capability-pmo-training.jpg'; }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/25 to-transparent"></div>
              
              <div className="absolute top-4 left-4 font-mono text-[11px] font-bold text-white bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/20 flex items-center space-x-1.5">
                <ClipboardCheck className="w-3 h-3 text-aurionTeal-vibrant" />
                <span>[ 08 ]</span>
              </div>
              <span className="absolute top-4 right-4 px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider bg-canvasPure/90 text-ink font-bold backdrop-blur-md">CAPABILITY BUILDING</span>
              
              <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-[11px] font-mono text-slate-200">
                <span className="inline-flex items-center space-x-1 bg-black/50 backdrop-blur-sm px-2.5 py-1 rounded-md border border-white/10">
                  <ClipboardCheck className="w-3 h-3 text-aurionTeal-glow" />
                  <span>PMO Governance & Team Cadence</span>
                </span>
              </div>
            </div>
            <div className="p-8 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center space-x-2 text-aurionTeal mb-2">
                  <ClipboardCheck className="w-4 h-4" />
                  <span className="text-[11px] font-mono uppercase font-bold">CAPABILITY BUILDING</span>
                </div>
                <h3 className="text-xl font-bold text-ink mb-2 group-hover:text-aurionTeal transition-colors font-serif">
                  Healthcare Project Management & Corporate Training
                </h3>
                <p className="text-xs sm:text-sm text-inkMuted leading-relaxed mb-6">
                  PMO design, execution governance, executive workshops, and practical capability building that strengthen internal teams and sustain transformation.
                </p>
              </div>
              <div className="pt-4 border-t border-canvasBorder flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono uppercase text-inkDim block">Outcome</span>
                  <span className="text-xs font-semibold text-ink">Institutional Capability & Execution Discipline</span>
                </div>
                <button 
                  onClick={() => onOpenDrawer('pmo')} 
                  className="w-9 h-9 rounded-full bg-canvasSubtle group-hover:bg-aurionTeal group-hover:text-white flex items-center justify-center text-ink transition-colors"
                >
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
