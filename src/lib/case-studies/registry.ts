import { clickkCaseStudyPage } from "@/lib/case-studies/content/clickk"
import type { CaseStudyPageData } from "@/lib/case-studies/case-study-page.model"

const caseStudyBySlug: Record<string, CaseStudyPageData> = {
  clickk: clickkCaseStudyPage,
}

export const listCaseStudySlugs = (): string[] => Object.keys(caseStudyBySlug)

export const getCaseStudyPageBySlug = (slug: string): CaseStudyPageData | undefined =>
  caseStudyBySlug[slug]
