import { navigationItems } from "@/components/navigation-data"

export interface ServiceDirectoryItem {
  title: string
  href: string
  description: string
}

const blurbs: Partial<Record<string, string>> = {
  "/services/web-development":
    "Fast, accessible sites and web apps tailored to your brand and conversion goals.",
  "/services/software-development":
    "Custom products, internal tools, and integrations built for reliability and scale.",
  "/services/white-label-partnerships":
    "Ship under your brand with a partner who owns delivery, quality, and communication.",
  "/services/strategy-consulting":
    "We can help with discovery, roadmaps, and planning for your website or custom software build.",
  "/services/seo-growth":
    "Organic visibility, content structure, and performance tuned for sustainable growth.",
  "/services/ecommerce":
    "Stores, checkout flows, and catalog systems designed to sell with confidence.",
  "/services/ux-ui-design":
    "Interfaces and design systems that feel as good as they look—on every device.",
  "/services/maintenance-support":
    "Monitoring, updates, and iteration so your stack stays secure and current.",
  "/services/migration-modernization":
    "Move off legacy platforms with minimal downtime and a clear path forward.",
}

export const getServiceDirectoryItems = (): ServiceDirectoryItem[] => {
  const servicesNav = navigationItems.find(
    (item) => item.type === "dropdown" && item.href === "/services",
  )
  const links = servicesNav?.children?.filter((c) => c.type === "link") ?? []
  return links.map((c) => ({
    title: c.title,
    href: c.href,
    description: blurbs[c.href] ?? "Learn how we approach this work and what engagement looks like.",
  }))
}
