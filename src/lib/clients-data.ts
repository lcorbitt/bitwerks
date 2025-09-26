interface Client {
  id: string
  name: string
  logo: {
    light: string
    dark: string
  }
  caseStudyLink?: string
  services?: string[]
}

export const sampleClients: Client[] = [
  {
    id: "urban-sky",
    name: "Urban Sky",
    logo: {
      light: "/urban_sky_dark.png",
      dark: "/urban_sky_white.png"
    },
    caseStudyLink: "/case-studies/urban-sky",
    services: ["Software Development", "NestJS", "React", "Tailwind", "PostgreSQL", "Playwright", "AWS"],
  },
  {
    id: "hodinkee",
    name: "Hodinkee",
    logo: {
      light: "/hodinkee_dark.png",
      dark: "/hodinkee_white.svg"
    },
    caseStudyLink: "/case-studies/hodinkee",
    services: ["Software Development", "Ruby on Rails", "React", "Tailwind", "RSpec","PostgreSQL", "AWS"],
  },
  {
    id: "spectora",
    name: "Spectora",
    logo: {
      light: "/spectora_dark.png",
      dark: "/spectora_white.png"
    },
    caseStudyLink: "/case-studies/spectora",
    services: ["Software Development", "Ruby on Rails", "React", "Tailwind", "RSpec","PostgreSQL", "AWS"],
  },
  {
    id: "trace-first",
    name: "Trace First",
    logo: {
      light: "/tracefirst_dark.png",
      dark: "/tracefirst_dark.png"
    },
    caseStudyLink: "/case-studies/trace-first",
    services: ["Software Development", "Ruby on Rails", "JavaScript", "Bootstrap", "RSpec","PostgreSQL", "AWS"],
  },
  {
    id: "errantry-studios",
    name: "Errantry Studios",
    logo: {
      light: "/errantry_studios.png",
      dark: "/errantry_studios.png"
    },
    caseStudyLink: "/case-studies/errantry-studios",
    services: ["Web Development", "Next.js", "React", "Tailwind"],
  },
  {
    id: "zestful",
    name: "Zestful",
    logo: {
      light: "/zestful.webp",
      dark: "/zestful.webp"
    },
    caseStudyLink: "/case-studies/zestful",
    services: ["Software Development", "Ruby on Rails", "Stimulus.js", "Tailwind"],
  }
]

export type { Client }
