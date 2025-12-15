import { Metadata } from "next"
import { redirect } from "next/navigation"
import { getCityBySlug } from "@/lib/us-cities"
import { generateLocationMetadata } from "@/lib/seo-utils"

interface PageProps {
  params: {
    city: string
    state: string
  }
}

export async function generateStaticParams() {
  // Import here to avoid circular dependency
  const { majorUSCities } = await import("@/lib/us-cities")
  return majorUSCities.map((city) => ({
    city: city.slug,
    state: city.stateSlug,
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const citySlug = decodeURIComponent(params.city)
  const stateSlug = decodeURIComponent(params.state)
  const city = getCityBySlug(citySlug, stateSlug)

  if (!city) {
    return {
      title: "Web Design Services | BitWerks",
      description: "Professional web design services serving businesses nationwide.",
    }
  }

  return generateLocationMetadata({
    city,
    service: "web-design",
  })
}

export default function WebDesignRedirect({ params }: PageProps) {
  const citySlug = decodeURIComponent(params.city)
  const stateSlug = decodeURIComponent(params.state)
  const city = getCityBySlug(citySlug, stateSlug)

  if (city) {
    redirect(`/services/web-development/${city.slug}/${city.stateSlug}`)
  } else {
    redirect("/services/web-development")
  }
}

