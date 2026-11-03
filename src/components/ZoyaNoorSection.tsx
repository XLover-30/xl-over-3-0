import React from 'react';
import { ExternalLink, Brain, Sparkles, Compass, Lightbulb } from 'lucide-react';
import { ZOYA_DATA } from '../config/siteData';

export const ZoyaNoorSection: React.FC = () => {
  return (
    <section
      id="zoya"
      className="relative min-h-screen w-full flex items-center justify-center py-24 px-4 sm:px-8 overflow-hidden"
    >
      {/* Background Emerald World Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-[#087A50]/25 via-[#16B978]/15 to-[#C8A45D]/10 blur-[160px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

        {/* Left Side (Desktop): Personal Identity Panel */}
        <div className="lg:col-span-3 space-y-6 order-2 lg:order-1 text-center lg:text-left">
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#071B13]/80 border border-[#16B978]/40 text-[#16B978] text-xs font-mono uppercase tracking-widest shadow-lg shadow-emerald-950/40">
            <Sparkles className="w-3.5 h-3.5 text-[#C8A45D] animate-pulse" />
            <span>WORLD 02 // MINDSET</span>
          </div>

          <div className="space-y-3">
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight uppercase">
              {ZOYA_DATA.name}
            </h2>
            <p className="text-xl sm:text-2xl font-light text-[#C8A45D] tracking-wider font-mono">
              {ZOYA_DATA.subtitle}
            </p>
          </div>

          <p className="text-[#B8B0C8] text-sm leading-relaxed font-light">
            {ZOYA_DATA.description}
          </p>

          {/* Personal Identity Glass Panel */}
          <div className="p-5 rounded-2xl bg-[#071B13]/70 backdrop-blur-xl border border-[#16B978]/30 shadow-xl space-y-3">
            <div className="flex items-center space-x-2 text-xs font-mono text-[#C8A45D] uppercase tracking-wider">
              <Brain className="w-4 h-4 text-[#16B978]" />
              <span>{ZOYA_DATA.personalIdentity.title}</span>
            </div>
            <p className="text-xs text-white/90 font-medium">{ZOYA_DATA.personalIdentity.role}</p>
            <p className="text-xs text-[#B8B0C8] font-light">{ZOYA_DATA.personalIdentity.focus}</p>

            <a
              href={ZOYA_DATA.personalIdentity.social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-between w-full mt-2 p-3 rounded-xl bg-[#050B08]/80 border border-[#16B978]/30 hover:border-[#C8A45D] hover:bg-[#16B978]/20 text-white text-xs font-semibold uppercase tracking-wider transition-all duration-300 group"
            >
              <span>{ZOYA_DATA.personalIdentity.social.label}</span>
              <ExternalLink className="w-4 h-4 text-[#C8A45D] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>

        {/* Center: Character Portrait */}
        <div className="lg:col-span-6 flex flex-col items-center justify-center order-1 lg:order-2 space-y-6">
          <div className="relative group max-w-sm sm:max-w-md w-full">
            {/* Emerald Gold Glass Glow Frame */}
            <div className="absolute -inset-1.5 bg-gradient-to-t from-[#087A50] via-[#16B978] to-[#C8A45D] rounded-3xl opacity-35 group-hover:opacity-70 blur-xl transition-all duration-700" />

            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-b from-[#071B13]/90 to-[#050B08] border border-[#16B978]/40 shadow-2xl p-2">
              <img
                src={ZOYA_DATA.characterImage}
                alt="Zoya Noor Portrait"
                className="w-full h-auto object-cover rounded-2xl group-hover:scale-[1.02] transition-transform duration-700"
              />

              {/* Bottom Holographic HUD Bar */}
              <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-[#050B08]/85 backdrop-blur-md border border-[#16B978]/30 flex items-center justify-between text-xs font-mono">
                <span className="text-[#C8A45D] flex items-center space-x-1.5">
                  <Compass className="w-3.5 h-3.5" />
                  <span>DIMENSION: MINDFULNESS</span>
                </span>
                <span className="text-[#16B978]">COGNITIVE RESILIENCE</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side (Desktop): Zoya Mindset Channel Panel */}
        <div className="lg:col-span-3 space-y-6 order-3 text-center lg:text-left">
          {/* Channel Panel */}
          <div className="p-6 rounded-3xl bg-[#071B13]/70 backdrop-blur-xl border border-[#16B978]/30 shadow-xl space-y-4">
            <div className="flex items-center space-x-2 text-xs font-mono text-[#C8A45D] uppercase tracking-widest">
              <Lightbulb className="w-4 h-4 text-[#16B978]" />
              <span>CONTENT ECOSYSTEM</span>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white uppercase">{ZOYA_DATA.channelIdentity.title}</h3>
              <p className="text-xs text-[#16B978] font-mono mt-0.5">{ZOYA_DATA.channelIdentity.role}</p>
            </div>

            <p className="text-xs text-[#B8B0C8] font-light leading-relaxed">
              {ZOYA_DATA.channelIdentity.focus}
            </p>

            <div className="pt-2 space-y-3">
              <span className="block text-[11px] font-mono uppercase text-[#C8A45D] tracking-wider">
                JOIN THE MOVEMENT
              </span>
              {ZOYA_DATA.channelIdentity.socials.map((soc) => (
                <a
                  key={soc.platform}
                  href={soc.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-[#050B08]/80 border border-[#16B978]/30 hover:border-[#C8A45D] hover:bg-[#16B978]/20 text-white text-xs font-semibold uppercase tracking-wider transition-all duration-300 group"
                >
                  <span>{soc.label}</span>
                  <ExternalLink className="w-4 h-4 text-[#C8A45D] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
