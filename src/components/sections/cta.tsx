import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Heading2, Heading3 } from "@/components/ui/heading"

interface CTAProps {
  className?: string
}

export function CTA({ className = "" }: CTAProps) {
  return (
    <section className={`relative dark:bg-primary bg-brand pt-16 md:pt-24 ${className}`}>
      {/* Circuit board background */}
      <div 
        className="absolute inset-0 opacity-5"
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
            {/* <Heading2 className="mb-4">Let&apos;s Build Something Great</Heading2> */}
            <Heading3 className="mb-4">Let&apos;s develop something awesome <span className="text-brand">together.</span></Heading3>
            <p className="mb-8 text-muted-foreground">
              Build beautifully and scale successfully.
              {/* Whether you&apos;re looking to streamline operations, reach new markets, or bring a big idea to life, we&apos;ll help you implement the right technical solution so you can focus on what matters most. */}
            </p>
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white">
              <Link href="/contact">Get In Touch</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
