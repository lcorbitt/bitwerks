import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"

import { Button } from "@/components/ui/button"

const SERVICE_PAGES: Record<string, { title: string; description: string }> = {
  "strategy-consulting": {
    title: "Strategy & Consulting",
    description:
      "Discovery, roadmaps, and technical planning so your product and platform investments align with business outcomes.",
  },
  "seo-growth": {
    title: "SEO & Growth",
    description:
      "Structured content, performance, and measurement to improve visibility and sustainable organic growth.",
  },
  ecommerce: {
    title: "E-commerce",
    description:
      "Stores, checkout flows, integrations, and operations-focused tooling tailored to how you sell.",
  },
  "ux-ui-design": {
    title: "UX / UI Design",
    description:
      "Research-informed interfaces and design systems that stay consistent from marketing pages through product UI.",
  },
  "maintenance-support": {
    title: "Maintenance & Support",
    description:
      "Ongoing updates, monitoring, and fixes so your site or app stays secure, fast, and reliable after launch.",
  },
  "migration-modernization": {
    title: "Migration & Modernization",
    description:
      "Moving legacy stacks, refactoring critical paths, and replatforming with minimal downtime and clear cutover plans.",
  },
}

interface PageProps {
  params: { slug: string }
}

export const generateStaticParams = () => Object.keys(SERVICE_PAGES).map((slug) => ({ slug }))

export const generateMetadata = ({ params }: PageProps): Metadata => {
  const entry = SERVICE_PAGES[params.slug]
  if (!entry) return { title: "Service" }
  return {
    title: entry.title,
    description: entry.description,
  }
}

export default function ServiceSlugPage({ params }: PageProps) {
  const entry = SERVICE_PAGES[params.slug]
  if (!entry) notFound()

  return (
    <div className="container py-16 md:py-24">
      <Link href="/services" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
        ← All services
      </Link>
      <h1 className="mt-8 text-3xl font-semibold tracking-tight md:text-4xl">{entry.title}</h1>
      <p className="mt-4 max-w-2xl text-lg text-muted-foreground">{entry.description}</p>
      <Button asChild className="mt-10">
        <Link href="/contact">Schedule a Call</Link>
      </Button>
    </div>
  )
}
