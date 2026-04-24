import type { Metadata } from "next"
import type { ReactNode } from "react"
import Link from "next/link"

import { Heading1 } from "@/components/ui/heading"
import { getSiteBaseUrl } from "@/lib/blog/site-base-url"

const CONTACT_EMAIL = "bitwerksco@gmail.com"
const LAST_UPDATED = "April 24, 2026"
const SITE_URL = getSiteBaseUrl()

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms governing your use of the BitWerks website and professional services, including fees, intellectual property, and dispute resolution.",
  robots: { index: true, follow: true },
}

export default function TermsOfServicePage() {
  return (
    <div className="flex flex-col">
      <header className="border-b border-black/5 bg-light py-14 dark:border-white/10 dark:bg-tertiary md:py-20">
        <div className="container">
          <p className="mb-2 font-normal uppercase tracking-widest text-muted-light dark:text-muted-dark">Legal</p>
          <Heading1 className="mb-4 max-w-3xl">Terms of Service</Heading1>
          <p className="text-sm text-muted-foreground dark:text-white/70">Last updated: {LAST_UPDATED}</p>
        </div>
      </header>

      <section className="bg-white dark:bg-primary">
        <div className="container">
          <div className="mx-auto max-w-3xl text-base leading-relaxed space-y-12 pb-16 pt-12">
            <div className="space-y-4" aria-labelledby="terms-welcome">
              <p id="terms-welcome" className="text-muted-foreground dark:text-white/80">
                Welcome to BitWerks. These Terms of Service (&ldquo;Terms&rdquo;) are a binding legal agreement between
                you (&ldquo;Client,&rdquo; &ldquo;you,&rdquo; or &ldquo;your&rdquo;) and BitWerks (&ldquo;BitWerks,&rdquo;
                &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;). They govern your access to and use of our
                website and related online properties at {SITE_URL} (the &ldquo;Site&rdquo;), and set baseline terms for
                professional services we may provide to you (&ldquo;Services&rdquo;). Specific projects may also be
                governed by a separate proposal, statement of work, or services agreement (&ldquo;Project
                Agreement&rdquo;).
              </p>
              <p className="text-muted-foreground dark:text-white/80">
                By accessing the Site, submitting a contact or inquiry form, subscribing to our newsletter, or engaging
                BitWerks for Services, you agree to these Terms. Your use of the Site is also subject to our{" "}
                <Link href="/privacy-policy" className="font-medium text-brand underline-offset-4 hover:underline">
                  Privacy Policy
                </Link>
                .
              </p>
              <p className="text-sm font-semibold uppercase tracking-wide text-foreground dark:text-white">
                Please read these Terms carefully. They contain an arbitration agreement and class action waiver that
                affect your legal rights.
              </p>
            </div>

            <TermsSection id="acceptance" title="1. Acceptance of Terms">
              <p className="text-muted-foreground dark:text-white/80">
                By using the Site or engaging us for Services, you represent that (1) you are at least 18 years of age,
                (2) if you are using the Site or purchasing Services on behalf of an organization, you have authority to
                bind that organization to these Terms, and (3) you will comply with all applicable laws and regulations.
                If you do not agree, you must not use the Site or engage our Services.
              </p>
            </TermsSection>

            <TermsSection id="description" title="2. Description of Services">
              <p className="text-muted-foreground dark:text-white/80">
                BitWerks provides custom professional services that may include, without limitation, web development,
                software development, strategy and consulting, and white-label or partnership-style engagements, as
                described on the Site and in Project Agreements. Unless a Project Agreement says otherwise, we are an
                independent provider of professional services—not your employee, agent, joint venturer, or
                telecommunications carrier. The Site is primarily informational; the scope, deliverables, schedule, and
                fees for any paid work are defined in your Project Agreement or written order.
              </p>
            </TermsSection>

            <TermsSection id="project-agreements" title="3. Project agreements and priority">
              <p className="text-muted-foreground dark:text-white/80">
                If there is a conflict between these Terms and a signed or mutually accepted Project Agreement, the
                Project Agreement controls for that engagement, except that Sections 9 (Disclaimers), 10 (Limitation of
                Liability), 11 (Indemnification), and 12 (Dispute Resolution) of these Terms will still apply unless
                the Project Agreement expressly and specifically states otherwise in writing.
              </p>
            </TermsSection>

            <TermsSection id="accounts" title="4. Access and security">
              <p className="text-muted-foreground dark:text-white/80">
                If we provide you with credentials or access to a project workspace, repository, staging environment, or
                similar system, you are responsible for safeguarding your login information and for all activity under
                your account. You agree to notify us promptly of any unauthorized access. BitWerks is not liable for loss
                or damage arising from your failure to protect your credentials, except where applicable law does not
                permit that limitation.
              </p>
            </TermsSection>

            <TermsSection id="fees" title="5. Fees and payment">
              <TermsSubheading>5.1. Fees</TermsSubheading>
              <p className="text-muted-foreground dark:text-white/80">
                You agree to pay the fees, deposits, and expenses set out in your Project Agreement, invoice, or other
                written pricing terms. Unless we agree otherwise in writing, invoices are due on the due date stated on
                the invoice. We may use third-party payment or invoicing platforms to collect fees; their terms and
                privacy practices also apply when you use them to pay us.
              </p>

              <TermsSubheading>5.2. Taxes</TermsSubheading>
              <p className="text-muted-foreground dark:text-white/80">
                Fees are exclusive of applicable taxes unless stated otherwise. You are responsible for any sales, use,
                VAT, GST, or similar taxes imposed on our Services, other than taxes based on our net income.
              </p>

              <TermsSubheading>5.3. Late payment and suspension</TermsSubheading>
              <p className="text-muted-foreground dark:text-white/80">
                If payment is late, we may suspend or pause Services, withhold deliverables, or charge late fees or
                interest where permitted by law and stated in your Project Agreement or invoice.
              </p>

              <TermsSubheading>5.4. Refunds</TermsSubheading>
              <p className="text-muted-foreground dark:text-white/80">
                Unless a Project Agreement or applicable law expressly provides otherwise, fees for work that has
                already been performed, deposits applied to commenced work, and amounts paid through third-party
                processors are generally non-refundable. If you believe a billing error occurred, contact us promptly at
                the email below so we can review in good faith.
              </p>

              <TermsSubheading>5.5. Chargebacks</TermsSubheading>
              <p className="text-muted-foreground dark:text-white/80">
                You agree not to initiate a chargeback or payment dispute with your financial institution for charges you
                authorized without first contacting us to attempt to resolve the issue. A chargeback or dispute
                initiated in bad faith or in violation of these Terms may be a material breach. We may dispute the
                chargeback, suspend Services, and pursue collection of amounts owed plus reasonable fees and costs where
                permitted by law.
              </p>
            </TermsSection>

            <TermsSection id="communications" title="6. Communications">
              <p className="text-muted-foreground dark:text-white/80">
                By providing your email address, phone number, or other contact details, you consent to us contacting you
                about your inquiries, projects, account or security notices, and (where you have opted in) marketing
                messages in accordance with our Privacy Policy and applicable law. You may opt out of marketing emails
                using the unsubscribe link in those emails where available.
              </p>
              <p className="text-muted-foreground dark:text-white/80">
                If you send commercial messages to your own customers using work product we helped create, you—not
                BitWerks—are responsible for obtaining legally required consents and for compliance with laws such as
                the TCPA, CAN-SPAM, and similar regulations.
              </p>
            </TermsSection>

            <TermsSection id="ip" title="7. Intellectual property">
              <TermsSubheading>7.1. BitWerks materials</TermsSubheading>
              <p className="text-muted-foreground dark:text-white/80">
                BitWerks retains all right, title, and interest in and to the Site, our templates, tools, libraries,
                processes, know-how, and pre-existing intellectual property (&ldquo;BitWerks IP&rdquo;). These Terms do
                not grant you any license to our trademarks or trade dress except the limited right to display our name
                or logo as reasonably necessary to identify us as the provider of Services you received.
              </p>

              <TermsSubheading>7.2. Deliverables and client content</TermsSubheading>
              <p className="text-muted-foreground dark:text-white/80">
                Ownership and license rights in custom deliverables created for your project are as stated in your
                Project Agreement. If no Project Agreement specifies ownership, upon full payment of applicable fees for
                a deliverable, BitWerks grants you a non-exclusive license to use that deliverable for your internal
                business purposes, excluding BitWerks IP incorporated therein (which remains subject to a limited
                license for use together with the deliverable).
              </p>
              <p className="text-muted-foreground dark:text-white/80">
                You retain ownership of materials you provide (&ldquo;Client Content&rdquo;). You grant BitWerks a
                worldwide, royalty-free license to host, copy, modify, and use Client Content solely as needed to
                perform the Services and as otherwise agreed in writing.
              </p>
            </TermsSection>

            <TermsSection id="acceptable-use" title="8. Acceptable use">
              <p className="text-muted-foreground dark:text-white/80">
                You agree not to misuse the Site or Services, including by attempting to gain unauthorized access to our
                or others&apos; systems, introducing malware, scraping the Site in violation of our robots rules or
                applicable law, or using the Site to transmit unlawful, harassing, or deceptive content. We may suspend
                or terminate access for violations.
              </p>
            </TermsSection>

            <TermsSection id="disclaimers" title="9. Disclaimers">
              <p className="text-xs font-semibold uppercase leading-relaxed text-foreground dark:text-white">
                The site and any pre-contractual information are provided &ldquo;as is&rdquo; and &ldquo;as
                available.&rdquo; To the fullest extent permitted by law, BitWerks disclaims all warranties, whether
                express, implied, or statutory, including implied warranties of merchantability, fitness for a particular
                purpose, title, and non-infringement. We do not warrant that the site will be uninterrupted or
                error-free.
              </p>
              <p className="text-muted-foreground dark:text-white/80">
                Professional services are provided with commercially reasonable skill and care. Third-party platforms,
                hosting providers, APIs, and open-source components may be used in deliverables; we do not control those
                third parties and are not responsible for their availability, security, or policies.
              </p>
            </TermsSection>

            <TermsSection id="liability" title="10. Limitation of liability">
              <p className="text-xs font-semibold uppercase leading-relaxed text-foreground dark:text-white">
                To the maximum extent permitted by law, BitWerks&apos; total aggregate liability arising out of or
                relating to these terms, the site, or the services (whether in contract, tort, negligence, strict
                liability, or otherwise) shall not exceed the greater of (a) the fees you paid to BitWerks for the
                specific services giving rise to the claim during the three (3) months before the event giving rise
                to the claim, or (b) one hundred U.S. dollars (US $100) if no such fees were paid during that period.
              </p>
              <p className="text-xs font-semibold uppercase leading-relaxed text-foreground dark:text-white">
                BitWerks will not be liable for any indirect, incidental, special, consequential, exemplary, or punitive
                damages, or for lost profits, revenues, goodwill, or data, even if advised of the possibility of such
                damages. Some jurisdictions do not allow certain limitations; in those jurisdictions, our liability is
                limited to the fullest extent permitted by law.
              </p>
            </TermsSection>

            <TermsSection id="indemnity" title="11. Indemnification">
              <p className="text-muted-foreground dark:text-white/80">
                To the fullest extent permitted by law, you will indemnify, defend, and hold harmless BitWerks and our
                owners, contractors, and personnel from and against any claims, damages, losses, liabilities, costs, and
                expenses (including reasonable attorneys&apos; fees) arising out of or related to: (a) your Client
                Content or instructions; (b) your violation of these Terms or applicable law; (c) your use of
                deliverables in combination with unauthorized or unlawful materials; or (d) disputes between you and
                your customers, users, or vendors.
              </p>
            </TermsSection>

            <TermsSection id="disputes" title="12. Dispute resolution">
              <TermsSubheading>12.1. Informal resolution</TermsSubheading>
              <p className="text-muted-foreground dark:text-white/80">
                Before initiating arbitration, you agree to contact us at {CONTACT_EMAIL} and attempt to resolve the
                dispute informally for at least thirty (30) days.
              </p>

              <TermsSubheading>12.2. Binding arbitration</TermsSubheading>
              <p className="text-xs font-semibold uppercase leading-relaxed text-foreground dark:text-white">
                Except for claims that qualify for small-claims court in the state or county of BitWerks&apos; principal
                place of business in Colorado (or another mutually agreed venue for small claims), any dispute arising
                out of or relating to these Terms, the Site, or the Services shall be resolved by binding arbitration
                administered by the American Arbitration Association (&ldquo;AAA&rdquo;) under its Commercial
                Arbitration Rules. Judgment on the award may be entered in any court of competent jurisdiction. The
                Federal Arbitration Act governs the interpretation and enforcement of this Section.
              </p>

              <TermsSubheading>12.3. Class action waiver</TermsSubheading>
              <p className="text-xs font-semibold uppercase leading-relaxed text-foreground dark:text-white">
                You and BitWerks agree that each may bring claims against the other only in an individual capacity, and
                not as a plaintiff or class member in any purported class, collective, or representative proceeding.
                Unless both you and BitWerks agree otherwise, the arbitrator may not consolidate more than one
                person&apos;s claims and may not preside over any form of class or representative proceeding.
              </p>

              <TermsSubheading>12.4. Opt-out</TermsSubheading>
              <p className="text-muted-foreground dark:text-white/80">
                You may opt out of this arbitration agreement by sending written notice to {CONTACT_EMAIL} within thirty
                (30) days of first accepting these Terms, including your name and a clear statement that you opt out of
                arbitration. If you opt out, or if this arbitration agreement is held unenforceable, the exclusive
                jurisdiction and venue for disputes will be the state and federal courts located in Colorado, and you
                consent to personal jurisdiction there.
              </p>
            </TermsSection>

            <TermsSection id="termination" title="13. Termination">
              <p className="text-muted-foreground dark:text-white/80">
                We may suspend or terminate your access to the Site or pause Services if you materially breach these
                Terms, fail to pay amounts due, or create legal or security risk. You may stop using the Site at any
                time. Provisions that by their nature should survive (including intellectual property, disclaimers,
                limitation of liability, indemnity, and dispute resolution) will survive termination.
              </p>
            </TermsSection>

            <TermsSection id="general" title="14. General">
              <ul className="list-disc space-y-2 pl-5 text-muted-foreground dark:text-white/80">
                <li>
                  <span className="font-medium text-foreground dark:text-white">Governing law:</span> These Terms are
                  governed by the laws of the State of Colorado, without regard to conflict-of-law principles.
                </li>
                <li>
                  <span className="font-medium text-foreground dark:text-white">Changes:</span> We may update these Terms
                  by posting a revised version on this page and updating the &ldquo;Last updated&rdquo; date. Material
                  changes may include additional notice where appropriate. Continued use of the Site after changes take
                  effect constitutes acceptance of the updated Terms.
                </li>
                <li>
                  <span className="font-medium text-foreground dark:text-white">Assignment:</span> You may not assign
                  these Terms without our prior written consent. We may assign these Terms in connection with a merger,
                  acquisition, or sale of assets.
                </li>
                <li>
                  <span className="font-medium text-foreground dark:text-white">Severability:</span> If any provision is
                  held invalid or unenforceable, the remaining provisions remain in effect.
                </li>
                <li>
                  <span className="font-medium text-foreground dark:text-white">Entire agreement:</span> These Terms,
                  together with the Privacy Policy and any Project Agreement, constitute the entire agreement between you
                  and BitWerks regarding the Site and baseline Services terms, and supersede prior oral or written
                  understandings on that subject.
                </li>
              </ul>
            </TermsSection>

            <TermsSection id="contact" title="15. Contact us">
              <p className="text-muted-foreground dark:text-white/80">
                Questions about these Terms? Contact BitWerks at{" "}
                <Link href={`mailto:${CONTACT_EMAIL}`} className="font-medium text-brand underline-offset-4 hover:underline">
                  {CONTACT_EMAIL}
                </Link>
                .
              </p>
            </TermsSection>
          </div>
        </div>
      </section>
    </div>
  )
}

interface TermsSectionProps {
  id: string
  title: string
  children: ReactNode
}

const TermsSection = ({ id, title, children }: TermsSectionProps) => (
  <div className="space-y-4" aria-labelledby={id}>
    <h2 id={id} className="text-xl font-extrabold tracking-tight text-foreground md:text-2xl dark:text-white">
      {title}
    </h2>
    <div className="space-y-4">{children}</div>
  </div>
)

const TermsSubheading = ({ children }: { children: ReactNode }) => (
  <h3 className="pt-2 text-base font-bold text-foreground dark:text-white">{children}</h3>
)
