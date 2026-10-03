import type { Metadata } from "next";

import Hero from "@/components/hero/Hero";
import Navbar from "@/components/navigation/Navbar";
import CursorGlow from "@/components/hero/CursorGlow";

export const metadata: Metadata = {
  title: "Digital Products & Growth Solutions",
  description:
    "Ratzon Digital Products builds websites, web applications, digital systems, and growth solutions for businesses.",
};

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <CursorGlow />
      <Navbar />
      <Hero />
    </main>
  );
}