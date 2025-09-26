"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { MobileNav } from "@/components/mobile-nav"
import { ThemeToggle } from "@/components/theme-toggle"
import { navigationItems } from "./navigation-data"

export function Navbar() {
  const pathname = usePathname()
  const [isServicesOpen, setIsServicesOpen] = React.useState(false)

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/'
    }
    return pathname.startsWith(href)
  }

  const isServicesActive = () => {
    return pathname.startsWith('/services') || pathname.startsWith('/web-development') || pathname.startsWith('/software-development') || pathname.startsWith('/technical-consulting')
  }

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-black w-full py-4 shadow dark:shadow-black/40">
      <div className="container flex h-16 items-center justify-between">
        <Link 
          href="/" 
          className="flex items-center space-x-2"
          onClick={(e) => {
            if (window.location.pathname === '/') {
              e.preventDefault()
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }
          }}
        >
          <span className="text-3xl font-bold text-brand">Bit<span className="dark:text-white text-black">Werks</span></span>
        </Link>
        <div className="flex items-center space-x-8">
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.title} className="relative group">
                {item.type === 'dropdown' ? (
                  <>
                    <button 
                      className={`font-bold hover:text-brand focus:text-brand transition-colors cursor-default ${isServicesActive() ? 'text-brand' : ''}`}
                      onMouseEnter={() => setIsServicesOpen(true)}
                      onMouseLeave={() => setIsServicesOpen(false)}
                    >
                      {item.title}
                    </button>
                    <div 
                      className={`absolute top-full left-0 mt-2 w-64 bg-white dark:bg-tertiary rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 transition-all duration-200 z-50 ${isServicesOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
                      onMouseEnter={() => setIsServicesOpen(true)}
                      onMouseLeave={() => setIsServicesOpen(false)}
                    >
                      <div className="p-4">
                        {item.children?.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className={`block px-3 py-2 text-sm hover:text-brand hover:bg-gray-50 dark:hover:bg-black/30 rounded-md transition-colors ${isActive(child.href) ? 'text-brand bg-gray-50 dark:bg-black/30' : 'text-gray-700 dark:text-gray-300'}`}
                            onClick={() => setIsServicesOpen(false)}
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
                    className={`font-bold hover:text-brand focus:text-brand transition-colors ${isActive(item.href) ? 'text-brand' : ''}`}
                    onClick={(e) => {
                      if (item.href === '/' && window.location.pathname === '/') {
                        e.preventDefault()
                        window.scrollTo({ top: 0, behavior: 'smooth' })
                      }
                    }}
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
