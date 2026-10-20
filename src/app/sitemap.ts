import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const SITE = "https://staeledson.github.io";

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: `${SITE}/`, lastModified: new Date(), changeFrequency: "monthly", priority: 1 }];
}
