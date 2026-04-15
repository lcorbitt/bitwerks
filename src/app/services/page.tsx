import type { Metadata } from "next"

import { ServicesHero } from "./hero"
import { ServicesDirectory } from "@/app/services/components/ServicesDirectory"
import { CTA } from "@/components/sections/cta"
import { DecorativeCircles } from "@/components/ui/decorative-circles"
import { Heading2 } from "@/components/ui/heading"
import { Process } from "@/components/sections/process"
import { Testimonials } from "@/components/ui/testimonials"
import { sampleTestimonials } from "@/lib/testimonials-data"

export const metadata: Metadata = {
  title: "Services",
  description:
    "Web development, software, UX/UI, SEO, e-commerce, and more—full-service digital delivery from BitWerks.",
}

export default function ServicesPage() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ServicesHero />

      <section className="clip-top-large-circle relative z-10 -left-[15%] -mt-20 h-72 w-[130%] bg-white dark:bg-primary md:-mt-48" />

      <section id="services-directory" className="z-20 -mb-16 -mt-48 py-0">
        <div className="container mx-auto max-w-4xl text-center">
          <Heading2 className="mb-4">
            Everything you need to <span className="text-brand">build</span> and grow
          </Heading2>
          <p className="mx-auto mb-4 max-w-2xl text-muted-foreground md:text-lg">
            Pick a service to see scope, typical deliverables, and how we work with you.
          </p>
        </div>

        <ServicesDirectory />

        <DecorativeCircles className="bottom-16" />
      </section>

      <section className="clip-bottom-large-circle relative z-10 -left-[15%] -mt-32 h-72 w-[130%] bg-white dark:bg-primary" />

      <div className="-mt-20 pt-32">
        <div className="-mt-[19rem] w-full bg-light py-32 dark:bg-tertiary" />
        <Process />
      </div>

      <DecorativeCircles inverted className="bottom-32" />

      <Testimonials testimonials={sampleTestimonials} />

      <CTA />
    </div>
  )
}
