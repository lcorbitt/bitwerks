import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { getServiceDirectoryItems } from "@/lib/services-directory"

export const ServicesDirectory = () => {
  const items = getServiceDirectoryItems()

  return (
    <div className="bg-white pt-8 dark:bg-primary">
      <div className="container mx-auto mb-8 px-4">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group flex min-h-[200px] flex-col justify-between rounded-lg bg-light p-6 shadow-sm transition-all duration-300 hover:shadow-lg dark:bg-gray-100"
            >
              <div>
                <h3 className="text-lg font-semibold tracking-tight text-foreground transition-colors group-hover:text-brand">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground dark:text-gray-700">{item.description}</p>
              </div>
              <span className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-brand opacity-90 transition-opacity group-hover:opacity-100">
                Learn more
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
