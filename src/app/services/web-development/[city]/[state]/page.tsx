import { Metadata } from "next"
import { Suspense } from "react"
import { LocalBusinessSchema } from "@/components/schema"
import { getLocationFromParams, type LocationData } from "@/lib/location"
import { majorUSCities, getCityBySlug, formatLocationDisplay } from "@/lib/us-cities"
import { generateLocationMetadata, generateLocationStructuredData } from "@/lib/seo-utils"
import { Hero } from "@/app/web-development/hero"
import Services from "@/app/web-development/services"
import dynamic from "next/dynamic"
import { DecorativeCircles } from "@/components/ui/decorative-circles"

// Lazy load components below the fold
const LazyFAQSection = dynamic(() => import("@/app/web-development/faq").then(mod => ({ default: mod.FAQSection })), {
  loading: () => <div className="py-16 md:py-20 lg:py-24 bg-white dark:bg-black">
    <div className="container">
      <div className="animate-pulse">
        <div className="h-8 bg-gray-200 dark:bg-[#1f1f1f]/70 rounded w-1/3 mb-8"></div>
        <div className="space-y-4">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="h-16 bg-gray-200 dark:bg-[#1f1f1f]/70 rounded"></div>
          ))}
        </div>
      </div>
    </div>
  </div>
})

const LazyWhyChooseUs = dynamic(() => import("@/app/web-development/why-choose-us"), {
  loading: () => <div className="py-16 md:py-20 lg:py-24 bg-white dark:bg-black">
    <div className="container">
      <div className="animate-pulse">
        <div className="h-8 bg-gray-200 dark:bg-[#1f1f1f]/70 rounded w-1/2 mb-8"></div>
        <div className="grid md:grid-cols-3 gap-8">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="space-y-4">
              <div className="h-12 w-12 bg-gray-200 dark:bg-[#1f1f1f]/70 rounded"></div>
              <div className="h-6 bg-gray-200 dark:bg-[#1f1f1f]/70 rounded w-3/4"></div>
              <div className="space-y-2">
                <div className="h-4 bg-gray-200 dark:bg-[#1f1f1f]/70 rounded"></div>
                <div className="h-4 bg-gray-200 dark:bg-[#1f1f1f]/70 rounded w-5/6"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
})

const LazyCTA = dynamic(() => import("@/components/sections/cta").then(mod => ({ default: mod.CTA })), {
  loading: () => <div className="py-16 md:py-20 lg:py-24 bg-light dark:bg-tertiary">
    <div className="container">
      <div className="animate-pulse text-center">
        <div className="h-8 bg-gray-200 dark:bg-[#1f1f1f]/70 rounded w-1/2 mx-auto mb-4"></div>
        <div className="h-6 bg-gray-200 dark:bg-[#1f1f1f]/70 rounded w-3/4 mx-auto mb-8"></div>
        <div className="h-12 bg-gray-200 dark:bg-[#1f1f1f]/70 rounded w-48 mx-auto"></div>
      </div>
    </div>
  </div>
})

export async function generateStaticParams() {
  return majorUSCities.map((city) => ({
    city: city.slug,
    state: city.stateSlug,
  }))
}

interface PageProps {
  params: {
    city: string
    state: string
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const citySlug = decodeURIComponent(params.city)
  const stateSlug = decodeURIComponent(params.state)
  const city = getCityBySlug(citySlug, stateSlug)

  if (!city) {
    return {
      title: "Web Design & Development Services | BitWerks",
      description: "Professional web design & development services serving businesses nationwide. Expert designers and developers based in Denver, CO.",
      keywords: [
        "web design",
        "web development",
        "web design and development",
        "custom web design",
        "responsive web design",
        "website design",
        "website development",
      ],
    }
  }

  return generateLocationMetadata({
    city,
    service: "web-development",
  })
}

export default function CityPage({ params }: PageProps) {
  const citySlug = decodeURIComponent(params.city)
  const stateSlug = decodeURIComponent(params.state)
  const city = getCityBySlug(citySlug, stateSlug)

  const locationDisplay = city ? formatLocationDisplay(city) : null
  const locationData: LocationData = city 
    ? { city: city.city, state: city.state, isDefault: false }
    : { city: "Denver", state: "CO", isDefault: true }
  const structuredData = city ? generateLocationStructuredData(city, "web-development") : null

  return (
    <>
      {structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      )}
      <div className="flex flex-col overflow-hidden">
        <LocalBusinessSchema location={locationData} />
        <Hero location={locationDisplay || undefined} />
        {/* Curved section divider */}
        <section className="clip-top-large-circle relative -left-[15%] h-72 w-[130%] bg-white dark:bg-primary -mt-20 md:-mt-52 z-10"></section>

        <Services />

        <DecorativeCircles className="bottom-16" />

        {/* Curved section divider */}
        <section className="clip-bottom-large-circle relative -left-[15%] h-72 w-[130%] bg-white dark:bg-primary -mt-32 z-10"></section>
        
        {/* Lazy loaded sections below the fold */}
        <Suspense fallback={<div className="py-16 md:py-20 lg:py-24 bg-white dark:bg-black">
          <div className="container">
            <div className="animate-pulse">
              <div className="h-8 bg-gray-200 dark:bg-[#1f1f1f]/70 rounded w-1/3 mb-8"></div>
              <div className="space-y-4">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="h-16 bg-gray-200 dark:bg-[#1f1f1f]/70 rounded"></div>
                ))}
              </div>
            </div>
          </div>
        </div>}>
          <LazyFAQSection />
        </Suspense>
        
        <Suspense fallback={<div className="py-16 md:py-20 lg:py-24 bg-white dark:bg-black">
          <div className="container">
            <div className="animate-pulse">
              <div className="h-8 bg-gray-200 dark:bg-[#1f1f1f]/70 rounded w-1/2 mb-8"></div>
              <div className="grid md:grid-cols-3 gap-8">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="space-y-4">
                    <div className="h-12 w-12 bg-gray-200 dark:bg-[#1f1f1f]/70 rounded"></div>
                    <div className="h-6 bg-gray-200 dark:bg-[#1f1f1f]/70 rounded w-3/4"></div>
                    <div className="space-y-2">
                      <div className="h-4 bg-gray-200 dark:bg-[#1f1f1f]/70 rounded"></div>
                      <div className="h-4 bg-gray-200 dark:bg-[#1f1f1f]/70 rounded w-5/6"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>}>
          <LazyWhyChooseUs />
        </Suspense>

        <DecorativeCircles inverted className="bottom-48" />
        
        <Suspense fallback={<div className="py-16 md:py-20 lg:py-24 bg-light dark:bg-tertiary">
          <div className="container">
            <div className="animate-pulse text-center">
              <div className="h-8 bg-gray-200 dark:bg-[#1f1f1f]/70 rounded w-1/2 mx-auto mb-4"></div>
              <div className="h-6 bg-gray-200 dark:bg-[#1f1f1f]/70 rounded w-3/4 mx-auto mb-8"></div>
              <div className="h-12 bg-gray-200 dark:bg-[#1f1f1f]/70 rounded w-48 mx-auto"></div>
            </div>
          </div>
        </div>}>
          <LazyCTA />
        </Suspense>
      </div>
    </>
  )
}

