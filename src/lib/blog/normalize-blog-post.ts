import type { BlogPostWithImages } from "@/types/blog"

import { parseBlogFaqSchema } from "./blog-seo"

export const normalizeBlogPostWithImages = (row: BlogPostWithImages): BlogPostWithImages => ({
  ...row,
  meta_title: row.meta_title ?? null,
  meta_description: row.meta_description ?? null,
  canonical_url: row.canonical_url ?? null,
  og_image_url: row.og_image_url ?? null,
  seo_keywords: row.seo_keywords ?? [],
  tags: row.tags ?? [],
  faq_schema: parseBlogFaqSchema(row.faq_schema),
})
