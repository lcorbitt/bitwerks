import Link from "next/link"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { Heading1 } from "@/components/ui/heading"
import { servicesHeroSupportingCopy } from "@/lib/value-propositions"

export const ServicesHero = () => {
  return (
    <section className="relative h-full w-full overflow-hidden bg-light pb-32 dark:bg-tertiary md:pb-64">
      <div className="container relative z-20">
        <div className="mx-auto lg:grid lg:grid-cols-2 lg:items-center lg:gap-8">
          <div className="flex w-full flex-col text-center lg:text-left">
            <p className="mb-2 font-normal uppercase tracking-widest text-muted-light dark:text-muted-dark">SERVICES</p>
            <Heading1 className="relative z-10 mx-auto mb-6 max-w-3xl lg:mx-0 lg:max-w-none">
              Tap into our end-to-end <span className="text-brand">tech solutions</span>
            </Heading1>
            <p className="relative z-10 mx-auto mb-8 max-w-2xl text-muted-foreground md:text-lg lg:mx-0 lg:max-w-xl leading-relaxed">
              From first concept to launch and beyond, we combine strategy, design, and engineering so your product
              feels premium and performs when it matters. {servicesHeroSupportingCopy}
            </p>
            <div className="relative z-10 flex justify-center gap-4 lg:justify-start">
              <Button asChild variant="brand" size="lg">
                <Link href="#services-directory">Browse</Link>
              </Button>
            </div>
          </div>

          <div className="relative hidden items-center justify-end lg:flex">
            <div className="h-auto w-full max-w-[450px]">
              <Image
                src="/group-working.jpg"
                alt="Team collaborating on product design and development in a modern workspace"
                width={500}
                height={500}
                priority
                className="h-auto w-full rounded-l-lg object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
