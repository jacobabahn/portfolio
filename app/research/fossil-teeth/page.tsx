import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

const publication = "https://doi.org/10.3390/make7020045";

export const metadata: Metadata = {
  title: "Classifying fossil teeth with machine learning | Jacob Bahn",
  description:
    "My master’s thesis research on grouping fossil tooth measurements and training an image classifier for Pectinodon bakkeri teeth.",
};

function ResearchFigure({ src, width, height, alt, children, priority = false }: {
  src: string;
  width: number;
  height: number;
  alt: string;
  children: React.ReactNode;
  priority?: boolean;
}) {
  return (
    <figure>
      <a href={src} target="_blank" rel="noopener noreferrer" className="block overflow-hidden rounded-lg border border-border" aria-label={`Open full-size figure: ${alt}`}>
        <Image src={src} width={width} height={height} alt={alt} sizes="(max-width: 720px) calc(100vw - 48px), 672px" className="h-auto w-full" unoptimized loading={priority ? "eager" : "lazy"} />
      </a>
      <figcaption className="mt-3 text-sm leading-relaxed text-muted-foreground">
        {children} Select the image to view it full size.
      </figcaption>
    </figure>
  );
}

export default function FossilTeethPage() {
  return (
    <main className="mx-auto min-h-screen max-w-4xl px-6 py-12 md:py-20">
      <nav aria-label="Research navigation" className="mb-12 flex items-center justify-between gap-6">
        <Link href="/#research" className="inline-flex items-center gap-2 rounded-sm text-sm text-muted-foreground hover:text-foreground">
          <ArrowLeft aria-hidden="true" className="h-4 w-4" />
          Back to research
        </Link>
        <ThemeToggle />
      </nav>
      <article className="max-w-2xl">
        <header className="mb-10">
          <h1 className="mb-5 text-balance text-4xl font-bold tracking-tight md:text-5xl">Classifying fossil teeth with machine learning</h1>
          <p className="text-pretty text-lg leading-relaxed text-foreground/85">
            My master’s thesis explored how measurements and microscope images
            can help make sense of tiny dinosaur teeth. This page summarizes
            the research published with Germán H. Alférez and Keith Snyder in 2025.
          </p>
          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium">
            <a href={publication} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-sm underline underline-offset-4 hover:text-secondary">
              Read the publication <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
            </a>
            <a href="https://github.com/jacobabahn/MicrofossilResearch" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-sm underline underline-offset-4 hover:text-secondary">
              Code and data <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
            </a>
          </div>
        </header>

        <ResearchFigure src="/research/pectinodon-tooth.webp" width={2810} height={2047} alt="A Pectinodon bakkeri tooth with a one-millimeter scale and annotations marking its crown height, basal length, and serrations." priority>
          Figure 1 from the publication: the measurements behind the analysis.
        </ResearchFigure>

        <div className="mt-12 space-y-10 [&_h2]:mb-3 [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:tracking-tight [&_p]:leading-relaxed [&_p]:text-foreground/85">
          <section>
            <h2>Research context</h2>
            <p>
              Teeth can be the only surviving evidence of a dinosaur species.
              For <i>Pectinodon bakkeri</i>, limited remains make classification
              especially challenging. Our study used 459 specimens with complete
              measurements from the Hanson Ranch Bonebed in eastern Wyoming to
              investigate patterns in their shape.
            </p>
          </section>
          <section>
            <h2>Method</h2>
            <p>
              We examined tooth height, base dimensions, and serrations. Principal
              component analysis (PCA) helped explain variation in those features;
              K-means grouped the specimens using the original measurements.
              Python then organized the corresponding images by group, creating
              labels for a convolutional neural network built with Keras.
            </p>
          </section>
          <ResearchFigure src="/research/tooth-clusters.webp" width={3633} height={3574} alt="A plot of three tooth clusters: clusters 1 and 3 overlap, while cluster 2 forms a more distinct group below them.">
            Figure 7 from the publication: three measurement-based groups, with overlap between clusters 1 and 3.
          </ResearchFigure>
          <section>
            <h2>Clustering results</h2>
            <p>
              Further examination indicated that cluster 2 represented another
              species, though the available remains did not allow a specific
              identification. We excluded it from image-model training. The two
              remaining groups overlap; we interpreted this as a possible
              reflection of differences in tooth size along the jaw.
            </p>
          </section>
          <section>
            <h2>Building and training the neural network</h2>
            <p>
              I built a convolutional neural network in TensorFlow and Keras to
              classify tooth images into clusters 1 and 3. The model takes
              180 × 180-pixel color images as input. Two convolutional layers
              learn visual features, and max-pooling layers reduce their spatial
              dimensions. A fully connected layer combines those features before
              the output layer predicts one of the two groups.
            </p>
            <p className="mt-4">
              We cropped the images to remove distracting details such as mounting
              pins and used rotations and horizontal flips to balance the two
              classes. I normalized pixel values and added dropout layers to
              reduce overfitting after the initial experiments.
            </p>
            <p className="mt-4">
              We used 80% of the images for training and the remaining 20% for
              validation. I trained the network for 100 epochs, using batches
              of 32 images and the Adam optimizer, and tracked training and
              validation accuracy and loss to assess how well it generalized.
            </p>
          </section>
          <section>
            <h2>Image classification results</h2>
            <p>
              Our neural network achieved 71% accuracy in distinguishing the two
              retained groups. Similar tooth shapes, reflections, and inconsistent
              image backgrounds made that distinction difficult. We proposed
              separating teeth from their backgrounds and retaining information
              about physical size as next steps.
            </p>
          </section>
          <section>
            <h2>My contribution</h2>
            <p>
              I developed the software and visualizations and contributed to
              data curation, analysis, investigation, validation, and the original
              manuscript alongside my coauthors.
            </p>
          </section>
        </div>
        <footer className="mt-12 border-t border-border pt-6 text-sm leading-relaxed text-muted-foreground">
          <p>
            Bahn, J.; Alférez, G. H.; Snyder, K. (2025).{" "}
            <a href={publication} className="underline underline-offset-4 hover:text-foreground">Machine Learning Classification of Fossilized Pectinodon bakkeri Teeth Images: Insights into Troodontid Theropod Dinosaur Morphology.</a>{" "}
            <i>Machine Learning and Knowledge Extraction</i>, 7(2), 45.
          </p>
          <p className="mt-3">
            Figures 1 and 7 by the article’s authors, reproduced under{" "}
            <a href="https://creativecommons.org/licenses/by/4.0/" className="underline underline-offset-4 hover:text-foreground">CC BY 4.0</a>.
            Converted to lossless WebP; figure content unchanged.
          </p>
        </footer>
      </article>
    </main>
  );
}
