import { Card } from "@/components/ui/card"
import { Globe, Cog, Lightbulb } from "lucide-react";
import { Heading2 } from "@/components/ui/heading";

import Image from "next/image"
import { Button } from "../ui/button";
interface ServicesProps {
  locationString: string
  isDefault: boolean
}

export function Services({ locationString, isDefault }: ServicesProps) {
  return (
    <>
      {/* Smooth curved divider */}
      <div className="w-full h-24 overflow-hidden -mb-1 dark:bg-primary">
        <svg
          viewBox="0 0 1440 96"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full text-light dark:text-primary lg:dark:text-secondary "
          preserveAspectRatio="none"
        >
          <path
            d="M0 0H1440V72C1440 72 1088 0 720 0C352 0 0 72 0 72V0Z"
            fill="currentColor"
          />
        </svg>
      </div>
      
      <section className="bg-white dark:bg-black pb-16 md:pb-20">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-8 text-muted-light dark:text-muted-dark tracking-widest text-sm font-bold">
              WHAT WE DO
            </p>
            <Heading2 className="mb-16">FROM CONCEPT TO COMPLETION</Heading2>
            <p className="mb-16 md:mb-32 text-muted-foreground tracking-wide text-base">
              At BitWerks, we specialize in custom web and software development for small businesses across the U.S. Every project is hand-coded for performance, stability, and long-term value. No page-builders, no shortcuts. We handle ongoing updates and support, so you're never left stuck. Our focus is on building lasting partnerships and helping your business grow online with confidence.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Card 1 */}
            <Card
              title="Web Development" 
              description="Modern, responsive websites built with cutting-edge technologies." 
              linkHref="/contact"
            >
              <Globe className="w-12 h-12 text-white" strokeWidth={1.5} />
            </Card>
            {/* Card 2 */}
            <Card
              title="Software Development" 
              description="Tailored solutions to solve complex business challenges." 
              linkHref="/contact"
            >
              <Cog className="w-12 h-12 text-white" strokeWidth={1.5} />
            </Card>{/* Card 3 */}
            <Card
              title="Technical Consulting" 
              description="Strategic guidance for your technology initiatives." 
              linkHref="/contact"
            >
              <Lightbulb className="w-12 h-12 text-white" strokeWidth={1.5} />
            </Card>
          </div>
        </div>
      <div className="mt-16 text-center">
        <Button asChild variant="default">
          <a href="tel:+8167144107">CALL US TODAY</a>
        </Button>
      </div>
      </section>
    </>
  )
} 