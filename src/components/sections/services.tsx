import { Card } from "@/components/ui/card"
import { Globe, Cog, Lightbulb } from "lucide-react";
import { Heading2 } from "@/components/ui/heading";

import Image from "next/image"
import { Button } from "../ui/button";
import { DecorativeCircles } from "../ui/decorative-circles";
import { DeviceShowcase } from "../ui/device-showcase";
interface ServicesProps {
  locationString: string
  isDefault: boolean
}

export function Services({ locationString, isDefault }: ServicesProps) {
  return (
    <>
      <section className="bg-white dark:bg-black pt-0 pb-0 md:pb-16 -mt-48 z-20 relative">
        <DecorativeCircles />
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-2 text-muted-light dark:text-muted-dark tracking-widest font-normal">
              WHAT WE DO
            </p>
            <Heading2 className="mb-8">From Concept to Completion</Heading2>
            <p className="mb-16 md:mb-32 text-muted-foreground tracking-wide text-base md:text-lg">
              At BitWerks, we specialize in <strong>custom web & software development</strong> for small businesses across the U.S. Each project is hand-coded with a focus on visbility, performance, and reliability. No page-builders, no shortcuts. We provide ongoing updates and support, so you&apos;re never left without help. Our goal is to build lasting partnerships and empower your business to grow with confidence.
            </p>
          </div>
          <div className="grid gap-24 md:gap-8 md:grid-cols-2 lg:grid-cols-3 mt-32">
            {/* Card 1 */}
            <Card
              title="Web Development" 
              description="Modern, responsive websites built with cutting-edge technologies." 
              linkHref="/contact"
            >
              <Globe className="w-8 h-8 md:w-12 md:h-12 text-white" strokeWidth={1.5} />
            </Card>
            {/* Card 2 */}
            <Card
              title="Software Development" 
              description="Tailored solutions to solve complex business challenges." 
              linkHref="/contact"
            >
              <Cog className="w-8 h-8 md:w-12 md:h-12 text-white" strokeWidth={1.5} />
            </Card>{/* Card 3 */}
            <Card
              title="Technical Consulting" 
              description="Strategic guidance for your technology initiatives." 
              linkHref="/contact"
            >
              <Lightbulb className="w-8 h-8 md:w-12 md:h-12 text-white" strokeWidth={1.5} />
            </Card>
          </div>
        </div>
      <div className="mt-16 text-center">
        <Button asChild variant="default" size="lg" className="bg-accent hover:bg-accent/90 text-white z-20">
          <a href="tel:+8167144107">Schedule a Call</a>
        </Button>
      </div>
      </section>
    </>
  )
} 