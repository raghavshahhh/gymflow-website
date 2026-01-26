/**
 * Theme Configuration for GymFlow Landing Website
 * Defines design tokens for consistent styling across components
 * 
 * This configuration provides a centralized theme system that ensures
 * visual consistency across the entire landing page. It includes:
 * 
 * - Dark color palette (black, charcoal, grey tones) for premium aesthetic
 * - Typography tokens with SF Pro Display, Inter, and Poppins font families
 * - Responsive font sizes for mobile and desktop
 * - Spacing tokens for consistent layout
 * - Border radius values for rounded corners
 * - Animation timing and easing functions
 * 
 * Usage:
 * ```typescript
 * import { theme } from '@/config/theme';
 * 
 * // Access color values
 * const bgColor = theme.colors.background.primary; // '#000000'
 * 
 * // Access typography
 * const fontFamily = theme.typography.fontFamily.primary;
 * const h1Size = theme.typography.fontSize.h1Desktop; // '48px'
 * 
 * // Access spacing
 * const sectionPadding = theme.spacing.sectionDesktop; // '120px'
 * 
 * // Access animation values
 * const duration = theme.animation.duration.normal; // 300
 * ```
 * 
 * The theme values are also available as CSS custom properties in globals.css
 * for use in Tailwind classes and custom CSS.
 * 
 * Requirements: 5.1, 5.3, 5.4
 */

export interface ThemeConfig {
  colors: {
    background: {
      primary: string;
      secondary: string;
      tertiary: string;
    };
    text: {
      primary: string;
      secondary: string;
      tertiary: string;
    };
    glass: {
      background: string;
      border: string;
    };
  };
  typography: {
    fontFamily: {
      primary: string;
      secondary: string;
    };
    fontSize: {
      h1Desktop: string;
      h1Mobile: string;
      h2Desktop: string;
      h2Mobile: string;
      h3Desktop: string;
      h3Mobile: string;
      body: string;
      small: string;
    };
    fontWeight: {
      regular: number;
      medium: number;
      semibold: number;
      bold: number;
    };
  };
  spacing: {
    sectionDesktop: string;
    sectionMobile: string;
    container: string;
    gutter: string;
  };
  borderRadius: {
    small: string;
    medium: string;
    large: string;
  };
  animation: {
    duration: {
      fast: number;
      normal: number;
      slow: number;
    };
    easing: {
      default: string;
      smooth: string;
    };
  };
}

export const theme: ThemeConfig = {
  colors: {
    background: {
      primary: '#000000',
      secondary: '#1a1a1a',
      tertiary: '#2a2a2a',
    },
    text: {
      primary: '#ffffff',
      secondary: '#a0a0a0',
      tertiary: '#707070',
    },
    glass: {
      background: 'rgba(255, 255, 255, 0.05)',
      border: 'rgba(255, 255, 255, 0.1)',
    },
  },
  typography: {
    fontFamily: {
      primary: "'SF Pro Display', 'Inter', 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      secondary: "'Inter', 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    },
    fontSize: {
      h1Desktop: '48px',
      h1Mobile: '32px',
      h2Desktop: '36px',
      h2Mobile: '28px',
      h3Desktop: '28px',
      h3Mobile: '24px',
      body: '16px',
      small: '14px',
    },
    fontWeight: {
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
  },
  spacing: {
    sectionDesktop: '120px',
    sectionMobile: '80px',
    container: '1200px',
    gutter: '24px',
  },
  borderRadius: {
    small: '8px',
    medium: '16px',
    large: '24px',
  },
  animation: {
    duration: {
      fast: 200,
      normal: 300,
      slow: 500,
    },
    easing: {
      default: 'cubic-bezier(0.4, 0, 0.2, 1)',
      smooth: 'cubic-bezier(0.25, 0.1, 0.25, 1)',
    },
  },
};

export default theme;
