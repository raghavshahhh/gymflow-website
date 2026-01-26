import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service - GymFlow | User Agreement",
  description: "GymFlow terms of service and user agreement. Read our terms before using the app. Built by RagsPro.",
  alternates: {
    canonical: "https://gymflow.ragspro.com/terms",
  },
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <header className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <img src="/logo.png" alt="GymFlow Logo" className="h-10 w-10" />
            <span className="text-2xl font-bold">GymFlow</span>
          </Link>
        </div>
      </header>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Terms of Service</h1>
          <p className="text-gray-400 mb-12">Last updated: January 2025</p>

          <div className="space-y-12 text-gray-300">
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Agreement to Terms</h2>
              <p className="leading-relaxed">
                By accessing or using GymFlow, you agree to be bound by these Terms of Service. 
                If you disagree with any part of these terms, you may not use our app.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Use License</h2>
              <p className="leading-relaxed mb-4">
                GymFlow grants you a personal, non-transferable, non-exclusive license to use the app for personal fitness purposes.
              </p>
              <p className="leading-relaxed font-semibold text-white mb-2">You may not:</p>
              <ul className="space-y-2 list-disc list-inside leading-relaxed">
                <li>Modify or copy the app materials</li>
                <li>Use the materials for commercial purposes</li>
                <li>Reverse engineer or decompile the app</li>
                <li>Remove any copyright or proprietary notations</li>
                <li>Transfer the materials to another person</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">User Accounts</h2>
              <p className="leading-relaxed mb-4">
                When you create an account with us, you must provide accurate and complete information. 
                You are responsible for:
              </p>
              <ul className="space-y-2 list-disc list-inside leading-relaxed">
                <li>Maintaining the security of your account</li>
                <li>All activities that occur under your account</li>
                <li>Notifying us immediately of any unauthorized use</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Health Disclaimer</h2>
              <p className="leading-relaxed mb-4 text-yellow-400 font-semibold">
                Important: GymFlow is not a substitute for professional medical advice.
              </p>
              <ul className="space-y-2 list-disc list-inside leading-relaxed">
                <li>Always consult with a healthcare provider before starting any fitness program</li>
                <li>GymFlow provides general fitness guidance, not medical advice</li>
                <li>We are not responsible for injuries or health issues arising from app use</li>
                <li>Stop exercising and seek medical attention if you experience pain or discomfort</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">AI-Generated Content</h2>
              <p className="leading-relaxed">
                GymFlow uses AI to generate workout plans and analyze food photos. While we strive for accuracy:
              </p>
              <ul className="space-y-2 list-disc list-inside leading-relaxed mt-4">
                <li>AI recommendations are general guidance, not personalized medical advice</li>
                <li>Nutritional information from food photos may not be 100% accurate</li>
                <li>Always verify important dietary information with reliable sources</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Intellectual Property</h2>
              <p className="leading-relaxed">
                The app and its original content, features, and functionality are owned by RagsPro and are 
                protected by international copyright, trademark, and other intellectual property laws.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">User Content</h2>
              <p className="leading-relaxed mb-4">
                You retain ownership of any content you submit to GymFlow (workout logs, food photos, etc.). 
                By submitting content, you grant us a license to:
              </p>
              <ul className="space-y-2 list-disc list-inside leading-relaxed">
                <li>Store and process your content to provide app services</li>
                <li>Use anonymized data to improve AI models</li>
                <li>Display your content back to you within the app</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Prohibited Uses</h2>
              <p className="leading-relaxed mb-4">You agree not to use GymFlow:</p>
              <ul className="space-y-2 list-disc list-inside leading-relaxed">
                <li>In any way that violates laws or regulations</li>
                <li>To transmit harmful or malicious code</li>
                <li>To impersonate or attempt to impersonate RagsPro or other users</li>
                <li>To interfere with or disrupt the app's functionality</li>
                <li>To collect or track personal information of other users</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Termination</h2>
              <p className="leading-relaxed">
                We may terminate or suspend your account immediately, without prior notice, for any breach 
                of these Terms. Upon termination, your right to use the app will cease immediately.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Limitation of Liability</h2>
              <p className="leading-relaxed">
                In no event shall RagsPro, nor its directors, employees, or agents, be liable for any 
                indirect, incidental, special, consequential, or punitive damages arising from your use 
                of GymFlow.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Changes to Terms</h2>
              <p className="leading-relaxed">
                We reserve the right to modify these terms at any time. We will notify users of any 
                material changes via the app or email. Continued use after changes constitutes acceptance.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Governing Law</h2>
              <p className="leading-relaxed">
                These Terms shall be governed by and construed in accordance with the laws of India, 
                without regard to its conflict of law provisions.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
              <p className="leading-relaxed">
                Questions about these Terms? Contact us at:
              </p>
              <p className="mt-4">
                <strong className="text-white">Email:</strong>{" "}
                <a href="mailto:legal@ragspro.com" className="text-blue-400 hover:text-blue-300">
                  legal@ragspro.com
                </a>
              </p>
              <p className="mt-2">
                <strong className="text-white">Website:</strong>{" "}
                <a href="https://ragspro.com" className="text-blue-400 hover:text-blue-300" target="_blank" rel="noopener noreferrer">
                  ragspro.com
                </a>
              </p>
            </div>
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
              <Link href="/contact" className="text-gray-400 hover:text-white transition-colors text-sm">Contact</Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
