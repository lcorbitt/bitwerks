import { Metadata } from "next"
import { LocalBusinessSchema, SiteOrganizationSchema } from "@/components/schema"
import { getLocationFromParams, type LocationData } from "@/lib/location"
import { Hero } from "@/app/page/components/Hero"
import { Services } from "@/app/page/components/Services"
import { TechMarqueeSection } from "@/components/sections/tech-marquee-section"
import { Partners } from "@/components/sections/partners"
import { Process } from "@/components/sections/process"
import { NewsletterBanner } from "@/components/sections/newsletter-banner"
import { Testimonials } from "@/components/ui/testimonials"
import { CTA } from "@/components/sections/cta"
import { sampleTestimonials } from "@/lib/testimonials-data"
import { DecorativeCircles } from "@/components/ui/decorative-circles"
import { ScrollFadeIn } from "@/components/ui/scroll-fade-in"

export const metadata: Metadata = {
  title: "BitWerks | Custom Web Development & Software Solutions",
  description:
    "Professional web and software development rooted in Denver and Northern Colorado, serving businesses nationwide.",
  keywords: [
    "web development",
    "software development",
    "white label partnerships",
    "Denver",
    "Northern Colorado",
    "Fort Collins",
    "Boulder",
    "Greeley",
    "Loveland",
    "Longmont",
    "Windsor",
    "Colorado",
    "Colorado Springs",
    "small business",
  ],
  openGraph: {
    title: "BitWerks | Custom Web Development & Software Solutions",
    description:
      "Transform your business with professional web and software solutions. Rooted in Denver and Northern Colorado, serving teams nationwide.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "BitWerks | Custom Web Development & Software Solutions",
    description:
      "Professional web and software development rooted in Denver and Northern Colorado, serving businesses nationwide.",
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
      <link rel="preload" href="/hero-background.png" as="image" type="image/png" />
      
      <div className="flex flex-col overflow-hidden">
      <SiteOrganizationSchema />
      <LocalBusinessSchema location={location} />
      <ScrollFadeIn>
        <Hero />
      </ScrollFadeIn>

      {/* Curved section divider */}
      <section className="clip-top-large-circle relative -left-[15%] h-72 w-[130%] bg-white dark:bg-primary -mt-20 md:-mt-52 z-20"></section>

      <DecorativeCircles className="top-[90rem] lg:top-[40rem]" />

      <ScrollFadeIn>
        <Services />
      </ScrollFadeIn>

      {/* Curved section divider */}
      <section className="clip-bottom-large-circle relative -left-[15%] h-72 w-[130%] bg-white dark:bg-primary -mt-20 z-10"></section>

      <ScrollFadeIn>
        <TechMarqueeSection />
      </ScrollFadeIn>

      <ScrollFadeIn>
        <Partners />
      </ScrollFadeIn>
      <ScrollFadeIn>
        <Process />
      </ScrollFadeIn>
      <ScrollFadeIn>
        <NewsletterBanner />
      </ScrollFadeIn>
      <DecorativeCircles inverted className="bottom-48" />
      <ScrollFadeIn>
        <Testimonials testimonials={sampleTestimonials} />
      </ScrollFadeIn>
      <ScrollFadeIn>
        <CTA />
      </ScrollFadeIn>
    </div>
    </>
  )
}
