"use client"

import { useCallback, useEffect, useState } from "react"
import Link from "next/link"

import { unsubscribeNewsletterLeadAction } from "@/app/actions/newsletter"
import { Button } from "@/components/ui/button"

type Phase = "working" | "done" | "invalid" | "error"

interface UnsubscribeClientProps {
  token: string
}

export const UnsubscribeClient = ({ token }: UnsubscribeClientProps) => {
  const [phase, setPhase] = useState<Phase>("working")

  const run = useCallback(async () => {
    setPhase("working")
    const result = await unsubscribeNewsletterLeadAction(token)
    if (result.ok) {
      setPhase("done")
      return
    }
    if (result.reason === "invalid_token") setPhase("invalid")
    else setPhase("error")
  }, [token])

  useEffect(() => {
    void run()
  }, [run])

  if (phase === "working") {
    return (
      <div className="space-y-2">
        <p className="text-muted-foreground text-sm leading-relaxed">Finishing your request…</p>
      </div>
    )
  }

  if (phase === "done") {
    return (
      <div className="space-y-5">
        <h1 className="text-2xl font-semibold tracking-tight text-foreground">You are unsubscribed</h1>
        <p className="text-muted-foreground leading-relaxed">
          We are genuinely sorry to see you go — and thankful for the attention you already gave us. You will not
          receive further emails about new insights or list updates from Bitwerks. If you change your mind, you are
          always welcome to subscribe again from the site.
        </p>
        <p className="text-muted-foreground text-sm leading-relaxed">
          This page is all that is required; there is nothing else you need to click.
        </p>
        <Button asChild variant="outline" className="text-base">
          <Link href="/">Return home</Link>
        </Button>
      </div>
    )
  }

  if (phase === "invalid") {
    return (
      <div className="space-y-4">
        <h1 className="text-2xl font-semibold tracking-tight text-foreground">That link is not valid</h1>
        <p className="text-muted-foreground leading-relaxed">
          The address you opened may be incomplete, altered, or expired. Please use the unsubscribe link from the most
          recent Bitwerks email, or reply to that message and we will help you manually.
        </p>
        <Button asChild variant="outline" className="text-base">
          <Link href="/">Return home</Link>
        </Button>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold tracking-tight text-foreground">We could not finish that request</h1>
      <p className="text-muted-foreground leading-relaxed">
        Something went wrong on our side. Your preferences may already be updated — if not, try again in a moment.
      </p>
      <Button type="button" variant="brand" className="text-base" onClick={() => void run()}>
        Try again
      </Button>
      <div>
        <Button asChild variant="ghost" className="text-base">
          <Link href="/">Return home</Link>
        </Button>
      </div>
    </div>
  )
}
