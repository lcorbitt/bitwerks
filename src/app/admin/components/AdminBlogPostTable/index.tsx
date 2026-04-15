"use client"

import * as React from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"

import type { BlogPostWithImages } from "@/types/blog"

import { createEmptyDraftAction, deletePostAction } from "@/app/admin/actions/blog"

interface AdminBlogPostTableProps {
  initialPosts: BlogPostWithImages[]
}

export const AdminBlogPostTable = ({ initialPosts }: AdminBlogPostTableProps) => {
  const router = useRouter()
  const [posts, setPosts] = React.useState<BlogPostWithImages[]>(initialPosts)
  const [isCreating, setIsCreating] = React.useState(false)
  const [isDeletingId, setIsDeletingId] = React.useState<string | null>(null)

  const onCreateDraft = async () => {
    setIsCreating(true)
    try {
      const created = await createEmptyDraftAction()
      setPosts((prev) => [created, ...prev])
      router.push(`/admin/blog/${created.id}`)
    } finally {
      setIsCreating(false)
    }
  }

  const onDelete = async (postId: string) => {
    setIsDeletingId(postId)
    try {
      await deletePostAction({ postId })
      setPosts((prev) => prev.filter((p) => p.id !== postId))
    } finally {
      setIsDeletingId(null)
    }
  }

  return (
    <div className="grid gap-4">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <button
          type="button"
          className="h-10 rounded-xl bg-brand px-4 text-sm font-medium text-white disabled:opacity-60"
          onClick={onCreateDraft}
          disabled={isCreating}
        >
          {isCreating ? "Creating…" : "New draft"}
        </button>
      </div>

      <div className="overflow-x-auto rounded-xl border bg-background">
        <table className="w-full min-w-[640px] border-collapse text-left text-sm">
          <thead>
            <tr className="border-b bg-muted/40">
              <th className="px-4 py-3 font-medium">Title</th>
              <th className="px-4 py-3 font-medium">Slug</th>
              <th className="px-4 py-3 font-medium">Status</th>
              <th className="px-4 py-3 font-medium">Updated</th>
              <th className="px-4 py-3 font-medium text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post) => (
              <tr key={post.id} className="border-b border-border/60 last:border-0">
                <td className="px-4 py-3 font-medium">{post.title || "Untitled draft"}</td>
                <td className="px-4 py-3 text-muted-foreground">{post.slug ? post.slug : "—"}</td>
                <td className="px-4 py-3">
                  <span className="rounded-full border px-2 py-0.5 text-xs capitalize">{post.status}</span>
                </td>
                <td className="px-4 py-3 text-muted-foreground whitespace-nowrap">
                  {new Date(post.updated_at).toLocaleString()}
                </td>
                <td className="px-4 py-3">
                  <div className="flex flex-wrap items-center justify-end gap-2">
                    <Link
                      href={`/admin/blog/${post.id}`}
                      className="rounded-lg border bg-background px-3 py-1.5 text-xs font-medium hover:bg-muted/60"
                    >
                      Edit
                    </Link>
                    <Link
                      href={`/blog-preview/${post.id}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-lg border border-transparent px-3 py-1.5 text-xs font-medium text-brand underline underline-offset-4"
                    >
                      Preview
                    </Link>
                    {post.status === "published" && post.slug ? (
                      <Link
                        href={`/blog/${post.slug}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-lg border border-transparent px-3 py-1.5 text-xs font-medium text-muted-foreground underline underline-offset-4"
                      >
                        Live
                      </Link>
                    ) : null}
                    <button
                      type="button"
                      className="rounded-lg px-3 py-1.5 text-xs font-medium text-red-600 disabled:opacity-60"
                      onClick={() => onDelete(post.id)}
                      disabled={isDeletingId === post.id}
                    >
                      {isDeletingId === post.id ? "Deleting…" : "Delete"}
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {posts.length === 0 ? (
          <div className="px-4 py-8 text-center text-sm text-muted-foreground">No posts yet. Create a draft to get started.</div>
        ) : null}
      </div>
    </div>
  )
}
