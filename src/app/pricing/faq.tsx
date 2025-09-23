"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Heading2 } from "@/components/ui/heading"

export function FAQSection() {
  return (
    <section className="bg-light dark:bg-tertiary pt-40 -mt-20">
      <div className="container">
        <div className="mx-auto text-center mb-16">
          <Heading2 className="mb-6">
            FAQs
          </Heading2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Common questions about our pricing and services.
          </p>
        </div>
        
        <div className="mx-auto w-full">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-lg font-semibold text-gray-900 dark:text-white">
                What&apos;s the difference between website and software pricing?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 dark:text-gray-300">
                Website pricing is for static sites and simple web presence, while Software pricing is for interactive applications with user accounts, databases, and complex functionality. Enterprise tiers include design system handoffs and complete audits/refactoring of existing projects.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-lg font-semibold text-gray-900 dark:text-white">
                What&apos;s included in the hosting?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 dark:text-gray-300">
                All plans include 1 year of hosting. Websites use Vercel (optimized for static sites), while Software use Render (better for full-stack applications with databases).
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-lg font-semibold text-gray-900 dark:text-white">
                Can I upgrade my plan later?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 dark:text-gray-300">
                Yes! You can upgrade within the same category (Basic to Professional, etc.) or switch between Website and Software pricing. We&apos;ll credit your previous payment toward the upgrade.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-lg font-semibold text-gray-900 dark:text-white">
                What&apos;s included in the Enterprise design system handoff?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 dark:text-gray-300">
                Enterprise plans include a complete design system with component library, style guide, brand guidelines, and documentation. This allows your internal team to maintain and extend the design consistently across all future projects.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-5">
              <AccordionTrigger className="text-lg font-semibold text-gray-900 dark:text-white">
                What does the audit and refactor service include?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 dark:text-gray-300">
                We&apos;ll analyze your existing website or application for performance issues, security vulnerabilities, outdated code, and UX problems. Then we&apos;ll refactor, modernize, and optimize everything while maintaining your brand and functionality.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-6">
              <AccordionTrigger className="text-lg font-semibold text-gray-900 dark:text-white">
                What happens after the first year?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 dark:text-gray-300">
                After the first year, hosting costs $25/month for Websites and $50/month for Software. We&apos;ll handle the renewal and keep your project running smoothly.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-7">
              <AccordionTrigger className="text-lg font-semibold text-gray-900 dark:text-white">
                Do you provide ongoing support?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 dark:text-gray-300">
                Yes! Professional and Enterprise plans include 24/7 support. Basic/Starter plans include email support. All plans include bug fixes and security updates.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  )
}
