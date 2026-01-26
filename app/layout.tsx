import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GymFlow - AI Fitness & Diet Coach | Built by RagsPro",
  description: "Transform your fitness journey with GymFlow - AI-powered workout generator, smart diet planning, food analysis, and progress tracking. Built by RagsPro for Gen-Z fitness enthusiasts.",
  keywords: [
    "GymFlow",
    "AI fitness app",
    "workout generator",
    "diet planning",
    "TDEE calculator",
    "macro calculator",
    "fitness tracking",
    "AI food analysis",
    "RagsPro",
    "Raghav Shah",
    "gym app",
    "fitness coach",
    "workout planner",
    "meal planner",
    "Indian fitness app",
  ],
  authors: [{ name: "Raghav Shah", url: "https://ragspro.com" }],
  creator: "RagsPro",
  publisher: "RagsPro",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://gymflow.ragspro.com",
    title: "GymFlow - AI Fitness & Diet Coach",
    description: "AI-powered fitness app with personalized workouts, smart diet plans, and progress tracking. Built by RagsPro.",
    siteName: "GymFlow",
    images: [
      {
        url: "https://gymflow.ragspro.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "GymFlow - AI Fitness & Diet Coach",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GymFlow - AI Fitness & Diet Coach",
    description: "AI-powered fitness app with personalized workouts and smart diet plans.",
    images: ["https://gymflow.ragspro.com/og-image.png"],
    creator: "@ragspro",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://gymflow.ragspro.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
