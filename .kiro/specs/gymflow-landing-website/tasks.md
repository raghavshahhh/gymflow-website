# Implementation Plan: GymFlow Landing Website

## Overview

This implementation plan breaks down the GymFlow landing website into discrete, incremental coding tasks. The approach follows a mobile-first, component-driven development strategy using React, TypeScript, and Next.js. Each task builds on previous work, with testing integrated throughout to catch errors early.

## Tasks

- [x] 1. Project setup and configuration
  - Initialize Next.js 14+ project with TypeScript
  - Configure Tailwind CSS with custom dark theme tokens
  - Install and configure Framer Motion for animations
  - Set up testing frameworks (Jest, React Testing Library, fast-check)
  - Create project directory structure (components, sections, utils, config)
  - Configure ESLint and Prettier for code quality
  - _Requirements: 14.4, 16.4_

- [ ] 2. Design system and shared components
  - [x] 2.1 Create theme configuration file
    - Define color palette (black, charcoal, grey tones)
    - Define typography tokens (font families, sizes, weights)
    - Define spacing, border radius, and animation tokens
    - Export ThemeConfig interface and values
    - _Requirements: 5.1, 5.3, 5.4_
  
  - [x] 2.2 Implement CTAButton component
    - Create component with primary and secondary variants
    - Implement hover, active, and focus states
    - Add keyboard navigation support
    - Ensure WCAG AA contrast compliance
    - _Requirements: 2.1, 2.2, 2.3, 2.4, 15.2, 15.3_
  
  - [x] 2.3 Write property test for CTAButton accessibility
    - **Property 2: CTA Button Accessibility Contrast**
    - **Validates: Requirements 2.4**
  
  - [ ] 2.4 Write property test for CTAButton hover feedback
    - **Property 1: CTA Button Hover Feedback**
    - **Validates: Requirements 2.3**
  
  - [x] 2.5 Implement FeatureCard component
    - Create glassmorphism styling with backdrop-blur
    - Add icon, title, and description props
    - Implement hover effects (scale, glow)
    - Make responsive for mobile and desktop
    - _Requirements: 3.1, 3.2, 3.3, 3.4, 5.2_
  
  - [ ] 2.6 Write property test for FeatureCard glassmorphism
    - **Property 6: Glassmorphism Effect on Feature Cards**
    - **Validates: Requirements 5.2**
  
  - [x] 2.7 Create responsive layout utilities
    - Implement useBreakpoint hook for responsive behavior
    - Create container components with max-width constraints
    - _Requirements: 4.1, 4.2, 4.3_
  
  - [ ] 2.8 Write property test for responsive layout adaptation
    - **Property 3: Responsive Layout Adaptation**
    - **Validates: Requirements 4.3**

- [ ] 3. Animation system
  - [x] 3.1 Implement scroll animation controller
    - Create useScrollAnimation hook with Intersection Observer
    - Support threshold, triggerOnce, and delay configuration
    - Respect prefers-reduced-motion media query
    - Return visibility state and Framer Motion controls
    - _Requirements: 13.1, 13.2, 13.3, 13.4_
  
  - [ ] 3.2 Write property test for animation duration bounds
    - **Property 11: Animation Duration Bounds**
    - **Validates: Requirements 13.2**
  
  - [ ] 3.3 Write property test for reduced motion preference
    - **Property 12: Reduced Motion Preference**
    - **Validates: Requirements 13.3**
  
  - [ ] 3.4 Write property test for animation layout stability
    - **Property 13: Animation Layout Stability**
    - **Validates: Requirements 13.4**

- [ ] 4. Content configuration
  - [x] 4.1 Create content configuration file
    - Define LandingPageContent interface
    - Populate hero section content
    - Populate feature cards content (4 features)
    - Populate comparison section content
    - Populate deep features content
    - Populate tech trust indicators
    - Populate founder section content
    - Populate final CTA content
    - Populate footer links and copyright
    - _Requirements: 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 3.1, 3.2, 3.3, 3.4, 6.1, 6.2, 8.1, 8.2, 8.3, 8.4, 8.5, 9.1, 9.2, 10.1, 10.2, 11.1, 11.2, 11.3, 12.1, 12.2_
  
  - [-] 4.2 Prepare image assets
    - Add iPhone mockup images to public/images
    - Add app screenshot images (workout, diet, progress)
    - Add feature icons (SVG or PNG)
    - Add founder photo and RagsPro logo
    - Optimize all images for web (WebP/AVIF with fallbacks)
    - _Requirements: 1.3, 7.1, 7.2, 10.1, 14.3_

