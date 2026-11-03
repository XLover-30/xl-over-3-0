import React from 'react';
import { ExternalLink, Sparkles, Shield, Cpu, HelpCircle } from 'lucide-react';
import { XL_DATA } from '../config/siteData';

export const XLOverSection: React.FC = () => {
  return (
    <section
      id="xlover"
      className="relative min-h-screen w-full flex items-center justify-center py-24 px-4 sm:px-8 overflow-hidden"
    >
      {/* Background World Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-[#8B35FF]/25 via-[#246BFF]/15 to-transparent blur-[160px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-8">

        {/* Left Side (Desktop): Identity Info & Brand Story */}
        <div className="lg:col-span-3 space-y-6 order-2 lg:order-1 text-center lg:text-left">
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#10061F]/80 border border-[#8B35FF]/40 text-[#B66BFF] text-xs font-mono uppercase tracking-widest shadow-lg shadow-purple-950/40">
            <Sparkles className="w-3.5 h-3.5 text-[#65C7FF] animate-pulse" />
            <span>WORLD 01 // NEXUS</span>
          </div>

          <div className="space-y-3">
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight uppercase">
              ONE IDENTITY
            </h2>
            <p className="text-xl sm:text-2xl font-light text-[#65C7FF] tracking-wider font-mono">
              MULTIPLE WORLDS
            </p>
          </div>

          <p className="text-[#B8B0C8] text-sm leading-relaxed font-light">
            {XL_DATA.description}
          </p>

          {/* Liquid Glass Stats Panel */}
          <div className="p-5 rounded-2xl bg-[#10061F]/60 backdrop-blur-xl border border-[#8B35FF]/25 shadow-xl space-y-3">
            <div className="flex items-center space-x-2 text-xs font-mono text-[#B66BFF] uppercase tracking-wider">
              <Cpu className="w-4 h-4 text-[#246BFF]" />
              <span>CORE ARCHITECTURE</span>
            </div>
            <div className="grid grid-cols-1 gap-2.5 pt-1 text-xs">
              {XL_DATA.stats.map((s, idx) => (
                <div key={idx} className="flex justify-between items-center py-1 border-b border-purple-900/30">
                  <span className="text-[#B8B0C8]">{s.label}</span>
                  <span className="text-white font-medium">{s.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Center: Character Portrait & Floating TXT Brand Logo */}
        <div className="lg:col-span-6 flex flex-col items-center justify-center order-1 lg:order-2 space-y-6">
          {/* Floating Official Brand TXT Logo */}
          <div className="w-64 sm:w-80 hover:scale-105 transition-transform duration-500 filter drop-shadow-[0_0_30px_rgba(139,53,255,0.6)]">
            <img
              src={XL_DATA.txtLogo}
              alt="XL OVER 3.0 Brand"
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Central Full Body Character */}
          <div className="relative group max-w-sm sm:max-w-md w-full">
            {/* Outer Liquid Glass Glow Frame */}
            <div className="absolute -inset-1.5 bg-gradient-to-t from-[#8B35FF] via-[#246BFF] to-[#65C7FF] rounded-3xl opacity-40 group-hover:opacity-75 blur-xl transition-all duration-700" />

            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-b from-[#10061F]/90 to-[#05030B] border border-[#8B35FF]/40 shadow-2xl p-2">
              <img
                src={XL_DATA.characterImage}
                alt="XL OVER 3.0 Character"
                className="w-full h-auto object-cover rounded-2xl group-hover:scale-[1.02] transition-transform duration-700"
              />

              {/* Bottom Holographic HUD Bar */}
              <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-[#05030B]/85 backdrop-blur-md border border-[#8B35FF]/30 flex items-center justify-between text-xs font-mono">
                <span className="text-[#65C7FF] flex items-center space-x-1.5">
                  <Shield className="w-3.5 h-3.5" />
                  <span>IDENTITY: ACTIVE</span>
                </span>
                <span className="text-[#B66BFF]">STATUS: ONLINE</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side (Desktop): Connect, Social Channels & Future Mystery Identity */}
        <div className="lg:col-span-3 space-y-6 order-3 text-center lg:text-left">
          {/* Official Social Channels */}
          <div className="p-6 rounded-3xl bg-[#10061F]/70 backdrop-blur-xl border border-[#8B35FF]/30 shadow-xl space-y-4">
            <h3 className="text-xs font-mono uppercase tracking-widest text-[#B66BFF]">
              OFFICIAL CHANNELS
            </h3>
            <div className="space-y-3">
              {XL_DATA.socials.map((soc) => (
                <a
                  key={soc.platform}
                  href={soc.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-[#05030B]/80 border border-[#8B35FF]/30 hover:border-[#65C7FF] hover:bg-[#8B35FF]/20 text-white text-xs font-semibold uppercase tracking-wider transition-all duration-300 group"
                >
                  <span>{soc.label}</span>
                  <ExternalLink className="w-4 h-4 text-[#65C7FF] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              ))}
            </div>
          </div>

          {/* Future Classified Character (Holographic Silhouette) */}
          <div className="p-5 rounded-3xl bg-[#10061F]/50 backdrop-blur-lg border border-dashed border-[#8B35FF]/40 relative overflow-hidden group">
            <div className="flex items-center space-x-3 mb-3">
              <div className="w-8 h-8 rounded-full bg-[#8B35FF]/20 border border-[#8B35FF]/50 flex items-center justify-center">
                <HelpCircle className="w-4 h-4 text-[#B66BFF] animate-pulse" />
              </div>
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-white">FUTURE IDENTITY</h4>
                <p className="text-[10px] text-[#65C7FF] font-mono">REALM 04 // ENCRYPTED</p>
              </div>
            </div>

            <p className="text-xs text-[#B8B0C8] font-light leading-relaxed">
              A mysterious dimension is undergoing neural synthesis. The signal is transmitting but identity remains classified.
            </p>

            <div className="mt-3 flex items-center justify-between text-[11px] font-mono text-[#8B35FF]">
              <span>SYNCHRONIZING...</span>
              <span className="animate-ping text-[#65C7FF]">●</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
