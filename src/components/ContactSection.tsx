import React, { useState } from 'react';
import { Check, Copy, Sparkles, Send } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const email = siteConfig.contact.businessEmailPlaceholder;

  const subject = encodeURIComponent('Business Enquiry — XL over 3.0');
  const body = encodeURIComponent(
    'Hello XL over 3.0 team,\n\nI am reaching out regarding a potential collaboration/enquiry.\n\nBest regards,'
  );
  const mailtoUrl = `mailto:${email}?subject=${subject}&body=${body}`;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <section id="contact" className="py-24 px-6 sm:px-8 relative max-w-7xl mx-auto border-t border-purple-900/30">
      {/* Glow Center */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-600/15 blur-[150px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto glass-panel rounded-3xl p-8 sm:p-12 border border-purple-500/30 shadow-2xl shadow-purple-950/40 text-center space-y-8">
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-purple-950/80 border border-purple-500/30 text-purple-300 text-xs font-mono uppercase tracking-widest">
          <Sparkles className="w-3.5 h-3.5 text-purple-400" />
          <span>Direct Inquiries</span>
        </div>

        <div className="space-y-3">
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase">
            {siteConfig.contact.heading}
          </h2>
          <p className="text-base sm:text-lg text-[#B8B0C8] font-light max-w-2xl mx-auto">
            {siteConfig.contact.supportingText}
          </p>
        </div>

        {/* Categories Chips */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
          {siteConfig.contact.collaborationCategories.map((cat: string) => (
            <span
              key={cat}
              className="px-3 py-1.5 rounded-lg bg-[#07060B]/80 border border-purple-500/20 text-xs font-mono text-purple-200"
            >
              {cat}
            </span>
          ))}
        </div>

        {/* Mailto CTA & Copy Box */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-xl mx-auto">
          <a
            href={mailtoUrl}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold text-sm tracking-widest uppercase shadow-xl shadow-purple-600/30 hover:shadow-purple-500/50 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center space-x-2"
          >
            <Send className="w-4 h-4" />
            <span>SEND EMAIL ENQUIRY</span>
          </a>

          <button
            onClick={handleCopyEmail}
            className="w-full sm:w-auto px-6 py-4 rounded-full bg-[#07060B] border border-purple-500/30 text-purple-200 hover:text-white font-mono text-xs tracking-wider flex items-center justify-center space-x-2 hover:bg-white/5 transition-colors"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-green-400" />
                <span>COPIED TO CLIPBOARD</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-purple-400" />
                <span className="truncate max-w-[180px]">{email}</span>
              </>
            )}
          </button>
        </div>
      </div>
    </section>
  );
};
