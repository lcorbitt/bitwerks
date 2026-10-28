import type { CaseStudyGalleryImage, CaseStudyPageData } from "@/lib/case-studies/case-study-page.model"
import { getCaseStudyHeroImage } from "@/lib/case-studies/registry"

import { VISIBLE_ACCOMPLISHMENTS_COUNT } from "./constants"

export const getHeroImage = (data: CaseStudyPageData) => getCaseStudyHeroImage(data)

export const getGalleryImages = (
  data: CaseStudyPageData,
  heroImage?: CaseStudyGalleryImage
): CaseStudyGalleryImage[] => {
  const heroSrc = heroImage?.src
  return data.images.filter((img) => img.src !== heroSrc)
}

export const splitAccomplishments = (accomplishments: string[]) => {
  const visible = accomplishments.slice(0, VISIBLE_ACCOMPLISHMENTS_COUNT)
  const remainder = accomplishments.slice(VISIBLE_ACCOMPLISHMENTS_COUNT)
  const hasMore = remainder.length > 0
  return { visible, remainder, hasMore }
}

export const getImageFit = (data: CaseStudyPageData) => data.featuredImageFit ?? "cover"
