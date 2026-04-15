import type { Metadata } from "next"
import dynamic from "next/dynamic"
import { Suspense } from "react"

import { Hero } from "@/app/strategy-consulting/hero"
import Services from "@/app/strategy-consulting/services"
import { DecorativeCircles } from "@/components/ui/decorative-circles"
import { ScrollFadeIn } from "@/components/ui/scroll-fade-in"

const LazyFAQSection = dynamic(() =>
  import("@/app/strategy-consulting/faq").then((mod) => ({ default: mod.FAQSection })),
)

const LazyWhyChooseUs = dynamic(() => import("@/app/strategy-consulting/why-choose-us"))

const LazyCTA = dynamic(() => import("@/components/sections/cta").then((mod) => ({ default: mod.CTA })))

const faqFallback = (
  <div className="bg-white py-16 dark:bg-black md:py-20 lg:py-24">
    <div className="container">
      <div className="animate-pulse space-y-4">
        <div className="mb-8 h-8 w-1/3 rounded bg-gray-200 dark:bg-[#1f1f1f]/70" />
        {[...Array(5)].map((_, i) => (
          <div key={i} className="h-16 rounded bg-gray-200 dark:bg-[#1f1f1f]/70" />
        ))}
      </div>
    </div>
  </div>
)

const whyFallback = (
  <div className="bg-white py-16 dark:bg-black md:py-20 lg:py-24">
    <div className="container">
      <div className="animate-pulse grid gap-8 md:grid-cols-3">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="space-y-4">
            <div className="h-12 w-12 rounded bg-gray-200 dark:bg-[#1f1f1f]/70" />
            <div className="h-6 w-3/4 rounded bg-gray-200 dark:bg-[#1f1f1f]/70" />
            <div className="h-4 rounded bg-gray-200 dark:bg-[#1f1f1f]/70" />
          </div>
        ))}
      </div>
    </div>
  </div>
)

const ctaFallback = (
  <div className="bg-light py-16 dark:bg-tertiary md:py-20 lg:py-24">
    <div className="container">
      <div className="mx-auto animate-pulse text-center">
        <div className="mx-auto mb-4 h-8 w-1/2 rounded bg-gray-200 dark:bg-[#1f1f1f]/70" />
        <div className="mx-auto mb-8 h-6 w-3/4 rounded bg-gray-200 dark:bg-[#1f1f1f]/70" />
        <div className="mx-auto h-12 w-48 rounded bg-gray-200 dark:bg-[#1f1f1f]/70" />
      </div>
    </div>
  </div>
)

export const metadata: Metadata = {
  title: "BitWerks | Strategy & Technical Consulting",
  description:
    "Strategy and consulting for websites and custom software: discovery, requirements, UX, content modeling, and roadmaps you can use while we work with you on the build.",
  keywords: [
    "web development consulting",
    "software development consulting",
    "product discovery",
    "technical consulting",
    "requirements definition",
    "UX research",
    "content modeling",
    "web app planning",
  ],
  openGraph: {
    title: "BitWerks | Strategy & Technical Consulting",
    description:
      "We can help with discovery and planning for your website or custom software, then carry that work into development with BitWerks.",
  },
}

export default function StrategyConsultingPage() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ScrollFadeIn>
        <Hero />
        <section className="clip-top-large-circle relative z-10 -left-[15%] -mt-20 h-72 w-[130%] bg-white dark:bg-primary md:-mt-52" />

        <Services />
      </ScrollFadeIn>

      <DecorativeCircles className="bottom-16" />

      <section className="clip-bottom-large-circle relative z-10 -left-[15%] -mt-32 h-72 w-[130%] bg-white dark:bg-primary" />

      <Suspense fallback={faqFallback}>
        <LazyFAQSection />
      </Suspense>

      <ScrollFadeIn>
        <Suspense fallback={whyFallback}>
          <LazyWhyChooseUs />
        </Suspense>
      </ScrollFadeIn>

      <DecorativeCircles inverted className="bottom-48" />

      <Suspense fallback={ctaFallback}>
        <LazyCTA />
      </Suspense>
    </div>
  )
}
