import { Metadata } from "next"
import { notFound } from "next/navigation"

import { LocationServiceCityExperience } from "@/components/location-service/location-service-city-experience"
import type { LocationData } from "@/lib/location"
import { majorUSCities, getCityBySlug } from "@/lib/us-cities"
import { generateLocationMetadata, generateLocationStructuredData } from "@/lib/seo-utils"

export async function generateStaticParams() {
  return majorUSCities.map((city) => ({
    city: city.slug,
    state: city.stateSlug,
  }))
}

interface PageProps {
  params: {
    city: string
    state: string
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const citySlug = decodeURIComponent(params.city)
  const stateSlug = decodeURIComponent(params.state)
  const city = getCityBySlug(citySlug, stateSlug)

  if (!city) {
    return {
      title: "Web Design & Development Services | BitWerks",
      description:
        "Professional web design & development services serving businesses nationwide. Expert designers and developers based in Denver, CO.",
      keywords: [
        "web design",
        "web development",
        "web design and development",
        "custom web design",
        "responsive web design",
        "website design",
        "website development",
      ],
    }
  }

  return generateLocationMetadata({
    city,
    service: "web-development",
  })
}

export default function CityPage({ params }: PageProps) {
  const citySlug = decodeURIComponent(params.city)
  const stateSlug = decodeURIComponent(params.state)
  const city = getCityBySlug(citySlug, stateSlug)
  if (!city) notFound()

  const locationData: LocationData = { city: city.city, state: city.state, isDefault: false }
  const structuredData = generateLocationStructuredData(city, "web-development")

  return (
    <LocationServiceCityExperience
      city={city}
      service="web-development"
      locationData={locationData}
      structuredDataJson={JSON.stringify(structuredData)}
    />
  )
}
