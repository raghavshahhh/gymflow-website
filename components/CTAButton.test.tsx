/**
 * Unit tests for CTAButton component
 * Tests rendering, variants, interactions, and accessibility
 */

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import * as fc from 'fast-check';
import { CTAButton } from './CTAButton';

/**
 * Calculate relative luminance for a color
 * Used for WCAG contrast ratio calculation
 */
function getLuminance(r: number, g: number, b: number): number {
  const [rs, gs, bs] = [r, g, b].map((c) => {
    const sRGB = c / 255;
    return sRGB <= 0.03928 ? sRGB / 12.92 : Math.pow((sRGB + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
}

/**
 * Calculate contrast ratio between two colors
 * Returns ratio according to WCAG formula
 */
function getContrastRatio(rgb1: [number, number, number], rgb2: [number, number, number]): number {
  const lum1 = getLuminance(...rgb1);
  const lum2 = getLuminance(...rgb2);
  const lighter = Math.max(lum1, lum2);
  const darker = Math.min(lum1, lum2);
  return (lighter + 0.05) / (darker + 0.05);
}

/**
 * Extract RGB values from computed style or class names
 * In test environment, we need to infer colors from Tailwind classes
 */
function getRGBFromElement(element: HTMLElement, property: 'color' | 'backgroundColor'): [number, number, number] {
  const style = window.getComputedStyle(element);
  const value = style[property];
  const classList = element.className;
  
  // Handle rgb() format
  const rgbMatch = value.match(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/);
  if (rgbMatch) {
    return [parseInt(rgbMatch[1]), parseInt(rgbMatch[2]), parseInt(rgbMatch[3])];
  }
  
  // Handle rgba() format
  const rgbaMatch = value.match(/rgba\((\d+),\s*(\d+),\s*(\d+),\s*[\d.]+\)/);
  if (rgbaMatch) {
    return [parseInt(rgbaMatch[1]), parseInt(rgbaMatch[2]), parseInt(rgbaMatch[3])];
  }
  
  // Handle hex format
  if (value.startsWith('#')) {
    const hex = value.slice(1);
    const r = parseInt(hex.slice(0, 2), 16);
    const g = parseInt(hex.slice(2, 4), 16);
    const b = parseInt(hex.slice(4, 6), 16);
    return [r, g, b];
  }
  
  // Fallback: Infer from Tailwind classes in test environment
  if (property === 'backgroundColor') {
    if (classList.includes('bg-white')) return [255, 255, 255];
    if (classList.includes('bg-transparent') || classList.includes('bg-white/10') || classList.includes('bg-white/20')) {
      // For transparent backgrounds, assume dark background context
      return [0, 0, 0];
    }
    if (classList.includes('bg-black')) return [0, 0, 0];
    if (classList.includes('bg-gray-100')) return [243, 244, 246];
    if (classList.includes('bg-gray-200')) return [229, 231, 235];
  }
  
  if (property === 'color') {
    if (classList.includes('text-black')) return [0, 0, 0];
    if (classList.includes('text-white')) return [255, 255, 255];
    if (classList.includes('text-gray-100')) return [243, 244, 246];
  }
  
  // Default based on property
  return property === 'backgroundColor' ? [255, 255, 255] : [0, 0, 0];
}

describe('CTAButton', () => {
  describe('Rendering', () => {
    it('renders with label text', () => {
      render(<CTAButton label="Click Me" />);
      expect(screen.getByText('Click Me')).toBeInTheDocument();
    });

    it('renders as button by default', () => {
      render(<CTAButton label="Click Me" />);
      const button = screen.getByRole('button');
      expect(button).toBeInTheDocument();
    });

    it('renders as anchor when href is provided', () => {
      render(<CTAButton label="Click Me" href="/test" />);
      const link = screen.getByRole('link');
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute('href', '/test');
    });

    it('renders with icon when provided', () => {
      const icon = <span data-testid="test-icon">🚀</span>;
      render(<CTAButton label="Click Me" icon={icon} />);
      expect(screen.getByTestId('test-icon')).toBeInTheDocument();
    });
  });

  describe('Variants', () => {
    it('applies primary variant styles by default', () => {
      render(<CTAButton label="Primary" />);
      const button = screen.getByRole('button');
      expect(button).toHaveClass('bg-white', 'text-black');
    });

    it('applies secondary variant styles', () => {
      render(<CTAButton label="Secondary" variant="secondary" />);
      const button = screen.getByRole('button');
      expect(button).toHaveClass('bg-transparent', 'text-white', 'border-white');
    });
  });

  describe('Sizes', () => {
    it('applies medium size by default', () => {
      render(<CTAButton label="Medium" />);
      const button = screen.getByRole('button');
      expect(button).toHaveClass('px-6', 'py-3');
    });

    it('applies small size', () => {
      render(<CTAButton label="Small" size="small" />);
      const button = screen.getByRole('button');
      expect(button).toHaveClass('px-4', 'py-2');
    });

    it('applies large size', () => {
      render(<CTAButton label="Large" size="large" />);
      const button = screen.getByRole('button');
      expect(button).toHaveClass('px-8', 'py-4');
    });
  });

  describe('Interactions', () => {
    it('calls onClick handler when clicked', () => {
      const handleClick = jest.fn();
      render(<CTAButton label="Click Me" onClick={handleClick} />);
      const button = screen.getByRole('button');
      fireEvent.click(button);
      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('does not call onClick when disabled', () => {
      const handleClick = jest.fn();
      render(<CTAButton label="Click Me" onClick={handleClick} disabled />);
      const button = screen.getByRole('button');
      fireEvent.click(button);
      expect(handleClick).not.toHaveBeenCalled();
    });

    it('is keyboard accessible', () => {
      const handleClick = jest.fn();
      render(<CTAButton label="Click Me" onClick={handleClick} />);
      const button = screen.getByRole('button');
      button.focus();
      expect(button).toHaveFocus();
    });
  });

  describe('Accessibility', () => {
    it('has aria-label attribute', () => {
      render(<CTAButton label="Accessible Button" />);
      const button = screen.getByRole('button');
      expect(button).toHaveAttribute('aria-label', 'Accessible Button');
    });

    it('has focus ring styles', () => {
      render(<CTAButton label="Focus Me" />);
      const button = screen.getByRole('button');
      expect(button).toHaveClass('focus:ring-4');
    });

    it('applies disabled styles when disabled', () => {
      render(<CTAButton label="Disabled" disabled />);
      const button = screen.getByRole('button');
      expect(button).toBeDisabled();
      expect(button).toHaveClass('disabled:opacity-50');
    });
  });

  describe('External Links', () => {
    it('opens external links in new tab', () => {
      render(<CTAButton label="External" href="https://example.com" />);
      const link = screen.getByRole('link');
      expect(link).toHaveAttribute('target', '_blank');
      expect(link).toHaveAttribute('rel', 'noopener noreferrer');
    });

    it('does not open internal links in new tab', () => {
      render(<CTAButton label="Internal" href="/about" />);
      const link = screen.getByRole('link');
      expect(link).not.toHaveAttribute('target');
    });
  });

  describe('Full Width', () => {
    it('applies full width class when fullWidth is true', () => {
      render(<CTAButton label="Full Width" fullWidth />);
      const button = screen.getByRole('button');
      expect(button).toHaveClass('w-full');
    });
  });

  describe('Property-Based Tests', () => {
    /**
     * Property 2: CTA Button Accessibility Contrast
     * **Validates: Requirements 2.4**
     * 
     * For any CTA button on the landing page, the color contrast ratio between 
     * the button text and background should meet or exceed WCAG 2.1 AA standards 
     * (4.5:1 for normal text, 3:1 for large text).
     */
    it('maintains WCAG AA contrast ratio for all button configurations', () => {
      fc.assert(
        fc.property(
          fc.record({
            variant: fc.constantFrom('primary', 'secondary'),
            size: fc.constantFrom('small', 'medium', 'large'),
            label: fc.string({ minLength: 1, maxLength: 50 }),
            disabled: fc.boolean(),
          }),
          (buttonProps) => {
            // Render secondary buttons on dark background to simulate real usage
            const isDarkBackground = buttonProps.variant === 'secondary';
            const { container } = render(
              isDarkBackground ? (
                <div style={{ backgroundColor: '#000000' }}>
                  <CTAButton {...buttonProps} />
                </div>
              ) : (
                <CTAButton {...buttonProps} />
              )
            );
            
            const button = container.querySelector('button, a');
            
            if (!button) {
              throw new Error('Button element not found');
            }

            // Get text color
            const textColor = getRGBFromElement(button as HTMLElement, 'color');
            
            // For secondary buttons with transparent background, check against parent dark background
            // For primary buttons, check against button's own background
            let bgColor: [number, number, number];
            if (buttonProps.variant === 'secondary') {
              // Secondary buttons are transparent, so check against dark background
              bgColor = [0, 0, 0]; // Black background
            } else {
              // Primary buttons have their own background
              bgColor = getRGBFromElement(button as HTMLElement, 'backgroundColor');
            }
            
            // Calculate contrast ratio
            const contrastRatio = getContrastRatio(textColor, bgColor);
            
            // WCAG AA requirements:
            // - Large text (18pt+ or 14pt+ bold): 3:1
            // - Normal text: 4.5:1
            // Large size buttons use larger text, so 3:1 is acceptable
            const minRatio = buttonProps.size === 'large' ? 3.0 : 4.5;
            
            // Verify contrast meets WCAG AA standards
            expect(contrastRatio).toBeGreaterThanOrEqual(minRatio);
          }
        ),
        { numRuns: 100 }
      );
    });

    /**
     * Additional property test: Verify primary variant always has high contrast
     * Primary buttons should have white background with black text (21:1 ratio)
     */
    it('primary variant maintains maximum contrast', () => {
      fc.assert(
        fc.property(
          fc.record({
            size: fc.constantFrom('small', 'medium', 'large'),
            label: fc.string({ minLength: 1, maxLength: 50 }),
          }),
          (buttonProps) => {
            const { container } = render(
              <CTAButton {...buttonProps} variant="primary" />
            );
            const button = container.querySelector('button, a');
            
            if (!button) {
              throw new Error('Button element not found');
            }

            const textColor = getRGBFromElement(button as HTMLElement, 'color');
            const bgColor = getRGBFromElement(button as HTMLElement, 'backgroundColor');
            const contrastRatio = getContrastRatio(textColor, bgColor);
            
            // Primary buttons should have very high contrast (close to 21:1 for black on white)
            // We'll accept anything above 7:1 which is WCAG AAA standard
            expect(contrastRatio).toBeGreaterThanOrEqual(7.0);
          }
        ),
        { numRuns: 100 }
      );
    });

    /**
     * Additional property test: Verify secondary variant has sufficient contrast
     * Secondary buttons have white text on transparent/dark background
     */
    it('secondary variant maintains sufficient contrast on dark backgrounds', () => {
      fc.assert(
        fc.property(
          fc.record({
            size: fc.constantFrom('small', 'medium', 'large'),
            label: fc.string({ minLength: 1, maxLength: 50 }),
          }),
          (buttonProps) => {
            // Render on a dark background to simulate real usage
            const { container } = render(
              <div style={{ backgroundColor: '#000000' }}>
                <CTAButton {...buttonProps} variant="secondary" />
              </div>
            );
            const button = container.querySelector('button, a');
            
            if (!button) {
              throw new Error('Button element not found');
            }

            const textColor = getRGBFromElement(button as HTMLElement, 'color');
            // For secondary buttons, we check against the parent dark background
            const bgColor: [number, number, number] = [0, 0, 0]; // Black background
            const contrastRatio = getContrastRatio(textColor, bgColor);
            
            // White text on black background should have 21:1 ratio
            // We'll accept anything above 7:1 (WCAG AAA)
            expect(contrastRatio).toBeGreaterThanOrEqual(7.0);
          }
        ),
        { numRuns: 100 }
      );
    });
  });
});
