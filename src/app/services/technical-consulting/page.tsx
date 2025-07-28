import { Metadata } from "next"
import { Suspense } from "react"
import { LocalBusinessSchema } from "@/components/schema"
import { getLocationFromParams, type LocationData } from "@/lib/location"
import { Hero } from "@/app/technical-consulting/hero"
import { Process } from "@/components/sections/process"
import dynamic from "next/dynamic"
import Services from "@/app/technical-consulting/services"

// Lazy load components below the fold
const LazyFAQSection = dynamic(() => import("@/app/technical-consulting/faq").then(mod => ({ default: mod.FAQSection })), {
  loading: () => <div className="py-16 md:py-20 lg:py-24 bg-white dark:bg-black">
    <div className="container">
      <div className="animate-pulse">
        <div className="h-8 bg-gray-200 dark:bg-gray-800 rounded w-1/3 mb-8"></div>
        <div className="space-y-4">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="h-16 bg-gray-200 dark:bg-gray-800 rounded"></div>
          ))}
        </div>
      </div>
    </div>
  </div>
})

const LazyWhyChooseUs = dynamic(() => import("@/app/technical-consulting/why-choose-us"), {
  loading: () => <div className="py-16 md:py-20 lg:py-24 bg-white dark:bg-black">
    <div className="container">
      <div className="animate-pulse">
        <div className="h-8 bg-gray-200 dark:bg-gray-800 rounded w-1/2 mb-8"></div>
        <div className="grid md:grid-cols-3 gap-8">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="space-y-4">
              <div className="h-12 w-12 bg-gray-200 dark:bg-gray-800 rounded"></div>
              <div className="h-6 bg-gray-200 dark:bg-gray-800 rounded w-3/4"></div>
              <div className="space-y-2">
                <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-full"></div>
                <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-5/6"></div>
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
        <div className="h-8 bg-gray-200 dark:bg-gray-800 rounded w-1/2 mx-auto mb-4"></div>
        <div className="h-6 bg-gray-200 dark:bg-gray-800 rounded w-3/4 mx-auto mb-8"></div>
        <div className="h-12 bg-gray-200 dark:bg-gray-800 rounded w-48 mx-auto"></div>
      </div>
    </div>
  </div>
})

export const metadata: Metadata = {
  title: "BitWerks | Technical Consulting & Technology Guidance",
  description: "Expert technical consulting based in Fort Collins, CO, serving businesses nationwide. Get guidance on technology decisions, architecture planning, and digital strategy.",
  openGraph: {
    title: "BitWerks | Technical Consulting & Technology Guidance",
    description: "Get expert guidance on technology decisions and digital strategy. Based in Fort Collins, CO, serving businesses nationwide.",
  },
}

interface PageProps {
  searchParams?: { [key: string]: string | string[] | undefined }
}

export default async function TechnicalConsulting({ searchParams = {} }: PageProps) {
  const location: LocationData = getLocationFromParams(searchParams)
  const locationString = location.isDefault ? "nationwide" : `${location.city}, ${location.state}`

  return (
    <div className="flex flex-col overflow-hidden">
      <LocalBusinessSchema location={location} />
      <Hero locationString={locationString} />
      <section className="clip-top-large-circle relative -left-[15%] h-72 w-[130%] bg-white dark:bg-primary -mt-20 md:-mt-52 z-10"></section>
      
      <Services />
      
      <section className="clip-bottom-large-circle relative -left-[15%] h-72 w-[130%] bg-white dark:bg-primary -mt-32 z-10"></section>
      
      {/* Lazy loaded sections below the fold */}
      <Suspense fallback={<div className="py-16 md:py-20 lg:py-24 bg-white dark:bg-black">
        <div className="container">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 dark:bg-gray-800 rounded w-1/3 mb-8"></div>
            <div className="space-y-4">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="h-16 bg-gray-200 dark:bg-gray-800 rounded"></div>
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
            <div className="h-8 bg-gray-200 dark:bg-gray-800 rounded w-1/2 mb-8"></div>
            <div className="grid md:grid-cols-3 gap-8">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="space-y-4">
                  <div className="h-12 w-12 bg-gray-200 dark:bg-gray-800 rounded"></div>
                  <div className="h-6 bg-gray-200 dark:bg-gray-800 rounded w-3/4"></div>
                  <div className="space-y-2">
                    <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-full"></div>
                    <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-5/6"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>}>
        <LazyWhyChooseUs />
      </Suspense>

      <Process />
      
      <Suspense fallback={<div className="py-16 md:py-20 lg:py-24 bg-light dark:bg-tertiary">
        <div className="container">
          <div className="animate-pulse text-center">
            <div className="h-8 bg-gray-200 dark:bg-gray-800 rounded w-1/2 mx-auto mb-4"></div>
            <div className="h-6 bg-gray-200 dark:bg-gray-800 rounded w-3/4 mx-auto mb-8"></div>
            <div className="h-12 bg-gray-200 dark:bg-gray-800 rounded w-48 mx-auto"></div>
          </div>
        </div>
      </div>}>
        <LazyCTA />
      </Suspense>
    </div>
  )
} 