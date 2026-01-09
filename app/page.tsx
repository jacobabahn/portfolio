import { Hero } from "@/components/hero";
import { Experience } from "@/components/experience";
import { Projects } from "@/components/projects";
import { Blog } from "@/components/blog";
import { Research } from "@/components/research";

export default function Page() {
  return (
    <div className="min-h-screen">
      <main className="mx-auto max-w-4xl px-6 py-16 md:py-24">
        <Hero />
        <Experience />
        <Research />
        <Projects />
        <Blog />
      </main>
    </div>
  );
}
