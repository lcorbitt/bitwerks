import type { Metadata } from "next"
import { notFound, redirect } from "next/navigation"

import { BlogPostArticle } from "@/app/insights/components/BlogPostArticle"
import { getBlogPostByIdForAdmin } from "@/lib/blog/queries-admin"
import { isSupabaseConfigured } from "@/lib/supabase/config"
import { getIsAdminUser } from "@/lib/supabase/admin-guard"
import { createClient } from "@/lib/supabase/server"

interface BlogPreviewPageProps {
  params: { postId: string }
}

const previewRobots = { index: false, follow: false } as const

export const dynamic = "force-dynamic"

export const generateMetadata = async ({ params }: BlogPreviewPageProps): Promise<Metadata> => {
  const configured = isSupabaseConfigured()
  if (!configured) return { title: "Preview", robots: previewRobots }

  const supabase = createClient()
  const { data, error } = await supabase.auth.getUser()
  if (error) return { title: "Preview", robots: previewRobots }
  const user = data.user ?? null
  if (!user) return { title: "Preview", robots: previewRobots }
  const isAdmin = await getIsAdminUser(user.id)
  if (!isAdmin) return { title: "Preview", robots: previewRobots }

  const post = await getBlogPostByIdForAdmin(params.postId)
  if (!post) return { title: "Preview", robots: previewRobots }

  return {
    title: `Preview: ${post.title}`,
    description: post.excerpt ?? `Admin preview of "${post.title}".`,
    robots: previewRobots,
  }
}

export default async function BlogPreviewPage({ params }: BlogPreviewPageProps) {
  if (!isSupabaseConfigured()) notFound()

  const supabase = createClient()
  const { data, error } = await supabase.auth.getUser()
  if (error) throw new Error(error.message)

  const user = data.user ?? null
  if (!user) redirect("/admin")

  const isAdmin = await getIsAdminUser(user.id)
  if (!isAdmin) notFound()

  const post = await getBlogPostByIdForAdmin(params.postId)
  if (!post) notFound()

  return <BlogPostArticle post={post} variant="admin-preview" />
}
