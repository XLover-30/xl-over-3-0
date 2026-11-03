import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Sparkles, ExternalLink } from 'lucide-react';
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
      className="relative min-h-screen w-full flex flex-col justify-between items-center px-4 sm:px-6 lg:px-12 pt-24 pb-16 z-10"
      aria-label="XL OVER 3.0 Universe"
    >
      {/* Background ambient light glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[600px] h-[340px] sm:h-[600px] bg-gradient-to-tr from-[#8B35FF]/20 via-[#246BFF]/15 to-transparent rounded-full blur-[120px] pointer-events-none -z-10" />

      {/* Top Header Eyebrow & Brand Title */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center max-w-3xl mx-auto mb-6"
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#8B35FF]/30 bg-[#10061F]/70 backdrop-blur-md text-xs sm:text-sm font-semibold tracking-widest text-[#B66BFF] uppercase mb-4 shadow-[0_0_20px_rgba(139,53,255,0.25)]">
          <Sparkles className="w-3.5 h-3.5 text-[#65C7FF] animate-pulse" />
          <span>WORLD 01 — THE DIGITAL UNIVERSE</span>
        </div>
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-2 font-display">
          XL OVER <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B66BFF] via-[#65C7FF] to-white drop-shadow-[0_0_25px_rgba(182,107,255,0.6)]">3.0</span>
        </h1>
        <p className="text-sm sm:text-lg md:text-xl font-medium tracking-[0.25em] text-[#65C7FF]/90 uppercase">
          ONE IDENTITY. MULTIPLE WORLDS.
        </p>
      </motion.div>

      {/* Centerpiece 3-Column Composition on Desktop */}
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center my-auto">
        {/* Left Column: Brand Mission Glass Card */}
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

        {/* Center Column: Full-Body Character & 3D Orbital TXT Icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, ease: 'easeOut' }}
          className="lg:col-span-6 flex flex-col items-center justify-center relative order-1 lg:order-2"
        >
          {/* Orbital Floating TXT Icon */}
          <motion.div
            animate={{
              y: [0, -12, 0],
              rotateZ: [0, 1.5, -1.5, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 6,
              ease: 'easeInOut',
            }}
            className="absolute -top-12 sm:-top-16 z-20 w-44 sm:w-64 select-none drop-shadow-[0_0_35px_rgba(139,53,255,0.7)]"
          >
            <img
              src="./TXT icon.png"
              alt="XL OVER 3.0 Brand Emblem"
              className="w-full h-auto object-contain filter contrast-125 brightness-110"
              loading="eager"
            />
          </motion.div>

          {/* Central Character Portrait - Preserving Body Proportions */}
          <div className="relative group max-w-[320px] sm:max-w-[420px] md:max-w-[460px] aspect-[4/5] flex items-center justify-center pt-8">
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

        {/* Right Column: Future Identity & Universe Telemetry */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="lg:col-span-3 flex flex-col gap-5 order-3"
        >
          {/* Mysterious Future Character Hologram Card */}
          <div className="p-6 rounded-2xl bg-[#10061F]/60 border border-[#8B35FF]/30 backdrop-blur-xl shadow-[0_8px_32px_0_rgba(139,53,255,0.2)] hover:border-[#65C7FF]/50 transition-all duration-300 relative overflow-hidden group">
            {/* Holographic light sweep */}
            <div className="absolute -inset-full bg-gradient-to-r from-transparent via-white/[0.08] to-transparent group-hover:animate-pulse pointer-events-none" />
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs uppercase font-bold tracking-widest text-[#65C7FF]">Secret Identity</span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#8B35FF]/30 text-[#F8F5FF] border border-[#8B35FF]/40">ENCRYPTED</span>
            </div>

            {/* Abstract holographic silhouette box */}
            <div className="w-full h-32 rounded-xl bg-gradient-to-b from-[#05030B] to-[#10061F] border border-white/10 flex items-center justify-center relative overflow-hidden my-3">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(101,199,255,0.25)_0%,transparent_70%)] animate-pulse" />
              {/* Silhouette abstract shape */}
              <div className="w-16 h-20 rounded-t-full bg-gradient-to-b from-white/15 to-transparent blur-sm relative z-10 border-t border-white/30" />
              <div className="absolute text-[11px] font-mono tracking-widest text-slate-400 bottom-2 z-20">
                // WORLD 04 INBOUND
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed">
              A classified digital avatar undergoing neural simulation. Identity remains strictly undisclosed until deployment.
            </p>
          </div>

          {/* Quick World Switcher Info */}
          <div className="p-5 rounded-2xl bg-[#10061F]/60 border border-[#8B35FF]/30 backdrop-blur-xl shadow-[0_8px_32px_0_rgba(139,53,255,0.2)]">
            <div className="text-xs uppercase font-bold tracking-widest text-[#B66BFF] mb-2">Universe Dimensions</div>
            <p className="text-xs text-slate-300 leading-relaxed mb-4">
              Scroll down or tap below to transition into the mindset universe of Zoya Noor and the musical realm of Roohani Noorani.
            </p>
            <button
              onClick={scrollToNext}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-gradient-to-r from-[#8B35FF] to-[#246BFF] text-white text-xs font-bold tracking-wider uppercase hover:opacity-95 transition-opacity shadow-[0_0_20px_rgba(139,53,255,0.5)] cursor-pointer"
            >
              <span>Explore Zoya Noor</span>
              <ArrowDown className="w-4 h-4 animate-bounce" />
            </button>
          </div>
        </motion.div>
      </div>

      {/* Bottom Scroll Cue */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        className="mt-8 flex flex-col items-center gap-2 cursor-pointer text-slate-400 hover:text-white transition-colors"
        onClick={scrollToNext}
      >
        <span className="text-[11px] uppercase tracking-[0.25em] font-semibold text-slate-400">Scroll to Explore Identities</span>
        <ArrowDown className="w-4 h-4 text-[#B66BFF]" />
      </motion.div>
    </section>
  );
};

export default XLoverSection;
