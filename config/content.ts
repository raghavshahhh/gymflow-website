/**
 * Content Configuration for GymFlow Landing Website
 * 
 * Centralized content management for easy updates and potential localization.
 * All text, links, and content data for the landing page is defined here.
 * 
 * IMPORTANT: The APK file should be placed in public/downloads/GymFlow-v1.0.apk
 * and will be downloadable from /downloads/GymFlow-v1.0.apk
 * 
 * Requirements: 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 3.1, 3.2, 3.3, 3.4, 6.1, 6.2,
 * 8.1, 8.2, 8.3, 8.4, 8.5, 9.1, 9.2, 10.1, 10.2, 11.1, 11.2, 11.3, 12.1, 12.2
 */

export interface LandingPageContent {
  hero: HeroContent;
  features: FeatureContent[];
  comparison: ComparisonContent;
  screenshots: ScreenshotContent[];
  deepFeatures: DeepFeatureContent[];
  techTrust: TechTrustContent[];
  founder: FounderContent;
  finalCTA: FinalCTAContent;
  footer: FooterContent;
}

export interface HeroContent {
  headline: string;
  subheadline: string;
  primaryCTA: {
    label: string;
    url: string;
  };
  secondaryCTA: {
    label: string;
    url: string;
  };
  trustLine: string;
  mockup: {
    src: string;
    alt: string;
  };
}

