export interface Brand {
  id: string;
  name: string;
  category: string;
  description: string;
  visualTheme: {
    accentColor: string;
    gradient: string;
    emblemIcon: string;
    badgeBg: string;
  };
  url?: string; // Optional official destination URL
  isComingSoon: boolean;
}

export interface FeaturedItem {
  id: string;
  title: string;
  category: string;
  brandName: string;
  description: string;
  thumbnailUrl?: string;
  url?: string;
  isPlaceholder: boolean;
  type: 'music' | 'video' | 'article' | 'experience';
}

export interface SocialLink {
  platform: string;
  url?: string;
  iconName: string;
  label: string;
}

export interface SiteConfig {
  brandName: string;
  tagline: string;
  eyebrow: string;
  headline: string;
  supportingText: string;
  about: {
    heading: string;
    subheading: string;
    paragraphs: string[];
    pillars: Array<{
      title: string;
      description: string;
    }>;
  };
  contact: {
    heading: string;
    supportingText: string;
    businessEmailPlaceholder: string;
    collaborationCategories: string[];
  };
  brands: Brand[];
  featuredContent: FeaturedItem[];
  socials: SocialLink[];
}

export const siteConfig: SiteConfig = {
  brandName: 'XL over 3.0',
  tagline: 'One Identity. Multiple Worlds.',
  eyebrow: 'THE DIGITAL UNIVERSE',
  headline: 'XL over 3.0',
  supportingText: 'A creative universe of music, mindset, entertainment, and digital experiences — connected by one independent identity.',

  about: {
    heading: 'MORE THAN A NAME. A CREATIVE UNIVERSE.',
    subheading: 'A faceless central hub uniting distinct creative dimensions.',
    paragraphs: [
      'XL over 3.0 is an independent digital identity connecting music, mindset, entertainment, and new creative possibilities. Each brand has its own voice, purpose, and audience, while sharing one central digital home.',
      'Designed with futuristic precision and luxury artistry, XL over 3.0 serves as an expansive ecosystem where music composition, psychological personal growth, and digital entertainment converge.'
    ],
    pillars: [
      {
        title: 'Central Identity',
        description: 'A unified digital architecture powering multiple distinct, autonomous brands.'
      },
      {
        title: 'Faceless Persona',
        description: 'Focusing entirely on artistic expression, high-level production, and transformative content.'
      },
      {
        title: 'Infinite Possibilities',
        description: 'Constantly expanding into new creative mediums, digital channels, and media formats.'
      }
    ]
  },

  contact: {
    heading: "LET'S CREATE SOMETHING EXTRAORDINARY.",
    supportingText: 'For business enquiries, brand collaborations, music projects, and creative partnerships, get in touch.',
    businessEmailPlaceholder: 'YOUR_BUSINESS_EMAIL@domain.com',
    collaborationCategories: [
      'Business Enquiries',
      'Brand Collaborations',
      'Music & Creative Projects',
      'Media & Press'
    ]
  },

  brands: [
    {
      id: 'roohani-noorani',
      name: 'ROOHANI NOORANI',
      category: 'Music & Entertainment',
      description: 'Original music, Desi Glam-Pop, cinematic performances, and digital music experiences.',
      visualTheme: {
        accentColor: '#EC4899', // Magenta/pink accent
        gradient: 'from-pink-900/40 via-purple-950/60 to-black',
        emblemIcon: 'Music2',
        badgeBg: 'bg-pink-500/20 text-pink-300 border-pink-500/30'
      },
      url: undefined, // Configurable link
      isComingSoon: true
    },
    {
      id: 'rohani-rani',
      name: 'ROHANI RANI',
      category: 'Music & Entertainment',
      description: 'A dedicated creative identity for music and entertainment content.',
      visualTheme: {
        accentColor: '#8B5CF6', // Purple/violet
        gradient: 'from-violet-900/40 via-purple-950/60 to-black',
        emblemIcon: 'Sparkles',
        badgeBg: 'bg-violet-500/20 text-violet-300 border-violet-500/30'
      },
      url: undefined,
      isComingSoon: true
    },
    {
      id: 'zoya-noor-x',
      name: 'ZOYA NOOR X',
      category: 'Creative & Lifestyle',
      description: 'A separate creative channel and digital identity.',
      visualTheme: {
        accentColor: '#38BDF8', // Sky/cyan accent
        gradient: 'from-sky-900/40 via-indigo-950/60 to-black',
        emblemIcon: 'Compass',
        badgeBg: 'bg-sky-500/20 text-sky-300 border-sky-500/30'
      },
      url: undefined,
      isComingSoon: true
    },
    {
      id: 'zoya-mindset',
      name: 'ZOYA MINDSET',
      category: 'Psychology & Motivation',
      description: 'Psychology-inspired motivational content focused on mindset, self-respect, emotional growth, and personal development.',
      visualTheme: {
        accentColor: '#A855F7', // Deep Violet & midnight blue
        gradient: 'from-purple-900/40 via-blue-950/60 to-black',
        emblemIcon: 'Brain',
        badgeBg: 'bg-purple-500/20 text-purple-300 border-purple-500/30'
      },
      url: undefined,
      isComingSoon: true
    },
    {
      id: 'youtube-other-projects',
      name: 'YOUTUBE & OTHER PROJECTS',
      category: 'Digital Media',
      description: 'A gateway to additional official channels, creative experiments, and future projects.',
      visualTheme: {
        accentColor: '#F43F5E', // Rose/Red
        gradient: 'from-rose-900/40 via-purple-950/60 to-black',
        emblemIcon: 'Youtube',
        badgeBg: 'bg-rose-500/20 text-rose-300 border-rose-500/30'
      },
      url: undefined,
      isComingSoon: true
    }
  ],

  featuredContent: [
    {
      id: 'feat-1',
      title: 'Desi Glam-Pop Audio Teaser',
      category: 'Music & Audio',
      brandName: 'ROOHANI NOORANI',
      description: 'Upcoming original single blending traditional synth harmonies with contemporary glam-pop rhythms.',
      isPlaceholder: true,
      type: 'music'
    },
    {
      id: 'feat-2',
      title: 'Mindset & Emotional Growth Series',
      category: 'Psychology',
      brandName: 'ZOYA MINDSET',
      description: 'Key insights on building unwavering self-respect, boundaries, and intrinsic motivation.',
      isPlaceholder: true,
      type: 'article'
    },
    {
      id: 'feat-3',
      title: 'Cinematic Visual Identity Premiere',
      category: 'Creative Production',
      brandName: 'ZOYA NOOR X',
      description: 'An exploration of digital aesthetics, futuristic visual art, and immersive storytelling.',
      isPlaceholder: true,
      type: 'video'
    }
  ],

  socials: [
    {
      platform: 'YouTube',
      url: undefined,
      iconName: 'Youtube',
      label: 'YouTube Channel'
    },
    {
      platform: 'Instagram',
      url: undefined,
      iconName: 'Instagram',
      label: 'Instagram Profile'
    },
    {
      platform: 'Spotify',
      url: undefined,
      iconName: 'Radio',
      label: 'Spotify Artist Page'
    },
    {
      platform: 'X / Twitter',
      url: undefined,
      iconName: 'Twitter',
      label: 'X (Twitter) Profile'
    }
  ]
};
