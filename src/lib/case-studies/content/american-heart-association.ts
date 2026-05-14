import type { CaseStudyPageData } from "@/lib/case-studies/case-study-page.model"

export const americanHeartAssociationCaseStudyPage: CaseStudyPageData = {
  slug: "american-heart-association",
  clientName: "American Heart Association",
  tagline:
    "Partnering through Zuri Group to expand the American Heart Association’s Donations and Rewards programs across their established web application.",
  industry: "Nonprofit / health & donations",
  businessGoal:
    "The American Heart Association runs a production web platform that powers donor engagement and rewards programs at national scale. The work focuses on backend services, API architecture, and database design — extending an existing system with scalable, well-documented capabilities for donations and rewards while preserving reliability for the experiences that already depend on it. Delivery happens in Azure with TypeScript, NestJS, and PostgreSQL, alongside Zuri Group and AHA’s cross-functional teams.",
  servicesUsed: ["Software Development", "API Architecture", "Database Design"],
  featuredImageFit: "contain",
  images: [
    {
      src: "/aha-light.png",
      alt: "American Heart Association logo",
      caption: "Brand mark",
    },
  ],
  accomplishments: [
    "Supporting the American Heart Association through Zuri Group on enhancements to an established production platform, with focus on backend services, API design, and database evolution for donations and rewards.",
    "Building and maintaining well-documented APIs using Node.js, NestJS, and TypeScript that broaden the Donations and Rewards programs while preserving compatibility with existing consumers.",
    "Collaborating on PostgreSQL schema design and query optimization so new donation and rewards flows scale without straining the existing data model.",
    "Working in an Azure cloud environment with attention to CI/CD discipline, deploy safety, and operational reliability across services.",
    "Participating in technical design discussions and contributing to architectural decisions that prioritize clean architecture, documentation, and long-term maintainability.",
    "Troubleshooting and improving reliability and performance across production services, not just shipping greenfield features.",
    "Coordinating across cross-functional teams at AHA and Zuri Group so donation and rewards capabilities land as cohesive product increments rather than disconnected backend or data passes.",
  ],
  results:
    "Engagement focuses on broadening the reach and reliability of AHA’s donation and rewards experiences while strengthening the platform’s API and data foundations so the programs can continue to grow without accumulating long-term debt.",
  websiteUrl: "https://www.heart.org/",
  seoTitle: "American Heart Association: Case Study",
  seoDescription:
    "How BitWerks supports the American Heart Association through Zuri Group: backend services, API architecture, and PostgreSQL work that expand AHA’s Donations and Rewards programs on Azure.",
}
