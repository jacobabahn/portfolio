import type { Metadata } from "next";
import { ProjectDetail } from "@/components/project-detail";

export const metadata: Metadata = {
  title: "Page Replacement Simulator",
  description: "Explore FIFO, LIFO, and LRU page replacement through a step-by-step cache history and hit/miss statistics.",
};

export default function PageReplacementPage() {
  return (
    <ProjectDetail
      slug="page-replacement-simulator"
      title="Page Replacement Simulator"
      description="A visual way to explore how page replacement policies change the contents of a fixed-size cache."
      technologies={["React", "JavaScript", "Material UI"]}
      repository="https://github.com/jacobabahn/PageReplacementSimulator"
      screenshot={{
        src: "/projects/page-replacement-simulator.webp",
        width: 1440,
        height: 900,
        alt: "A FIFO simulation with a three-page cache, seven page requests, and a table showing each hit or miss and the resulting cache contents.",
        caption: "A three-page FIFO cache processing the sequence 1, 2, 3, 1, 4, 2, 5.",
      }}
    >
      <section>
        <h2>Follow each page request</h2>
        <p>
          Choose a replacement policy, set the cache size, and enter page
          numbers one at a time. Each request adds a row showing the requested
          page, whether it was a hit or miss, and the cache contents after
          the request. Earlier rows stay visible so the sequence can be traced.
        </p>
      </section>
      <section>
        <h2>Explore three replacement policies</h2>
        <p>
          The simulator offers first-in, first-out (FIFO), last-in, first-out
          (LIFO), and least recently used (LRU). Keeping the requests and cache
          states side by side makes the effect of a replacement decision
          easier to follow than a final hit rate alone.
        </p>
      </section>
      <section>
        <h2>Connect the steps to the totals</h2>
        <p>
          A calculations panel updates hit percentage, compulsory and capacity
          miss percentages, and total miss percentage as requests are added.
          The simulation runs in the browser using React and JavaScript, with
          Material UI providing the input controls and results table.
        </p>
      </section>
    </ProjectDetail>
  );
}
