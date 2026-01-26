import type { Metadata } from "next";
import Link from "next/link";
import { CTAButton } from "@/components/CTAButton";

export const metadata: Metadata = {
  title: "Contact Us - GymFlow | Get in Touch with RagsPro",
  description: "Contact GymFlow team for support, partnerships, or app development inquiries. Built by RagsPro - Raghav Shah.",
  alternates: {
    canonical: "https://gymflow.ragspro.com/contact",
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <header className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <Link href="/" className="text-2xl font-bold hover:text-gray-300 transition-colors">
            GymFlow
          </Link>
        </div>
      </header>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Get in Touch</h1>
          <p className="text-xl text-gray-400 mb-16">
            Have questions? Want to build an app? Let's talk.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Support */}
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
              <div className="text-4xl mb-4">💬</div>
              <h2 className="text-2xl font-bold mb-3">Support</h2>
              <p className="text-gray-400 mb-6">
                Need help with GymFlow? Have a bug to report or feature request?
              </p>
              <a 
                href="mailto:support@ragspro.com"
                className="text-blue-400 hover:text-blue-300 font-semibold"
              >
                support@ragspro.com
              </a>
            </div>

            {/* Business */}
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
              <div className="text-4xl mb-4">🤝</div>
              <h2 className="text-2xl font-bold mb-3">Business</h2>
              <p className="text-gray-400 mb-6">
                Interested in partnerships, sponsorships, or collaborations?
              </p>
              <a 
                href="mailto:business@ragspro.com"
                className="text-blue-400 hover:text-blue-300 font-semibold"
              >
                business@ragspro.com
              </a>
            </div>

            {/* App Development */}
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
              <div className="text-4xl mb-4">💻</div>
              <h2 className="text-2xl font-bold mb-3">Build Your App</h2>
              <p className="text-gray-400 mb-6">
                Want an app like GymFlow? RagsPro builds premium mobile and web apps.
              </p>
              <a 
                href="mailto:hello@ragspro.com"
                className="text-blue-400 hover:text-blue-300 font-semibold"
              >
                hello@ragspro.com
              </a>
            </div>

            {/* Social */}
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
              <div className="text-4xl mb-4">🌐</div>
              <h2 className="text-2xl font-bold mb-3">Connect</h2>
              <p className="text-gray-400 mb-6">
                Follow us for updates, fitness tips, and behind-the-scenes content.
              </p>
              <div className="flex flex-col gap-2">
                <a 
                  href="https://twitter.com/ragspro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300"
                >
                  Twitter/X
                </a>
                <a 
                  href="https://instagram.com/ragspro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300"
                >
                  Instagram
                </a>
                <a 
                  href="https://linkedin.com/company/ragspro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          {/* Founder Section */}
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-8 md:p-12 border border-white/10">
            <h2 className="text-3xl font-bold mb-6">Meet the Founder</h2>
            <div className="space-y-4 text-gray-300 leading-relaxed mb-8">
              <p>
                <strong className="text-white">Raghav Shah</strong> is the founder of RagsPro, 
                a digital agency specializing in premium mobile and web applications. With a passion 
                for fitness and technology, Raghav built GymFlow to solve real problems he faced 
                as a fitness enthusiast.
              </p>
              <p>
                RagsPro has helped numerous startups and businesses bring their app ideas to life, 
                combining cutting-edge technology with thoughtful design. From AI integration to 
                beautiful user interfaces, we build products that people love.
              </p>
              <p className="text-xl font-semibold text-white">
                Have an app idea? Let's build it together.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <CTAButton
                label="Visit RagsPro"
                href="https://ragspro.com"
                variant="primary"
              />
              <CTAButton
                label="Schedule a Call"
                href="mailto:hello@ragspro.com"
                variant="secondary"
              />
            </div>
          </div>

          {/* Office Info */}
          <div className="mt-16 text-center">
            <h3 className="text-xl font-semibold mb-4">RagsPro</h3>
            <p className="text-gray-400">
              Building premium apps for the next generation
            </p>
            <p className="text-gray-500 mt-2">
              Based in India • Serving clients worldwide
            </p>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-gray-400 text-sm">© GymFlow by RagsPro</div>
            <div className="flex gap-6">
              <Link href="/" className="text-gray-400 hover:text-white transition-colors text-sm">Home</Link>
              <Link href="/about" className="text-gray-400 hover:text-white transition-colors text-sm">About</Link>
              <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors text-sm">Privacy</Link>
              <Link href="/terms" className="text-gray-400 hover:text-white transition-colors text-sm">Terms</Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
