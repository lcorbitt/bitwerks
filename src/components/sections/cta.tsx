import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Heading2 } from "@/components/ui/heading"

export function CTA() {
  return (
    <section className="relative dark:bg-primary pb-20 bg-brand">
      <div className="container relative z-10 pt-12">
        <div className="mx-auto max-w-3xl text-center">
          {/* Card */}
          <div className="bg-light dark:bg-tertiary rounded-lg p-8 md:p-12 shadow-lg dark:shadow-2xl dark:border dark:border-white/10">
            <Heading2 className="mb-4">Ready to Build?</Heading2>
            <p className="mb-8 text-muted-foreground">
              Whether you’re looking to streamline operations, reach new markets, or bring a big idea to life, we’ll help you design and implement the right solution so you can focus on what matters most.
            </p>
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white">
              <Link href="/contact">Get Started Today</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export const Teardrop7 = () => (
  <div className="" style={{ maxWidth: 'none' }}>
    <svg
      className="w-full text-light dark:text-tertiary"
      fill="none"
      preserveAspectRatio="none"
      viewBox="0 0 1920 254"
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: 'block' }}
    >
      <path
        d="M1668.54 58.137c124.52 31.881 204.12 63.173 251.46 85.537V-4H0v254C356.508 169.957 717.072 91.544 986.268 43.36 1255.46-4.822 1443.9.623 1668.54 58.138Z"
        fill="currentColor"
      />
    </svg>
  </div>
)
