import React from 'react';
import { ExternalLink, ArrowUp } from 'lucide-react';
import { FacebookIcon, InstagramIcon, YoutubeIcon } from './SocialIcons';
import { SOCIAL_LINKS } from '../config/siteConfig';
import { useTheme } from '../context/useTheme';

const CURRENT_YEAR = 2026;

export const Footer: React.FC = () => {
  const { currentTheme } = useTheme();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      className="relative z-20 w-full border-t border-white/10 bg-[#05030B]/85 backdrop-blur-2xl py-16 px-4 sm:px-8 lg:px-16 transition-colors duration-1000"
      style={{
        boxShadow: `0 -10px 40px -10px ${currentTheme.colors.primary}20`,
      }}
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        {/* 3 Identity Blocks in Exact Sequence */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
          {/* Identity Block 1: XL OVER 3.0 */}
          <div className="flex flex-col justify-between p-6 rounded-2xl bg-white/[0.02] border border-[#8B35FF]/20 backdrop-blur-xl hover:border-[#8B35FF]/50 transition-all duration-300">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img
                  src="./TXT icon.png"
                  alt="XL OVER 3.0"
                  className="w-7 h-7 object-contain drop-shadow-[0_0_8px_rgba(139,53,255,0.7)]"
                />
                <h3 className="text-base font-extrabold tracking-wider text-white">XL OVER 3.0</h3>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed mb-6">
                A modern faceless digital universe bridging music production, psychological empowerment, and high-energy performance under one central identity.
              </p>
            </div>

            <div>
              <div className="text-[10px] font-mono uppercase tracking-widest text-[#B66BFF] mb-3">
                Official Channels
              </div>
              <div className="flex flex-col gap-2">
                {SOCIAL_LINKS.xlOver.map((s) => (
                  <a
                    key={s.platform}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-2.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-[#8B35FF]/20 text-xs text-slate-300 hover:text-white transition-colors group"
                  >
                    <div className="flex items-center gap-2.5">
                      {s.platform === 'Facebook' ? (
                        <FacebookIcon className="w-4 h-4 text-[#246BFF]" />
                      ) : (
                        <InstagramIcon className="w-4 h-4 text-[#B66BFF]" />
                      )}
                      <span>{s.platform}</span>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-white transition-colors" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Identity Block 2: ZOYA NOOR X */}
          <div className="flex flex-col justify-between p-6 rounded-2xl bg-white/[0.02] border border-[#087A50]/25 backdrop-blur-xl hover:border-[#16B978]/50 transition-all duration-300">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 rounded-full bg-[#16B978] shadow-[0_0_10px_#16B978]" />
                <h3 className="text-base font-extrabold tracking-wider text-white">ZOYA NOOR X</h3>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed mb-2">
                Motivational speaker identity empowering modern leaders with psychology, emotional sovereign architecture, and clarity.
              </p>
              <p className="text-xs text-slate-400 leading-relaxed mb-6">
                Operator of the <span className="text-[#C8A45D] font-medium">Zoya Mindset</span> daily transformational channel.
              </p>
            </div>

            <div>
              <div className="text-[10px] font-mono uppercase tracking-widest text-[#C8A45D] mb-3">
                Mindset & Personal
              </div>
              <div className="flex flex-col gap-2">
                <a
                  href={SOCIAL_LINKS.zoyaNoor.personal.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-[#087A50]/20 text-xs text-slate-300 hover:text-white transition-colors group"
                >
                  <div className="flex items-center gap-2.5">
                    <InstagramIcon className="w-4 h-4 text-[#16B978]" />
                    <span>Instagram (Personal)</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-white transition-colors" />
                </a>

                <a
                  href={SOCIAL_LINKS.zoyaNoor.mindsetFacebook.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-[#087A50]/20 text-xs text-slate-300 hover:text-white transition-colors group"
                >
                  <div className="flex items-center gap-2.5">
                    <FacebookIcon className="w-4 h-4 text-[#16B978]" />
                    <span>Facebook (Zoya Mindset)</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-white transition-colors" />
                </a>

                <a
                  href={SOCIAL_LINKS.zoyaNoor.mindsetInstagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-[#087A50]/20 text-xs text-slate-300 hover:text-white transition-colors group"
                >
                  <div className="flex items-center gap-2.5">
                    <InstagramIcon className="w-4 h-4 text-[#C8A45D]" />
                    <span>Instagram (Zoya Mindset)</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-white transition-colors" />
                </a>
              </div>
            </div>
          </div>

          {/* Identity Block 3: ROOHANI NOORANI */}
          <div className="flex flex-col justify-between p-6 rounded-2xl bg-white/[0.02] border border-[#FF2D96]/25 backdrop-blur-xl hover:border-[#FF55B7]/50 transition-all duration-300">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 rounded-full bg-[#FF2D96] shadow-[0_0_10px_#FF2D96]" />
                <h3 className="text-base font-extrabold tracking-wider text-white">ROOHANI NOORANI</h3>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed mb-6">
                Singer and dance performer specializing in Bollywood-inspired pop, glam-pop, high-energy dance music and cinematic visual spectacles.
              </p>
            </div>

            <div>
              <div className="text-[10px] font-mono uppercase tracking-widest text-[#FF55B7] mb-3">
                Media & Entertainment
              </div>
              <div className="flex flex-col gap-2">
                {SOCIAL_LINKS.roohaniNoorani.map((s) => (
                  <a
                    key={s.platform}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-2.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-[#FF2D96]/20 text-xs text-slate-300 hover:text-white transition-colors group"
                  >
                    <div className="flex items-center gap-2.5">
                      {s.platform === 'YouTube' ? (
                        <YoutubeIcon className="w-4 h-4 text-[#FF2D96]" />
                      ) : s.platform === 'Instagram' ? (
                        <InstagramIcon className="w-4 h-4 text-[#FF55B7]" />
                      ) : (
                        <FacebookIcon className="w-4 h-4 text-[#F08BC6]" />
                      )}
                      <span>{s.platform}</span>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-white transition-colors" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Separator Line */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* Bottom Bar: Copyright & Return to Top */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-2.5">
            <img src="./logo icon.png" alt="XL OVER 3.0" className="w-5 h-5 object-contain" />
            <span className="font-semibold text-white tracking-widest uppercase text-xs">
              XL OVER 3.0
            </span>
          </div>

          <div className="text-[11px] font-mono tracking-widest uppercase text-slate-400 text-center">
            ONE IDENTITY. MULTIPLE WORLDS. &copy; {CURRENT_YEAR}
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-white text-[11px] font-mono uppercase tracking-wider transition-all cursor-pointer"
            aria-label="Back to top"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#B66BFF]" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
