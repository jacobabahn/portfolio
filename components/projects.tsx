import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowUpRight, Star } from "lucide-react";
import Link from "next/link";
import { formatStars, getStars } from "@/lib/github";
import { SharedTitle } from "@/components/page-transition";

const projects = [
  {
    title: "AI Overview for SearXNG",
    description:
      "Streaming AI summaries with source citations for SearXNG, using local models or hosted providers.",
    tags: ["Python", "JavaScript", "SearXNG"],
    slug: "ai-overview-searxng",
    repo: "jacobabahn/ai-overview-searxng",
  },
  {
    title: "JJ Evolved",
    description:
      "A keyboard-driven terminal interface for Jujutsu, with visual previews for editing revision history.",
    tags: ["TypeScript", "Bun", "OpenTUI"],
    slug: "jj-evolved",
    repo: "jacobabahn/jj-evolved",
  },
  {
    title: "GitBarn Web Portal",
    description:
      "A customer portal for manure removal services, bringing orders, billing documents, and support together.",
    tags: ["Next.js", "TypeScript", "PostgreSQL"],
    slug: "gitbarn-web",
    repo: "Bahnstar/gitbarn-web",
  },
  {
    title: "PetitionU",
    description:
      "A petition management platform for university students, professors, and administrators to manage petitions and track their progress.",
    tags: ["React", "Elixir", "Phoenix", "PostgreSQL"],
    slug: "petitionu",
    repo: "bahnstar/petitionu",
  },
  {
    title: "sLox",
    description: "Lox language interpreter written in Scala.",
    tags: ["Scala"],
    slug: "slox",
    repo: "jacobabahn/sLox",
  },
  {
    title: "Page Replacement Simulator",
    description: "An interactive view of FIFO, LIFO, and LRU page replacement, with cache states and hit/miss statistics.",
    tags: ["React", "JavaScript"],
    slug: "page-replacement-simulator",
    repo: "jacobabahn/PageReplacementSimulator",
  },
];

function StarCount({ stars }: { stars: number }) {
  return (
    <span className="absolute -top-3 right-5 inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-2.5 py-1 text-xs font-medium tabular-nums">
      <Star
        aria-hidden="true"
        className="h-3.5 w-3.5 fill-transparent text-secondary transition-[fill,rotate] duration-300 group-hover:fill-current motion-safe:group-hover:rotate-[72deg]"
      />
      {formatStars(stars)}
      <span className="sr-only">{stars === 1 ? "GitHub star" : "GitHub stars"}</span>
    </span>
  );
}

export async function Projects() {
  const stars = await Promise.all(projects.map((project) => getStars(project.repo)));

  return (
    <section id="projects" className="mb-24">
      <h2 className="mb-8 text-3xl font-bold tracking-tight">
        Selected Projects
      </h2>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <Link
            key={project.title}
            href={`/projects/${project.slug}`}
            transitionTypes={["nav-forward"]}
            className="group rounded-xl"
          >
            <Card className="relative h-full transition-colors hover:bg-muted/50">
              {stars[index] ? <StarCount stars={stars[index]} /> : null}
              <CardHeader>
                <CardTitle className="flex items-start justify-between gap-2">
                  <SharedTitle id={project.slug}>
                    <span className="text-balance">{project.title}</span>
                  </SharedTitle>
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
