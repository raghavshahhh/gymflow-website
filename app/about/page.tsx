import type { Metadata } from "next";
import Link from "next/link";
import { CTAButton } from "@/components/CTAButton";

export const metadata: Metadata = {
  title: "About GymFlow - AI-Powered Fitness Revolution | RagsPro",
  description: "Learn about GymFlow, the AI-powered fitness app built by RagsPro. Discover how we're revolutionizing fitness for Gen-Z with personalized workouts and smart diet planning.",
  alternates: {
    canonical: "https://gymflow.ragspro.com/about",
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <Link href="/" className="text-2xl font-bold hover:text-gray-300 transition-colors">
            GymFlow
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 md:py-32">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            About GymFlow
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed">
            The AI-powered fitness revolution built for Gen-Z
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-zinc-950">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8">Our Story</h2>
          <div className="space-y-6 text-gray-300 leading-relaxed">
            <p>
              GymFlow was born from a simple frustration: existing fitness apps were either too complicated, 
              too generic, or didn't understand the needs of Indian users. As someone passionate about both 
              fitness and technology, I wanted to create something different.
            </p>
            <p>
              Built by <strong className="text-white">Raghav Shah</strong>, founder of <strong className="text-white">RagsPro</strong>, 
              GymFlow combines cutting-edge AI technology with a clean, Apple-inspired design philosophy. 
              We believe fitness should be accessible, personalized, and actually enjoyable.
            </p>
            <p>
              What makes GymFlow special? It's not just another workout app. It's your AI fitness coach that 
              understands your goals, adapts to your progress, and works offline when you need it most. 
              From the 600+ exercise database to AI-powered food analysis, every feature is designed with 
              real users in mind.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8">Our Mission</h2>
          <div className="space-y-6 text-gray-300 leading-relaxed">
            <p>
              We're on a mission to make fitness simple, personalized, and accessible for everyone. 
              No more guessing, no more generic plans, no more confusion.
            </p>
            <p className="text-xl font-semibold text-white">
              Train smarter. Stay consistent. Get results.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-zinc-950">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12">What We Stand For</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
              <h3 className="text-xl font-semibold mb-3">AI-Powered Personalization</h3>
              <p className="text-gray-400">
                Every user is unique. Our AI creates workout and diet plans tailored specifically to your goals, 
                experience level, and preferences.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
              <h3 className="text-xl font-semibold mb-3">Privacy First</h3>
              <p className="text-gray-400">
                Your data is yours. We prioritize privacy and security in every feature we build. 
                Offline-first architecture means you're always in control.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
              <h3 className="text-xl font-semibold mb-3">Built for India</h3>
              <p className="text-gray-400">
                From vegetarian meal plans to Hindi language support, GymFlow understands Indian users 
                and their unique fitness needs.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
              <h3 className="text-xl font-semibold mb-3">Clean & Simple</h3>
              <p className="text-gray-400">
                No clutter, no distractions. Just a beautiful, Apple-inspired interface that makes 
                fitness tracking actually enjoyable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8">Built by RagsPro</h2>
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
            <p className="text-gray-300 leading-relaxed mb-6">
              <strong className="text-white">RagsPro</strong> is a digital agency founded by Raghav Shah, 
              specializing in building premium mobile and web applications. We combine cutting-edge technology 
              with thoughtful design to create products that people love to use.
            </p>
            <p className="text-gray-300 leading-relaxed mb-6">
              GymFlow is our flagship fitness product, showcasing our expertise in AI integration, 
              mobile development, and user experience design.
            </p>
            <div className="flex gap-4">
              <CTAButton
                label="Visit RagsPro"
                href="https://ragspro.com"
                variant="primary"
              />
              <CTAButton
                label="Contact Us"
                href="mailto:ragsproai@gmail.com"
                variant="secondary"
              />
            </div>
            <p className="text-gray-400 mt-4">
              📧 ragsproai@gmail.com | 📞 +91 88260 73013
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-gray-400 text-sm">
              © GymFlow by RagsPro
            </div>
            <div className="flex gap-6">
              <Link href="/" className="text-gray-400 hover:text-white transition-colors text-sm">
                Home
              </Link>
              <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors text-sm">
                Privacy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white transition-colors text-sm">
                Terms
              </Link>
              <Link href="/contact" className="text-gray-400 hover:text-white transition-colors text-sm">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
