export interface SendEmailInput {
  to: string | string[]
  subject: string
  text: string
  html?: string
  replyTo?: string | string[]
}

export interface SendEmailResult {
  ok: boolean
  skipped?: boolean
  error?: string
}
