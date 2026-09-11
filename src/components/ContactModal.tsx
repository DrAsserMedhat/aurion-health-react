import { useState } from 'react';
import { Send, Check, MapPin } from 'lucide-react';

export const ContactModal: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="bg-[#050809] border-b border-white/[0.06] py-28 relative overflow-hidden">

      {/* Background grid */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: 'linear-gradient(to right, rgba(79,178,196,0.025) 1px, transparent 1px), linear-gradient(to bottom, rgba(79,178,196,0.025) 1px, transparent 1px)',
        backgroundSize: '80px 80px',
      }} />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-aurionTeal/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-6 sm:px-8">

        {/* Section header — editorial, centred */}
        <div className="text-center mb-14 max-w-2xl mx-auto">
          <div className="section-label-dark justify-center mb-5">Confidential Advisory</div>
          <h2 className="font-cormorant text-[36px] sm:text-[54px] font-bold text-white tracking-tight leading-[1.04]">
            Schedule an Executive Consultation
          </h2>
          <div className="w-12 h-px mx-auto mt-6 mb-6" style={{ background: 'linear-gradient(to right, transparent, #4FB2C4, transparent)' }} />
          <p className="text-white/45 text-[14px] sm:text-[15px] leading-[1.75] font-sans">
            Direct correspondence with managing partners Dr. Asser Medhat and Dr. Asmaa Salman.
          </p>

          {/* Geography row */}
          <div className="flex items-center justify-center space-x-6 mt-6">
            {['Cairo, Egypt', 'Riyadh, KSA', 'Dubai, UAE'].map((g) => (
              <div key={g} className="flex items-center space-x-1.5 text-[10px] font-mono text-white/30 uppercase tracking-widest">
                <MapPin className="w-2.5 h-2.5 text-aurionTeal/50" />
                <span>{g}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Form card */}
        <div
          className="rounded-2xl p-8 sm:p-12"
          style={{
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(255,255,255,0.07)',
            boxShadow: '0 40px 80px -20px rgba(0,0,0,0.5)',
          }}
        >
          {submitted ? (
            <div className="text-center py-14 space-y-5">
              <div className="w-16 h-16 rounded-full bg-aurionTeal/15 border border-aurionTeal/30 text-aurionTeal flex items-center justify-center mx-auto">
                <Check className="w-8 h-8" />
              </div>
              <h3 className="font-cormorant text-[28px] font-bold text-white">Inquiry Received</h3>
              <p className="text-white/45 text-[14px] max-w-md mx-auto leading-[1.75] font-sans">
                Your request has been securely transmitted to managing partners Dr. Asser Medhat and Dr. Asmaa Salman. You will receive an executive response within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {[
                  { label: 'Executive Name & Title', type: 'text', placeholder: 'Dr. / Board Member / CEO' },
                  { label: 'Corporate Email', type: 'email', placeholder: 'executive@institution.com' },
                ].map(({ label, type, placeholder }) => (
                  <div key={label}>
                    <label className="block text-[10px] font-mono uppercase tracking-[0.16em] text-white/40 font-bold mb-2">{label}</label>
                    <input
                      type={type}
                      required
                      placeholder={placeholder}
                      className="w-full px-4 py-3.5 rounded-xl text-[13.5px] font-sans text-white placeholder-white/20 focus:outline-none transition-all"
                      style={{
                        background: 'rgba(255,255,255,0.05)',
                        border: '1px solid rgba(255,255,255,0.10)',
                      }}
                      onFocus={e => {
                        e.currentTarget.style.border = '1px solid rgba(79,178,196,0.50)';
                        e.currentTarget.style.background = 'rgba(79,178,196,0.06)';
                      }}
                      onBlur={e => {
                        e.currentTarget.style.border = '1px solid rgba(255,255,255,0.10)';
                        e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                      }}
                    />
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-[10px] font-mono uppercase tracking-[0.16em] text-white/40 font-bold mb-2">Institution / Organization</label>
                  <input
                    type="text"
                    required
                    placeholder="Hospital Network / Authority / PE Fund"
                    className="w-full px-4 py-3.5 rounded-xl text-[13.5px] font-sans text-white placeholder-white/20 focus:outline-none transition-all"
                    style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.10)' }}
                    onFocus={e => { e.currentTarget.style.border = '1px solid rgba(79,178,196,0.50)'; e.currentTarget.style.background = 'rgba(79,178,196,0.06)'; }}
                    onBlur={e => { e.currentTarget.style.border = '1px solid rgba(255,255,255,0.10)'; e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; }}
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-mono uppercase tracking-[0.16em] text-white/40 font-bold mb-2">Advisory Area of Interest</label>
                  <select
                    className="w-full px-4 py-3.5 rounded-xl text-[13px] font-sans text-white/80 focus:outline-none transition-all"
                    style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.10)' }}
                    onFocus={e => { e.currentTarget.style.border = '1px solid rgba(79,178,196,0.50)'; }}
                    onBlur={e => { e.currentTarget.style.border = '1px solid rgba(255,255,255,0.10)'; }}
                  >
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
                <label className="block text-[10px] font-mono uppercase tracking-[0.16em] text-white/40 font-bold mb-2">Strategic Context</label>
                <textarea
                  rows={4}
                  placeholder="Briefly articulate your transformation objectives, cross-border goals, or institutional scope..."
                  className="w-full px-4 py-3.5 rounded-xl text-[13.5px] font-sans text-white placeholder-white/20 focus:outline-none transition-all resize-none"
                  style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.10)' }}
                  onFocus={e => { e.currentTarget.style.border = '1px solid rgba(79,178,196,0.50)'; e.currentTarget.style.background = 'rgba(79,178,196,0.06)'; }}
                  onBlur={e => { e.currentTarget.style.border = '1px solid rgba(255,255,255,0.10)'; e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; }}
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-full font-mono text-[11.5px] font-bold uppercase tracking-[0.12em] text-white transition-all flex items-center justify-center space-x-2.5"
                style={{ background: 'linear-gradient(135deg, #1B8A9E 0%, #126673 100%)', boxShadow: '0 0 32px rgba(27,138,158,0.30)' }}
                onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 0 48px rgba(27,138,158,0.55)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 0 32px rgba(27,138,158,0.30)'; }}
              >
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
