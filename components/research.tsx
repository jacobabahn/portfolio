import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const publications = [
  {
    title:
      "Machine Learning Classification of Fossilized Pectinodon bakkeri Teeth",
    journal: "Machine Learning and Knowledge Extraction Journal",
    year: "2025",
    type: "Masters Thesis",
    description:
      "A deep learning approach to automate the classification and identification of microfossil dinosarur teeth",
    tags: ["Python", "TensorFlow", "Computer Vision", "PCA", "K-Means"],
    href: "https://doi.org/10.3390/make7020045",
  },
];

// const publications = [
//   {
//     title:
//       "Machine Learning Classification of Fossilized Pectinodon bakkeri Teeth",
//     journal: "Machine Learning and Knowledge Extraction Journal",
//     year: "2025",
//     type: "Masters Thesis Publication",
//     abstract:
//       "A deep learning approach to automate the classification and identification of microfossil dinosarur teeth",
//     href: "https://doi.org/10.3390/make7020045",
//     tags: ["Python", "Tensorflow", "PCA"],
//   },
// ];

export function Research() {
  return (
    <section id="research" className="mb-24">
      <h2 className="mb-8 text-3xl font-bold tracking-tight">Research</h2>

      <div>
        {publications.map((pub) => (
          <Link key={pub.title} href={pub.href} className="group">
            <Card className="h-full transition-colors hover:bg-muted/50">
              <CardHeader>
                <div className="mb-1 flex items-center gap-2">
                  <span className="rounded-md bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">
                    {pub.type}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {pub.journal} · {pub.year}
                  </span>
                </div>
                <CardTitle className="flex items-start justify-between gap-2">
                  <span className="text-balance">{pub.title}</span>
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
