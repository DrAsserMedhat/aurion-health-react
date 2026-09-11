import React, { useState, useEffect } from 'react';
import { Check, ArrowRight, X, ArrowUpRight } from 'lucide-react';
import { LEADERSHIP, Leader } from '../data/leadership';

export const Leadership: React.FC = () => {
  const [selectedLeader, setSelectedLeader] = useState<Leader | null>(null);

  // Close modal on ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedLeader(null);
      }
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
    <section id="leadership" className="py-24 bg-canvasPure border-b border-canvasBorder relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Introduction */}
        <div className="max-w-3xl mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 text-[10px] font-mono uppercase tracking-widest text-aurionTeal font-bold">
            <span className="w-1.5 h-1.5 rounded-full bg-aurionTeal animate-pulse"></span>
            <span>THE FOUNDERS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-ink tracking-tight leading-[1.15]">
            Built at the Intersection of Healthcare, Strategy &amp; Growth
          </h2>
          <p className="text-inkMuted text-sm sm:text-base leading-relaxed pt-1 font-sans">
            Aurion is led by two complementary healthcare executives bringing together clinical insight, strategic management, operational transformation, commercial growth, and international healthcare expertise.
          </p>
        </div>

        {/* Executive Founders Board — Balanced 2-Column Desktop Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 max-w-6xl mx-auto items-stretch">
          {LEADERSHIP.map((leader) => (
            <div 
              key={leader.id}
              className="executive-card rounded-3xl p-7 sm:p-9 lg:p-10 shadow-executive bg-canvas border border-canvasBorder hover:border-aurionTeal/40 hover:shadow-executive-hover transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Card Top: Portrait + Identity + Strategic Role + Snapshot */}
              <div>
                {/* Portrait + Identity Header */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-6 mb-6">
                  {/* Portrait with refined architectural framing */}
                  <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl overflow-hidden border-2 border-aurionTeal/25 shadow-sm shrink-0 bg-canvasSubtle relative group-hover:border-aurionTeal/50 transition-colors duration-300">
                    <img 
                      src={leader.image} 
                      alt={leader.name} 
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 filter contrast-[1.02]"
                      onError={(e) => { e.currentTarget.src = leader.fallbackImage; }}
                    />
                  </div>

                  {/* Identity Block */}
                  <div className="flex-1 min-w-0">
                    <div className="text-[10px] sm:text-[11px] font-mono uppercase tracking-widest text-aurionTeal font-bold">
                      {leader.role}
                    </div>
                    <h3 className="font-serif text-2xl sm:text-[26px] font-bold text-ink tracking-tight mt-0.5">
                      {leader.name}
                    </h3>
                    <div className="text-xs sm:text-[13px] font-sans font-medium text-inkMuted mt-1 leading-snug">
                      {leader.strategicRole}
                    </div>

                    {/* Strategic Micro-Positioning Device */}
                    <div className="mt-2.5 inline-flex items-center px-2.5 py-0.5 rounded-full bg-aurionTeal-light/60 border border-aurionTeal/20 text-[9px] sm:text-[10px] font-mono font-bold tracking-widest-luxury uppercase text-aurionTeal-dark">
                      {leader.microPositioning}
                    </div>
                  </div>
                </div>

                {/* Executive Snapshot (Concise, high-level credibility) */}
                <div className="space-y-3 text-xs sm:text-sm text-inkMuted leading-relaxed font-sans">
                  {leader.snapshot.map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>
              </div>

              {/* Card Bottom: Divider + 3 Expertise Items + Interactive CTA */}
              <div className="mt-6 pt-5 border-t border-canvasBorder">
                <div className="text-[10px] font-mono uppercase tracking-wider text-inkDim font-bold mb-3">
                  Core Strategic Mandates
                </div>

                {/* 3 Key Expertise Items with clean minimalist check icons */}
                <div className="space-y-2.5 mb-6 text-xs font-sans text-ink">
                  {leader.expertise.map((item, idx) => (
                    <div key={idx} className="flex items-start space-x-2.5">
                      <span className="w-4 h-4 rounded-full bg-aurionTeal-light text-aurionTeal flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                        <Check className="w-2.5 h-2.5 stroke-[2.5]" />
                      </span>
                      <span className="leading-snug text-inkMuted font-medium">{item}</span>
                    </div>
                  ))}
                </div>

                {/* Interactive CTA: Opens Executive Profile Modal */}
                <button
                  type="button"
                  onClick={() => setSelectedLeader(leader)}
                  className="w-full inline-flex items-center justify-between px-5 py-3.5 rounded-xl border border-aurionTeal/30 bg-canvasPure hover:bg-aurionTeal-light/40 hover:border-aurionTeal text-ink font-mono text-xs font-bold uppercase tracking-wider shadow-sm transition-all duration-200 group/btn"
                >
                  <span>VIEW EXECUTIVE PROFILE</span>
                  <ArrowRight className="w-4 h-4 text-aurionTeal group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* ================================================================= */}
      {/* PREMIUM EXECUTIVE PROFILE MODAL                                    */}
      {/* ================================================================= */}
      {selectedLeader && (
        <div 
          className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 md:p-10 animate-fade-in"
          onClick={() => setSelectedLeader(null)}
          aria-modal="true"
          role="dialog"
        >
          <div 
            className="relative w-full max-w-3xl bg-canvasPure rounded-3xl border border-canvasBorder shadow-2xl overflow-hidden my-auto max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-6 sm:p-8 bg-canvas border-b border-canvasBorder relative flex items-start justify-between gap-4 shrink-0">
              <div className="flex items-center space-x-5">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border-2 border-aurionTeal/30 shadow-md shrink-0 bg-canvasSubtle">
                  <img 
                    src={selectedLeader.image} 
                    alt={selectedLeader.name} 
                    className="w-full h-full object-cover object-center"
                    onError={(e) => { e.currentTarget.src = selectedLeader.fallbackImage; }}
                  />
                </div>
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-widest text-aurionTeal font-bold">
                    {selectedLeader.role}
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-ink tracking-tight mt-0.5">
                    {selectedLeader.name}
                  </h3>
                  <div className="text-xs sm:text-sm font-sans text-inkDim mt-1">
                    {selectedLeader.strategicRole}
                  </div>
                  <div className="mt-2 inline-flex items-center px-2.5 py-0.5 rounded-full bg-aurionTeal-light border border-aurionTeal/20 text-[9px] font-mono font-bold tracking-widest-luxury uppercase text-aurionTeal-dark">
                    {selectedLeader.microPositioning}
                  </div>
                </div>
              </div>

              {/* Close Button */}
              <button
                type="button"
                onClick={() => setSelectedLeader(null)}
                aria-label="Close profile"
                className="p-2 rounded-full text-inkDim hover:text-ink hover:bg-canvasSubtle transition-colors focus:outline-none"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body: Full Executive Biography */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-6 font-sans text-xs sm:text-sm text-inkMuted leading-relaxed">
              {selectedLeader.fullBio.map((section, idx) => (
                <div key={idx} className="space-y-2">
                  {section.title && (
                    <div className="inline-block font-mono text-[11px] font-bold uppercase tracking-wider text-aurionTeal-dark bg-aurionTeal-light/50 px-2.5 py-1 rounded-md border border-aurionTeal/15">
                      {section.title}
                    </div>
                  )}
                  <p className="leading-relaxed text-ink/90">{section.content}</p>
                </div>
              ))}
            </div>

            {/* Modal Footer */}
            <div className="p-5 sm:p-6 bg-canvas border-t border-canvasBorder flex flex-wrap items-center justify-between gap-4 shrink-0">
              <span className="text-[11px] font-mono text-inkDim">
                Aurion Health Advisory • Executive Board
              </span>
              <div className="flex items-center space-x-3">
                <a
                  href="#contact"
                  onClick={() => setSelectedLeader(null)}
                  className="px-5 py-2.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider text-noir bg-gradient-to-r from-aurionTeal-vibrant to-aurionTeal-glow hover:brightness-110 shadow-glow-teal transition-all flex items-center space-x-1.5"
                >
                  <span>Executive Consultation</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
                <button
                  type="button"
                  onClick={() => setSelectedLeader(null)}
                  className="px-5 py-2.5 rounded-full text-xs font-mono font-medium text-inkDim hover:text-ink border border-canvasBorder bg-white hover:bg-canvasSubtle transition-colors"
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

