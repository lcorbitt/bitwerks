import { Card } from "@/components/ui/card"
import { Code, Laptop, Users } from "lucide-react";
import { Heading2 } from "@/components/ui/heading";
import { Button } from "../ui/button";


export function Services() {
  return (
    <>
      <section className="bg-white dark:bg-black pt-0 pb-0 md:pb-16 -mt-48 z-20 relative">        
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-2 text-muted-light dark:text-muted-dark tracking-widest font-normal uppercase">
              WHAT WE DO
            </p>
            <Heading2 className="mb-8">From Concept to Completion</Heading2>
            <p className="mb-16 md:mb-32 text-muted-foreground tracking-wide text-lg">
              BitWerks delivers custom digital solutions for businesses, from websites and e-commerce to full web and mobile apps, SaaS platforms, and internal tools. We cover strategy, UX/UI design, full-stack engineering, and ongoing support. Every build is hand-coded so thoughtful design meets high performance and reliability. No page builders and no shortcuts, just a transparent partnership focused on results that help your business grow.
            </p>
          </div>
          <div className="grid gap-24 md:gap-8 md:grid-cols-2 lg:grid-cols-3 mt-32">
            {/* Card 1 */}
            <Card
              title="Web Development" 
              description="Modern, responsive websites built with cutting-edge technologies." 
              linkHref="/services/web-development"
            >
              <Laptop className="w-8 h-8 md:w-12 md:h-12 text-white" strokeWidth={1.5} />
            </Card>
            {/* Card 2 */}
            <Card
              title="Software Development" 
              description="Custom software solutions and MVP development to launch products quickly and validate market fit." 
              linkHref="/services/software-development"
            >
              <Code className="w-8 h-8 md:w-12 md:h-12 text-white" strokeWidth={1.5} />
            </Card>
            {/* Card 3 */}
            <Card
              title="White Label Partnerships" 
              description="Partner with us to deliver custom websites and applications under your brand." 
              linkHref="/services/white-label-partnerships"
            >
              <Users className="w-8 h-8 md:w-12 md:h-12 text-white" strokeWidth={1.5} />
            </Card>
          </div>
        </div>

        <div className="mt-16 text-center">
          <Button asChild variant="brand" size="lg" className="z-20">
            <a href="/contact">Get Started</a>
          </Button>
        </div>
      </section>
    </>
  )
} 