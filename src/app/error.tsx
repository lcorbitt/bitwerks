"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
      <div className="space-y-6">
        <h1 className="text-6xl font-bold text-gray-900 dark:text-white">500</h1>
        <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-300">
          Something went wrong
        </h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-md">
          We&apos;re experiencing technical difficulties. Please try again later.
        </p>
        <div className="flex gap-4 justify-center">
          <Button onClick={reset}>
            Try Again
          </Button>
          <Button asChild variant="outline">
            <Link href="/">Go Home</Link>
          </Button>
        </div>
      </div>
    </div>
  )
} 