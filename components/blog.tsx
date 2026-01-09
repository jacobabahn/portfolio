import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const posts = [
  {
    title: "In the Works",
    date: "TBD",
    excerpt: "Something insightful or cool",
    href: "#",
  },
];

export function Blog() {
  return (
    <section id="blog" className="mb-24">
      <h2 className="mb-8 text-3xl font-bold tracking-tight">Recent Writing</h2>

      <div className="space-y-6">
        {posts.map((post) => (
          <Link
            key={post.title}
            href={post.href}
            className="group block rounded-lg border border-border p-6 transition-colors hover:bg-muted/50"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1 space-y-2">
                <div className="flex items-center gap-3">
                  <h3 className="text-balance text-xl font-semibold tracking-tight group-hover:text-accent">
                    {post.title}
                  </h3>
                  <ArrowUpRight className="h-5 w-5 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
                <p className="text-pretty text-sm leading-relaxed text-muted-foreground">
                  {post.excerpt}
                </p>
              </div>
              <time className="shrink-0 text-sm text-muted-foreground">
                {post.date}
              </time>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
