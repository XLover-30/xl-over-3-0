import React from 'react';
import { Tv, Radio, ArrowUp, Shield } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import type { SocialLink } from '../config/siteConfig';

interface FooterProps {
  onOpenPrivacy: () => void;
}

const renderSocialIcon = (iconName: string) => {
  switch (iconName) {
    case 'Youtube':
      return <Tv className="w-4 h-4" />;
    case 'Instagram':
      return <Radio className="w-4 h-4" />;
    case 'Radio':
      return <Radio className="w-4 h-4" />;
    case 'Twitter':
      return <Radio className="w-4 h-4" />;
    default:
      return <Radio className="w-4 h-4" />;
  }
};

export const Footer: React.FC<FooterProps> = ({ onOpenPrivacy }) => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#07060B] border-t border-purple-900/30 py-16 px-6 sm:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Brand identity */}
        <div className="space-y-2 text-center md:text-left">
          <a href="#hero" onClick={scrollToTop} className="inline-block text-xl font-bold tracking-wider text-white">
            <span className="chrome-text font-black">XL over 3.0</span>
          </a>
          <p className="text-xs text-[#B8B0C8] font-mono tracking-widest uppercase">
            {siteConfig.tagline}
          </p>
        </div>

        {/* Social Links */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          {siteConfig.socials.map((social: SocialLink) => {
            const isConfigured = Boolean(social.url);
            return isConfigured ? (
              <a
                key={social.platform}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="p-3 rounded-full bg-[#100A1B] border border-purple-500/20 text-[#B8B0C8] hover:text-white hover:border-purple-400 hover:scale-110 transition-all duration-300"
              >
                {renderSocialIcon(social.iconName)}
              </a>
            ) : (
              <span
                key={social.platform}
                title={`${social.platform} link coming soon`}
                className="p-3 rounded-full bg-[#100A1B]/40 border border-purple-900/30 text-[#B8B0C8]/40 cursor-not-allowed"
              >
                {renderSocialIcon(social.iconName)}
              </span>
            );
          })}
        </div>

        {/* Legal & Scroll Top */}
        <div className="flex items-center space-x-6 text-xs text-[#B8B0C8]">
          <button
            onClick={onOpenPrivacy}
            className="flex items-center space-x-1.5 hover:text-white transition-colors"
          >
            <Shield className="w-3.5 h-3.5 text-purple-400" />
            <span>Privacy Policy</span>
          </button>

          <span className="text-purple-900">|</span>

          <span>© {currentYear} {siteConfig.brandName}. All rights reserved.</span>

          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="p-2.5 rounded-full bg-purple-950/60 border border-purple-500/30 text-purple-300 hover:text-white hover:bg-purple-600 transition-colors"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};
