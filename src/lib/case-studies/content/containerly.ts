import type { CaseStudyPageData } from "@/lib/case-studies/case-study-page.model"

export const containerlyCaseStudyPage: CaseStudyPageData = {
  slug: "containerly",
  clientName: "Containerly",
  tagline:
    "Replacing shipment email chaos with a shared customer experience, turning every shipment into a single, shareable workspace that keeps customers and operators aligned without inbox-heavy workflows.",
  industry: "Logistics / freight & supply chain communication",
  businessGoal:
    "In logistics, shipment visibility technically already exists. Tracking systems, TMS platforms, and internal tools all provide status. The real problem lives outside those systems, in the communication around each shipment: endless “any update?” emails, documents scattered across threads, manual status checks, and constant confusion over approvals and ownership. Teams aren’t struggling to track shipments; they’re struggling to manage the communication around them, and for high-volume operators like freight brokers and 3PLs that becomes a daily operational bottleneck. The core issue isn’t missing data. It’s fragmented communication. Containerly set out to introduce a new layer into the logistics stack: a shared, customer-facing space per shipment that replaces email threads entirely.",
  servicesUsed: [
    "Software Development",
    "Product Strategy",
    "UX & UI Design",
    "API Architecture",
  ],
  featuredImageFit: "contain",
  images: [
    {
      src: "/containerly-logo.png",
      alt: "Containerly logo",
      caption: "Brand mark",
    },
  ],
  accomplishments: [
    "Reframed the problem away from shipment tracking and toward the communication layer between operators and customers, then designed Containerly to replace inbox-driven coordination with a single shared workspace per shipment.",
    "Built one shareable link per shipment: a single, customer-facing view that replaces fragmented email, spreadsheet, and tool-hopping workflows with one source of truth for internal teams and customers.",
    "Centralized documents inside each shipment so the latest files live in context, eliminating digging through email threads to find the right version.",
    "Designed approval workflows that let customers review and approve documents directly within the shipment workspace, removing back-and-forth and ambiguity around sign-off.",
    "Structured all updates and conversations around the shipment itself, so communication stays in context and tied to the work instead of scattered across inboxes.",
    "Kept the customer experience deliberately lightweight, with no complex onboarding or heavy systems, just a clear, accessible interface customers can use immediately.",
    "Architected Containerly as a modern, lightweight layer that integrates into existing logistics workflows without forcing a full system replacement: Next.js and TypeScript on the front end, with Supabase powering the backend, authentication, and structured, auditable data.",
    "Optimized the build for speed, usability, and rapid iteration, validating the product through real shipment workflows and early-user feedback rather than assumptions.",
  ],
  results:
    "Containerly reduces the operational burden of shipment communication by eliminating repetitive status-update emails, cutting time spent searching for documents, improving customer visibility and transparency, and streamlining approvals. It shifts logistics teams away from inbox-driven workflows toward structured, scalable coordination, letting them grow shipment volume without growing communication overhead. The product is currently in active development and early beta, with a small group of early users helping shape it against real shipment workflows and communication patterns.",
  seoTitle: "Containerly: Case Study",
  seoDescription:
    "How Bitwerks built Containerly, a logistics communication platform that turns every shipment into a single, shareable workspace, replacing email chaos with centralized documents, approvals, and structured updates.",
}
