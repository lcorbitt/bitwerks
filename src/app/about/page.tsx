import type { Metadata } from "next"

import { AboutHero } from "@/app/about/components/AboutHero"
import { AboutLead } from "@/app/about/components/AboutLead"
import { AboutPageShell } from "@/app/about/components/AboutPageShell"
import { CTA } from "@/components/sections/cta"

export const metadata: Metadata = {
  title: "About",
  description: "Learn more about Your Company.",
}

export default function AboutPage() {
  return (
    <AboutPageShell>
      <AboutHero />
      <AboutLead />
      <CTA />
    </AboutPageShell>
  )
}
