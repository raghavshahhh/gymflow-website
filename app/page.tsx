import { HeroSection } from '@/sections/HeroSection';
import { FeatureOverviewSection } from '@/sections/FeatureOverviewSection';
import { DeepFeaturesSection } from '@/sections/DeepFeaturesSection';
import { FinalCTASection } from '@/sections/FinalCTASection';
import { Footer } from '@/sections/Footer';
import { content } from '@/config/content';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold hover:text-gray-300 transition-colors">
              GymFlow
            </Link>
            <div className="hidden md:flex items-center gap-8">
              <Link href="/about" className="text-gray-400 hover:text-white transition-colors text-sm">
                About
              </Link>
              <Link href="/blog" className="text-gray-400 hover:text-white transition-colors text-sm">
                Blog
              </Link>
              <Link href="/contact" className="text-gray-400 hover:text-white transition-colors text-sm">
                Contact
              </Link>
              <Link 
                href="/gymflow.apk" 
                className="px-4 py-2 bg-white text-black rounded-full text-sm font-semibold hover:bg-gray-200 transition-colors"
              >
                Download
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Add padding for fixed nav */}
      <div className="h-16" />
      
      {/* Hero Section - Above the fold */}
      <HeroSection content={content.hero} />
      
      {/* Feature Overview - 4 main features */}
      <FeatureOverviewSection features={content.features} />
      
      {/* Deep Features - Detailed capabilities */}
      <DeepFeaturesSection features={content.deepFeatures} />
      
      {/* Final CTA - Download section */}
      <FinalCTASection content={content.finalCTA} />
      
      {/* Footer */}
      <Footer content={content.footer} />
    </main>
  );
}
