import { Hero } from "./hero"
import { ClientShowcase } from "@/components/ui/client-showcase"
import { sampleClients } from "@/lib/clients-data"
import { CTA } from "@/components/sections/cta"
import { DecorativeCircles } from "@/components/ui/decorative-circles"
import { Heading2 } from "@/components/ui/heading"
import { Process } from "@/components/sections/process"

export default function OurWorkPage() {
  return (
    <div className="flex flex-col overflow-hidden">
      <Hero />
      
      {/* Curved section divider */}
      <section className="clip-top-large-circle relative -left-[15%] h-72 w-[130%] bg-white dark:bg-primary -mt-20 md:-mt-48 z-20"></section>

      {/* Client Showcase - Main Section */}
      <section id="case-studies" className="py-0 -mt-48 z-20 -mb-8">
        <div className="container mx-auto text-center max-w-4xl"> 
          <Heading2 className="mb-4">
            10 Years of Delivering
          </Heading2>

          {/* <p className="text-xl text-muted-light dark:text-muted-dark">
            From startups to established businesses, we&apos;ve partnered with companies across various industries to create custom web and software solutions that deliver exceptional results.
          </p> */}
        </div>
        
        <DecorativeCircles className="bottom-48" />
        <ClientShowcase clients={sampleClients} />
      </section>

      {/* Curved section divider */}
      <section className="clip-bottom-large-circle relative -left-[15%] h-72 w-[130%] bg-white dark:bg-primary -mt-32 z-10"></section>

      <Process />
      {/* CTA Section */}
      <DecorativeCircles inverted className="bottom-32" />
      <CTA />
    </div>
  )
}
