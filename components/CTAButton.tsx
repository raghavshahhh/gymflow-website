/**
 * CTAButton Component
 * 
 * A reusable call-to-action button with consistent styling and accessibility features.
 * Supports primary and secondary variants with proper hover, active, and focus states.
 * 
 * Features:
 * - Primary variant: White background with black text
 * - Secondary variant: Transparent background with white border
 * - Keyboard navigation support (Tab, Enter, Space)
 * - WCAG AA contrast compliance
 * - Smooth hover and active state transitions
 * - Optional icon support
 * - Responsive sizing
 * 
 * Requirements: 2.1, 2.2, 2.3, 2.4, 15.2, 15.3
 */

'use client';

import React from 'react';
import { motion } from 'framer-motion';

export interface CTAButtonProps {
  label: string;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
  icon?: React.ReactNode;
  className?: string;
  disabled?: boolean;
}

export const CTAButton: React.FC<CTAButtonProps> = ({
  label,
  href,
  onClick,
  variant = 'primary',
  size = 'medium',
  fullWidth = false,
  icon,
  className = '',
  disabled = false,
}) => {
  // Size classes
  const sizeClasses = {
    small: 'px-4 py-2 text-sm',
    medium: 'px-6 py-3 text-base',
    large: 'px-8 py-4 text-lg',
  };

  // Variant classes with WCAG AA compliant contrast
  const variantClasses = {
    primary: 'bg-white text-black border-2 border-white hover:bg-gray-100 active:bg-gray-200',
    secondary: 'bg-transparent text-white border-2 border-white hover:bg-white/10 active:bg-white/20',
  };

  // Base classes for all buttons
  const baseClasses = `
    inline-flex items-center justify-center gap-2
    font-semibold rounded-full
    transition-all duration-300 ease-out
    focus:outline-none focus:ring-4 focus:ring-white/50
    disabled:opacity-50 disabled:cursor-not-allowed
    ${fullWidth ? 'w-full' : ''}
    ${sizeClasses[size]}
    ${variantClasses[variant]}
    ${className}
  `.trim().replace(/\s+/g, ' ');

  // Motion animation variants
  const motionVariants = {
    hover: { scale: 1.02 },
    tap: { scale: 0.98 },
  };

  // Common props for both button and anchor
  const commonProps = {
    className: baseClasses,
    disabled,
    'aria-label': label,
  };

  // If href is provided, render as anchor tag
  if (href && !disabled) {
    return (
      <motion.a
        {...commonProps}
        href={href}
        onClick={onClick}
        variants={motionVariants}
        whileHover="hover"
        whileTap="tap"
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
      >
        {icon && <span className="flex-shrink-0">{icon}</span>}
        <span>{label}</span>
      </motion.a>
    );
  }

  // Otherwise, render as button
  return (
    <motion.button
      {...commonProps}
      onClick={onClick}
      type="button"
      variants={motionVariants}
      whileHover={!disabled ? "hover" : undefined}
      whileTap={!disabled ? "tap" : undefined}
    >
      {icon && <span className="flex-shrink-0">{icon}</span>}
      <span>{label}</span>
    </motion.button>
  );
};

export default CTAButton;
