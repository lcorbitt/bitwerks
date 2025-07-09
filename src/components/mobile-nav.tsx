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
        <nav className="grid grid-cols-2 gap-4">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex flex-col space-y-1 rounded-md p-3 hover:bg-accent hover:text-accent-foreground text-black dark:text-white"
              onClick={() => setOpen(false)}
            >
              <span className="text-sm font-medium">{item.title}</span>
              {item.description && (
                <span className="line-clamp-2 text-sm text-muted-foreground dark:text-muted-dark">
                  {item.description}
                </span>
              )}
            </Link>
          ))}
          <Button asChild variant="default" className="col-span-2 mt-4 bg-black hover:bg-black/90 dark:bg-white dark:text-primary text-white">
            <Link href="/contact" onClick={() => setOpen(false)}>
              Schedule a Call
            </Link>
          </Button>
        </nav>
      </SheetContent>
    </Sheet>
  )
} 