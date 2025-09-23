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
              TECHNICAL CONSULTING
            </p>
            <h1 className="mb-6 text-5xl font-bold tracking-tight text-gray-900 dark:text-white md:text-6xl">
              Expert guidance for your
              <br />
              <span className="text-brand">technology decisions</span>.
            </h1>
            <p className="mb-8 text-lg text-gray-600 dark:text-gray-300">
              Get professional advice on technology strategy, architecture planning, and digital solutions. Whether you need help choosing the right tools or understanding complex technical concepts, we&apos;re here to guide you.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row lg:justify-start sm:justify-center">
              <Button variant="default" size="lg" asChild>
                <Link href="/contact">Get Expert Advice</Link>
              </Button>
            </div>
          </div>
          {/* Image - hidden on smaller screens */}
          <div className="hidden lg:flex relative items-center justify-end">
            <div className="w-full h-auto max-w-[450px]">
              <Image
                src="/smiling.jpg"
                alt="Technical consulting meeting"
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