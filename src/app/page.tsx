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
  keywords: ["web development", "software development", "technical consulting", "Fort Collins", "Colorado", "small business"],
  openGraph: {
    title: "BitWerks | Custom Web Development & Software Solutions",
    description: "Transform your business with professional web and software solutions. Based in Fort Collins, CO, serving businesses nationwide.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "BitWerks | Custom Web Development & Software Solutions",
    description: "Professional web and software development for small businesses.",
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

interface PageProps {
  searchParams?: { [key: string]: string | string[] | undefined }
}

export default async function Home({ searchParams = {} }: PageProps) {
  const location: LocationData = getLocationFromParams(searchParams)
  const locationString = location.isDefault ? "nationwide" : `${location.city}, ${location.state}`

  return (
    <>
      {/* Resource hints for critical assets */}
      <link rel="preload" href="/hero.jpg" as="image" type="image/jpeg" />
      <link rel="preload" href="/progressive-app.svg" as="image" type="image/svg+xml" />
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//fonts.gstatic.com" />
      
      <div className="flex flex-col overflow-hidden">
        <LocalBusinessSchema location={location} />
        <Hero locationString={locationString} />
        {/* Curved section divider */}
        <section className="clip-top-large-circle relative -left-[15%] h-72 w-[130%] bg-white dark:bg-primary -mt-20 md:-mt-52 z-20"></section>
        <Services locationString={locationString} isDefault={location.isDefault} />
        <section className="clip-bottom-large-circle relative -left-[15%] h-72 w-[130%] bg-white dark:bg-primary -mt-20 z-10"></section>
        <TechMarqueeSection />
        <Partners />
        <Process />
        <CTA />
      </div>
    </>
  )
}
