import Image from "next/image";
import { SiLinkedin, SiGithub } from "react-icons/si";
import { MapPin } from "lucide-react";

export function Hero() {
  const link =
    "inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground";

  return (
    <section className="mb-8 md:mb-24">
      {/* Phones: photo beside the name, text full width below. Desktop: photo
          moves to the right of the name and intro. */}
      <div className="grid grid-cols-[72px_1fr] items-center gap-x-4 md:grid-cols-[1fr_176px] md:items-start md:gap-x-12">
        <div className="relative col-start-1 row-start-1 aspect-[4/5] w-[72px] overflow-hidden rounded-lg ring-1 ring-border md:col-start-2 md:row-span-2 md:w-44 md:rounded-xl">
          <Image
            src="https://i.imgur.com/B9EDe7T.jpeg"
            alt="Jacob Bahn"
            fill
            sizes="(min-width: 768px) 176px, 72px"
            // The source is a full-body shot; zoom toward the face.
            className="origin-[50%_28%] scale-[1.6] object-cover object-[50%_30%] md:origin-[50%_30%] md:scale-[1.35]"
            priority
          />
        </div>
        <h1 className="col-start-2 row-start-1 text-4xl font-bold tracking-tight md:col-start-1 md:text-[56px] md:leading-none">
          Jacob Bahn
        </h1>
        <div className="col-span-2 mt-6 max-w-[60ch] md:col-span-1 md:row-start-2">
          <p className="text-pretty text-lg leading-relaxed text-foreground md:text-xl">
            I&apos;m a senior engineer at V.Two, working on the backend of a
            healthcare platform. Before that, I spent five years writing
            software for the power grid at TVA and SEL.
          </p>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground md:text-lg">
            Off the clock I&apos;m trying new languages, debating sports, or
            hanging out with my wife.
          </p>
        </div>
      </div>

      <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-border pt-5 text-[15px]">
        {/* Own line on phones so the two links wrap together. */}
        <span className="flex w-full items-center gap-2 text-muted-foreground md:inline-flex md:w-auto">
          <MapPin aria-hidden="true" className="h-4 w-4 text-accent-secondary" />
          Full-stack engineer in Seattle
        </span>
        <a
          href="https://github.com/jacobabahn"
          target="_blank"
          rel="noopener noreferrer"
          className={link}
        >
          <SiGithub aria-hidden="true" className="h-4 w-4" />
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/jacobbahn"
          target="_blank"
          rel="noopener noreferrer"
          className={link}
        >
          <SiLinkedin aria-hidden="true" className="h-4 w-4" />
          LinkedIn
        </a>
        <span className="w-full font-mono text-xs text-muted-foreground/70 md:ml-auto md:w-auto">
          TypeScript · Go · Postgres · Kubernetes
        </span>
      </div>
    </section>
  );
}
