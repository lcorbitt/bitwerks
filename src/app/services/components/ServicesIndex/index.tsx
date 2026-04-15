import Link from "next/link"

import { SERVICES_INDEX } from "./constants"

export const ServicesIndex = () => {
  return (
    <div className="container py-16 md:py-24">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">{SERVICES_INDEX.title}</h1>
        <p className="mt-3 text-muted-foreground">{SERVICES_INDEX.description}</p>

        <div className="mt-10 grid gap-4">
          {SERVICES_INDEX.items.map((item) => (
            <Link
              key={item.href}
              className="rounded-2xl border bg-white/50 p-6 hover:bg-white dark:bg-black/20 dark:hover:bg-black/30"
              href={item.href}
            >
              <div className="font-semibold">{item.title}</div>
              <div className="mt-1 text-sm text-muted-foreground">{item.description}</div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
