"use client"

import * as React from "react"

import { subscribeNewsletterAction, type SubscribeNewsletterResult } from "@/app/actions/newsletter"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

interface NewsletterSubscribeProps {
  variant?: "inline" | "dialog"
  /** Tighter typography for footer and other dense layouts */
  compact?: boolean
  /** Input above button, both full width (e.g. footer) */
  stacked?: boolean
  source: string
  className?: string
  triggerLabel?: string
  title?: string
  description?: string
  triggerClassName?: string
  triggerVariant?: React.ComponentProps<typeof Button>["variant"]
  /** This project’s `Button` only defines `size="lg"`. Omit for default sizing. */
  triggerSize?: "lg"
}

export const NewsletterSubscribe = ({
  variant = "inline",
  compact = false,
  stacked = false,
  source,
  className = "",
  triggerLabel = "Subscribe to updates",
  title = "Email updates",
  description = "Updates on web development, product work, and what we’re building — no spam.",
  triggerClassName,
  triggerVariant = "outline",
  triggerSize,
}: NewsletterSubscribeProps) => {
  const [state, setState] = React.useState<SubscribeNewsletterResult | null>(null)
  const [isPending, startTransition] = React.useTransition()
  const formRef = React.useRef<HTMLFormElement>(null)

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setState(null)
    const formData = new FormData(event.currentTarget)
    startTransition(async () => {
      const result = await subscribeNewsletterAction(formData)
      setState(result)
      if (result.ok) formRef.current?.reset()
    })
  }

  const form = (
    <form ref={formRef} className={cn("w-full flex flex-col", compact ? "gap-2" : "gap-3")} onSubmit={onSubmit} noValidate>
      <input type="hidden" name="source" value={source} />
      <div
        className={cn(
          "flex w-full min-w-0 gap-2",
          stacked ? "flex-col" : "flex-col sm:flex-row sm:items-center",
        )}
      >
        <label htmlFor={`newsletter-email-${source}`} className="sr-only">
          Email address
        </label>
        <Input
          id={`newsletter-email-${source}`}
          type="email"
          name="email"
          required
          autoComplete="email"
          inputMode="email"
          placeholder="you@company.com"
          disabled={isPending}
          className={cn(
            "min-w-0 !h-auto leading-normal",
            stacked ? "w-full" : "flex-1",
            compact
              ? "px-3 py-2 text-sm font-medium md:text-sm"
              : "px-4 py-2 !text-lg font-semibold md:!text-lg",
          )}
          aria-invalid={state?.error ? true : undefined}
        />
        <Button
          type="submit"
          disabled={isPending}
          className={cn(
            "w-full shrink-0",
            !stacked && "sm:w-auto",
            compact && "py-2 text-sm font-semibold md:text-sm",
          )}
        >
          {isPending ? "Sending…" : "Subscribe"}
        </Button>
      </div>
    </form>
  )

  if (variant === "dialog") {
    return (
      <Dialog>
        <DialogTrigger asChild>
          <Button
            type="button"
            variant={triggerVariant}
            {...(triggerSize ? { size: triggerSize } : {})}
            className={triggerClassName}
          >
            {triggerLabel}
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
            <DialogDescription>{description}</DialogDescription>
          </DialogHeader>
          {form}
        </DialogContent>
      </Dialog>
    )
  }

  return <div className={className}>{form}</div>
}
