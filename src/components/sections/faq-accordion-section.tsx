"use client"

import type { ReactNode } from "react"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Heading2 } from "@/components/ui/heading"
import { ScrollFadeIn } from "@/components/ui/scroll-fade-in"

export interface FaqAccordionSectionItem {
  value: string
  question: string
  answer: ReactNode
}

interface FaqAccordionSectionProps {
  title: ReactNode
  description?: ReactNode
  items: FaqAccordionSectionItem[]
  /** Service pages overlap the prior curved section; insights articles use padded spacing after article body. */
  sectionVariant?: "service" | "article"
  /** When false, inner layout renders without ScrollFadeIn (e.g. pricing). */
  withScrollFadeIn?: boolean
  /** Optional id on the section heading for landmarks / aria-labelledby. */
  headingId?: string
}

const sectionShellClass: Record<"service" | "article", string> = {
  service: "-mt-20 bg-light pt-40 dark:bg-tertiary",
  article: "bg-transparent py-16 md:py-20 lg:py-24",
}

export const FaqAccordionSection = ({
  title,
  description,
  items,
  sectionVariant = "service",
  withScrollFadeIn = true,
  headingId,
}: FaqAccordionSectionProps) => {
  const inner = (
    <div className="container">
      <div className="mx-auto mb-16 text-center">
        <Heading2 className="mb-6" id={headingId}>
          {title}
        </Heading2>
        {description ? <p className="text-lg text-gray-600 dark:text-gray-300">{description}</p> : null}
      </div>

      <div className="mx-auto w-full">
        <Accordion type="single" collapsible className="w-full">
          {items.map((item) => (
            <AccordionItem key={item.value} value={item.value}>
              <AccordionTrigger className="text-lg font-semibold text-gray-900 dark:text-white">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 dark:text-gray-300">{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  )

  const body = withScrollFadeIn ? <ScrollFadeIn>{inner}</ScrollFadeIn> : inner

  return (
    <section className={sectionShellClass[sectionVariant]} {...(headingId ? { "aria-labelledby": headingId } : {})}>
      {body}
    </section>
  )
}
