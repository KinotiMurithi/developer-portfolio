import type { Metadata } from "next";

import Navbar from "@/components/navigation/Navbar";
import Process from "@/components/process/Process";

export const metadata: Metadata = {
  title: "Our Process",
  description:
    "Discover how Ratzon Digital Products takes digital projects from discovery and design through development and launch.",
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