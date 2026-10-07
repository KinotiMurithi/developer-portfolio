import type { Metadata } from "next";
import "./globals.css";

import ThemeProvider from "@/components/theme/ThemeProvider";
import StructuredData from "@/components/seo/StructuredData";

const siteUrl = "https://ratzondigitalproducts.co.ke";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default:
      "Ratzon Digital Products | Web Development & Digital Solutions in Kenya",
    template: "%s | Ratzon Digital Products",
  },

  description:
    "Ratzon Digital Products builds professional websites, web applications, custom software, business systems, dashboards, APIs, data solutions, AI systems, and digital products for businesses in Kenya and beyond.",

  applicationName: "Ratzon Digital Products",

  authors: [
    {
      name: "Ratzon Digital Products",
      url: siteUrl,
    },
  ],

  creator: "Ratzon Digital Products",
  publisher: "Ratzon Digital Products",

  category: "Technology",

  classification:
    "Web Development, Software Development, Digital Products, Technology",

  keywords: [
    "Ratzon Digital Products",
    "web development Kenya",
    "web development Nairobi",
    "website development Kenya",
    "website development Nairobi",
    "web applications Kenya",
    "custom software Kenya",
    "software development Kenya",
    "UI UX design Kenya",
    "backend development Kenya",
    "API development Kenya",
    "business dashboards Kenya",
    "Google Business Profile optimization Kenya",
    "data analytics Kenya",
    "AI solutions Kenya",
    "machine learning Kenya",
    "digital solutions Kenya",
    "technology company Kenya",
  ],

  alternates: {
    canonical: siteUrl,
  },

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
    url: siteUrl,
    siteName: "Ratzon Digital Products",
    title:
      "Ratzon Digital Products | Web Development & Digital Solutions in Kenya",
    description:
      "Web development, web applications, custom software, business systems, dashboards, APIs, data solutions, AI, and digital products for businesses in Kenya and beyond.",
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Ratzon Digital Products — Web Development & Digital Solutions",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Ratzon Digital Products | Web Development & Digital Solutions in Kenya",
    description:
      "We build websites, web applications, custom software, business systems, data solutions, and AI-powered digital products.",
    images: [`${siteUrl}/og-image.png`],
  },

  icons: {
    icon: "/ratzon-logo.png",
    shortcut: "/ratzon-logo.png",
    apple: "/ratzon-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-KE" suppressHydrationWarning>
      <body>
        <StructuredData />
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}