import { getSiteBaseUrl } from "@/lib/blog/site-base-url"
import { getPostListImageUrl, toAbsoluteMediaUrl } from "@/lib/blog/post-preview-media"
import { buildNewsletterUnsubscribeUrl } from "@/lib/newsletter/unsubscribe-url"
import type { BlogPostWithImages } from "@/types/blog"

import { BITWERKS_FACEBOOK_URL, BITWERKS_LINKEDIN_URL } from "@/lib/social-links"

import { escapeHtml } from "./html-escape"
import { sendEmail } from "./send-email"

/** Mirrors `tailwind.config.ts` / site UI for transactional HTML. */
const BRAND = "#F66135"
const ACCENT = "#1fb890"
const TEXT = "#000000"
const MUTED = "#838383"
const BORDER = "#e5e5e5"
const PAGE_BG = "#F6F7F8"

const trimEnv = (value: string | undefined): string | undefined => {
  const t = value?.trim()
  return t && t.length > 0 ? t : undefined
}

const emailPostImageAlt = (post: BlogPostWithImages): string => {
  const url = getPostListImageUrl(post)
  const fromAttachment = url ? post.images?.find((i) => i.public_url === url)?.alt?.trim() : undefined
  if (fromAttachment) return fromAttachment
  return `${post.title} cover`
}

