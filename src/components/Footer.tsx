import React from 'react';
import { PRACTICES } from '../data/practices';

interface FooterProps {
  onSelectPractice: (id: string) => void;
  onOpenContact: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectPractice, onOpenContact }) => {
  return (
    <footer className="bg-obsidian text-slate-400 py-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-12">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <img
              src="/Aurion-Logo.png"
              alt="Aurion Health Advisory"
              className="h-16 md:h-20 w-auto object-contain brightness-110"
              onError={(e) => {
                const target = e.currentTarget;
                if (target.src !== 'https://drassermedhat.github.io/AurionHealth/Aurion-Logo.png') {
                  target.src = 'https://drassermedhat.github.io/AurionHealth/Aurion-Logo.png';
                }
              }}
            />
            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              Aurion Health Advisory is an elite healthcare advisory practice architecting institutional transformation, international patient corridors, and next-generation clinical ecosystems across Egypt and the GCC.
            </p>
            <div className="pt-2 text-[11px] font-mono text-slate-500 uppercase">
              Cairo • Riyadh • Dubai
            </div>
          </div>

          {/* Practice Links */}
          <div className="md:col-span-4 space-y-3">
            <span className="text-xs font-mono uppercase tracking-wider text-white font-bold block">
              Canonical Practices
            </span>
            <ul className="space-y-1.5 text-xs">
              {PRACTICES.map(p => (
                <li key={p.id}>
                  <button
                    onClick={() => onSelectPractice(p.id)}
                    className="hover:text-aurionTeal-vibrant transition-colors text-left"
                  >
                    {p.num} - {p.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Institutional Contact */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-xs font-mono uppercase tracking-wider text-white font-bold block">
              Direct Contact
            </span>
            <div className="text-xs space-y-2 text-slate-400">
              <p>Confidential Client Inquiries:</p>
              <button
                onClick={onOpenContact}
                className="text-aurionTeal-glow hover:underline block text-left font-mono"
              >
                inquiries@aurionhealth.com
              </button>
              <div className="pt-4">
                <button
                  onClick={onOpenContact}
                  className="px-4 py-2 rounded-lg text-xs font-mono uppercase tracking-wider text-white bg-aurionTeal hover:bg-aurionTeal-vibrant transition-all"
                >
                  Initiate Mandate
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Legal bar */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} Aurion Health Advisory. All rights reserved.</p>
          <p>Confidential & Proprietary Institutional Architecture</p>
        </div>
      </div>
    </footer>
  );
};
