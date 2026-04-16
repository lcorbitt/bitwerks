import { getSiteBaseUrl } from "@/lib/blog/site-base-url"
import { buildNewsletterUnsubscribeUrl } from "@/lib/newsletter/unsubscribe-url"
import type { BlogPostWithImages } from "@/types/blog"

import { escapeHtml } from "./html-escape"
import { sendEmail } from "./send-email"

const ACCENT = "#1fb890"
const TEXT = "#0f172a"
const MUTED = "#64748b"
const BORDER = "#e2e8f0"
const PAGE_BG = "#f1f5f9"

const trimEnv = (value: string | undefined): string | undefined => {
  const t = value?.trim()
  return t && t.length > 0 ? t : undefined
}

const buildWelcomeCopy = (baseUrl: string, latestPost: BlogPostWithImages | null, unsubscribeUrl: string) => {
  const insightsUrl = `${baseUrl}/insights`
  const latestUrl = latestPost ? `${baseUrl}/insights/${latestPost.slug}` : insightsUrl
  const safeTitle = latestPost ? escapeHtml(latestPost.title) : ""
  const excerpt = latestPost?.excerpt?.trim()
  const safeExcerpt = excerpt ? escapeHtml(excerpt) : ""

  const textLines = [
    "Welcome — and thanks for subscribing.",
    "",
    "You’ll get occasional notes from Bitwerks: practical ideas on web development, product craft, and what we’re learning in the studio. No fluff in your inbox every day — just signal when we have something worth your time.",
    "",
    "What you can expect:",
    "• Short, edited updates when we publish new insights or ship something meaningful.",
    "• A direct line to our best thinking — frameworks, tradeoffs, and lessons from real client work.",
    "• Respect for your attention — we send mail when we have something useful, not to fill a calendar slot.",
    "",
    latestPost
      ? `A good place to start — our most recent piece:\n${latestPost.title}\n${latestUrl}\n${excerpt ? `\n${excerpt}\n` : ""}`
      : `Browse every published note anytime:\n${insightsUrl}`,
    "",
    `All insights: ${insightsUrl}`,
    "",
    "— The Bitwerks team",
    "",
    `You received this email because you subscribed at ${baseUrl}.`,
    "",
    "Unsubscribe anytime (no account required):",
    unsubscribeUrl,
  ]

  const benefitBlock = `
    <p style="margin:0 0 16px;font-size:16px;line-height:1.6;color:${TEXT};">
      Here is what that means for you in practice:
    </p>
    <ul style="margin:0 0 24px;padding:0 0 0 22px;color:${TEXT};font-size:15px;line-height:1.65;">
      <li style="margin:0 0 10px;"><strong style="color:${TEXT};">Curated depth</strong> — longer-form insights when a topic deserves it, not endless notifications.</li>
      <li style="margin:0 0 10px;"><strong style="color:${TEXT};">Build-focused</strong> — patterns, performance, and product decisions you can borrow for your own work.</li>
      <li style="margin:0;"><strong style="color:${TEXT};">Human tone</strong> — we write like we talk with clients: clear, direct, and edited.</li>
    </ul>
  `.trim()

  const latestBlock = latestPost
    ? `
    <div style="margin:0 0 28px;padding:20px 22px;border:1px solid ${BORDER};border-radius:12px;background:#ffffff;">
      <p style="margin:0 0 8px;font-size:12px;font-weight:600;letter-spacing:0.06em;text-transform:uppercase;color:${MUTED};">
        Start here
      </p>
      <p style="margin:0 0 10px;font-size:18px;line-height:1.35;font-weight:600;color:${TEXT};">
        ${safeTitle}
      </p>
      ${
        safeExcerpt
          ? `<p style="margin:0 0 18px;font-size:15px;line-height:1.55;color:${MUTED};">${safeExcerpt}</p>`
          : `<p style="margin:0 0 18px;font-size:15px;line-height:1.55;color:${MUTED};">Our newest published note — open it when you have a quiet moment with coffee.</p>`
      }
      <a href="${latestUrl}" style="display:inline-block;padding:12px 22px;background:${ACCENT};color:#ffffff !important;text-decoration:none;border-radius:8px;font-size:15px;font-weight:600;">
        Read the latest insight
      </a>
    </div>
  `.trim()
    : `
    <p style="margin:0 0 24px;font-size:15px;line-height:1.6;color:${MUTED};">
      We are polishing the next stories for the library. In the meantime, you can explore everything we have published on the insights index — new pieces will land in your inbox as soon as they go live.
    </p>
    <a href="${insightsUrl}" style="display:inline-block;padding:12px 22px;background:${ACCENT};color:#ffffff !important;text-decoration:none;border-radius:8px;font-size:15px;font-weight:600;">
      Browse insights
    </a>
  `.trim()

  const html = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Welcome to Bitwerks</title>
  </head>
  <body style="margin:0;padding:0;background:${PAGE_BG};font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif;">
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:${PAGE_BG};padding:32px 16px;">
      <tr>
        <td align="center">
          <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:560px;">
            <tr>
              <td style="padding:8px 4px 20px;font-size:13px;font-weight:600;letter-spacing:0.04em;color:${MUTED};">
                Bitwerks
              </td>
            </tr>
            <tr>
              <td style="background:#ffffff;border:1px solid ${BORDER};border-radius:16px;padding:36px 32px 32px;">
                <h1 style="margin:0 0 12px;font-size:24px;line-height:1.25;font-weight:700;color:${TEXT};">
                  You are on the list
                </h1>
                <p style="margin:0 0 24px;font-size:16px;line-height:1.6;color:${TEXT};">
                  From time to time we will share <strong style="color:${TEXT};">insights from the work we do</strong>: shipping fast without breaking things, sharpening product UX, and the occasional opinion we have earned the hard way.
                </p>
                ${benefitBlock}
                ${latestBlock}
                <p style="margin:28px 0 0;font-size:15px;line-height:1.6;color:${TEXT};">
                  Want the full archive? <a href="${insightsUrl}" style="color:${ACCENT};font-weight:600;text-decoration:none;">Visit the insights hub</a> — everything lives there, searchable and shareable.
                </p>
                <p style="margin:20px 0 0;font-size:15px;line-height:1.6;color:${TEXT};">
                  If you ever have a question or a topic you would like us to unpack, just hit reply. We read thoughtful notes.
                </p>
                <p style="margin:28px 0 0;font-size:15px;line-height:1.5;color:${TEXT};">
                  Warmly,<br />
                  <span style="font-weight:600;">The Bitwerks team</span>
                </p>
              </td>
            </tr>
            <tr>
              <td style="padding:24px 8px 0;text-align:center;font-size:12px;line-height:1.5;color:${MUTED};">
                You are receiving this because you subscribed for updates at ${escapeHtml(baseUrl.replace(/^https?:\/\//, ""))}.
              </td>
            </tr>
            <tr>
              <td style="padding:16px 8px 0;text-align:center;">
                <a href="${unsubscribeUrl}" style="display:inline-block;padding:10px 18px;border:1px solid ${BORDER};border-radius:999px;background:#ffffff;color:${MUTED} !important;text-decoration:none;font-size:12px;font-weight:600;letter-spacing:0.02em;">
                  Unsubscribe
                </a>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>
  `.trim()

  return { text: textLines.filter(Boolean).join("\n"), html }
}

/**
 * Sends a subscriber-facing welcome email after a newsletter lead is stored.
 * Failures are logged; they do not affect whether the signup is considered successful.
 */
export const sendNewsletterWelcomeEmail = async (
  subscriberEmail: string,
  latestPost: BlogPostWithImages | null,
  unsubscribeToken: string,
) => {
  try {
    const baseUrl = getSiteBaseUrl()
    const normalized = subscriberEmail.toLowerCase().trim()
    const unsubscribeUrl = buildNewsletterUnsubscribeUrl(unsubscribeToken)
    const { text, html } = buildWelcomeCopy(baseUrl, latestPost, unsubscribeUrl)

    const replyTo =
      trimEnv(process.env.NEWSLETTER_REPLY_TO) ?? trimEnv(process.env.CONTACT_FORM_EMAIL)

    const result = await sendEmail({
      to: normalized,
      subject: "Welcome — here is what you unlocked at Bitwerks",
      text,
      html,
      ...(replyTo ? { replyTo } : {}),
    })

    if (!result.ok && !result.skipped) {
      console.error("[email] Newsletter welcome email failed:", result.error)
    }
  } catch (err) {
    console.error("[email] Newsletter welcome email threw:", err)
  }
}
