import type { MetadataRoute } from "next";
import { SITE_URL } from "@/data/site";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? SITE_URL;

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
