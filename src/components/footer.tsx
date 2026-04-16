import Link from "next/link"
import { Button } from "@/components/ui/button"
import { NewsletterSubscribe } from "@/components/newsletter/newsletter-subscribe"

export function Footer() {
  return (
    <footer className="relative dark:bg-primary">
      <div className="dark:text-white">
        <div className="container pb-4 pt-12">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="max-md:order-1 space-y-6 text-left">
              <div className="space-y-4">
                <h3 className="text-lg font-bold">
                  <span className="text-brand">Bit</span>Werks
                </h3>
                <p className="text-sm text-muted-foreground dark:text-white/80">
                  Since 2017, we&apos;ve built software for businesses of all sizes, from early-stage startups to
                  established organizations.
                </p>
              </div>
              <div className="space-y-3 flex flex-col">
                <h4 className="text-sm font-extrabold">Newsletter</h4>
                <NewsletterSubscribe source="footer" compact stacked className="w-full" />
              </div>
            </div>

            <div className="hidden text-left md:block">
              <h4 className="mb-4 text-sm font-extrabold">Company</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="mailto:bitwerksco@gmail.com"
                    className="text-muted-foreground transition-colors duration-300 hover:text-brand dark:text-white/80 dark:hover:text-brand"
                  >
                    bitwerksco@gmail.com
                  </Link>
                </li>
                <li>
                  <Link
                    href="tel:8167144107"
                    className="text-muted-foreground transition-colors duration-300 hover:text-brand dark:text-white/80 dark:hover:text-brand"
                  >
                    (816) 714-4107
                  </Link>
                </li>
                <li>
                  <div className="text-muted-foreground transition-colors duration-300 hover:text-brand dark:text-white/80 dark:hover:text-brand">
                    Denver, CO
                  </div>
                </li>
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-8 max-md:order-3 md:contents">
              <div className="text-left">
                <h4 className="mb-4 text-sm font-extrabold">Links</h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link
                      href="/"
                      className="text-muted-foreground transition-colors duration-300 hover:text-brand dark:text-white/80 dark:hover:text-brand"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/web-development"
                      className="text-muted-foreground transition-colors duration-300 hover:text-brand dark:text-white/80 dark:hover:text-brand"
                    >
                      Web Development
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/software-development"
                      className="text-muted-foreground transition-colors duration-300 hover:text-brand dark:text-white/80 dark:hover:text-brand"
                    >
                      Software Development
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/white-label-partnerships"
                      className="text-muted-foreground transition-colors duration-300 hover:text-brand dark:text-white/80 dark:hover:text-brand"
                    >
                      White Label Partnerships
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/our-work"
                      className="text-muted-foreground transition-colors duration-300 hover:text-brand dark:text-white/80 dark:hover:text-brand"
                    >
                      Our Work
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about"
                      className="text-muted-foreground transition-colors duration-300 hover:text-brand dark:text-white/80 dark:hover:text-brand"
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/blog"
                      className="text-muted-foreground transition-colors duration-300 hover:text-brand dark:text-white/80 dark:hover:text-brand"
                    >
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/privacy-policy"
                      className="text-muted-foreground transition-colors duration-300 hover:text-brand dark:text-white/80 dark:hover:text-brand"
                    >
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/sitemap.xml"
                      className="text-muted-foreground transition-colors duration-300 hover:text-brand dark:text-white/80 dark:hover:text-brand"
                    >
                      Sitemap
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="space-y-4 text-left">
                <h4 className="text-sm font-extrabold">Get in Touch</h4>
                <p className="text-sm text-muted-foreground dark:text-white/80">Ready to discuss your project?</p>
                <Button asChild variant="outline">
                  <Link href="/contact">Schedule a Call</Link>
                </Button>
              </div>
            </div>

          </div>

          <div className="mt-8 pt-4">
            <p className="text-center text-xs text-muted-foreground dark:text-white/80">
              © 2017 - {new Date().getFullYear()} BitWerks. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
