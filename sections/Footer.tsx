/**
 * Footer Component
 * 
 * Footer with links, copyright, and RagsPro branding
 * Requirements: 12.1, 12.2, 12.3
 */

'use client';

import React from 'react';
import { motion } from 'framer-motion';
import type { FooterContent } from '@/config/content';

export interface FooterProps {
  content: FooterContent;
}

export const Footer: React.FC<FooterProps> = ({ content }) => {
  return (
    <footer className="w-full bg-zinc-950 text-white py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col gap-8">
          {/* Logo */}
          <div className="flex justify-center">
            <img src="/logo.png" alt="GymFlow Logo" className="h-16 w-16" />
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-6 justify-center">
            {content.links.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                whileHover={{ scale: 1.05, y: -2 }}
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                {link.label}
              </motion.a>
            ))}
            <motion.a
              href="/blog"
              whileHover={{ scale: 1.05, y: -2 }}
              className="text-gray-400 hover:text-white transition-colors text-sm"
            >
              Blog
            </motion.a>
          </div>

          {/* Copyright and RagsPro Branding */}
          <div className="flex flex-col items-center gap-3 text-center">
            <div className="text-gray-400 text-sm">
              {content.copyright}
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-2 text-gray-500 text-xs">
              <a 
                href="mailto:ragsproai@gmail.com"
                className="hover:text-gray-300 transition-colors"
              >
                📧 ragsproai@gmail.com
              </a>
              <span className="hidden sm:inline">•</span>
              <a 
                href="tel:+918826073013"
                className="hover:text-gray-300 transition-colors"
              >
                📞 +91 88260 73013
              </a>
            </div>
            <motion.a
              href="https://ragspro.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 text-gray-500 hover:text-gray-300 transition-colors text-xs"
            >
              <span>Built by</span>
              <span className="font-semibold text-white">RagsPro</span>
              <svg 
                className="w-3 h-3" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" 
                />
              </svg>
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
