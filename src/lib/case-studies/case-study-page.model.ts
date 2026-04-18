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
  /** Concrete outcomes and responsibilities (e.g. engineering leadership, delivery). */
  accomplishments: string[]
  /** BitWerks service lines applied on the engagement (labels only; optional). */
  servicesUsed?: string[]
  /** Shown above the hero image when `images[0]` exists. Default `cover`; use `contain` for logos or marks. */
  featuredImageFit?: "contain" | "cover"
  images: CaseStudyGalleryImage[]
  results?: string
  websiteUrl?: string
  seoTitle?: string
  seoDescription?: string
  ctaProps?: CTAProps
}
