import { getSiteBaseUrl } from "@/lib/blog/site-base-url"
import { LocationData } from "@/lib/location"

interface SchemaProps {
  location: LocationData
}

/** Sitewide Organization JSON-LD for answer engines and brand panels. */
export const SiteOrganizationSchema = () => {
  const baseUrl = getSiteBaseUrl()
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${baseUrl}/#organization`,
    name: "BitWerks",
    url: baseUrl,
    logo: `${baseUrl}/logo-light.png`,
    description:
      "BitWerks designs and builds custom web and software for teams in Denver, Northern Colorado, and nationwide.",
    areaServed: [
      {
        "@type": "City",
        name: "Denver",
        containedInPlace: { "@type": "State", name: "Colorado" },
      },
      {
        "@type": "AdministrativeArea",
        name: "Northern Colorado",
        containedInPlace: { "@type": "State", name: "Colorado" },
      },
      { "@type": "Country", name: "United States" },
    ],
  }

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
  )
}

export function LocalBusinessSchema({ location }: SchemaProps) {
  const baseUrl = getSiteBaseUrl()
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": baseUrl,
    name: "BitWerks",
    description: location.isDefault
      ? "Professional web and software development rooted in Denver and Northern Colorado, serving businesses nationwide."
      : `Professional web and software development rooted in Denver and Northern Colorado, also serving ${location.city}, ${location.state} and businesses nationwide.`,
    url: baseUrl,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Denver",
      addressRegion: "CO",
      postalCode: "80202",
      addressCountry: "US"
    },
    geo: {
      "@type": "GeoCoordinates",
      // Default to Denver, CO coordinates
      latitude: 40.5853,
      longitude: -104.9903
    },
    areaServed: {
      "@type": "Country",
      name: "United States"
    },
    serviceArea: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: 40.5853,
        longitude: -105.0844
      },
      geoRadius: {
        "@type": "Distance",
        value: "4000",
        unitCode: "MI"
      }
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Web and Software Development Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Web Development",
            description: "Custom web development services",
            provider: {
              "@type": "Organization",
              name: "BitWerks"
            }
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Software Development",
            description: "Custom software development services",
            provider: {
              "@type": "Organization",
              name: "BitWerks"
            }
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "White Label Partnerships",
            description: "White label development partnerships for agencies",
            provider: {
              "@type": "Organization",
              name: "BitWerks"
            }
          }
        }
      ]
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      reviewCount: "50+"
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
} 