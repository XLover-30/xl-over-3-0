import React from 'react';
import { motion } from 'framer-motion';
import { Compass, Sparkles, ArrowDown, ExternalLink, Lightbulb, Target } from 'lucide-react';
import { FacebookIcon, InstagramIcon } from './SocialIcons';
import { SOCIAL_LINKS } from '../config/siteConfig';

export const ZoyaSection: React.FC = () => {
  const scrollToNext = () => {
    const el = document.getElementById('roohani-noorani');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="zoya-noor"
      className="relative min-h-screen w-full flex flex-col justify-between items-center px-4 sm:px-6 lg:px-12 pt-28 pb-16 z-10"
      aria-label="Zoya Noor Universe"
    >
      {/* Background emerald and gold ambient light */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[620px] h-[340px] sm:h-[620px] bg-gradient-to-tr from-[#087A50]/20 via-[#C8A45D]/15 to-transparent rounded-full blur-[130px] pointer-events-none -z-10" />

      {/* Top Header Eyebrow & Brand Title */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1 }}
        className="text-center max-w-3xl mx-auto mb-6"
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#087A50]/40 bg-[#071B13]/80 backdrop-blur-md text-xs sm:text-sm font-semibold tracking-widest text-[#16B978] uppercase mb-4 shadow-[0_0_20px_rgba(22,185,120,0.25)]">
          <Sparkles className="w-3.5 h-3.5 text-[#C8A45D] animate-pulse" />
          <span>WORLD 02 — MOTIVATION & PSYCHOLOGY</span>
        </div>
        <h2 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-2 font-display">
          ZOYA <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#16B978] via-[#C8A45D] to-[#F7F1E5] drop-shadow-[0_0_25px_rgba(22,185,120,0.6)]">NOOR</span>
        </h2>
        <p className="text-sm sm:text-lg md:text-xl font-medium tracking-[0.25em] text-[#C8A45D]/95 uppercase">
          THE MIND BEHIND THE MINDSET.
        </p>
        <p className="mt-3 text-xs sm:text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
          Zoya Noor X is a motivational speaker who operates the Zoya Mindset content channel.
        </p>
      </motion.div>

      {/* Centerpiece 3-Column Composition */}
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center my-auto">
        {/* Left Column: Personal Identity Panel */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1, delay: 0.1 }}
          className="lg:col-span-4 flex flex-col gap-5 order-2 lg:order-1"
        >
          {/* Identity Card 1: Zoya Noor Personal Identity */}
          <div className="p-6 rounded-2xl bg-[#071B13]/70 border border-[#087A50]/40 backdrop-blur-xl shadow-[0_8px_32px_0_rgba(8,122,80,0.2)] hover:border-[#16B978]/60 transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Compass className="w-5 h-5 text-[#16B978]" />
                <h3 className="text-base font-bold text-white tracking-wide">Zoya Noor</h3>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#16B978]/20 text-[#16B978] border border-[#16B978]/30">
                PERSONAL IDENTITY
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
              Empowering modern leaders, creatives, and high-performers with clarity, mental sovereignty, and emotional equilibrium.
            </p>

            <a
              href={SOCIAL_LINKS.zoyaNoor.personal.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3.5 rounded-xl bg-white/[0.04] border border-[#087A50]/30 hover:border-[#C8A45D]/60 hover:bg-[#087A50]/20 text-white transition-all duration-200 group"
              aria-label="Visit Zoya Noor Personal Instagram"
            >
              <div className="flex items-center gap-3">
                <InstagramIcon className="w-5 h-5 text-[#16B978] group-hover:scale-110 transition-transform" />
                <div>
                  <div className="text-sm font-semibold">{SOCIAL_LINKS.zoyaNoor.personal.platform}</div>
                  <div className="text-xs text-slate-400">{SOCIAL_LINKS.zoyaNoor.personal.handle}</div>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </a>
          </div>

          {/* Core Philosophy Highlights */}
          <div className="p-5 rounded-2xl bg-[#071B13]/60 border border-[#087A50]/30 backdrop-blur-xl">
            <h4 className="text-xs uppercase font-bold tracking-widest text-[#C8A45D] mb-3 flex items-center gap-2">
              <Target className="w-4 h-4 text-[#16B978]" />
              Strategic Principles
            </h4>
            <ul className="text-xs text-slate-300 space-y-2">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#16B978]" />
                Unshakable self-respect and boundary architecture
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C8A45D]" />
                Constructive resilience through psychological clarity
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Center Column: Character Portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1.1, ease: 'easeOut' }}
          className="lg:col-span-4 flex flex-col items-center justify-center relative order-1 lg:order-2"
        >
          {/* Glowing Aura Rings */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-[#087A50]/25 via-transparent to-[#C8A45D]/25 blur-2xl pointer-events-none" />

          {/* Main Character Image - Preserving Natural Proportions */}
          <div className="relative group max-w-[320px] sm:max-w-[420px] md:max-w-[450px] aspect-[4/5] flex items-center justify-center">
            <img
              src="./Zoya Photo.png"
              alt="Zoya Noor Portrait"
              className="relative z-10 w-full h-full object-contain filter drop-shadow-[0_15px_35px_rgba(0,0,0,0.85)] group-hover:scale-105 transition-transform duration-700 ease-out"
              loading="lazy"
            />
          </div>
        </motion.div>

        {/* Right Column: Motivational Content Channel Panel (Zoya Mindset) */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="lg:col-span-4 flex flex-col gap-5 order-3"
        >
          {/* Identity Card 2: Zoya Mindset Motivational Channel */}
          <div className="p-6 rounded-2xl bg-[#071B13]/70 border border-[#087A50]/40 backdrop-blur-xl shadow-[0_8px_32px_0_rgba(8,122,80,0.2)] hover:border-[#C8A45D]/60 transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Lightbulb className="w-5 h-5 text-[#C8A45D]" />
                <h3 className="text-base font-bold text-white tracking-wide">Zoya Mindset</h3>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#C8A45D]/20 text-[#E4CA8A] border border-[#C8A45D]/30">
                CONTENT CHANNEL
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
              Daily transformative motivation, psychological tools, cognitive framing, and actionable mindset paradigms.
            </p>

            <div className="flex flex-col gap-3">
              <a
                href={SOCIAL_LINKS.zoyaNoor.mindsetFacebook.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 rounded-xl bg-white/[0.04] border border-[#087A50]/30 hover:border-[#16B978]/60 hover:bg-[#087A50]/20 text-white transition-all duration-200 group"
                aria-label="Visit Zoya Mindset Facebook"
              >
                <div className="flex items-center gap-3">
                  <FacebookIcon className="w-5 h-5 text-[#16B978] group-hover:scale-110 transition-transform" />
                  <div>
                    <div className="text-sm font-semibold">{SOCIAL_LINKS.zoyaNoor.mindsetFacebook.platform}</div>
                    <div className="text-xs text-slate-400">{SOCIAL_LINKS.zoyaNoor.mindsetFacebook.handle}</div>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>

              <a
                href={SOCIAL_LINKS.zoyaNoor.mindsetInstagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 rounded-xl bg-white/[0.04] border border-[#087A50]/30 hover:border-[#C8A45D]/60 hover:bg-[#087A50]/20 text-white transition-all duration-200 group"
                aria-label="Visit Zoya Mindset Instagram"
              >
                <div className="flex items-center gap-3">
                  <InstagramIcon className="w-5 h-5 text-[#C8A45D] group-hover:scale-110 transition-transform" />
                  <div>
                    <div className="text-sm font-semibold">{SOCIAL_LINKS.zoyaNoor.mindsetInstagram.platform}</div>
                    <div className="text-xs text-slate-400">{SOCIAL_LINKS.zoyaNoor.mindsetInstagram.handle}</div>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>
            </div>
          </div>

          {/* Quick World Switcher to World 03 */}
          <div className="p-5 rounded-2xl bg-[#071B13]/60 border border-[#087A50]/30 backdrop-blur-xl">
            <div className="text-xs uppercase font-bold tracking-widest text-[#16B978] mb-2">Next Destination</div>
            <p className="text-xs text-slate-300 leading-relaxed mb-4">
              Step into the rhythmic, musical, glam-pop world of Roohani Noorani.
            </p>
            <button
              onClick={scrollToNext}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-gradient-to-r from-[#087A50] to-[#C8A45D] text-white text-xs font-bold tracking-wider uppercase hover:opacity-95 transition-opacity shadow-[0_0_20px_rgba(8,122,80,0.5)] cursor-pointer"
            >
              <span>Discover Roohani Noorani</span>
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
        <span className="text-[11px] uppercase tracking-[0.25em] font-semibold text-slate-400">Proceed to World 03</span>
        <ArrowDown className="w-4 h-4 text-[#16B978]" />
      </motion.div>
    </section>
  );
};

export default ZoyaSection;
