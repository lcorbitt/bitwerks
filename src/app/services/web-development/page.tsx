import { Metadata } from "next"
import { Suspense } from "react"
import { LocalBusinessSchema } from "@/components/schema"
import { getLocationFromParams, type LocationData } from "@/lib/location"
import { Hero } from "@/app/web-development/hero"
import Services from "@/app/web-development/services"
import dynamic from "next/dynamic"
import { DecorativeCircles } from "@/components/ui/decorative-circles"
import { ScrollFadeIn } from "@/components/ui/scroll-fade-in"

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

export const metadata: Metadata = {
  title: "BitWerks | Web Design & Development Services",
  description: "Professional web design & development services based in Denver, CO, serving businesses nationwide. Transform your digital presence with expert web design and custom development solutions.",
  keywords: [
    "web design",
    "web development",
    "web design and development",
    "custom web design",
    "responsive web design",
    "website design",
    "website development",
    "custom web development",
    "professional web design",
    "professional web development",
  ],
  openGraph: {
    title: "BitWerks | Web Design & Development Services",
    description: "Transform your business with professional web design & development solutions. Expert designers and developers based in Denver, CO, serving businesses nationwide.",
  },
}

interface PageProps {
  searchParams?: { [key: string]: string | string[] | undefined }
}

export default async function Solutions({ searchParams = {} }: PageProps) {
  const location: LocationData = getLocationFromParams(searchParams)

  return (
    <div className="flex flex-col overflow-hidden">
      <LocalBusinessSchema location={location} />
      <ScrollFadeIn>
        <Hero />
        {/* Curved section divider */}
        <section className="clip-top-large-circle relative -left-[15%] h-72 w-[130%] bg-white dark:bg-primary -mt-20 md:-mt-52 z-10"></section>

        <Services />
      </ScrollFadeIn>

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

      <ScrollFadeIn>
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
      </ScrollFadeIn>

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
  )
}
