"use server"

import { z } from "zod"

import { createClient } from "@/lib/supabase/server"

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

  const supabase = createClient()
  const { error } = await supabase.from("newsletter_leads").insert({
    email,
    source: source ?? null,
  })

  if (error) {
    if (error.code === "23505") {
      return { ok: true, message: "You’re already subscribed." }
    }
    return { ok: false, error: error.message || "Something went wrong. Try again later." }
  }

  return { ok: true, message: "Thanks — you’re on the list." }
}
