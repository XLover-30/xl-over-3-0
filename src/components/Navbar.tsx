import React, { useState } from 'react';
import { Sparkles, Sliders, Eye, EyeOff } from 'lucide-react';
import { useTheme } from '../context/useTheme';
import type { WorldId } from '../config/siteConfig';

export const Navbar: React.FC = () => {
  const { activeWorld, currentTheme, quality, setQuality, reducedMotion, setReducedMotion } = useTheme();
  const [controlsOpen, setControlsOpen] = useState(false);

  const navItems: Array<{ id: WorldId; label: string; number: string }> = [
    { id: 'xl-over-3-0', label: 'XL OVER 3.0', number: '01' },
    { id: 'zoya-noor', label: 'ZOYA NOOR', number: '02' },
    { id: 'roohani-noorani', label: 'ROOHANI NOORANI', number: '03' },
  ];

  const scrollToWorld = (id: WorldId) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-4 sm:px-8 py-3.5 select-none pointer-events-none">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand Face Logo + Name */}
        <div
          onClick={() => scrollToWorld('xl-over-3-0')}
          className="pointer-events-auto flex items-center gap-3 px-3.5 py-2 rounded-2xl bg-[#05030B]/70 border border-white/10 backdrop-blur-xl shadow-lg cursor-pointer hover:border-white/30 transition-all duration-300 group"
          role="button"
          tabIndex={0}
          aria-label="Go to XL OVER 3.0"
        >
          <div className="w-8 h-8 rounded-full overflow-hidden border border-white/20 group-hover:scale-105 transition-transform">
            <img
              src="./logo icon.png"
              alt="XL OVER 3.0 Logo"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-extrabold tracking-wider text-white">XL OVER 3.0</span>
            <span className="text-[9px] font-mono tracking-widest text-slate-400">2036 EDITION</span>
          </div>
        </div>

        {/* Center Liquid Glass Navigation for 3 Worlds */}
        <nav
          className="pointer-events-auto hidden md:flex items-center gap-1.5 p-1.5 rounded-full bg-[#05030B]/75 border border-white/10 backdrop-blur-2xl shadow-[0_8px_32px_0_rgba(0,0,0,0.5)]"
          aria-label="Universe identities navigation"
        >
          {navItems.map((item) => {
            const isActive = activeWorld === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollToWorld(item.id)}
                className={`relative px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider transition-all duration-300 cursor-pointer flex items-center gap-2 ${
                  isActive
                    ? 'text-white shadow-lg'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-white/[0.04]'
                }`}
                style={{
                  background: isActive ? currentTheme.colors.secondary : 'transparent',
                }}
                aria-current={isActive ? 'page' : undefined}
              >
                <span className="text-[10px] opacity-70 font-mono">{item.number}</span>
                <span>{item.label}</span>
                {isActive && <Sparkles className="w-3 h-3 text-white animate-pulse" />}
              </button>
            );
          })}
        </nav>

        {/* Right Settings & Quality Controls Toggle */}
        <div className="pointer-events-auto relative">
          <button
            onClick={() => setControlsOpen((prev) => !prev)}
            className="p-2.5 rounded-2xl bg-[#05030B]/70 border border-white/10 backdrop-blur-xl text-slate-300 hover:text-white hover:border-white/30 transition-all cursor-pointer shadow-lg flex items-center gap-2 text-xs"
            aria-label="Settings and Performance Controls"
          >
            <Sliders className="w-4 h-4 text-[#B66BFF]" />
            <span className="hidden sm:inline font-mono uppercase text-[10px] tracking-wider">
              {quality}
            </span>
          </button>

          {/* Settings Dropdown Panel */}
          {controlsOpen && (
            <div className="absolute right-0 mt-2 w-56 p-4 rounded-2xl bg-[#05030B]/90 border border-white/15 backdrop-blur-2xl shadow-2xl flex flex-col gap-3 z-50">
              <div className="text-[10px] font-mono uppercase tracking-widest text-slate-400 pb-1 border-b border-white/10">
                Visual & Performance
              </div>

              {/* Quality mode buttons */}
              <div className="flex flex-col gap-1">
                <span className="text-xs text-slate-300 font-medium">Particle Density:</span>
                <div className="grid grid-cols-3 gap-1 mt-1">
                  {(['low', 'medium', 'high'] as const).map((q) => (
                    <button
                      key={q}
                      onClick={() => setQuality(q)}
                      className={`py-1 rounded-lg text-[10px] font-mono uppercase transition-all cursor-pointer ${
                        quality === q
                          ? 'bg-[#8B35FF] text-white font-bold'
                          : 'bg-white/5 text-slate-400 hover:bg-white/10'
                      }`}
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </div>

              {/* Reduced motion toggle */}
              <div className="flex items-center justify-between pt-2 border-t border-white/10">
                <span className="text-xs text-slate-300">Reduced Motion:</span>
                <button
                  onClick={() => setReducedMotion(!reducedMotion)}
                  className={`p-1.5 rounded-lg text-xs cursor-pointer ${
                    reducedMotion ? 'bg-emerald-500/30 text-emerald-300' : 'bg-white/5 text-slate-400'
                  }`}
                  aria-label="Toggle reduced motion"
                >
                  {reducedMotion ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Floating Bottom Bar for switching worlds */}
      <div className="md:hidden fixed bottom-4 left-4 right-4 z-40 pointer-events-auto">
        <div className="flex items-center justify-around p-1.5 rounded-2xl bg-[#05030B]/85 border border-white/15 backdrop-blur-2xl shadow-2xl">
          {navItems.map((item) => {
            const isActive = activeWorld === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollToWorld(item.id)}
                className={`flex-1 py-2 rounded-xl text-[10px] font-bold tracking-wider uppercase transition-all text-center cursor-pointer ${
                  isActive ? 'text-white' : 'text-slate-400'
                }`}
                style={{
                  background: isActive ? currentTheme.colors.secondary : 'transparent',
                }}
              >
                {item.label.split(' ')[0]}
              </button>
            );
          })}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
