"use client"

import * as React from "react"
import Link from "next/link"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { navigationItems } from "./navigation-data"

export function MobileNav() {
  const [open, setOpen] = React.useState(false)

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
          {navigationItems.map((item) => (
            <div key={item.title}>
              {item.type === 'dropdown' ? (
                <div className="space-y-2">
                  <div className="flex w-full items-center justify-between rounded-md p-3 text-left text-black dark:text-white">
                    <span className="text-sm font-medium">{item.title}</span>
                  </div>
                  <div className="ml-4 space-y-1 border-l-2 border-gray-200 dark:border-gray-700 pl-4">
                    {item.children?.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block rounded-md p-2 text-sm text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200"
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
                  className="flex items-center rounded-md p-3 text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
                  onClick={(e) => {
                    setOpen(false)
                    if (item.href === '/' && window.location.pathname === '/') {
                      e.preventDefault()
                      window.scrollTo({ top: 0, behavior: 'smooth' })
                    }
                  }}
                >
                  <span className="text-sm font-medium">{item.title}</span>
                </Link>
              )}
            </div>
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