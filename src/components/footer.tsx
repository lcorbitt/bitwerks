import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="relative overflow-hidden">
      {/* Circuit board background */}
      <div
        className="absolute inset-0 w-full h-full z-0"
        style={{
          backgroundImage: 'url("/circuit-board.svg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
          opacity: 0.3,
        }}
        aria-hidden="true"
      />
      {/* White overlay for light mode only */}
      <div className="block dark:hidden absolute inset-0 bg-white/80 z-10" aria-hidden="true" />
      {/* Footer content */}
      <div className="relative z-20 dark:text-white">
        <div className="container pb-4 pt-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold"><span className="text-brand">Bit</span>Werks</h3>
              <p className="text-sm text-muted-foreground dark:text-white/80">
                Crafting exceptional digital experiences.
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
                  <Link href="/services/technical-consulting" className="text-muted-foreground hover:text-foreground dark:text-white/80 dark:hover:text-white">
                    Technical Consulting
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
            <p className="text-center text-sm text-muted-foreground dark:text-white/80">
              © {new Date().getFullYear()} BitWerks. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
} 