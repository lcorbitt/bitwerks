"use server"

import { notifyContactFormInbox } from "@/lib/email"
import { createClient } from "@/lib/supabase/server"

import { contactFormSchema } from "@/app/contact/components/ContactForm/schemas"

export interface SubmitContactResult {
  ok: boolean
  error?: string
}

export const submitContactAction = async (input: unknown): Promise<SubmitContactResult> => {
  const parsed = contactFormSchema.safeParse(input)

  if (!parsed.success) {
    const first =
      parsed.error.flatten().fieldErrors.name?.[0] ??
      parsed.error.flatten().fieldErrors.email?.[0] ??
      parsed.error.flatten().fieldErrors.projectType?.[0] ??
      parsed.error.flatten().fieldErrors.projectScope?.[0] ??
      parsed.error.flatten().fieldErrors.timeline?.[0] ??
      parsed.error.flatten().fieldErrors.message?.[0] ??
      parsed.error.flatten().formErrors[0]
    return { ok: false, error: first ?? "Invalid input." }
  }

  const data = parsed.data
  const company = data.company?.trim()
  const supabase = createClient()

  const { error } = await supabase.from("contact_form_submissions").insert({
    name: data.name.trim(),
    email: data.email.trim().toLowerCase(),
    company: company && company.length > 0 ? company : null,
    project_type: data.projectType,
    project_scope: data.projectScope,
    timeline: data.timeline,
    message: data.message.trim(),
  })

  if (error) {
    return { ok: false, error: error.message || "Something went wrong. Try again later." }
  }

  await notifyContactFormInbox(data)

  return { ok: true }
}
