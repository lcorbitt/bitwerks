import type { Metadata } from "next"
import type { ReactNode } from "react"
import Link from "next/link"

import { Heading1 } from "@/components/ui/heading"

const CONTACT_EMAIL = "bitwerksco@gmail.com"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How BitWerks collects, uses, and protects your information when you use our website, newsletter, and contact forms.",
  robots: { index: true, follow: true },
}

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col">
      <header className="border-b border-black/5 bg-light py-14 dark:border-white/10 dark:bg-tertiary md:py-20">
        <div className="container">
          <p className="mb-2 font-normal uppercase tracking-widest text-muted-light dark:text-muted-dark">Legal</p>
          <Heading1 className="mb-4 max-w-3xl">Privacy Policy</Heading1>
          <p className="text-sm text-muted-foreground dark:text-white/70">Last updated: April 2026</p>
        </div>
      </header>

      <section className="bg-white dark:bg-primary">
        <div className="container">
          <div className="mx-auto max-w-3xl text-base leading-relaxed space-y-12">
            <div aria-labelledby="privacy-intro">
              <p id="privacy-intro" className="text-muted-foreground dark:text-white/80">
                BitWerks (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) respects your privacy. This Privacy
                Policy explains how we collect, use, and protect your information when you use our website.
              </p>
            </div>

            <PolicySection id="collect" title="Information We Collect">
              <p className="text-muted-foreground dark:text-white/80">We may collect the following information:</p>
              <ul className="list-none space-y-3 border-l-2 border-brand/40 pl-6 text-muted-foreground dark:text-white/80">
                <li>
                  <span className="font-semibold text-foreground dark:text-white">Email address</span> — when you
                  subscribe to our newsletter or contact us
                </li>
                <li>
                  <span className="font-semibold text-foreground dark:text-white">Usage data</span> — such as pages
                  visited, browser type, and general interaction data
                </li>
                <li>
                  <span className="font-semibold text-foreground dark:text-white">Optional information</span> — any
                  details you provide through forms or inquiries
                </li>
              </ul>
              <p className="text-muted-foreground dark:text-white/80">We do not collect sensitive personal data.</p>
            </PolicySection>

            <PolicySection id="use" title="How We Use Your Information">
              <p className="text-muted-foreground dark:text-white/80">We use your information to:</p>
              <ul className="grid gap-2 sm:grid-cols-2">
                {[
                  "Send updates, newsletters, or relevant communications",
                  "Respond to inquiries or requests",
                  "Improve our website and services",
                  "Monitor and analyze usage trends",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex gap-2 text-sm text-muted-foreground dark:text-white/80 sm:text-base"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" aria-hidden />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </PolicySection>

            <PolicySection id="email" title="Email Communications">
              <p className="text-muted-foreground dark:text-white/80">If you subscribe to our newsletter:</p>
              <ul className="list-disc space-y-2 pl-5 text-muted-foreground dark:text-white/80">
                <li>You may receive occasional emails about updates, insights, or services</li>
                <li>You can unsubscribe at any time using the link in any email</li>
              </ul>
              <p className="font-medium text-foreground dark:text-white">We do not sell or rent your email address.</p>
            </PolicySection>

            <PolicySection id="sharing" title="Data Sharing">
              <p className="text-muted-foreground dark:text-white/80">We do not sell your personal information.</p>
              <p className="text-muted-foreground dark:text-white/80">
                We may use trusted third-party services (such as hosting providers or analytics tools) to help operate
                our website. These services only access data as needed to perform their functions.
              </p>
            </PolicySection>

            <PolicySection id="security" title="Data Security">
              <p className="text-muted-foreground dark:text-white/80">
                We take reasonable measures to protect your information. However, no system is completely secure, and we
                cannot guarantee absolute security.
              </p>
            </PolicySection>

            <PolicySection id="rights" title="Your Rights">
              <p className="text-muted-foreground dark:text-white/80">You may:</p>
              <ul className="list-disc space-y-2 pl-5 text-muted-foreground dark:text-white/80">
                <li>Request access to your data</li>
                <li>Request deletion of your data</li>
                <li>Unsubscribe from communications at any time</li>
              </ul>
              <p className="text-muted-foreground dark:text-white/80">
                To make a request, contact us at:{" "}
                <Link
                  href={`mailto:${CONTACT_EMAIL}?subject=Privacy%20request`}
                  className="font-medium text-brand underline-offset-4 hover:underline"
                >
                  {CONTACT_EMAIL}
                </Link>
              </p>
            </PolicySection>

            <PolicySection id="changes" title="Changes to This Policy">
              <p className="text-muted-foreground dark:text-white/80">
                We may update this Privacy Policy from time to time. Updates will be reflected on this page with a new
                &ldquo;Last updated&rdquo; date.
              </p>
            </PolicySection>

            <PolicySection id="contact" title="Contact">
              <p className="text-muted-foreground dark:text-white/80">
                If you have questions, contact us at:{" "}
                <Link href={`mailto:${CONTACT_EMAIL}`} className="font-medium text-brand underline-offset-4 hover:underline">
                  {CONTACT_EMAIL}
                </Link>
              </p>
            </PolicySection>
          </div>
        </div>
      </section>
    </div>
  )
}

interface PolicySectionProps {
  id: string
  title: string
  children: ReactNode
}

const PolicySection = ({ id, title, children }: PolicySectionProps) => (
  <div className="space-y-4" aria-labelledby={id}>
    <h2 id={id} className="text-xl font-extrabold tracking-tight text-foreground md:text-2xl dark:text-white">
      {title}
    </h2>
    <div className="space-y-4">{children}</div>
  </div>
)
