"use client"

import * as React from "react"
import Link from "next/link"

import type { BlogPostWithImages } from "@/types/blog"

import { BlogLayerEditor } from "@/app/admin/components/AdminBlogPanel/components/BlogLayerEditor"

interface AdminBlogEditorClientProps {
  initialPost: BlogPostWithImages
}

export const AdminBlogEditorClient = ({ initialPost }: AdminBlogEditorClientProps) => {
  const [post, setPost] = React.useState(initialPost)

  React.useEffect(() => {
    setPost(initialPost)
  }, [initialPost])

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-background">
      <div className="border-b bg-muted/20">
        <div className="container flex flex-wrap items-center justify-between gap-4 py-4">
          <div className="flex flex-wrap items-center gap-4">
            <Link href="/admin" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              ← Admin
            </Link>
            <div className="h-4 w-px bg-border" aria-hidden />
            <h1 className="text-lg font-semibold tracking-tight">Blog editor</h1>
          </div>
          <div className="flex flex-wrap items-center gap-3 text-sm">
            <Link
              href={`/blog-preview/${post.id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand underline underline-offset-4"
            >
              Layout preview
            </Link>
            {post.status === "published" && post.slug ? (
              <Link href={`/blog/${post.slug}`} target="_blank" rel="noopener noreferrer" className="text-muted-foreground underline underline-offset-4">
                Live post
              </Link>
            ) : null}
          </div>
        </div>
      </div>

      <div className="container max-w-6xl py-8 md:py-10">
        <BlogLayerEditor key={post.id} post={post} onPostChange={setPost} />
      </div>
    </div>
  )
}
