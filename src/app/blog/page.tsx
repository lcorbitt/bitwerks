import type { Metadata } from "next"
import Link from "next/link"

import { listPublishedPostsPublic } from "@/lib/blog/queries-public"
import type { BlogPostWithImages } from "@/types/blog"

export const metadata: Metadata = {
  title: "Blog",
  description: "Articles and updates from Your Company.",
}

const listCardImageUrl = (post: BlogPostWithImages): string | null => {
  const cover = post.cover_image_url?.trim()
  if (cover) return cover
  const og = post.og_image_url?.trim()
  if (og) return og
  return null
}

const listCardImageAlt = (post: BlogPostWithImages, imageUrl: string | null): string => {
  if (!imageUrl) return ""
  const fromAttachment = post.images?.find((i) => i.public_url === imageUrl)?.alt?.trim()
  if (fromAttachment) return fromAttachment
  return `${post.title} — cover`
}

export default async function BlogIndexPage() {
  const posts = await listPublishedPostsPublic()

  return (
    <div className="container py-16 md:py-24">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">Blog</h1>
        <p className="mt-3 text-muted-foreground">Thoughts, guides, and updates. Swap this copy in code.</p>

        <div className="mt-10 grid gap-6">
          {posts.map((post) => {
            const thumbUrl = listCardImageUrl(post)
            const thumbAlt = listCardImageAlt(post, thumbUrl)

            return (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="block overflow-hidden rounded-2xl border bg-white/50 transition-colors hover:bg-white dark:bg-black/20 dark:hover:bg-black/30"
              >
                <div className="flex flex-col gap-0 sm:flex-row sm:items-stretch">
                  {thumbUrl ? (
                    <div className="relative aspect-[16/10] w-full shrink-0 overflow-hidden bg-muted/40 sm:aspect-auto sm:min-h-[9rem] sm:w-44 sm:self-stretch md:w-52">
                      <img
                        src={thumbUrl}
                        alt={thumbAlt}
                        className="h-full w-full object-cover sm:absolute sm:inset-0 sm:h-full sm:w-full"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                  ) : null}
                  <div className="flex flex-1 flex-col justify-between gap-4 p-6 sm:min-w-0">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                      <div className="min-w-0">
                        <h2 className="text-xl font-semibold">{post.title}</h2>
                        {post.excerpt ? <p className="mt-2 text-muted-foreground">{post.excerpt}</p> : null}
                      </div>
                      <span className="shrink-0 text-sm text-muted-foreground sm:pt-0.5">
                        {post.published_at ? new Date(post.published_at).toLocaleDateString() : ""}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            )
          })}

          {posts.length === 0 ? (
            <div className="rounded-2xl border bg-white/50 p-6 text-muted-foreground dark:bg-black/20">
              No published posts yet.
            </div>
          ) : null}
        </div>
      </div>
    </div>
  )
}

