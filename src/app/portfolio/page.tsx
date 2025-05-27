import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const projects = [
  {
    title: "E-commerce Platform",
    description: "A modern e-commerce solution built with Next.js and TypeScript.",
    image: "/portfolio/ecommerce.webp",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma"],
    link: "#",
  },
  {
    title: "Business Dashboard",
    description: "Real-time analytics dashboard for business intelligence.",
    image: "/portfolio/dashboard.webp",
    tags: ["React", "TypeScript", "D3.js", "REST API"],
    link: "#",
  },
  {
    title: "Mobile App Backend",
    description: "Scalable backend infrastructure for a mobile fitness app.",
    image: "/portfolio/backend.webp",
    tags: ["Node.js", "Express", "MongoDB", "Docker"],
    link: "#",
  },
]

export default function PortfolioPage() {
  return (
    <div className="container py-20">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold">Portfolio</h1>
          <p className="text-lg text-muted-foreground">
            A selection of my recent projects and technical achievements.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Card key={project.title} className="overflow-hidden">
              <div className="aspect-video relative">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Button asChild variant="outline" className="w-full">
                  <Link href={project.link}>View Project</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h2 className="mb-4 text-2xl font-bold">Let&apos;s Work Together</h2>
          <p className="mb-8 text-muted-foreground">
            Have a project in mind? I&apos;d love to help bring your vision to life.
          </p>
          <Button asChild size="lg">
            <Link href="/contact">Start a Project</Link>
          </Button>
        </div>
      </div>
    </div>
  )
} 