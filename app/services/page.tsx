import type { Metadata } from "next";

import Navbar from "@/components/navigation/Navbar";
import Services from "@/components/services/Services";

export const metadata: Metadata = {
  title: "Web Development & Digital Solutions in Kenya",
  description:
    "Discover professional web development, custom software, web applications, UI/UX design, backend APIs, dashboards, data analytics, and AI solutions for businesses in Kenya.",

  alternates: {
    canonical: "https://ratzondigitalproducts.co.ke/services",
  },

  openGraph: {
    type: "website",
    locale: "en_KE",
    url: "https://ratzondigitalproducts.co.ke/services",
    siteName: "Ratzon Digital Products",
    title:
      "Web Development & Digital Solutions in Kenya | Ratzon Digital Products",
    description:
      "Explore professional web development, custom software, UI/UX design, APIs, dashboards, analytics, and AI solutions for Kenyan businesses.",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Web Development & Digital Solutions in Kenya | Ratzon Digital Products",
    description:
      "Professional web development, custom software, UI/UX, APIs, dashboards, analytics, and AI solutions for businesses in Kenya.",
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
