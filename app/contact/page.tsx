import type { Metadata } from "next";

import Navbar from "@/components/navigation/Navbar";
import Contact from "@/components/contact/Contact";

export const metadata: Metadata = {
  title: "Contact Ratzon Digital Products",
  description:
    "Start a project with Ratzon Digital Products. Contact us about websites, web applications, custom software, digital systems, analytics, AI, and other technology solutions in Kenya.",

  alternates: {
    canonical:
      "https://ratzondigitalproducts.co.ke/contact",
  },

  openGraph: {
    type: "website",
    locale: "en_KE",
    url: "https://ratzondigitalproducts.co.ke/contact",
    siteName: "Ratzon Digital Products",
    title: "Contact Ratzon Digital Products",
    description:
      "Tell us what you want to build, improve, automate, or solve. Start a project with Ratzon Digital Products.",
  },

  twitter: {
    card: "summary_large_image",
    title: "Contact Ratzon Digital Products",
    description:
      "Start a project with Ratzon Digital Products for web development, software, digital systems, analytics, AI, and more.",
  },
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