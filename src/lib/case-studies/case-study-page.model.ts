import type { CTAProps } from "@/components/sections/cta"

export interface CaseStudyGalleryImage {
  src: string
  alt: string
  caption?: string
}

export interface CaseStudyPageData {
  slug: string
  clientName: string
  tagline: string
  industry?: string
  businessGoal: string
  ourRole: string[]
  images: CaseStudyGalleryImage[]
  results?: string
  websiteUrl?: string
  seoTitle?: string
  seoDescription?: string
  ctaProps?: CTAProps
}
