/**
 * FeatureCard Component
 * 
 * Displays a feature with glassmorphism styling, icon, title, and description.
 * Includes smooth hover animations and responsive design.
 * 
 * Requirements: 3.1, 3.2, 3.3, 3.4, 5.2
 */

'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Icon, type IconType } from './Icon';

export interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  index: number;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
  index,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.02, y: -4 }}
      className="group relative bg-white/5 backdrop-blur-lg rounded-2xl p-6 md:p-8 border border-white/10 hover:border-white/20 transition-all duration-300 h-full"
    >
      {/* Glow effect on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
      
      <div className="relative z-10">
        {/* Icon */}
        <motion.div
          className="mb-4 md:mb-6 text-white"
          whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
          transition={{ duration: 0.5 }}
        >
          <Icon type={icon as IconType} size={40} className="md:w-12 md:h-12" />
        </motion.div>

        {/* Title */}
        <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3 text-white">
          {title}
        </h3>

        {/* Description */}
        <p className="text-gray-400 leading-relaxed text-sm md:text-base">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export default FeatureCard;
