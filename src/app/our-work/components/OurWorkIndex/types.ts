import type { Client } from "@/lib/clients-data"
import type { CaseStudyPageData } from "@/lib/case-studies/case-study-page.model"

export interface OurWorkIndexProps {
  featuredStudies: CaseStudyPageData[]
  secondaryClients: Client[]
}
