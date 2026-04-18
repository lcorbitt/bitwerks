import Image from "next/image"
import Link from "next/link"

import { Badge } from "@/components/ui/badge"
import { CTA } from "@/components/sections/cta"
import { Heading1 } from "@/components/ui/heading"
import type { CaseStudyGalleryImage, CaseStudyPageData } from "@/lib/case-studies/case-study-page.model"

interface CaseStudyPageProps {
  data: CaseStudyPageData
}

const CaseStudyHero = ({
  data,
  featuredImage,
}: {
  data: CaseStudyPageData
  featuredImage?: CaseStudyGalleryImage
}) => {
  if (!featuredImage) {
    return (
      <header>
        <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 md:py-20">
          <Heading1 className="mt-4 text-pretty text-4xl !leading-tight md:text-5xl">{data.clientName}</Heading1>
          <p
            className="mt-6 max-w-2xl border-l-[3px] border-brand pl-5 text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl"
            role="doc-subtitle"
          >
            {data.tagline}
          </p>
        </div>
      </header>
    )
  }

  return (
    <header>
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <Heading1 className="mt-4 text-pretty text-3xl !leading-tight sm:text-4xl md:text-5xl">{data.clientName}</Heading1>
        <p
          className="mt-4 max-w-2xl border-l-[3px] border-brand pl-5 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg"
          role="doc-subtitle"
        >
          {data.tagline}
        </p>

        {data.servicesUsed?.length ? (
          <section aria-labelledby="bitwerks-services-heading" className="mx-auto justify-center flex flex-col items-center pt-16 pb-4">
            <h2
              id="bitwerks-services-heading"
              className="text-xl font-semibold tracking-tight text-foreground md:text-2xl"
            >
              BitWerks Services Used
            </h2>
            <ul className="mt-4 flex flex-wrap gap-2 md:mt-5" role="list">
              {data.servicesUsed.map((service) => (
                <li key={service}>
                  <Badge variant="outline" className="border-border/80 px-3 py-1.5 text-sm font-medium dark:border-brand/50 dark:bg-brand/30">
                    {service}
                  </Badge>
                </li>
              ))}
            </ul>
          </section>
        ) : null}

        <div className="relative my-8 aspect-[16/10] w-full overflow-hidden rounded-lg bg-muted/20">
          <Image
            src={featuredImage.src}
            alt={featuredImage.alt}
            fill
            className={
              data.featuredImageFit === "contain"
                ? "object-contain object-center p-8 md:p-12"
                : "object-cover object-top"
            }
            sizes="(min-width: 768px) 42rem, 100vw"
            priority
          />
        </div>
      </div>
    </header>
  )
}

export const CaseStudyPage = ({ data }: CaseStudyPageProps) => {
  const featuredImage = data.images[0]
  const galleryImages = data.images.length > 1 ? data.images.slice(1) : []

  return (
    <article className="min-h-screen bg-background">
      <div className="mx-auto max-w-5xl px-4 pt-6 sm:px-6 sm:pt-8">
        <Link
          href="/our-work"
          className="text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          ← Our Work
        </Link>
      </div>

      <CaseStudyHero data={data} featuredImage={featuredImage} />

      <div className="mx-auto max-w-3xl px-4 pb-12 sm:px-6 md:pb-16">
        <section aria-labelledby="project-overview-heading" className="py-4">
          <h2
            id="project-overview-heading"
            className="text-xl font-semibold tracking-tight text-foreground md:text-2xl"
          >
            Project Overview
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground md:mt-5 md:text-lg">
            {data.businessGoal}
          </p>
        </section>

        <hr className="my-4 text-black/5" />

        <section aria-labelledby="our-role-heading" className="py-4">
          <h2 id="our-role-heading" className="text-xl font-semibold tracking-tight text-foreground md:text-2xl">
            Our Role
          </h2>
          <ul className="mt-4 list-disc space-y-3 pl-5 marker:text-brand md:mt-5">
            {data.accomplishments.map((line, i) => (
              <li key={i} className="text-base leading-relaxed text-foreground/90 md:text-lg">
                {line}
              </li>
            ))}
          </ul>
        </section>

        <hr className="my-4 text-black/5" />

        {data.results ? (
          <section aria-labelledby="results-heading" className="py-4">  
            <h2 id="results-heading" className="text-xl font-semibold tracking-tight text-foreground md:text-2xl">
              Outcome
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground md:mt-5 md:text-lg">
              {data.results}
            </p>
          </section>
        ) : null}
      </div>

      <CTA {...(data.ctaProps ?? {})} />
    </article>
  )
}
