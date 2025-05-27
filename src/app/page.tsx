import { Metadata } from "next"
import { LocalBusinessSchema } from "@/components/schema"
import { getLocationFromParams, type LocationData } from "@/lib/location"
import { Hero } from "@/components/sections/hero"
import { Services } from "@/components/sections/services"
import { CTA } from "@/components/sections/cta"

export const metadata: Metadata = {
  title: "BitWerks | Custom Web Development & Software Solutions",
  description: "Professional web development and custom software solutions based in Fort Collins, CO, serving businesses nationwide. Transform your digital presence with expert technical consulting.",
  openGraph: {
    title: "BitWerks | Custom Web Development & Software Solutions",
    description: "Transform your business with professional web development and custom software solutions. Based in Fort Collins, CO, serving businesses nationwide.",
  },
}

interface PageProps {
  searchParams?: { [key: string]: string | string[] | undefined }
}

export default async function Home({ searchParams = {} }: PageProps) {
  const location: LocationData = getLocationFromParams(searchParams)
  const locationString = location.isDefault ? "nationwide" : `${location.city}, ${location.state}`

  return (
    <div className="flex flex-col">
      <LocalBusinessSchema location={location} />
      <Hero locationString={locationString} />
      <Services locationString={locationString} isDefault={location.isDefault} />
      <CTA locationString={locationString} isDefault={location.isDefault} />
    </div>
  )
}
