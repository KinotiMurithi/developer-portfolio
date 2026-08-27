import Hero from "@/components/hero/Hero";
import CursorGlow from "@/components/hero/CursorGlow";
import Navbar from "@/components/navigation/Navbar";
import Services from "@/components/services/Services";
import Projects from "@/components/projects/Projects";
import About from "@/components/about/About";
import Contact from "@/components/contact/Contact";

export default function Home() {
  return (
    <main>
      <CursorGlow />

      <Navbar />

      <Hero />

      <Services />

      <Projects />

      <About />
      <Contact />
    </main>
  );
}