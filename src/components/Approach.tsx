import React from 'react';
import { Search, Compass, Cpu, CheckCircle } from 'lucide-react';

export const Approach: React.FC = () => {
  const phases = [
    {
      step: "01",
      icon: Search,
      title: "Diagnostic & Baseline Audit",
      timeline: "Weeks 1 to 4",
      desc: "Deep-dive institutional assessment of clinical governance, operational throughput, financial leakage, and cross-border market demand."
    },
    {
      step: "02",
      icon: Compass,
      title: "Strategic Architecture",
      timeline: "Weeks 5 to 10",
      desc: "Formulation of target operating models, clinical corridor agreements, technology roadmaps, and board-level executive blueprints."
    },
    {
      step: "03",
      icon: Cpu,
      title: "Operationalization & PMO",
      timeline: "Months 3 to 9",
      desc: "Embedded implementation cadence, clinical protocol rollouts, staff masterclasses, and rigorous milestone tracking."
    },
    {
      step: "04",
      icon: CheckCircle,
      title: "Value Realization & Autonomy",
      timeline: "Months 10 to 12",
      desc: "Institutionalizing clinical KPIs, auditing margin expansion, validating patient satisfaction, and handing off sustainable leadership cadence."
    }
  ];

  return (
    <section id="approach" className="py-24 bg-canvas border-b border-canvasBorder relative bg-drafting-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16 space-y-3">
          <span className="text-xs font-mono uppercase tracking-widest-luxury text-aurionTeal font-bold block">
            Advisory Approach
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif text-ink tracking-tight">
            The Aurion Engagement Architecture
          </h2>
          <p className="text-sm sm:text-base text-inkMuted leading-relaxed">
            A disciplined, four-phase delivery methodology designed to mitigate risk and guarantee quantifiable clinical and commercial ROI.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {phases.map((phase, idx) => {
            const Icon = phase.icon;
            return (
              <div
                key={idx}
                className="bg-canvasPure rounded-2xl border border-canvasBorder p-6 shadow-executive flex flex-col justify-between space-y-6 relative"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-mono font-bold text-aurionTeal/80">
                      {phase.step}
                    </span>
                    <div className="p-2 rounded-lg bg-canvasSubtle text-aurionTeal border border-canvasBorder">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-inkDim block">
                      {phase.timeline}
                    </span>
                    <h3 className="text-base font-serif font-bold text-ink mt-1">
                      {phase.title}
                    </h3>
                  </div>
                  <p className="text-xs text-inkMuted leading-relaxed">
                    {phase.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-canvasBorder text-[11px] font-mono text-inkDim uppercase">
                  Institutional Milestone {phase.step}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
