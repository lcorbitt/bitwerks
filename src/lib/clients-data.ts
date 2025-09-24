interface Client {
  id: string
  name: string
  logo: {
    light: string
    dark: string
  }
  caseStudyLink?: string
  icons: string[]
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
    icons: ["🚀", "🛰️", "✈️", "🌌", "🛸", "🌍", "⭐", "🔭"]
  },
  {
    id: "hodinkee",
    name: "Hodinkee",
    logo: {
      light: "/hodinkee_dark.png",
      dark: "/hodinkee_white.svg"
    },
    caseStudyLink: "/case-studies/hodinkee",
    icons: ["💎", "⭐", "✨", "🔥", "⌚", "💍", "👑", "🌟"]
  },
  {
    id: "spectora",
    name: "Spectora",
    logo: {
      light: "/spectora_dark.png",
      dark: "/spectora_white.png"
    },
    caseStudyLink: "/case-studies/spectora",
    icons: ["🔍", "📊", "🎯", "⚡", "🏠", "📋", "✅", "📈"]
  },
  {
    id: "trace-first",
    name: "Trace First",
    logo: {
      light: "/tracefirst_dark.png",
      dark: "/tracefirst_dark.png"
    },
    caseStudyLink: "/case-studies/trace-first",
    icons: ["🔗", "📈", "💡", "🚀", "🌐", "📊", "⚡", "🎯"]
  },
  {
    id: "errantry-studios",
    name: "Errantry Studios",
    logo: {
      light: "/errantry_studios.png",
      dark: "/errantry_studios.png"
    },
    caseStudyLink: "/case-studies/errantry-studios",
    icons: ["🎨", "✨", "💎", "🔥", "🎭", "🖼️", "🌈", "🎪"]
  },
  {
    id: "zestful",
    name: "Zestful",
    logo: {
      light: "/zestful.webp",
      dark: "/zestful.webp"
    },
    caseStudyLink: "/case-studies/zestful",
    icons: ["🌟", "💫", "⚡", "🎯", "💪", "🚀", "✨", "🔥"]
  }
]

export type { Client }
