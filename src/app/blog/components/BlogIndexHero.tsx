import Image from "next/image"
import Link from "next/link"

import type { BlogPostWithImages } from "@/types/blog"
import { formatPublishedDate, getPostListImageAlt, getPostListImageUrl } from "@/lib/blog/post-preview-media"

interface BlogIndexHeroProps {
  post: BlogPostWithImages
}

export const BlogIndexHero = ({ post }: BlogIndexHeroProps) => {
  const imageUrl = getPostListImageUrl(post)
  const imageAlt = getPostListImageAlt(post, imageUrl)
  const href = `/blog/${post.slug}`
  const dateLabel = formatPublishedDate(post.published_at)

  return (
    <Link
      href={href}
      className="group relative isolate mx-auto block max-w-6xl overflow-hidden rounded-none shadow-sm transition-shadow duration-300 hover:shadow-xl"
    >
      <div className="grid gap-0 lg:grid-cols-[1.05fr_1fr]">
        <div className="relative aspect-[16/10] min-h-[220px] bg-muted/40 lg:aspect-auto lg:min-h-[min(52vh,520px)]">
          {imageUrl ? (
            <Image
              src={imageUrl}
              alt={imageAlt}
              fill
              className="object-cover transition duration-500 ease-out group-hover:scale-[1.02]"
              sizes="(max-width: 1024px) 100vw, 55vw"
              priority
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-muted to-muted/60 text-sm text-muted-foreground">
              No cover image
            </div>
          )}
        </div>

        <div className="relative flex flex-col justify-center px-6 py-8 sm:px-10 sm:py-10 lg:px-12 lg:py-14">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand">Latest</p>
          <h2 className="mt-3 text-balance text-2xl font-semibold leading-tight tracking-tight text-foreground sm:text-3xl lg:text-4xl">
            <span className="transition-colors group-hover:text-brand">{post.title}</span>
          </h2>
          {post.excerpt ? (
            <p className="mt-4 line-clamp-4 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              {post.excerpt}
            </p>
          ) : null}
          {dateLabel ? (
            <p className="mt-5 text-sm font-medium text-muted-foreground">
              <time dateTime={post.published_at ?? undefined}>{dateLabel}</time>
            </p>
          ) : null}
          <span className="mt-8 inline-flex items-center text-sm font-semibold text-brand">
            Read article
            <svg
              className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              viewBox="0 0 16 16"
              fill="none"
              aria-hidden
            >
              <path
                d="M3 8h10M9 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </div>
      </div>
    </Link>
  )
}
