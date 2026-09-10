import React, { useState } from 'react';
import { THESIS_TABS } from '../data/thesisTabs';
import { CheckCircle2, Award } from 'lucide-react';

export const AboutThesis: React.FC = () => {
  const [activeTabId, setActiveTabId] = useState(THESIS_TABS[0].id);
  const activeTab = THESIS_TABS.find(t => t.id === activeTabId) || THESIS_TABS[0];

  return (
    <section id="about" className="py-24 bg-canvas border-b border-canvasBorder relative bg-drafting-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-3">
          <span className="text-xs font-mono uppercase tracking-widest-luxury text-aurionTeal font-bold block">
            Institutional Profile & Strategic Thesis
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif text-ink tracking-tight">
            Bridging Sovereign Healthcare Ambition and Clinical Operational Reality
          </h2>
          <p className="text-sm sm:text-base text-inkMuted leading-relaxed">
            Aurion operates at the intersection of public-sector health reform, private hospital group expansion, and cross-border clinical corridors. We do not produce static reports; we architect, operationalize, and govern end-to-end transformations.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="border-b border-canvasBorder flex flex-wrap gap-2 sm:gap-4 mb-8">
          {THESIS_TABS.map((tab) => {
            const isActive = tab.id === activeTabId;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTabId(tab.id)}
                className={`px-4 py-3 text-xs sm:text-sm font-mono tracking-wider transition-all border-b-2 -mb-px flex items-center space-x-2 ${
                  isActive
                    ? 'border-aurionTeal text-aurionTeal font-bold bg-canvasPure rounded-t-lg shadow-sm'
                    : 'border-transparent text-inkMuted hover:text-ink hover:border-canvasBorder'
                }`}
              >
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Active Tab Panel */}
        <div className="bg-canvasPure rounded-2xl border border-canvasBorder p-6 sm:p-10 shadow-executive">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-wider text-aurionTeal font-semibold">
                <Award className="w-4 h-4" />
                <span>Charter Pillar {activeTab.num}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif text-ink tracking-tight">
                {activeTab.heading}
              </h3>
              <div className="space-y-4 text-inkMuted text-sm sm:text-base leading-relaxed">
                {activeTab.paragraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 space-y-4">
              <div className="bg-canvas rounded-xl p-6 border border-canvasBorder/80 space-y-4">
                <span className="text-xs font-mono uppercase tracking-wider text-ink font-bold block">
                  Core Structural Differentiators
                </span>
                <div className="space-y-4">
                  {activeTab.pillars.map((pillar, idx) => (
                    <div key={idx} className="flex items-start space-x-3">
                      <CheckCircle2 className="w-4 h-4 text-aurionTeal shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-sm font-semibold text-ink font-sans">{pillar.title}</h4>
                        <p className="text-xs text-inkMuted mt-0.5 leading-relaxed">{pillar.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
