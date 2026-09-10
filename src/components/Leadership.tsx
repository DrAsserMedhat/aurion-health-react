import { Check } from 'lucide-react';

export const Leadership: React.FC = () => {
  return (
    <section id="leadership" className="py-24 bg-canvasPure border-b border-canvasBorder relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        <div className="max-w-3xl mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 text-[10px] font-mono uppercase tracking-widest text-aurionTeal font-bold">
            <span className="w-1.5 h-1.5 rounded-full bg-aurionTeal"></span>
            <span>Senior Stewardship</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-ink tracking-tight">
            Managing Partners
          </h2>
          <p className="text-inkMuted text-sm sm:text-base leading-relaxed pt-1">
            Aurion is personally led by managing partners combining physician-level clinical backgrounds with enterprise strategy, operational transformation, and commercial leadership.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl">
          
          {/* Dr. Asser Medhat */}
          <div className="executive-card rounded-3xl p-8 sm:p-10 shadow-executive flex flex-col justify-between">
            <div>
              <div className="flex items-center space-x-5 mb-6">
                <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl overflow-hidden border-2 border-aurionTeal/30 shadow-md shrink-0 bg-canvasSubtle relative group">
                  <img 
                    src="/dr-asser-medhat.png" 
                    alt="Dr. Asser Medhat" 
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 filter contrast-[1.02]"
                    onError={(e) => { e.currentTarget.src = 'https://drassermedhat.github.io/AurionHealth/dr-asser-medhat.png'; }}
                  />
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-bold text-ink">Dr. Asser Medhat</h3>
                  <div className="text-xs font-mono uppercase text-aurionTeal font-bold mt-0.5">Founder & Managing Partner</div>
                  <div className="text-xs text-inkDim mt-0.5 font-mono">Strategy, Operations & International Corridors</div>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-inkMuted leading-relaxed mb-6">
                Leads Aurion's strategy, operations, and international-patient-services work, with a focus on medical tourism, telehealth/SMO models, and healthcare PMO discipline across Egypt and the GCC. Co-leads Elite Aesthetics, Wellness & Premium Clinic Design and Mega Events Management jointly with Dr. Asmaa Salman.
              </p>
            </div>

            <div className="pt-4 border-t border-canvasBorder space-y-2 text-xs font-mono text-inkMuted">
              <div className="flex items-center"><Check className="w-3.5 h-3.5 text-aurionTeal mr-2" /> Health System Strategy & Turnaround</div>
              <div className="flex items-center"><Check className="w-3.5 h-3.5 text-aurionTeal mr-2" /> International Patient Services, Medical Tourism & Telehealth</div>
              <div className="flex items-center"><Check className="w-3.5 h-3.5 text-aurionTeal mr-2" /> Healthcare Project Management & PMO Cadence</div>
            </div>
          </div>

          {/* Dr. Asmaa Salman */}
          <div className="executive-card rounded-3xl p-8 sm:p-10 shadow-executive flex flex-col justify-between">
            <div>
              <div className="flex items-center space-x-5 mb-6">
                <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl overflow-hidden border-2 border-aurionTeal/30 shadow-md shrink-0 bg-canvasSubtle relative group">
                  <img 
                    src="/dr-asmaa-salman.png" 
                    alt="Dr. Asmaa Salman" 
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 filter contrast-[1.02]"
                    onError={(e) => { e.currentTarget.src = 'https://drassermedhat.github.io/AurionHealth/dr-asmaa-salman.png'; }}
                  />
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-bold text-ink">Dr. Asmaa Salman</h3>
                  <div className="text-xs font-mono uppercase text-aurionTeal font-bold mt-0.5">Founder & Managing Partner</div>
                  <div className="text-xs text-inkDim mt-0.5 font-mono">Growth, Commercial Strategy & Spatial Design</div>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-inkMuted leading-relaxed mb-6">
                Leads Aurion's growth strategy, business development, and brand & commercial advisory work. Co-leads Elite Aesthetics, Wellness & Premium Clinic Design and Mega Events Management jointly with Dr. Asser Medhat, uniting patient experience with commercial profitability.
              </p>
            </div>

            <div className="pt-4 border-t border-canvasBorder space-y-2 text-xs font-mono text-inkMuted">
              <div className="flex items-center"><Check className="w-3.5 h-3.5 text-aurionTeal mr-2" /> Commercial Growth Strategy & Business Development</div>
              <div className="flex items-center"><Check className="w-3.5 h-3.5 text-aurionTeal mr-2" /> Luxury Aesthetic & Wellness Interior Architecture</div>
              <div className="flex items-center"><Check className="w-3.5 h-3.5 text-aurionTeal mr-2" /> Flagship Medical Congress & Expo Curation</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
