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
} from "react-icons/si";

export function Hero() {
  const iconClasses =
    "rounded-full border border-border bg-muted/50 p-3 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground";

  return (
    <section className="mb-24">
      <div className="mb-8 flex items-center gap-6">
        <div className="relative h-24 w-24 overflow-hidden rounded-full ring-2 ring-border ring-offset-4 ring-offset-background md:h-28 md:w-28">
          <Image
            src="/jbahn.jpg"
            alt="Jacob Bahn"
            fill
            className="object-cover scale-120  transition-transform duration-300 hover:scale-110"
            priority
          />
        </div>
        <div>
          <h1 className="mb-4 text-balance text-5xl font-bold tracking-tight md:text-6xl lg:text-7xl">
            Jacob Bahn
          </h1>
          <p className="text-xl text-muted-foreground md:text-2xl">
            Fullstack Engineer
          </p>
        </div>
      </div>

      <div className="space-y-4">
        <p className="text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
          Building elegant, performant web applications with modern
          technologies. I specialize in creating seamless experiences that
          bridge beautiful design with robust engineering.
        </p>

        <p className="text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
          When I'm not coding, you'll find me exploring new frameworks,
          contributing to open source, or sharing insights on web development
          through my writing.
        </p>
      </div>

      <div className="mt-8 flex flex-wrap gap-3">
        <div className={iconClasses} title="React">
          <SiReact className="h-5 w-5" />
        </div>
        <div className={iconClasses} title="TypeScript">
          <SiTypescript className="h-5 w-5" />
        </div>
        <div className={iconClasses} title="go">
          <SiGo className="h-5 w-5" />
        </div>
        <div className={iconClasses} title="Python">
          <SiPython className="h-5 w-5" />
        </div>
        <div className={iconClasses} title="Python">
          <SiCplusplus className="h-5 w-5" />
        </div>
        <div className={iconClasses} title="PostgreSQL">
          <SiPostgresql className="h-5 w-5" />
        </div>
        <div className={iconClasses} title="Docker">
          <SiDocker className="h-5 w-5" />
        </div>
        <div className={iconClasses} title="Kubernetes">
          <SiKubernetes className="h-5 w-5" />
        </div>
      </div>
    </section>
  );
}
