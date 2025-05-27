import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const services = [
  {
    title: "Web Development",
    description: "Custom web applications built with modern technologies.",
    features: [
      "Responsive web applications",
      "Progressive Web Apps (PWA)",
      "E-commerce solutions",
      "Content Management Systems",
      "Web portals and dashboards",
    ],
    benefits: [
      "Fast, responsive user experience",
      "Mobile-first design approach",
      "SEO-friendly architecture",
      "Scalable solutions",
    ],
  },
  {
    title: "Custom Software Development",
    description: "Tailored software solutions to solve unique business challenges.",
    features: [
      "Business process automation",
      "Integration solutions",
      "Database design and optimization",
      "API development",
      "Cloud-based applications",
    ],
    benefits: [
      "Improved operational efficiency",
      "Reduced manual work",
      "Better data management",
      "Enhanced productivity",
    ],
  },
  {
    title: "Technical Consulting",
    description: "Expert guidance for your technology initiatives.",
    features: [
      "Technology assessment",
      "Architecture planning",
      "Performance optimization",
      "Security best practices",
      "Code review and audit",
    ],
    benefits: [
      "Informed decision making",
      "Risk mitigation",
      "Cost optimization",
      "Best practice implementation",
    ],
  },
]

export default function ServicesPage() {
  return (
    <div className="container py-20">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold">Services</h1>
          <p className="text-lg text-muted-foreground">
            Professional software development services tailored to your needs.
          </p>
        </div>

        <div className="mb-16 space-y-12">
          {services.map((service) => (
            <div key={service.title} className="rounded-lg border bg-card p-8">
              <h2 className="mb-4 text-2xl font-bold">{service.title}</h2>
              <p className="mb-8 text-muted-foreground">{service.description}</p>
              
              <div className="grid gap-8 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Features</CardTitle>
                    <CardDescription>What's included</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc space-y-2 pl-4 text-sm text-muted-foreground">
                      {service.features.map((feature) => (
                        <li key={feature}>{feature}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Benefits</CardTitle>
                    <CardDescription>Why choose this service</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc space-y-2 pl-4 text-sm text-muted-foreground">
                      {service.benefits.map((benefit) => (
                        <li key={benefit}>{benefit}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>

        <div className="rounded-lg bg-muted/40 p-8 text-center">
          <h2 className="mb-4 text-2xl font-bold">Custom Requirements?</h2>
          <p className="mb-8 text-muted-foreground">
            Need something specific? Let's discuss your unique requirements and create a custom solution.
          </p>
          <Button asChild size="lg">
            <Link href="/contact">Schedule a Consultation</Link>
          </Button>
        </div>
      </div>
    </div>
  )
} 