const buildWelcomeCopy = (baseUrl: string, latestPost: BlogPostWithImages | null, unsubscribeUrl: string) => {
  const base = baseUrl.replace(/\/$/, "")
  const insightsUrl = `${base}/insights`
  const privacyUrl = `${base}/privacy-policy`
  const latestUrl = latestPost ? `${base}/insights/${latestPost.slug}` : insightsUrl
  const safeTitle = latestPost ? escapeHtml(latestPost.title) : ""
  const excerpt = latestPost?.excerpt?.trim()
  const safeExcerpt = excerpt ? escapeHtml(excerpt) : ""
  const listImageUrl = latestPost ? toAbsoluteMediaUrl(getPostListImageUrl(latestPost), base) : null
  const safeListImageAlt = latestPost ? escapeHtml(emailPostImageAlt(latestPost)) : ""
  const logoSrc = `${base}/logo-light.png`
  const copyrightYear = new Date().getFullYear()
  const copyrightLine = `© 2017 - ${copyrightYear} BitWerks. All rights reserved.`
  const unsubscribeNotice =
    "This promotional message has been sent to you because you are currently subscribed to 'BitWerks: Insights'. To unsubscribe, click here:"
  const socialLine = `Facebook: ${BITWERKS_FACEBOOK_URL}\nLinkedIn: ${BITWERKS_LINKEDIN_URL}`

  const textLines = [
    "You're in.",
    "",
    "We will email you when we publish new insights.",
    "",
    latestPost
      ? `Latest: ${latestPost.title}\n${latestUrl}${excerpt ? `\n\n${excerpt}` : ""}`
      : `Browse published notes: ${insightsUrl}`,
    "",
    `All insights: ${insightsUrl}`,
    "",
    "BitWerks",
    "",
    socialLine,
    "",
    `${unsubscribeNotice} ${unsubscribeUrl}`,
    "",
    `Privacy policy: ${privacyUrl}`,
    "",
    copyrightLine,
  ]

  const latestImageRow =
    latestPost && listImageUrl
      ? `
              <tr>
                <td style="padding:0;line-height:0;font-size:0;">
                  <a href="${latestUrl}" style="text-decoration:none;">
                    <img
                      src="${listImageUrl}"
                      alt="${safeListImageAlt}"
                      width="560"
                      style="display:block;width:100%;max-width:560px;height:auto;border:0;border-radius:12px 12px 0 0;"
                    />
                  </a>
                </td>
              </tr>
            `.trim()
      : ""

  const latestBlock = latestPost
    ? `
            <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="margin:0 0 28px;border:1px solid ${BORDER};border-radius:12px;overflow:hidden;background:#ffffff;">
              ${latestImageRow}
              <tr>
                <td style="padding:${listImageUrl ? "20px 22px 22px" : "22px"};">
                  <p style="margin:0 0 8px;font-size:11px;font-weight:600;letter-spacing:0.08em;text-transform:uppercase;color:${MUTED};">
                    Latest insight
                  </p>
                  <p style="margin:0 0 10px;font-size:18px;line-height:1.35;font-weight:600;color:${TEXT};">
                    ${safeTitle}
                  </p>
                  ${
                    safeExcerpt
                      ? `<p style="margin:0 0 18px;font-size:15px;line-height:1.55;color:${MUTED};">${safeExcerpt}</p>`
                      : ""
                  }
                  <a href="${latestUrl}" style="display:inline-block;padding:12px 22px;background:${BRAND};color:#ffffff !important;text-decoration:none;border-radius:6px;font-size:15px;font-weight:600;">
                    Read
                  </a>
                </td>
              </tr>
            </table>
          `.trim()
    : `
            <p style="margin:0;font-size:15px;line-height:1.6;color:${MUTED};">
              New stories will appear on the insights page as soon as they go live.
            </p>
          `.trim()

  const insightsCtaRow = `
            <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
              <tr>
                <td align="center" style="padding:${latestPost ? "8px 0 0" : "22px 0 0"};">
                  <a href="${insightsUrl}" style="display:inline-block;padding:12px 26px;background:${BRAND};color:#ffffff !important;text-decoration:none;border-radius:6px;font-size:15px;font-weight:600;">
                    Browse Insights
                  </a>
                </td>
              </tr>
            </table>
          `.trim()

  const html = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>BitWerks</title>
  </head>
  <body style="margin:0;padding:0;background:${PAGE_BG};font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif;">
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:${PAGE_BG};padding:28px 16px;">
      <tr>
        <td align="center">
          <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:560px;">
            <tr>
              <td style="background:#ffffff;border:1px solid ${BORDER};border-radius:12px;padding:28px 28px 24px;border-top:3px solid ${BRAND};">
                <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                  <tr>
                    <td align="center" style="padding:0 0 22px;">
                      <a href="${base}/" style="text-decoration:none;display:inline-block;">
                        <img src="${logoSrc}" alt="BitWerks" width="220" height="67" style="display:block;height:67px;width:auto;max-width:220px;margin:0 auto;border:0;" />
                      </a>
                    </td>
                  </tr>
                </table>
                <h1 style="margin:0 0 14px;font-size:22px;line-height:1.3;font-weight:700;color:${TEXT};letter-spacing:-0.02em;">
                  You're in.
                </h1>
                <p style="margin:0 0 26px;font-size:15px;line-height:1.6;color:${MUTED};">
                  We will only email you when we publish something new. The full archive is always on the site.
                </p>
                ${latestBlock}
                ${insightsCtaRow}
              </td>
            </tr>
            <tr>
              <td style="padding:26px 8px 0;text-align:center;">
                <table role="presentation" cellspacing="0" cellpadding="0" align="center" style="margin:0 auto;">
                  <tr>
                    <td style="padding:0 8px 0 0;">
                      <a href="${BITWERKS_FACEBOOK_URL}" style="text-decoration:none;display:inline-block;" aria-label="BitWerks on Facebook">
                        <span style="display:inline-block;width:44px;height:44px;line-height:44px;border-radius:999px;background:#1877F2;color:#ffffff;font-size:22px;font-weight:700;font-family:Georgia,'Times New Roman',serif;text-align:center;">f</span>
                      </a>
                    </td>
                    <td style="padding:0;">
                      <a href="${BITWERKS_LINKEDIN_URL}" style="text-decoration:none;display:inline-block;" aria-label="BitWerks on LinkedIn">
                        <span style="display:inline-block;width:44px;height:44px;line-height:44px;border-radius:999px;background:#0A66C2;color:#ffffff;font-size:13px;font-weight:700;font-family:ui-sans-serif,system-ui,sans-serif;text-align:center;letter-spacing:-0.02em;">in</span>
                      </a>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td style="padding:18px 12px 0;text-align:center;font-size:12px;line-height:1.6;color:${MUTED};">
                This promotional message has been sent to you because you are currently subscribed to BitWerks: Insights. To unsubscribe, click
                <a href="${unsubscribeUrl}" style="color:${ACCENT};font-weight:600;text-decoration:underline;">here</a>.
              </td>
            </tr>
            <tr>
              <td style="padding:16px 8px 0;text-align:center;font-size:12px;line-height:1.5;">
                <a href="${privacyUrl}" style="color:${ACCENT};font-weight:600;text-decoration:none;">Privacy policy</a>
              </td>
            </tr>
            <tr>
              <td style="padding:10px 12px 28px;text-align:center;font-size:11px;line-height:1.5;color:${MUTED};">
                ${escapeHtml(copyrightLine)}
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
      subject: "Thanks for subscribing to BitWerks",
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
