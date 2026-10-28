import type { Metadata } from "next"

import { OurWorkIndex } from "@/app/our-work/components/OurWorkIndex"
import { getSecondaryClients } from "@/app/our-work/components/OurWorkIndex/utils"
import { sampleClients } from "@/lib/clients-data"
import { listFeaturedCaseStudies } from "@/lib/case-studies/registry"
import { getSiteBaseUrl } from "@/lib/blog/site-base-url"

const title = "Our Work — Case Studies & Client Portfolio"
const description =
  "Explore how BitWerks partners with Hodinkee, the American Heart Association, Clickk, Containerly, and more on web and software delivery."

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: `${getSiteBaseUrl()}/our-work`,
  },
  openGraph: {
    title,
    description,
    url: `${getSiteBaseUrl()}/our-work`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
}

export default function OurWorkPage() {
  const featuredStudies = listFeaturedCaseStudies()
  const secondaryClients = getSecondaryClients(sampleClients, featuredStudies)

  return <OurWorkIndex featuredStudies={featuredStudies} secondaryClients={secondaryClients} />
}
