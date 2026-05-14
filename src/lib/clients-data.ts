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
    caseStudyLink: "/our-work/clickk",
    services: ["Software Development", "Next.js", "React", "Tailwind", "PostgreSQL", "AWS"],
  },
  {
    id: "american-heart-association",
    name: "American Heart Association",
    logo: {
      light: "/aha-light.png",
    },
    caseStudyLink: "/our-work/american-heart-association",
    services: ["Software Development", "NestJS", "Node.js", "TypeScript", "PostgreSQL", "Azure", "REST APIs"],
  },
  {
    id: "urban-sky",
    name: "Urban Sky",
    logo: {
      light: "/urban_sky_dark.png",
    },
    caseStudyLink: "/our-work/urban-sky",
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
    id: "zuri-group",
    name: "Zuri Group",
    logo: {
      light: "/zuri-group-light.png",
    },
    caseStudyLink: "https://zurigroup.com/",
    services: ["Software Development", "Partner Agency", "Nonprofit Tech"],
  },
]

export type { Client }
