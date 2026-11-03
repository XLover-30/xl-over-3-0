import React from 'react';
import { ExternalLink, Music, Disc3, Sparkles, Flame, Tv } from 'lucide-react';
import { ROOHANI_DATA } from '../config/siteData';

export const RoohaniNooraniSection: React.FC = () => {
  return (
    <section
      id="roohani"
      className="relative min-h-screen w-full flex items-center justify-center py-24 px-4 sm:px-8 overflow-hidden"
    >
      {/* Background Hot-Pink World Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-[#FF2D96]/25 via-[#C52B91]/15 to-[#FF55B7]/10 blur-[160px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

        {/* Left Side (Desktop): Music & Performance Pillars */}
        <div className="lg:col-span-3 space-y-6 order-2 lg:order-1 text-center lg:text-left">
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#1B0617]/80 border border-[#FF2D96]/40 text-[#FF55B7] text-xs font-mono uppercase tracking-widest shadow-lg shadow-pink-950/40">
            <Sparkles className="w-3.5 h-3.5 text-[#FF2D96] animate-pulse" />
            <span>WORLD 03 // RHYTHM</span>
          </div>

          <div className="space-y-3">
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight uppercase">
              {ROOHANI_DATA.name}
            </h2>
            <p className="text-xl sm:text-2xl font-light text-[#F08BC6] tracking-wider font-mono">
              {ROOHANI_DATA.subtitle}
            </p>
          </div>

          <p className="text-[#B8B0C8] text-sm leading-relaxed font-light">
            {ROOHANI_DATA.description}
          </p>

          {/* Performance Panels */}
          <div className="grid grid-cols-1 gap-3">
            {ROOHANI_DATA.panels.slice(0, 2).map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-[#1B0617]/70 backdrop-blur-xl border border-[#FF2D96]/30 shadow-xl space-y-1.5 text-left"
              >
                <div className="flex items-center space-x-2 text-xs font-mono text-[#FF55B7] uppercase tracking-wider">
                  {idx === 0 ? <Music className="w-4 h-4 text-[#FF2D96]" /> : <Flame className="w-4 h-4 text-[#F08BC6]" />}
                  <span>{item.title}</span>
                </div>
                <p className="text-xs text-[#B8B0C8] font-light">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Center: Character Portrait */}
        <div className="lg:col-span-6 flex flex-col items-center justify-center order-1 lg:order-2 space-y-6">
          <div className="relative group max-w-sm sm:max-w-md w-full">
            {/* Hot Pink Glow Frame */}
            <div className="absolute -inset-1.5 bg-gradient-to-t from-[#FF2D96] via-[#C52B91] to-[#FF55B7] rounded-3xl opacity-35 group-hover:opacity-75 blur-xl transition-all duration-700" />

            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-b from-[#1B0617]/90 to-[#090309] border border-[#FF2D96]/40 shadow-2xl p-2">
              <img
                src={ROOHANI_DATA.characterImage}
                alt="Roohani Noorani Portrait"
                className="w-full h-auto object-cover rounded-2xl group-hover:scale-[1.02] transition-transform duration-700"
              />

              {/* Bottom Holographic HUD Bar */}
              <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-[#090309]/85 backdrop-blur-md border border-[#FF2D96]/30 flex items-center justify-between text-xs font-mono">
                <span className="text-[#F08BC6] flex items-center space-x-1.5">
                  <Disc3 className="w-3.5 h-3.5 animate-spin" />
                  <span>SONIC FREQUENCY: HIGH</span>
                </span>
                <span className="text-[#FF2D96]">GLAM-POP PERFORMANCE</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side (Desktop): Music Videos, Pop Pillars & Official Socials */}
        <div className="lg:col-span-3 space-y-6 order-3 text-center lg:text-left">
          {/* Remaining Panels */}
          <div className="grid grid-cols-1 gap-3">
            {ROOHANI_DATA.panels.slice(2, 4).map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-[#1B0617]/70 backdrop-blur-xl border border-[#FF2D96]/30 shadow-xl space-y-1.5 text-left"
              >
                <div className="flex items-center space-x-2 text-xs font-mono text-[#F08BC6] uppercase tracking-wider">
                  {idx === 0 ? <Tv className="w-4 h-4 text-[#FF2D96]" /> : <Sparkles className="w-4 h-4 text-[#FF55B7]" />}
                  <span>{item.title}</span>
                </div>
                <p className="text-xs text-[#B8B0C8] font-light">{item.detail}</p>
              </div>
            ))}
          </div>

          {/* Official Social Media Channels */}
          <div className="p-6 rounded-3xl bg-[#1B0617]/70 backdrop-blur-xl border border-[#FF2D96]/30 shadow-xl space-y-4">
            <h3 className="text-xs font-mono uppercase tracking-widest text-[#FF55B7]">
              STREAM & CONNECT
            </h3>
            <div className="space-y-3">
              {ROOHANI_DATA.socials.map((soc) => (
                <a
                  key={soc.platform}
                  href={soc.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-[#090309]/80 border border-[#FF2D96]/30 hover:border-[#FF55B7] hover:bg-[#FF2D96]/20 text-white text-xs font-semibold uppercase tracking-wider transition-all duration-300 group"
                >
                  <span>{soc.label}</span>
                  <ExternalLink className="w-4 h-4 text-[#F08BC6] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
