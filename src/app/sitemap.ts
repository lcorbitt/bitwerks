import { MetadataRoute } from "next"
import { majorUSCities } from "@/lib/us-cities"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://bitwerks.dev"
  
  // Base pages
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
      url: `${baseUrl}/pricing`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/web-development`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/software-development`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/white-label-partnerships`,
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
  ]

  // Services to generate location pages for
  const services = ["web-development", "software-development", "white-label-partnerships"]
  const redirectServices = ["app-development", "web-design"] // These redirect to main services

  // Generate location-based pages for each service
  const locationPages: MetadataRoute.Sitemap = []
  
  for (const city of majorUSCities) {
    for (const service of services) {
      // Priority based on city priority (1 = highest, 3 = lowest)
      // Higher priority cities get higher sitemap priority
      const priority = city.priority === 1 ? 0.8 : city.priority === 2 ? 0.7 : 0.6
      
      locationPages.push({
        url: `${baseUrl}/services/${service}/${city.slug}/${city.stateSlug}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority,
      })
    }
    
    // Add redirect service pages (web-design and app-development)
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