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
  source,
  className = "",
  triggerLabel = "Subscribe to updates",
  title = "Email updates",
  description = "Occasional notes on web development, product work, and what we’re building — no spam.",
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
    <form ref={formRef} className="grid gap-3" onSubmit={onSubmit} noValidate>
      <input type="hidden" name="source" value={source} />
      <div className="flex flex-col gap-2 sm:flex-row sm:items-stretch">
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
          className="sm:min-w-0 sm:flex-1"
          aria-invalid={state?.error ? true : undefined}
        />
        <Button type="submit" disabled={isPending} className="shrink-0 sm:w-auto">
          {isPending ? "Sending…" : "Subscribe"}
        </Button>
      </div>
      <div aria-live="polite" className="min-h-[1.25rem] text-sm">
        {state?.error ? <p className="text-destructive">{state.error}</p> : null}
        {state?.message ? (
          <p className="text-green-700 dark:text-green-400">{state.message}</p>
        ) : null}
      </div>
      <p className={cn("text-xs text-muted-foreground", variant === "dialog" ? "" : "dark:text-white/70")}>
        We use your email only for BitWerks updates. Unsubscribe any time.
      </p>
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
