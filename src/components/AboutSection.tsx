import React from 'react';
import { ShieldCheck, Cpu, Layers, Radio } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export const AboutSection: React.FC = () => {
  const icons = [
    <Cpu className="w-6 h-6 text-purple-400" key="cpu" />,
    <Layers className="w-6 h-6 text-pink-400" key="layers" />,
    <Radio className="w-6 h-6 text-indigo-400" key="radio" />
  ];

  return (
    <section id="about" className="py-24 px-6 sm:px-8 relative max-w-7xl mx-auto border-t border-purple-900/30">
      {/* Background Lighting */}
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-purple-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column Text */}
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-md bg-purple-950/60 border border-purple-500/30 text-purple-300 text-xs font-mono uppercase tracking-widest">
            <ShieldCheck className="w-4 h-4 text-purple-400" />
            <span>Core Architecture</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase leading-tight">
            {siteConfig.about.heading}
          </h2>

          <p className="text-lg text-purple-200/90 font-medium">
            {siteConfig.about.subheading}
          </p>

          <div className="space-y-4 text-[#B8B0C8] leading-relaxed font-light text-base">
            {siteConfig.about.paragraphs.map((p: string, idx: number) => (
              <p key={idx}>{p}</p>
            ))}
          </div>
        </div>

        {/* Right Column Pillars */}
        <div className="lg:col-span-5 space-y-4">
          {siteConfig.about.pillars.map((pillar, idx) => (
            <div
              key={pillar.title}
              className="p-6 rounded-2xl glass-card border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 flex items-start space-x-4"
            >
              <div className="p-3 rounded-xl bg-[#07060B] border border-purple-500/30 shrink-0">
                {icons[idx % icons.length]}
              </div>
              <div className="space-y-1">
                <h3 className="text-lg font-bold text-white">{pillar.title}</h3>
                <p className="text-xs text-[#B8B0C8] leading-relaxed">{pillar.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
