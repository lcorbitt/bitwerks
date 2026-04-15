"use client"

import * as React from "react"

import { createClient } from "@/lib/supabase/browser"

import { ADMIN_SIGN_IN } from "./constants"

export const AdminSignIn = () => {
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [email, setEmail] = React.useState("")
  const [password, setPassword] = React.useState("")
  const [errorMessage, setErrorMessage] = React.useState<string | null>(null)

  const onSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    setIsSubmitting(true)
    setErrorMessage(null)

    try {
      const supabase = createClient()
      const { error } = await supabase.auth.signInWithPassword({ email, password })
      if (error) throw error
      window.location.reload()
    } catch (error) {
      const message = error instanceof Error ? error.message : "Sign-in failed."
      setErrorMessage(message)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="container py-16 md:py-24">
      <div className="mx-auto max-w-md rounded-2xl border bg-white/50 p-6 dark:bg-black/20">
        <h1 className="text-xl font-semibold">{ADMIN_SIGN_IN.title}</h1>
        <p className="mt-2 text-sm text-muted-foreground">{ADMIN_SIGN_IN.subtitle}</p>

        <form className="mt-6 grid gap-4" onSubmit={onSubmit}>
          <label className="grid gap-2">
            <span className="text-sm font-medium">Email</span>
            <input
              className="h-11 rounded-xl border bg-background px-3"
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>

          <label className="grid gap-2">
            <span className="text-sm font-medium">Password</span>
            <input
              className="h-11 rounded-xl border bg-background px-3"
              type="password"
              autoComplete="current-password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>

          {errorMessage ? <p className="text-sm text-red-600">{errorMessage}</p> : null}

          <button
            type="submit"
            className="h-11 rounded-xl bg-brand px-4 text-white disabled:opacity-60"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Signing in…" : "Sign in"}
          </button>
        </form>
      </div>
    </div>
  )
}

