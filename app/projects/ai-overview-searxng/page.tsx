import type { Metadata } from "next";
import { ProjectDetail } from "@/components/project-detail";

export const metadata: Metadata = {
  title: "AI Overview for SearXNG | Jacob Bahn",
  description: "Streaming AI summaries with source citations for SearXNG, using local models or hosted providers.",
};

export default function AIOverviewPage() {
  return (
    <ProjectDetail
      title="AI Overview for SearXNG"
      description="Source-linked AI summaries alongside your search results, with a choice of local models or hosted providers."
      technologies={["Python", "JavaScript", "SearXNG"]}
      repository="https://github.com/jacobabahn/ai-overview-searxng"
      screenshot={{
        src: "/projects/searxng-ai-summary.webp",
        width: 1526,
        height: 956,
        alt: "An AI summary in SearXNG’s dark theme, with numbered citations, an expandable source list, and a Show full answer control.",
        caption: "The summary panel in SearXNG’s Simple theme.",
      }}
    >
      <section>
        <h2>An overview without leaving search</h2>
        <p>
          End a search with a question mark to request a summary from the
          returned snippets. The answer streams above the ordinary results,
          with numbered citations that open its source snippets. You can stop,
          retry, or regenerate the answer, and optionally choose from configured
          models.
        </p>
      </section>
      <section>
        <h2>Choose where generation runs</h2>
        <p>
          Generation can run locally through Ollama or use a hosted provider.
          Provider credentials stay on the server, and numbered citations make
          the snippets behind an answer easy to inspect.
        </p>
      </section>
      <section>
        <h2>One interface, several providers</h2>
        <p>
          A Python service normalizes provider streams for a JavaScript
          interface that handles cancellation, retries, and rendering. The
          browser modules ship with the plugin without a frontend build step.
          A standalone demo uses recorded answers, making the interface
          testable without a model server. The project currently targets
          personal SearXNG instances using the Simple theme.
        </p>
      </section>
    </ProjectDetail>
  );
}
