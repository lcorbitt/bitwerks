export interface NewsletterLead {
  id: string
  email: string
  created_at: string
  source: string | null
  /** Present when selected; null while subscribed */
  unsubscribed_at?: string | null
}
