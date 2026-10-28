import Image from "next/image"
import Link from "next/link"

import { Badge } from "@/components/ui/badge"
import { Heading1 } from "@/components/ui/heading"
import type { CaseStudyGalleryImage, CaseStudyPageData } from "@/lib/case-studies/case-study-page.model"

import { CASE_STUDY_BACK_LABEL } from "./constants"
import { getImageFit } from "./utils"

interface CaseStudyHeroProps {
  data: CaseStudyPageData
  heroImage?: CaseStudyGalleryImage
}

export const CaseStudyHero = ({ data, heroImage }: CaseStudyHeroProps) => (
  <header className="relative overflow-hidden bg-light dark:bg-tertiary">
    <div
      className="pointer-events-none absolute inset-x-0 top-0 h-full bg-gradient-to-br from-brand/[0.08] via-transparent to-transparent dark:from-brand/15"
      aria-hidden
    />
    <div className="relative mx-auto max-w-6xl px-4 pb-10 pt-6 sm:px-6 sm:pb-14 sm:pt-8">
      <Link
        href="/our-work"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-brand"
      >
        ← {CASE_STUDY_BACK_LABEL}
      </Link>

      <div className="mt-8 max-w-3xl">
        {data.industry ? (
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand">{data.industry}</p>
        ) : null}
        <Heading1 className="mt-3 text-pretty text-4xl !leading-tight md:text-5xl lg:text-6xl">
          {data.clientName}
        </Heading1>
        <p
          className="mt-5 max-w-2xl border-l-[3px] border-brand pl-5 text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl"
          role="doc-subtitle"
        >
          {data.tagline}
        </p>
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground">
        {data.websiteUrl ? (
          <a
            href={data.websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-foreground underline-offset-4 transition-colors hover:text-brand hover:underline"
          >
            Visit {data.clientName}
          </a>
        ) : null}
        {data.servicesUsed?.length ? (
          <ul className="flex flex-wrap gap-2" role="list">
            {data.servicesUsed.map((service) => (
              <li key={service}>
                <Badge
                  variant="outline"
                  className="border-border/80 px-3 py-1 text-xs font-medium dark:border-brand/40 dark:bg-brand/10"
                >
                  {service}
                </Badge>
              </li>
            ))}
          </ul>
        ) : null}
      </div>

      {heroImage ? (
        <div className="relative mt-10 aspect-[16/10] w-full overflow-hidden rounded-xl bg-muted/30 shadow-lg ring-1 ring-black/5 dark:ring-white/10">
          <Image
            src={heroImage.src}
            alt={heroImage.alt}
            fill
            className={
              getImageFit(data) === "contain"
                ? "object-contain object-center p-8 md:p-12"
                : "object-cover object-top"
            }
            sizes="(min-width: 1024px) 72rem, 100vw"
            priority
          />
        </div>
      ) : null}
    </div>
  </header>
)
