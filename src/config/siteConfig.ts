export type WorldId = 'xl-over-3-0' | 'zoya-noor' | 'roohani-noorani';

export interface WorldTheme {
  id: WorldId;
  name: string;
  tagline: string;
  subtitle: string;
  description: string;
  mood: string;
  colors: {
    background: string;
    deep: string;
    primary: string;
    secondary: string;
    accent: string;
    highlight: string;
    light: string;
    text: string;
    particleColors: string[];
    glowColor: string;
    borderGlow: string;
  };
  characterPhoto: string;
}

export const WORLD_THEMES: Record<WorldId, WorldTheme> = {
  'xl-over-3-0': {
    id: 'xl-over-3-0',
    name: 'XL OVER 3.0',
    tagline: 'ONE IDENTITY. MULTIPLE WORLDS.',
    subtitle: 'THE DIGITAL UNIVERSE',
    description: 'An extraordinary, premium, futuristic 3D digital universe where music, mindset, and digital expression unite under one central identity.',
    mood: 'Futuristic, playful, mysterious, energetic',
    colors: {
      background: '#05030B',
      deep: '#10061F',
      primary: '#8B35FF', // Electric Purple
      secondary: '#B66BFF', // Neon Violet
      accent: '#246BFF', // Electric Blue
      highlight: '#65C7FF', // Ice Blue
      light: '#F8F5FF', // White
      text: '#F8F5FF',
      particleColors: ['#8B35FF', '#B66BFF', '#246BFF', '#65C7FF', '#F8F5FF'],
      glowColor: 'rgba(139, 53, 255, 0.45)',
      borderGlow: 'rgba(182, 107, 255, 0.35)',
    },
    characterPhoto: './XLover Photo.png',
  },
  'zoya-noor': {
    id: 'zoya-noor',
    name: 'ZOYA NOOR',
    tagline: 'THE MIND BEHIND THE MINDSET.',
    subtitle: 'MOTIVATIONAL SPEAKER & MINDSET CREATOR',
    description: 'Zoya Noor X is a motivational speaker who operates the Zoya Mindset content channel, empowering minds with psychology, emotional strength, and transformative clarity.',
    mood: 'Premium, motivational, focused, elegant',
    colors: {
      background: '#050B08',
      deep: '#071B13',
      primary: '#087A50', // Emerald
      secondary: '#16B978', // Bright Green
      accent: '#C8A45D', // Champagne Gold
      highlight: '#E4CA8A', // Soft Gold
      light: '#F7F1E5', // Ivory
      text: '#F7F1E5',
      particleColors: ['#087A50', '#16B978', '#C8A45D', '#E4CA8A', '#F7F1E5'],
      glowColor: 'rgba(22, 185, 120, 0.45)',
      borderGlow: 'rgba(200, 164, 93, 0.4)',
    },
    characterPhoto: './Zoya Photo.png',
  },
  'roohani-noorani': {
    id: 'roohani-noorani',
    name: 'ROOHANI NOORANI',
    tagline: 'THE RHYTHM. THE ENERGY. THE EXPRESSION.',
    subtitle: 'SINGER & DANCE PERFORMER',
    description: 'Roohani Noorani is a singer and dance performer specializing in Bollywood-inspired pop, glam-pop, high-energy dance music and music videos.',
    mood: 'Glamorous, romantic, musical, high-energy',
    colors: {
      background: '#090309',
      deep: '#1B0617',
      primary: '#FF2D96', // Hot Pink
      secondary: '#FF55B7', // Neon Pink
      accent: '#C52B91', // Magenta
      highlight: '#F08BC6', // Rose
      light: '#FFF3FA', // White
      text: '#FFF3FA',
      particleColors: ['#FF2D96', '#FF55B7', '#C52B91', '#F08BC6', '#FFF3FA'],
      glowColor: 'rgba(255, 45, 150, 0.45)',
      borderGlow: 'rgba(255, 85, 183, 0.4)',
    },
    characterPhoto: './Roohani Photo.png',
  },
};

export const SOCIAL_LINKS = {
  xlOver: [
    {
      platform: 'Facebook',
      url: 'https://www.facebook.com/share/1DzEeQAfTC/',
      handle: '@XLover-30',
      description: 'Official XL OVER 3.0 community & announcements',
    },
    {
      platform: 'Instagram',
      url: 'https://www.instagram.com/xl_over_3.0?obrf=MmtjdGhvZHlhaGs0',
      handle: '@xl_over_3.0',
      description: 'Official digital universe updates & reels',
    },
  ],
  zoyaNoor: {
    personal: {
      platform: 'Instagram (Personal)',
      url: 'https://www.instagram.com/zoyanoor_x?mdxt=ZzZrcm5xN2pyZzRv',
      handle: '@zoyanoor_x',
      description: 'Personal lifestyle, keynote moments & philosophy',
    },
    mindsetFacebook: {
      platform: 'Facebook (Zoya Mindset)',
      url: 'https://www.facebook.com/share/1CAXHMMYj5/',
      handle: 'Zoya Mindset Community',
      description: 'Daily mindset insights, discipline & resilience',
    },
    mindsetInstagram: {
      platform: 'Instagram (Zoya Mindset)',
      url: 'https://www.instagram.com/zoya.mindset?obrf=cXl5MjY4dmtodWVy',
      handle: '@zoya.mindset',
      description: 'Psychology, motivation & emotional mastery videos',
    },
  },
  roohaniNoorani: [
    {
      platform: 'YouTube',
      url: 'https://youtube.com/@roohanirani?si=S_gZFn8-MfSdyM8v',
      handle: '@roohanirani',
      description: 'Official music videos, vocal releases & dance shorts',
    },
    {
      platform: 'Instagram',
      url: 'https://www.instagram.com/roohaninoorani?vrfl=MXB6bXJybnB4Yjg4cA==',
      handle: '@roohaninoorani',
      description: 'Live performance snippets, rehearsals & glam aesthetic',
    },
    {
      platform: 'Facebook',
      url: 'https://www.facebook.com/share/1CPHdmtTwd/',
      handle: 'Roohani Noorani Official',
      description: 'Music updates, concert tours & fan engagements',
    },
  ],
};
