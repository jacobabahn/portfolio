import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Star } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { formatStars, getStars, repoFromUrl } from "@/lib/github";

type ProjectDetailProps = {
  title: string;
  description: string;
  technologies: string[];
  repository: string;
  screenshot?: {
    src: string;
    width: number;
    height: number;
    alt: string;
    caption: string;
  };
  children: ReactNode;
};

export async function ProjectDetail({
  title,
  description,
  technologies,
  repository,
  screenshot,
  children,
}: ProjectDetailProps) {
  const stars = await getStars(repoFromUrl(repository));

  return (
    <main className="mx-auto min-h-screen max-w-4xl px-6 py-12 md:py-20">
      <nav aria-label="Project navigation" className="mb-12 flex items-center justify-between gap-6">
        <Link href="/#projects" className="inline-flex items-center gap-2 rounded-sm text-sm text-muted-foreground hover:text-foreground">
          <ArrowLeft aria-hidden="true" className="h-4 w-4" />
          All projects
        </Link>
        <ThemeToggle />
      </nav>

      <article>
        <header className="mb-10 max-w-2xl">
          <h1 className="mb-5 text-balance text-4xl font-bold tracking-tight md:text-5xl">{title}</h1>
          <p className="text-pretty text-lg leading-relaxed text-foreground/85">{description}</p>
          <ul aria-label="Technologies" className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted-foreground">
            {technologies.map((technology) => <li key={technology}>{technology}</li>)}
          </ul>
          <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
            <a href={repository} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-sm font-medium underline underline-offset-4 hover:text-secondary">
              View on GitHub
              <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
            </a>
            {stars ? <a href={`${repository}/stargazers`} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-1.5 rounded-sm tabular-nums text-muted-foreground hover:text-foreground">
              <Star aria-hidden="true" className="h-4 w-4 fill-transparent text-secondary transition-[fill,rotate] duration-300 group-hover:fill-current motion-safe:group-hover:rotate-[72deg]" />
              {formatStars(stars)} {stars === 1 ? "star" : "stars"}
            </a> : null}
          </div>
        </header>

        {screenshot && <figure className="mb-12">
          <a href={screenshot.src} target="_blank" rel="noopener noreferrer" className="block overflow-hidden rounded-lg border border-border" aria-label={`Open full-size screenshot of ${title}`}>
            <Image src={screenshot.src} width={screenshot.width} height={screenshot.height} alt={screenshot.alt} sizes="(max-width: 896px) calc(100vw - 48px), 848px" className="h-auto w-full" priority />
          </a>
          <figcaption className="mt-3 text-sm leading-relaxed text-muted-foreground">{screenshot.caption} Select the image to view it full size.</figcaption>
        </figure>}

        <div className="max-w-2xl space-y-10 [&_h2]:mb-3 [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:tracking-tight [&_p]:leading-relaxed [&_p]:text-foreground/85">
          {children}
        </div>
      </article>
    </main>
  );
}
