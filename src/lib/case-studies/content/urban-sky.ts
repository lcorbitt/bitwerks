import type { CaseStudyPageData } from "@/lib/case-studies/case-study-page.model"

export const urbanSkyCaseStudyPage: CaseStudyPageData = {
  slug: "urban-sky",
  clientName: "Urban Sky",
  tagline:
    "Developed and maintained mission-critical aerospace software trusted by organizations including the U.S. Military, NASA, and the FAA.",
  industry: "Aerospace / stratospheric flight operations",
  businessGoal:
    "Urban Sky flies reusable balloons in the stratosphere for imaging, weather, and communications missions. Operators need a dependable web interface to monitor telemetry, schedule and validate commands, and coordinate mission configuration under tight time pressure. The product must stay clear for non-technical flight crews, enforce permissions and safety rules, and keep state consistent with live hardware and APIs during active flights.",
  servicesUsed: ["Software Development", "UX & UI Design"],
  featuredImageFit: "contain",
  images: [
    {
      src: "/urban_sky_dark.png",
      alt: "Urban Sky logo",
      caption: "Brand mark",
    },
  ],
  accomplishments: [
    "Supported Urban Sky in evolving the operator-facing mission console for stratospheric balloon operations, covering mission state, configuration, and workflows that stay reliable under live flight pressure.",
    "Delivery focused on real-time telemetry and command experiences, permission-aware behavior, and steady synchronization with backend services as missions and hardware state changed.",
    "Strengthened operator clarity through logging, visualization, and validation patterns that reduced ambiguity and helped prevent unsafe or invalid commands for mixed technical audiences.",
    "Extended mission planning and prediction tooling so teams could compare standard path views with broader forecasting and scenario-style visuals where operational decisions required it.",
    "Improved release discipline by rolling out feature flagging across client and server contexts, enabling safer rollouts and more controlled experimentation.",
    "Modernized high-touch workflows including mission duplication, guest and partner access, cross-organization device views, and automated command history so audits were easier and manual work dropped.",
    "Executed time-sensitive integration work when communications and hardware timelines required rapid turnaround without compromising flight readiness.",
    "Improved mission and ballast management end to end through refactors and product-wide consistency so operators saw fewer edge cases and fragmented flows.",
    "Continued iterative hardening across reliability, performance, and usability as mission volume and partner use of the platform grew.",
  ],
  results:
    "Operators gained clearer mission visibility, safer command paths, and less manual busywork around documentation and guest sharing. Prediction and cloud forecasting tools became more flexible for mission planning, while feature flags and refactors reduced risk as the platform evolved ahead of flight schedules.",
  websiteUrl: "https://urbansky.com/",
  seoTitle: "Urban Sky: Case Study",
  seoDescription:
    "How BitWerks supported Urban Sky’s mission operations software: real-time telemetry and command workflows, prediction tooling, safer releases, partner access, and ongoing platform hardening.",
}
