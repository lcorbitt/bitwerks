"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet"
import { navigationItems } from "./navigation-data"

export function MobileNav() {
  const [open, setOpen] = React.useState(false)
  const pathname = usePathname()

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/"
    }
    return pathname.startsWith(href)
  }

  const isServicesActive = () =>
    pathname.startsWith("/services") ||
    pathname.startsWith("/web-development") ||
    pathname.startsWith("/software-development") ||
    pathname.startsWith("/technical-consulting")

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className="flex items-center justify-center px-0 hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 lg:hidden"
        >
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent
        side="top"
        className="w-full gap-0 bg-white p-4 pb-5 pt-12 dark:bg-primary border-b-[#1f1f1f]/70"
      >
        <SheetHeader className="mb-3 space-y-0">
          <div className="relative mx-auto h-14 w-auto">
            <Link href="/" onClick={() => setOpen(false)}>
              <Image
                src="/logo-light.png"
                alt="BitWerks Logo"
                width={160}
                height={64}
                className="h-14 w-auto object-contain transition-opacity duration-300 dark:hidden"
                priority
              />
              <Image
                src="/logo-dark.png"
                alt="BitWerks Logo"
                width={160}
                height={64}
                className="hidden h-14 w-auto object-contain transition-opacity duration-300 dark:block"
                priority
              />
            </Link>
          </div>
        </SheetHeader>

        <nav className="flex flex-col">
          <div className="max-h-[calc(100dvh-13.5rem)] space-y-1 overflow-y-auto overscroll-contain pr-1">
            {navigationItems.map((item) => (
              <div key={item.title}>
                {item.type === "dropdown" ? (
                  <div className="space-y-1">
                    <Link
                      href={item.href}
                      className={`block rounded-md px-2 py-2.5 font-bold transition-colors hover:text-brand focus:text-brand ${isServicesActive() ? "text-brand" : "text-black dark:text-white"}`}
                      onClick={() => setOpen(false)}
                    >
                      {item.title}
                    </Link>
                    <div className="ml-2 space-y-0.5 border-l-2 border-gray-200 pl-3 dark:border-[#1f1f1f]/70">
                      {item.children?.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className={`block rounded-md px-2 py-2 text-sm transition-colors hover:text-brand hover:bg-gray-50 dark:hover:bg-black/30 ${isActive(child.href) ? "bg-gray-50 text-brand dark:bg-black/30" : "text-gray-700 dark:text-gray-300"}`}
                          onClick={() => setOpen(false)}
                        >
                          {child.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className={`block rounded-md px-2 py-2.5 font-bold transition-colors hover:text-brand focus:text-brand ${isActive(item.href) ? "text-brand" : "text-black dark:text-white"}`}
                    onClick={(e) => {
                      setOpen(false)
                      if (item.href === "/" && window.location.pathname === "/") {
                        e.preventDefault()
                        window.scrollTo({ top: 0, behavior: "smooth" })
                      }
                    }}
                  >
                    {item.title}
                  </Link>
                )}
              </div>
            ))}
          </div>

          <div className="mt-4 border-t border-gray-200 pt-4 dark:border-[#1f1f1f]/70">
            <Button asChild variant="outline" className="w-full">
              <Link href="/contact" onClick={() => setOpen(false)}>
                Schedule a Call
              </Link>
            </Button>
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  )
}