- [ ] 5. Hero section implementation
  - [x] 5.1 Create HeroSection component
    - Implement full viewport height layout on mobile
    - Position headline, subheadline, and trust line
    - Add primary and secondary CTA buttons
    - Position iPhone mockup (right on desktop, below on mobile)
    - Implement staggered fade-in animation on load
    - _Requirements: 1.1, 1.2, 1.3, 1.4, 1.5, 1.6_
  
  - [ ] 5.2 Create AppMockup component
    - Render iPhone device frame SVG
    - Display app screenshot inside frame
    - Add optional floating animation effect
    - Make responsive with proper sizing
    - _Requirements: 1.3_
  
  - [ ] 5.3 Write unit tests for HeroSection
    - Test content rendering with specific props
    - Test CTA button click handlers
    - Test responsive layout at breakpoints
    - _Requirements: 1.1, 1.2, 1.3, 1.4, 1.5, 1.6_

- [ ] 6. Feature overview section
  - [ ] 6.1 Create FeatureOverviewSection component
    - Render 4 FeatureCard components from content config
    - Implement grid layout (2x2 on desktop, 1 column on mobile)
    - Add scroll-triggered staggered animations
    - _Requirements: 3.1, 3.2, 3.3, 3.4, 3.5_
  
  - [ ] 6.2 Write property test for scroll-based animations
    - **Property 10: Scroll-Based Section Animations**
    - **Validates: Requirements 3.5, 13.1**
  
  - [ ] 6.3 Write unit tests for FeatureOverviewSection
    - Test rendering of all 4 feature cards
    - Test grid layout responsiveness
    - _Requirements: 3.1, 3.2, 3.3, 3.4_

- [ ] 7. Comparison section
  - [ ] 7.1 Create ComparisonGrid component
    - Implement two-column layout (desktop) and stacked (mobile)
    - Display generic app features with ✗ indicators
    - Display GymFlow features with ✓ indicators
    - Add visual highlighting for differences
    - _Requirements: 6.1, 6.2_
  
  - [ ] 7.2 Create ComparisonSection component
    - Integrate ComparisonGrid with content config
    - Add section headline
    - Add scroll-triggered animation
    - _Requirements: 6.1, 6.2, 6.3_
  
  - [ ] 7.3 Write unit tests for ComparisonSection
    - Test rendering of comparison content
    - Test visual indicators (✗ and ✓)
    - _Requirements: 6.1, 6.2_

- [ ] 8. App screenshots gallery
  - [ ] 8.1 Create HorizontalGallery component
    - Implement horizontal scroll with snap points
    - Add touch/swipe support for mobile
    - Add navigation dots or arrows
    - Support optional auto-scroll with pause on hover
    - _Requirements: 7.1, 7.4_
  
  - [ ] 8.2 Create AppScreensSection component
    - Integrate HorizontalGallery with screenshot content
    - Apply glass card framing to screenshots
    - Implement lazy loading for images
    - _Requirements: 7.1, 7.2, 7.3, 14.2_
  
  - [ ] 8.3 Write property test for glass card styling
    - **Property 8: Glass Card Styling on Screenshots**
    - **Validates: Requirements 7.3**
  
  - [ ] 8.4 Write property test for lazy loading
    - **Property 14: Lazy Loading Below-the-Fold Images**
    - **Validates: Requirements 14.2**
  
  - [ ] 8.5 Write unit tests for HorizontalGallery
    - Test scroll behavior
    - Test navigation controls
    - _Requirements: 7.1, 7.4_

- [ ] 9. Deep features section
  - [ ] 9.1 Create DeepFeaturesSection component
    - Display list of 5 deep features from content config
    - Implement clean, readable layout
    - Add icons for each feature
    - Add scroll-triggered animation
    - _Requirements: 8.1, 8.2, 8.3, 8.4, 8.5_
  
  - [ ] 9.2 Write unit tests for DeepFeaturesSection
    - Test rendering of all 5 features
    - Test content from config
    - _Requirements: 8.1, 8.2, 8.3, 8.4, 8.5_

- [ ] 10. Tech and trust section
  - [ ] 10.1 Create TechTrustSection component
    - Display trust indicators (Flutter, Firebase, Gemini AI, etc.)
    - Present technical info in non-technical manner
    - Add icons for each technology
    - Add scroll-triggered animation
    - _Requirements: 9.1, 9.2, 9.3_
  
  - [ ] 10.2 Write unit tests for TechTrustSection
    - Test rendering of trust indicators
    - Test content presentation
    - _Requirements: 9.1, 9.2_

- [ ] 11. Founder and brand section
  - [ ] 11.1 Create FounderSection component
    - Display founder note from Raghav Shah
    - Display RagsPro branding/logo
    - Use personal, authentic tone in styling
    - Add optional founder photo
    - _Requirements: 10.1, 10.2, 10.3_
  
  - [ ] 11.2 Write unit tests for FounderSection
    - Test content rendering
    - Test image display
    - _Requirements: 10.1, 10.2_

