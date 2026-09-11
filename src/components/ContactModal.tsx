import { useState } from 'react';
import { Send, Check } from 'lucide-react';

export const ContactModal: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-canvas border-b border-canvasBorder relative bg-drafting-grid">
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        
        <div className="max-w-3xl mb-14 space-y-3 text-center mx-auto">
          <div className="inline-flex items-center space-x-2 text-[10px] font-mono uppercase tracking-widest text-aurionTeal font-bold">
            <span className="w-1.5 h-1.5 rounded-full bg-aurionTeal"></span>
            <span>Confidential Advisory</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-ink tracking-tight">
            Schedule an Executive Consultation
          </h2>
          <p className="text-inkMuted text-sm sm:text-base leading-relaxed pt-1">
            Direct correspondence with managing partners Dr. Asser Medhat and Dr. Asmaa Salman.
          </p>
        </div>

        <div className="executive-card p-8 sm:p-12 rounded-3xl shadow-executive-hover border border-canvasBorder">
          {submitted ? (
            <div className="text-center py-12 space-y-4">
              <div className="w-14 h-14 rounded-full bg-aurionTeal-light border border-aurionTeal text-aurionTeal flex items-center justify-center mx-auto">
                <Check className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-ink">Inquiry Received</h3>
              <p className="text-inkMuted text-sm max-w-md mx-auto">
                Your request has been securely transmitted to managing partners Dr. Asser Medhat and Dr. Asmaa Salman. You will receive an executive response within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-ink font-semibold mb-2">Executive Name & Title</label>
                  <input type="text" required placeholder="Dr. / Board Member / CEO" className="w-full px-4 py-3 rounded-xl bg-canvas border border-canvasBorder text-ink text-sm focus:border-aurionTeal focus:bg-canvasPure focus:outline-none transition-colors" />
                </div>
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-ink font-semibold mb-2">Corporate Email</label>
                  <input type="email" required placeholder="executive@institution.com" className="w-full px-4 py-3 rounded-xl bg-canvas border border-canvasBorder text-ink text-sm focus:border-aurionTeal focus:bg-canvasPure focus:outline-none transition-colors" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-ink font-semibold mb-2">Institution / Organization</label>
                  <input type="text" required placeholder="Hospital Network / Authority / PE Fund" className="w-full px-4 py-3 rounded-xl bg-canvas border border-canvasBorder text-ink text-sm focus:border-aurionTeal focus:bg-canvasPure focus:outline-none transition-colors" />
                </div>
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-ink font-semibold mb-2">Advisory Area of Interest</label>
                  <select className="w-full px-4 py-3 rounded-xl bg-canvas border border-canvasBorder text-ink text-sm focus:border-aurionTeal focus:bg-canvasPure focus:outline-none transition-colors">
                    <option>International Patient Services, Medical Tourism & Telehealth (Flagship)</option>
                    <option>Strategy & System Transformation</option>
                    <option>Operations & Throughput Turnaround</option>
                    <option>Elite Aesthetics, Wellness & Premium Clinic Design</option>
                    <option>Mega Events Management</option>
                    <option>Digital Health & Clinical Informatics</option>
                    <option>Business Development, Brand & Commercial Advisory</option>
                    <option>Healthcare Project Management & Corporate Training</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-ink font-semibold mb-2">Strategic Context</label>
                <textarea rows={4} placeholder="Briefly articulate your transformation objectives, cross-border goals, or institutional scope..." className="w-full px-4 py-3 rounded-xl bg-canvas border border-canvasBorder text-ink text-sm focus:border-aurionTeal focus:bg-canvasPure focus:outline-none transition-colors"></textarea>
              </div>

              <button type="submit" className="w-full py-4 rounded-full bg-aurionTeal hover:bg-aurionTeal-dark text-white font-mono text-xs font-bold uppercase tracking-wider shadow-executive transition-all flex items-center justify-center space-x-2">
                <span>Transmit Executive Consultation Request</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          )}
        </div>

      </div>
    </section>
  );
};
