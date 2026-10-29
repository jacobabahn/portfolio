import { Hero } from "@/components/hero";
import { Experience } from "@/components/experience";
import { Projects } from "@/components/projects";
import { Research } from "@/components/research";
import { PageTransition } from "@/components/page-transition";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Page() {
  return (
    <PageTransition>
      <div className="min-h-screen">
        {/* Same padding and nav row as the project and research pages, so the
            toggle stays put when navigating between them. */}
        <main className="mx-auto max-w-4xl px-6 py-12 md:py-20">
          <nav aria-label="Sections" className="mb-12 flex items-center justify-between gap-6 md:mb-16">
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <a href="#experience" className="rounded-sm hover:text-foreground">Experience</a>
              <a href="#research" className="rounded-sm hover:text-foreground">Research</a>
              <a href="#projects" className="rounded-sm hover:text-foreground">Projects</a>
            </div>
            <ThemeToggle />
          </nav>
          <Hero />
          <Experience />
          <Research />
          <Projects />
        </main>
      </div>
    </PageTransition>
  );
}
