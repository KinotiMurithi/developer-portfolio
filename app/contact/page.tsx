import type { Metadata } from "next";

import Navbar from "@/components/navigation/Navbar";
import Contact from "@/components/contact/Contact";

export const metadata: Metadata = {
  title: "Start a Project",
  description:
    "Tell Ratzon Digital Products about your website, application, digital marketing, SEO, analytics, or AI project.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <Navbar />
      <div className="pt-24">
        <Contact />
      </div>
    </main>
  );
}