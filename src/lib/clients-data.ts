interface Client {
  id: string
  name: string
  logo: {
    light: string
  }
  caseStudyLink?: string
  services?: string[]
}

export const sampleClients: Client[] = [
  {
    id: "clickk",
    name: "Clickk",
    logo: {
      light: "/clickk.png",
    },
    caseStudyLink: "https://clickk.com/",
    services: ["Software Development", "Next.js", "React", "Tailwind", "PostgreSQL", "AWS"],
  },
  {
    id: "urban-sky",
    name: "Urban Sky",
    logo: {
      light: "/urban_sky_dark.png",
    },
    caseStudyLink: "https://urbansky.com/",
    services: ["Software Development", "NestJS", "React", "Tailwind", "PostgreSQL", "Playwright", "AWS"],
  },
  {
    id: "hodinkee",
    name: "Hodinkee",
    logo: {
      light: "/hodinkee_dark.png",
    },
    caseStudyLink: "https://hodinkee.com/",
    services: ["Software Development", "Ruby on Rails", "React", "Tailwind", "RSpec","PostgreSQL", "AWS"],
  },
  {
    id: "spectora",
    name: "Spectora",
    logo: {
      light: "/spectora_dark.png",
    },
    caseStudyLink: "https://spectora.com/",
    services: ["Software Development", "Ruby on Rails", "React", "Tailwind", "RSpec","PostgreSQL", "AWS"],
  },
  {
    id: "trace-first",
    name: "Trace First",
    logo: {
      light: "/tracefirst_dark.png",
    },
    caseStudyLink: "https://tracefirst.com/",
    services: ["Software Development", "Ruby on Rails", "JavaScript", "Bootstrap", "RSpec","PostgreSQL", "AWS"],
  },
  {
    id: "errantry-studios",
    name: "Errantry Studios",
    logo: {
      light: "/errantry_studios.png",
    },
    caseStudyLink: "https://errantry-studios.vercel.app/",
    services: ["Web Development", "Next.js", "React", "Tailwind"],
  },
  {
    id: "inner-strength-healing",
    name: "Inner Strength Healing",
    logo: {
      light: "/ish-logo.png",
    },
    caseStudyLink: "https://ishtherapy.com/",
    services: ["Web Development", "WordPress", "Oxygen"],
  },
  {
    id: "Superconductor Studios",
    name: "Superconductor Studios",
    logo: {
      light: "/superconductor_studios.png",
    },
    caseStudyLink: "https://superconductor-studios.vercel.app/",
    services: ["Web Development", "WordPress", "Oxygen"],
  },
  {
    id: "zestful",
    name: "Zestful",
    logo: {
      light: "/zestful.webp",
    },
    services: ["Software Development", "Ruby on Rails", "Stimulus.js", "Tailwind"],
  },
]

export type { Client }
