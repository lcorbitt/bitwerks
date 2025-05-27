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
    description: "Professional web development and custom software solutions serving businesses nationwide.",
    url: "https://bitwerks.dev",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Fort Collins",
      addressRegion: "CO",
      postalCode: "80524",
      addressCountry: "US"
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 40.5853,
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
        latitude: 40.5853,
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