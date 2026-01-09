// import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Experience } from "@/components/experience";
import { Projects } from "@/components/projects";
import { Blog } from "@/components/blog";
// import { Footer } from "@/components/footer";

export default function Page() {
  return (
    <div className="min-h-screen">
      {/* <Header /> */}
      <main className="mx-auto max-w-4xl px-6 py-16 md:py-24">
        <Hero />
        <Experience />
        <Projects />
        <Blog />
      </main>
      {/* <Footer /> */}
    </div>
  );
}
