import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { useTheme } from './context/useTheme';
import { Navbar } from './components/Navbar';
import { IntroLoader } from './components/IntroLoader';
import { LiquidParticleCanvas } from './components/LiquidParticleCanvas';
import { XLoverSection } from './components/XLoverSection';
import { ZoyaSection } from './components/ZoyaSection';
import { RoohaniSection } from './components/RoohaniSection';
import { Footer } from './components/Footer';
import './App.css';

const AppContent: React.FC = () => {
  const { currentTheme } = useTheme();

  return (
    <div
      className="relative min-h-screen text-white font-sans selection:bg-[#8B35FF] selection:text-white transition-colors duration-1000 ease-out"
      style={{
        backgroundColor: currentTheme.colors.background,
      }}
    >
      {/* Intro Brand Loader */}
      <IntroLoader />

      {/* Signature 3D Liquid Particle Canvas Engine */}
      <LiquidParticleCanvas />

      {/* Professional Smart Header */}
      <Navbar />

      {/* Single-Page Continuous Experience: 1. XL OVER 3.0, 2. ZOYA NOOR, 3. ROOHANI NOORANI */}
      <main id="main-content" className="relative z-10 w-full overflow-x-hidden">
        {/* Section 01: XL OVER 3.0 */}
        <XLoverSection />

        {/* Dynamic Transition Divider */}
        <div className="w-full flex items-center justify-center py-6 opacity-30 pointer-events-none">
          <div className="h-px w-2/3 bg-gradient-to-r from-transparent via-[#8B35FF] to-transparent" />
        </div>

        {/* Section 02: ZOYA NOOR */}
        <ZoyaSection />

        {/* Dynamic Transition Divider */}
        <div className="w-full flex items-center justify-center py-6 opacity-30 pointer-events-none">
          <div className="h-px w-2/3 bg-gradient-to-r from-transparent via-[#16B978] to-transparent" />
        </div>

        {/* Section 03: ROOHANI NOORANI */}
        <RoohaniSection />
      </main>

      {/* Professional Glassmorphic Footer */}
      <Footer />
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
};

export default App;
