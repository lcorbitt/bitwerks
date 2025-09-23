"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Heading1 } from "@/components/ui/heading"
import { Quote } from "@/components/ui/quote"

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-16 md:pt-20 pb-32 md:pb-64 w-full h-full bg-light dark:bg-tertiary">
      <div className="container relative z-20">
        <div className="mx-auto lg:grid lg:items-center lg:gap-8 lg:grid-cols-2">
          {/* Text content */}
          <div className="flex flex-col text-center lg:text-left w-full">
            <p className="mb-2 text-muted-light dark:text-muted-dark tracking-widest font-normal">
              PRICING
            </p>
            <Heading1 className="mx-auto lg:mx-0 max-w-3xl lg:max-w-none relative z-10">Choose your path to</Heading1>
            <Heading1 className="mb-6 mx-auto lg:mx-0 max-w-3xl lg:max-w-none relative z-10 text-brand">success</Heading1>
            <p className="mb-8 text-basetext-muted-foreground md:text-lg mx-auto lg:mx-0 max-w-2xl lg:max-w-xl relative z-10">
              Choose the perfect plan for your business needs. All plans include our core services with no hidden fees.
            </p>
            <div className="flex gap-4 justify-center lg:justify-start relative z-10">
              <Button
                asChild
                variant="default"
                size="lg"
              >
                <Link href="#pricing">View Plans</Link>
              </Button>
            </div>
          </div>
          {/* Quote - hidden on smaller screens */}
          <div className="hidden lg:flex relative items-center justify-end">
            <div className="w-full h-auto max-w-[450px]">
              <Quote
                quote="What BitWerks has brought to the team is exactly that bridge I've needed for quite some time - a bridge from UX thinking into engineering. Really appreciate how they've helped with architecture improvements, and the overall sharpening of our engineering and design thinking. I feel very encouraged because I feel like I have a real ally in them!"
                author="Jed Burdick"
                title="CEO & Founder"
                company="Votary Films"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
