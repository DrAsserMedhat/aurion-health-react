import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { MetricsBar } from './components/MetricsBar';
import { AboutThesis } from './components/AboutThesis';
import { Capabilities } from './components/Capabilities';
import { PracticeDrawer } from './components/PracticeDrawer';
import { Approach } from './components/Approach';
import { Sectors } from './components/Sectors';
import { Mandates } from './components/Mandates';
import { Leadership } from './components/Leadership';
import { ContactModal } from './components/ContactModal';
import { Footer } from './components/Footer';

export function App() {
  const [selectedPracticeId, setSelectedPracticeId] = useState<string | null>(null);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-canvas text-ink selection:bg-aurionTeal selection:text-white font-sans">
      {/* Executive Navbar */}
      <Header
        onOpenDirectory={() => setSelectedPracticeId('ips')}
        onOpenContact={() => setIsContactModalOpen(true)}
      />

      {/* Main Content */}
      <main>
        <Hero onOpenContact={() => setIsContactModalOpen(true)} />
        <MetricsBar />
        <AboutThesis />
        <Capabilities
          onSelectPractice={(id) => setSelectedPracticeId(id)}
          onOpenDirectory={() => setSelectedPracticeId('ips')}
        />
        <Approach />
        <Sectors />
        <Mandates />
        <Leadership />
      </main>

      {/* Executive Footer */}
      <Footer
        onSelectPractice={(id) => setSelectedPracticeId(id)}
        onOpenContact={() => setIsContactModalOpen(true)}
      />

      {/* Off-Canvas Practice Drawer */}
      <PracticeDrawer
        selectedPracticeId={selectedPracticeId}
        onClose={() => setSelectedPracticeId(null)}
        onOpenContact={() => setIsContactModalOpen(true)}
      />

      {/* Confidential Advisory Mandate Modal */}
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </div>
  );
}

export default App;
