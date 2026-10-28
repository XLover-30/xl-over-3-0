import React from 'react';
import { Play, Music, FileText, Sparkles, AlertCircle } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import type { FeaturedItem } from '../config/siteConfig';

const renderTypeIcon = (type: string) => {
  switch (type) {
    case 'music':
      return <Music className="w-5 h-5 text-pink-400" />;
    case 'video':
      return <Play className="w-5 h-5 text-sky-400" />;
    case 'article':
      return <FileText className="w-5 h-5 text-purple-400" />;
    default:
      return <Sparkles className="w-5 h-5 text-purple-400" />;
  }
};

export const FeaturedContent: React.FC = () => {
  return (
    <section id="featured" className="py-24 px-6 sm:px-8 relative max-w-7xl mx-auto border-t border-purple-900/30">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div className="space-y-3">
          <div className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-purple-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Curated Releases</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase">
            FROM OUR <span className="chrome-text">WORLD</span>
          </h2>
          <p className="text-[#B8B0C8] text-base font-light max-w-xl">
            Discover music, motivation, and creative experiences.
          </p>
        </div>
      </div>

      {/* Featured Items Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {siteConfig.featuredContent.map((item: FeaturedItem) => (
          <div
            key={item.id}
            className="group glass-card rounded-2xl p-6 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 flex flex-col justify-between"
          >
            <div className="space-y-4">
              {/* Thumbnail / Teaser Visual Box */}
              <div className="relative aspect-video rounded-xl bg-gradient-to-tr from-purple-950 via-slate-900 to-black border border-purple-500/30 overflow-hidden flex items-center justify-center group-hover:scale-[1.02] transition-transform duration-300">
                <div className="absolute inset-0 bg-purple-600/10 backdrop-blur-[2px]" />
                <div className="p-4 rounded-full bg-purple-900/60 border border-purple-400/40 text-purple-200 shadow-lg">
                  {renderTypeIcon(item.type)}
                </div>

                {item.isPlaceholder && (
                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded-md bg-black/70 border border-purple-500/30 text-[10px] font-mono text-purple-300 uppercase tracking-widest flex items-center space-x-1">
                    <AlertCircle className="w-3 h-3 text-purple-400" />
                    <span>TEASER PREVIEW</span>
                  </div>
                )}
              </div>

              {/* Details */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs font-mono text-purple-300/80">
                  <span>{item.brandName}</span>
                  <span className="uppercase">{item.category}</span>
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-purple-200 transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-[#B8B0C8] font-light leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>

            {/* Bottom State Affordance */}
            <div className="pt-6 mt-4 border-t border-purple-900/30">
              <button
                disabled
                className="w-full py-2.5 px-4 rounded-lg bg-purple-950/40 border border-purple-900/40 text-purple-300/60 font-mono text-xs uppercase tracking-wider text-center cursor-not-allowed"
              >
                RELEASE PENDING
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
