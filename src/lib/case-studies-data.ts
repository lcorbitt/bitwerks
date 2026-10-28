/** @deprecated Prefer listFeaturedCaseStudies() from case-studies registry. */
export interface CaseStudy {
  id: string
  company: string
  image: string
  alt: string
  href?: string
}

/** @deprecated Hero showcase is driven by registry in OurWorkHero. */
export const sampleCaseStudies: CaseStudy[] = [
  {
    id: "hodinkee",
    company: "Hodinkee",
    image: "/hodinkee-mockup.png",
    alt: "Hodinkee case study",
    href: "/our-work/hodinkee",
  },
  {
    id: "clickk",
    company: "Clickk",
    image: "/clickk-website.png",
    alt: "Clickk case study",
    href: "/our-work/clickk",
  },
]
