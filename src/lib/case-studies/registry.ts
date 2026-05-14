import { americanHeartAssociationCaseStudyPage } from "@/lib/case-studies/content/american-heart-association"
import { clickkCaseStudyPage } from "@/lib/case-studies/content/clickk"
import { urbanSkyCaseStudyPage } from "@/lib/case-studies/content/urban-sky"
import type { CaseStudyPageData } from "@/lib/case-studies/case-study-page.model"

const caseStudyBySlug: Record<string, CaseStudyPageData> = {
  clickk: clickkCaseStudyPage,
  "urban-sky": urbanSkyCaseStudyPage,
  "american-heart-association": americanHeartAssociationCaseStudyPage,
}

export const listCaseStudySlugs = (): string[] => Object.keys(caseStudyBySlug)

export const getCaseStudyPageBySlug = (slug: string): CaseStudyPageData | undefined =>
  caseStudyBySlug[slug]
