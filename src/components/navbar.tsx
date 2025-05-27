"use client"

import * as React from "react"
import Link from "next/link"
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, NavigationMenuSimpleLink, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"
import { MobileNav } from "@/components/mobile-nav"
import { cn } from "@/lib/utils"

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Web Development",
    href: "/services/web-development",
    description: "Modern, responsive websites built with the latest technologies.",
  },
  {
    title: "Custom Software",
    href: "/services/custom-software",
    description: "Tailored software solutions to solve your business challenges.",
  },
  {
    title: "API Integration",
    href: "/services/api-integration",
    description: "Seamless integration of third-party services and APIs.",
  },
  {
    title: "Technical Consulting",
    href: "/services/consulting",
    description: "Expert guidance on technology strategy and implementation.",
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
    <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 w-full">
      <div className="container flex h-16 items-center justify-between max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold text-brand">Bit<span className="text-black">Werks</span></span>
        </Link>
        <div className="flex items-center space-x-4">
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList className="gap-2">
              <NavigationMenuItem>
                <NavigationMenuTrigger className="font-bold">Services</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {components.map((component) => (
                      <ListItem
                        key={component.title}
                        title={component.title}
                        href={component.href}
                      >
                        {component.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuSimpleLink 
                href="/our-work"
                className={cn(navigationMenuTriggerStyle(), "font-bold")}
              >
                Our Work
              </NavigationMenuSimpleLink>
              <NavigationMenuSimpleLink 
                href="/ "
                className={cn(navigationMenuTriggerStyle(), "font-bold")}
              >
                Technologies
              </NavigationMenuSimpleLink>
              <NavigationMenuSimpleLink 
                href="/about"
                className={cn(navigationMenuTriggerStyle(), "font-bold")}
              >
                About
              </NavigationMenuSimpleLink>
            </NavigationMenuList>
          </NavigationMenu>
          <MobileNav items={[...components, ...navigationItems]} />
          <Button asChild variant="default" className="hidden md:flex">
            <Link href="/contact">Schedule a Call</Link>
          </Button>
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
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
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