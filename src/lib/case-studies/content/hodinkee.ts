import type { CaseStudyPageData } from "@/lib/case-studies/case-study-page.model"

export const hodinkeeCaseStudyPage: CaseStudyPageData = {
  slug: "hodinkee",
  clientName: "Hodinkee",
  tagline:
    "Helping one of the world’s most influential watch media brands evolve their design system, sharpen product experiences, and ship internal tools that keep editorial and commerce teams moving.",
  industry: "Media / luxury horology",
  excerpt:
    "Partnered with Hodinkee on design system evolution, UX improvements across customer-facing applications, and internal tooling—supporting a brand trusted by collectors worldwide and aligned with Watches of Switzerland Group.",
  featured: true,
  sortOrder: 1,
  partners: ["Watches of Switzerland Group"],
  highlights: [
    { label: "Sector", value: "Luxury media & commerce" },
    { label: "Engagement", value: "Design system & product engineering" },
    { label: "Stack", value: "Ruby on Rails, React, PostgreSQL" },
    { label: "Scale", value: "Global editorial & retail audience" },
  ],
  businessGoal:
    "Hodinkee operates at the intersection of editorial storytelling and commerce for a passionate global audience. The product surface spans public-facing experiences and internal workflows that editorial, merchandising, and operations teams rely on daily. The work centered on a cohesive design system, clearer UX across applications, and practical internal tools—so new features shipped with consistency, less rework, and stronger alignment between design and engineering.",
  servicesUsed: ["Web Development", "UX & UI Design", "Software Development"],
  featuredImageFit: "cover",
  heroImage: {
    src: "/hodinkee-mockup.png",
    alt: "Hodinkee site shown in a browser mockup on a laptop",
    caption: "Editorial and commerce experiences with a refined visual system",
  },
  images: [
    {
      src: "/hodinkee-mockup.png",
      alt: "Hodinkee site shown in a browser mockup on a laptop",
      caption: "Product experience with updated design system patterns",
    },
    {
      src: "/hodinkee-case-study.png",
      alt: "Hodinkee homepage and editorial layout on desktop",
      caption: "Homepage and editorial stack",
    },
    {
      src: "/hodinkee-mobile.png",
      alt: "Hodinkee mobile experience",
      caption: "Responsive layouts for on-the-go collectors",
    },
  ],
  accomplishments: [
    "Collaborated with Hodinkee to implement a new design system that brought consistency across customer-facing applications and reduced one-off UI patterns.",
    "Improved UX across key product flows so editorial, commerce, and account experiences felt clearer and more intentional for end users.",
    "Developed internal tools that helped operational teams work faster—with less manual coordination between content, merchandising, and support workflows.",
    "Worked within Hodinkee’s established Ruby on Rails and React stack, aligning frontend structure with backend services and existing data models.",
    "Supported iterative delivery with attention to performance, accessibility, and maintainability as the brand’s product surface evolved.",
  ],
  results:
    "Hodinkee gained a more cohesive product language, smoother user journeys, and internal tooling that reduced friction for teams shipping editorial and commerce work—without disrupting the brand experience collectors already trust.",
  websiteUrl: "https://hodinkee.com/",
  seoTitle: "Hodinkee: Case Study",
  seoDescription:
    "How BitWerks partnered with Hodinkee on design system evolution, UX improvements, internal tools, and product engineering for one of the world’s leading watch media brands.",
}
