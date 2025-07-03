import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

interface HeroProps {
  locationString: string
}

export function Hero({ locationString }: HeroProps) {
  return (
    <section className="relative overflow-hidden py-16 md:py-20 w-full bg-[#F6F7F8] dark:bg-secondary">
      <div className="container relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto lg:grid lg:items-center lg:gap-8 lg:grid-cols-2">
          {/* Text content */}
          <div className="flex flex-col text-center lg:text-left w-full">
            <h1 className="mb-6 text-3xl tracking-tight sm:text-4xl md:text-5xl lg:leading-tight mx-auto lg:mx-0 max-w-3xl lg:max-w-none font-bold">
              SMALL BUSINESS
              <span className="text-primary dark:text-white block mt-2">DIGITAL SOLUTIONS</span>
            </h1>
            <p className="mb-8 text-xs text-muted-light dark:text-muted-dark md:text-lg mx-auto lg:mx-0 max-w-2xl lg:max-w-xl">
              Web Development • Software Development • Technical Consulting
            </p>
            <p className="mb-8 text-sm text-muted-foreground md:text-lg mx-auto lg:mx-0 max-w-2xl lg:max-w-xl">
              We build custom websites and software for businesses {locationString === "nationwide" ? "across the U.S." : ` in ${locationString}.`} We focus on the technical implementation so you can focus on what you do best.
            </p>
            <div className="flex gap-4 justify-center lg:justify-start">
              <Button
                asChild
                className="hidden md:flex dark:bg-white dark:text-black"
              >
                <Link href="/contact">GET STARTED</Link>
              </Button>
            </div>
          </div>

          {/* Image - hidden on smaller screens */}
          <div className="hidden lg:flex relative items-center justify-center p-4">
            <div className="w-full h-auto max-w-[450px]">
              <Image
                src="/hero.svg"
                alt="Digital transformation illustration"
                width={500}
                height={400}
                priority
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 