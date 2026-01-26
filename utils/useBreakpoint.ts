/**
 * useBreakpoint Hook
 * 
 * Provides current breakpoint information to components for responsive behavior.
 * Uses window.matchMedia to detect screen size changes and returns the current breakpoint.
 * 
 * Breakpoints:
 * - Mobile: < 768px
 * - Tablet: 768px - 1024px
 * - Desktop: 1024px - 1440px
 * - Wide: > 1440px
 * 
 * Requirements: 4.1, 4.2, 4.3
 */

'use client';

import { useState, useEffect } from 'react';

export type Breakpoint = 'mobile' | 'tablet' | 'desktop' | 'wide';

export interface BreakpointState {
  current: Breakpoint;
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  isWide: boolean;
}

const BREAKPOINTS = {
  mobile: 0,
  tablet: 768,
  desktop: 1024,
  wide: 1440,
};

/**
 * Determines the current breakpoint based on window width
 */
function getBreakpoint(width: number): Breakpoint {
  if (width < BREAKPOINTS.tablet) return 'mobile';
  if (width < BREAKPOINTS.desktop) return 'tablet';
  if (width < BREAKPOINTS.wide) return 'desktop';
  return 'wide';
}

/**
 * Custom hook to get current breakpoint information
 * 
 * @returns BreakpointState object with current breakpoint and boolean flags
 * 
 * @example
 * ```tsx
 * function MyComponent() {
 *   const { current, isMobile, isDesktop } = useBreakpoint();
 *   
 *   return (
 *     <div>
 *       {isMobile && <MobileView />}
 *       {isDesktop && <DesktopView />}
 *       <p>Current breakpoint: {current}</p>
 *     </div>
 *   );
 * }
 * ```
 */
export function useBreakpoint(): BreakpointState {
  // Initialize with mobile as default (SSR-safe)
  const [breakpoint, setBreakpoint] = useState<Breakpoint>('mobile');

  useEffect(() => {
    // Set initial breakpoint
    const updateBreakpoint = () => {
      const width = window.innerWidth;
      const newBreakpoint = getBreakpoint(width);
      setBreakpoint(newBreakpoint);
    };

    // Update on mount
    updateBreakpoint();

    // Listen for resize events
    window.addEventListener('resize', updateBreakpoint);

    // Cleanup
    return () => window.removeEventListener('resize', updateBreakpoint);
  }, []);

  return {
    current: breakpoint,
    isMobile: breakpoint === 'mobile',
    isTablet: breakpoint === 'tablet',
    isDesktop: breakpoint === 'desktop',
    isWide: breakpoint === 'wide',
  };
}

export default useBreakpoint;
