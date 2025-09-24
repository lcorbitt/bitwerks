import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Heading1 } from "@/components/ui/heading"

interface HeroProps {
  locationString: string
}

export function Hero({ locationString }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-light dark:bg-tertiary pb-32 md:pb-64 w-full h-full">
      <div className="container">
        <div className="mx-auto lg:grid lg:items-center lg:gap-8 lg:grid-cols-2">
          {/* Text content */}
          <div className="flex flex-col text-center lg:text-left w-full">
            <p className="mb-2 text-muted-light dark:text-muted-dark tracking-widest font-normal">
              WHITE-LABEL DEVELOPMENT
            </p>
            <h1 className="mb-6 text-5xl font-bold tracking-tight text-gray-900 dark:text-white md:text-6xl">
              Partner with us to deliver
              <br />
              <span className="text-brand">custom solutions</span>.
            </h1>
            <p className="mb-8 text-lg text-gray-600 dark:text-gray-300">
              We work with marketing and SEO agencies to build custom websites and applications under your brand. With our custom designs, development expertise, and perfect Page Speed Scores, we boost the power and performance of any marketing campaign.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row lg:justify-start sm:justify-center">
              <Button variant="default" size="lg" asChild>
                <Link href="/contact">Start Partnership</Link>
              </Button>
            </div>
          </div>
          {/* Image - hidden on smaller screens */}
          <div className="hidden lg:flex relative items-center justify-end">
            <div className="w-full h-auto max-w-[450px]">
              <Image
                src="/smiling.jpg"
                alt="White-label development partnership"
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