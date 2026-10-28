import { CTA } from "@/components/sections/cta"
import { getRelatedCaseStudies } from "@/lib/case-studies/registry"

import { CaseStudyGallery } from "./CaseStudyGallery"
import { CaseStudyHero } from "./CaseStudyHero"
import { CaseStudyHighlightRow } from "./CaseStudyHighlightRow"
import { CaseStudyOutcome } from "./CaseStudyOutcome"
import { CaseStudyPartnersStrip } from "./CaseStudyPartnersStrip"
import { CaseStudyRelated } from "./CaseStudyRelated"
import { CaseStudyRoleSection } from "./CaseStudyRoleSection"
import type { CaseStudyDetailProps } from "./types"
import { getGalleryImages, getHeroImage } from "./utils"

export const CaseStudyDetail = ({ data }: CaseStudyDetailProps) => {
  const heroImage = getHeroImage(data)
  const galleryImages = getGalleryImages(data, heroImage)
  const related = getRelatedCaseStudies(data.slug)

  return (
    <article className="min-h-screen bg-background">
      <CaseStudyHero data={data} heroImage={heroImage} />

      {data.highlights?.length ? <CaseStudyHighlightRow highlights={data.highlights} /> : null}

      {data.partners?.length ? (
        <CaseStudyPartnersStrip partners={data.partners} clientName={data.clientName} />
      ) : null}

      <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 md:py-14">
        <section aria-labelledby="project-overview-heading" className="py-4 md:py-6">
          <h2
            id="project-overview-heading"
            className="text-2xl font-semibold tracking-tight text-foreground md:text-3xl"
          >
            Project Overview
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">{data.businessGoal}</p>
        </section>

        <CaseStudyRoleSection accomplishments={data.accomplishments} />

        <CaseStudyGallery images={galleryImages} />

        {data.results ? (
          <div className="mt-8 md:mt-12">
            <CaseStudyOutcome results={data.results} />
          </div>
        ) : null}
      </div>

      <CaseStudyRelated related={related} />

      <CTA {...(data.ctaProps ?? {})} />
    </article>
  )
}
