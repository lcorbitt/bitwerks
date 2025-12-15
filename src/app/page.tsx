import { Metadata } from "next"
import { LocalBusinessSchema } from "@/components/schema"
import { getLocationFromParams, type LocationData } from "@/lib/location"
import { Hero } from "@/components/sections/hero"
import { Services } from "@/components/sections/services"
import { TechMarqueeSection } from "@/components/sections/tech-marquee-section"
import { Partners } from "@/components/sections/partners"
import { Process } from "@/components/sections/process"
import { Testimonials } from "@/components/ui/testimonials"
import { CTA } from "@/components/sections/cta"
import { sampleTestimonials } from "@/lib/testimonials-data"
import { DecorativeCircles } from "@/components/ui/decorative-circles"
import { ScrollFadeIn } from "@/components/ui/scroll-fade-in"

export const metadata: Metadata = {
  title: "BitWerks | Custom Web Development & Software Solutions",
  description: "Professional web and software development based in northern Colorado, serving businesses nationwide.",
  keywords: ["web development", "software development", "white label partnerships", "Denver", "Boulder", "Colorado Springs", "Colorado", "small business"],
  openGraph: {
    title: "BitWerks | Custom Web Development & Software Solutions",
    description: "Transform your business with professional web and software solutions. Based in Denver, CO, serving businesses nationwide.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "BitWerks | Custom Web Development & Software Solutions",
    description: "Professional web and software development serving businesses nationwide.",
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

  return (
    <>
      {/* Resource hints for critical assets */}
      <link rel="preload" href="/mockup-background.png" as="image" type="image/png" />
      
      <div className="flex flex-col overflow-hidden">
      <LocalBusinessSchema location={location} />
      <ScrollFadeIn>
        <Hero />
      

        {/* Curved section divider */}
        <section className="clip-top-large-circle relative -left-[15%] h-72 w-[130%] bg-white dark:bg-primary -mt-20 md:-mt-52 z-20"></section>

        <DecorativeCircles className="top-[90rem] lg:top-[40rem]" />

        <Services />
      </ScrollFadeIn>
      {/* Curved section divider */}
      <section className="clip-bottom-large-circle relative -left-[15%] h-72 w-[130%] bg-white dark:bg-primary -mt-20 z-10"></section>
      
      {/* <ScrollFadeIn> */}
        <TechMarqueeSection />
      {/* </ScrollFadeIn> */}

      <ScrollFadeIn>
        <Partners />
      </ScrollFadeIn>
      <ScrollFadeIn>
        <Process />
      </ScrollFadeIn>
      <DecorativeCircles inverted className="bottom-48" />
      <ScrollFadeIn>
        <Testimonials testimonials={sampleTestimonials} />
      </ScrollFadeIn>
      <CTA />
    </div>
    </>
  )
}
