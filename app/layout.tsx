import type { Metadata } from "next";
import "./globals.css";

import ThemeProvider from "@/components/theme/ThemeProvider";

export const metadata: Metadata = {
  metadataBase: new URL(
    "https://developer-portfolio-mauve-xi.vercel.app"
  ),

  title: {
    default:
      "Ratzon Digital Products | Web Development & Digital Solutions",
    template: "%s | Ratzon Digital Products",
  },

  description:
    "Ratzon Digital Products builds websites, web applications, digital systems, SEO, digital marketing, data analytics, and AI solutions for businesses.",

  keywords: [
    "Ratzon Digital Products",
    "web development Kenya",
    "web development Nairobi",
    "website development Kenya",
    "web applications Kenya",
    "digital marketing Kenya",
    "SEO Kenya",
    "SEO Nairobi",
    "social media management Kenya",
    "data analytics Kenya",
    "AI solutions Kenya",
    "machine learning Kenya",
  ],

  authors: [
    {
      name: "Ratzon Digital Products",
    },
  ],

  creator: "Ratzon Digital Products",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_KE",
    url: "https://developer-portfolio-mauve-xi.vercel.app",
    siteName: "Ratzon Digital Products",
    title:
      "Ratzon Digital Products | Web Development & Digital Solutions",
    description:
      "Web development, digital systems, SEO, digital marketing, data analytics, and AI solutions for businesses.",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Ratzon Digital Products | Web Development & Digital Solutions",
    description:
      "Web development, digital systems, SEO, digital marketing, data analytics, and AI solutions for businesses.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}