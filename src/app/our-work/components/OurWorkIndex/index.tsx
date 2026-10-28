import { CTA } from "@/components/sections/cta"
import { Process } from "@/components/sections/process"
import { ClientShowcase } from "@/components/ui/client-showcase"
import { DecorativeCircles } from "@/components/ui/decorative-circles"
import { Heading2 } from "@/components/ui/heading"
import { ScrollFadeIn } from "@/components/ui/scroll-fade-in"
import { Testimonials } from "@/components/ui/testimonials"
import { sampleTestimonials } from "@/lib/testimonials-data"

import { FeaturedCaseStudyCard } from "./FeaturedCaseStudyCard"
import { FeaturedCaseStudyLead } from "./FeaturedCaseStudyLead"
import { OurWorkHero } from "./OurWorkHero"
import {
  CASE_STUDIES_SECTION_ID,
  FEATURED_SECTION_DESCRIPTION,
  FEATURED_SECTION_EYEBROW,
  FEATURED_SECTION_TITLE,
  MORE_CLIENTS_DESCRIPTION,
  MORE_CLIENTS_TITLE,
} from "./constants"
import type { OurWorkIndexProps } from "./types"
import { splitFeaturedStudies } from "./utils"

export const OurWorkIndex = ({ featuredStudies, secondaryClients }: OurWorkIndexProps) => {
  const { lead, rest } = splitFeaturedStudies(featuredStudies)

  return (
    <div className="flex flex-col overflow-hidden">
      <OurWorkHero showcaseStudies={featuredStudies} />

      <section className="clip-top-large-circle relative -left-[15%] z-10 -mt-20 h-72 w-[130%] bg-white dark:bg-primary md:-mt-48" />

      <section id={CASE_STUDIES_SECTION_ID} className="relative z-20 -mb-16 -mt-48 py-0">
        <ScrollFadeIn>
          <div className="container mx-auto max-w-4xl text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand">{FEATURED_SECTION_EYEBROW}</p>
            <Heading2 className="mb-4 mt-2">{FEATURED_SECTION_TITLE}</Heading2>
            <p className="text-lg text-muted-light dark:text-muted-dark">{FEATURED_SECTION_DESCRIPTION}</p>
          </div>
        </ScrollFadeIn>

        <div className="container mx-auto mt-10 max-w-6xl px-4 sm:px-6">
          {lead ? (
            <ScrollFadeIn>
              <FeaturedCaseStudyLead study={lead} />
            </ScrollFadeIn>
          ) : null}

          {rest.length > 0 ? (
            <ScrollFadeIn className="mt-10 md:mt-14">
              <ul className="grid gap-8 sm:grid-cols-2 lg:gap-10" role="list">
                {rest.map((study) => (
                  <FeaturedCaseStudyCard key={study.slug} study={study} />
                ))}
              </ul>
            </ScrollFadeIn>
          ) : null}
        </div>

        {secondaryClients.length > 0 ? (
          <ScrollFadeIn className="mt-16 md:mt-24">
            <div className="container mx-auto max-w-4xl text-center">
              <Heading2 className="mb-3 text-3xl md:text-4xl">{MORE_CLIENTS_TITLE}</Heading2>
              <p className="text-muted-light dark:text-muted-dark">{MORE_CLIENTS_DESCRIPTION}</p>
            </div>
            <ClientShowcase clients={secondaryClients} showAllByDefault />
          </ScrollFadeIn>
        ) : null}

        <DecorativeCircles className="bottom-16" />
      </section>

      <section className="clip-bottom-large-circle relative -left-[15%] z-10 -mt-32 h-72 w-[130%] bg-white dark:bg-primary" />

      <div className="-mt-20 pt-32">
        <div className="-mt-[19rem] w-full bg-light py-32 dark:bg-tertiary" />
        <ScrollFadeIn>
          <Process />
        </ScrollFadeIn>
      </div>

      <DecorativeCircles inverted className="bottom-32" />

      <ScrollFadeIn>
        <Testimonials testimonials={sampleTestimonials} />
      </ScrollFadeIn>

      <CTA />
    </div>
  )
}
