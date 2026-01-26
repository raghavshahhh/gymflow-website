/**
 * Container Component
 * 
 * A responsive container component that provides consistent max-width and padding
 * across different screen sizes. Centers content and applies appropriate gutters.
 * 
 * Features:
 * - Max-width constraint (1200px by default)
 * - Responsive horizontal padding
 * - Centered content
 * - Optional full-width mode
 * 
 * Requirements: 4.1, 4.2, 4.3, 5.4
 */

import React from 'react';

export interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  fullWidth?: boolean;
  as?: React.ElementType;
}

export const Container: React.FC<ContainerProps> = ({
  children,
  className = '',
  fullWidth = false,
  as: Component = 'div',
}) => {
  const containerClasses = `
    mx-auto
    px-6 md:px-8 lg:px-12
    ${fullWidth ? 'w-full' : 'max-w-7xl'}
    ${className}
  `.trim().replace(/\s+/g, ' ');

  return <Component className={containerClasses}>{children}</Component>;
};

export default Container;