- [ ] 12. Final CTA section
  - [ ] 12.1 Create FinalCTASection component
    - Display headline "Train smarter. Stay consistent. Get results."
    - Add prominent download CTA button
    - Display pricing note "Free to start • Premium features coming soon"
    - Make visually prominent with strong contrast
    - _Requirements: 11.1, 11.2, 11.3_
  
  - [ ] 12.2 Write unit tests for FinalCTASection
    - Test content rendering
    - Test CTA button functionality
    - _Requirements: 11.1, 11.2, 11.3_

- [ ] 13. Footer implementation
  - [ ] 13.1 Create Footer component
    - Display footer links (About, Privacy Policy, Terms, Contact)
    - Display copyright "© GymFlow by RagsPro"
    - Implement link navigation
    - Make responsive for mobile and desktop
    - _Requirements: 12.1, 12.2, 12.3_
  
  - [ ] 13.2 Write property test for footer link navigation
    - **Property 9: Footer Link Navigation**
    - **Validates: Requirements 12.3**
  
  - [ ] 13.3 Write unit tests for Footer
    - Test link rendering
    - Test copyright text
    - _Requirements: 12.1, 12.2_

- [ ] 14. Main page assembly
  - [ ] 14.1 Create main landing page
    - Assemble all sections in correct order
    - Import and use content configuration
    - Set up page metadata for SEO
    - Implement proper semantic HTML structure
    - _Requirements: 16.1, 16.2, 16.3, 16.4, 16.5_
  
  - [ ] 14.2 Add SEO metadata
    - Add meta title "GymFlow – AI Fitness & Diet Coach"
    - Add meta description with key features
    - Add Open Graph tags for social sharing
    - Add structured data markup for application
    - _Requirements: 16.1, 16.2, 16.3, 16.5_
  
  - [ ] 14.3 Write property test for semantic heading hierarchy
    - **Property 20: Semantic Heading Hierarchy**
    - **Validates: Requirements 15.5, 16.4**

- [ ] 15. Accessibility enhancements
  - [ ] 15.1 Add image alt text
    - Ensure all images have descriptive alt attributes
    - Add alt text to icons and decorative elements
    - _Requirements: 15.1_
  
  - [ ] 15.2 Implement keyboard navigation
    - Ensure all interactive elements are keyboard accessible
    - Add visible focus indicators
    - Test Tab, Enter, and Space key navigation
    - _Requirements: 15.2_
  
  - [ ] 15.3 Add ARIA labels
    - Add ARIA labels to complex components (gallery, modal)
    - Add ARIA roles and states where appropriate
    - _Requirements: 15.4_
  
  - [ ] 15.4 Write property test for image alt text
    - **Property 16: Image Alternative Text**
    - **Validates: Requirements 15.1**
  
  - [ ] 15.5 Write property test for keyboard navigation
    - **Property 17: Keyboard Navigation**
    - **Validates: Requirements 15.2**
  
  - [ ] 15.6 Write property test for text contrast
    - **Property 18: Text Color Contrast**
    - **Validates: Requirements 15.3**
  
  - [ ] 15.7 Write property test for ARIA labels
    - **Property 19: ARIA Labels for Complex Components**
    - **Validates: Requirements 15.4**
  
  - [ ] 15.8 Run automated accessibility audit
    - Use jest-axe to test for accessibility violations
    - Fix any issues found
    - _Requirements: 15.1, 15.2, 15.3, 15.4, 15.5_

- [ ] 16. Performance optimization
  - [ ] 16.1 Optimize images
    - Convert images to WebP/AVIF with fallbacks
    - Implement responsive image sizing
    - Use Next.js Image component for optimization
    - _Requirements: 14.3_
  
  - [ ] 16.2 Implement lazy loading
    - Add lazy loading to below-the-fold images
    - Use Intersection Observer for custom lazy loading
    - _Requirements: 14.2_
  
  - [ ] 16.3 Optimize bundle size
    - Analyze bundle with webpack-bundle-analyzer
    - Remove unused dependencies
    - Implement code splitting where beneficial
    - _Requirements: 14.4_
  
  - [ ] 16.4 Write property test for image optimization
    - **Property 15: Image Optimization**
    - **Validates: Requirements 14.3**
  
  - [ ] 16.5 Run Lighthouse audit
    - Test performance, accessibility, best practices, SEO
    - Ensure scores are 90+ for all metrics
    - _Requirements: 14.1, 14.2, 14.3, 14.4_

- [ ] 17. Video modal implementation
  - [ ] 17.1 Create VideoModal component
    - Implement modal overlay with backdrop
    - Embed video player (YouTube or custom)
    - Add close button with keyboard support (Escape key)
    - Handle video loading errors gracefully
    - _Requirements: 2.2_
  
  - [ ] 17.2 Integrate VideoModal with secondary CTA
    - Connect "Watch 30s Demo" button to modal
    - Implement modal open/close state management
    - _Requirements: 2.2_
  
  - [ ]* 17.3 Write unit tests for VideoModal
    - Test modal open/close behavior
    - Test keyboard navigation (Escape key)
    - Test error handling
    - _Requirements: 2.2_

