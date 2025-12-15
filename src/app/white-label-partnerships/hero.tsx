import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Heading1 } from "@/components/ui/heading"

interface HeroProps {
  location?: string
}

export function Hero({ location }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-light dark:bg-tertiary pb-32 md:pb-64 w-full h-full">
      <div className="container">
        <div className="mx-auto lg:grid lg:items-center lg:gap-8 lg:grid-cols-2">
          {/* Text content */}
          <div className="flex flex-col text-center lg:text-left w-full">
            <p className="mb-2 text-muted-light dark:text-muted-dark tracking-widest font-normal">
              {location ? `${location.toUpperCase()} | ` : ""}WHITE LABEL PARTNERSHIPS
            </p>
            <Heading1 className="mb-6 text-5xl font-bold tracking-tight text-gray-900 dark:text-white md:text-6xl">
              We build it,
              <br />
              <span className="text-brand">you present it</span>
            </Heading1>
            <p className="mb-8 text-basetext-muted-foreground md:text-lg mx-auto lg:mx-0 max-w-2xl lg:max-w-xl relative z-10">
              We work with agencies to build custom websites and applications that deliver exceptional results for their clients.
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
                src="/smiling.jpg"
                alt="White Label Partnerships"
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