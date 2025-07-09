import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

interface CTAProps {
  locationString: string
  isDefault: boolean
}

export function CTA({ locationString, isDefault }: CTAProps) {
  return (
    <section className="relative dark:bg-primary pb-20 bg-white pt-12 md:pt-24 lg:pt-32 xl:pt-40">
      <div className="absolute top-0 left-0 w-full z-10">
        <Teardrop7 />
      </div>
      <div className="container relative z-10 pt-20">
        <div className="mx-auto max-w-3xl text-center">
          {/* Card */}
          <div className="bg-light dark:bg-tertiary rounded-lg p-8 md:p-12 shadow-lg dark:shadow-2xl border border-black/5 dark:border-white/10">
            <h2 className="mb-4 text-3xl font-bold">Ready to Transform Your Business?</h2>
            <p className="mb-8 text-muted-foreground">
              Let&apos;s discuss how we can help achieve your technology goals
              {isDefault ? " no matter where you&apos;re located" : ` in ${locationString}`}.
            </p>
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white">
              <Link href="/contact">Schedule a Call</Link>
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
