import type { Metadata } from "next";
import type { ReactNode } from "react";
import { GoogleTagManager } from "@next/third-parties/google";
import { Geist, Geist_Mono } from "next/font/google";
import { JsonLd } from "@/components/json-ld";
import { globalJsonLd } from "@/lib/structured-data";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
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
  // The site is served from the www host; the apex and both http hosts 301 here.
  // metadataBase makes every relative `alternates.canonical` below resolve to
  // www, so Google sees one self-referencing canonical per page instead of
  // guessing which host variant is authoritative.
  metadataBase: new URL("https://www.getfridgeai.com"),
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
  children: ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <GoogleTagManager gtmId="GTM-WLJ4SXP6" />
      <body className="min-h-full flex flex-col">
        <JsonLd data={globalJsonLd} />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
