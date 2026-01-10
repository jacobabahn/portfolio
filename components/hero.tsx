import Image from "next/image";
import {
  SiTypescript,
  SiReact,
  SiNodedotjs,
  SiPython,
  SiPostgresql,
  SiDocker,
  SiGo,
  SiKubernetes,
  SiCplusplus,
  SiLinkedin,
  SiGithub,
} from "react-icons/si";
import { MapPin } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

export function Hero() {
  const baseClasses =
    "rounded-full border border-border bg-muted/50 p-3 text-muted-foreground transition-colors hover:bg-muted";

  return (
    <section className="mb-8 md:mb-24">
      <div className="mb-8 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="flex justify-center md:justify-start items-center gap-4 md:gap-6">
          <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full ring-2 ring-border ring-offset-4 ring-offset-background md:h-28 md:w-28">
            <Image
              src="https://i.imgur.com/B9EDe7T.jpeg"
              alt="Jacob Bahn"
              fill
              className="object-cover scale-120  transition-transform duration-300 hover:scale-110"
              priority
            />
          </div>
          <div className="min-w-0">
            <h1 className="mb-2 text-3xl font-bold tracking-tight md:mb-4 md:text-6xl lg:text-7xl">
              Jacob Bahn
            </h1>
            <p className="flex flex-wrap items-center gap-2 text-base text-muted-foreground md:gap-4 md:text-2xl">
              <span className="flex items-center gap-1 md:gap-2">
                <MapPin className="h-4 w-4 text-red-900/65 md:h-6 md:w-6" />
                Seattle
              </span>
              <span>·</span>
              <span>Fullstack Engineer</span>
            </p>
          </div>
        </div>
        <div className="gap-3 hidden md:flex">
          <ThemeToggle />
          <a
            href="https://linkedin.com/in/jacobbahn"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-border bg-muted/50 p-3 text-muted-foreground transition-colors hover:bg-muted hover:text-[#0A66C2]"
            title="LinkedIn"
          >
            <SiLinkedin className="h-6 w-6" />
          </a>
          <a
            href="https://github.com/jacobabahn"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-border bg-muted/50 p-3 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            title="GitHub"
          >
            <SiGithub className="h-6 w-6" />
          </a>
        </div>
      </div>

      <div className="space-y-4 flex flex-col">
        <p className="text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
          Building elegant, performant web applications with modern
          technologies. I strive to create seamless experiences that bridge
          functional design with robust engineering.
        </p>
        <p className="text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
          When I'm not working, you'll find me exploring new languages &
          frameworks, debating about sports, or hanging out with my wife.
        </p>
      </div>

      <div className="mt-8 flex flex-wrap mx-auto w-60 md:w-full justify-center md:justify-start gap-3">
        <div className={`${baseClasses} hover:text-[#61DAFB]`} title="React">
          <SiReact className="h-5 w-5" />
        </div>
        <div
          className={`${baseClasses} hover:text-[#3178C6]`}
          title="TypeScript"
        >
          <SiTypescript className="h-5 w-5" />
        </div>
        <div className={`${baseClasses} hover:text-[#00ADD8]`} title="Go">
          <SiGo className="h-5 w-5" />
        </div>
        <div className={`${baseClasses} hover:text-[#3776AB]`} title="Python">
          <SiPython className="h-5 w-5" />
        </div>
        <div className={`${baseClasses} hover:text-[#00599C]`} title="C++">
          <SiCplusplus className="h-5 w-5" />
        </div>
        <div
          className={`${baseClasses} hover:text-[#4169E1]`}
          title="PostgreSQL"
        >
          <SiPostgresql className="h-5 w-5" />
        </div>
        <div className={`${baseClasses} hover:text-[#2496ED]`} title="Docker">
          <SiDocker className="h-5 w-5" />
        </div>
        <div
          className={`${baseClasses} hover:text-[#326CE5]`}
          title="Kubernetes"
        >
          <SiKubernetes className="h-5 w-5" />
        </div>
      </div>
    </section>
  );
}
