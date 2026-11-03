import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Sparkles, ArrowDown } from 'lucide-react';
import { FacebookIcon, InstagramIcon } from './SocialIcons';
import { SOCIAL_LINKS } from '../config/siteConfig';

export const XLoverSection: React.FC = () => {
  const scrollToNext = () => {
    const el = document.getElementById('zoya-noor');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="xl-over-3-0"
      className="relative min-h-screen w-full flex flex-col justify-between items-center px-4 sm:px-6 lg:px-12 pt-28 pb-16 z-10"
      aria-label="XL OVER 3.0 Identity"
    >
      {/* Background ambient light glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[600px] h-[340px] sm:h-[600px] bg-gradient-to-tr from-[#8B35FF]/20 via-[#246BFF]/15 to-transparent rounded-full blur-[130px] pointer-events-none -z-10" />

      {/* Brand Title Block */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center max-w-3xl mx-auto mb-6"
      >
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-2 font-display">
          XL OVER <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B66BFF] via-[#65C7FF] to-white drop-shadow-[0_0_25px_rgba(182,107,255,0.6)]">3.0</span>
        </h1>
        <p className="text-sm sm:text-lg md:text-xl font-medium tracking-[0.25em] text-[#65C7FF]/90 uppercase">
          ONE IDENTITY. MULTIPLE WORLDS.
        </p>
      </motion.div>

      {/* Centerpiece 3-Column Composition on Desktop */}
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center my-auto">
        {/* Left Column: Brand Mission Glass Card & Channels */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="lg:col-span-3 flex flex-col gap-5 order-2 lg:order-1"
        >
          <div className="p-6 rounded-2xl bg-[#10061F]/60 border border-[#8B35FF]/30 backdrop-blur-xl shadow-[0_8px_32px_0_rgba(139,53,255,0.2)] hover:border-[#B66BFF]/60 transition-all duration-300">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#65C7FF] animate-ping" />
              <h3 className="text-xs uppercase font-bold tracking-widest text-[#B66BFF]">Core Identity</h3>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed">
              XL OVER 3.0 represents a modern faceless digital universe bridging music production, psychological empowerment, and high-energy performance.
            </p>
          </div>

          {/* Social Links Panel */}
          <div className="p-6 rounded-2xl bg-[#10061F]/60 border border-[#8B35FF]/30 backdrop-blur-xl shadow-[0_8px_32px_0_rgba(139,53,255,0.2)]">
            <h3 className="text-xs uppercase font-bold tracking-widest text-[#B66BFF] mb-4">Official Channels</h3>
            <div className="flex flex-col gap-3">
              {SOCIAL_LINKS.xlOver.map((s) => (
                <a
                  key={s.platform}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-white/[0.04] border border-[#8B35FF]/20 hover:border-[#65C7FF]/60 hover:bg-[#8B35FF]/20 text-white transition-all duration-200 group"
                  aria-label={`Visit XL OVER 3.0 on ${s.platform}`}
                >
                  <div className="flex items-center gap-3">
                    {s.platform === 'Facebook' ? (
                      <FacebookIcon className="w-5 h-5 text-[#246BFF] group-hover:scale-110 transition-transform" />
                    ) : (
                      <InstagramIcon className="w-5 h-5 text-[#B66BFF] group-hover:scale-110 transition-transform" />
                    )}
                    <div>
                      <div className="text-sm font-semibold">{s.platform}</div>
                      <div className="text-xs text-slate-400">{s.handle}</div>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Center Column: Full-Body Character & Refined Orbital TXT Icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, ease: 'easeOut' }}
          className="lg:col-span-6 flex flex-col items-center justify-center relative order-1 lg:order-2"
        >
          {/* Orbital Floating TXT Icon — Positioned clearly ABOVE character with elegant motion */}
          <motion.div
            animate={{
              y: [0, -10, 0],
              rotateY: [0, 8, 0, -8, 0],
              rotateZ: [0, 1.2, -1.2, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 7,
              ease: 'easeInOut',
            }}
            className="relative z-20 w-44 sm:w-56 mb-4 select-none drop-shadow-[0_0_35px_rgba(139,53,255,0.7)] pointer-events-none"
          >
            <img
              src="./TXT icon.png"
              alt="XL OVER 3.0 Brand Emblem"
              className="w-full h-auto object-contain filter contrast-125 brightness-110"
              loading="eager"
            />
          </motion.div>

          {/* Central Character Portrait — Preserving exact proportions and clear of any overlap */}
          <div className="relative group max-w-[320px] sm:max-w-[420px] md:max-w-[460px] aspect-[4/5] flex items-center justify-center">
            {/* Glowing background ring */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-[#8B35FF]/30 via-transparent to-[#246BFF]/30 blur-2xl group-hover:blur-3xl transition-all duration-500 pointer-events-none" />

            <img
              src="./XLover Photo.png"
              alt="XL OVER 3.0 Central Persona"
              className="relative z-10 w-full h-full object-contain filter drop-shadow-[0_15px_35px_rgba(0,0,0,0.85)] group-hover:scale-105 transition-transform duration-700 ease-out"
              loading="eager"
            />
          </div>
        </motion.div>

        {/* Right Column: Creative Universe Architecture */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="lg:col-span-3 flex flex-col gap-5 order-3"
        >
          {/* Faceless Digital Universe Hologram Card */}
          <div className="p-6 rounded-2xl bg-[#10061F]/60 border border-[#8B35FF]/30 backdrop-blur-xl shadow-[0_8px_32px_0_rgba(139,53,255,0.2)] hover:border-[#65C7FF]/50 transition-all duration-300 relative overflow-hidden group">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs uppercase font-bold tracking-widest text-[#65C7FF]">Digital Identity</span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#8B35FF]/30 text-[#F8F5FF] border border-[#8B35FF]/40">
                ACTIVE
              </span>
            </div>

            <div className="w-full h-32 rounded-xl bg-gradient-to-b from-[#05030B] to-[#10061F] border border-white/10 flex items-center justify-center relative overflow-hidden my-3">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(101,199,255,0.25)_0%,transparent_70%)] animate-pulse" />
              <div className="w-16 h-20 rounded-t-full bg-gradient-to-b from-white/15 to-transparent blur-sm relative z-10 border-t border-white/30" />
              <div className="absolute text-[10px] font-mono tracking-widest text-[#B66BFF] bottom-2 z-20 flex items-center gap-1.5">
                <Sparkles className="w-3 h-3 text-[#65C7FF]" />
                <span>UNIFIED ARCHITECTURE</span>
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed">
              An independent creative architecture uniting high-level music production, psychological empowerment, and digital entertainment.
            </p>
          </div>

          {/* Navigation Card to Zoya Noor */}
          <div className="p-5 rounded-2xl bg-[#10061F]/60 border border-[#8B35FF]/30 backdrop-blur-xl shadow-[0_8px_32px_0_rgba(139,53,255,0.2)]">
            <div className="text-xs uppercase font-bold tracking-widest text-[#B66BFF] mb-2">Next Atmosphere</div>
            <p className="text-xs text-slate-300 leading-relaxed mb-4">
              Explore the mindset and psychology realm of Zoya Noor and the music universe of Roohani Noorani.
            </p>
            <button
              onClick={scrollToNext}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-gradient-to-r from-[#8B35FF] to-[#246BFF] text-white text-xs font-bold tracking-wider uppercase hover:opacity-95 transition-all shadow-[0_0_20px_rgba(139,53,255,0.5)] cursor-pointer hover:shadow-[0_0_25px_rgba(101,199,255,0.6)]"
            >
              <span>Explore Zoya Noor</span>
              <ArrowDown className="w-4 h-4 animate-bounce" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default XLoverSection;
