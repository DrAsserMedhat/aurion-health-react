import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Compass } from 'lucide-react';

interface HeaderProps {
  onOpenDirectory: () => void;
  onOpenContact: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenDirectory, onOpenContact }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Capabilities", href: "#capabilities" },
    { label: "Approach", href: "#approach" },
    { label: "Sectors", href: "#sectors" },
    { label: "Mandates", href: "#mandates" },
    { label: "Leadership", href: "#leadership" },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-canvasPure/95 backdrop-blur-md shadow-sm border-b border-canvasBorder py-3' 
          : 'bg-canvasPure/80 backdrop-blur-sm border-b border-canvasBorder/50 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center space-x-3 group">
          <img 
            src="/Aurion-Logo.png" 
            alt="Aurion Health Advisory" 
            className="h-12 md:h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
            onError={(e) => {
              const target = e.currentTarget;
              if (target.src !== 'https://drassermedhat.github.io/AurionHealth/Aurion-Logo.png') {
                target.src = 'https://drassermedhat.github.io/AurionHealth/Aurion-Logo.png';
              }
            }}
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-7 text-xs font-mono tracking-wider uppercase">
          {navLinks.map((link) => (
            <a 
              key={link.label} 
              href={link.href}
              className="text-inkMuted hover:text-aurionTeal transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center space-x-3">
          <button
            onClick={onOpenDirectory}
            className="inline-flex items-center space-x-2 px-3.5 py-2 rounded-lg text-xs font-mono uppercase tracking-wider text-ink bg-canvas border border-canvasBorder hover:border-aurionTeal hover:text-aurionTeal transition-all"
          >
            <Compass className="w-3.5 h-3.5 text-aurionTeal" />
            <span>Practice Directory</span>
          </button>
          
          <button
            onClick={onOpenContact}
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-lg text-xs font-mono uppercase tracking-wider text-white bg-aurionTeal hover:bg-aurionTeal-vibrant shadow-sm hover:shadow-glow-teal transition-all font-semibold"
          >
            <span>Initiate Mandate</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="lg:hidden flex items-center space-x-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-ink hover:bg-canvas border border-canvasBorder"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-canvasPure border-b border-canvasBorder px-4 pt-4 pb-6 space-y-4">
          <div className="flex flex-col space-y-3 font-mono text-xs uppercase tracking-wider">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-ink py-1 hover:text-aurionTeal"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="pt-4 border-t border-canvasBorder flex flex-col space-y-2">
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenDirectory(); }}
              className="w-full flex items-center justify-center space-x-2 px-4 py-2.5 rounded-lg text-xs font-mono uppercase tracking-wider text-ink bg-canvas border border-canvasBorder"
            >
              <Compass className="w-4 h-4 text-aurionTeal" />
              <span>Practice Directory (8 Areas)</span>
            </button>
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenContact(); }}
              className="w-full flex items-center justify-center space-x-2 px-4 py-2.5 rounded-lg text-xs font-mono uppercase tracking-wider text-white bg-aurionTeal"
            >
              <span>Initiate Strategic Mandate</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
