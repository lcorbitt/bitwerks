import type { ReactNode } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Heading3 } from "@/components/ui/heading"
import { ScrollFadeIn } from "@/components/ui/scroll-fade-in"

export interface CTAProps {
  className?: string
  /** When set, replaces the default headline (e.g. location service pages). */
  headline?: ReactNode
}

export function CTA({ className = "", headline }: CTAProps) {
  return (
    <section className={`relative bg-brand dark:bg-brand/80 pt-16 md:pt-24 overflow-hidden ${className}`}>
      {/* Circuit board background */}
      <ScrollFadeIn>
        <div 
          className="absolute -inset-24 md:-inset-2 scale-75 md:scale-100 opacity-5"
          style={{
            backgroundImage: 'url(/circuit-board.svg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed'
          }}
        />
        <div className="container relative z-10">
          <div className="mx-auto max-w-4xl text-center">
            {/* Card */}
            <div className="bg-white dark:bg-primary rounded-lg p-8 md:p-12 shadow-lg dark:shadow-2xl">
              <Heading3 className="mb-8">
                {headline ?? (
                  <>
                    Let&apos;s bring your vision to <span className="text-brand">life.</span>
                  </>
                )}
              </Heading3>
              <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button variant="brand" asChild size="lg">
                  <Link href="/contact">Get In Touch</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </ScrollFadeIn>
    </section>
  )
}
