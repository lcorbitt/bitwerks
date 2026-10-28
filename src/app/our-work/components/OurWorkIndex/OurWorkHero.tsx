"use client"

import { Button } from "@/components/ui/button"
import { CaseStudiesShowcase } from "@/components/ui/case-studies-showcase"
import { Heading1 } from "@/components/ui/heading"
import type { CaseStudyPageData } from "@/lib/case-studies/case-study-page.model"
import { getCaseStudyHeroImage } from "@/lib/case-studies/registry"

import { CredentialStrip } from "./CredentialStrip"
import {
  HERO_CTA_LABEL,
  HERO_DESCRIPTION,
  HERO_EYEBROW,
  HERO_HEADLINE_ACCENT,
  HERO_HEADLINE_PREFIX,
  HERO_HEADLINE_SUFFIX,
} from "./constants"
import { useOurWorkIndex } from "./hooks/useOurWorkIndex"

interface OurWorkHeroProps {
  showcaseStudies: CaseStudyPageData[]
}

export const OurWorkHero = ({ showcaseStudies }: OurWorkHeroProps) => {
  const { scrollToCaseStudies } = useOurWorkIndex()

  const showcaseItems = showcaseStudies.slice(0, 3).map((study) => {
    const hero = getCaseStudyHeroImage(study)
    return {
      id: study.slug,
      company: study.clientName,
      image: hero?.src ?? "/clickk-website.png",
      alt: hero?.alt ?? `${study.clientName} case study`,
      href: `/our-work/${study.slug}`,
    }
  })

  return (
    <section className="relative w-full overflow-hidden bg-light pb-32 dark:bg-tertiary md:pb-64">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[min(36rem,90vh)] bg-gradient-to-b from-brand/[0.07] via-transparent to-transparent dark:from-brand/10"
        aria-hidden
      />
      <div className="container relative z-20">
        <div className="mx-auto lg:grid lg:grid-cols-2 lg:items-start lg:gap-8">
          <div className="flex w-full flex-col text-center lg:text-left">
            <p className="mb-2 font-normal uppercase tracking-widest text-muted-light dark:text-muted-dark">
              {HERO_EYEBROW}
            </p>
            <Heading1 className="relative z-10 mx-auto mb-6 max-w-3xl lg:mx-0 lg:max-w-none">
              {HERO_HEADLINE_PREFIX}{" "}
              <span className="text-brand">{HERO_HEADLINE_ACCENT}</span>
              <br />
              {HERO_HEADLINE_SUFFIX}
            </Heading1>
            <p className="relative z-10 mx-auto mb-8 max-w-2xl text-base text-muted-foreground md:text-lg lg:mx-0 lg:max-w-xl">
              {HERO_DESCRIPTION}
            </p>
            <div className="relative z-10 flex justify-center gap-4 lg:justify-start">
              <Button variant="brand" size="lg" onClick={scrollToCaseStudies}>
                {HERO_CTA_LABEL}
              </Button>
            </div>
            <CredentialStrip />
          </div>
          <div className="relative hidden h-full items-center justify-center lg:flex">
            <div className="flex h-auto w-full max-w-[450px] items-center justify-center">
              <CaseStudiesShowcase caseStudies={showcaseItems} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
