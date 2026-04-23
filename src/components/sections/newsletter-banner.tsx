import { NewsletterSubscribe } from "@/components/newsletter/newsletter-subscribe"
import { Heading2 } from "@/components/ui/heading"

export function NewsletterBanner() {
  return (
    <section className="w-full bg-white dark:bg-primary" aria-labelledby="homepage-newsletter-heading">
      <div className="container mx-auto">
        <h2 id="homepage-newsletter-heading" className="sr-only">
          Subscribe to BitWerks email updates
        </h2>

        {/* Mobile — same rhythm as Partners (no logo grid) */}
        <div className="mb-12 text-center md:hidden">
          <p className="mb-2 font-normal uppercase tracking-widest text-muted-light dark:text-muted-dark">
            Insights
          </p>
          <Heading2>Stay in the loop</Heading2>
          <p
            className="mx-auto mt-8 max-w-md text-lg text-primary dark:text-white"
            style={{ lineHeight: "1.5" }}
          >
            Updates on product launches, insights, and new work.
          </p>
          <div className="mx-auto mt-8 w-full max-w-md">
            <NewsletterSubscribe source="homepage-banner" className="w-full" />
          </div>
        </div>

        {/* Desktop — headline + rule grouped left; copy + form fill remaining width */}
        <div className="hidden w-full md:block">
          <div className="flex w-full items-start gap-8 lg:gap-10">
            <div className="flex shrink-0 items-stretch gap-4 lg:gap-6">
              <div>
                <p className="mb-2 font-normal tracking-widest text-muted-light dark:text-muted-dark">INSIGHTS</p>
                <Heading2>Stay in the loop</Heading2>
              </div>
              <div
                className="w-px shrink-0 self-stretch bg-black/10 dark:bg-white/20"
                aria-hidden
              />
            </div>
            <div className="flex min-w-0 flex-1 flex-col gap-6">
              <p
                className="text-base text-primary dark:text-white lg:text-lg lg:pr-4"
                style={{ lineHeight: "1.5" }}
              >
                Updates on what we are building, shipping, and learning.
              </p>
              <div className="w-full max-w-xl lg:max-w-2xl">
                <NewsletterSubscribe source="homepage-banner" className="w-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
