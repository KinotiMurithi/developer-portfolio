import type { Metadata } from "next";

import Navbar from "@/components/navigation/Navbar";
import Projects from "@/components/projects/Projects";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Explore websites, web applications, custom software, dashboards, and digital products built by Ratzon Digital Products in Kenya.",

  alternates: {
    canonical:
      "https://ratzondigitalproducts.co.ke/portfolio",
  },

  openGraph: {
    type: "website",
    locale: "en_KE",
    url: "https://ratzondigitalproducts.co.ke/portfolio",
    siteName: "Ratzon Digital Products",
    title: "Portfolio | Ratzon Digital Products",
    description:
      "Explore websites, web applications, custom software, dashboards, and digital products built by Ratzon Digital Products.",
  },

  twitter: {
    card: "summary_large_image",
    title: "Portfolio | Ratzon Digital Products",
    description:
      "Explore websites, web applications, custom software, dashboards, and digital products built by Ratzon Digital Products.",
  },
};

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <Navbar />

      <div className="pt-24">
        <Projects />
      </div>
    </main>
  );
}