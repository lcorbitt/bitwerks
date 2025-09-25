"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Heading1 } from "@/components/ui/heading"

interface HeroProps {
  locationString: string
}

export function Hero({ locationString }: HeroProps) {
  return (
    <section className="relative overflow-hidden pb-32 md:pb-64 w-full h-full bg-light dark:bg-tertiary">
      <div className="container relative z-20">
        <div className="mx-auto lg:grid lg:items-center lg:gap-8 lg:grid-cols-2">
          {/* Text content */}
          <div className="flex flex-col text-center lg:text-left w-full">
            <p className="mb-2 text-muted-light dark:text-muted-dark tracking-widest font-normal">
              WEB DEVELOPMENT
            </p>
            <Heading1 className="mx-auto lg:mx-0 max-w-3xl lg:max-w-none relative z-10">Sleek, responsive</Heading1>
            <Heading1 className="mb-6 mx-auto lg:mx-0 max-w-3xl lg:max-w-none relative z-10 text-brand">websites</Heading1>
            <p className="mb-8 text-basetext-muted-foreground md:text-lg mx-auto lg:mx-0 max-w-2xl lg:max-w-xl relative z-10">
              Work with a dedicated expert to design and hand-craft your website to maximize credibility for your brand.
            </p>
            <div className="flex gap-4 justify-center lg:justify-start relative z-10">
              <Button
                asChild
                variant="brand"
                size="lg"
              >
                <Link href="/contact">Start Your Project</Link>
              </Button>
            </div>
          </div>
          {/* Image - hidden on smaller screens */}
          <div className="hidden lg:flex relative items-center justify-end">
            <div className="w-full h-auto max-w-[450px]">
              <Image
                src="/web-development.jpg"
                alt="Web developer image"
                width={500}
                height={500}
                priority
                className="w-full h-auto object-contain rounded-l-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 