import { LocationData } from "@/lib/location"

interface SchemaProps {
  location: LocationData
}

export function LocalBusinessSchema({ location }: SchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://bitwerks.dev",
    name: "BitWerks",
    description: `Professional web development and custom software solutions serving ${location.city}, ${location.state} and businesses nationwide.`,
    url: `https://bitwerks.dev/web-development/${location.city.toLowerCase()}/${location.state.toLowerCase()}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: location.city,
      addressRegion: location.state,
      postalCode: "80524", // Default Fort Collins zip
      addressCountry: "US"
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 40.5853, // Default Fort Collins coordinates
      longitude: -105.0844
    },
    areaServed: {
      "@type": "Country",
      name: "United States"
    },
    serviceArea: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: 40.5853, // Default Fort Collins coordinates
        longitude: -105.0844
      },
      geoRadius: "4000" 
    },
    // sameAs: [
    //   "https://github.com/yourusername", // Replace with your social links
    //   "https://linkedin.com/in/yourusername"
    // ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
} 