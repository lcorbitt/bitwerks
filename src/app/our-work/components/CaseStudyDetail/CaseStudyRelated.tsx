import Image from "next/image"
import Link from "next/link"

import type { CaseStudyPageData } from "@/lib/case-studies/case-study-page.model"
import { getCaseStudyHeroImage } from "@/lib/case-studies/registry"

interface CaseStudyRelatedProps {
  related: CaseStudyPageData[]
}

export const CaseStudyRelated = ({ related }: CaseStudyRelatedProps) => {
  if (!related.length) return null

  return (
    <section aria-labelledby="related-case-studies-heading" className="border-t border-border/60 bg-light py-16 dark:bg-tertiary md:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2
          id="related-case-studies-heading"
          className="text-2xl font-semibold tracking-tight text-foreground md:text-3xl"
        >
          More case studies
        </h2>
        <ul className="mt-8 grid gap-6 sm:grid-cols-2" role="list">
          {related.map((study) => {
            const hero = getCaseStudyHeroImage(study)
            return (
              <li key={study.slug}>
                <Link
                  href={`/our-work/${study.slug}`}
                  className="group flex flex-col overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-black/5 transition-shadow hover:shadow-lg dark:bg-primary dark:ring-white/10 sm:flex-row"
                >
                  {hero ? (
                    <div className="relative aspect-[16/10] w-full shrink-0 bg-muted/30 sm:w-48 md:w-56">
                      <Image
                        src={hero.src}
                        alt={hero.alt}
                        fill
                        className={
                          study.featuredImageFit === "contain"
                            ? "object-contain p-4"
                            : "object-cover object-center"
                        }
                        sizes="224px"
                      />
                    </div>
                  ) : null}
                  <div className="flex flex-1 flex-col justify-center p-5 sm:p-6">
                    {study.industry ? (
                      <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-brand">
                        {study.industry}
                      </p>
                    ) : null}
                    <h3 className="mt-2 text-lg font-semibold text-foreground transition-colors group-hover:text-brand">
                      {study.clientName}
                    </h3>
                    <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">
                      {study.excerpt ?? study.tagline}
                    </p>
                    <span className="mt-4 text-sm font-semibold text-brand">View case study →</span>
                  </div>
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
