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
      <nav className="fixed top-4 left-0 right-0 z-50 px-6">
        <div className="max-w-6xl mx-auto bg-black/40 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl">
          <div className="px-6 py-4">
            <div className="flex items-center justify-between">
              <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
                <img src="/logo.png" alt="GymFlow Logo" className="h-9 w-9" />
                <span className="text-xl font-bold">GymFlow</span>
              </Link>
              <div className="hidden md:flex items-center gap-6">
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">
                  About
                </Link>
                <Link href="/blog" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">
                  Blog
                </Link>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">
                  Contact
                </Link>
                <a 
                  href="https://gymflow.ragspro.com/downloads/GymFlow-v1.0.apk" 
                  className="px-5 py-2 bg-white text-black rounded-full text-sm font-semibold hover:bg-gray-100 transition-all hover:scale-105"
                  download
                >
                  Download
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Add padding for fixed nav */}
      <div className="h-24" />
      
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
