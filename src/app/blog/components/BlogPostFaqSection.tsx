"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export interface BlogPostFaqItem {
  question: string
  answerHtml: string
}

interface BlogPostFaqSectionProps {
  items: BlogPostFaqItem[]
}

export const BlogPostFaqSection = ({ items }: BlogPostFaqSectionProps) => {
  if (!items.length) return null

  const defaultOpenValues = items.map((_, index) => `faq-${index}`)

  return (
    <aside className="mt-16 md:mt-20 border-t border-black/10 pt-16" aria-labelledby="blog-faq-heading">
      <h2
        id="blog-faq-heading"
        className="text-2xl font-semibold tracking-tight text-foreground md:text-3xl"
        aria-label="Frequently asked questions"
      >
        FAQ
      </h2>

      <Accordion type="multiple" defaultValue={defaultOpenValues} className="mt-8 w-full">
        {items.map((item, index) => (
          <AccordionItem key={`${item.question}-${index}`} value={`faq-${index}`} className="mt-6 border-0 first:mt-0">
            <AccordionTrigger className="py-4 text-left text-base font-medium leading-snug text-foreground hover:text-brand hover:no-underline sm:py-5 sm:text-[17px]">
              <span className="pr-3">{item.question}</span>
            </AccordionTrigger>
            <AccordionContent className="text-[15px] leading-relaxed text-muted-foreground">
              <div
                className="prose prose-sm max-w-none pb-1 dark:prose-invert prose-p:my-2 prose-p:first:mt-0 prose-p:last:mb-0 prose-a:text-brand prose-a:underline-offset-4"
                dangerouslySetInnerHTML={{ __html: item.answerHtml }}
              />
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </aside>
  )
}
