import { getSiteBaseUrl } from "@/lib/blog/site-base-url"

/**
 * Public unsubscribe link for newsletter / insights mail.
 * `user_id` holds the opaque `unsubscribe_token` (not an auth user id).
 */
export const buildNewsletterUnsubscribeUrl = (unsubscribeToken: string): string => {
  const base = getSiteBaseUrl().replace(/\/$/, "")
  const params = new URLSearchParams({ user_id: unsubscribeToken })
  return `${base}/unsubscribe?${params.toString()}`
}
