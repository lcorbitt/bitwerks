import { createClient } from "@/lib/supabase/server"
import type { NewsletterLead } from "@/types/newsletter"

export const listNewsletterLeadsForAdmin = async (): Promise<NewsletterLead[]> => {
  const supabase = createClient()
  const { data, error } = await supabase
    .from("newsletter_leads")
    .select("id, email, created_at, source, unsubscribed_at")
    .order("created_at", { ascending: false })

  if (error) throw new Error(error.message)
  return (data ?? []) as NewsletterLead[]
}
