import type { CTAProps } from "@/components/sections/cta"

export interface CaseStudyGalleryImage {
  src: string
  alt: string
  caption?: string
}

export interface CaseStudyHighlight {
  label: string
  value: string
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
  /** Primary visual for index cards and detail hero; defaults to images[0]. */
  heroImage?: CaseStudyGalleryImage
  /** Short summary for portfolio index cards. */
  excerpt?: string
  /** Include in featured section on /our-work. */
  featured?: boolean
  /** Featured section ordering (lower = earlier). */
  sortOrder?: number
  /** Partner or ecosystem names for credibility strip (client context only). */
  partners?: string[]
  /** Scannable facts for detail page highlight row. */
  highlights?: CaseStudyHighlight[]
  results?: string
  websiteUrl?: string
  seoTitle?: string
  seoDescription?: string
  ctaProps?: CTAProps
}
