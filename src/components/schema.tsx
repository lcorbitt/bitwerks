import { LocationData } from "@/lib/location"

interface SchemaProps {
  location: LocationData
}

export function LocalBusinessSchema({ location }: SchemaProps) {
  const baseUrl = "https://bitwerks.dev"
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": baseUrl,
    name: "BitWerks",
    description: `Professional web and software development serving ${location.city}, ${location.state} and businesses nationwide.`,
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