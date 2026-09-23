import type { Metadata } from "next";
import { ProjectDetail } from "@/components/project-detail";

export const metadata: Metadata = {
  title: "PetitionU | Jacob Bahn",
  description: "A platform for students to propose campus changes, gather signatures, and organize support with classmates.",
};

export default function PetitionUPage() {
  return (
    <ProjectDetail
      title="PetitionU"
      description="A place for students to propose changes at their school and bring classmates together around them."
      technologies={["React", "TypeScript", "Elixir", "Phoenix", "PostgreSQL"]}
      repository="https://github.com/bahnstar/petitionu"
      screenshot={{
        src: "/projects/petitionu-dashboard.webp",
        width: 1440,
        height: 1387,
        alt: "PetitionU dashboard for a sample student, with petitions started and signed, classroom membership, and prompts to create a first petition.",
        caption: "The personal dashboard, shown with a sample student account.",
      }}
    >
      <section>
        <h2>From an idea to a shared request</h2>
        <p>
          Students can browse and create petitions, add signatures, join the
          discussion, and follow updates. A personal dashboard brings together
          the petitions they have started and supported, so participation
          continues beyond the initial signature.
        </p>
      </section>
      <section>
        <h2>Organize within a classroom</h2>
        <p>
          Classrooms give smaller groups their own space for petitions.
          Professors can create a classroom and share its join code, while
          membership controls who can participate. Classroom settings determine
          whether students can start petitions, keeping the workflow suited to
          the group using it.
        </p>
      </section>
      <section>
        <h2>Connect the interface to the rules</h2>
        <p>
          React and TypeScript provide the interface, with Phoenix serving the
          application and PostgreSQL storing its data. Ash resources define
          actions, validations, and access policies. Generated TypeScript RPC
          clients connect those actions to the frontend, while TanStack Query
          manages server data in the browser.
        </p>
      </section>
    </ProjectDetail>
  );
}
