import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="bg-light dark:bg-tertiary">
      <div className="container py-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold"><span className="text-brand">Bit</span>Werks</h3>
            <p className="text-sm text-muted-foreground">
              Crafting exceptional digital experiences.
            </p>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-semibold">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services/web-development" className="text-muted-foreground hover:text-foreground">
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="/services/software-development" className="text-muted-foreground hover:text-foreground">
                  Software Development
                </Link>
              </li>
              <li>
                <Link href="/services/consulting" className="text-muted-foreground hover:text-foreground">
                  Technical Consulting
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-semibold">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-foreground">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/our-work" className="text-muted-foreground hover:text-foreground">
                  Our Work
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground">
                  Technologies
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground">
                  About
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Get in Touch</h4>
            <p className="text-sm text-muted-foreground">
              Ready to discuss your project?
            </p>
            <Button asChild variant="default" className="bg-black hover:bg-black/90 text-white">
              <Link href="/contact">Schedule a Call</Link>
            </Button>
          </div>
        </div>
        <div className="mt-12 border-t pt-8">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} BitWerks. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
} 