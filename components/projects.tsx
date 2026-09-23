import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    title: "JJ Evolved",
    description:
      "A keyboard-driven terminal interface for Jujutsu, with visual previews for editing revision history.",
    tags: ["TypeScript", "Bun", "OpenTUI"],
    href: "/projects/jj-evolved",
  },
  {
    title: "AI Overview for SearXNG",
    description:
      "Streaming AI summaries with source citations for SearXNG, using local models or hosted providers.",
    tags: ["Python", "JavaScript", "SearXNG"],
    href: "/projects/ai-overview-searxng",
  },
  {
    title: "GitBarn Web Portal",
    description:
      "A customer portal for manure removal services, bringing orders, billing documents, and support together.",
    tags: ["Next.js", "TypeScript", "PostgreSQL"],
    href: "/projects/gitbarn-web",
  },
  {
    title: "PetitionU",
    description:
      "A petition management platform for university students, professors, and administrators to manage petitions and track their progress.",
    tags: ["React", "Elixir", "Phoenix", "PostgreSQL"],
    href: "/projects/petitionu",
  },
  {
    title: "sLox",
    description: "Lox language interpreter written in Scala.",
    tags: ["Scala"],
    href: "/projects/slox",
  },
  {
    title: "Page Replacement Simulator",
    description: "An interactive view of FIFO, LIFO, and LRU page replacement, with cache states and hit/miss statistics.",
    tags: ["React", "JavaScript"],
    href: "/projects/page-replacement-simulator",
  },
];

export function Projects() {
  return (
    <section id="projects" className="mb-24">
      <h2 className="mb-8 text-3xl font-bold tracking-tight">
        Selected Projects
      </h2>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <Link
            key={project.title}
            href={project.href}
            className="group rounded-xl"
          >
            <Card className="h-full transition-colors hover:bg-muted/50">
              <CardHeader>
                <CardTitle className="flex items-start justify-between gap-2">
                  <span className="text-balance">{project.title}</span>
                  <ArrowUpRight className="h-5 w-5 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </CardTitle>
                <CardDescription className="text-pretty leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-secondary/10 px-3 py-1 text-xs font-mono text-secondary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
}
