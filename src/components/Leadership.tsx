import React from 'react';
import { LEADERSHIP } from '../data/leadership';
import { Check } from 'lucide-react';

export const Leadership: React.FC = () => {
  return (
    <section id="leadership" className="py-24 bg-canvasPure border-b border-canvasBorder relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16 space-y-3">
          <span className="text-xs font-mono uppercase tracking-widest-luxury text-aurionTeal font-bold block">
            Advisory Leadership
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif text-ink tracking-tight">
            Physician-Executives & Commercial Strategists
          </h2>
          <p className="text-sm sm:text-base text-inkMuted leading-relaxed">
            Direct managing partner immersion in every institutional engagement, ensuring senior accountability and clinical authenticity.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {LEADERSHIP.map((leader, idx) => (
            <div
              key={idx}
              className="bg-canvas rounded-2xl border border-canvasBorder overflow-hidden shadow-executive flex flex-col sm:flex-row"
            >
              {/* Leader Photo */}
              <div className="sm:w-2/5 relative h-72 sm:h-auto bg-slate-100 shrink-0">
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-full h-full object-cover object-top"
                  onError={(e) => {
                    const target = e.currentTarget;
                    const fallback = `https://drassermedhat.github.io/AurionHealth${leader.image}`;
                    if (target.src !== fallback) {
                      target.src = fallback;
                    }
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-noir/50 via-transparent to-transparent sm:hidden" />
              </div>

              {/* Bio & Details */}
              <div className="sm:w-3/5 p-6 sm:p-8 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div>
                    <span className="text-[10px] font-mono text-aurionTeal uppercase font-bold tracking-wider block">
                      {leader.leadTag}
                    </span>
                    <h3 className="text-xl font-serif font-bold text-ink">
                      {leader.name}
                    </h3>
                    <p className="text-xs font-mono text-inkDim uppercase">
                      {leader.role}
                    </p>
                  </div>

                  <p className="text-xs text-inkMuted leading-relaxed">
                    {leader.bio}
                  </p>
                </div>

                <div className="pt-4 border-t border-canvasBorder space-y-2 text-xs font-mono text-ink">
                  {leader.expertise.map((exp, eIdx) => (
                    <div key={eIdx} className="flex items-center space-x-2 text-[11px]">
                      <Check className="w-3.5 h-3.5 text-aurionTeal shrink-0" />
                      <span className="line-clamp-1">{exp}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
