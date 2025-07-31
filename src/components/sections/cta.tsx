import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Heading2 } from "@/components/ui/heading"
import { WaveGraphic } from "@/components/ui/wave-graphic"

export function CTA() {
  return (
    <>
      <WaveGraphic />
    <section className="relative dark:bg-primary bg-brand pt-0">
      <div className="container relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          {/* Card */}
          <div className="bg-white dark:bg-tertiary rounded-lg p-8 md:p-12 shadow-lg dark:shadow-2xl">
            <Heading2 className="mb-4">Let&apos;s Build Something Great</Heading2>
            <p className="mb-8 text-muted-foreground">
              Whether you&apos;re looking to streamline operations, reach new markets, or bring a big idea to life, we&apos;ll help you implement the right technical solution so you can focus on what matters most.
            </p>
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white">
              <Link href="/contact">Get Started</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}
