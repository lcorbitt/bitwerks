import Image from "next/image"
import Link from "next/link"

import type { CaseStudyPageData } from "@/lib/case-studies/case-study-page.model"
import { getCaseStudyHeroImage } from "@/lib/case-studies/registry"

interface FeaturedCaseStudyCardProps {
  study: CaseStudyPageData
}

export const FeaturedCaseStudyCard = ({ study }: FeaturedCaseStudyCardProps) => {
  const hero = getCaseStudyHeroImage(study)
  const href = `/our-work/${study.slug}`

  return (
    <li>
      <Link
        href={href}
        className="group flex h-full flex-col overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-black/5 transition-shadow hover:shadow-lg dark:bg-primary dark:ring-white/10"
      >
        <div className="relative aspect-[16/10] bg-muted/30">
          {hero ? (
            <Image
              src={hero.src}
              alt={hero.alt}
              fill
              className={
                study.featuredImageFit === "contain"
                  ? "object-contain p-6"
                  : "object-cover object-center transition duration-500 group-hover:scale-[1.02]"
              }
              sizes="(max-width: 640px) 100vw, 50vw"
            />
          ) : null}
        </div>
        <div className="flex flex-1 flex-col p-5 sm:p-6">
          {study.industry ? (
            <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-brand">{study.industry}</p>
          ) : null}
          <h3 className="mt-2 text-xl font-semibold text-foreground transition-colors group-hover:text-brand">
            {study.clientName}
          </h3>
          <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-muted-foreground">
            {study.excerpt ?? study.tagline}
          </p>
          <span className="mt-4 text-sm font-semibold text-brand">View case study →</span>
        </div>
      </Link>
    </li>
  )
}
