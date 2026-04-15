import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { AdminBlogEditorClient } from "./blog-editor-client"
import { getBlogPostByIdForAdmin } from "@/lib/blog/queries-admin"
import { isSupabaseConfigured } from "@/lib/supabase/config"
import { requireAdminSession } from "@/lib/supabase/admin-guard"

interface AdminBlogEditorPageProps {
  params: { postId: string }
}

const adminRobots = { index: false, follow: false } as const

export const dynamic = "force-dynamic"

export const generateMetadata = async ({ params }: AdminBlogEditorPageProps): Promise<Metadata> => {
  if (!isSupabaseConfigured()) return { title: "Edit post", robots: adminRobots }

  await requireAdminSession()
  const post = await getBlogPostByIdForAdmin(params.postId)
  if (!post) return { title: "Edit post", robots: adminRobots }

  return {
    title: `Edit: ${post.title}`,
    robots: adminRobots,
  }
}

export default async function AdminBlogEditorPage({ params }: AdminBlogEditorPageProps) {
  if (!isSupabaseConfigured()) notFound()

  await requireAdminSession()

  const post = await getBlogPostByIdForAdmin(params.postId)
  if (!post) notFound()

  return <AdminBlogEditorClient initialPost={post} />
}
