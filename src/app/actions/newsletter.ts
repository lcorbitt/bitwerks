"use server"

import { headers } from "next/headers"
import { z } from "zod"

import { getLatestPublishedPostPublic } from "@/lib/blog/queries-public"
import { notifyNewsletterInbox, sendNewsletterWelcomeEmail } from "@/lib/email"
import { NEWSLETTER_RECAPTCHA_ACTION } from "@/lib/recaptcha/newsletter-action"
import { verifyRecaptchaV3 } from "@/lib/recaptcha/verify-recaptcha-v3"
import { createClient } from "@/lib/supabase/server"
import type { BlogPostWithImages } from "@/types/blog"

const getClientIp = (): string | undefined => {
  const h = headers()
  const xff = h.get("x-forwarded-for")
  if (xff) return xff.split(",")[0]?.trim() || undefined
  return h.get("x-real-ip")?.trim() || undefined
}

const subscribeInputSchema = z.object({
  email: z.string().trim().max(254).email("Enter a valid email address."),
  source: z
    .string()
    .trim()
    .max(64)
    .optional()
    .transform((value) => (value && value.length > 0 ? value : undefined)),
})

export interface SubscribeNewsletterResult {
  ok: boolean
  message?: string
  error?: string
}

export const subscribeNewsletterAction = async (formData: FormData): Promise<SubscribeNewsletterResult> => {
  const parsed = subscribeInputSchema.safeParse({
    email: formData.get("email"),
    source: formData.get("source") ?? undefined,
  })

  if (!parsed.success) {
    const first = parsed.error.flatten().fieldErrors.email?.[0]
    return { ok: false, error: first ?? "Invalid input." }
  }

  const email = parsed.data.email.toLowerCase().trim()
  const source = parsed.data.source

  const recaptchaToken = String(formData.get("recaptchaToken") ?? "").trim()
  const recaptchaSecret = process.env.RECAPTCHA_SECRET_KEY?.trim()
  const isProduction = process.env.NODE_ENV === "production"

  if (isProduction && !recaptchaSecret) {
    console.error("[newsletter] RECAPTCHA_SECRET_KEY is required in production.")
    return { ok: false, error: "Something went wrong. Try again later." }
  }

  if (recaptchaSecret) {
    if (!recaptchaToken) {
      return { ok: false, error: "Could not verify this request. Please refresh and try again." }
    }
    const captcha = await verifyRecaptchaV3({
      token: recaptchaToken,
      remoteip: getClientIp(),
      expectedAction: NEWSLETTER_RECAPTCHA_ACTION,
    })
    if (!captcha.ok) {
      console.warn("[newsletter] reCAPTCHA rejected:", captcha.error, captcha.score)
      return { ok: false, error: "Could not verify you are human. Please try again." }
    }
  }

  const supabase = createClient()

  const { data: alreadyExists, error: existsRpcError } = await supabase.rpc("newsletter_lead_exists", {
    p_email: email,
  })

  if (!existsRpcError && alreadyExists === true) {
    return { ok: false, error: "You’re already subscribed." }
  }

  const { data: inserted, error } = await supabase
    .from("newsletter_leads")
    .insert({
      email,
      source: source ?? null,
    })
    .select("unsubscribe_token")
    .single()

  if (error) {
    if (error.code === "23505") {
      return { ok: false, error: "You’re already subscribed." }
    }
    return { ok: false, error: error.message || "Something went wrong. Try again later." }
  }

  let latestPost: BlogPostWithImages | null = null
  try {
    latestPost = await getLatestPublishedPostPublic()
  } catch (err) {
    console.error("[newsletter] Could not load latest post for welcome email:", err)
  }

  const unsubscribeToken = inserted?.unsubscribe_token
  if (!unsubscribeToken) {
    console.error("[newsletter] Missing unsubscribe_token after insert; skipping welcome email.")
    await notifyNewsletterInbox(email, source)
    return { ok: true, message: "Thanks! You’re on the list." }
  }

  await Promise.all([
    notifyNewsletterInbox(email, source),
    sendNewsletterWelcomeEmail(email, latestPost, unsubscribeToken),
  ])

  return { ok: true, message: "Thanks! You’re on the list." }
}

export type UnsubscribeNewsletterResult =
  | { ok: true }
  | { ok: false; reason: "invalid_token" }
  | { ok: false; reason: "request_failed" }

export const unsubscribeNewsletterLeadAction = async (rawToken: string): Promise<UnsubscribeNewsletterResult> => {
  const trimmed = rawToken?.trim() ?? ""
  const uuid = z.string().uuid().safeParse(trimmed)
  if (!uuid.success) return { ok: false, reason: "invalid_token" }

  const supabase = createClient()
  const { error } = await supabase.rpc("newsletter_lead_unsubscribe_by_token", { p_token: uuid.data })

  if (error) {
    console.error("[newsletter] Unsubscribe RPC failed:", error.message)
    return { ok: false, reason: "request_failed" }
  }

  return { ok: true }
}
