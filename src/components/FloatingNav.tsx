import React from 'react';
import { Sliders } from 'lucide-react';
import type { WorldThemeKey } from '../config/themeData';

interface FloatingNavProps {
  activeWorld: WorldThemeKey;
  onSelectWorld: (world: WorldThemeKey) => void;
  quality: 'high' | 'medium' | 'low';
  onToggleQuality: () => void;
}

export const FloatingNav: React.FC<FloatingNavProps> = ({
  activeWorld,
  onSelectWorld,
  quality,
  onToggleQuality,
}) => {
  const worlds: { id: WorldThemeKey; label: string; accentClass: string }[] = [
    { id: 'xlover', label: 'XL OVER 3.0', accentClass: 'text-[#8B35FF] border-[#8B35FF]' },
    { id: 'zoya', label: 'ZOYA NOOR', accentClass: 'text-[#16B978] border-[#16B978]' },
    { id: 'roohani', label: 'ROOHANI NOORANI', accentClass: 'text-[#FF2D96] border-[#FF2D96]' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-4 px-4 sm:px-8 flex items-center justify-between pointer-events-none">
      {/* Brand Icon & Name */}
      <div className="flex items-center space-x-3 pointer-events-auto">
        <a
          href="#xlover"
          onClick={(e) => {
            e.preventDefault();
            onSelectWorld('xlover');
          }}
          className="group flex items-center space-x-2.5 bg-[#05030B]/80 backdrop-blur-xl px-3.5 py-1.5 rounded-full border border-white/10 hover:border-white/30 transition-all shadow-lg"
        >
          <div className="w-8 h-8 rounded-full overflow-hidden border border-purple-400/40">
            <img
              src="/logo icon.png"
              alt="XL Face Emblem"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform"
            />
          </div>
          <span className="font-extrabold text-xs sm:text-sm tracking-widest text-white uppercase">
            XL OVER <span className="text-[#8B35FF]">3.0</span>
          </span>
        </a>
      </div>

      {/* Floating Dynamic Navigation Pill */}
      <nav className="pointer-events-auto flex items-center space-x-1 sm:space-x-2 bg-[#05030B]/85 backdrop-blur-2xl p-1.5 rounded-full border border-white/15 shadow-2xl">
        {worlds.map((w) => {
          const isActive = activeWorld === w.id;
          return (
            <button
              key={w.id}
              onClick={() => onSelectWorld(w.id)}
              className={`px-3 sm:px-4 py-1.5 rounded-full text-[11px] sm:text-xs font-mono uppercase tracking-wider transition-all duration-300 ${
                isActive
                  ? `bg-white/15 font-bold ${w.accentClass} shadow-md`
                  : 'text-[#B8B0C8] hover:text-white hover:bg-white/5'
              }`}
            >
              {w.label}
            </button>
          );
        })}
      </nav>

      {/* Quality Engine Toggle (High / Med / Low) */}
      <div className="hidden sm:flex items-center pointer-events-auto">
        <button
          onClick={onToggleQuality}
          title="Toggle 3D Engine Quality"
          className="flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-[#05030B]/80 backdrop-blur-xl border border-white/10 hover:border-white/30 text-[11px] font-mono text-[#B8B0C8] hover:text-white transition-all shadow-lg uppercase"
        >
          <Sliders className="w-3.5 h-3.5 text-[#65C7FF]" />
          <span>GPU: {quality}</span>
        </button>
      </div>
    </header>
  );
};
