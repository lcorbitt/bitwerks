"use client"

import type { BlogPostWithImages } from "@/types/blog"

import { AdminBlogPostTable } from "@/app/admin/components/AdminBlogPostTable"
import { ADMIN_BLOG_PANEL } from "./constants"

interface AdminBlogPanelProps {
  initialPosts: BlogPostWithImages[]
}

export const AdminBlogPanel = ({ initialPosts }: AdminBlogPanelProps) => {
  return (
    <section className="rounded-2xl border bg-white/50 p-6 dark:bg-black/20">
      <div className="mb-6">
        <h2 className="text-lg font-semibold">{ADMIN_BLOG_PANEL.title}</h2>
        <p className="mt-1 text-sm text-muted-foreground">{ADMIN_BLOG_PANEL.subtitle}</p>
      </div>
      <AdminBlogPostTable initialPosts={initialPosts} />
    </section>
  )
}
