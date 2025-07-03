import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const expertise = [
  {
    title: "Frontend Development",
    description: "Building modern, responsive web applications with React, Next.js, and TypeScript.",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "UI/UX Design"],
  },
  {
    title: "Backend Development",
    description: "Creating robust and scalable server-side solutions.",
    skills: ["Node.js", "Express", "RESTful APIs", "Database Design", "Cloud Services"],
  },
  {
    title: "Full Stack Solutions",
    description: "End-to-end development of web applications and digital products.",
    skills: ["System Architecture", "API Integration", "Performance Optimization", "Security Best Practices"],
  },
]

export default function AboutPage() {
  return (
    <div className="container py-20">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold">About Me</h1>
          <p className="text-lg text-muted-foreground">
            Passionate about creating exceptional software solutions that drive business success.
          </p>
        </div>

        <div className="mb-16">
          <h2 className="mb-6 text-2xl font-semibold">My Approach</h2>
          <div className="prose prose-gray dark:prose-invert max-w-none">
            <p className="mb-4 text-muted-foreground">
              With a strong foundation in modern web technologies and a commitment to clean, maintainable code,
              I specialize in building custom software solutions that help businesses thrive in the digital age.
            </p>
            <p className="mb-4 text-muted-foreground">
              My focus is on delivering high-quality, scalable applications that not only meet current needs
              but are also built to evolve with your business. I believe in writing clean, well-documented code
              and following industry best practices to ensure long-term maintainability and performance.
            </p>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="mb-6 text-2xl font-semibold">Areas of Expertise</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {expertise.map((area) => (
              <Card key={area.title}>
                <CardHeader>
                  <CardTitle>{area.title}</CardTitle>
                  <CardDescription>{area.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc space-y-2 pl-4 text-sm text-muted-foreground">
                    {area.skills.map((skill) => (
                      <li key={skill}>{skill}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h2 className="mb-6 text-2xl font-semibold">Work Process</h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="mb-3 text-xl font-medium">1. Discovery & Planning</h3>
              <p className="text-muted-foreground">
                Understanding your business needs, goals, and technical requirements to create a comprehensive project plan.
              </p>
            </div>
            <div>
              <h3 className="mb-3 text-xl font-medium">2. Design & Development</h3>
              <p className="text-muted-foreground">
                Iterative development with regular updates and feedback to ensure the solution meets your expectations.
              </p>
            </div>
            <div>
              <h3 className="mb-3 text-xl font-medium">3. Testing & Optimization</h3>
              <p className="text-muted-foreground">
                Thorough testing and performance optimization to ensure a robust and efficient solution.
              </p>
            </div>
            <div>
              <h3 className="mb-3 text-xl font-medium">4. Deployment & Support</h3>
              <p className="text-muted-foreground">
                Smooth deployment and ongoing support to ensure your solution continues to perform optimally.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="mb-4 text-2xl font-bold">Ready to Start Your Project?</h2>
          <p className="mb-8 text-muted-foreground">
            Let&apos;s discuss how I can help bring your ideas to life with custom software solutions.
          </p>
          <Button asChild variant="default">
            <Link href="/contact">Get Started</Link>
          </Button>
        </div>
      </div>
    </div>
  )
} 