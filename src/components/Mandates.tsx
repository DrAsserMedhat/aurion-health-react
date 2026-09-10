import React from 'react';
import { MANDATES } from '../data/mandates';
import { TrendingUp, ShieldAlert, Sparkles } from 'lucide-react';

export const Mandates: React.FC = () => {
  return (
    <section id="mandates" className="py-24 bg-canvas border-b border-canvasBorder relative bg-drafting-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16 space-y-3">
          <span className="text-xs font-mono uppercase tracking-widest-luxury text-aurionTeal font-bold block">
            Representative Mandates
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif text-ink tracking-tight">
            Selected Advisory Engagements & Impact Moves
          </h2>
          <p className="text-sm sm:text-base text-inkMuted leading-relaxed">
            Representative case architectures demonstrating measured clinical and financial returns delivered across sovereign and institutional clients.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {MANDATES.map((m, idx) => (
            <div
              key={idx}
              className="bg-canvasPure rounded-2xl border border-canvasBorder p-6 sm:p-8 shadow-executive flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="px-2.5 py-1 rounded bg-canvasSubtle text-ink font-semibold border border-canvasBorder">
                    {m.location}
                  </span>
                  <span className="text-aurionTeal font-semibold uppercase">
                    Mandate 0{idx + 1}
                  </span>
                </div>

                <div>
                  <span className="text-[11px] font-mono text-inkDim block uppercase">
                    {m.client}
                  </span>
                  <h3 className="text-lg font-serif font-bold text-ink mt-0.5">
                    {m.scope}
                  </h3>
                </div>

                <div className="space-y-3 text-xs text-inkMuted leading-relaxed">
                  <div className="p-3 rounded-lg bg-canvas border border-canvasBorder/60 space-y-1">
                    <div className="flex items-center space-x-1.5 text-ink font-semibold font-mono text-[11px]">
                      <ShieldAlert className="w-3.5 h-3.5 text-amber-600" />
                      <span>Institutional Challenge</span>
                    </div>
                    <p>{m.challenge}</p>
                  </div>

                  <div className="p-3 rounded-lg bg-canvas border border-canvasBorder/60 space-y-1">
                    <div className="flex items-center space-x-1.5 text-ink font-semibold font-mono text-[11px]">
                      <Sparkles className="w-3.5 h-3.5 text-aurionTeal" />
                      <span>Advisory Intervention</span>
                    </div>
                    <p>{m.action}</p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-canvasBorder space-y-1">
                <div className="flex items-center space-x-1.5 text-aurionTeal font-mono text-xs font-bold uppercase">
                  <TrendingUp className="w-3.5 h-3.5" />
                  <span>Target Outcome</span>
                </div>
                <p className="text-xs text-ink font-semibold leading-relaxed">
                  {m.targetOutcome}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
