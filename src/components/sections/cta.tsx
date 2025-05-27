import Link from "next/link"
import { Button } from "@/components/ui/button"

interface CTAProps {
  locationString: string
  isDefault: boolean
}

export function CTA({ locationString, isDefault }: CTAProps) {
  return (
    <section className="border-t bg-muted/40 py-20">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold">Ready to Transform Your Business?</h2>
          <p className="mb-8 text-muted-foreground">
            Let's discuss how we can help achieve your technology goals
            {isDefault ? " no matter where you're located" : ` in ${locationString}`}.
          </p>
          <Button asChild size="lg">
            <Link href="/contact">Schedule a Consultation</Link>
          </Button>
        </div>
      </div>
    </section>
  )
} 