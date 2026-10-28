import { americanHeartAssociationCaseStudyPage } from "@/lib/case-studies/content/american-heart-association"
import { clickkCaseStudyPage } from "@/lib/case-studies/content/clickk"
import { containerlyCaseStudyPage } from "@/lib/case-studies/content/containerly"
import { hodinkeeCaseStudyPage } from "@/lib/case-studies/content/hodinkee"
import type { CaseStudyPageData } from "@/lib/case-studies/case-study-page.model"

const caseStudyBySlug: Record<string, CaseStudyPageData> = {
  clickk: clickkCaseStudyPage,
  "american-heart-association": americanHeartAssociationCaseStudyPage,
  containerly: containerlyCaseStudyPage,
  hodinkee: hodinkeeCaseStudyPage,
}

export const listCaseStudySlugs = (): string[] => Object.keys(caseStudyBySlug)

export const getCaseStudyPageBySlug = (slug: string): CaseStudyPageData | undefined =>
  caseStudyBySlug[slug]

export const listAllCaseStudies = (): CaseStudyPageData[] =>
  Object.values(caseStudyBySlug)

export const listFeaturedCaseStudies = (): CaseStudyPageData[] =>
  listAllCaseStudies()
    .filter((study) => study.featured)
    .sort((a, b) => (a.sortOrder ?? 99) - (b.sortOrder ?? 99))

export const getCaseStudyHeroImage = (data: CaseStudyPageData) =>
  data.heroImage ?? data.images[0]

export const getRelatedCaseStudies = (
  slug: string,
  limit = 2
): CaseStudyPageData[] => {
  const relatedBySlug: Record<string, string[]> = {
    hodinkee: ["clickk", "containerly"],
    clickk: ["hodinkee", "containerly"],
    "american-heart-association": ["hodinkee", "containerly"],
    containerly: ["hodinkee", "clickk"],
  }

  const preferred = relatedBySlug[slug] ?? []
  const bySlug = new Map(listAllCaseStudies().map((s) => [s.slug, s]))

  const picked = preferred
    .map((s) => bySlug.get(s))
    .filter((s): s is CaseStudyPageData => s !== undefined && s.slug !== slug)

  if (picked.length >= limit) return picked.slice(0, limit)

  const rest = listAllCaseStudies().filter(
    (s) => s.slug !== slug && !picked.some((p) => p.slug === s.slug)
  )

  return [...picked, ...rest].slice(0, limit)
}
