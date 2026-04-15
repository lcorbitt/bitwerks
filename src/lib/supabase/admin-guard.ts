import { notFound, redirect } from "next/navigation"

import { isSupabaseConfigured } from "@/lib/supabase/config"
import { createClient } from "@/lib/supabase/server"

export const getIsAdminUser = async (userId: string): Promise<boolean> => {
  const supabase = createClient()
  const { data, error } = await supabase.from("admin_users").select("user_id").eq("user_id", userId).maybeSingle()
  if (error) throw new Error(error.message)
  return Boolean(data?.user_id)
}

/** Use in server pages under `/admin/...` that require an allowlisted admin session. */
export const requireAdminSession = async (): Promise<{ userId: string }> => {
  if (!isSupabaseConfigured()) redirect("/admin")

  const supabase = createClient()
  const { data, error } = await supabase.auth.getUser()
  if (error) throw new Error(error.message)

  const user = data.user ?? null
  if (!user) redirect("/admin")

  const isAdmin = await getIsAdminUser(user.id)
  if (!isAdmin) notFound()

  return { userId: user.id }
}
