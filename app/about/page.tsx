import type { Metadata } from "next";

import Navbar from "@/components/navigation/Navbar";
import About from "@/components/about/About";

export const metadata: Metadata = {
  title: "About Ratzon Digital Products",
  description:
    "Learn about Ratzon Digital Products, a Kenya-based technology business focused on web development, software, digital products, data, and practical technology solutions.",

  alternates: {
    canonical:
      "https://ratzondigitalproducts.co.ke/about",
  },

  openGraph: {
    type: "website",
    locale: "en_KE",
    url: "https://ratzondigitalproducts.co.ke/about",
    siteName: "Ratzon Digital Products",
    title: "About Ratzon Digital Products",
    description:
      "Learn about Ratzon Digital Products and our approach to building useful digital products, software systems, and technology solutions for businesses.",
  },

  twitter: {
    card: "summary_large_image",
    title: "About Ratzon Digital Products",
    description:
      "Learn about Ratzon Digital Products and our approach to building useful digital products and technology solutions.",
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <Navbar />

      <div className="pt-24">
        <About />
      </div>
    </main>
  );
}