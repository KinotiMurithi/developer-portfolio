import type { Metadata } from "next";

import Navbar from "@/components/navigation/Navbar";
import Services from "@/components/services/Services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Web development, digital marketing, SEO, social media, data analytics, and AI solutions from Ratzon Digital Products.",
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