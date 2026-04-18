import type { CaseStudyPageData } from "@/lib/case-studies/case-study-page.model"

export const clickkCaseStudyPage: CaseStudyPageData = {
  slug: "clickk",
  clientName: "Clickk",
  tagline:
    "Evolving Clickk’s product engineering from early systems into a scalable, production ready platform, including architecture, standards, and alignment across teams.",
  industry: "B2B marketing & growth",
  businessGoal:
    "Clickk’s product had to move beyond fast moving prototypes into an architecture the whole team could build on without throttling delivery. The focus was a coherent frontend system, tighter API and data contracts with backend services, and repeatable engineering standards so new work stayed maintainable as scope and team size grew.",
  accomplishments: [
    "Helped Clickk move from early-stage builds toward a more scalable, production-ready platform, with shared architecture direction and closer alignment between frontend, backend, and product.",
    "Shaped the frontend around modular patterns, clearer boundaries, and components that could grow with scope without turning every release into a rewrite.",
    "Worked alongside Clickk’s engineering group to tighten API design and data contracts so interfaces, services, and data stayed consistent, faster to change, and easier to reason about.",
    "Introduced and maintained engineering standards across the codebase to improve maintainability, readability, and long-term scalability as the team and feature surface grew.",
    "Aligned state, data-fetching, and UI structure so teams shipped with less duplication, fewer one-off patterns, and steadier delivery cadence.",
    "Supported clearer engineering process, review expectations, and day-to-day workflow so delivery stayed predictable and rework dropped.",
    "Invested in documentation, shared practices, and onboarding-friendly structure so knowledge spread across the team instead of living in isolated pockets.",
    "Coordinated delivery across disciplines so roadmap work landed as cohesive product increments rather than disconnected UI or backend passes.",
  ],
  servicesUsed: [
    "Software Development",
    "Strategy & Consulting",
    "UX & UI Design",
  ],
  images: [
    {
      src: "/clickk-website.png",
      alt: "Clickk marketing website homepage on a desktop viewport",
      caption: "Homepage hero and primary narrative stack",
    },
    {
      src: "/clickk-mockup.png",
      alt: "Clickk site shown in a browser mockup on a laptop",
      caption: "Editorial layout with generous whitespace and clear service entry points",
    },
  ],
  results:
    "Engineering became more consistent and predictable, with clearer reviews, less rework, and tighter alignment across frontend, backend, and product. Onboarding and decision-making improved through better documentation and clearly defined expectations, and the technical foundation enabled the team to ship a market-ready product without accumulating long-term debt.",
  websiteUrl: "https://clickk.com/",
  seoTitle: "Clickk: Case Study",
  seoDescription:
    "How BitWerks helped Clickk scale product engineering: frontend architecture, API alignment, shared standards, documentation, and cross-team delivery from early builds toward market-ready releases.",
}
