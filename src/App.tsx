import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { MetricsBar } from './components/MetricsBar';
import { AboutThesis } from './components/AboutThesis';
import { Capabilities } from './components/Capabilities';
import { Approach } from './components/Approach';
import { Sectors } from './components/Sectors';
import { Mandates } from './components/Mandates';
import { Leadership } from './components/Leadership';
import { ContactModal } from './components/ContactModal';
import { Footer } from './components/Footer';
import { PracticeDrawer } from './components/PracticeDrawer';

export function App() {
  const [drawerOpenId, setDrawerOpenId] = useState<string | null>(null);

  const scrollToContact = () => {
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-canvas text-ink selection:bg-aurionTeal selection:text-white font-sans overflow-x-hidden">
      {/* 1. Header (Obsidian Glass Authority Ribbon) */}
      <Header 
        onOpenDrawer={(id) => setDrawerOpenId(id)}
        onOpenContact={scrollToContact}
      />

      {/* 2. Hero (Cinematic with clear, visible video & editorial typography) */}
      <Hero onOpenContact={scrollToContact} />

      {/* 2.1 Executive Metrics Strip (4 Proof Cards with 40% Square Micro-Visuals) */}
      <MetricsBar />

      {/* 3. About (Institutional Mandate & Quote + Strategic Charter: VM & 6 Values) */}
      <AboutThesis />

      {/* 4. Capabilities (All 8 Authorized Practice Cards with Context Photography) */}
      <Capabilities onOpenDrawer={(id) => setDrawerOpenId(id)} />

      {/* 5. Approach (How We Partner: 4-Phase Delivery Framework) */}
      <Approach />

      {/* 6. Sectors (Advising Healthcare Decision-Makers with Header Photography) */}
      <Sectors />

      {/* 7. Mandates (How We'd Approach a Mandate) */}
      <Mandates />

      {/* 8. Leadership (Managing Partners with Authentic Portrait Photos) */}
      <Leadership />

      {/* 9. Contact (Schedule an Executive Consultation) */}
      <ContactModal />

      {/* 10. Footer (Black Obsidian Authority) */}
      <Footer onOpenDrawer={(id) => setDrawerOpenId(id)} />

      {/* 11. Practice Directory Off-Canvas Drawer */}
      <PracticeDrawer 
        drawerOpenId={drawerOpenId} 
        onClose={() => setDrawerOpenId(null)} 
      />
    </div>
  );
}

export default App;
