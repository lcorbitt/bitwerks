import type { Metadata } from "next"
import type { ReactNode } from "react"
import Link from "next/link"

import { Heading1 } from "@/components/ui/heading"
import { getSiteBaseUrl } from "@/lib/blog/site-base-url"

const CONTACT_EMAIL = "bitwerksco@gmail.com"
const LAST_UPDATED = "April 24, 2026"
const SITE_URL = getSiteBaseUrl()

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How BitWerks collects, uses, stores, and protects personal information when you use our website, newsletter, and contact forms.",
  robots: { index: true, follow: true },
}

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col">
      <header className="border-b border-black/5 bg-light py-14 dark:border-white/10 dark:bg-tertiary md:py-20">
        <div className="container">
          <p className="mb-2 font-normal uppercase tracking-widest text-muted-light dark:text-muted-dark">Legal</p>
          <Heading1 className="mb-4 max-w-3xl">Privacy Policy</Heading1>
          <p className="text-sm text-muted-foreground dark:text-white/70">Last updated: {LAST_UPDATED}</p>
        </div>
      </header>

      <section className="bg-white dark:bg-primary">
        <div className="container">
          <div className="mx-auto max-w-3xl text-base leading-relaxed space-y-12 pb-16 pt-12">
            <PolicySection id="intro" title="1. Introduction">
              <p className="text-muted-foreground dark:text-white/80">
                BitWerks (&ldquo;BitWerks,&rdquo; &ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) values the
                privacy of individuals who visit our website ({SITE_URL}) and use the features we offer that link to
                this Privacy Policy (collectively, our &ldquo;Services&rdquo;).
              </p>
              <p className="text-muted-foreground dark:text-white/80">
                This Privacy Policy explains how we collect, use, store, and disclose personal information in connection
                with the Services. By using the Services, you acknowledge this Privacy Policy and our{" "}
                <Link href="/terms" className="font-medium text-brand underline-offset-4 hover:underline">
                  Terms of Service
                </Link>
                . If you do not agree, please do not use the Services.
              </p>
            </PolicySection>

            <PolicySection id="collect" title="2. Information We Collect">
              <p className="text-muted-foreground dark:text-white/80">
                We collect personal information that is reasonably necessary to operate our website, work with clients
                who hire us for professional services, respond to inquiries, run our newsletter, and keep the Services
                secure.
              </p>

              <PolicySubheading>A. Information you provide</PolicySubheading>
              <ul className="list-none space-y-3 border-l-2 border-brand/40 pl-6 text-muted-foreground dark:text-white/80">
                <li>
                  <span className="font-semibold text-foreground dark:text-white">Newsletter</span> — If you
                  subscribe, we collect your email address and may record how you signed up (for example, which page
                  or &ldquo;source&rdquo; field was used).
                </li>
                <li>
                  <span className="font-semibold text-foreground dark:text-white">Contact form</span> — If you contact
                  us, we collect your name, email address, optional company name, project type and scope selections,
                  timeline preference, and the contents of your message.
                </li>
                <li>
                  <span className="font-semibold text-foreground dark:text-white">Direct communications</span> — If you
                  email us, we receive your address and the content of your message.
                </li>
                <li>
                  <span className="font-semibold text-foreground dark:text-white">Careers</span> — If you apply for a
                  role with BitWerks (including through a careers section on this site when we offer one), we collect your
                  contact information and any personal information you include in your resume, cover letter, or other
                  application materials.
                </li>
              </ul>

              <PolicySubheading>B. Information collected automatically</PolicySubheading>
              <p className="text-muted-foreground dark:text-white/80">
                Like most websites, we and our infrastructure providers may receive technical data when you use the
                Services, such as your IP address, browser type, operating system, general geographic region derived
                from IP, referring URLs, and dates and times of access. Server and application logs may be used for
                security, debugging, and reliability.
              </p>

              <PolicySubheading>C. Cookies and similar technologies</PolicySubheading>
              <p className="text-muted-foreground dark:text-white/80">
                We use cookies and similar technologies where needed to run the site (for example, session or security
                cookies used by our hosting stack or authentication features). Our newsletter signup may load{" "}
                <span className="font-medium text-foreground dark:text-white">Google reCAPTCHA v3</span> when
                configured, which uses cookies or similar mechanisms as described in{" "}
                <Link
                  href="https://policies.google.com/privacy"
                  className="font-medium text-brand underline-offset-4 hover:underline"
                  rel="noopener noreferrer"
                >
                  Google&apos;s Privacy Policy
                </Link>
                . Your theme preference may be stored in your browser (for example, local storage) so the site can
                remember light or dark mode.
              </p>
              <p className="text-muted-foreground dark:text-white/80">
                You can control cookies through your browser settings. Blocking certain cookies may limit parts of the
                Services (for example, newsletter signup when reCAPTCHA is required).
              </p>

              <PolicySubheading>D. Information from third parties</PolicySubheading>
              <p className="text-muted-foreground dark:text-white/80">
                We do not buy marketing lists. We may receive limited technical or abuse-prevention signals from
                providers we use to deliver the Services (such as verification services when you submit a form).
              </p>

              <PolicySubheading>E. Sensitive information</PolicySubheading>
              <p className="text-muted-foreground dark:text-white/80">
                We do not ask you to provide sensitive categories of data (such as government ID numbers, health
                information, or biometric data) through our standard website forms. Please do not send such information
                unless we explicitly request it for a defined purpose.
              </p>

              <PolicySubheading>F. Payments for services</PolicySubheading>
              <p className="text-muted-foreground dark:text-white/80">
                When you pay BitWerks for professional services, we collect fees through third-party payment or invoicing
                tools we use (for example, a hosted checkout, payment link, or invoicing platform). Those providers
                typically collect billing details and payment information needed to complete the transaction. Their use
                of your data is governed by their own privacy policies. BitWerks does not operate payment card processing
                on this marketing website and does not store your full payment card number here.
              </p>
            </PolicySection>

            <PolicySection id="legal-basis" title="3. Legal bases for processing (EEA, UK, and Switzerland)">
              <p className="text-muted-foreground dark:text-white/80">
                If you are in the European Economic Area, the United Kingdom, or Switzerland, we process personal data
                on these bases, as applicable:
              </p>
              <ul className="list-disc space-y-2 pl-5 text-muted-foreground dark:text-white/80">
                <li>
                  <span className="font-medium text-foreground dark:text-white">Performance of a contract</span> or
                  steps at your request — for example, handling your contact or newsletter request.
                </li>
                <li>
                  <span className="font-medium text-foreground dark:text-white">Legitimate interests</span> — for
                  example, securing the Services, understanding aggregate usage, improving the site, and preventing
                  abuse, where those interests are not overridden by your rights.
                </li>
                <li>
                  <span className="font-medium text-foreground dark:text-white">Consent</span> — where required for
                  certain cookies or direct marketing, and you may withdraw consent at any time.
                </li>
                <li>
                  <span className="font-medium text-foreground dark:text-white">Legal obligation</span> — where we must
                  retain or disclose information to comply with the law.
                </li>
              </ul>
            </PolicySection>

            <PolicySection id="use" title="4. How we use your information">
              <p className="text-muted-foreground dark:text-white/80">We use personal information to:</p>
              <ul className="grid gap-2 sm:grid-cols-2">
                {[
                  "Provide and maintain the Services, including our blog and contact experiences",
                  "Send transactional messages related to your requests (for example, newsletter confirmation)",
                  "Send marketing or educational emails when you have signed up for the newsletter, with an unsubscribe option",
                  "Respond to questions and support requests",
                  "Process and collect payment for services you purchase from us, including through our payment or invoicing providers",
                  "Evaluate applications when you apply for a role with BitWerks",
                  "Monitor security, prevent fraud and spam, and enforce our policies",
                  "Comply with law and respond to lawful requests",
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

            <PolicySection id="share" title="5. How we share your information">
              <p className="font-medium text-foreground dark:text-white">
                We do not sell or rent your personal information.
              </p>
              <p className="text-muted-foreground dark:text-white/80">
                We share information only with service providers that help us operate the Services, under appropriate
                confidentiality and security expectations. Categories of providers include:
              </p>
              <ul className="list-disc space-y-2 pl-5 text-muted-foreground dark:text-white/80">
                <li>Cloud hosting and database providers (we use Supabase for data storage and related infrastructure)</li>
                <li>Transactional email delivery (we use Resend to send operational emails such as newsletter messages)</li>
                <li>Abuse prevention and verification (Google reCAPTCHA when enabled for newsletter signup)</li>
                <li>Payment processors and invoicing platforms when you pay us for services</li>
              </ul>
              <p className="text-muted-foreground dark:text-white/80">
                If BitWerks is involved in a merger, acquisition, or asset sale, personal information may be transferred
                as part of that transaction. We will provide notice on the website or by email if required by law.
              </p>
              <p className="text-muted-foreground dark:text-white/80">
                We may disclose information if we believe in good faith that disclosure is required to comply with law,
                protect the rights or safety of our users or the public, or respond to valid legal process.
              </p>
            </PolicySection>

            <PolicySection id="third-party" title="6. Third-party sites and links">
              <p className="text-muted-foreground dark:text-white/80">
                The Services may link to third-party websites or services (for example, social profiles or partner
                sites). We are not responsible for their privacy practices. Please review their policies before sharing
                personal information with them.
              </p>
            </PolicySection>

            <PolicySection id="retention" title="7. Data retention">
              <p className="text-muted-foreground dark:text-white/80">
                We retain personal information only as long as reasonably necessary for the purposes described in
                this Privacy Policy, unless a longer period is required or permitted by law (for example, certain
                business records).
              </p>
              <p className="text-muted-foreground dark:text-white/80">
                Newsletter and contact records are kept to operate and improve the Services and to document our
                relationship with you. You may unsubscribe from marketing emails at any time using the link in those
                emails. You may request deletion of your personal information by contacting us; we will respond within
                a reasonable timeframe, subject to legal retention obligations.
              </p>
            </PolicySection>

            <PolicySection id="security" title="8. Security">
              <p className="text-muted-foreground dark:text-white/80">
                We use technical and organizational measures designed to protect personal information, including
                encryption in transit (such as HTTPS) and access controls appropriate to the nature of our Services.
                No method of transmission or storage is completely secure; we cannot guarantee absolute security.
              </p>
            </PolicySection>

            <PolicySection id="international" title="9. International transfers">
              <p className="text-muted-foreground dark:text-white/80">
                Our service providers may process and store information in the United States and other countries where
                they operate. If you access the Services from outside those countries, your information may be
                transferred across borders. Where required by applicable law, we rely on appropriate safeguards for such
                transfers (which may include standard contractual clauses or equivalent mechanisms offered by our
                providers).
              </p>
            </PolicySection>

            <PolicySection id="children" title="10. Children’s privacy">
              <p className="text-muted-foreground dark:text-white/80">
                The Services are not directed to children under 13 (or under 16 where a higher age applies under local
                law). We do not knowingly collect personal information from children. If you believe we have collected
                information from a child, please contact us and we will take appropriate steps to delete it.
              </p>
            </PolicySection>

            <PolicySection id="rights" title="11. Your privacy rights">
              <p className="text-muted-foreground dark:text-white/80">
                Depending on where you live, you may have rights to access, correct, delete, or restrict certain
                processing of your personal information, to object to certain processing, to data portability, or to
                withdraw consent where processing is based on consent.
              </p>

              <PolicySubheading>A. United States — California and other states</PolicySubheading>
              <p className="text-muted-foreground dark:text-white/80">
                If you are a California resident, you may have rights under the CCPA/CPRA, such as the right to know
                what personal information we collect, the right to delete personal information subject to exceptions,
                the right to correct inaccuracies, and the right not to receive discriminatory treatment for exercising
                privacy rights. We do not sell personal information as defined by the CCPA/CPRA.
              </p>
              <p className="text-muted-foreground dark:text-white/80">
                Residents of other U.S. states with comprehensive privacy laws may have similar rights; details vary by
                state.
              </p>

              <PolicySubheading>B. EEA, UK, and Switzerland</PolicySubheading>
              <p className="text-muted-foreground dark:text-white/80">
                If you are located in these regions, you may have the rights described in Section 3 and additional
                rights under local law, including the right to lodge a complaint with a supervisory authority.
              </p>

              <PolicySubheading>C. How to exercise your rights</PolicySubheading>
              <p className="text-muted-foreground dark:text-white/80">
                To submit a request, contact us at{" "}
                <Link
                  href={`mailto:${CONTACT_EMAIL}?subject=Privacy%20request`}
                  className="font-medium text-brand underline-offset-4 hover:underline"
                >
                  {CONTACT_EMAIL}
                </Link>
                . We may need to verify your identity before fulfilling certain requests.
              </p>
            </PolicySection>

            <PolicySection id="changes" title="12. Changes to this Privacy Policy">
              <p className="text-muted-foreground dark:text-white/80">
                We may update this Privacy Policy from time to time. We will post the updated version on this page and
                revise the &ldquo;Last updated&rdquo; date. If changes are material, we will provide additional notice
                as appropriate (for example, a notice on the website or, where we have your email, an email message).
              </p>
            </PolicySection>

            <PolicySection id="contact" title="13. Contact us">
              <p className="text-muted-foreground dark:text-white/80">
                If you have questions about this Privacy Policy or our data practices, contact BitWerks at{" "}
                <Link href={`mailto:${CONTACT_EMAIL}`} className="font-medium text-brand underline-offset-4 hover:underline">
                  {CONTACT_EMAIL}
                </Link>
                .
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

const PolicySubheading = ({ children }: { children: ReactNode }) => (
  <h3 className="pt-2 text-base font-bold text-foreground dark:text-white">{children}</h3>
)
