import type { BlogPostWithImages } from "@/types/blog"

export const getPostListImageUrl = (post: BlogPostWithImages): string | null => {
  const cover = post.cover_image_url?.trim()
  if (cover) return cover
  const og = post.og_image_url?.trim()
  if (og) return og
  return null
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
