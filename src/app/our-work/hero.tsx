"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Heading1 } from "@/components/ui/heading"
import { CaseStudiesShowcase } from "@/components/ui/case-studies-showcase"
import { sampleCaseStudies } from "@/lib/case-studies-data"

export function Hero() {
  return (
    <section className="relative overflow-hidden pb-32 md:pb-64 w-full h-full bg-light dark:bg-tertiary">
      <div className="container relative z-20">
        <div className="mx-auto lg:grid lg:items-start lg:gap-8 lg:grid-cols-2">
          {/* Text content */}
          <div className="flex flex-col text-center lg:text-left w-full">
            <p className="mb-2 text-muted-light dark:text-muted-dark tracking-widest font-normal uppercase">
              OUR WORK
            </p>
            <Heading1 className="mx-auto lg:mx-0 max-w-3xl lg:max-w-none relative z-10">What we&apos;ve built</Heading1>
            <Heading1 className="mb-6 mx-auto lg:mx-0 max-w-3xl lg:max-w-none relative z-10 text-brand">over the years</Heading1>
            <p className="mb-8 text-basetext-muted-foreground md:text-lg mx-auto lg:mx-0 max-w-2xl lg:max-w-xl relative z-10">
              We&apos;ve helped small businesses across the U.S. build and ship the web & software projects they&apos;ve been dreaming of. We treat every project as a partnership, investing in our clients as much as they invest in us.
            </p>
            <div className="flex gap-4 justify-center lg:justify-start relative z-10">
              <Button
                variant="default"
                size="lg"
                onClick={() => {
                  const nextSection = document.getElementById('case-studies')
                  if (nextSection) {
                    window.scrollTo({ top: nextSection.offsetTop - 48, behavior: 'smooth' })
                  }
                }}
              >
                View Case Studies
              </Button>
            </div>
          </div>
          {/* Case Studies Showcase - hidden on smaller screens */}
          <div className="hidden lg:flex relative items-center justify-center h-full">
            <div className="w-full h-auto max-w-[450px] flex items-center justify-center">
              <CaseStudiesShowcase caseStudies={sampleCaseStudies} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
