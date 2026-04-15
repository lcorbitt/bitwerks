import type { BlogPostWithImages } from "@/types/blog"

/** Dedicated cover, then SEO image, then first gallery image (by sort_order). */
export const getPostFeaturedImageUrl = (post: BlogPostWithImages): string | null => {
  const cover = post.cover_image_url?.trim()
  if (cover) return cover
  const og = post.og_image_url?.trim()
  if (og) return og
  const sorted = [...(post.images ?? [])].sort((a, b) => a.sort_order - b.sort_order)
  const first = sorted[0]?.public_url?.trim()
  return first || null
}

export const getPostListImageUrl = (post: BlogPostWithImages): string | null => getPostFeaturedImageUrl(post)

/** Ensures Open Graph / JSON-LD get absolute URLs (Facebook, LinkedIn require this). */
export const toAbsoluteMediaUrl = (url: string | null | undefined, siteBase: string): string | null => {
  const s = url?.trim()
  if (!s) return null
  if (/^https?:\/\//i.test(s)) return s
  const base = siteBase.replace(/\/$/, "")
  const path = s.startsWith("/") ? s : `/${s}`
  try {
    return new URL(path, `${base}/`).href
  } catch {
    return null
  }
}

export const getPostListImageAlt = (post: BlogPostWithImages, imageUrl: string | null): string => {
  if (!imageUrl) return ""
  const fromAttachment = post.images?.find((i) => i.public_url === imageUrl)?.alt?.trim()
  if (fromAttachment) return fromAttachment
  return `${post.title} — cover`
}

export const formatPublishedDate = (iso: string | null): string => {
  if (!iso) return ""
  return new Date(iso).toLocaleDateString(undefined, { year: "numeric", month: "long", day: "numeric" })
}
