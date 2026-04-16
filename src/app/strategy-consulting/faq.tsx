"use client"

import { FaqAccordionSection } from "@/components/sections/faq-accordion-section"

const FAQ_ITEMS = [
  {
    value: "item-1",
    question: "What do you get from a discovery engagement?",
    answer:
      "Prioritized backlog slices, written acceptance criteria, architecture or integration notes, content or CMS modeling where relevant, and UX artifacts tied to measurable behavior. Real working materials your team can use to estimate and sequence web or software work, not a slide deck alone.",
  },
  {
    value: "item-2",
    question: "How do you work with our existing engineers and designers?",
    answer:
      "We embed in your tools (issue tracker, Figma, docs, repos for read only review) and timebox workshops so we do not block delivery. Engineers validate feasibility as we go. Designers align on tokens, components, and states we can implement without surprises.",
  },
  {
    value: "item-3",
    question: "Do you audit analytics and event instrumentation?",
    answer:
      "Yes. We review funnels, naming consistency, sampling gaps, and whether events support the decisions you want to make. Recommendations include schema level changes and implementation notes your team can ship or we can pair on.",
  },
  {
    value: "item-4",
    question: "Can you help define our content model before we pick a CMS?",
    answer:
      "We map content types, relationships, editorial permissions, and preview needs first. Then we align options (headless, coupled, or custom) to those constraints so you are not retrofitting structure after launch.",
  },
  {
    value: "item-5",
    question: "What is the typical length of a strategy sprint?",
    answer:
      "Most discovery passes run two to four weeks depending on surface area, number of integrations, and how much of the stack we need to read. Larger replatforms may use multiple sprints with clear checkpoints between phases.",
  },
  {
    value: "item-6",
    question: "How does this tie into web or software development with BitWerks?",
    answer:
      "The same specs and models feed the build we do next: acceptance criteria become tickets, tokens and components map to the repo, and risks stay tracked with owners. If another team writes the code, you still leave with clear requirements and diagrams you can share.",
  },
] as const

export function FAQSection() {
  return (
    <FaqAccordionSection
      title="Strategy & Consulting FAQs"
      description="Common questions about our strategy and consulting services."
      items={[...FAQ_ITEMS]}
    />
  )
}
