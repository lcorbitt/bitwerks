import { MetadataRoute } from "next"

const cities = [
  { city: "Fort Collins", state: "CO" },
  { city: "Denver", state: "CO" },
  { city: "Boulder", state: "CO" },
  { city: "Colorado Springs", state: "CO" },
  // Add more major cities as needed
]

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://bitwerks.dev"
  
  // Base pages
  const routes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/portfolio`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/web-development`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
  ]

  // Add city-specific pages
  const cityPages = cities.map((location) => ({
    url: `${baseUrl}/web-development/${location.city.toLowerCase().replace(/\s+/g, "-")}/${location.state.toLowerCase()}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }))

  return [...routes, ...cityPages]
} 