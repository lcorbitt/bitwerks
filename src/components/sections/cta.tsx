import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Heading3 } from "@/components/ui/heading"

interface CTAProps {
  className?: string
}

export function CTA({ className = "" }: CTAProps) {
  return (
    <section className={`relative dark:bg-primary bg-brand pt-16 md:pt-24 overflow-hidden ${className}`}>
      {/* Circuit board background */}
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
          <div className="bg-white dark:bg-tertiary rounded-lg p-8 md:p-12 shadow-lg dark:shadow-2xl">
            <Heading3 className="mb-8">Let&apos;s develop something awesome <span className="text-brand">together.</span></Heading3>
            {/* <p className="mb-8 text-muted-foreground">
              Build beautifully and scale successfully.
            </p> */}
            <Button variant="brand" asChild size="lg">
              <Link href="/contact">Get In Touch</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
