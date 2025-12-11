import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "font-semibold text-lg px-4 py-2 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-']):not([class*='h-']):not([class*='w-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-white shadow-sm hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 relative overflow-hidden before:absolute before:inset-0 before:bg-white/10 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-200",
        brand:
          "bg-gradient-to-r from-brand to-brand/80 text-white shadow-sm hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 relative overflow-hidden before:absolute before:inset-0 before:bg-white/10 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-200",
        destructive:
          "bg-destructive text-white shadow-sm hover:shadow-lg hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 relative overflow-hidden before:absolute before:inset-0 before:bg-white/10 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-200",
        outline:
          "border border-primary bg-background shadow-sm hover:shadow-lg hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 relative overflow-hidden before:absolute before:inset-0 before:bg-white/5 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-200",
        "outline-brand":
          "border border-brand bg-transparent text-brand shadow-sm hover:shadow-lg hover:bg-gradient-to-r hover:from-brand hover:to-brand/80 hover:text-white dark:border-brand dark:text-brand dark:hover:bg-gradient-to-r dark:hover:from-brand dark:hover:to-brand/80 dark:hover:text-white hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 relative overflow-hidden before:absolute before:inset-0 before:bg-white/10 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-200",
        "outline-accent":
          "border border-accent bg-transparent text-accent shadow-sm hover:shadow-lg hover:bg-accent hover:text-white dark:border-accent dark:text-accent dark:hover:bg-accent dark:hover:text-white hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 relative overflow-hidden before:absolute before:inset-0 before:bg-white/10 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-200",
        secondary:
          "bg-gradient-to-r from-brand to-brand/80 text-white shadow-sm hover:shadow-lg border border-brand/20 hover:border-brand/40 hover:from-brand/90 hover:to-brand/60 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 relative overflow-hidden before:absolute before:inset-0 before:bg-white/10 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-200",
        ghost:
          "border-none",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        lg: "py-2 md:py-4 text-xl"
      }
    },
    defaultVariants: {
      variant: "default"
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, className, size }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
