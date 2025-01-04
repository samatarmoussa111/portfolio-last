import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Projects } from "@/components/projects";
import { Skills } from "@/components/skills";
import { Blog } from "@/components/blog";
import { Contact } from "@/components/contact";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Blog />
      <Contact />
    </div>
  );
}
