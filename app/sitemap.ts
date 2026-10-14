import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";

const routes = [
  "",
  "/research/fossil-teeth",
  "/projects/jj-evolved",
  "/projects/ai-overview-searxng",
  "/projects/gitbarn-web",
  "/projects/petitionu",
  "/projects/page-replacement-simulator",
  "/projects/slox",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({ url: `${siteUrl}${route}` }));
}
