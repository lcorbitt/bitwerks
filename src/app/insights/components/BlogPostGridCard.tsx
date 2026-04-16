import Image from "next/image"
import Link from "next/link"

import type { BlogPostWithImages } from "@/types/blog"
import { formatPublishedDate, getPostListImageAlt, getPostListImageUrl } from "@/lib/blog/post-preview-media"

interface BlogPostGridCardProps {
  post: BlogPostWithImages
}

export const BlogPostGridCard = ({ post }: BlogPostGridCardProps) => {
  const imageUrl = getPostListImageUrl(post)
  const imageAlt = getPostListImageAlt(post, imageUrl)
  const href = `/insights/${post.slug}`
  const dateLabel = formatPublishedDate(post.published_at)

  return (
    <Link
      href={href}
      className="group flex flex-col overflow-hidden rounded-none shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand/25 hover:shadow-lg"
    >
      <div className="relative aspect-[4/3] bg-muted/40">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={imageAlt}
            fill
            className="object-cover transition duration-500 group-hover:scale-[1.03]"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            loading="lazy"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-muted text-xs text-muted-foreground">
            No image
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col p-5">
        <time className="text-xs font-medium uppercase tracking-wider text-muted-foreground" dateTime={post.published_at ?? undefined}>
          {dateLabel}
        </time>
        <h3 className="mt-2 line-clamp-2 text-lg font-semibold leading-snug tracking-tight text-foreground transition-colors group-hover:text-brand">
          {post.title}
        </h3>
        {post.excerpt ? (
          <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-muted-foreground">{post.excerpt}</p>
        ) : null}
        <span className="mt-4 text-sm font-semibold text-brand">Read more →</span>
      </div>
    </Link>
  )
}
