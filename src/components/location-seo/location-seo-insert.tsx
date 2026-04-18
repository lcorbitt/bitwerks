import dynamic from "next/dynamic"
import Link from "next/link"

import { Heading2 } from "@/components/ui/heading"
import { Testimonials } from "@/components/ui/testimonials"
import { sampleTestimonials } from "@/lib/testimonials-data"
import type { USCity } from "@/lib/us-cities"
import { formatLocationDisplay, formatLocationString } from "@/lib/us-cities"

import type { LocationLeadServicePreset } from "./contact-lead-condensed"
import type { LocationSeoService } from "./location-seo-types"

export type { LocationSeoService } from "./location-seo-types"

const ContactLeadCondensed = dynamic(
  () => import("./contact-lead-condensed").then((m) => ({ default: m.ContactLeadCondensed })),
  { loading: () => <div className="mx-auto h-40 max-w-xl animate-pulse rounded-lg bg-muted/40" aria-hidden /> },
)

const projectPreset = (service: LocationSeoService): LocationLeadServicePreset =>
  service === "software-development" ? "software" : service === "white-label-partnerships" ? "white-label" : "website"

const LocationIntroCopy = ({ service, loc }: { service: LocationSeoService; loc: string }) => {
  if (service === "web-development") {
    return (
      <div className="mx-auto max-w-3xl space-y-5 text-pretty text-center text-lg leading-relaxed text-muted-foreground md:text-xl">
        <p>
          BitWerks partners with teams in {loc} on web design and development: clear structure, fast interfaces, and
          maintainable code. We ship the same way we do everywhere else: direct access to senior builders, practical
          tradeoffs, and delivery you can plan around.
        </p>
        <p>
          When you need the full menu beside this page, use the{" "}
          <Link
            href="/services"
            className="font-medium text-foreground underline-offset-4 hover:text-brand hover:underline"
          >
            services overview
          </Link>{" "}
          to see how web work sits next to software and partnerships at BitWerks.
        </p>
      </div>
    )
  }
  if (service === "software-development") {
    return (
      <div className="mx-auto max-w-3xl space-y-5 text-pretty text-center text-lg leading-relaxed text-muted-foreground md:text-xl">
        <p>
          BitWerks helps organizations in {loc} ship dependable custom software, from architecture and APIs through
          release and iteration. You get engineering that stays accountable to product goals, not buzzwords.
        </p>
        <p>
          Longer form thinking on delivery, tradeoffs, and tooling lives on{" "}
          <Link
            href="/insights"
            className="font-medium text-foreground underline-offset-4 hover:text-brand hover:underline"
          >
            Insights
          </Link>
          , while the{" "}
          <Link
            href="/services"
            className="font-medium text-foreground underline-offset-4 hover:text-brand hover:underline"
          >
            services overview
          </Link>{" "}
          anchors how software fits next to web work at BitWerks.
        </p>
      </div>
    )
  }
  return (
    <div className="mx-auto max-w-3xl space-y-5 text-pretty text-center text-lg leading-relaxed text-muted-foreground md:text-xl">
      <p>
        BitWerks backs agencies and consultancies serving {loc} with white label web and software delivery under your
        brand. You own the client; we own the build quality, timeline communication, and handoff ready code.
      </p>
      <p>
        When partners evaluate us, they often review{" "}
        <Link href="/our-work" className="font-medium text-foreground underline-offset-4 hover:text-brand hover:underline">
          client work and outcomes
        </Link>{" "}
        first, then come back to this regional page for logistics.
      </p>
    </div>
  )
}

