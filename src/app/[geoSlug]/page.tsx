import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { LocationServiceCityExperience } from "@/components/location-service/location-service-city-experience"
import { getSiteBaseUrl } from "@/lib/blog/site-base-url"
import { buildColoradoGeoStaticParams, humanizeGeoTail, parseGeoSeoPhrase } from "@/lib/geo-seo-phrases"
import type { LocationData } from "@/lib/location"
import { formatLocationString } from "@/lib/us-cities"
import { generateLocationMetadata, generateLocationStructuredData } from "@/lib/seo-utils"

export const dynamicParams = false

export function generateStaticParams() {
  return buildColoradoGeoStaticParams()
}

interface PageProps {
  params: { geoSlug: string }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const slug = decodeURIComponent(params.geoSlug)
  const parsed = parseGeoSeoPhrase(slug)
  if (!parsed) return { title: "BitWerks" }

  const baseUrl = getSiteBaseUrl()
  const titlePhrase = `${humanizeGeoTail(parsed.rule.tail)} in ${formatLocationString(parsed.city)} | BitWerks`

  return generateLocationMetadata({
    city: parsed.city,
    service: parsed.rule.service,
    baseUrl,
    canonicalPath: `/${slug}`,
    titleOverride: titlePhrase,
  })
}

export default function GeoPhrasePage({ params }: PageProps) {
  const slug = decodeURIComponent(params.geoSlug)
  const parsed = parseGeoSeoPhrase(slug)
  if (!parsed) notFound()

  const { city, rule } = parsed
  const locationData: LocationData = { city: city.city, state: city.state, isDefault: false }
  const pageUrl = `${getSiteBaseUrl().replace(/\/$/, "")}/${slug}`
  const structuredData = generateLocationStructuredData(city, rule.service, { pageUrl })

  return (
    <LocationServiceCityExperience
      city={city}
      service={rule.service}
      locationData={locationData}
      structuredDataJson={JSON.stringify(structuredData)}
    />
  )
}
