import type { Metadata } from "next";

import Hero from "@/components/hero/Hero";
import Navbar from "@/components/navigation/Navbar";
import CursorGlow from "@/components/hero/CursorGlow";

const siteUrl = "https://ratzondigitalproducts.co.ke";

export const metadata: Metadata = {
  title: "Web Development & Digital Solutions in Kenya",

  description:
    "Ratzon Digital Products builds professional websites, web applications, custom software, business systems, dashboards, APIs, and digital products for businesses in Kenya and beyond.",

  keywords: [
    "web development Kenya",
    "web development Nairobi",
    "website development Kenya",
    "software development Kenya",
    "custom software Kenya",
    "web applications Kenya",
    "digital solutions Kenya",
    "technology company Kenya",
    "Ratzon Digital Products",
  ],

  alternates: {
    canonical: siteUrl,
  },

  openGraph: {
    type: "website",
    locale: "en_KE",
    url: siteUrl,
    siteName: "Ratzon Digital Products",
    title:
      "Web Development & Digital Solutions in Kenya | Ratzon Digital Products",
    description:
      "Professional websites, web applications, custom software, business systems, dashboards, APIs, and digital products for businesses in Kenya and beyond.",
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Ratzon Digital Products — Web Development & Digital Solutions in Kenya",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Web Development & Digital Solutions in Kenya | Ratzon Digital Products",
    description:
      "Professional websites, web applications, custom software, business systems, dashboards, APIs, and digital products for businesses in Kenya and beyond.",
    images: [`${siteUrl}/og-image.png`],
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <CursorGlow />
      <Navbar />
      <Hero />
    </main>
  );
}