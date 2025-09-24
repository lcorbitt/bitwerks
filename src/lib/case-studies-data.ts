export interface CaseStudy {
  id: string
  company: string
  image: string
  alt: string
  href: string
}

export const sampleCaseStudies: CaseStudy[] = [
  {
    id: "clickk",
    company: "Clickk",
    image: "/clickk-case-study.png",
    alt: "Clickk case study",
    href: "/case-studies/clickk"
  },
  {
    id: "urban-sky",
    company: "Urban Sky",
    image: "/urban-sky-case-study.png", 
    alt: "Urban Sky case study",
    href: "/case-studies/urban-sky"
  },
  {
    id: "hodinkee",
    company: "Hodinkee",
    image: "/hodinkee-case-study.png",
    alt: "Hodinkee case study",
    href: "/case-studies/hodinkee"
  }
]
