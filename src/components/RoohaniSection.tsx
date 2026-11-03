import React from 'react';
import { motion } from 'framer-motion';
import { Music, Video, Disc, Sparkles, ExternalLink, ArrowUp } from 'lucide-react';
import { FacebookIcon, InstagramIcon, YoutubeIcon } from './SocialIcons';
import { SOCIAL_LINKS } from '../config/siteConfig';

export const RoohaniSection: React.FC = () => {
  const scrollToTop = () => {
    const el = document.getElementById('xl-over-3-0');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const contentPanels = [
    {
      title: 'Music & Songs',
      description: 'Original studio recordings blending Desi glam-pop with contemporary synth hooks and melodic vocal arrangements.',
      icon: Music,
      badge: 'AUDIO',
    },
    {
      title: 'Dance Performances',
      description: 'High-energy choreography, electrifying stage routines, and synchronized theatrical dance storytelling.',
      icon: Sparkles,
      badge: 'CHOREOGRAPHY',
    },
    {
      title: 'Music Videos',
      description: 'Cinematic visual productions, conceptual art directions, glamorous costume styling, and digital spectacles.',
      icon: Video,
      badge: 'VISUALS',
    },
    {
      title: 'Pop & Party Music',
      description: 'Club-ready Bollywood-inspired dance rhythms, party anthems, and vibrant high-tempo sonic experiences.',
      icon: Disc,
      badge: 'POP & DANCE',
    },
  ];

  return (
    <section
      id="roohani-noorani"
      className="relative min-h-screen w-full flex flex-col justify-between items-center px-4 sm:px-6 lg:px-12 pt-28 pb-16 z-10"
      aria-label="Roohani Noorani Identity"
    >
      {/* Background hot pink and magenta ambient light */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[620px] h-[340px] sm:h-[620px] bg-gradient-to-tr from-[#FF2D96]/20 via-[#C52B91]/15 to-transparent rounded-full blur-[130px] pointer-events-none -z-10" />

      {/* Brand Title Block */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1 }}
        className="text-center max-w-3xl mx-auto mb-6"
      >
        <h2 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-2 font-display">
          ROOHANI <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF2D96] via-[#FF55B7] to-[#FFF3FA] drop-shadow-[0_0_25px_rgba(255,45,150,0.6)]">NOORANI</span>
        </h2>
        <p className="text-sm sm:text-lg md:text-xl font-medium tracking-[0.25em] text-[#FF55B7]/95 uppercase">
          THE RHYTHM. THE ENERGY. THE EXPRESSION.
        </p>
        <p className="mt-3 text-xs sm:text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
          Roohani Noorani is a singer and dance performer specializing in Bollywood-inspired pop, glam-pop, high-energy dance music and music videos.
        </p>
      </motion.div>

      {/* Centerpiece 3-Column Composition */}
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center my-auto">
        {/* Left Column: First 2 Content Panels */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1, delay: 0.1 }}
          className="lg:col-span-4 flex flex-col gap-5 order-2 lg:order-1"
        >
          {contentPanels.slice(0, 2).map((panel) => {
            const Icon = panel.icon;
            return (
              <div
                key={panel.title}
                className="p-6 rounded-2xl bg-[#1B0617]/70 border border-[#FF2D96]/40 backdrop-blur-xl shadow-[0_8px_32px_0_rgba(255,45,150,0.2)] hover:border-[#FF55B7]/60 transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-[#FF2D96]/20 border border-[#FF2D96]/30 text-[#FF55B7] group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-white tracking-wide">{panel.title}</h3>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#FF2D96]/20 text-[#FF55B7] border border-[#FF2D96]/30">
                    {panel.badge}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{panel.description}</p>
              </div>
            );
          })}
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
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-[#FF2D96]/25 via-transparent to-[#C52B91]/25 blur-2xl pointer-events-none" />

          {/* Main Character Image - Preserving Natural Proportions */}
          <div className="relative group max-w-[320px] sm:max-w-[420px] md:max-w-[450px] aspect-[4/5] flex items-center justify-center">
            <img
              src="./Roohani Photo.png"
              alt="Roohani Noorani Portrait"
              className="relative z-10 w-full h-full object-contain filter drop-shadow-[0_15px_35px_rgba(0,0,0,0.85)] group-hover:scale-105 transition-transform duration-700 ease-out"
              loading="lazy"
            />
          </div>
        </motion.div>

        {/* Right Column: Next 2 Content Panels + Social Media Hub */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="lg:col-span-4 flex flex-col gap-5 order-3"
        >
          {contentPanels.slice(2, 4).map((panel) => {
            const Icon = panel.icon;
            return (
              <div
                key={panel.title}
                className="p-6 rounded-2xl bg-[#1B0617]/70 border border-[#FF2D96]/40 backdrop-blur-xl shadow-[0_8px_32px_0_rgba(255,45,150,0.2)] hover:border-[#FF55B7]/60 transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-[#FF2D96]/20 border border-[#FF2D96]/30 text-[#FF55B7] group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-white tracking-wide">{panel.title}</h3>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#FF2D96]/20 text-[#FF55B7] border border-[#FF2D96]/30">
                    {panel.badge}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{panel.description}</p>
              </div>
            );
          })}

          {/* Social Channels Hub */}
          <div className="p-5 rounded-2xl bg-[#1B0617]/70 border border-[#FF2D96]/40 backdrop-blur-xl shadow-[0_8px_32px_0_rgba(255,45,150,0.2)]">
            <h4 className="text-xs uppercase font-bold tracking-widest text-[#FF55B7] mb-3">Official Media Channels</h4>
            <div className="flex flex-col gap-2.5">
              {SOCIAL_LINKS.roohaniNoorani.map((s) => (
                <a
                  key={s.platform}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-white/[0.04] border border-[#FF2D96]/30 hover:border-[#FF55B7]/60 hover:bg-[#FF2D96]/20 text-white transition-all duration-200 group"
                  aria-label={`Visit Roohani Noorani on ${s.platform}`}
                >
                  <div className="flex items-center gap-3">
                    {s.platform === 'YouTube' ? (
                      <YoutubeIcon className="w-5 h-5 text-[#FF2D96] group-hover:scale-110 transition-transform" />
                    ) : s.platform === 'Instagram' ? (
                      <InstagramIcon className="w-5 h-5 text-[#FF55B7] group-hover:scale-110 transition-transform" />
                    ) : (
                      <FacebookIcon className="w-5 h-5 text-[#F08BC6] group-hover:scale-110 transition-transform" />
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
      </div>

      {/* Return to Top of Universe */}
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        className="mt-8 flex flex-col items-center gap-2 cursor-pointer text-slate-400 hover:text-white transition-colors"
        onClick={scrollToTop}
      >
        <ArrowUp className="w-4 h-4 text-[#FF55B7]" />
        <span className="text-[11px] uppercase tracking-[0.25em] font-semibold text-slate-400">Return to XL OVER 3.0</span>
      </motion.div>
    </section>
  );
};

export default RoohaniSection;
