import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { useTheme } from './context/useTheme';
import { Navbar } from './components/Navbar';
import { IntroLoader } from './components/IntroLoader';
import { LiquidParticleCanvas } from './components/LiquidParticleCanvas';
import { XLoverSection } from './components/XLoverSection';
import { ZoyaSection } from './components/ZoyaSection';
import { RoohaniSection } from './components/RoohaniSection';
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

      {/* Floating Glass Navigation */}
      <Navbar />

      {/* Single-Page Website Main Content with 3 Sequential Worlds */}
      <main id="main-content" className="relative z-10 w-full overflow-x-hidden">
        {/* World 01: XL OVER 3.0 */}
        <XLoverSection />

        {/* Dynamic World Transition Divider */}
        <div className="w-full flex items-center justify-center py-6 opacity-30 pointer-events-none">
          <div className="h-px w-2/3 bg-gradient-to-r from-transparent via-[#8B35FF] to-transparent" />
        </div>

        {/* World 02: ZOYA NOOR */}
        <ZoyaSection />

        {/* Dynamic World Transition Divider */}
        <div className="w-full flex items-center justify-center py-6 opacity-30 pointer-events-none">
          <div className="h-px w-2/3 bg-gradient-to-r from-transparent via-[#16B978] to-transparent" />
        </div>

        {/* World 03: ROOHANI NOORANI */}
        <RoohaniSection />
      </main>

      {/* Futuristic Single-Page Footer */}
      <footer className="relative z-10 w-full border-t border-white/10 bg-[#05030B]/80 backdrop-blur-xl py-8 px-6 text-center text-xs text-slate-400">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <img src="./logo icon.png" alt="XL OVER 3.0" className="w-6 h-6 object-contain" />
            <span className="font-semibold text-white tracking-widest uppercase">XL OVER 3.0</span>
          </div>
          <div className="tracking-widest uppercase text-[10px] text-slate-400">
            ONE IDENTITY. MULTIPLE WORLDS. &copy; 2036 EDITION
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <a
              href="https://github.com/XLover-30/xl-over-3-0"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              GitHub Repository
            </a>
          </div>
        </div>
      </footer>
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
