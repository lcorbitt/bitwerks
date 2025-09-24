"use client"

import * as React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MobileNav } from "@/components/mobile-nav"
import { ThemeToggle } from "@/components/theme-toggle"
import { navigationItems } from "./navigation-data"

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-black w-full py-4 shadow dark:shadow-black/40">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-3xl font-bold text-brand">Bit<span className="dark:text-white text-black">Werks</span></span>
        </Link>
        <div className="flex items-center space-x-8">
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.title} className="relative group">
                {item.type === 'dropdown' ? (
                  <>
                    <button className="font-bold hover:text-brand focus:text-brand transition-colors cursor-default">
                      {item.title}
                    </button>
                    <div className="absolute top-full left-0 mt-2 w-64 bg-white dark:bg-tertiary rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                      <div className="p-4">
                        {item.children?.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-brand hover:bg-gray-50 dark:hover:bg-black/30 rounded-md transition-colors"
                          >
                            {child.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="font-bold hover:text-brand focus:text-brand transition-colors"
                  >
                    {item.title}
                  </Link>
                )}
              </div>
            ))}
          </nav>
          <MobileNav />
          <Button asChild variant="default" className="hidden lg:flex bg-black hover:bg-black/90 dark:bg-white dark:text-black">
            <Link href="/contact">Schedule a Call</Link>
          </Button>
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
