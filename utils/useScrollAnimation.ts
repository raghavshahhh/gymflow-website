/**
 * useScrollAnimation Hook
 * 
 * Manages scroll-based animations using Intersection Observer.
 * Provides visibility state and Framer Motion controls for animating elements
 * when they enter the viewport.
 * 
 * Features:
 * - Intersection Observer-based detection
 * - Configurable threshold and trigger behavior
 * - Stagger delay support
 * - Respects prefers-reduced-motion
 * - Returns Framer Motion animation controls
 * 
 * Requirements: 13.1, 13.2, 13.3, 13.4
 */

'use client';

import { useEffect, useState, useRef } from 'react';
import { useAnimation } from 'framer-motion';

export interface AnimationConfig {
  threshold?: number; // 0-1, percentage of element visible to trigger
  triggerOnce?: boolean; // Animate only once or every time
  delay?: number; // Stagger delay in ms
  rootMargin?: string; // Margin around root for early/late triggering
}

export interface ScrollAnimationReturn {
  ref: React.RefObject<HTMLElement | null>;
  isVisible: boolean;
  controls: ReturnType<typeof useAnimation>;
}

/**
 * Custom hook for scroll-based animations
 * 
 * @param config - Animation configuration options
 * @returns Object with ref, visibility state, and animation controls
 * 
 * @example
 * ```tsx
 * function AnimatedSection() {
 *   const { ref, isVisible, controls } = useScrollAnimation({
 *     threshold: 0.2,
 *     triggerOnce: true,
 *     delay: 100
 *   });
 *   
 *   return (
 *     <motion.div
 *       ref={ref}
 *       animate={controls}
 *       initial={{ opacity: 0, y: 20 }}
 *     >
 *       Content appears when scrolled into view
 *     </motion.div>
 *   );
 * }
 * ```
 */
export function useScrollAnimation(
  config: AnimationConfig = {}
): ScrollAnimationReturn {
  const {
    threshold = 0.1,
    triggerOnce = true,
    delay = 0,
    rootMargin = '0px',
  } = config;

  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const controls = useAnimation();
  const hasAnimated = useRef(false);

  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (prefersReducedMotion) {
      // Skip animations if user prefers reduced motion
      setIsVisible(true);
      controls.start({ opacity: 1, y: 0, transition: { duration: 0 } });
      return;
    }

    const element = ref.current;
    if (!element) return;

    // Create Intersection Observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Element is visible
            if (!hasAnimated.current || !triggerOnce) {
              setIsVisible(true);
              hasAnimated.current = true;

              // Trigger animation with delay
              setTimeout(() => {
                controls.start({
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.5,
                    ease: [0.25, 0.1, 0.25, 1],
                  },
                });
              }, delay);
            }
          } else if (!triggerOnce) {
            // Element is not visible and we want to re-trigger
            setIsVisible(false);
            controls.start({ opacity: 0, y: 20 });
          }
        });
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(element);

    // Cleanup
    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [threshold, triggerOnce, delay, rootMargin, controls]);

  return {
    ref,
    isVisible,
    controls,
  };
}

export default useScrollAnimation;
