import Hero from "@/components/hero/Hero";
import CursorGlow from "@/components/hero/CursorGlow";
import Navbar from "@/components/navigation/Navbar";
import Services from "@/components/services/Services";
import Projects from "@/components/projects/Projects";

export default function Home() {
  return (
    <main>
      <CursorGlow />

      <Navbar />

      <Hero />

      <Services />

      <Projects />
    </main>
  );
}