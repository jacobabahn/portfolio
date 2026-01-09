import { Briefcase, Calendar } from "lucide-react";

interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  description: string;
  technologies: string[];
}

const experiences: ExperienceItem[] = [
  {
    company: "Schweitzer Engineering Labs",
    role: "Software Engineer II",
    period: "2025 - Present",
    description:
      "Building full-stack features for critical power grid management systems",
    technologies: [
      "React.js",
      "TypeScript",
      "Go",
      "PostgreSQL",
      "Docker",
      "Kubernetes",
    ],
  },
  {
    company: "Tennessee Valley Authority",
    role: "Software Engineer",
    period: "2021 - 2024",
    description:
      "Developed real-time applications for monitoring 1,000+ power generation assets",
    technologies: ["React", "C#", "MSSQL"],
  },
];

export function Experience() {
  return (
    <section className="mb-24">
      <div className="mb-12 flex items-center gap-3">
        <h2 className="text-3xl font-bold tracking-tight">Experience</h2>
      </div>

      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="group relative border-l-2 border-border pl-8 transition-colors hover:border-accent"
          >
            <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full border-2 border-border bg-background transition-colors group-hover:border-accent group-hover:bg-accent" />

            <div className="mb-2 flex flex-wrap items-center gap-3">
              <h3 className="text-xl font-semibold">{exp.role}</h3>
              <span className="text-muted-foreground">•</span>
              <span className="font-medium text-accent">{exp.company}</span>
            </div>

            <div className="mb-4 flex items-center gap-2 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" />
              <span>{exp.period}</span>
            </div>

            <p className="mb-4 text-pretty leading-relaxed text-muted-foreground">
              {exp.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {exp.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md border border-border bg-muted/30 px-3 py-1 text-xs font-mono text-muted-foreground"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
