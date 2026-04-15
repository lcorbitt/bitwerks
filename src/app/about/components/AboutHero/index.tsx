import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Heading1 } from "@/components/ui/heading"

import { ABOUT_HERO } from "./constants"

export const AboutHero = () => {
  return (
    <section className="relative overflow-hidden bg-light pb-16 pt-12 md:pb-24 md:pt-16 dark:bg-tertiary">
      <div className="container relative z-20">
        <div className="mx-auto max-w-3xl text-center lg:text-left">
          <p className="mb-2 font-normal uppercase tracking-widest text-muted-light dark:text-muted-dark">{ABOUT_HERO.eyebrow}</p>
          <Heading1 className="relative z-10 mb-6">
            {ABOUT_HERO.title} — <span className="text-brand">{ABOUT_HERO.highlight}</span>
          </Heading1>
          <p className="relative z-10 mx-auto max-w-2xl text-lg text-muted-foreground lg:mx-0">{ABOUT_HERO.body}</p>
          <div className="relative z-10 mt-8 flex justify-center lg:justify-start">
            <Button asChild variant="brand" size="lg">
              <Link href={ABOUT_HERO.cta.href}>{ABOUT_HERO.cta.label}</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
