import type { Metadata } from "next";
import { GoogleTagManager } from "@next/third-parties/google";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fridge AI - Turn Fridge Photos into Dinner with AI",
  description: "Transform photos of your fridge into personalized recipes, nutrition info, and meal plans in seconds. Save time, reduce food waste, and eat healthier with AI-powered recipe suggestions.",
  keywords: "fridge AI, recipe app, meal planning, cooking app, food scanner, ingredient detection, nutrition tracker, dinner ideas, lunch planner, healthy recipes, keto recipes, vegan recipes, vegetarian recipes, gluten-free recipes, meal prep, food waste reduction, smart cooking, artificial intelligence food",
  authors: [{ name: "Fridge AI" }],
  openGraph: {
    title: "Fridge AI - Turn Fridge Photos into Dinner with AI",
    description: "Transform photos of your fridge into personalized recipes, nutrition info, and meal plans in seconds.",
    url: "https://getfridgeai.com",
    siteName: "Fridge AI",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Fridge AI - Turn Fridge Photos into Dinner with AI",
    description: "Transform photos of your fridge into personalized recipes, nutrition info, and meal plans in seconds.",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <GoogleTagManager gtmId="GTM-WLJ4SXP6" />
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
