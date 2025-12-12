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
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { navigationItems } from "./navigation-data"

export function MobileNav() {
  const [open, setOpen] = React.useState(false)
  const pathname = usePathname()

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
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className="px-0 hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 lg:hidden flex items-center justify-center"
        >
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="top" className="w-full bg-white dark:bg-primary border-b-[#1f1f1f]/70">
        <SheetHeader className="mb-4">
          <div className="relative h-20 w-auto mx-auto">
            <Link href="/" onClick={() => setOpen(false)}>
              <Image 
                src="/logo-light.png" 
                alt="BitWerks Logo" 
                width={160}
                height={64}
                className="h-20 w-auto dark:hidden transition-opacity duration-300 object-contain"
                priority
              />
              <Image 
                src="/logo-dark.png" 
                alt="BitWerks Logo" 
                width={160} 
                height={64}
                className="h-20 w-auto hidden dark:block transition-opacity duration-300 object-contain"
                priority
              />
            </Link>
          </div>
        </SheetHeader>
        <nav className="">
          <div className="space-y-2">
            {navigationItems.map((item) => (
              <div key={item.title}>
                {item.type === 'dropdown' ? (
                  <div className="space-y-2">
                    <div className={`flex w-full items-center justify-between rounded-md p-3 text-left ${isServicesActive() ? 'text-brand' : 'text-black dark:text-white'}`}>
                      <span className="text-sm font-medium">{item.title}</span>
                    </div>
                    <div className="ml-4 space-y-1 border-l-2 border-gray-200 dark:border-[#1f1f1f]/70 pl-4">
                      {item.children?.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className={`block rounded-md p-2 text-sm hover:text-black dark:hover:text-white hover:bg-gray-50 dark:hover:bg-[#1f1f1f]/70 transition-colors duration-200 ${isActive(child.href) ? 'text-brand bg-gray-50 dark:bg-[#1f1f1f]/70' : 'text-gray-600 dark:text-gray-300'}`}
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
                    className={`flex items-center rounded-md p-3 hover:bg-gray-100 dark:hover:bg-[#1f1f1f]/70 transition-colors duration-200 ${isActive(item.href) ? 'text-brand bg-gray-100 dark:bg-[#1f1f1f]/70' : 'text-black dark:text-white'}`}
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
          </div>

          {/* CTA Button */}
          <div className="flex justify-center mt-16">
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