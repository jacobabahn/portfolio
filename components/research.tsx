import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { SharedTitle } from "@/components/page-transition";

const publications = [
  {
    title:
      "Machine Learning Classification of Fossilized Pectinodon bakkeri Teeth",
    journal: "Machine Learning and Knowledge Extraction Journal",
    year: "2025",
    type: "Thesis",
    description:
      "Using tooth measurements to group fossil specimens and train an image classifier for Pectinodon bakkeri teeth.",
    tags: ["Python", "R", "Keras", "PCA", "K-Means"],
    slug: "fossil-teeth",
  },
];

export function Research() {
  return (
    <section id="research" className="mb-24">
      <h2 className="mb-8 text-3xl font-bold tracking-tight">Research</h2>

      <div>
        {publications.map((pub) => (
          <Link key={pub.title} href={`/research/${pub.slug}`} transitionTypes={["nav-forward"]} className="group block rounded-xl">
            <Card className="h-full transition-colors hover:bg-muted/50">
              <CardHeader>
                <div className="mb-1 flex items-center gap-2">
                  <span className="rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
                    {pub.type}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {pub.journal} · {pub.year}
                  </span>
                </div>
                <CardTitle className="flex items-start justify-between gap-2">
                  <SharedTitle id={pub.slug}>
                    <span className="text-balance leading-6">{pub.title}</span>
                  </SharedTitle>
                  <ArrowUpRight className="h-5 w-5 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </CardTitle>
                <CardDescription className="text-pretty leading-relaxed">
                  {pub.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {pub.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-secondary/10 px-3 py-1 font-mono text-xs text-secondary"
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
