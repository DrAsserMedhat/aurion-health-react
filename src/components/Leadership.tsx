import React, { useState, useEffect } from 'react';
import { Check, ArrowRight, X, ArrowUpRight } from 'lucide-react';
import { LEADERSHIP, Leader } from '../data/leadership';

export const Leadership: React.FC = () => {
  const [selectedLeader, setSelectedLeader] = useState<Leader | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedLeader(null);
    };
    if (selectedLeader) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedLeader]);

  return (
    <section id="leadership" className="bg-[#F8F9FB] border-b border-canvasBorder py-24 relative overflow-hidden">

      {/* Very subtle dot grid */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: 'radial-gradient(circle, rgba(27,138,158,0.07) 1px, transparent 1px)',
        backgroundSize: '40px 40px',
      }} />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8">

        {/* Section header */}
        <div className="mb-14">
          <div className="section-label mb-4">The Founders</div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <h2 className="font-cormorant text-[34px] sm:text-[48px] font-bold text-ink tracking-tight leading-[1.05] max-w-2xl">
              Built at the Intersection of Healthcare, Strategy & Growth
            </h2>
            <p className="text-inkMuted text-[13.5px] sm:text-[14.5px] leading-[1.75] font-sans max-w-md md:text-right">
              Aurion is led by two complementary healthcare executives combining clinical insight, strategic management, and international expertise.
            </p>
          </div>
          <div className="teal-rule mt-6" />
        </div>

        {/* 2-column founder cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-7">
          {LEADERSHIP.map((leader) => (
            <div
              key={leader.id}
              className="bg-white rounded-2xl border border-canvasBorder shadow-executive hover:border-aurionTeal/30 hover:shadow-executive-hover transition-all duration-400 group overflow-hidden flex flex-col"
            >
              {/* Card top: portrait strip */}
              <div className="relative h-[180px] sm:h-[200px] overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900">
                {/* Ambient teal glow on portrait bg */}
                <div className="absolute top-0 right-0 w-48 h-48 bg-aurionTeal/15 rounded-full blur-3xl pointer-events-none" />
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-full h-full object-cover object-top group-hover:scale-[1.03] transition-transform duration-700"
                  style={{ filter: 'contrast(1.05) brightness(0.90)' }}
                  onError={(e) => { e.currentTarget.src = leader.fallbackImage; }}
                />
                {/* Gradient fade to card body */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white pointer-events-none" />

                {/* Role badge top-left */}
                <div className="absolute top-4 left-5">
                  <span className="px-2.5 py-1 rounded-full bg-black/50 backdrop-blur-sm text-[9px] font-mono text-white/80 font-bold uppercase tracking-[0.18em] border border-white/15">
                    {leader.role}
                  </span>
                </div>

                {/* Micro-positioning badge top-right */}
                <div className="absolute top-4 right-5">
                  <span className="px-2.5 py-1 rounded-full bg-aurionTeal/80 backdrop-blur-sm text-[9px] font-mono text-white font-bold uppercase tracking-wider">
                    {leader.microPositioning}
                  </span>
                </div>
              </div>

              {/* Card body */}
              <div className="p-7 sm:p-9 flex flex-col flex-1">
                {/* Name + strategic role */}
                <div className="mb-5">
                  <h3 className="font-cormorant text-[26px] sm:text-[30px] font-bold text-ink tracking-tight leading-tight">
                    {leader.name}
                  </h3>
                  <div className="text-[12.5px] font-sans text-aurionTeal font-semibold mt-1">{leader.strategicRole}</div>
                </div>

                <div className="teal-rule mb-5" />

                {/* Snapshot */}
                <div className="space-y-3 text-[13px] text-inkMuted leading-[1.75] font-sans mb-6 flex-1">
                  {leader.snapshot.map((para, idx) => <p key={idx}>{para}</p>)}
                </div>

                {/* Core mandates */}
                <div className="mb-6">
                  <div className="text-[9.5px] font-mono uppercase tracking-widest text-inkDim font-bold mb-3">
                    Core Strategic Mandates
                  </div>
                  <div className="space-y-2">
                    {leader.expertise.map((item, idx) => (
                      <div key={idx} className="flex items-start space-x-2.5">
                        <span className="w-4 h-4 rounded-full bg-aurionTeal/10 border border-aurionTeal/25 text-aurionTeal flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-2.5 h-2.5 stroke-[2.5]" />
                        </span>
                        <span className="text-[12.5px] text-inkMuted leading-snug font-medium font-sans">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <button
                  type="button"
                  onClick={() => setSelectedLeader(leader)}
                  className="w-full flex items-center justify-between px-5 py-4 rounded-xl border border-aurionTeal/25 bg-aurionTeal/4 hover:bg-aurionTeal/8 hover:border-aurionTeal/50 text-ink font-mono text-[10.5px] font-bold uppercase tracking-wider transition-all duration-200 group/btn"
                >
                  <span>View Executive Profile</span>
                  <ArrowRight className="w-4 h-4 text-aurionTeal group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Executive Profile Modal ── */}
      {selectedLeader && (
        <div
          className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 sm:p-8"
          style={{ background: 'rgba(0,0,0,0.75)', backdropFilter: 'blur(12px)' }}
          onClick={() => setSelectedLeader(null)}
          aria-modal="true"
          role="dialog"
        >
          <div
            className="relative w-full max-w-3xl bg-white rounded-2xl border border-canvasBorder shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal header */}
            <div
              className="px-7 pt-7 pb-6 border-b border-canvasBorder flex items-start justify-between gap-4 shrink-0"
              style={{ background: 'linear-gradient(to bottom, #F8F9FB, #FFFFFF)' }}
            >
              <div className="flex items-center space-x-5">
                <div className="w-[72px] h-[72px] rounded-xl overflow-hidden border-2 border-aurionTeal/25 shadow-sm shrink-0">
                  <img
                    src={selectedLeader.image}
                    alt={selectedLeader.name}
                    className="w-full h-full object-cover object-top"
                    onError={(e) => { e.currentTarget.src = selectedLeader.fallbackImage; }}
                  />
                </div>
                <div>
                  <div className="text-[9.5px] font-mono uppercase tracking-[0.18em] text-aurionTeal font-bold">{selectedLeader.role}</div>
                  <h3 className="font-cormorant text-[26px] font-bold text-ink tracking-tight leading-tight">{selectedLeader.name}</h3>
                  <div className="text-[12px] font-sans text-inkMuted mt-0.5">{selectedLeader.strategicRole}</div>
                  <div className="mt-2 inline-flex items-center px-2.5 py-0.5 rounded-full bg-aurionTeal-light border border-aurionTeal/20 text-[9px] font-mono font-bold tracking-widest uppercase text-aurionTeal-dark">
                    {selectedLeader.microPositioning}
                  </div>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setSelectedLeader(null)}
                className="p-2 rounded-full text-inkDim hover:text-ink hover:bg-canvasSubtle transition-colors"
                aria-label="Close profile"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal body */}
            <div className="p-7 overflow-y-auto space-y-5 flex-1">
              {selectedLeader.fullBio.map((section, idx) => (
                <div key={idx} className="space-y-2">
                  {section.title && (
                    <div className="inline-block font-mono text-[10.5px] font-bold uppercase tracking-wider text-aurionTeal bg-aurionTeal/8 px-2.5 py-1 rounded-md border border-aurionTeal/15">
                      {section.title}
                    </div>
                  )}
                  <p className="text-[13px] text-inkMuted leading-[1.80] font-sans">{section.content}</p>
                </div>
              ))}
            </div>

            {/* Modal footer */}
            <div className="px-7 py-5 bg-canvas border-t border-canvasBorder flex flex-wrap items-center justify-between gap-4 shrink-0">
              <span className="text-[11px] font-mono text-inkDim">Aurion Health Advisory · Executive Board</span>
              <div className="flex items-center space-x-3">
                <a
                  href="#contact"
                  onClick={() => setSelectedLeader(null)}
                  className="px-5 py-2.5 rounded-full text-[10.5px] font-mono font-bold uppercase tracking-wider text-white transition-all flex items-center space-x-1.5 hover:brightness-110"
                  style={{ background: 'linear-gradient(135deg, #1B8A9E, #126673)', boxShadow: '0 0 16px rgba(27,138,158,0.3)' }}
                >
                  <span>Executive Consultation</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
                <button
                  type="button"
                  onClick={() => setSelectedLeader(null)}
                  className="px-5 py-2.5 rounded-full text-[10.5px] font-mono font-medium text-inkDim hover:text-ink border border-canvasBorder bg-white hover:bg-canvasSubtle transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
