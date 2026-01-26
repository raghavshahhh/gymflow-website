import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy - GymFlow | Your Data, Your Control",
  description: "GymFlow privacy policy. Learn how we protect your data with offline-first architecture and privacy-focused design. Built by RagsPro.",
  alternates: {
    canonical: "https://gymflow.ragspro.com/privacy",
  },
};

export default function PrivacyPage() {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Privacy Policy</h1>
          <p className="text-gray-400 mb-12">Last updated: January 2025</p>

          <div className="space-y-12 text-gray-300">
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Your Privacy Matters</h2>
              <p className="leading-relaxed">
                At GymFlow, we believe your fitness data is personal and should stay that way. 
                This privacy policy explains how we collect, use, and protect your information.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Information We Collect</h2>
              <ul className="space-y-3 list-disc list-inside leading-relaxed">
                <li><strong className="text-white">Profile Information:</strong> Name, age, weight, height, fitness goals</li>
                <li><strong className="text-white">Workout Data:</strong> Exercise history, workout preferences, progress tracking</li>
                <li><strong className="text-white">Diet Information:</strong> Food logs, calorie intake, macro tracking</li>
                <li><strong className="text-white">Device Information:</strong> Device type, OS version, app version</li>
                <li><strong className="text-white">Usage Data:</strong> App interactions, feature usage, crash reports</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">How We Use Your Data</h2>
              <ul className="space-y-3 list-disc list-inside leading-relaxed">
                <li>Generate personalized workout plans using AI</li>
                <li>Calculate TDEE and macro recommendations</li>
                <li>Track your fitness progress and streaks</li>
                <li>Analyze food photos for nutritional information</li>
                <li>Improve app performance and fix bugs</li>
                <li>Send important updates and notifications</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Offline-First Architecture</h2>
              <p className="leading-relaxed mb-4">
                GymFlow is designed with privacy in mind. Most of your data is stored locally on your device:
              </p>
              <ul className="space-y-3 list-disc list-inside leading-relaxed">
                <li>Workout history and exercise data stored locally</li>
                <li>Diet logs and food analysis cached on device</li>
                <li>Progress tracking data synced only when you're online</li>
                <li>AI processing happens on secure servers, not stored permanently</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Data Security</h2>
              <p className="leading-relaxed mb-4">
                We implement industry-standard security measures:
              </p>
              <ul className="space-y-3 list-disc list-inside leading-relaxed">
                <li>End-to-end encryption for data transmission</li>
                <li>Secure Firebase backend with authentication</li>
                <li>Regular security audits and updates</li>
                <li>No third-party data selling or sharing</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Third-Party Services</h2>
              <p className="leading-relaxed mb-4">
                GymFlow uses the following third-party services:
              </p>
              <ul className="space-y-3 list-disc list-inside leading-relaxed">
                <li><strong className="text-white">Firebase:</strong> Authentication, database, and analytics</li>
                <li><strong className="text-white">Google Gemini AI:</strong> Food photo analysis</li>
                <li><strong className="text-white">Crash Analytics:</strong> Bug tracking and performance monitoring</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Your Rights</h2>
              <p className="leading-relaxed mb-4">You have the right to:</p>
              <ul className="space-y-3 list-disc list-inside leading-relaxed">
                <li>Access your personal data</li>
                <li>Request data deletion</li>
                <li>Export your workout and diet history</li>
                <li>Opt-out of analytics tracking</li>
                <li>Delete your account at any time</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Children's Privacy</h2>
              <p className="leading-relaxed">
                GymFlow is not intended for users under 13 years of age. We do not knowingly collect 
                personal information from children under 13.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Changes to This Policy</h2>
              <p className="leading-relaxed">
                We may update this privacy policy from time to time. We will notify you of any changes 
                by posting the new policy on this page and updating the "Last updated" date.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
              <p className="leading-relaxed">
                If you have questions about this privacy policy, please contact us at:
              </p>
              <p className="mt-4">
                <strong className="text-white">Email:</strong>{" "}
                <a href="mailto:privacy@ragspro.com" className="text-blue-400 hover:text-blue-300">
                  privacy@ragspro.com
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
              <Link href="/terms" className="text-gray-400 hover:text-white transition-colors text-sm">Terms</Link>
              <Link href="/contact" className="text-gray-400 hover:text-white transition-colors text-sm">Contact</Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
