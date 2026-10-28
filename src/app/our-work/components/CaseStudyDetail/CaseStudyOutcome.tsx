interface CaseStudyOutcomeProps {
  results: string
}

export const CaseStudyOutcome = ({ results }: CaseStudyOutcomeProps) => (
  <section
    aria-labelledby="results-heading"
    className="rounded-xl border-l-4 border-brand bg-brand/[0.06] px-6 py-8 dark:bg-brand/10 md:px-8 md:py-10"
  >
    <h2 id="results-heading" className="text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
      Outcome
    </h2>
    <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">{results}</p>
  </section>
)
