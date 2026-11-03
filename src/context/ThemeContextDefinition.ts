import { createContext } from 'react';
import type { WorldId, WorldTheme } from '../config/siteConfig';

export type QualityTier = 'high' | 'medium' | 'low';

export interface ThemeContextType {
  activeWorld: WorldId;
  setActiveWorld: (world: WorldId) => void;
  scrollProgress: number;
  currentTheme: WorldTheme;
  quality: QualityTier;
  setQuality: (quality: QualityTier) => void;
  reducedMotion: boolean;
  setReducedMotion: (val: boolean) => void;
  audioActive: boolean;
  toggleAudio: () => void;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);
