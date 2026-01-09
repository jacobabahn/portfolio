import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const posts = [
  {
    title: "Building Performant React Applications",
    date: "Jan 15, 2026",
    excerpt:
      "Exploring optimization techniques for modern React apps, from code splitting to server components.",
    href: "#",
  },
  {
    title: "TypeScript Best Practices for Scalable Projects",
    date: "Dec 28, 2025",
    excerpt:
      "How to structure your TypeScript codebase for maintainability and type safety at scale.",
    href: "#",
  },
  {
    title: "The Art of API Design",
    date: "Dec 10, 2025",
    excerpt:
      "Principles and patterns for creating developer-friendly APIs that stand the test of time.",
    href: "#",
  },
  {
    title: "Server Actions in Next.js: A Deep Dive",
    date: "Nov 22, 2025",
    excerpt:
      "Understanding the power of server actions and how they simplify data mutations in Next.js.",
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
