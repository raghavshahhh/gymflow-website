/**
 * FeatureOverviewSection Component
 * 
 * Displays the 4 main features of GymFlow in a grid layout
 * Mobile: Horizontal scroll, Desktop: Grid
 * Requirements: 3.1, 3.2, 3.3, 3.4, 3.5
 */

'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FeatureCard } from '@/components/FeatureCard';
import { useScrollAnimation } from '@/utils/useScrollAnimation';
import type { FeatureContent } from '@/config/content';

export interface FeatureOverviewSectionProps {
  features: FeatureContent[];
}

export const FeatureOverviewSection: React.FC<FeatureOverviewSectionProps> = ({ features }) => {
  const { ref, controls } = useScrollAnimation({ threshold: 0.2, triggerOnce: true });

  return (
    <section ref={ref as React.RefObject<HTMLElement>} className="w-full bg-black text-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3">What GymFlow Does</h2>
          <p className="text-gray-400 text-base md:text-lg">Everything you need for your fitness journey</p>
        </motion.div>

        {/* Mobile: Horizontal Scroll */}
        <div className="md:hidden overflow-x-auto pb-4 -mx-6 px-6 scrollbar-hide">
          <div className="flex gap-4 w-max">
            {features.map((feature, index) => (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, x: 20 }}
                animate={controls}
                transition={{ delay: index * 0.1 }}
                className="w-72"
              >
                <FeatureCard
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                  index={index}
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Desktop: Grid */}
        <div className="hidden md:grid md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 20 }}
              animate={controls}
              transition={{ delay: index * 0.1 }}
            >
              <FeatureCard
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                index={index}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureOverviewSection;
