interface ResendCreateEmailPayload {
  from: string
  to: string | string[]
  subject: string
  text?: string
  html?: string
  reply_to?: string | string[]
}

interface ResendErrorBody {
  message?: string
}

const RESEND_API_URL = "https://api.resend.com/emails"

export const postResendEmail = async (
  apiKey: string,
  payload: ResendCreateEmailPayload,
): Promise<{ ok: true } | { ok: false; error: string }> => {
  const response = await fetch(RESEND_API_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  })

  if (response.ok) return { ok: true }

  let message = `Resend request failed (${response.status})`
  try {
    const body = (await response.json()) as ResendErrorBody
    if (body.message) message = body.message
  } catch {
    // ignore JSON parse errors
  }

  return { ok: false, error: message }
}
