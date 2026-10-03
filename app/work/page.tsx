import type { Metadata } from "next";

import Navbar from "@/components/navigation/Navbar";
import Projects from "@/components/projects/Projects";

export const metadata: Metadata = {
  title: "Our Work",
  description:
    "Explore digital products, software systems, and web applications built by Ratzon Digital Products.",
};

export default function WorkPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <Navbar />
      <div className="pt-24">
        <Projects />
      </div>
    </main>
  );
}