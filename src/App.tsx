import { useState, useEffect } from 'react';
import { LiquidParticleCanvas } from './components/LiquidParticleCanvas';
import { THEME_DATA } from './config/themeData';
import type { WorldThemeKey } from './config/themeData';
import { FloatingNav } from './components/FloatingNav';
import { XLOverSection } from './components/XLOverSection';
import { ZoyaNoorSection } from './components/ZoyaNoorSection';
import { RoohaniNooraniSection } from './components/RoohaniNooraniSection';
import { LoadingScreen } from './components/LoadingScreen';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [activeWorld, setActiveWorld] = useState<WorldThemeKey>('xlover');
  const [targetProgress, setTargetProgress] = useState(0); // 0 = xlover, 1 = zoya, 2 = roohani
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [quality, setQuality] = useState<'high' | 'medium' | 'low'>('high');

  // Track mouse / touch movement
  useEffect(() => {
    const handlePointerMove = (e: MouseEvent | TouchEvent) => {
      let clientX = 0;
      let clientY = 0;
      if ('touches' in e && e.touches.length > 0) {
        clientX = e.touches[0].clientX;
        clientY = e.touches[0].clientY;
      } else if ('clientX' in e) {
        clientX = e.clientX;
        clientY = e.clientY;
      }
      const x = (clientX / window.innerWidth) * 2 - 1;
      const y = -(clientY / window.innerHeight) * 2 + 1;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handlePointerMove);
    window.addEventListener('touchmove', handlePointerMove, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handlePointerMove);
      window.removeEventListener('touchmove', handlePointerMove);
    };
  }, []);

  // Synchronize active section & progress with scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const height = window.innerHeight;

      // Section positions
      const xloverEl = document.getElementById('xlover');
      const zoyaEl = document.getElementById('zoya');
      const roohaniEl = document.getElementById('roohani');

      if (!xloverEl || !zoyaEl || !roohaniEl) return;

      const zoyaTop = zoyaEl.offsetTop;
      const roohaniTop = roohaniEl.offsetTop;

      // Continuous float progress from 0.0 to 2.0
      let prog = 0;
      if (scrollY < zoyaTop) {
        prog = Math.max(0, Math.min(1, scrollY / (zoyaTop || 1)));
      } else {
        prog = 1 + Math.max(0, Math.min(1, (scrollY - zoyaTop) / ((roohaniTop - zoyaTop) || 1)));
      }
      setTargetProgress(prog);

      // Determine active world category
      const probePoint = scrollY + height * 0.45;
      if (probePoint < zoyaTop) {
        setActiveWorld('xlover');
      } else if (probePoint < roohaniTop) {
        setActiveWorld('zoya');
      } else {
        setActiveWorld('roohani');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSelectWorld = (world: WorldThemeKey) => {
    setActiveWorld(world);
    const element = document.getElementById(world);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleToggleQuality = () => {
    setQuality((prev) => {
      if (prev === 'high') return 'medium';
      if (prev === 'medium') return 'low';
      return 'high';
    });
  };

  // Background dynamic color transition styling
  const activeBg = THEME_DATA[activeWorld].bgDark;

  return (
    <div
      className="relative min-h-screen text-[#F8F5FF] transition-colors duration-1000 ease-out"
      style={{ backgroundColor: activeBg }}
    >
      {/* Loading Screen */}
      {loading && <LoadingScreen onComplete={() => setLoading(false)} />}

      {/* 3D Liquid Particle Engine */}
      <LiquidParticleCanvas
        currentTheme={activeWorld}
        targetProgress={targetProgress}
        mousePos={mousePos}
        quality={quality}
      />

      {/* Floating Navigation */}
      <FloatingNav
        activeWorld={activeWorld}
        onSelectWorld={handleSelectWorld}
        quality={quality}
        onToggleQuality={handleToggleQuality}
      />

      {/* Main Single-Page Sections (3 Worlds) */}
      <main className="relative z-10 w-full overflow-hidden">
        {/* World 01: XL OVER 3.0 */}
        <XLOverSection />

        {/* World 02: ZOYA NOOR */}
        <ZoyaNoorSection />

        {/* World 03: ROOHANI NOORANI */}
        <RoohaniNooraniSection />
      </main>

      {/* Footer Branding Bar */}
      <footer className="relative z-10 py-8 px-6 text-center border-t border-white/10 text-xs font-mono text-[#B8B0C8] bg-black/40 backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-[#8B35FF] animate-ping" />
            <span className="text-white font-bold tracking-wider">XL OVER 3.0</span>
            <span className="text-white/40">|</span>
            <span>2036 DIGITAL UNIVERSE</span>
          </div>
          <p className="tracking-widest uppercase text-[10px]">
            ONE IDENTITY. MULTIPLE WORLDS. &copy; 2036 ALL RIGHTS RESERVED.
          </p>
        </div>
      </footer>
    </div>
  );
};