export interface FeatureContent {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface ComparisonContent {
  headline: string;
  genericApp: {
    label: string;
    features: string[];
  };
  gymflow: {
    label: string;
    features: string[];
  };
}

export interface ScreenshotContent {
  id: string;
  src: string;
  alt: string;
  category: 'workout' | 'diet' | 'progress';
}

export interface DeepFeatureContent {
  id: string;
  title: string;
  description: string;
  icon?: string;
}

export interface TechTrustContent {
  id: string;
  technology: string;
  description: string;
  icon: string;
}

export interface FounderContent {
  name: string;
  title: string;
  note: string;
  photo?: string;
  brandLogo: string;
}

export interface FinalCTAContent {
  headline: string;
  ctaLabel: string;
  ctaUrl: string;
  pricingNote: string;
}

export interface FooterContent {
  links: FooterLink[];
  copyright: string;
}

export interface FooterLink {
  label: string;
  href: string;
}

export const content: LandingPageContent = {
  hero: {
    headline: 'GymFlow – Your AI Fitness & Diet Coach',
    subheadline: 'Personalized workouts, smart diet plans, and real progress tracking.',
    primaryCTA: {
      label: 'Download APK (Android)',
      url: '/downloads/GymFlow-v1.0.apk', // Direct APK download link
    },
    secondaryCTA: {
      label: 'Watch 30s Demo',
      url: '#demo', // Will trigger video modal
    },
    trustLine: 'Built with AI • Offline Support • Privacy First',
    mockup: {
      src: '/images/hero-mockup.png',
      alt: 'GymFlow app interface on iPhone',
    },
  },

  features: [
    {
      id: 'ai-workout',
      icon: 'dumbbell',
      title: 'AI Workout Generator',
      description: 'Get personalized workout plans tailored to your goals, fitness level, and available equipment. Powered by advanced AI.',
    },
    {
      id: 'smart-diet',
      icon: 'nutrition',
      title: 'Smart Diet Planning',
      description: 'Calculate your TDEE and macros automatically. Get customized meal plans that fit your lifestyle and preferences.',
    },
    {
      id: 'food-analysis',
      icon: 'camera',
      title: 'AI Food Analysis',
      description: 'Snap a photo of your meal and get instant nutritional information. Track calories and macros effortlessly.',
    },
    {
      id: 'progress-tracking',
      icon: 'chart',
      title: 'Progress Tracking',
      description: 'Monitor your fitness journey with detailed analytics, streak tracking, and discipline scores. Stay motivated every day.',
    },
  ],

  comparison: {
    headline: 'Why GymFlow?',
    genericApp: {
      label: 'Generic Fitness Apps',
      features: [
        'Generic workout templates',
        'Basic calorie counting',
        'Requires constant internet',
        'One-size-fits-all approach',
        'Cluttered interface',
      ],
    },
    gymflow: {
      label: 'GymFlow',
      features: [
        'AI-powered personalized workouts',
        'Smart diet planning with TDEE & macros',
        'Works offline, syncs when online',
        'Tailored for Indian users & cuisine',
        'Clean, Apple-inspired UI',
      ],
    },
  },

  screenshots: [
    {
      id: 'workout-1',
      src: '/images/screenshot-workout.png',
      alt: 'GymFlow workout screen showing exercise list',
      category: 'workout',
    },
    {
      id: 'diet-1',
      src: '/images/screenshot-diet.png',
      alt: 'GymFlow diet planning screen with macro breakdown',
      category: 'diet',
    },
    {
      id: 'progress-1',
      src: '/images/screenshot-progress.png',
      alt: 'GymFlow progress tracking dashboard',
      category: 'progress',
    },
  ],

  deepFeatures: [
    {
      id: 'exercise-database',
      title: '600+ Exercise Database',
      description: 'Access a comprehensive library of exercises with detailed instructions, animations, and muscle group targeting.',
      icon: 'database',
    },
    {
      id: 'smart-generation',
      title: 'Smart Workout Generation',
      description: 'AI analyzes your goals, experience level, and equipment to create optimal workout routines that evolve with you.',
      icon: 'brain',
    },
    {
      id: 'tdee-macros',
      title: 'TDEE & Macro Calculation',
      description: 'Scientifically calculate your Total Daily Energy Expenditure and optimal macro distribution for your goals.',
      icon: 'calculator',
    },
    {
      id: 'ai-food-photo',
      title: 'AI Food Photo Analysis',
      description: 'Powered by Google Gemini AI, instantly analyze food photos to get accurate nutritional information and calorie counts.',
      icon: 'sparkles',
    },
    {
      id: 'streak-discipline',
      title: 'Streak & Discipline System',
      description: 'Build lasting habits with our gamified streak system. Track your consistency and watch your discipline score grow.',
      icon: 'flame',
    },
  ],

  techTrust: [
    {
      id: 'flutter',
      technology: 'Flutter',
      description: 'Built with Google\'s Flutter framework for smooth, native performance on iOS and Android.',
      icon: 'mobile',
    },
    {
      id: 'firebase',
      technology: 'Firebase',
      description: 'Secure cloud backend with real-time sync and reliable data storage.',
      icon: 'cloud',
    },
    {
      id: 'gemini-ai',
      technology: 'Google Gemini AI',
      description: 'Powered by cutting-edge AI for intelligent workout generation and food analysis.',
      icon: 'sparkles',
    },
    {
      id: 'offline-first',
      technology: 'Offline-First',
      description: 'Works seamlessly without internet. Your data syncs automatically when you\'re back online.',
      icon: 'wifi-off',
    },
    {
      id: 'privacy',
      technology: 'Privacy-Focused',
      description: 'Your data is yours. We prioritize privacy and security in every feature we build.',
      icon: 'shield',
    },
  ],

  founder: {
    name: 'Raghav Shah',
    title: 'Founder & Developer',
    note: 'I built GymFlow because I was tired of complicated fitness apps that didn\'t understand Indian users. As someone passionate about both fitness and technology, I wanted to create something that just works – clean, powerful, and built for real people with real goals.',
    brandLogo: '/images/ragspro-logo.png',
  },

  finalCTA: {
    headline: 'Train smarter. Stay consistent. Get results.',
    ctaLabel: 'Download APK (Android)',
    ctaUrl: '/downloads/GymFlow-v1.0.apk', // Direct APK download link
    pricingNote: 'Free to start • iOS version coming soon',
  },

  footer: {
    links: [
      { label: 'About', href: '/about' },
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms', href: '/terms' },
      { label: 'Contact', href: '/contact' },
    ],
    copyright: '© GymFlow by RagsPro',
  },
};

export default content;
