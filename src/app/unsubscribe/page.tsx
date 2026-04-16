import type { Metadata } from "next"
import Link from "next/link"

import { UnsubscribeClient } from "@/app/unsubscribe/unsubscribe-client"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Unsubscribe",
  description: "Update your Bitwerks insights email preferences.",
  robots: { index: false, follow: false },
}

interface UnsubscribePageProps {
  searchParams: Record<string, string | string[] | undefined>
}

const pickToken = (searchParams: UnsubscribePageProps["searchParams"]) => {
  const raw = searchParams.user_id ?? searchParams.token
  if (Array.isArray(raw)) return raw[0]?.trim() ?? ""
  return typeof raw === "string" ? raw.trim() : ""
}

export default function UnsubscribePage({ searchParams }: UnsubscribePageProps) {
  const token = pickToken(searchParams)

  return (
    <main className="mx-auto flex min-h-[70vh] max-w-lg flex-col justify-center px-6 py-20">
      <div className="rounded-2xl border border-border/80 bg-card/40 p-8 shadow-sm backdrop-blur-sm md:p-10">
        {token ? (
          <UnsubscribeClient token={token} />
        ) : (
          <div className="space-y-4">
            <h1 className="text-2xl font-semibold tracking-tight text-foreground">Unsubscribe</h1>
            <p className="text-muted-foreground leading-relaxed">
              To leave the list, open the unsubscribe link from your Bitwerks email — it carries a private token we use
              instead of a password or account.
            </p>
            <Button asChild variant="outline" className="text-base">
              <Link href="/">Return home</Link>
            </Button>
          </div>
        )}
      </div>
    </main>
  )
}
