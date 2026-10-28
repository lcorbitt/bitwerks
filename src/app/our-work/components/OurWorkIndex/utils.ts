import type { Client } from "@/lib/clients-data"
import type { CaseStudyPageData } from "@/lib/case-studies/case-study-page.model"

export const getSecondaryClients = (
  clients: Client[],
  featuredStudies: CaseStudyPageData[]
): Client[] => {
  const featuredSlugs = new Set(featuredStudies.map((s) => `/our-work/${s.slug}`))
  return clients.filter((client) => {
    if (!client.caseStudyLink) return true
    return !featuredSlugs.has(client.caseStudyLink)
  })
}

export const splitFeaturedStudies = (studies: CaseStudyPageData[]) => {
  const [lead, ...rest] = studies
  return { lead, rest }
}
