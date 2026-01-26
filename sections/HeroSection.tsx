/**
 * HeroSection Component
 * 
 * The primary above-the-fold section that displays the main value proposition
 * and call-to-action for the GymFlow landing page.
 * 
 * Features:
 * - Full viewport height on mobile, auto height on desktop
 * - Responsive layout: mockup on right (desktop) or below (mobile)
 * - Staggered fade-in animation on load
 * - Primary and secondary CTA buttons
 * - Trust indicators
 * 
 * Requirements: 1.1, 1.2, 1.3, 1.4, 1.5, 1.6
 */

'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CTAButton } from '@/components/CTAButton';
import { useBreakpoint } from '@/utils/useBreakpoint';
import type { HeroContent } from '@/config/content';

export interface HeroSectionProps {
  content: HeroContent;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ content }) => {
  const { isMobile } = useBreakpoint();

  // Staggered animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1] as const,
      },
    },
  };

  return (
    <section
      className="relative w-full bg-black text-white overflow-hidden"
      style={{ minHeight: isMobile ? '100vh' : 'auto' }}
    >
      <div className="max-w-7xl mx-auto px-6 py-20 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column: Text Content */}
          <motion.div
            className="flex flex-col space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Headline */}
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
              variants={itemVariants}
            >
              {content.headline}
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              className="text-lg md:text-xl text-gray-300 leading-relaxed"
              variants={itemVariants}
            >
              {content.subheadline}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              variants={itemVariants}
            >
              <CTAButton
                label={content.primaryCTA.label}
                href={content.primaryCTA.url}
                variant="primary"
                size="large"
              />
              <CTAButton
                label={content.secondaryCTA.label}
                href={content.secondaryCTA.url}
                variant="secondary"
                size="large"
              />
            </motion.div>

            {/* Trust Line */}
            <motion.div
              className="flex items-center gap-2 text-sm text-gray-400"
              variants={itemVariants}
            >
              <span>{content.trustLine}</span>
            </motion.div>
          </motion.div>

          {/* Right Column: iPhone Mockup */}
          <motion.div
            className="relative flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="relative w-64 md:w-72">
              {/* Smaller iPhone mockup */}
              <div className="aspect-[9/19] bg-gradient-to-br from-gray-800 to-gray-900 rounded-[2.5rem] p-2 shadow-2xl">
                <div className="w-full h-full bg-black rounded-[2rem] overflow-hidden">
                  {/* Mockup content placeholder */}
                  <div className="w-full h-full flex items-center justify-center text-gray-600">
                    <span className="text-xs">App Preview</span>
                  </div>
                </div>
              </div>

              {/* Floating effect glow */}
              <div className="absolute inset-0 bg-white/5 blur-3xl -z-10 rounded-full" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
