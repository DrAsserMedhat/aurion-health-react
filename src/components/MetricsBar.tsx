import { Stethoscope, PlaneTakeoff, Layers, TrendingUp } from 'lucide-react';

export const MetricsBar: React.FC = () => {
  return (
    <section className="bg-canvasPure border-b border-canvasBorder py-12 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Proof Card 1 */}
          <div className="p-5 sm:p-6 rounded-2xl bg-canvas border border-canvasBorder shadow-sm flex items-start gap-4 hover:border-aurionTeal/40 transition-all group">
            <div className="w-[38%] sm:w-[40%] max-w-[110px] aspect-square rounded-xl overflow-hidden shrink-0 border border-aurionTeal/20 shadow-sm relative group-hover:border-aurionTeal/40 transition-all">
              <img 
                src="https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=400&q=80" 
                alt="Healthcare Expertise" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
              />
              <div className="absolute inset-0 bg-aurionTeal/15 mix-blend-multiply"></div>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center space-x-1 text-aurionTeal font-mono text-[10px] font-bold uppercase tracking-wider">
                <Stethoscope className="w-3 h-3 shrink-0" />
                <span className="truncate">CLINICALLY INFORMED</span>
              </div>
              <div className="text-base sm:text-lg font-bold font-serif text-ink tracking-tight mt-1 leading-snug">Healthcare Expertise</div>
              <p className="text-[11px] text-inkDim mt-1 leading-relaxed">Senior healthcare advisory grounded in clinical, operational, and institutional reality.</p>
            </div>
          </div>

          {/* Proof Card 2 */}
          <div className="p-5 sm:p-6 rounded-2xl bg-canvas border border-canvasBorder shadow-sm flex items-start gap-4 hover:border-aurionTeal/40 transition-all group">
            <div className="w-[38%] sm:w-[40%] max-w-[110px] aspect-square rounded-xl overflow-hidden shrink-0 border border-aurionTeal/20 shadow-sm relative group-hover:border-aurionTeal/40 transition-all">
              <img 
                src="https://images.unsplash.com/photo-1488085061387-422e29b40080?auto=format&fit=crop&w=400&q=80" 
                alt="Egypt ↔ GCC" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
              />
              <div className="absolute inset-0 bg-aurionTeal/15 mix-blend-multiply"></div>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center space-x-1 text-aurionTeal font-mono text-[10px] font-bold uppercase tracking-wider">
                <PlaneTakeoff className="w-3 h-3 shrink-0" />
                <span className="truncate">CROSS-BORDER</span>
              </div>
              <div className="text-base sm:text-lg font-bold font-serif text-ink tracking-tight mt-1 leading-snug">Egypt ↔ GCC</div>
              <p className="text-[11px] text-inkDim mt-1 leading-relaxed">Building structured international patient pathways and cross-border healthcare partnerships.</p>
            </div>
          </div>

          {/* Proof Card 3 */}
          <div className="p-5 sm:p-6 rounded-2xl bg-canvas border border-canvasBorder shadow-sm flex items-start gap-4 hover:border-aurionTeal/40 transition-all group">
            <div className="w-[38%] sm:w-[40%] max-w-[110px] aspect-square rounded-xl overflow-hidden shrink-0 border border-aurionTeal/20 shadow-sm relative group-hover:border-aurionTeal/40 transition-all">
              <img 
                src="/proof-integrated-capabilities.jpg" 
                alt="8 Core Capabilities" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                onError={(e) => {
                  e.currentTarget.src = 'https://drassermedhat.github.io/AurionHealth/proof-integrated-capabilities.jpg';
                }}
              />
              <div className="absolute inset-0 bg-aurionTeal/10 mix-blend-multiply"></div>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center space-x-1 text-aurionTeal font-mono text-[10px] font-bold uppercase tracking-wider">
                <Layers className="w-3 h-3 shrink-0" />
                <span className="truncate">INTEGRATED</span>
              </div>
              <div className="text-base sm:text-lg font-bold font-serif text-ink tracking-tight mt-1 leading-snug">8 Core Capabilities</div>
              <p className="text-[11px] text-inkDim mt-1 leading-relaxed">Strategy, operations, digital health, commercial growth, and transformation, connected as one integrated agenda.</p>
            </div>
          </div>

          {/* Proof Card 4 */}
          <div className="p-5 sm:p-6 rounded-2xl bg-canvas border border-canvasBorder shadow-sm flex items-start gap-4 hover:border-aurionTeal/40 transition-all group">
            <div className="w-[38%] sm:w-[40%] max-w-[110px] aspect-square rounded-xl overflow-hidden shrink-0 border border-aurionTeal/20 shadow-sm relative group-hover:border-aurionTeal/40 transition-all">
              <img 
                src="/proof-execution-moves.jpg" 
                alt="Execution That Moves" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                onError={(e) => {
                  e.currentTarget.src = 'https://drassermedhat.github.io/AurionHealth/proof-execution-moves.jpg';
                }}
              />
              <div className="absolute inset-0 bg-aurionTeal/10 mix-blend-multiply"></div>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center space-x-1 text-aurionTeal font-mono text-[10px] font-bold uppercase tracking-wider">
                <TrendingUp className="w-3 h-3 shrink-0" />
                <span className="truncate">PERFORMANCE</span>
              </div>
              <div className="text-base sm:text-lg font-bold font-serif text-ink tracking-tight mt-1 leading-snug">Execution That Moves</div>
              <p className="text-[11px] text-inkDim mt-1 leading-relaxed">Turning strategic priorities into stronger operating performance, measurable progress, and sustainable value.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
