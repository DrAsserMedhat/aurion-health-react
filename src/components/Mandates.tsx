import { TrendingUp, Plane, Gem } from 'lucide-react';

export const Mandates: React.FC = () => {
  return (
    <section id="mandates" className="py-24 bg-canvas border-b border-canvasBorder relative bg-drafting-grid">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        <div className="max-w-3xl mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 text-[10px] font-mono uppercase tracking-widest text-aurionTeal font-bold">
            <span className="w-1.5 h-1.5 rounded-full bg-aurionTeal"></span>
            <span>Illustrative Scenarios</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-ink tracking-tight">
            How We'd Approach a Mandate
          </h2>
          <p className="text-inkMuted text-sm sm:text-base leading-relaxed pt-1">
            Illustrative scenarios only , not completed engagements, showing how our senior-only advisory approach would translate strategic ambition into institutional performance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Mandate 1 */}
          <div className="p-8 rounded-3xl bg-canvasPure border border-canvasBorder shadow-executive flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between text-xs font-mono mb-4">
                <span className="inline-flex items-center space-x-1.5 text-aurionTeal font-bold">
                  <TrendingUp className="w-3.5 h-3.5" />
                  <span>Strategy & TOM</span>
                </span>
                <span className="px-2.5 py-1 rounded-full bg-canvasSubtle text-[10px] font-mono text-inkDim font-semibold">18-24 Mo Scope</span>
              </div>
              <h3 className="text-lg font-bold text-ink mb-3 leading-snug font-serif">
                Strategic Transformation for a Multi-Site Hospital Network
              </h3>
              <p className="text-xs text-inkMuted leading-relaxed mb-4">
                Comprehensive diagnostic sprint pressure-testing clinical service-line profitability across three facilities ahead of institutional capital expansion.
              </p>
            </div>
            <div className="pt-4 border-t border-canvasBorder">
              <span className="text-[10px] font-mono text-aurionTeal uppercase font-bold block">Target Outcome</span>
              <p className="text-xs text-ink font-semibold mt-0.5">Board-aligned 24-month roadmap & validated investment business case.</p>
            </div>
          </div>

          {/* Mandate 2 */}
          <div className="p-8 rounded-3xl bg-canvasPure border border-canvasBorder shadow-executive flex flex-col justify-between border-aurionTeal/30">
            <div>
              <div className="flex items-center justify-between text-xs font-mono mb-4">
                <span className="inline-flex items-center space-x-1.5 text-aurionTeal font-bold">
                  <Plane className="w-3.5 h-3.5" />
                  <span>Medical Tourism</span>
                </span>
                <span className="px-2.5 py-1 rounded-full bg-aurionTeal-light text-[10px] font-mono text-aurionTeal-dark font-bold">Bilateral Corridor</span>
              </div>
              <h3 className="text-lg font-bold text-ink mb-3 leading-snug font-serif">
                Turnkey International Patient Department & SMO Gateway
              </h3>
              <p className="text-xs text-inkMuted leading-relaxed mb-4">
                Structuring inbound patient travel corridors, cross-border payer contracting, and a digital Second Medical Opinion triage network.
              </p>
            </div>
            <div className="pt-4 border-t border-canvasBorder">
              <span className="text-[10px] font-mono text-aurionTeal uppercase font-bold block">Target Outcome</span>
              <p className="text-xs text-ink font-semibold mt-0.5">Active regional referral channel & foreign-currency revenue capture.</p>
            </div>
          </div>

          {/* Mandate 3 */}
          <div className="p-8 rounded-3xl bg-canvasPure border border-canvasBorder shadow-executive flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between text-xs font-mono mb-4">
                <span className="inline-flex items-center space-x-1.5 text-aurionTeal font-bold">
                  <Gem className="w-3.5 h-3.5" />
                  <span>Prestige Architecture</span>
                </span>
                <span className="px-2.5 py-1 rounded-full bg-canvasSubtle text-[10px] font-mono text-inkDim font-semibold">5-Star Luxury</span>
              </div>
              <h3 className="text-lg font-bold text-ink mb-3 leading-snug font-serif">
                Prestige Aesthetics & Wellness Clinic Architecture
              </h3>
              <p className="text-xs text-inkMuted leading-relaxed mb-4">
                Concept feasibility, interior spatial direction, and concierge workflow curation fusing accredited infection control with five-star hospitality.
              </p>
            </div>
            <div className="pt-4 border-t border-canvasBorder">
              <span className="text-[10px] font-mono text-aurionTeal uppercase font-bold block">Target Outcome</span>
              <p className="text-xs text-ink font-semibold mt-0.5">Launch-ready flagship facility commanding top-tier private-pay margins.</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
