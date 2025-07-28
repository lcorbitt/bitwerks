import { Metadata } from "next"
import { LocalBusinessSchema } from "@/components/schema"
import { getLocationFromParams, type LocationData } from "@/lib/location"
import { Hero } from "@/components/sections/hero"
import { Services } from "@/components/sections/services"
import { TechMarqueeSection } from "@/components/sections/tech-marquee-section"
import { Partners } from "@/components/sections/partners"
import { Process } from "@/components/sections/process"
import { CTA } from "@/components/sections/cta"

export const metadata: Metadata = {
  title: "BitWerks | Custom Web Development & Software Solutions",
  description: "Professional web and software development based in Fort Collins, CO, serving businesses nationwide. Transform your digital presence with expert technical consulting.",
  openGraph: {
    title: "BitWerks | Custom Web Development & Software Solutions",
    description: "Transform your business with professional web and software solutions. Based in Fort Collins, CO, serving businesses nationwide.",
  },
}

interface PageProps {
  searchParams?: { [key: string]: string | string[] | undefined }
}

export default async function Home({ searchParams = {} }: PageProps) {
  const location: LocationData = getLocationFromParams(searchParams)
  const locationString = location.isDefault ? "nationwide" : `${location.city}, ${location.state}`

  return (
    <div className="flex flex-col overflow-hidden">
      <LocalBusinessSchema location={location} />
      <Hero locationString={locationString} />
      {/* Curved section divider */}
      <section className="clip-top-large-circle relative -left-[15%] h-72 w-[130%] bg-white dark:bg-primary -mt-20 md:-mt-52"></section>
      <Services locationString={locationString} isDefault={location.isDefault} />
      <section className="clip-bottom-large-circle relative -left-[15%] h-72 w-[130%] bg-white dark:bg-primary -mt-20"></section>
      <TechMarqueeSection />
      <Partners />
      <Process />
      <CTA />
    </div>
  )
}
