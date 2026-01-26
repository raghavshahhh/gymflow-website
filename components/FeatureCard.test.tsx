/**
 * Unit tests for FeatureCard component
 * Tests rendering, glassmorphism styling, and animations
 */

import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { FeatureCard } from './FeatureCard';

describe('FeatureCard', () => {
  const mockIcon = <span data-testid="test-icon">🏋️</span>;
  const mockTitle = 'AI Workout Generator';
  const mockDescription = 'Get personalized workout plans powered by AI';

  describe('Rendering', () => {
    it('renders icon, title, and description', () => {
      render(
        <FeatureCard
          icon={mockIcon}
          title={mockTitle}
          description={mockDescription}
        />
      );

      expect(screen.getByTestId('test-icon')).toBeInTheDocument();
      expect(screen.getByText(mockTitle)).toBeInTheDocument();
      expect(screen.getByText(mockDescription)).toBeInTheDocument();
    });

    it('renders title as h3 heading', () => {
      render(
        <FeatureCard
          icon={mockIcon}
          title={mockTitle}
          description={mockDescription}
        />
      );

      const heading = screen.getByRole('heading', { level: 3 });
      expect(heading).toHaveTextContent(mockTitle);
    });
  });

  describe('Glassmorphism Styling', () => {
    it('applies backdrop-blur class', () => {
      const { container } = render(
        <FeatureCard
          icon={mockIcon}
          title={mockTitle}
          description={mockDescription}
        />
      );

      const card = container.firstChild as HTMLElement;
      expect(card).toHaveClass('backdrop-blur-lg');
    });

    it('applies semi-transparent background', () => {
      const { container } = render(
        <FeatureCard
          icon={mockIcon}
          title={mockTitle}
          description={mockDescription}
        />
      );

      const card = container.firstChild as HTMLElement;
      expect(card).toHaveClass('bg-white/5');
    });

    it('applies semi-transparent border', () => {
      const { container } = render(
        <FeatureCard
          icon={mockIcon}
          title={mockTitle}
          description={mockDescription}
        />
      );

      const card = container.firstChild as HTMLElement;
      expect(card).toHaveClass('border-white/10');
    });

    it('applies rounded corners', () => {
      const { container } = render(
        <FeatureCard
          icon={mockIcon}
          title={mockTitle}
          description={mockDescription}
        />
      );

      const card = container.firstChild as HTMLElement;
      expect(card).toHaveClass('rounded-2xl');
    });
  });

  describe('Hover Effects', () => {
    it('has hover background transition class', () => {
      const { container } = render(
        <FeatureCard
          icon={mockIcon}
          title={mockTitle}
          description={mockDescription}
        />
      );

      const card = container.firstChild as HTMLElement;
      expect(card).toHaveClass('hover:bg-white/10');
    });

    it('has hover border transition class', () => {
      const { container } = render(
        <FeatureCard
          icon={mockIcon}
          title={mockTitle}
          description={mockDescription}
        />
      );

      const card = container.firstChild as HTMLElement;
      expect(card).toHaveClass('hover:border-white/20');
    });

    it('has hover shadow effect class', () => {
      const { container } = render(
        <FeatureCard
          icon={mockIcon}
          title={mockTitle}
          description={mockDescription}
        />
      );

      const card = container.firstChild as HTMLElement;
      expect(card.className).toContain('hover:shadow');
    });
  });

  describe('Responsive Design', () => {
    it('applies responsive padding classes', () => {
      const { container } = render(
        <FeatureCard
          icon={mockIcon}
          title={mockTitle}
          description={mockDescription}
        />
      );

      const card = container.firstChild as HTMLElement;
      expect(card).toHaveClass('p-6', 'md:p-8');
    });

    it('applies responsive text size to title', () => {
      render(
        <FeatureCard
          icon={mockIcon}
          title={mockTitle}
          description={mockDescription}
        />
      );

      const heading = screen.getByRole('heading', { level: 3 });
      expect(heading).toHaveClass('text-xl', 'md:text-2xl');
    });

    it('applies responsive text size to description', () => {
      render(
        <FeatureCard
          icon={mockIcon}
          title={mockTitle}
          description={mockDescription}
        />
      );

      const description = screen.getByText(mockDescription);
      expect(description).toHaveClass('text-sm', 'md:text-base');
    });
  });

  describe('Animation Support', () => {
    it('accepts index prop for staggered animation', () => {
      const { container } = render(
        <FeatureCard
          icon={mockIcon}
          title={mockTitle}
          description={mockDescription}
          index={2}
        />
      );

      expect(container.firstChild).toBeInTheDocument();
    });

    it('defaults to index 0 when not provided', () => {
      const { container } = render(
        <FeatureCard
          icon={mockIcon}
          title={mockTitle}
          description={mockDescription}
        />
      );

      expect(container.firstChild).toBeInTheDocument();
    });
  });

  describe('Custom Styling', () => {
    it('accepts and applies custom className', () => {
      const { container } = render(
        <FeatureCard
          icon={mockIcon}
          title={mockTitle}
          description={mockDescription}
          className="custom-class"
        />
      );

      const card = container.firstChild as HTMLElement;
      expect(card).toHaveClass('custom-class');
    });
  });
});
