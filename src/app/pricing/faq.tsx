"use client"

import { FaqAccordionSection } from "@/components/sections/faq-accordion-section"

const FAQ_ITEMS = [
  {
    value: "item-1",
    question: "What's the difference between website and software pricing?",
    answer:
      "Website pricing is for static sites and simple web presence, while Software pricing is for interactive applications with user accounts, databases, and complex functionality. Enterprise tiers include design system handoffs and complete audits/refactoring of existing projects.",
  },
  {
    value: "item-2",
    question: "What's included in the hosting?",
    answer: "All plans include 1 year of hosting.",
  },
  {
    value: "item-3",
    question: "Can I upgrade my plan later?",
    answer:
      "Yes! You can upgrade within the same category (Basic to Professional, etc.) or switch between Website and Software pricing. We'll credit your previous payment toward the upgrade.",
  },
  {
    value: "item-4",
    question: "What's included in the Enterprise design system handoff?",
    answer:
      "Enterprise plans include a complete design system with component library, style guide, brand guidelines, and documentation. This allows your internal team to maintain and extend the design consistently across all future projects.",
  },
  {
    value: "item-5",
    question: "What does the audit and refactor service include?",
    answer:
      "We'll analyze your existing website or application for performance issues, security vulnerabilities, outdated code, and UX problems. Then we'll refactor, modernize, and optimize everything while maintaining your brand and functionality.",
  },
  {
    value: "item-6",
    question: "What happens after the first year?",
    answer:
      "After the first year, hosting costs $25/month for Websites and $50/month for Software. We'll handle the renewal and keep your project running smoothly.",
  },
  {
    value: "item-7",
    question: "Do you provide ongoing support?",
    answer: "Yes! All plans include 24/7 support, bug fixes, and security updates.",
  },
] as const

export function FAQSection() {
  return (
    <FaqAccordionSection
      title="FAQs"
      description="Common questions about our pricing and services."
      items={[...FAQ_ITEMS]}
      withScrollFadeIn={false}
    />
  )
}
