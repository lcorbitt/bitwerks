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
            Newsletter
          </p>
          <Heading2>Stay in the loop</Heading2>
          <p
            className="mx-auto mt-8 max-w-md text-lg text-primary dark:text-white"
            style={{ lineHeight: "1.5" }}
          >
            Get occasional updates on product launches, insights, and new work.
          </p>
          <div className="mx-auto mt-8 w-full max-w-md">
            <NewsletterSubscribe source="homepage-banner" className="w-full" />
          </div>
        </div>

        {/* Desktop — matches Partners header row */}
        <div className="mb-12 hidden flex-row items-stretch justify-between gap-8 md:flex">
          <div className="flex items-start">
            <div>
              <p className="mb-2 font-normal tracking-widest text-muted-light dark:text-muted-dark">NEWSLETTER</p>
              <Heading2>Stay in the loop</Heading2>
            </div>
            <div className="mx-4 self-stretch border-l border-black/10 dark:border-white/20" />
            <div className="flex flex-col items-stretch gap-6 md:ml-8 md:w-1/2">
              <p
                className="px-4 pt-4 text-base text-primary dark:text-white lg:text-lg"
                style={{ lineHeight: "1.5" }}
              >
                Occasional notes on web development, product work, and what we&apos;re building — no spam.
              </p>
              <div className="w-full px-4 pb-4">
                <NewsletterSubscribe source="homepage-banner" className="w-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
