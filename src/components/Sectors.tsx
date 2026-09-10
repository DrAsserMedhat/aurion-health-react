import React from 'react';
import { Landmark, Building2, Cpu, Sparkles } from 'lucide-react';

export const Sectors: React.FC = () => {
  const sectors = [
    {
      icon: Landmark,
      title: "Sovereign & Public Health Authorities",
      scope: "National health vision realization, cross-border patient referral corridors, and institutional turnaround for public tertiary networks."
    },
    {
      icon: Building2,
      title: "Private Hospital Systems & Academic Centers",
      scope: "Operational throughput acceleration, international patient department (IPD) setup, clinical governance, and margin recovery."
    },
    {
      icon: Cpu,
      title: "MedTech, Digital Health & AI Innovators",
      scope: "Clinical validation, enterprise EMR adoption roadmaps, digital second opinion networks, and health data governance."
    },
    {
      icon: Sparkles,
      title: "Health Tourism & Wellness Destinations",
      scope: "Turnkey luxury aesthetics, longevity center spatial curation, and international medical travel corridor architecture."
    }
  ];

  return (
    <section id="sectors" className="py-24 bg-canvasPure border-b border-canvasBorder relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16 space-y-3">
          <span className="text-xs font-mono uppercase tracking-widest-luxury text-aurionTeal font-bold block">
            Sectors Served
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif text-ink tracking-tight">
            Deep Domain Expertise Across the Healthcare Ecosystem
          </h2>
          <p className="text-sm sm:text-base text-inkMuted leading-relaxed">
            Our advisory mandates span sovereign ministries, multinational hospital networks, high-net-worth investors, and cutting-edge healthcare technology ventures.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {sectors.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div
                key={idx}
                className="bg-canvas rounded-2xl border border-canvasBorder p-6 shadow-executive hover:shadow-executive-hover transition-all space-y-4"
              >
                <div className="p-3 rounded-xl bg-aurionTeal-subtle text-aurionTeal border border-aurionTeal/20 w-fit">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-serif font-bold text-ink">
                  {s.title}
                </h3>
                <p className="text-xs text-inkMuted leading-relaxed">
                  {s.scope}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
