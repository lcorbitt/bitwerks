"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Heading2 } from "@/components/ui/heading"
import { ScrollFadeIn } from "@/components/ui/scroll-fade-in"

export function FAQSection() {
  return (
    <section className="-mt-20 bg-light pt-40 dark:bg-tertiary">
      <ScrollFadeIn>
        <div className="container">
          <div className="mx-auto mb-16 text-center">
            <Heading2 className="mb-6">Strategy & Consulting FAQs</Heading2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              How we run technical discovery, documentation handoffs, and collaboration with your engineering team.
            </p>
          </div>

          <div className="mx-auto w-full">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-lg font-semibold text-gray-900 dark:text-white">
                  What do we walk away with after a discovery engagement?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 dark:text-gray-300">
                  Prioritized backlog slices, written acceptance criteria, architecture or integration notes, content or
                  CMS modeling where relevant, and UX artifacts tied to measurable behavior. Not a slide deck in a
                  folder: everything is formatted so your leads can estimate and sequence work.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger className="text-lg font-semibold text-gray-900 dark:text-white">
                  How do you work with our existing engineers and designers?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 dark:text-gray-300">
                  We embed in your tools (issue tracker, Figma, docs, repos for read only review) and timebox workshops
                  so we do not block delivery. Engineers validate feasibility as we go. Designers align on tokens,
                  components, and states we can implement without surprises.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger className="text-lg font-semibold text-gray-900 dark:text-white">
                  Do you audit analytics and event instrumentation?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 dark:text-gray-300">
                  Yes. We review funnels, naming consistency, sampling gaps, and whether events support the decisions you
                  want to make. Recommendations include schema level changes and implementation notes your team can ship
                  or we can pair on.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger className="text-lg font-semibold text-gray-900 dark:text-white">
                  Can you help define our content model before we pick a CMS?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 dark:text-gray-300">
                  We map content types, relationships, editorial permissions, and preview needs first. Then we align
                  options (headless, coupled, or custom) to those constraints so you are not retrofitting structure
                  after launch.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger className="text-lg font-semibold text-gray-900 dark:text-white">
                  What is the typical length of a strategy sprint?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 dark:text-gray-300">
                  Most discovery passes run two to four weeks depending on surface area, number of integrations, and
                  how much of the stack we need to read. Larger replatforms may sequence multiple sprints with clear
                  handoff milestones.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6">
                <AccordionTrigger className="text-lg font-semibold text-gray-900 dark:text-white">
                  How does this connect to implementation if we hire you to build?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 dark:text-gray-300">
                  The same artifacts feed estimation and sequencing for build. Acceptance criteria become tickets.
                  Tokens and components map to the repo. Open risks are tracked with owners. If you bring another
                  vendor, the documentation is still portable.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </ScrollFadeIn>
    </section>
  )
}
