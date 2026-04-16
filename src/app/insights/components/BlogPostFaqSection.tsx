"use client"

import { FaqAccordionSection } from "@/components/sections/faq-accordion-section"

export interface BlogPostFaqItem {
  question: string
  answerHtml: string
}

interface BlogPostFaqSectionProps {
  items: BlogPostFaqItem[]
}

export const BlogPostFaqSection = ({ items }: BlogPostFaqSectionProps) => {
  if (!items.length) return null

  return (
    <FaqAccordionSection
      sectionVariant="article"
      headingId="insights-faq-heading"
      title="FAQ"
      items={items.map((item, index) => ({
        value: `faq-${index}`,
        question: item.question,
        answer: (
          <div
            className="prose prose-sm max-w-none pb-1 dark:prose-invert prose-p:my-2 prose-p:first:mt-0 prose-p:last:mb-0 prose-a:text-brand prose-a:underline-offset-4"
            dangerouslySetInnerHTML={{ __html: item.answerHtml }}
          />
        ),
      }))}
    />
  )
}
