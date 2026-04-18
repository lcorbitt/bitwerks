import type { ReactNode } from "react"
import { Suspense } from "react"
import dynamic from "next/dynamic"

import { LocalBusinessSchema } from "@/components/schema"
import { LocationSeoInsert } from "@/components/location-seo/location-seo-insert"
import type { LocationSeoService } from "@/components/location-seo/location-seo-types"
import { DecorativeCircles } from "@/components/ui/decorative-circles"
import { Hero as WebDevHero } from "@/app/web-development/hero"
import WebDevServices from "@/app/web-development/services"
import { Hero as SoftwareHero } from "@/app/software-development/hero"
import SoftwareServices from "@/app/software-development/services"
import type { LocationData } from "@/lib/location"
import type { USCity } from "@/lib/us-cities"
import { formatLocationDisplay } from "@/lib/us-cities"

const webLazy = {
  FAQ: dynamic(() => import("@/app/web-development/faq").then((m) => ({ default: m.FAQSection })), {
    loading: () => (
      <div className="py-16 md:py-20 lg:py-24 bg-white dark:bg-black">
        <div className="container">
          <div className="animate-pulse">
            <div className="mb-8 h-8 w-1/3 rounded bg-gray-200 dark:bg-[#1f1f1f]/70" />
            <div className="space-y-4">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="h-16 rounded bg-gray-200 dark:bg-[#1f1f1f]/70" />
              ))}
            </div>
          </div>
        </div>
      </div>
    ),
  }),
  Why: dynamic(() => import("@/app/web-development/why-choose-us"), {
    loading: () => (
      <div className="py-16 md:py-20 lg:py-24 bg-white dark:bg-black">
        <div className="container">
          <div className="animate-pulse">
            <div className="mb-8 h-8 w-1/2 rounded bg-gray-200 dark:bg-[#1f1f1f]/70" />
            <div className="grid gap-8 md:grid-cols-3">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="space-y-4">
                  <div className="h-12 w-12 rounded bg-gray-200 dark:bg-[#1f1f1f]/70" />
                  <div className="h-6 w-3/4 rounded bg-gray-200 dark:bg-[#1f1f1f]/70" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    ),
  }),
}

const softwareLazy = {
  FAQ: dynamic(() => import("@/app/software-development/faq").then((m) => ({ default: m.FAQSection })), {
    loading: () => (
      <div className="py-16 md:py-20 lg:py-24 bg-white dark:bg-black">
        <div className="container">
          <div className="animate-pulse">
            <div className="mb-8 h-8 w-1/3 rounded bg-gray-200 dark:bg-[#1f1f1f]/70" />
            <div className="space-y-4">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="h-16 rounded bg-gray-200 dark:bg-[#1f1f1f]/70" />
              ))}
            </div>
          </div>
        </div>
      </div>
    ),
  }),
  Why: dynamic(() => import("@/app/software-development/why-choose-us"), {
    loading: () => (
      <div className="py-16 md:py-20 lg:py-24 bg-white dark:bg-black">
        <div className="container">
          <div className="animate-pulse">
            <div className="mb-8 h-8 w-1/2 rounded bg-gray-200 dark:bg-[#1f1f1f]/70" />
            <div className="grid gap-8 md:grid-cols-3">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="space-y-4">
                  <div className="h-12 w-12 rounded bg-gray-200 dark:bg-[#1f1f1f]/70" />
                  <div className="h-6 w-3/4 rounded bg-gray-200 dark:bg-[#1f1f1f]/70" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    ),
  }),
}

const LazyCTA = dynamic(() => import("@/components/sections/cta").then((m) => ({ default: m.CTA })), {
  loading: () => (
    <div className="py-16 md:py-20 lg:py-24 bg-light dark:bg-tertiary">
      <div className="container">
        <div className="animate-pulse text-center">
          <div className="mx-auto mb-4 h-8 w-1/2 rounded bg-gray-200 dark:bg-[#1f1f1f]/70" />
          <div className="mx-auto mb-8 h-6 w-3/4 rounded bg-gray-200 dark:bg-[#1f1f1f]/70" />
          <div className="mx-auto h-12 w-48 rounded bg-gray-200 dark:bg-[#1f1f1f]/70" />
        </div>
      </div>
    </div>
  ),
})

