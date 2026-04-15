import type { BlogFaqPair } from "@/lib/blog/blog-seo"

export interface BlogPostRow {
  id: string
  created_at: string
  updated_at: string
  title: string
  slug: string
  status: "draft" | "published"
  published_at: string | null
  excerpt: string | null
  cover_image_url: string | null
  content_document: unknown
  content_html: string
  meta_title: string | null
  meta_description: string | null
  canonical_url: string | null
  og_image_url: string | null
  seo_keywords: string[]
  tags: string[]
  faq_schema: BlogFaqPair[]
}

export interface BlogPostImageRow {
  id: string
  created_at: string
  post_id: string
  storage_path: string
  public_url: string
  alt: string | null
  sort_order: number
}

export interface BlogPostWithImages extends BlogPostRow {
  images: BlogPostImageRow[]
}