- [ ] 18. Error handling and edge cases
  - [ ] 18.1 Implement image loading fallbacks
    - Add placeholder for failed image loads
    - Display fallback icon or text
    - Maintain layout with skeleton loaders
    - _Requirements: 14.2, 14.3_
  
  - [ ] 18.2 Add error boundaries
    - Create React error boundary component
    - Display user-friendly error messages
    - Log errors for debugging
    - _Requirements: All_
  
  - [ ]* 18.3 Write unit tests for error scenarios
    - Test image loading failures
    - Test video modal failures
    - Test navigation failures
    - _Requirements: All_

- [ ] 19. Responsive design testing
  - [ ] 19.1 Test mobile layouts
    - Test on iPhone (Safari)
    - Test on Android (Chrome)
    - Verify touch targets are 44x44px minimum
    - _Requirements: 4.1, 4.4, 4.5_
  
  - [ ] 19.2 Test tablet layouts
    - Test on iPad (Safari)
    - Test on Android tablet (Chrome)
    - Verify layout adapts correctly
    - _Requirements: 4.1, 4.2_
  
  - [ ] 19.3 Test desktop layouts
    - Test on various screen sizes (1024px, 1440px, 1920px)
    - Verify max-width constraints
    - _Requirements: 4.2_
  
  - [ ]* 19.4 Write property test for touch-friendly elements
    - **Property 4: Touch-Friendly Interactive Elements**
    - **Validates: Requirements 4.4**

- [ ] 20. Cross-browser testing
  - [ ]* 20.1 Test on Chrome
    - Verify all features work correctly
    - Test animations and transitions
    - _Requirements: All_
  
  - [ ]* 20.2 Test on Firefox
    - Verify all features work correctly
    - Test animations and transitions
    - _Requirements: All_
  
  - [ ]* 20.3 Test on Safari
    - Verify all features work correctly
    - Test animations and transitions
    - Pay special attention to backdrop-filter support
    - _Requirements: All_
  
  - [ ]* 20.4 Test on Edge
    - Verify all features work correctly
    - Test animations and transitions
    - _Requirements: All_

- [ ] 21. Final integration and polish
  - [ ] 21.1 Review all animations
    - Ensure smooth, subtle animations throughout
    - Verify no flashy or distracting effects
    - Test animation performance on low-end devices
    - _Requirements: 5.5, 13.1, 13.2, 13.3, 13.4_
  
  - [ ] 21.2 Review color palette consistency
    - Verify dark theme throughout (black, charcoal, grey)
    - Check glassmorphism effects on all cards
    - _Requirements: 5.1, 5.2_
  
  - [ ] 21.3 Review typography
    - Verify font families are correct (SF Pro/Inter/Poppins)
    - Check font sizes and weights
    - Ensure consistent spacing
    - _Requirements: 5.3, 5.4_
  
  - [ ]* 21.4 Write property test for dark color palette
    - **Property 5: Dark Color Palette Consistency**
    - **Validates: Requirements 5.1**
  
  - [ ]* 21.5 Write property test for typography
    - **Property 7: Typography Font Family**
    - **Validates: Requirements 5.3**

- [ ] 22. Deployment preparation
  - [ ] 22.1 Configure Vercel deployment
    - Set up Vercel project
    - Configure environment variables
    - Set up automatic deployments from Git
    - _Requirements: All_
  
  - [ ] 22.2 Set up analytics
    - Add Vercel Analytics for Web Vitals
    - Add Google Analytics (optional)
    - _Requirements: 14.1_
  
  - [ ] 22.3 Create production build
    - Run production build locally
    - Verify no build errors
    - Test production build locally
    - _Requirements: All_
  
  - [ ]* 22.4 Final Lighthouse audit
    - Run Lighthouse on production build
    - Ensure all scores are 90+
    - _Requirements: 14.1, 14.2, 14.3, 14.4_

- [ ] 23. Final checkpoint
  - Ensure all tests pass (unit and property tests)
  - Verify all sections render correctly on mobile and desktop
  - Confirm all CTAs navigate to correct destinations
  - Test complete user flow from top to bottom
  - Ask the user if any questions or issues arise

## Notes

- Tasks marked with `*` are optional and can be skipped for faster MVP
- Each task references specific requirements for traceability
- Property tests validate universal correctness properties with 100+ iterations
- Unit tests validate specific examples and edge cases
- Testing is integrated throughout to catch errors early
- Mobile-first approach ensures optimal experience for primary audience (iPhone users)
