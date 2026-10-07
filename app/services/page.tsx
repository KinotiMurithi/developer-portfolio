import type { Metadata } from "next";

import Navbar from "@/components/navigation/Navbar";
import Services from "@/components/services/Services";

export const metadata: Metadata = {
  title: "Web Development & Digital Solutions",
  description:
    "Explore web development, web applications, custom software, UI/UX design, backend APIs, dashboards, Google Business Profile optimization, data analytics, and AI solutions from Ratzon Digital Products in Kenya.",

  alternates: {
    canonical:
      "https://ratzondigitalproducts.co.ke/services",
  },

  openGraph: {
    type: "website",
    locale: "en_KE",
    url: "https://ratzondigitalproducts.co.ke/services",
    siteName: "Ratzon Digital Products",
    title:
      "Web Development & Digital Solutions | Ratzon Digital Products",
    description:
      "Professional web development, custom software, UI/UX, APIs, dashboards, analytics, Google Business Profile optimization, and AI solutions for businesses.",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Web Development & Digital Solutions | Ratzon Digital Products",
    description:
      "Professional web development, custom software, UI/UX, APIs, dashboards, analytics, and AI solutions for businesses.",
  },
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <Navbar />

      <div className="pt-24">
        <Services />
      </div>
    </main>
  );
}