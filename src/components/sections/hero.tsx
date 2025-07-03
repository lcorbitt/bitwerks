import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

interface HeroProps {
  locationString: string
}

function HeroBackgroundImage() {
  return (
    <div className="absolute inset-0 flex lg:hidden items-center justify-center z-0">
      <Image
        src="/hero.svg"
        alt="Digital transformation illustration"
        width={500}
        height={400}
        priority
        className="w-full h-auto object-contain opacity-80"
      />
      <div className="absolute inset-0 bg-white/80 dark:bg-black/70" />
    </div>
  )
}

export function Hero({ locationString }: HeroProps) {
  return (
    <section className="relative overflow-hidden py-16 md:py-20 w-full bg-[#F6F7F8] dark:bg-secondary">
      <HeroBackgroundImage />
      <div className="container relative z-10">
        <div className="mx-auto lg:grid lg:items-center lg:gap-8 lg:grid-cols-2">
          {/* Text content */}
          <div className="flex flex-col text-center lg:text-left w-full">
            <h1 className="mb-6 text-3xl tracking-tight sm:text-4xl md:text-5xl lg:leading-tight mx-auto lg:mx-0 max-w-3xl lg:max-w-none font-bold relative z-10">
              SMALL BUSINESS
              <span className="text-primary dark:text-white block mt-2">DIGITAL SOLUTIONS</span>
            </h1>
            <p className="mb-8 text-xs text-muted-light dark:text-muted-dark md:text-lg mx-auto lg:mx-0 max-w-2xl lg:max-w-xl relative z-10">
              Web Development • Software Development • Technical Consulting
            </p>
            <p className="mb-8 text-sm text-muted-foreground md:text-lg mx-auto lg:mx-0 max-w-2xl lg:max-w-xl relative z-10">
              We build custom websites and software for businesses {locationString === "nationwide" ? "across the U.S." : ` in ${locationString}.`} We focus on the technical implementation so you can focus on what you do best.
            </p>
            <div className="flex gap-4 justify-center lg:justify-start relative z-10">
              <Button
                asChild
                variant="default"
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