import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="relative dark:bg-primary">
      {/* Footer content */}
      <div className="dark:text-white">
        <div className="container pb-4 pt-12">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-4 text-left">
              <h3 className="text-lg font-semibold"><span className="text-brand">Bit</span>Werks</h3>
              <p className="text-sm text-muted-foreground dark:text-white/80">
                Based in Denver, CO. Building beautiful and performant digital solutions to power your business nationwide.
              </p>
            </div>
            <div className="hidden md:block text-left">
              <h4 className="mb-4 text-sm font-semibold">Say Hello</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="mailto:bitwerksco@gmail.com" className="text-muted-foreground hover:text-brand dark:text-white/80 dark:hover:text-brand transition-colors duration-300">
                    bitwerksco@gmail.com
                  </Link>
                </li>
              </ul>
            </div>
            {/* Links and Get in Touch - side by side on mobile */}
            <div className="grid grid-cols-2 gap-8 md:contents">
              <div className="text-left">
                <h4 className="mb-4 text-sm font-semibold">Links</h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link href="/services/web-development" className="text-muted-foreground hover:text-brand dark:text-white/80 dark:hover:text-brand transition-colors duration-300">
                      Web Development
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/software-development" className="text-muted-foreground hover:text-brand dark:text-white/80 dark:hover:text-brand transition-colors duration-300">
                      Software Development
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/white-label-partnerships" className="text-muted-foreground hover:text-brand dark:text-white/80 dark:hover:text-brand transition-colors duration-300">
                      White Label Partnerships
                    </Link>
                  </li>
                  <li>
                    <Link href="/our-work" className="text-muted-foreground hover:text-brand dark:text-white/80 dark:hover:text-brand transition-colors duration-300">
                      Our Work
                    </Link>
                  </li>
                  <li>
                    <Link href="/about" className="text-muted-foreground hover:text-brand dark:text-white/80 dark:hover:text-brand transition-colors duration-300">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link href="/sitemap.xml" className="text-muted-foreground hover:text-brand dark:text-white/80 dark:hover:text-brand transition-colors duration-300">
                      Sitemap
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="space-y-4 text-left">
                <h4 className="text-sm font-semibold">Get in Touch</h4>
                <p className="text-sm text-muted-foreground dark:text-white/80">
                  Ready to discuss your project?
                </p>
                <Button asChild variant="outline">
                  <Link href="/contact">Schedule a Call</Link>
                </Button>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-4">
            <p className="text-center text-xs text-muted-foreground dark:text-white/80">
              © {new Date().getFullYear()} BitWerks. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
} 