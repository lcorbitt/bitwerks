import type { Metadata } from "next"

import { isSupabaseConfigured } from "@/lib/supabase/config"
import { createClient } from "@/lib/supabase/server"
import { getIsAdminUser } from "@/lib/supabase/admin-guard"
import { listAllBlogPostsForAdmin } from "@/lib/blog/queries-admin"

import type { BlogPostWithImages } from "@/types/blog"
import { AdminApp } from "@/app/admin/components/AdminApp"

export const metadata: Metadata = {
  title: "Admin",
  robots: { index: false, follow: false },
}

export const dynamic = "force-dynamic"

export default async function AdminPage() {
  const configured = isSupabaseConfigured()
  if (!configured) return <AdminApp configured={false} />

  const supabase = createClient()
  const { data, error } = await supabase.auth.getUser()
  const user = data.user ?? null

  // No session is normal for logged-out visitors; getUser() still sets `error` in that case.
  if (!user) return <AdminApp configured user={null} isAdmin={false} initialPosts={[]} />

  if (error) throw new Error(error.message)

  const isAdmin = await getIsAdminUser(user.id)
  if (!isAdmin) return <AdminApp configured user={user} isAdmin={false} initialPosts={[]} />

  const initialPosts = await listAllBlogPostsForAdmin()
  return <AdminApp configured user={user} isAdmin initialPosts={initialPosts} />
}

