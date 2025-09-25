import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="relative dark:bg-tertiary">
      {/* Footer content */}
      <div className="dark:text-white">
        <div className="container pb-4 pt-12">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold"><span className="text-brand">Bit</span>Werks</h3>
              <p className="text-sm text-muted-foreground dark:text-white/80">
                We craft beautiful, hand-crafted websites, custom software to empower your business.
              </p>
            </div>
            <div>
              <h4 className="mb-4 text-sm font-semibold">Services</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/services/web-development" className="text-muted-foreground hover:text-foreground dark:text-white/80 dark:hover:text-white">
                    Web Development
                  </Link>
                </li>
                <li>
                  <Link href="/services/software-development" className="text-muted-foreground hover:text-foreground dark:text-white/80 dark:hover:text-white">
                    Software Development
                  </Link>
                </li>
                <li>
                  <Link href="/services/white-label-partnerships" className="text-muted-foreground hover:text-foreground dark:text-white/80 dark:hover:text-white">
                    White Label Partnerships
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 text-sm font-semibold">Company</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/services" className="text-muted-foreground hover:text-foreground dark:text-white/80 dark:hover:text-white">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/our-work" className="text-muted-foreground hover:text-foreground dark:text-white/80 dark:hover:text-white">
                    Our Work
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-muted-foreground hover:text-foreground dark:text-white/80 dark:hover:text-white">
                    Technologies
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-muted-foreground hover:text-foreground dark:text-white/80 dark:hover:text-white">
                    About
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm font-semibold">Get in Touch</h4>
              <p className="text-sm text-muted-foreground dark:text-white/80">
                Ready to discuss your project?
              </p>
              <Button asChild variant="default" className="bg-black hover:bg-black/90 text-white dark:bg-white dark:text-black">
                <Link href="/contact">Schedule a Call</Link>
              </Button>
            </div>
          </div>
          <div className="mt-8 border-t pt-4">
            <p className="text-center text-xs text-muted-foreground dark:text-white/80">
              © {new Date().getFullYear()} BitWerks. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
} 