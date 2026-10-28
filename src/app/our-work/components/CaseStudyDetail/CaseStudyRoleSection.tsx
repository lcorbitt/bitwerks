"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

import { splitAccomplishments } from "./utils"

interface CaseStudyRoleSectionProps {
  accomplishments: string[]
}

export const CaseStudyRoleSection = ({ accomplishments }: CaseStudyRoleSectionProps) => {
  const { visible, remainder, hasMore } = splitAccomplishments(accomplishments)

  return (
    <section aria-labelledby="our-role-heading" className="py-4 md:py-6">
      <h2 id="our-role-heading" className="text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
        Our Role
      </h2>
      <ul className="mt-6 grid gap-4 sm:grid-cols-2" role="list">
        {visible.map((line, i) => (
          <li
            key={i}
            className="rounded-lg border border-border/70 bg-muted/20 p-5 text-base leading-relaxed text-foreground/90 dark:bg-muted/10"
          >
            <span className="mb-2 block text-xs font-semibold uppercase tracking-wider text-brand">
              {String(i + 1).padStart(2, "0")}
            </span>
            {line}
          </li>
        ))}
      </ul>

      {hasMore ? (
        <Accordion type="single" collapsible className="mt-6 w-full">
          <AccordionItem value="more-accomplishments" className="border-none">
            <AccordionTrigger className="py-3 text-base font-semibold text-brand hover:no-underline">
              Show all contributions ({accomplishments.length})
            </AccordionTrigger>
            <AccordionContent>
              <ul className="mt-2 space-y-3 border-t border-border/60 pt-4" role="list">
                {remainder.map((line, i) => (
                  <li
                    key={i}
                    className="text-base leading-relaxed text-muted-foreground before:mr-2 before:text-brand before:content-['•']"
                  >
                    {line}
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      ) : null}
    </section>
  )
}
