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
              Common questions about our strategy and consulting services.
            </p>
          </div>

          <div className="mx-auto w-full">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-lg font-semibold text-gray-900 dark:text-white">
                  What do you get from a discovery engagement?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 dark:text-gray-300">
                  Prioritized backlog slices, written acceptance criteria, architecture or integration notes, content or
                  CMS modeling where relevant, and UX artifacts tied to measurable behavior. Real working materials your
                  team can use to estimate and sequence web or software work, not a slide deck alone.
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
                  how much of the stack we need to read. Larger replatforms may use multiple sprints with clear
                  checkpoints between phases.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6">
                <AccordionTrigger className="text-lg font-semibold text-gray-900 dark:text-white">
                  How does this tie into web or software development with BitWerks?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 dark:text-gray-300">
                  The same specs and models feed the build we do next: acceptance criteria become tickets, tokens and
                  components map to the repo, and risks stay tracked with owners. If another team writes the code, you
                  still leave with clear requirements and diagrams you can share.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </ScrollFadeIn>
    </section>
  )
}
