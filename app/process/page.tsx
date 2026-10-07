import type { Metadata } from "next";

import Navbar from "@/components/navigation/Navbar";
import Process from "@/components/process/Process";

export const metadata: Metadata = {
  title: "Our Process",
  description:
    "See how Ratzon Digital Products takes projects from discovery and design through development, launch, and continuous growth.",

  alternates: {
    canonical:
      "https://ratzondigitalproducts.co.ke/process",
  },

  openGraph: {
    type: "website",
    locale: "en_KE",
    url: "https://ratzondigitalproducts.co.ke/process",
    siteName: "Ratzon Digital Products",
    title: "Our Process | Ratzon Digital Products",
    description:
      "Discover how we turn business problems into useful, scalable digital products through discovery, design, development, launch, and growth.",
  },

  twitter: {
    card: "summary_large_image",
    title: "Our Process | Ratzon Digital Products",
    description:
      "Discover how we turn business problems into useful, scalable digital products.",
  },
};

export default function ProcessPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <Navbar />

      <div className="pt-24">
        <Process />
      </div>
    </main>
  );
}