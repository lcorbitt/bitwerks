interface CaseStudyPartnersStripProps {
  partners: string[]
  clientName: string
}

export const CaseStudyPartnersStrip = ({ partners, clientName }: CaseStudyPartnersStripProps) => {
  if (!partners.length) return null

  return (
    <section
      aria-labelledby="case-study-partners-heading"
      className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-10"
    >
      <h2
        id="case-study-partners-heading"
        className="text-center text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground"
      >
        Ecosystem & partners
      </h2>
      <p className="mx-auto mt-2 max-w-2xl text-center text-sm text-muted-foreground">
        Work delivered in context with {clientName}&apos;s partners and stakeholders—not endorsements of BitWerks.
      </p>
      <ul className="mt-6 flex flex-wrap justify-center gap-3" role="list">
        {partners.map((partner) => (
          <li
            key={partner}
            className="rounded-full border border-border/80 bg-muted/30 px-4 py-2 text-sm font-medium text-foreground dark:bg-muted/20"
          >
            {partner}
          </li>
        ))}
      </ul>
    </section>
  )
}
