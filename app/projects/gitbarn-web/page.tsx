import type { Metadata } from "next";
import { ProjectDetail } from "@/components/project-detail";

export const metadata: Metadata = {
  title: "GitBarn Web Portal | Jacob Bahn",
  description: "A customer portal for manure removal services, with orders, billing documents, and support in one place.",
};

export default function GitBarnPage() {
  return (
    <ProjectDetail
      title="GitBarn Web Portal"
      description="A customer portal for a South Florida manure-removal business, bringing orders, billing documents, and support into one place."
      technologies={["Next.js", "TypeScript", "Supabase", "PostgreSQL"]}
      repository="https://github.com/Bahnstar/gitbarn-web"
      screenshot={{
        src: "/projects/gitbarn-web.webp",
        width: 1440,
        height: 1000,
        alt: "Git Barn’s public homepage with service navigation, a customer login link, and a photograph of a manure-removal truck.",
        caption: "The public website introduces the service and provides an entry point to the customer portal.",
      }}
    >
      <section>
        <h2>From the service website to the customer account</h2>
        <p>
          Git Barn provides manure removal and stall bedding for properties in
          Palm Beach County. The public website explains those services, while
          the signed-in portal lets customers browse products, manage a cart,
          review orders, and access billing documents.
        </p>
      </section>
      <section>
        <h2>Support alongside the order history</h2>
        <p>
          Customers can open support conversations and exchange messages inside
          the portal. Notifications and document access sit alongside those
          conversations, keeping account tasks in the same application.
          Administrative views add user management, product management, and
          a dashboard of recent orders and support chats.
        </p>
      </section>
      <section>
        <h2>Connecting the workflows</h2>
        <p>
          Next.js and TypeScript provide the application structure, with Supabase
          for authentication, database access, and document storage. Server
          handlers connect orders and payment records to the portal, while
          role-based layouts separate administrative tools from customer pages.
        </p>
      </section>
    </ProjectDetail>
  );
}
