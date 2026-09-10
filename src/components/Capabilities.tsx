import React from 'react';
import { PRACTICES, Practice } from '../data/practices';
import { ArrowUpRight, Compass, ShieldCheck } from 'lucide-react';

interface CapabilitiesProps {
  onSelectPractice: (practiceId: string) => void;
  onOpenDirectory: () => void;
}

export const Capabilities: React.FC<CapabilitiesProps> = ({ onSelectPractice, onOpenDirectory }) => {
  return (
    <section id="capabilities" className="py-24 bg-canvasPure border-b border-canvasBorder relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest-luxury text-aurionTeal font-bold block">
              Core Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-ink tracking-tight">
              Eight Canonical Practice Areas Architected for Systemic Impact
            </h2>
            <p className="text-sm sm:text-base text-inkMuted leading-relaxed">
              Each practice combines deep clinical governance, sophisticated commercial modeling, and hands-on operational delivery.
            </p>
          </div>

          <button
            onClick={onOpenDirectory}
            className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-xl text-xs font-mono uppercase tracking-wider text-aurionTeal bg-aurionTeal-subtle border border-aurionTeal/30 hover:bg-aurionTeal hover:text-white transition-all self-start md:self-auto font-semibold"
          >
            <Compass className="w-4 h-4" />
            <span>Open Practice Directory</span>
          </button>
        </div>

        {/* 8 Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRACTICES.map((practice: Practice) => (
            <div
              key={practice.id}
              onClick={() => onSelectPractice(practice.id)}
              className="group bg-canvas rounded-2xl border border-canvasBorder hover:border-aurionTeal/60 overflow-hidden shadow-executive hover:shadow-executive-hover transition-all duration-300 flex flex-col cursor-pointer"
            >
              {/* Image Container (40% visual balance) */}
              <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                <img
                  src={practice.image}
                  alt={practice.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    const target = e.currentTarget;
                    const fallback = `https://drassermedhat.github.io/AurionHealth${practice.image}`;
                    if (target.src !== fallback) {
                      target.src = fallback;
                    }
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-noir/80 via-transparent to-transparent" />
                
                {/* Badge */}
                <div className="absolute top-3 left-3">
                  <span className="text-[10px] font-mono tracking-wider uppercase px-2.5 py-1 rounded bg-black/60 backdrop-blur-md text-white border border-white/20">
                    {practice.tag}
                  </span>
                </div>

                {/* Number */}
                <div className="absolute bottom-3 right-3">
                  <span className="text-xl font-mono font-bold text-white/90">
                    {practice.num}
                  </span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <span className="text-[11px] font-mono text-aurionTeal uppercase font-semibold block">
                    {practice.lead}
                  </span>
                  <h3 className="text-base font-serif font-bold text-ink leading-snug group-hover:text-aurionTeal transition-colors">
                    {practice.title}
                  </h3>
                  <p className="text-xs text-inkMuted leading-relaxed line-clamp-3">
                    {practice.summary}
                  </p>
                </div>

                <div className="pt-3 border-t border-canvasBorder flex items-center justify-between text-xs font-mono text-aurionTeal font-medium group-hover:translate-x-1 transition-transform">
                  <span>Architecture & Details</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Integration Proof Banner */}
        <div className="mt-12 p-8 rounded-2xl bg-canvasSubtle border border-canvasBorder grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          <div className="md:col-span-8 space-y-2">
            <div className="inline-flex items-center space-x-2 text-xs font-mono text-aurionTeal uppercase tracking-wider font-semibold">
              <ShieldCheck className="w-4 h-4" />
              <span>Full Portfolio Synergy</span>
            </div>
            <h3 className="text-xl font-serif text-ink font-bold">
              Integrated Capabilities. No Fragmented Handoffs.
            </h3>
            <p className="text-xs sm:text-sm text-inkMuted leading-relaxed">
              Unlike disparate consulting agencies, Aurion seamlessly fuses international patient corridors, clinical hospital turnaround, luxury clinic aesthetics, sovereign congresses, and digital health into a cohesive operational architecture.
            </p>
          </div>
          <div className="md:col-span-4 flex justify-start md:justify-end">
            <button
              onClick={onOpenDirectory}
              className="px-5 py-3 rounded-xl text-xs font-mono uppercase tracking-wider text-white bg-aurionTeal hover:bg-aurionTeal-vibrant shadow-sm transition-all font-semibold"
            >
              Explore Complete Directory
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
