import { getImageProps } from "next/image";

export type ProjectScreenshot = {
  src: string;
  width: number;
  height: number;
  alt: string;
  caption: string;
};

// The detail page and the hover preload must request the same image, so both
// read the screenshot and its `sizes` from here.
export const SCREENSHOT_SIZES = "(max-width: 896px) calc(100vw - 48px), 848px";

export type ProjectSlug =
  | "ai-overview-searxng"
  | "gitbarn-web"
  | "jj-evolved"
  | "page-replacement-simulator"
  | "petitionu"
  | "slox";

export const projectScreenshots: Partial<Record<ProjectSlug, ProjectScreenshot>> = {
  "ai-overview-searxng": {
    src: "/projects/searxng-ai-summary.webp",
    width: 1526,
    height: 956,
    alt: "An AI summary in SearXNG’s dark theme, with numbered citations, an expandable source list, and a Show full answer control.",
    caption: "The summary panel in SearXNG’s Simple theme.",
  },
  "gitbarn-web": {
    src: "/projects/gitbarn-web.webp",
    width: 1440,
    height: 1000,
    alt: "Git Barn’s public homepage with service navigation, a customer login link, and a photograph of a manure-removal truck.",
    caption: "The public website introduces the service and provides an entry point to the customer portal.",
  },
  "jj-evolved": {
    src: "/projects/jj-evolved-rebase.webp",
    width: 2312,
    height: 1362,
    alt: "JJ Evolved comparing the current revision tree on the left with a proposed rebase on the right. Two login changes move together onto main.",
    caption: "A rebase preview captured from the app’s renderer using an example repository.",
  },
  "page-replacement-simulator": {
    src: "/projects/page-replacement-simulator.webp",
    width: 1440,
    height: 900,
    alt: "A FIFO simulation with a three-page cache, seven page requests, and a table showing each hit or miss and the resulting cache contents.",
    caption: "A three-page FIFO cache processing the sequence 1, 2, 3, 1, 4, 2, 5.",
  },
  petitionu: {
    src: "/projects/petitionu-dashboard.webp",
    width: 1440,
    height: 1387,
    alt: "PetitionU dashboard for a sample student, with petitions started and signed, classroom membership, and prompts to create a first petition.",
    caption: "The personal dashboard, shown with a sample student account.",
  },
};

// The optimized URLs next/image will request for a project's screenshot.
export function screenshotPreload(slug: ProjectSlug) {
  const screenshot = projectScreenshots[slug];
  if (!screenshot) return undefined;
  // Only the props the detail page's <Image> gets, so the URLs can't diverge.
  const { src, width, height, alt } = screenshot;
  const { props } = getImageProps({ src, width, height, alt, sizes: SCREENSHOT_SIZES });
  return { src: props.src, srcSet: props.srcSet, sizes: props.sizes };
}
