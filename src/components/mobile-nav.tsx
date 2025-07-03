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

interface MobileNavProps {
  items: {
    title: string
    href: string
    description?: string
  }[]
}

export function MobileNav({ items }: MobileNavProps) {
  const [open, setOpen] = React.useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
        >
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="top" className="w-full border-b pt-20">
        <SheetHeader className="mb-4">
          <SheetTitle>Navigation</SheetTitle>
        </SheetHeader>
        <nav className="grid grid-cols-2 gap-4">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex flex-col space-y-1 rounded-md p-3 hover:bg-accent hover:text-accent-foreground"
              onClick={() => setOpen(false)}
            >
              <span className="text-sm font-medium">{item.title}</span>
              {item.description && (
                <span className="line-clamp-2 text-sm text-muted-foreground">
                  {item.description}
                </span>
              )}
            </Link>
          ))}
          <Button asChild className="col-span-2 mt-4">
            <Link href="/contact" onClick={() => setOpen(false)}>
              Get Started
            </Link>
          </Button>
        </nav>
      </SheetContent>
    </Sheet>
  )
} 