const LeadBlurb = ({ service }: { service: LocationSeoService }) => {
  const base = "Short form, same team."
  if (service === "web-development") {
    return (
      <p className="mx-auto mt-3 max-w-xl text-center text-sm leading-relaxed text-muted-foreground">
        {base} Keep{" "}
        <Link
          href="/insights"
          className="font-medium text-foreground underline-offset-4 hover:text-brand hover:underline"
        >
          Insights
        </Link>{" "}
        open if you want technical context beside this note while you write.
      </p>
    )
  }
  if (service === "software-development") {
    return (
      <p className="mx-auto mt-3 max-w-xl text-center text-sm leading-relaxed text-muted-foreground">
        {base} If scope is still fuzzy, cross check the{" "}
        <Link
          href="/services"
          className="font-medium text-foreground underline-offset-4 hover:text-brand hover:underline"
        >
          services directory
        </Link>{" "}
        and the{" "}
        <Link href="/" className="font-medium text-foreground underline-offset-4 hover:text-brand hover:underline">
          home page
        </Link>{" "}
        before you submit.
      </p>
    )
  }
  return (
    <p className="mx-auto mt-3 max-w-xl text-center text-sm leading-relaxed text-muted-foreground">
      {base} The{" "}
      <Link
        href="/services"
        className="font-medium text-foreground underline-offset-4 hover:text-brand hover:underline"
      >
        services overview
      </Link>{" "}
      and{" "}
      <Link
        href="/insights"
        className="font-medium text-foreground underline-offset-4 hover:text-brand hover:underline"
      >
        Insights
      </Link>{" "}
      help your team brief stakeholders before we talk.
    </p>
  )
}

const testimonialsDescription = (service: LocationSeoService) => {
  if (service === "web-development") {
    return (
      <>
        Teams hire BitWerks when they want web and software built with care, speed, and clear ownership. Concrete
        examples sit on{" "}
        <Link href="/our-work" className="font-medium text-foreground underline-offset-4 hover:text-brand hover:underline">
          Our Work
        </Link>
        ; below is candid feedback from recent collaborations.
      </>
    )
  }
  if (service === "software-development") {
    return (
      <>
        These engagements usually follow a careful read of our{" "}
        <Link href="/services" className="font-medium text-foreground underline-offset-4 hover:text-brand hover:underline">
          services overview
        </Link>{" "}
        and field notes on{" "}
        <Link
          href="/insights"
          className="font-medium text-foreground underline-offset-4 hover:text-brand hover:underline"
        >
          Insights
        </Link>
        . Here is what partners say once we are underway.
      </>
    )
  }
  return (
    <>
      White label relationships are trust heavy. We point prospects at{" "}
      <Link href="/our-work" className="font-medium text-foreground underline-offset-4 hover:text-brand hover:underline">
        Our Work
      </Link>{" "}
      and the{" "}
      <Link href="/insights" className="font-medium text-foreground underline-offset-4 hover:text-brand hover:underline">
        Insights
      </Link>{" "}
      journal so expectations stay aligned before kickoff.
    </>
  )
}

interface LocationSeoInsertProps {
  city: USCity
  service: LocationSeoService
}

export const LocationSeoInsert = ({ city, service }: LocationSeoInsertProps) => {
  const loc = formatLocationDisplay(city)
  const locLine = formatLocationString(city)
  const source = `Location lead: ${service} / ${locLine}`
  const preset = projectPreset(service)

  return (
    <>
      <section className="bg-white py-14 dark:bg-black md:py-20" aria-labelledby="location-intro-heading">
        <div className="container">
          <h2 id="location-intro-heading" className="sr-only">
            {`BitWerks in ${loc}`}
          </h2>
          <LocationIntroCopy service={service} loc={loc} />
        </div>
      </section>

      <Testimonials
        subtitle="OUR PROOF"
        title={`Trusted in ${loc}`}
        description={testimonialsDescription(service)}
        testimonials={sampleTestimonials}
      />

      <section className="bg-white py-14 dark:bg-black md:py-20" aria-labelledby="location-lead-heading">
        <div className="container">
          <Heading2 id="location-lead-heading" className="text-center text-balance">
            Start a project in {loc}
          </Heading2>
          <LeadBlurb service={service} />
          <div className="mt-8">
            <ContactLeadCondensed sourceLine={source} projectTypePreset={preset} />
          </div>
        </div>
      </section>
    </>
  )
}
