/**
 * DeepFeaturesSection Component
 * 
 * Displays detailed features and capabilities of GymFlow
 * Mobile: Horizontal scroll, Desktop: Grid
 * Requirements: 8.1, 8.2, 8.3, 8.4, 8.5
 */

'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/utils/useScrollAnimation';
import { Icon, type IconType } from '@/components/Icon';
import type { DeepFeatureContent } from '@/config/content';

export interface DeepFeaturesSectionProps {
  features: DeepFeatureContent[];
}

export const DeepFeaturesSection: React.FC<DeepFeaturesSectionProps> = ({ features }) => {
  const { ref, controls } = useScrollAnimation({ threshold: 0.2, triggerOnce: true });

  return (
    <section ref={ref as React.RefObject<HTMLElement>} className="w-full bg-zinc-950 text-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Powerful Features</h2>
          <p className="text-gray-400 text-base md:text-lg">Built with cutting-edge technology</p>
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
                whileHover={{ scale: 1.05, y: -8 }}
                className="group bg-white/5 backdrop-blur-lg rounded-2xl p-5 border border-white/10 hover:border-white/20 transition-all duration-300 w-64"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                
                <div className="relative z-10">
                  <motion.div
                    className="mb-3 text-white"
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Icon type={feature.icon as IconType} size={32} />
                  </motion.div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-400 leading-relaxed text-sm">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Desktop: Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 20 }}
              animate={controls}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -8 }}
              className="group bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
              
              <div className="relative z-10">
                <motion.div
                  className="mb-4 text-white"
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.6 }}
                >
                  <Icon type={feature.icon as IconType} size={40} />
                </motion.div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DeepFeaturesSection;
