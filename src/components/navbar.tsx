"use client"

import * as React from "react"
import Link from "next/link"
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, NavigationMenuSimpleLink, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"
import { MobileNav } from "@/components/mobile-nav"
import { cn } from "@/lib/utils"
import { ThemeToggle } from "@/components/theme-toggle"

const services: { title: string; href: string; }[] = [
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
    title: "Services",
    href: "/services",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Portfolio",
    href: "/portfolio",
  },
]

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-black w-full py-4 shadow dark:shadow-black/40">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-3xl font-bold text-brand">Bit<span className="dark:text-white text-black">Werks</span></span>
        </Link>
        <div className="flex items-center space-x-4">
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList className="gap-2">
              <NavigationMenuItem>
                <NavigationMenuTrigger className="font-bold hover:text-brand focus:text-brand">SERVICES</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[250px] p-4 md:grid-cols-1 bg-white dark:bg-tertiary">
                    {services.map((service) => (
                      <ListItem
                        key={service.title}
                        title={service.title}
                        href={service.href}
                       />
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuSimpleLink 
                href="/our-work"
                className={cn(navigationMenuTriggerStyle(), "font-bold hover:text-brand focus:text-brand")}
              >
                OUR WORK
              </NavigationMenuSimpleLink>
              <NavigationMenuSimpleLink 
                href="/ "
                className={cn(navigationMenuTriggerStyle(), "font-bold hover:text-brand focus:text-brand")}
              >
                TECHNOLOGIES
              </NavigationMenuSimpleLink>
              <NavigationMenuSimpleLink 
                href="/about"
                className={cn(navigationMenuTriggerStyle(), "font-bold hover:text-brand focus:text-brand")}
              >
                ABOUT
              </NavigationMenuSimpleLink>
            </NavigationMenuList>
          </NavigationMenu>
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

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li className="border-l-2 border-gray-200 dark:border-gray-700 pl-2 ml-2">
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:text-brand focus:text-brand",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem" 