import { MetadataRoute } from "next"

import { listPublishedPostsPublic } from "@/lib/blog/queries-public"
import { majorUSCities } from "@/lib/us-cities"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://bitwerks.dev"

  let blogPosts: { slug: string; updated_at: string }[] = []
  try {
    const posts = await listPublishedPostsPublic()
    blogPosts = posts.map((p) => ({ slug: p.slug, updated_at: p.updated_at }))
  } catch {
    // Build/deploy without Supabase: omit dynamic blog URLs rather than failing the sitemap.
  }

  const routes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/our-work`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/insights`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/pricing`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/web-development`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services/software-development`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services/white-label-partnerships`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...(
      [
        "strategy-consulting",
        "seo-growth",
        "ecommerce",
        "ux-ui-design",
        "maintenance-support",
        "migration-modernization",
      ] as const
    ).map((slug) => ({
      url: `${baseUrl}/services/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.75,
    })),
    ...blogPosts.map((post) => ({
      url: `${baseUrl}/insights/${post.slug}`,
      lastModified: new Date(post.updated_at),
      changeFrequency: "weekly" as const,
      priority: 0.7,
    })),
  ]

  const services = ["web-development", "software-development", "white-label-partnerships"]
  const redirectServices = ["app-development", "web-design"]

  const locationPages: MetadataRoute.Sitemap = []

  for (const city of majorUSCities) {
    for (const service of services) {
      const priority = city.priority === 1 ? 0.8 : city.priority === 2 ? 0.7 : 0.6

      locationPages.push({
        url: `${baseUrl}/services/${service}/${city.slug}/${city.stateSlug}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority,
      })
    }

    for (const service of redirectServices) {
      const priority = city.priority === 1 ? 0.7 : city.priority === 2 ? 0.6 : 0.5

      locationPages.push({
        url: `${baseUrl}/${service}/${city.slug}/${city.stateSlug}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority,
      })
    }
  }

  return [...routes, ...locationPages]
}
