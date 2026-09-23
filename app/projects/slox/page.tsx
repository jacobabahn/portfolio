import type { Metadata } from "next";
import { ProjectDetail } from "@/components/project-detail";

export const metadata: Metadata = {
  title: "sLox | Jacob Bahn",
  description: "A Scala implementation of the Lox interpreter, exploring scanning, parsing, and evaluating a programming language.",
};

export default function SLoxPage() {
  return (
    <ProjectDetail
      title="sLox"
      description="A Lox interpreter written in Scala, exploring how source code becomes a running program."
      technologies={["Scala", "sbt"]}
      repository="https://github.com/jacobabahn/sLox"
    >
      <section>
        <h2>From source text to execution</h2>
        <p>
          The interpreter follows the Java implementation in Crafting
          Interpreters through chapter 10.2, translating the approach into
          Scala. A scanner produces tokens, a parser builds statements and
          expressions, and a tree-walk interpreter evaluates them. It accepts
          a script file or individual lines through an interactive prompt.
        </p>
      </section>
      <section>
        <h2>Put the language to work</h2>
        <p>
          The repository includes examples for loops, variable environments,
          and function calls. Its Fibonacci example combines a recursive
          function with this loop to print the first twenty values:
        </p>
        <figure className="mt-5">
          <pre className="overflow-x-auto rounded-lg border border-border bg-muted/40 p-4 text-sm leading-relaxed sm:p-6"><code>{`for (var i = 0; i < 20; i = i + 1) {
  print fib(i);
}`}</code></pre>
          <figcaption className="mt-3 text-sm text-muted-foreground">
            Excerpt from{" "}
            <a href="https://github.com/jacobabahn/sLox/blob/master/funTest.lox" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-foreground">funTest.lox</a>.
          </figcaption>
        </figure>
      </section>
      <section>
        <h2>Explore language implementation</h2>
        <p>
          Separate scanner, parser, environment, and interpreter modules make
          each stage visible. Expression and statement visitors handle
          evaluation, and runtime errors carry the source token so a failure
          can report its line. The project offers a compact view of the
          machinery behind everyday programming constructs.
        </p>
      </section>
    </ProjectDetail>
  );
}
