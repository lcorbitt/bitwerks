import { postResendEmail } from "./resend"
import type { SendEmailInput, SendEmailResult } from "./types"

const trimEnv = (value: string | undefined): string | undefined => {
  const t = value?.trim()
  return t && t.length > 0 ? t : undefined
}

/**
 * Sends a transactional email via Resend.
 * Requires RESEND_API_KEY and EMAIL_FROM (verified sender in Resend).
 * Intended for server-only use (Server Actions, Route Handlers, cron).
 */
export const sendEmail = async (input: SendEmailInput): Promise<SendEmailResult> => {
  const apiKey = trimEnv(process.env.RESEND_API_KEY)
  const from = trimEnv(process.env.EMAIL_FROM)

  if (!apiKey || !from) {
    const missing = [!apiKey && "RESEND_API_KEY", !from && "EMAIL_FROM"].filter(Boolean).join(", ")
    console.warn(
      `[email] Skipping outbound mail (${missing} not set). Set both in production — including newsletter and contact notifications.`,
    )
    return { ok: false, skipped: true, error: "Email is not configured." }
  }

  const result = await postResendEmail(apiKey, {
    from,
    to: input.to,
    subject: input.subject,
    text: input.text,
    html: input.html,
    reply_to: input.replyTo,
  })

  if (!result.ok) return { ok: false, error: result.error }

  return { ok: true }
}
