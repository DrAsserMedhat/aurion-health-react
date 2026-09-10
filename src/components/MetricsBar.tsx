import React from 'react';
import { Globe2, Layers, Compass, TrendingUp } from 'lucide-react';

export const MetricsBar: React.FC = () => {
  const metrics = [
    {
      icon: Globe2,
      label: "Institutional Footprint",
      value: "Egypt & GCC",
      detail: "Sovereign corridors & cross-border referral architecture"
    },
    {
      icon: Layers,
      label: "Practice Scope",
      value: "8 Canonical Practices",
      detail: "End-to-end healthcare transformation & governance"
    },
    {
      icon: Compass,
      label: "Flagship Capability",
      value: "Turnkey IPD & Telehealth",
      detail: "Cross-border patient flows & sovereign medical corridors"
    },
    {
      icon: TrendingUp,
      label: "Execution Cadence",
      value: "Executive PMO",
      detail: "Institutional governance & measured clinical ROI"
    }
  ];

  return (
    <section className="bg-canvasPure border-b border-canvasBorder py-10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {metrics.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx} 
                className="flex items-start space-x-4 p-4 rounded-xl border border-canvasBorder/60 bg-canvasSubtle/40 hover:bg-canvasSubtle transition-all"
              >
                <div className="p-2.5 rounded-lg bg-aurionTeal-subtle text-aurionTeal border border-aurionTeal/20 shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-inkDim block">
                    {item.label}
                  </span>
                  <div className="text-base sm:text-lg font-serif font-bold text-ink tracking-tight">
                    {item.value}
                  </div>
                  <p className="text-xs text-inkMuted leading-snug">
                    {item.detail}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
