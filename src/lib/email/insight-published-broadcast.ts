import type { SupabaseClient } from "@supabase/supabase-js"

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

interface NewsletterLeadRecipient {
  email: string
  unsubscribe_token: string
}

const pickHeroImageUrl = (post: BlogPostWithImages): string | null => {
  const og = post.og_image_url?.trim()
  if (og) return og
  const cover = post.cover_image_url?.trim()
  if (cover) return cover
  return null
}

const buildInsightEmail = (params: {
  post: BlogPostWithImages
  baseUrl: string
  unsubscribeUrl: string
}) => {
  const { post, baseUrl, unsubscribeUrl } = params
  const postUrl = `${baseUrl}/insights/${post.slug}`
  const hero = pickHeroImageUrl(post)
  const safeTitle = escapeHtml(post.title)
  const excerpt = post.excerpt?.trim()
  const safeExcerpt = excerpt ? escapeHtml(excerpt) : ""
  const metaDescription = post.meta_description?.trim()
  const teaser =
    safeExcerpt ||
    (metaDescription ? escapeHtml(metaDescription) : "A fresh note from the Bitwerks insights library — open it when you have a few quiet minutes.")

  const textLines = [
    "We published a new insight you might enjoy.",
    "",
    post.title,
    postUrl,
    "",
    excerpt || metaDescription || "",
    "",
    `Read on the site: ${postUrl}`,
    "",
    "Prefer fewer emails? You can leave the list anytime:",
    unsubscribeUrl,
    "",
    `You are receiving this because you joined the Bitwerks list at ${baseUrl}.`,
  ]

  const heroBlock = hero
    ? `
    <a href="${postUrl}" style="display:block;text-decoration:none;">
      <img src="${escapeHtml(hero)}" alt="${safeTitle}" width="560" style="width:100%;max-width:560px;height:auto;border-radius:12px;border:1px solid ${BORDER};display:block;" />
    </a>
  `.trim()
    : ""

  const html = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${safeTitle}</title>
  </head>
  <body style="margin:0;padding:0;background:${PAGE_BG};font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif;">
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:${PAGE_BG};padding:32px 16px;">
      <tr>
        <td align="center">
          <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:560px;">
            <tr>
              <td style="padding:8px 4px 20px;font-size:13px;font-weight:600;letter-spacing:0.04em;color:${MUTED};">
                Bitwerks · Insights
              </td>
            </tr>
            <tr>
              <td style="background:#ffffff;border:1px solid ${BORDER};border-radius:16px;padding:28px 28px 26px;">
                <p style="margin:0 0 14px;font-size:12px;font-weight:600;letter-spacing:0.08em;text-transform:uppercase;color:${MUTED};">
                  New insight
                </p>
                <h1 style="margin:0 0 16px;font-size:22px;line-height:1.25;font-weight:700;color:${TEXT};">
                  ${safeTitle}
                </h1>
                ${heroBlock ? `<div style="margin:0 0 18px;">${heroBlock}</div>` : ""}
                <p style="margin:0 0 22px;font-size:15px;line-height:1.65;color:${MUTED};">
                  ${teaser}
                </p>
                <a href="${postUrl}" style="display:inline-block;padding:12px 22px;background:${ACCENT};color:#ffffff !important;text-decoration:none;border-radius:8px;font-size:15px;font-weight:600;">
                  Read the full piece
                </a>
                <p style="margin:22px 0 0;font-size:14px;line-height:1.55;color:${MUTED};">
                  This note is meant as a preview — the full story, examples, and nuance live on the site.
                </p>
              </td>
            </tr>
            <tr>
              <td style="padding:22px 8px 0;text-align:center;">
                <a href="${unsubscribeUrl}" style="display:inline-block;padding:10px 18px;border:1px solid ${BORDER};border-radius:999px;background:#ffffff;color:${MUTED} !important;text-decoration:none;font-size:12px;font-weight:600;letter-spacing:0.02em;">
                  Unsubscribe from insights mail
                </a>
              </td>
            </tr>
            <tr>
              <td style="padding:14px 8px 0;text-align:center;font-size:12px;line-height:1.55;color:${MUTED};">
                You joined the Bitwerks list to hear when we publish. If that is no longer useful, the button above removes you quietly — no account required.
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>
  `.trim()

  return { text: textLines.join("\n"), html }
}

/**
 * Sends a concise “new insight” email to active newsletter subscribers only.
 * Recipients come from `newsletter_leads_for_insight_broadcast()` (unsubscribed_at is null).
 * Intended to run only on the first transition from draft → published for a post.
 */
export const sendInsightPublishedToLeads = async (params: {
  supabase: SupabaseClient
  post: BlogPostWithImages
}): Promise<void> => {
  const { supabase, post } = params

  if (post.status !== "published" || !post.slug?.trim()) return

  const { data: leads, error } = await supabase.rpc("newsletter_leads_for_insight_broadcast")

  if (error) {
    console.error("[email] Could not load subscribed newsletter leads for insight broadcast:", error.message)
    return
  }

  const rawRecipients = (leads ?? []) as NewsletterLeadRecipient[]
  const recipients = rawRecipients.filter(
    (lead) => lead.email.trim().length > 0 && String(lead.unsubscribe_token).trim().length > 0,
  )
  if (!recipients.length) return

  const baseUrl = getSiteBaseUrl()
  const replyTo = trimEnv(process.env.NEWSLETTER_REPLY_TO) ?? trimEnv(process.env.CONTACT_FORM_EMAIL)

  const batchSize = 5
  const results: Awaited<ReturnType<typeof sendEmail>>[] = []

  for (let i = 0; i < recipients.length; i += batchSize) {
    const batch = recipients.slice(i, i + batchSize)
    const batchResults = await Promise.all(
      batch.map(async (lead) => {
        const normalized = lead.email.toLowerCase().trim()
        const unsubscribeUrl = buildNewsletterUnsubscribeUrl(lead.unsubscribe_token)
        const { text, html } = buildInsightEmail({ post, baseUrl, unsubscribeUrl })

        return sendEmail({
          to: normalized,
          subject: `New Bitwerks insight — ${post.title}`,
          text,
          html,
          ...(replyTo ? { replyTo } : {}),
        })
      }),
    )
    results.push(...batchResults)
  }

  const failures = results.filter((r) => !r.ok && !r.skipped).length
  if (failures) {
    console.error(`[email] Insight broadcast completed with ${failures} failed sends.`)
  }
}
