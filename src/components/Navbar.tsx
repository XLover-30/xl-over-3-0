import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles, Sliders, Eye, EyeOff, ExternalLink, Compass } from 'lucide-react';
import { useTheme } from '../context/useTheme';
import { SOCIAL_LINKS } from '../config/siteConfig';
import type { WorldId } from '../config/siteConfig';

export const Navbar: React.FC = () => {
  const { activeWorld, currentTheme, quality, setQuality, reducedMotion, setReducedMotion } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: Array<{ id: WorldId; label: string; fullLabel: string; targetId: string }> = [
    { id: 'xl-over-3-0', label: 'XL OVER 3.0', fullLabel: 'XL OVER 3.0', targetId: 'xl-over-3-0' },
    { id: 'zoya-noor', label: 'ZOYA', fullLabel: 'ZOYA NOOR', targetId: 'zoya-noor' },
    { id: 'roohani-noorani', label: 'ROOHANI', fullLabel: 'ROOHANI NOORANI', targetId: 'roohani-noorani' },
  ];

  const scrollToWorld = (targetId: string) => {
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out select-none ${
          isScrolled
            ? 'py-2.5 px-3 sm:px-6'
            : 'py-5 px-4 sm:px-8'
        }`}
      >
        <div
          className={`mx-auto max-w-7xl flex items-center justify-between transition-all duration-500 rounded-full ${
            isScrolled
              ? 'px-4 sm:px-6 py-2 bg-[#05030B]/80 backdrop-blur-2xl border border-white/15 shadow-[0_8px_32px_rgba(0,0,0,0.6)]'
              : 'px-3 sm:px-5 py-2 bg-[#05030B]/35 backdrop-blur-md border border-white/10 shadow-[0_4px_24px_rgba(0,0,0,0.3)]'
          }`}
          style={{
            borderColor: isScrolled ? `${currentTheme.colors.secondary}40` : 'rgba(255,255,255,0.1)',
            boxShadow: isScrolled
              ? `0 10px 35px -5px ${currentTheme.colors.secondary}25, 0 0 20px 0 ${currentTheme.colors.accent}15`
              : '0 4px 24px rgba(0,0,0,0.3)',
          }}
        >
          {/* Left Brand Identity: Official TXT icon.png logo + Brand name */}
          <button
            onClick={() => scrollToWorld('xl-over-3-0')}
            className="flex items-center gap-2.5 sm:gap-3 group text-left cursor-pointer transition-transform duration-300 hover:scale-[1.02]"
            aria-label="XL OVER 3.0 — Return to Top"
          >
            <div className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-full overflow-hidden p-0.5 bg-gradient-to-tr from-white/20 via-transparent to-white/30 border border-white/25 shadow-md group-hover:border-white/50 transition-colors">
              <img
                src="./TXT icon.png"
                alt="XL OVER 3.0 Official Icon"
                className="w-full h-full object-contain filter drop-shadow-[0_0_8px_rgba(182,107,255,0.6)] group-hover:brightness-125 transition-all duration-300"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xs sm:text-sm font-extrabold tracking-widest text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-[#B66BFF] transition-all">
                XL OVER 3.0
              </span>
              <span className="text-[9px] font-mono tracking-widest text-white/50 uppercase hidden sm:inline">
                DIGITAL UNIVERSE
              </span>
            </div>
          </button>

          {/* Desktop Center Navigation Links */}
          <nav
            className="hidden md:flex items-center gap-1.5 p-1 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-xl"
            aria-label="Primary Universe Navigation"
          >
            {navItems.map((item) => {
              const isActive = activeWorld === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToWorld(item.targetId)}
                  className={`relative px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider transition-all duration-300 cursor-pointer flex items-center gap-1.5 ${
                    isActive
                      ? 'text-white shadow-lg'
                      : 'text-white/60 hover:text-white hover:bg-white/[0.06]'
                  }`}
                  style={{
                    backgroundColor: isActive ? currentTheme.colors.secondary : 'transparent',
                    boxShadow: isActive ? `0 0 16px ${currentTheme.colors.secondary}80` : 'none',
                  }}
                  aria-current={isActive ? 'page' : undefined}
                >
                  <span>{item.label}</span>
                  {isActive && <Sparkles className="w-3 h-3 text-white animate-pulse" />}
                </button>
              );
            })}
          </nav>

          {/* Right Header Controls: MENU icon button */}
          <div className="flex items-center gap-2">
            {/* Quick World Indicator for Mobile */}
            <div className="md:hidden flex items-center gap-1">
              {navItems.map((item) => {
                const isActive = activeWorld === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToWorld(item.targetId)}
                    className={`px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wider transition-all cursor-pointer ${
                      isActive
                        ? 'text-white shadow-md'
                        : 'text-white/50 hover:text-white/80'
                    }`}
                    style={{
                      backgroundColor: isActive ? currentTheme.colors.secondary : 'transparent',
                    }}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>

            {/* Menu Drawer Toggle */}
            <button
              onClick={() => setMenuOpen((prev) => !prev)}
              className="p-2 sm:px-3 sm:py-2 rounded-full bg-white/[0.06] hover:bg-white/[0.12] border border-white/15 text-white transition-all cursor-pointer flex items-center gap-2 text-xs font-semibold tracking-wider backdrop-blur-xl group shadow-sm"
              aria-label={menuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              aria-expanded={menuOpen}
            >
              {menuOpen ? (
                <X className="w-4 h-4 text-white group-hover:rotate-90 transition-transform duration-300" />
              ) : (
                <Menu className="w-4 h-4 text-white group-hover:scale-110 transition-transform duration-300" />
              )}
              <span className="hidden sm:inline text-[11px] uppercase tracking-wider font-mono">
                {menuOpen ? 'Close' : 'Menu'}
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Elegant Glassmorphic Navigation Panel / Overlay Drawer */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/70 backdrop-blur-md flex justify-end transition-opacity duration-300 animate-fadeIn"
          onClick={() => setMenuOpen(false)}
        >
          <div
            className="relative w-full max-w-sm sm:max-w-md h-full bg-[#05030B]/95 border-l border-white/15 backdrop-blur-3xl p-6 sm:p-8 flex flex-col justify-between overflow-y-auto shadow-[-10px_0_40px_rgba(0,0,0,0.8)]"
            onClick={(e) => e.stopPropagation()}
            style={{
              borderColor: `${currentTheme.colors.secondary}40`,
            }}
          >
            {/* Drawer Header */}
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-2.5">
                  <img
                    src="./TXT icon.png"
                    alt="XL OVER 3.0"
                    className="w-7 h-7 object-contain drop-shadow-[0_0_8px_rgba(182,107,255,0.7)]"
                  />
                  <div className="flex flex-col">
                    <span className="text-sm font-black tracking-widest text-white">XL OVER 3.0</span>
                    <span className="text-[9px] font-mono tracking-widest text-[#B66BFF]">NAVIGATION & TELEMETRY</span>
                  </div>
                </div>
                <button
                  onClick={() => setMenuOpen(false)}
                  className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-colors cursor-pointer"
                  aria-label="Close menu"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Navigation Links */}
              <div className="mt-6 flex flex-col gap-2">
                <div className="text-[10px] font-mono uppercase tracking-widest text-white/40 mb-1">
                  Identity Portals
                </div>
                {navItems.map((item, index) => {
                  const isActive = activeWorld === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => scrollToWorld(item.targetId)}
                      className={`w-full flex items-center justify-between p-3.5 rounded-2xl text-left transition-all cursor-pointer border ${
                        isActive
                          ? 'bg-white/[0.08] text-white font-bold border-white/20'
                          : 'bg-white/[0.02] text-white/70 hover:text-white hover:bg-white/[0.05] border-white/5'
                      }`}
                      style={{
                        borderColor: isActive ? currentTheme.colors.secondary : undefined,
                        boxShadow: isActive ? `0 0 20px -5px ${currentTheme.colors.secondary}50` : undefined,
                      }}
                    >
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-xs opacity-50">0{index + 1}</span>
                        <div>
                          <div className="text-sm tracking-wide text-white font-semibold">{item.fullLabel}</div>
                          <div className="text-[10px] text-white/50">
                            {item.id === 'xl-over-3-0' && 'Central Faceless Universe'}
                            {item.id === 'zoya-noor' && 'Mindset, Psychology & Clarity'}
                            {item.id === 'roohani-noorani' && 'Music, Dance & Pop Performance'}
                          </div>
                        </div>
                      </div>
                      {isActive ? (
                        <Sparkles className="w-4 h-4 text-white animate-pulse" />
                      ) : (
                        <Compass className="w-4 h-4 text-white/30" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Performance & Visual Controls */}
              <div className="mt-6 pt-5 border-t border-white/10 flex flex-col gap-3">
                <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-white/40">
                  <Sliders className="w-3.5 h-3.5 text-[#B66BFF]" />
                  <span>Engine Telemetry</span>
                </div>

                <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/10 flex flex-col gap-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-white/70">Particle Density:</span>
                    <span className="font-mono text-[10px] uppercase text-[#B66BFF] font-bold">
                      {quality}
                    </span>
                  </div>
                  <div className="grid grid-cols-3 gap-1.5">
                    {(['low', 'medium', 'high'] as const).map((q) => (
                      <button
                        key={q}
                        onClick={() => setQuality(q)}
                        className={`py-1.5 rounded-xl text-[10px] font-mono uppercase transition-all cursor-pointer ${
                          quality === q
                            ? 'bg-gradient-to-r from-[#8B35FF] to-[#246BFF] text-white font-bold shadow-md'
                            : 'bg-white/5 text-white/50 hover:bg-white/10 hover:text-white'
                        }`}
                      >
                        {q}
                      </button>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-white/5 text-xs">
                    <span className="text-white/70">Reduced Motion:</span>
                    <button
                      onClick={() => setReducedMotion(!reducedMotion)}
                      className={`p-1.5 rounded-lg text-xs cursor-pointer flex items-center gap-1.5 ${
                        reducedMotion
                          ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                          : 'bg-white/5 text-white/50 hover:bg-white/10'
                      }`}
                      aria-label="Toggle reduced motion"
                    >
                      {reducedMotion ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                      <span className="text-[10px] font-mono">{reducedMotion ? 'ON' : 'OFF'}</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Quick Social Access */}
              <div className="mt-5 flex flex-col gap-2">
                <div className="text-[10px] font-mono uppercase tracking-widest text-white/40">
                  Direct Channels
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <a
                    href={SOCIAL_LINKS.xlOver[0].url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 flex items-center justify-between text-white/80 hover:text-white transition-colors"
                  >
                    <span>XL FB</span>
                    <ExternalLink className="w-3 h-3 opacity-60" />
                  </a>
                  <a
                    href={SOCIAL_LINKS.xlOver[1].url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 flex items-center justify-between text-white/80 hover:text-white transition-colors"
                  >
                    <span>XL Insta</span>
                    <ExternalLink className="w-3 h-3 opacity-60" />
                  </a>
                  <a
                    href={SOCIAL_LINKS.zoyaNoor.personal.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 flex items-center justify-between text-white/80 hover:text-white transition-colors"
                  >
                    <span>Zoya IG</span>
                    <ExternalLink className="w-3 h-3 opacity-60" />
                  </a>
                  <a
                    href={SOCIAL_LINKS.roohaniNoorani[0].url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 flex items-center justify-between text-white/80 hover:text-white transition-colors"
                  >
                    <span>Roohani YT</span>
                    <ExternalLink className="w-3 h-3 opacity-60" />
                  </a>
                </div>
              </div>
            </div>

            {/* Drawer Footer */}
            <div className="pt-6 border-t border-white/10 text-[10px] font-mono text-white/40 flex items-center justify-between">
              <span>XL OVER 3.0 &copy; 2036</span>
              <span>ULTIMATE EDITION</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
