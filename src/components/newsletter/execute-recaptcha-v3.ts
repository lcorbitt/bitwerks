"use client"

import { NEWSLETTER_RECAPTCHA_ACTION } from "@/lib/recaptcha/newsletter-action"

interface GrecaptchaV3 {
  ready: (callback: () => void) => void
  execute: (siteKey: string, options: { action: string }) => Promise<string>
}

declare global {
  interface Window {
    grecaptcha?: GrecaptchaV3
  }
}

const loadRecaptchaScript = async (siteKey: string): Promise<void> => {
  if (typeof window === "undefined") return
  if (window.grecaptcha?.execute) return

  const existing = document.querySelector<HTMLScriptElement>('script[src*="google.com/recaptcha/api.js"]')
  if (!existing) {
    await new Promise<void>((resolve, reject) => {
      const script = document.createElement("script")
      script.src = `https://www.google.com/recaptcha/api.js?render=${encodeURIComponent(siteKey)}`
      script.async = true
      script.onload = () => resolve()
      script.onerror = () => reject(new Error("recaptcha script error"))
      document.head.appendChild(script)
    })
  }

  const deadline = Date.now() + 12_000
  while (Date.now() < deadline) {
    if (window.grecaptcha?.execute) return
    await new Promise((r) => setTimeout(r, 50))
  }

  throw new Error("recaptcha load timeout")
}

/**
 * Returns a v3 token for the newsletter form, or null if the site key is not configured
 * (local dev without reCAPTCHA).
 */
export const getNewsletterRecaptchaToken = async (): Promise<string | null> => {
  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY?.trim()
  if (!siteKey) return null

  try {
    await loadRecaptchaScript(siteKey)
  } catch (err) {
    console.error("[recaptcha] Failed to load script:", err)
    return null
  }

  const g = window.grecaptcha
  if (!g) {
    console.warn("[recaptcha] grecaptcha missing after load")
    return null
  }

  return new Promise((resolve) => {
    g.ready(() => {
      void g
        .execute(siteKey, { action: NEWSLETTER_RECAPTCHA_ACTION })
        .then((token) => resolve(token))
        .catch((err) => {
          console.error("[recaptcha] execute failed:", err)
          resolve(null)
        })
    })
  })
}
