/**
 * Unit tests for Theme Configuration
 * Validates theme structure and values
 */

import { theme, ThemeConfig } from './theme';

describe('Theme Configuration', () => {
  describe('Structure', () => {
    it('should export a valid ThemeConfig object', () => {
      expect(theme).toBeDefined();
      expect(typeof theme).toBe('object');
    });

    it('should have all required top-level properties', () => {
      expect(theme).toHaveProperty('colors');
      expect(theme).toHaveProperty('typography');
      expect(theme).toHaveProperty('spacing');
      expect(theme).toHaveProperty('borderRadius');
      expect(theme).toHaveProperty('animation');
    });
  });

  describe('Colors', () => {
    it('should define dark background colors', () => {
      expect(theme.colors.background.primary).toBe('#000000');
      expect(theme.colors.background.secondary).toBe('#1a1a1a');
      expect(theme.colors.background.tertiary).toBe('#2a2a2a');
    });

    it('should define text colors', () => {
      expect(theme.colors.text.primary).toBe('#ffffff');
      expect(theme.colors.text.secondary).toBe('#a0a0a0');
      expect(theme.colors.text.tertiary).toBe('#707070');
    });

    it('should define glassmorphism colors', () => {
      expect(theme.colors.glass.background).toBe('rgba(255, 255, 255, 0.05)');
      expect(theme.colors.glass.border).toBe('rgba(255, 255, 255, 0.1)');
    });
  });

  describe('Typography', () => {
    it('should define font families with SF Pro Display, Inter, and Poppins', () => {
      expect(theme.typography.fontFamily.primary).toContain('SF Pro Display');
      expect(theme.typography.fontFamily.primary).toContain('Inter');
      expect(theme.typography.fontFamily.primary).toContain('Poppins');
      expect(theme.typography.fontFamily.secondary).toContain('Inter');
      expect(theme.typography.fontFamily.secondary).toContain('Poppins');
    });

    it('should define responsive font sizes', () => {
      expect(theme.typography.fontSize.h1Desktop).toBe('48px');
      expect(theme.typography.fontSize.h1Mobile).toBe('32px');
      expect(theme.typography.fontSize.h2Desktop).toBe('36px');
      expect(theme.typography.fontSize.h2Mobile).toBe('28px');
      expect(theme.typography.fontSize.h3Desktop).toBe('28px');
      expect(theme.typography.fontSize.h3Mobile).toBe('24px');
      expect(theme.typography.fontSize.body).toBe('16px');
      expect(theme.typography.fontSize.small).toBe('14px');
    });

    it('should define font weights', () => {
      expect(theme.typography.fontWeight.regular).toBe(400);
      expect(theme.typography.fontWeight.medium).toBe(500);
      expect(theme.typography.fontWeight.semibold).toBe(600);
      expect(theme.typography.fontWeight.bold).toBe(700);
    });
  });

  describe('Spacing', () => {
    it('should define section spacing for desktop and mobile', () => {
      expect(theme.spacing.sectionDesktop).toBe('120px');
      expect(theme.spacing.sectionMobile).toBe('80px');
    });

    it('should define container and gutter spacing', () => {
      expect(theme.spacing.container).toBe('1200px');
      expect(theme.spacing.gutter).toBe('24px');
    });
  });

  describe('Border Radius', () => {
    it('should define border radius values', () => {
      expect(theme.borderRadius.small).toBe('8px');
      expect(theme.borderRadius.medium).toBe('16px');
      expect(theme.borderRadius.large).toBe('24px');
    });
  });

  describe('Animation', () => {
    it('should define animation durations in milliseconds', () => {
      expect(theme.animation.duration.fast).toBe(200);
      expect(theme.animation.duration.normal).toBe(300);
      expect(theme.animation.duration.slow).toBe(500);
    });

    it('should define animation durations within 300-600ms range for normal/slow', () => {
      // Requirement 13.2: animations should complete within 300-600ms
      expect(theme.animation.duration.normal).toBeGreaterThanOrEqual(300);
      expect(theme.animation.duration.normal).toBeLessThanOrEqual(600);
      expect(theme.animation.duration.slow).toBeGreaterThanOrEqual(300);
      expect(theme.animation.duration.slow).toBeLessThanOrEqual(600);
    });

    it('should define easing functions', () => {
      expect(theme.animation.easing.default).toBe('cubic-bezier(0.4, 0, 0.2, 1)');
      expect(theme.animation.easing.smooth).toBe('cubic-bezier(0.25, 0.1, 0.25, 1)');
    });
  });

  describe('Type Safety', () => {
    it('should match ThemeConfig interface', () => {
      // This test ensures TypeScript compilation validates the structure
      const testTheme: ThemeConfig = theme;
      expect(testTheme).toBeDefined();
    });
  });
});
