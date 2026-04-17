import type { ReactNode } from "react"
import Image from "next/image"
import Link from "next/link"

import { CTA } from "@/components/sections/cta"
import { Heading1 } from "@/components/ui/heading"
import type { CaseStudyPageData } from "@/lib/case-studies/case-study-page.model"

interface CaseStudyPageProps {
  data: CaseStudyPageData
}

const SectionLabel = ({ children }: { children: ReactNode }) => (
  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">{children}</p>
)

const CaseStudyHero = ({ data }: { data: CaseStudyPageData }) => (
  <header className="relative border-b border-border/70 bg-muted/25 dark:bg-muted/10">
    <div
      className="pointer-events-none absolute inset-x-0 top-0 h-[min(28rem,70vh)] bg-gradient-to-b from-brand/[0.07] via-transparent to-transparent dark:from-brand/10"
      aria-hidden
    />
    <div className="relative mx-auto max-w-4xl px-4 sm:px-6">
      <div className="pb-16 pt-10 md:pb-24 md:pt-14">
        <div className="flex flex-wrap items-center gap-3">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">Case study</span>
          {data.industry ? (
            <span className="rounded-full border border-border/80 bg-background/80 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur-sm dark:bg-background/40">
              {data.industry}
            </span>
          ) : null}
        </div>
        <Heading1 className="mt-6 max-w-4xl text-pretty text-4xl !leading-[1.05] md:text-6xl">
          {data.clientName}
        </Heading1>
        <p
          className="mt-8 max-w-2xl border-l-[3px] border-brand/50 pl-5 text-pretty text-lg font-medium leading-relaxed text-foreground/90 dark:border-brand/45 dark:text-foreground/90 md:text-xl md:leading-snug"
          role="doc-subtitle"
        >
          {data.tagline}
        </p>
        {data.websiteUrl ? (
          <p className="mt-8 text-sm text-muted-foreground">
            <span className="text-muted-foreground">Live site: </span>
            <Link
              href={data.websiteUrl}
              className="font-medium text-foreground underline decoration-border underline-offset-4 transition-colors hover:text-brand hover:decoration-brand"
              target="_blank"
              rel="noopener noreferrer"
            >
              {data.websiteUrl.replace(/^https?:\/\//, "")}
            </Link>
          </p>
        ) : null}
      </div>
    </div>
  </header>
)

const NarrativeBlock = ({
  label,
  headingId,
  title,
  children,
}: {
  label: string
  headingId: string
  title: string
  children: ReactNode
}) => (
  <section className="border-b border-border/60 py-0" aria-labelledby={headingId}>
    <div className="mx-auto max-w-4xl px-4 sm:px-6 py-16 md:py-24">
      <SectionLabel>{label}</SectionLabel>
      <h2 id={headingId} className="mt-4 text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
        {title}
      </h2>
      <div className="mt-8 space-y-5 text-base leading-relaxed text-muted-foreground md:text-lg md:leading-relaxed">
        {children}
      </div>
    </div>
  </section>
)

const CaseStudyGallery = ({ images }: { images: CaseStudyPageData["images"] }) => {
  if (!images.length) return null

  return (
    <section className="border-b border-border/60 py-0" aria-labelledby="case-study-gallery-heading">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 md:py-24">
        <SectionLabel>Project gallery</SectionLabel>
        <h2
          id="case-study-gallery-heading"
          className="mt-4 max-w-2xl text-2xl font-semibold tracking-tight text-foreground md:text-3xl"
        >
          Curated views from the engagement
        </h2>
        <ul className="mt-12 space-y-12 md:space-y-16">
          {images.map((image, index) => {
            const isOffset = index % 2 === 1
            return (
              <li
                key={`${image.src}-${index}`}
                className={isOffset ? "md:flex md:justify-end" : ""}
              >
                <figure
                  className={`space-y-4 ${isOffset ? "w-full md:max-w-[92%] md:pl-10" : "w-full md:pr-10"}`}
                >
                  <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-border/60 bg-muted/20 shadow-sm dark:border-border/50 dark:shadow-none">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="(min-width: 1024px) 72rem, 100vw"
                      className="object-cover object-top"
                      priority={index === 0}
                    />
                  </div>
                  {image.caption ? (
                    <figcaption className="text-sm text-muted-foreground md:text-base">{image.caption}</figcaption>
                  ) : null}
                </figure>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}

const ResultsBlock = ({ results }: { results: string }) => (
  <section className="border-b border-border/60 py-0" aria-labelledby="case-study-results-heading">
    <div className="mx-auto max-w-4xl px-4 sm:px-6 py-16 md:py-24">
      <SectionLabel>Results</SectionLabel>
      <h2 id="case-study-results-heading" className="mt-4 text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
        Outcomes
      </h2>
      <div className="mt-10 rounded-2xl border border-border/70 bg-muted/15 p-8 md:p-10 dark:bg-muted/5">
        <p className="text-base leading-relaxed text-foreground/90 md:text-lg md:leading-relaxed">{results}</p>
      </div>
    </div>
  </section>
)

export const CaseStudyPage = ({ data }: CaseStudyPageProps) => (
  <article className="min-h-screen bg-background">
    <div className="mx-auto max-w-6xl px-4 pt-8 sm:px-6 md:pt-12">
      <Link
        href="/our-work"
        className="inline-flex text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        ← Back to Our Work
      </Link>
    </div>

    <CaseStudyHero data={data} />

    <NarrativeBlock label="Business context" headingId="business-goal-heading" title="What they needed to achieve">
      <p>{data.businessGoal}</p>
    </NarrativeBlock>

    <section className="border-b border-border/60 py-0" aria-labelledby="our-role-heading">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 py-16 md:py-24">
        <SectionLabel>Engagement</SectionLabel>
        <h2 id="our-role-heading" className="mt-4 text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
          How BitWerks partnered
        </h2>
        <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
          We owned delivery across the stack—clear interfaces, pragmatic tradeoffs, and steady communication—so
          leadership could focus on the business while we advanced the product surface.
        </p>
        <ul className="mt-10 space-y-6 border-l border-border/80 pl-6 md:pl-8">
          {data.ourRole.map((line, roleIndex) => (
            <li key={`${roleIndex}-${line.slice(0, 24)}`} className="text-base leading-relaxed text-foreground/90 md:text-lg">
              {line}
            </li>
          ))}
        </ul>
      </div>
    </section>

    <CaseStudyGallery images={data.images} />

    {data.results ? <ResultsBlock results={data.results} /> : null}

    <CTA {...(data.ctaProps ?? {})} />
  </article>
)
