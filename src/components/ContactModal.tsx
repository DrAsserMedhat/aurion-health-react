import React, { useState } from 'react';
import { X, Send, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { PRACTICES } from '../data/practices';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    title: '',
    organization: '',
    jurisdiction: 'Egypt',
    practice: PRACTICES[0].title,
    email: '',
    message: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        onClick={onClose}
        className="fixed inset-0 bg-noir/70 backdrop-blur-sm transition-opacity"
      />

      {/* Dialog Window */}
      <div className="relative bg-canvasPure rounded-2xl border border-canvasBorder shadow-2xl max-w-xl w-full p-6 sm:p-8 z-10">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg text-inkMuted hover:text-ink hover:bg-canvas border border-transparent hover:border-canvasBorder transition-all"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-12 text-center space-y-4">
            <div className="w-12 h-12 rounded-full bg-aurionTeal-subtle border border-aurionTeal/30 text-aurionTeal flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-serif text-ink font-bold">
              Advisory Mandate Received
            </h3>
            <p className="text-xs sm:text-sm text-inkMuted max-w-md mx-auto leading-relaxed">
              Your inquiry has been submitted directly to Aurion's Managing Partners. We maintain strict non-disclosure protocols and will respond within 24 hours.
            </p>
            <button
              onClick={() => { setSubmitted(false); onClose(); }}
              className="mt-4 px-6 py-2.5 rounded-xl text-xs font-mono uppercase tracking-wider text-white bg-aurionTeal"
            >
              Return to Site
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-1.5">
              <div className="inline-flex items-center space-x-1.5 text-xs font-mono text-aurionTeal uppercase font-semibold">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Confidential Advisory Inquiry</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-serif text-ink font-bold">
                Initiate Strategic Mandate
              </h3>
              <p className="text-xs text-inkMuted leading-relaxed">
                Connect directly with Aurion's Managing Partners regarding sovereign corridors, hospital turnaround, or practice architecture.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] font-mono uppercase text-ink font-medium mb-1">
                  Full Name
                </label>
                <input
                  required
                  type="text"
                  placeholder="Dr. / Mr. / Ms."
                  value={formData.name}
                  onChange={e => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-canvas border border-canvasBorder text-ink focus:border-aurionTeal focus:bg-canvasPure outline-none transition-colors"
                />
              </div>
              <div>
                <label className="block text-[11px] font-mono uppercase text-ink font-medium mb-1">
                  Institutional Role
                </label>
                <input
                  required
                  type="text"
                  placeholder="CEO, Board Member, Minister"
                  value={formData.title}
                  onChange={e => setFormData({ ...formData, title: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-canvas border border-canvasBorder text-ink focus:border-aurionTeal focus:bg-canvasPure outline-none transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] font-mono uppercase text-ink font-medium mb-1">
                  Organization
                </label>
                <input
                  required
                  type="text"
                  placeholder="Health Authority, Hospital, Fund"
                  value={formData.organization}
                  onChange={e => setFormData({ ...formData, organization: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-canvas border border-canvasBorder text-ink focus:border-aurionTeal focus:bg-canvasPure outline-none transition-colors"
                />
              </div>
              <div>
                <label className="block text-[11px] font-mono uppercase text-ink font-medium mb-1">
                  Primary Jurisdiction
                </label>
                <select
                  value={formData.jurisdiction}
                  onChange={e => setFormData({ ...formData, jurisdiction: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-canvas border border-canvasBorder text-ink focus:border-aurionTeal focus:bg-canvasPure outline-none transition-colors"
                >
                  <option>Egypt</option>
                  <option>Saudi Arabia (KSA)</option>
                  <option>United Arab Emirates (UAE)</option>
                  <option>Kuwait / Qatar / Oman / Bahrain</option>
                  <option>Regional / International</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-mono uppercase text-ink font-medium mb-1">
                Advisory Practice Area
              </label>
              <select
                value={formData.practice}
                onChange={e => setFormData({ ...formData, practice: e.target.value })}
                className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-canvas border border-canvasBorder text-ink focus:border-aurionTeal focus:bg-canvasPure outline-none transition-colors"
              >
                {PRACTICES.map(p => (
                  <option key={p.id} value={p.title}>
                    {p.num} - {p.title}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-[11px] font-mono uppercase text-ink font-medium mb-1">
                Official Email
              </label>
              <input
                required
                type="email"
                placeholder="executive@institution.com"
                value={formData.email}
                onChange={e => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-canvas border border-canvasBorder text-ink focus:border-aurionTeal focus:bg-canvasPure outline-none transition-colors"
              />
            </div>

            <div>
              <label className="block text-[11px] font-mono uppercase text-ink font-medium mb-1">
                Mandate Scope & Objectives
              </label>
              <textarea
                rows={3}
                placeholder="Briefly describe the institutional mandate, timeline, or transformation objectives..."
                value={formData.message}
                onChange={e => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-canvas border border-canvasBorder text-ink focus:border-aurionTeal focus:bg-canvasPure outline-none transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full inline-flex items-center justify-center space-x-2 px-6 py-3 rounded-xl text-xs font-mono uppercase tracking-wider text-white bg-aurionTeal hover:bg-aurionTeal-vibrant shadow-sm font-semibold transition-all"
            >
              <span>Submit Confidential Mandate</span>
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
