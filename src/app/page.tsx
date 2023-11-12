import ParticlesBackground from "@/components/ParticlesBackground";
import About from "@/components/sections/about/About";
import Contact from "@/components/sections/contact/Contact";
import Hero from "@/components/sections/hero/Hero";
import Projects from "@/components/sections/projects/Projects";

export default function Home() {
  return (
    <section className="w-full flex flex-col justify-center items-center gap-24">
      <Hero />
      <About />
      <Projects />
      <Contact />
      <ParticlesBackground />
    </section>
  );
}
