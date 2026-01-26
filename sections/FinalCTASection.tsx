/**
 * FinalCTASection Component
 * 
 * Final call-to-action section with download buttons
 * Requirements: 11.1, 11.2, 11.3
 */

'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CTAButton } from '@/components/CTAButton';
import type { FinalCTAContent } from '@/config/content';

export interface FinalCTASectionProps {
  content: FinalCTAContent;
}

export const FinalCTASection: React.FC<FinalCTASectionProps> = ({ content }) => {
  return (
    <section className="w-full bg-black text-white py-20 md:py-32">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
            {content.headline}
          </h2>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <CTAButton
              label="Download APK (Android)"
              href={content.ctaUrl}
              variant="primary"
              size="large"
            />
            <CTAButton
              label="Coming Soon on iOS"
              variant="secondary"
              size="large"
              disabled
            />
          </div>

          <p className="text-gray-400 text-sm">{content.pricingNote}</p>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTASection;
