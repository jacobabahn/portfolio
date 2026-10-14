import type { Metadata } from "next";
import { ProjectDetail } from "@/components/project-detail";

export const metadata: Metadata = {
  title: "JJ Evolved",
  description: "A keyboard-driven terminal interface for Jujutsu, with visual previews for editing revision history.",
};

export default function JJEvolvedPage() {
  return (
    <ProjectDetail
      title="JJ Evolved"
      description="A terminal interface for Jujutsu that makes changes to revision history visible before you apply them."
      technologies={["TypeScript", "Bun", "OpenTUI"]}
      repository="https://github.com/jacobabahn/jj-evolved"
      screenshot={{
        src: "/projects/jj-evolved-rebase.webp",
        width: 2312,
        height: 1362,
        alt: "JJ Evolved comparing the current revision tree on the left with a proposed rebase on the right. Two login changes move together onto main.",
        caption: "A rebase preview captured from the app’s renderer using an example repository.",
      }}
    >
      <section>
        <h2>See the change before making it</h2>
        <p>
          Rebasing a stack can be easier to understand as a graph. Select a
          revision, choose its destination, and compare the proposed history
          with the current tree. Rebase and squash previews show bookmarks and
          conflict markers, while menus keep the graph in view.
        </p>
      </section>
      <section>
        <h2>Stay in the terminal</h2>
        <p>
          Keyboard controls connect revision browsing, diffs, bookmarks, and
          history editing. Recovery is part of the same interface: inspect a
          change’s evolution, preview an undo, or restore an earlier repository
          operation. For detailed file editing and conflict resolution, the app
          opens the tools already configured in Jujutsu.
        </p>
      </section>
      <section>
        <h2>Built around Jujutsu</h2>
        <p>
          The app runs the installed jj executable and follows its repository
          rules. Reviewed actions reject stale state if the repository changes
          before confirmation. Tests exercise real Jujutsu operations and the
          OpenTUI renderer in disposable repositories. The project is under
          active development.
        </p>
      </section>
    </ProjectDetail>
  );
}
