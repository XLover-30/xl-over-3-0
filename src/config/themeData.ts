import * as THREE from 'three';

export type WorldThemeKey = 'xlover' | 'zoya' | 'roohani';

export interface ThemeColors {
  primary: THREE.Color;
  secondary: THREE.Color;
  accent: THREE.Color;
  glow: THREE.Color;
  bgDark: string;
}

export const THEME_DATA: Record<WorldThemeKey, ThemeColors> = {
  xlover: {
    primary: new THREE.Color('#8B35FF'), // Electric Purple
    secondary: new THREE.Color('#246BFF'), // Electric Blue
    accent: new THREE.Color('#B66BFF'), // Neon Violet
    glow: new THREE.Color('#65C7FF'), // Ice Blue
    bgDark: '#05030B',
  },
  zoya: {
    primary: new THREE.Color('#16B978'), // Bright Green
    secondary: new THREE.Color('#087A50'), // Emerald
    accent: new THREE.Color('#C8A45D'), // Champagne Gold
    glow: new THREE.Color('#E4CA8A'), // Soft Gold
    bgDark: '#050B08',
  },
  roohani: {
    primary: new THREE.Color('#FF2D96'), // Hot Pink
    secondary: new THREE.Color('#FF55B7'), // Neon Pink
    accent: new THREE.Color('#C52B91'), // Magenta
    glow: new THREE.Color('#F08BC6'), // Rose
    bgDark: '#090309',
  },
};