export type LocationServiceCityExperienceService = "web-development" | "software-development"

export interface LocationServiceCityExperienceProps {
  city: USCity
  service: LocationServiceCityExperienceService
  locationData: LocationData
  structuredDataJson: string | null
  ctaHeadline?: ReactNode
}

const seoService = (s: LocationServiceCityExperienceService): LocationSeoService => s

const defaultCta = (service: LocationServiceCityExperienceService, loc: string): ReactNode =>
  service === "software-development" ? (
    <>
      Ready to ship custom software in <span className="text-brand">{loc}</span>?
    </>
  ) : (
    <>
      Ready to grow your {loc} business?
    </>
  )

export const LocationServiceCityExperience = ({
  city,
  service,
  locationData,
  structuredDataJson,
  ctaHeadline,
}: LocationServiceCityExperienceProps) => {
  const locationDisplay = formatLocationDisplay(city)
  const L = service === "web-development" ? webLazy : softwareLazy
  const headline = ctaHeadline ?? defaultCta(service, locationDisplay)

  return (
    <>
      {structuredDataJson ? (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: structuredDataJson }} />
      ) : null}
      <div className="flex flex-col overflow-hidden">
        <LocalBusinessSchema location={locationData} />
        {service === "web-development" ? (
          <WebDevHero location={locationDisplay} />
        ) : (
          <SoftwareHero location={locationDisplay} />
        )}
        <section className="clip-top-large-circle relative -left-[15%] z-10 -mt-20 h-72 w-[130%] bg-white dark:bg-primary md:-mt-52" />

        <LocationSeoInsert city={city} service={seoService(service)} />

        {service === "web-development" ? <WebDevServices /> : <SoftwareServices />}

        <DecorativeCircles className="bottom-16" />

        <section className="clip-bottom-large-circle relative -left-[15%] z-10 -mt-32 h-72 w-[130%] bg-white dark:bg-primary" />

        <Suspense
          fallback={
            <div className="py-16 md:py-20 lg:py-24 bg-white dark:bg-black">
              <div className="container">
                <div className="animate-pulse">
                  <div className="mb-8 h-8 w-1/3 rounded bg-gray-200 dark:bg-[#1f1f1f]/70" />
                  <div className="space-y-4">
                    {[...Array(6)].map((_, i) => (
                      <div key={i} className="h-16 rounded bg-gray-200 dark:bg-[#1f1f1f]/70" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          }
        >
          {service === "web-development" ? (
            <L.FAQ locationLabel={locationDisplay} />
          ) : (
            <L.FAQ />
          )}
        </Suspense>

        <Suspense
          fallback={
            <div className="py-16 md:py-20 lg:py-24 bg-white dark:bg-black">
              <div className="container">
                <div className="animate-pulse">
                  <div className="mb-8 h-8 w-1/2 rounded bg-gray-200 dark:bg-[#1f1f1f]/70" />
                </div>
              </div>
            </div>
          }
        >
          {service === "web-development" ? (
            <L.Why locationLabel={locationDisplay} />
          ) : (
            <L.Why />
          )}
        </Suspense>

        <DecorativeCircles inverted className="bottom-48" />

        <Suspense
          fallback={
            <div className="py-16 md:py-20 lg:py-24 bg-light dark:bg-tertiary">
              <div className="container">
                <div className="animate-pulse text-center">
                  <div className="mx-auto mb-4 h-8 w-1/2 rounded bg-gray-200 dark:bg-[#1f1f1f]/70" />
                </div>
              </div>
            </div>
          }
        >
          <LazyCTA headline={headline} />
        </Suspense>
      </div>
    </>
  )
}
