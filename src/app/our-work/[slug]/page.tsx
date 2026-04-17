import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { CaseStudyPage } from "@/components/case-studies/case-study-page"
import { getCaseStudyPageBySlug, listCaseStudySlugs } from "@/lib/case-studies/registry"
import { getSiteBaseUrl } from "@/lib/blog/site-base-url"

interface CaseStudySlugPageProps {
  params: { slug: string }
}

export const generateStaticParams = () => listCaseStudySlugs().map((slug) => ({ slug }))

export const generateMetadata = async ({ params }: CaseStudySlugPageProps): Promise<Metadata> => {
  const data = getCaseStudyPageBySlug(params.slug)
  if (!data) return { title: "Case study" }

  const base = getSiteBaseUrl()
  const canonical = `${base}/our-work/${params.slug}`
  const title = data.seoTitle?.trim() || `${data.clientName} — Case Study`
  const description = data.seoDescription?.trim() || data.tagline

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  }
}

export default function CaseStudySlugPage({ params }: CaseStudySlugPageProps) {
  const data = getCaseStudyPageBySlug(params.slug)
  if (!data) notFound()

  return <CaseStudyPage data={data} />
}
