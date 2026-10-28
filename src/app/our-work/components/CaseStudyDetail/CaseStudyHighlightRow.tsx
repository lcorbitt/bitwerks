import type { CaseStudyHighlight } from "@/lib/case-studies/case-study-page.model"

interface CaseStudyHighlightRowProps {
  highlights: CaseStudyHighlight[]
}

export const CaseStudyHighlightRow = ({ highlights }: CaseStudyHighlightRowProps) => {
  if (!highlights.length) return null

  return (
    <section aria-labelledby="case-study-highlights-heading" className="border-y border-border/60 bg-white dark:bg-primary">
      <h2 id="case-study-highlights-heading" className="sr-only">
        Project highlights
      </h2>
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px bg-border/60 sm:grid-cols-4">
        {highlights.map((item) => (
          <div
            key={item.label}
            className="flex flex-col gap-1 bg-white px-5 py-6 dark:bg-primary sm:px-8 sm:py-8"
          >
            <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-muted-foreground">
              {item.label}
            </span>
            <span className="text-sm font-semibold leading-snug text-foreground sm:text-base">{item.value}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
