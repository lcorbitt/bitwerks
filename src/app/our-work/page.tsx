import { Hero } from "./hero"
import { ClientShowcase } from "@/components/ui/client-showcase"
import { sampleClients } from "@/lib/clients-data"
import { CTA } from "@/components/sections/cta"
import { DecorativeCircles } from "@/components/ui/decorative-circles"

export default function OurWorkPage() {
  return (
    <div className="flex flex-col overflow-hidden">
      <Hero />
      
      {/* Curved section divider */}
      <section className="clip-top-large-circle relative -left-[15%] h-72 w-[130%] bg-white dark:bg-primary -mt-20 md:-mt-48 z-20"></section>

      {/* Client Showcase - Main Section */}
      <section id="case-studies" className="py-0 -mt-48 z-20 -mb-8">
        <DecorativeCircles />
        <ClientShowcase clients={sampleClients} />
      </section>

      {/* Curved section divider */}
      <section className="clip-bottom-large-circle relative -left-[15%] h-72 w-[130%] bg-white dark:bg-primary -mt-32 z-10"></section>

      {/* CTA Section */}
      <div className="absolute top-24">
        <DecorativeCircles inverted />
      </div>
      <CTA />
    </div>
  )
}
