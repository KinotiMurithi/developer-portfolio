import type { Metadata } from "next";
import "./globals.css";

import ThemeProvider from "@/components/theme/ThemeProvider";
import StructuredData from "@/components/seo/StructuredData";
import Footer from "@/components/layout/Footer";


const siteUrl = "https://ratzondigitalproducts.co.ke";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default:
      "Ratzon Digital Products | IT Services, Software & Digital Solutions in Kenya",
    template: "%s | Ratzon Digital Products",
  },

  description:
    "Ratzon Digital Products provides IT services, software development, web applications, cybersecurity, cloud solutions, IT support, network services, data analytics, and AI solutions for businesses in Kenya and beyond.",

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
    "IT Services, Software Development, Cybersecurity, Cloud Computing, Digital Solutions",

  keywords: [
    "Ratzon Digital Products",
    "IT services Kenya",
    "IT support Kenya",
    "IT services Nairobi",
    "web development Kenya",
    "web development Nairobi",
    "website development Kenya",
    "software development Kenya",
    "custom software Kenya",
    "web applications Kenya",
    "UI UX design Kenya",
    "backend development Kenya",
    "API development Kenya",
    "cybersecurity services Kenya",
    "data protection Kenya",
    "data backup and recovery Kenya",
    "cloud services Kenya",
    "cloud migration Kenya",
    "Microsoft 365 support Kenya",
    "Google Workspace support Kenya",
    "network installation Kenya",
    "network support Kenya",
    "technical support Kenya",
    "business software Kenya",
    "SaaS management Kenya",
    "CRM and ERP solutions Kenya",
    "business dashboards Kenya",
    "Google Business Profile optimization Kenya",
    "data analytics Kenya",
    "AI solutions Kenya",
    "machine learning Kenya",
    "digital solutions Kenya",
    "technology company Kenya",
  ],

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
      "Ratzon Digital Products | IT Services, Software & Digital Solutions in Kenya",
    description:
      "IT services, software development, cybersecurity, cloud solutions, technical support, network services, data analytics, and AI solutions for businesses in Kenya and beyond.",
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Ratzon Digital Products — IT Services & Digital Solutions",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Ratzon Digital Products | IT Services & Digital Solutions in Kenya",
    description:
      "Software development, cybersecurity, cloud services, IT support, network solutions, data analytics, and AI-powered digital products.",
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
        <ThemeProvider>
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
