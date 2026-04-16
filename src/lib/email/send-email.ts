import { postResendEmail } from "./resend"
import type { SendEmailInput, SendEmailResult } from "./types"

const trimEnv = (value: string | undefined): string | undefined => {
  const t = value?.trim()
  return t && t.length > 0 ? t : undefined
}

/** Parses `Name <addr@host>` or `addr@host`. */
const parseAddressFromFromHeader = (fromHeader: string): string => {
  const trimmed = fromHeader.trim()
  const angle = trimmed.match(/<([^>]+)>/)
  return (angle ? angle[1] : trimmed).trim()
}

const domainOfEmail = (emailAddr: string): string | null => {
  const at = emailAddr.lastIndexOf("@")
  if (at < 1 || at === emailAddr.length - 1) return null
  return emailAddr.slice(at + 1).toLowerCase()
}

/**
 * Resend only allows Reply-To on the same verified domain as `from`.
 * Using a subscriber’s @gmail.com (or any other domain) triggers:
 * "The gmail.com domain is not verified…"
 */
const replyToAllowedForFrom = (replyTo: string | undefined, fromHeader: string): string | undefined => {
  if (!replyTo?.trim()) return undefined
  const sendingDomain = domainOfEmail(parseAddressFromFromHeader(fromHeader))
  const replyDomain = domainOfEmail(replyTo.trim().toLowerCase())
  if (!sendingDomain || !replyDomain) return undefined
  if (replyDomain !== sendingDomain) return undefined
  return replyTo.trim().toLowerCase()
}

const sanitizeReplyToForResend = (
  replyTo: string | string[] | undefined,
  fromHeader: string,
): string | string[] | undefined => {
  if (!replyTo) return undefined
  if (Array.isArray(replyTo)) {
    const allowed = replyTo
      .map((addr) => replyToAllowedForFrom(addr?.trim(), fromHeader))
      .filter((v): v is string => Boolean(v))
    if (!allowed.length) return undefined
    return allowed.length === 1 ? allowed[0] : allowed
  }
  return replyToAllowedForFrom(replyTo, fromHeader)
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

  const reply_to = sanitizeReplyToForResend(input.replyTo, from)

  const result = await postResendEmail(apiKey, {
    from,
    to: input.to,
    subject: input.subject,
    text: input.text,
    html: input.html,
    ...(reply_to ? { reply_to } : {}),
  })

  if (!result.ok) return { ok: false, error: result.error }

  return { ok: true }
}
