import type { Metadata } from "next";

import Navbar from "@/components/navigation/Navbar";
import About from "@/components/about/About";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Ratzon Digital Products and the people behind its digital products, technology, and growth solutions.",
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