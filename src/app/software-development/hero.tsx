import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Heading1 } from "@/components/ui/heading"

interface HeroProps {
  locationString: string
}

export function Hero({ locationString }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-light dark:bg-tertiary pt-16 md:pt-20 pb-32 md:pb-64 w-full h-full">
      <div className="container">
        <div className="mx-auto lg:grid lg:items-center lg:gap-8 lg:grid-cols-2">
          {/* Text content */}
          <div className="flex flex-col text-center lg:text-left w-full">
            <p className="mb-2 text-muted-light dark:text-muted-dark tracking-widest font-normal">
              SOFTWARE DEVELOPMENT
            </p>
            <h1 className="mb-6 text-5xl font-bold tracking-tight text-gray-900 dark:text-white md:text-6xl">
              Powerful, scalable
              <br />
              <span className="text-brand">software solutions</span>.
            </h1>
            <p className="mb-8 text-lg text-gray-600 dark:text-gray-300">
              Work with a dedicated expert to design and develop custom software applications that streamline your business operations and drive growth.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row lg:justify-start sm:justify-center">
              <Button variant="default" size="lg" asChild>
                <Link href="/contact">Get Started</Link>
              </Button>
            </div>
          </div>
          {/* Image - hidden on smaller screens */}
          <div className="hidden lg:flex relative items-center justify-end">
            <div className="w-full h-auto max-w-[450px]">
              <Image
                src="/headphones.jpg"
                alt="Software developer image"
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