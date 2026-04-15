import dynamic from "next/dynamic"
import { Suspense } from "react"

import { Heading2 } from "@/components/ui/heading"
import { ScrollFadeIn } from "@/components/ui/scroll-fade-in"
import { ServiceCards } from "@/components/ui/service-cards"
import { strategyConsultingServices } from "@/components/ui/strategy-consulting-cards"

const LazyCaseStudy = dynamic(() => import("@/components/ui/case-study").then((mod) => ({ default: mod.CaseStudy })), {
  loading: () => (
    <div className="mx-auto max-w-screen-2xl bg-white px-4 pt-20 dark:bg-primary md:px-8">
      <div className="container">
        <div className="animate-pulse">
          <div className="mb-4 h-8 w-1/4 rounded bg-gray-200 dark:bg-[#1f1f1f]/70" />
          <div className="mb-8 h-6 w-1/2 rounded bg-gray-200 dark:bg-[#1f1f1f]/70" />
          <div className="grid gap-8 md:grid-cols-2">
            <div className="h-64 rounded-lg bg-gray-200 dark:bg-[#1f1f1f]/70" />
            <div className="space-y-4">
              <div className="h-6 w-3/4 rounded bg-gray-200 dark:bg-[#1f1f1f]/70" />
              <div className="h-4 w-full rounded bg-gray-200 dark:bg-[#1f1f1f]/70" />
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
})

export default function Services() {
  return (
    <section className="relative z-20 -mt-48 bg-white py-0 dark:bg-black">
      <div className="container pt-0">
        <div className="mx-auto mb-16 max-w-4xl text-center">
          <Heading2 className="mb-8">Turn ambiguity into shippable specs</Heading2>
          <p className="text-xl text-muted-light dark:text-muted-dark">
            Turn business goals and technical complexity into structured product roadmaps and requirements
          </p>
        </div>

        <ServiceCards services={strategyConsultingServices} />
      </div>

      <div className="mx-auto max-w-screen-2xl bg-white px-4 pt-20 dark:bg-primary md:px-8">
        <Suspense
          fallback={
            <div className="container">
              <div className="animate-pulse space-y-4">
                <div className="h-8 w-1/3 rounded bg-gray-200 dark:bg-[#1f1f1f]/70" />
                <div className="h-64 rounded-lg bg-gray-200 dark:bg-[#1f1f1f]/70" />
              </div>
            </div>
          }
        >
          <ScrollFadeIn>
            <LazyCaseStudy
              title="Case study"
              company="Hodinkee"
              description="Strategy and delivery aligned: a shared design system, tighter product UX, and internal tooling grounded in how their stack and editorial workflows run day to day."
              technologies={["React", "Design systems", "Rails", "PostgreSQL"]}
              imageSrc="/hodinkee-mockup.png"
              imageAlt="Hodinkee product and design system work"
              orientation="center"
              device="mobile"
            />
          </ScrollFadeIn>
        </Suspense>
      </div>
    </section>
  )
}
