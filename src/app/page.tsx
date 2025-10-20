import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import { Services } from "@/components/Services";
import { Contact } from "@/components/Contact";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Projects />
      <About />
      <Testimonials />
      <Services />
      <Contact />
    </main>
  );
}
