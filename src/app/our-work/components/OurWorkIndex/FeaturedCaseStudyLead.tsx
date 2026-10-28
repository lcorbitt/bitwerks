import Image from "next/image"
import Link from "next/link"

import type { CaseStudyPageData } from "@/lib/case-studies/case-study-page.model"
import { getCaseStudyHeroImage } from "@/lib/case-studies/registry"

interface FeaturedCaseStudyLeadProps {
  study: CaseStudyPageData
}

export const FeaturedCaseStudyLead = ({ study }: FeaturedCaseStudyLeadProps) => {
  const hero = getCaseStudyHeroImage(study)
  const href = `/our-work/${study.slug}`

  return (
    <Link
      href={href}
      className="group relative isolate mx-auto block max-w-6xl overflow-hidden rounded-none shadow-sm transition-shadow duration-300 hover:shadow-xl"
    >
      <div className="grid gap-0 lg:grid-cols-[1.05fr_1fr]">
        <div className="relative aspect-[16/10] min-h-[220px] bg-muted/40 lg:aspect-auto lg:min-h-[min(52vh,520px)]">
          {hero ? (
            <Image
              src={hero.src}
              alt={hero.alt}
              fill
              className={
                study.featuredImageFit === "contain"
                  ? "object-contain p-6 transition duration-500 ease-out group-hover:scale-[1.01] md:p-10"
                  : "object-cover transition duration-500 ease-out group-hover:scale-[1.02]"
              }
              sizes="(max-width: 1024px) 100vw, 55vw"
              priority
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-muted to-muted/60 text-sm text-muted-foreground">
              {study.clientName}
            </div>
          )}
        </div>

        <div className="relative flex flex-col justify-center bg-white px-6 py-8 dark:bg-primary sm:px-10 sm:py-10 lg:px-12 lg:py-14">
          {study.industry ? (
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand">{study.industry}</p>
          ) : null}
          <h2 className="mt-3 text-balance text-2xl font-semibold leading-tight tracking-tight text-foreground sm:text-3xl lg:text-4xl">
            <span className="transition-colors group-hover:text-brand">{study.clientName}</span>
          </h2>
          <p className="mt-4 line-clamp-4 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            {study.excerpt ?? study.tagline}
          </p>
          {study.servicesUsed?.length ? (
            <ul className="mt-5 flex flex-wrap gap-2" role="list">
              {study.servicesUsed.slice(0, 4).map((service) => (
                <li
                  key={service}
                  className="rounded-full bg-brand/10 px-3 py-1 text-xs font-medium text-foreground dark:text-foreground"
                >
                  {service}
                </li>
              ))}
            </ul>
          ) : null}
          <span className="mt-8 inline-flex items-center text-sm font-semibold text-brand">
            View case study
            <svg
              className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              viewBox="0 0 16 16"
              fill="none"
              aria-hidden
            >
              <path
                d="M3 8h10M9 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </div>
      </div>
    </Link>
  )
}
