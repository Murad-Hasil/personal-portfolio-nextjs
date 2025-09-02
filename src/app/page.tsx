import Hero from "@/components/hero-section";
import Projects from "@/components/project-section";
import About from "@/components/about-section";
import Testimonials from "@/components/Testimonials";
import { Services } from "@/components/services-section";
import { Contact } from "@/components/contact-section";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Projects />
      <About />
      <Testimonials />
      <Services />
      <Contact />
    </>
  );
}