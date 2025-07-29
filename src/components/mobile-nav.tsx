import * as React from "react"
import Link from "next/link"
import { Menu, ChevronDown, ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

const services = [
  {
    title: "Web Development",
    href: "/services/web-development",
  },
  {
    title: "Software Development", 
    href: "/services/software-development",
  },
  {
    title: "Technical Consulting",
    href: "/services/technical-consulting",
  },
]

const navigationItems = [
  {
    title: "Our Work",
    href: "/our-work",
  },
  {
    title: "Technologies", 
    href: "/technologies",
  },
  {
    title: "About",
    href: "/about",
  },
]

export function MobileNav() {
  const [open, setOpen] = React.useState(false)
  const [servicesOpen, setServicesOpen] = React.useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 lg:hidden"
        >
          <Menu className="w-8 h-8 min-w-8 min-h-12" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="top" className="w-full border-b border-black/10 dark:border-white/20 pt-20 bg-white dark:bg-primary">
        <SheetHeader className="mb-4">
          <SheetTitle className="text-black dark:text-white">Navigation</SheetTitle>
        </SheetHeader>
        <nav className="space-y-2">
          {/* Services Dropdown */}
          <div className="space-y-2">
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className="flex w-full items-center justify-between rounded-md p-3 text-left text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
            >
              <span className="text-sm font-medium">Services</span>
              <div className="transition-transform duration-200 ease-in-out">
                {servicesOpen ? (
                  <ChevronUp className="h-4 w-4" />
                ) : (
                  <ChevronDown className="h-4 w-4" />
                )}
              </div>
            </button>
            <div 
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                servicesOpen 
                  ? "max-h-48 opacity-100 translate-y-0" 
                  : "max-h-0 opacity-0 -translate-y-2"
              }`}
            >
              <div className="ml-4 space-y-1 border-l-2 border-gray-200 dark:border-gray-700 pl-4">
                {services.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    className="block rounded-md p-2 text-sm text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200"
                    onClick={() => setOpen(false)}
                  >
                    {service.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Other Navigation Items */}
          {navigationItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center rounded-md p-3 text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
              onClick={() => setOpen(false)}
            >
              <span className="text-sm font-medium">{item.title}</span>
            </Link>
          ))}

          {/* CTA Button */}
          <Button asChild variant="default" className="w-full mt-6 bg-black hover:bg-black/90 dark:bg-white dark:text-primary text-white">
            <Link href="/contact" onClick={() => setOpen(false)}>
              Schedule a Call
            </Link>
          </Button>
        </nav>
      </SheetContent>
    </Sheet>
  )
} 