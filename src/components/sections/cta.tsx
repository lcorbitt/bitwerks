import Link from "next/link"
import { Button } from "@/components/ui/button"

interface CTAProps {
  locationString: string
  isDefault: boolean
}

export function CTA({ locationString, isDefault }: CTAProps) {
  return (
    <section className="relative dark:bg-primary py-20 bg-white">
      {/* Even more dramatic rampart arch: left lower, right much higher and steeper */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none" style={{ height: "160px" }}>
        <svg
          viewBox="0 0 1440 160"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
          preserveAspectRatio="none"
        >
          {/* Mobile - more subtle curve */}
          <path
            d="M0,140 C800,140 900,60 1440,160 L1440,0 L0,0 Z"
            fill="currentColor"
            className="dark:text-tertiary md:hidden text-light"
          />
          {/* Desktop - current dramatic curve */}
          <path
            d="M0,140 C800,140 900,-20 1440,160 L1440,0 L0,0 Z"
            fill="currentColor"
            className="dark:text-tertiary hidden md:block text-light"
          />
        </svg>
      </div>
      <div className="container relative z-10 pt-44">
        <div className="mx-auto max-w-3xl text-center">
          <div className="bg-light dark:bg-tertiary rounded-lg p-8 md:p-12 shadow-lg">
            <h2 className="mb-4 text-3xl font-bold">Ready to Transform Your Business?</h2>
            <p className="mb-8 text-muted-foreground">
              Let&apos;s discuss how we can help achieve your technology goals
              {isDefault ? " no matter where you&apos;re located" : ` in ${locationString}`}.
            </p>
            <Button asChild>
              <Link href="/contact">Schedule a Consultation</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
} 