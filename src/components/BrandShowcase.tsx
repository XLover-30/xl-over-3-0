import React from 'react';
import { Music2, Sparkles, Compass, Brain, Tv, ExternalLink, Clock } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import type { Brand } from '../config/siteConfig';

// Helper to render appropriate Lucide icon for each brand emblem
const renderBrandIcon = (iconName: string) => {
  switch (iconName) {
    case 'Music2':
      return <Music2 className="w-8 h-8" />;
    case 'Sparkles':
      return <Sparkles className="w-8 h-8" />;
    case 'Compass':
      return <Compass className="w-8 h-8" />;
    case 'Brain':
      return <Brain className="w-8 h-8" />;
    case 'Youtube':
      return <Tv className="w-8 h-8" />;
    default:
      return <Sparkles className="w-8 h-8" />;
  }
};

export const BrandShowcase: React.FC = () => {
  return (
    <section id="brands" className="py-24 px-6 sm:px-8 relative max-w-7xl mx-auto">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-purple-900/10 blur-[130px] rounded-full pointer-events-none" />

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
        <div className="inline-block px-4 py-1.5 rounded-full bg-purple-900/30 border border-purple-500/30 text-purple-300 text-xs font-mono uppercase tracking-widest">
          Explore Our Ecosystem
        </div>
        <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white uppercase">
          OUR DIGITAL <span className="chrome-text">UNIVERSE</span>
        </h2>
        <p className="text-[#B8B0C8] text-base sm:text-lg font-light">
          Five distinct creative dimensions under one central faceless identity.
        </p>
      </div>

      {/* Brand Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {siteConfig.brands.map((brand: Brand) => {
          const isConfigured = Boolean(brand.url) && !brand.isComingSoon;

          return (
            <div
              key={brand.id}
              className="group relative rounded-3xl p-8 glass-bubble border border-purple-500/30 hover:border-purple-400/60 transition-all duration-500 hover:-translate-y-2.5 hover:shadow-2xl hover:shadow-purple-600/40 flex flex-col justify-between overflow-hidden cursor-pointer"
            >
              {/* Line Art Grid Background Pattern */}
              <div className="absolute inset-0 cyber-line-grid opacity-30 group-hover:opacity-60 transition-opacity duration-500 pointer-events-none" />

              {/* Subtle Card Background Gradient Overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-b ${brand.visualTheme.gradient} opacity-25 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none`}
              />

              <div className="relative z-10 space-y-6">
                {/* Top Emblem & Category Badge */}
                <div className="flex items-center justify-between">
                  <div
                    className="p-4 rounded-2xl bg-[#07060B] border border-purple-500/30 shadow-inner group-hover:scale-110 transition-transform duration-300"
                    style={{ color: brand.visualTheme.accentColor }}
                  >
                    {renderBrandIcon(brand.visualTheme.emblemIcon)}
                  </div>

                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider border ${brand.visualTheme.badgeBg}`}
                  >
                    {brand.category}
                  </span>
                </div>

                {/* Brand Name & Description */}
                <div className="space-y-2">
                  <h3 className="text-2xl font-black text-white tracking-wide group-hover:text-purple-200 transition-colors">
                    {brand.name}
                  </h3>
                  <p className="text-sm text-[#B8B0C8] font-light leading-relaxed">
                    {brand.description}
                  </p>
                </div>
              </div>

              {/* Action Button */}
              <div className="relative z-10 pt-8 mt-6 border-t border-purple-900/30">
                {isConfigured ? (
                  <a
                    href={brand.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 px-5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs uppercase tracking-widest flex items-center justify-center space-x-2 transition-all shadow-lg shadow-purple-600/30"
                  >
                    <span>VISIT CHANNEL</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                ) : (
                  <button
                    disabled
                    aria-label={`${brand.name} Coming Soon`}
                    className="w-full py-3 px-5 rounded-xl bg-[#07060B]/80 border border-purple-900/40 text-[#B8B0C8]/60 font-medium text-xs uppercase tracking-widest flex items-center justify-center space-x-2 cursor-not-allowed"
                  >
                    <Clock className="w-4 h-4 text-purple-400/60" />
                    <span>COMING SOON</span>
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
