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
      title: "Software Development Services | BitWerks",
      description:
        "Professional software development services serving businesses nationwide. Based in Denver, CO.",
    }
  }

  return generateLocationMetadata({
    city,
    service: "software-development",
  })
}

export default function CityPage({ params }: PageProps) {
  const citySlug = decodeURIComponent(params.city)
  const stateSlug = decodeURIComponent(params.state)
  const city = getCityBySlug(citySlug, stateSlug)
  if (!city) notFound()

  const locationData: LocationData = { city: city.city, state: city.state, isDefault: false }
  const structuredData = generateLocationStructuredData(city, "software-development")

  return (
    <LocationServiceCityExperience
      city={city}
      service="software-development"
      locationData={locationData}
      structuredDataJson={JSON.stringify(structuredData)}
    />
  )
}
