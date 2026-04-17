import type { CaseStudyPageData } from "@/lib/case-studies/case-study-page.model"

export const clickkCaseStudyPage: CaseStudyPageData = {
  slug: "clickk",
  clientName: "Clickk",
  tagline: "A performance-led marketing site that converts enterprise inquiries without sacrificing editorial craft.",
  industry: "B2B marketing & growth",
  businessGoal:
    "Clickk needed a flagship digital presence that could keep pace with a rapidly expanding services footprint. The prior site fragmented positioning, buried proof points, and forced prospects to hunt for credibility signals before they would book a conversation. The business imperative was straightforward: shorten the path from first visit to qualified pipeline while signaling the same rigor Clickk brings to client engagements.",
  ourRole: [
    "Strategy — Clarified ICP journeys, information architecture, and narrative hierarchy so services, proof, and conversion paths aligned with how buyers actually evaluate agencies.",
    "Design — Established a restrained visual language, typographic rhythm, and modular page system that scales as offerings evolve without looking like a template swap.",
    "Development — Implemented a fast, accessible Next.js surface with disciplined component architecture, optimized media delivery, and production-ready patterns the internal team can extend safely.",
    "Performance & SEO — Tuned Core Web Vitals, structured metadata, and crawl clarity so discovery and paid traffic land on pages that feel instant and intentional.",
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
    "After launch, Clickk reported a marked lift in qualified inbound conversations: prospects arrived already oriented on services and proof, which reduced early-cycle education and let senior strategists enter at a higher-trust moment. Qualitatively, the site now reads as the same caliber of work Clickk delivers for clients—precise, modern, and operationally serious.",
  websiteUrl: "https://clickk.com/",
  seoTitle: "Clickk — Case Study",
  seoDescription:
    "How BitWerks partnered with Clickk on strategy, design, and engineering to ship a flagship marketing site built for credibility, speed, and pipeline.",
}
