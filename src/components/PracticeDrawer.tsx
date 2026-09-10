import React from 'react';
import { PRACTICES, Practice } from '../data/practices';
import { X, CheckCircle2, ArrowRight, Shield, Award } from 'lucide-react';

interface PracticeDrawerProps {
  selectedPracticeId: string | null;
  onClose: () => void;
  onOpenContact: () => void;
}

export const PracticeDrawer: React.FC<PracticeDrawerProps> = ({
  selectedPracticeId,
  onClose,
  onOpenContact
}) => {
  if (!selectedPracticeId) return null;

  const practice: Practice = PRACTICES.find(p => p.id === selectedPracticeId) || PRACTICES[0];

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        onClick={onClose}
        className="absolute inset-0 bg-noir/60 backdrop-blur-sm transition-opacity"
      />

      {/* Slide-out Drawer Panel */}
      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-2xl bg-canvasPure shadow-2xl border-l border-canvasBorder flex flex-col">
          {/* Header */}
          <div className="px-6 py-5 border-b border-canvasBorder flex items-center justify-between bg-canvasSubtle/50">
            <div className="flex items-center space-x-3">
              <span className="text-xs font-mono font-bold px-2 py-1 rounded bg-aurionTeal-subtle text-aurionTeal border border-aurionTeal/20">
                PRACTICE {practice.num}
              </span>
              <span className="text-xs font-mono text-inkMuted uppercase tracking-wider">
                {practice.tag}
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-lg text-inkMuted hover:text-ink hover:bg-canvas border border-transparent hover:border-canvasBorder transition-all"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Content Body */}
          <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-8">
            {/* Title & Lead */}
            <div className="space-y-3">
              <div className="inline-flex items-center space-x-2 text-xs font-mono text-aurionTeal font-semibold uppercase">
                <Award className="w-4 h-4" />
                <span>{practice.lead}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif text-ink tracking-tight">
                {practice.title}
              </h2>
            </div>

            {/* Visual Cover */}
            <div className="relative h-56 rounded-xl overflow-hidden border border-canvasBorder">
              <img
                src={practice.image}
                alt={practice.title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.currentTarget;
                  const fallback = `https://drassermedhat.github.io/AurionHealth${practice.image}`;
                  if (target.src !== fallback) {
                    target.src = fallback;
                  }
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-noir/70 via-transparent to-transparent" />
            </div>

            {/* Overview */}
            <div className="space-y-3">
              <h3 className="text-xs font-mono uppercase tracking-wider text-ink font-bold">
                Executive Practice Overview
              </h3>
              <p className="text-sm sm:text-base text-inkMuted leading-relaxed">
                {practice.overview}
              </p>
            </div>

            {/* Deliverables Checklist */}
            <div className="space-y-3">
              <h3 className="text-xs font-mono uppercase tracking-wider text-ink font-bold">
                Core Architectural Deliverables
              </h3>
              <div className="bg-canvas rounded-xl p-5 border border-canvasBorder space-y-3">
                {practice.deliverables.map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-3 text-xs sm:text-sm text-ink">
                    <CheckCircle2 className="w-4 h-4 text-aurionTeal shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Target Outcome */}
            <div className="p-5 rounded-xl bg-aurionTeal-subtle border border-aurionTeal/20 space-y-2">
              <div className="flex items-center space-x-2 text-xs font-mono text-aurionTeal uppercase font-bold">
                <Shield className="w-4 h-4" />
                <span>Target Institutional Outcome</span>
              </div>
              <p className="text-xs sm:text-sm text-ink font-medium leading-relaxed">
                {practice.impact}
              </p>
            </div>
          </div>

          {/* Footer Drawer Action */}
          <div className="px-6 py-4 border-t border-canvasBorder bg-canvasSubtle/40 flex items-center justify-between">
            <button
              onClick={onClose}
              className="text-xs font-mono uppercase tracking-wider text-inkMuted hover:text-ink"
            >
              Close
            </button>
            <button
              onClick={() => { onClose(); onOpenContact(); }}
              className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl text-xs font-mono uppercase tracking-wider text-white bg-aurionTeal hover:bg-aurionTeal-vibrant shadow-sm font-semibold"
            >
              <span>Initiate Practice Mandate</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
