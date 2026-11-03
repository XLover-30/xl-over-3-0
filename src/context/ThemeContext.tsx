import React, { useState, useEffect, useMemo } from 'react';
import type { ReactNode } from 'react';
import type { WorldId } from '../config/siteConfig';
import { WORLD_THEMES } from '../config/siteConfig';
import { ThemeContext } from './ThemeContextDefinition';
import type { QualityTier } from './ThemeContextDefinition';

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [activeWorld, setActiveWorld] = useState<WorldId>('xl-over-3-0');
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [quality, setQuality] = useState<QualityTier>('high');
  const [reducedMotion, setReducedMotion] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    }
    return false;
  });
  const [audioActive, setAudioActive] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? Math.min(1, Math.max(0, scrollY / docHeight)) : 0;
      setScrollProgress(progress);

      const zoyaEl = document.getElementById('zoya-noor');
      const roohaniEl = document.getElementById('roohani-noorani');

      const triggerOffset = window.innerHeight * 0.45;

      if (roohaniEl && roohaniEl.getBoundingClientRect().top <= triggerOffset) {
        setActiveWorld('roohani-noorani');
      } else if (zoyaEl && zoyaEl.getBoundingClientRect().top <= triggerOffset) {
        setActiveWorld('zoya-noor');
      } else {
        setActiveWorld('xl-over-3-0');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const listener = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    media.addEventListener('change', listener);
    return () => media.removeEventListener('change', listener);
  }, []);

  const currentTheme = useMemo(() => WORLD_THEMES[activeWorld], [activeWorld]);

  const toggleAudio = () => setAudioActive((prev) => !prev);

  const contextValue = useMemo(() => ({
    activeWorld,
    setActiveWorld,
    scrollProgress,
    currentTheme,
    quality,
    setQuality,
    reducedMotion,
    setReducedMotion,
    audioActive,
    toggleAudio,
  }), [activeWorld, scrollProgress, currentTheme, quality, reducedMotion, audioActive]);

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};
