import { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface PageProps {
  params: {
    city: string
    state: string
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const location = `${params.city}, ${params.state}`
  
  return {
    title: `Web Development in ${location} | BitWerks`,
    description: `Professional web development services in ${location}. Custom software solutions, modern web applications, and technical consulting for businesses in your area.`,
    openGraph: {
      title: `Web Development Services in ${location} | BitWerks`,
      description: `Transform your business with professional web development services in ${location}. Expert solutions tailored to your needs.`,
    },
  }
}

export default function CityPage({ params }: PageProps) {
  const city = decodeURIComponent(params.city)
  const state = decodeURIComponent(params.state)
  const location = `${city}, ${state}`

  // Add validation for real US cities if needed
  if (!city || !state) {
    notFound()
  }

  return (
    <div className="container py-20">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold">
            Web Development in {location}
          </h1>
          <p className="text-lg text-muted-foreground">
            Professional web development services tailored to businesses {location === "nationwide" ? "across the U.S." : ` in ${location}.`}
          </p>
        </div>

        <div className="mb-16">
          <h2 className="mb-6 text-2xl font-semibold">Local Expertise, National Standards</h2>
          <div className="prose prose-gray dark:prose-invert max-w-none">
            <p className="mb-4 text-muted-foreground">
              Based in Fort Collins, CO, and serving businesses {location === "nationwide" ? "across the U.S." : ` in ${location}.`}
              we bring enterprise-grade web development expertise to businesses of all sizes.
              Whether you&apos;re a local startup or an established company, we deliver custom solutions
              that drive growth and enhance your digital presence.
            </p>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="mb-6 text-2xl font-semibold">Services Available in {location}</h2>
          <div className="grid gap-8 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Custom Web Development</CardTitle>
                <CardDescription>Tailored solutions for your business needs</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc space-y-2 pl-4 text-sm text-muted-foreground">
                  <li>Modern web applications</li>
                  <li>E-commerce solutions</li>
                  <li>Progressive Web Apps (PWA)</li>
                  <li>Responsive design</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Technical Consulting</CardTitle>
                <CardDescription>Expert guidance and support</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc space-y-2 pl-4 text-sm text-muted-foreground">
                  <li>Technology assessment</li>
                  <li>Architecture planning</li>
                  <li>Performance optimization</li>
                  <li>Security best practices</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="mb-6 text-2xl font-semibold">Why Choose BitWerks in {location}?</h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="mb-3 text-xl font-medium">Local Understanding</h3>
              <p className="text-muted-foreground">
                We understand the {location} market and can help you stand out in your local business environment.
              </p>
            </div>
            <div>
              <h3 className="mb-3 text-xl font-medium">Remote-First Approach</h3>
              <p className="text-muted-foreground">
                Benefit from our efficient remote collaboration while maintaining personal connection through regular communication.
              </p>
            </div>
            <div>
              <h3 className="mb-3 text-xl font-medium">Nationwide Experience</h3>
              <p className="text-muted-foreground">
                Access expertise gained from working with businesses across the United States.
              </p>
            </div>
            <div>
              <h3 className="mb-3 text-xl font-medium">Custom Solutions</h3>
              <p className="text-muted-foreground">
                Get solutions tailored to your specific needs and local market requirements.
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-lg bg-muted/40 p-8 text-center">
          <h2 className="mb-4 text-2xl font-bold">Ready to Start Your Project?</h2>
          <p className="mb-8 text-muted-foreground">
            Let&apos;s discuss how we can help your business thrive with custom web development solutions.
          </p>
          <Button asChild size="lg">
            <Link href="/contact">Schedule a Consultation</Link>
          </Button>
        </div>
      </div>
    </div>
  )
} 