/**
 * Server-only: Google reCAPTCHA v3 siteverify.
 * @see https://developers.google.com/recaptcha/docs/v3
 */

const SITE_VERIFY_URL = "https://www.google.com/recaptcha/api/siteverify"

export interface VerifyRecaptchaV3Input {
  token: string
  remoteip?: string
  expectedAction: string
}

export interface VerifyRecaptchaV3Result {
  ok: boolean
  score?: number
  /** For logs only; do not expose to clients */
  error?: string
}

interface SiteverifyJson {
  success: boolean
  score?: number
  action?: string
  challenge_ts?: string
  hostname?: string
  "error-codes"?: string[]
}

const clampScore = (value: number) => Math.min(Math.max(value, 0), 1)

export const verifyRecaptchaV3 = async (input: VerifyRecaptchaV3Input): Promise<VerifyRecaptchaV3Result> => {
  const secret = process.env.RECAPTCHA_SECRET_KEY?.trim()
  if (!secret) return { ok: false, error: "missing_secret" }

  const token = input.token.trim()
  if (!token) return { ok: false, error: "missing_token" }

  const rawMin = Number(process.env.RECAPTCHA_MIN_SCORE ?? 0.5)
  const minScore = clampScore(Number.isFinite(rawMin) ? rawMin : 0.5)

  const body = new URLSearchParams()
  body.set("secret", secret)
  body.set("response", token)
  if (input.remoteip) body.set("remoteip", input.remoteip)

  let data: SiteverifyJson
  try {
    const res = await fetch(SITE_VERIFY_URL, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body,
    })
    if (!res.ok) return { ok: false, error: `siteverify_http_${res.status}` }
    data = (await res.json()) as SiteverifyJson
  } catch {
    return { ok: false, error: "siteverify_fetch_failed" }
  }

  if (!data.success) {
    return { ok: false, error: data["error-codes"]?.join(",") ?? "verify_failed" }
  }

  if (data.action && data.action !== input.expectedAction) {
    return { ok: false, error: "action_mismatch", score: data.score }
  }

  const score = typeof data.score === "number" ? data.score : 0
  if (score < minScore) {
    return { ok: false, error: "low_score", score }
  }

  return { ok: true, score }
}
