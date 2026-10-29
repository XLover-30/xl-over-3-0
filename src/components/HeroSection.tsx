import React, { useState, useEffect } from 'react';
import { ArrowDown, Sparkles, Send } from 'lucide-react';
import { Hero3DCanvas } from './Hero3DCanvas';
import { siteConfig } from '../config/siteConfig';

export const HeroSection: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleMouseMove = (e: MouseEvent) => {
      if (prefersReducedMotion) return;
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = -(e.clientY / window.innerHeight) * 2 + 1;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [prefersReducedMotion]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen w-full flex items-center justify-center overflow-hidden pt-20 pb-16">
      {/* Background Lighting Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-purple-900/30 to-violet-600/20 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-gradient-to-br from-purple-950/40 to-indigo-900/20 blur-[120px] rounded-full pointer-events-none" />

      {/* 3D Canvas Background or Reduced Motion Visual Fallback */}
      {!prefersReducedMotion ? (
        <Hero3DCanvas mousePos={mousePos} />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-72 h-72 rounded-full bg-gradient-to-tr from-purple-800/40 via-violet-600/30 to-purple-400/20 blur-2xl animate-pulse" />
        </div>
      )}

      {/* Hero Content Overlay */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center space-y-8 pointer-events-auto">
        {/* Eyebrow Badge */}
        <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass-panel border border-purple-500/30 text-purple-200 text-xs font-semibold tracking-widest uppercase shadow-lg shadow-purple-950/40">
          <Sparkles className="w-3.5 h-3.5 text-purple-400 animate-pulse" />
          <span>{siteConfig.eyebrow}</span>
        </div>

        {/* Transparent Banner Graphic & Headline */}
        <div className="space-y-4 flex flex-col items-center">
          <div className="w-full max-w-xl px-4 py-2 hover:scale-[1.02] transition-transform duration-500">
            <img
              src="/xl_over_banner.png"
              alt="XL OVER 3.0 Banner"
              className="w-full h-auto max-h-36 object-contain filter drop-shadow-[0_0_25px_rgba(168,85,247,0.5)]"
            />
          </div>
          <p className="text-2xl sm:text-3xl md:text-4xl font-extralight tracking-widest text-purple-200/90 font-mono">
            {siteConfig.tagline}
          </p>
        </div>

        {/* Supporting Text */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg text-[#B8B0C8] font-light leading-relaxed">
          {siteConfig.supportingText}
        </p>

        {/* CTAs */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#brands"
            onClick={(e) => handleNavClick(e, '#brands')}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 via-purple-500 to-indigo-600 text-white font-bold text-sm tracking-widest uppercase shadow-xl shadow-purple-600/30 hover:shadow-purple-500/50 hover:scale-105 active:scale-95 transition-all duration-300 border border-purple-300/30 flex items-center justify-center space-x-2 group"
          >
            <span>EXPLORE OUR UNIVERSE</span>
            <Sparkles className="w-4 h-4 group-hover:rotate-12 transition-transform" />
          </a>

          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="w-full sm:w-auto px-8 py-4 rounded-full glass-panel border border-purple-400/30 text-purple-100 hover:text-white hover:bg-white/10 font-semibold text-sm tracking-widest uppercase hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center space-x-2"
          >
            <Send className="w-4 h-4 text-purple-300" />
            <span>GET IN TOUCH</span>
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2 opacity-75 hover:opacity-100 transition-opacity">
        <a
          href="#brands"
          onClick={(e) => handleNavClick(e, '#brands')}
          className="flex flex-col items-center space-y-2 text-[#B8B0C8] hover:text-purple-300 text-xs font-mono uppercase tracking-widest"
        >
          <span>SCROLL TO DISCOVER</span>
          <ArrowDown className="w-4 h-4 animate-bounce text-[#A855F7]" />
        </a>
      </div>
    </section>
  );
};
