import { Metadata } from "next"
import { USCity, formatLocationString, formatLocationDisplay } from "./us-cities"

interface LocationMetadataOptions {
  city: USCity
  service: "web-development" | "software-development" | "white-label-partnerships" | "web-design" | "app-development"
  baseUrl?: string
}

const serviceNames = {
  "web-development": "Web Development",
  "software-development": "Software Development",
  "white-label-partnerships": "White Label Partnerships",
  "web-design": "Web Design",
  "app-development": "App Development",
}

const serviceDescriptions = {
  "web-development": "custom web development",
  "software-development": "custom software development",
  "white-label-partnerships": "white label development partnerships",
  "web-design": "web design",
  "app-development": "app development",
}

export function generateLocationMetadata({
  city,
  service,
  baseUrl = "https://bitwerks.dev",
}: LocationMetadataOptions): Metadata {
  const locationString = formatLocationString(city)
  const locationDisplay = formatLocationDisplay(city)
  const serviceName = serviceNames[service]
  const serviceDesc = serviceDescriptions[service]
  // Redirect services (web-design, app-development) are at root level, not in /services/
  const isRedirectService = service === "web-design" || service === "app-development"
  const url = isRedirectService 
    ? `${baseUrl}/${service}/${city.slug}/${city.stateSlug}`
    : `${baseUrl}/services/${service}/${city.slug}/${city.stateSlug}`

  const title = `${serviceName} in ${locationString} | BitWerks`
  const description = `Professional ${serviceDesc} services in ${locationDisplay}. Expert ${serviceName.toLowerCase()} solutions tailored to businesses in ${locationString} and nationwide.`

  return {
    title,
    description,
    keywords: [
      serviceName.toLowerCase(),
      `${serviceName.toLowerCase()} ${locationString}`,
      `${serviceName.toLowerCase()} ${city.city}`,
      `${serviceName.toLowerCase()} ${city.stateName}`,
      "custom software",
      "web design",
      "app development",
      city.city,
      city.stateName,
      "small business",
      "startup",
    ],
    openGraph: {
      title: `${serviceName} Services in ${locationString} | BitWerks`,
      description: `Transform your business with professional ${serviceDesc} in ${locationDisplay}. Expert digital solutions tailored to your needs.`,
      url,
      siteName: "BitWerks",
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${serviceName} in ${locationString} | BitWerks`,
      description: `Professional ${serviceDesc} services in ${locationDisplay}.`,
    },
    alternates: {
      canonical: url,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  }
}

export function generateLocationStructuredData(
  city: USCity,
  service: "web-development" | "software-development" | "white-label-partnerships" | "web-design" | "app-development"
) {
  const locationString = formatLocationString(city)
  const serviceName = serviceNames[service]
  const baseUrl = "https://bitwerks.dev"
  // Redirect services (web-design, app-development) are at root level, not in /services/
  const isRedirectService = service === "web-design" || service === "app-development"
  const url = isRedirectService 
    ? `${baseUrl}/${service}/${city.slug}/${city.stateSlug}`
    : `${baseUrl}/services/${service}/${city.slug}/${city.stateSlug}`

  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": url,
    name: `BitWerks - ${serviceName} in ${locationString}`,
    description: `Professional ${serviceDescriptions[service]} services in ${locationString}. Expert ${serviceName.toLowerCase()} solutions for businesses in ${city.city}, ${city.stateName} and nationwide.`,
    url,
    serviceType: serviceName,
    areaServed: {
      "@type": "City",
      name: city.city,
      containedIn: {
        "@type": "State",
        name: city.stateName,
      },
    },
    provider: {
      "@type": "Organization",
      name: "BitWerks",
      url: baseUrl,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Denver",
        addressRegion: "CO",
        postalCode: "80202",
        addressCountry: "US",
      },
    },
    serviceArea: {
      "@type": "Country",
      name: "United States",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      reviewCount: "50+",
    },
  }
}

