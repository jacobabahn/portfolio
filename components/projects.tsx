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
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce solution with payment processing, inventory management, and real-time analytics.",
    tags: ["Next.js", "PostgreSQL", "Stripe"],
    href: "#",
  },
  {
    title: "Task Management App",
    description:
      "Collaborative task management tool with real-time updates, team workspaces, and advanced filtering.",
    tags: ["React", "Node.js", "WebSocket"],
    href: "#",
  },
  {
    title: "Design System",
    description:
      "Comprehensive component library and design tokens for building consistent user interfaces at scale.",
    tags: ["React", "Storybook", "Tailwind"],
    href: "#",
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
          <Link key={project.title} href={project.href} className="group">
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
