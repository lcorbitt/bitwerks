import { unstable_cache } from "next/cache"

import type { BlogPostWithImages } from "@/types/blog"
import { getSupabasePublicReadClient } from "@/lib/supabase/public-read-client"

import { BLOG_PUBLIC_CACHE_TAG } from "./constants"
import { normalizeBlogPostWithImages } from "./normalize-blog-post"
import { blogPostWithImagesSelect } from "./post-select-fragment"

export const listPublishedPostsPublic = unstable_cache(
  async (): Promise<BlogPostWithImages[]> => {
    const supabase = getSupabasePublicReadClient()

    const { data, error } = await supabase
      .from("blog_posts")
      .select(blogPostWithImagesSelect)
      .eq("status", "published")
      .not("published_at", "is", null)
      .order("published_at", { ascending: false })

    if (error) throw new Error(error.message)
    return (data ?? []).map((row) => normalizeBlogPostWithImages(row as BlogPostWithImages))
  },
  ["blog", "published-posts"],
  { tags: [BLOG_PUBLIC_CACHE_TAG] },
)

export const getLatestPublishedPostPublic = unstable_cache(
  async (): Promise<BlogPostWithImages | null> => {
    const supabase = getSupabasePublicReadClient()

    const { data, error } = await supabase
      .from("blog_posts")
      .select(blogPostWithImagesSelect)
      .eq("status", "published")
      .not("published_at", "is", null)
      .order("published_at", { ascending: false })
      .limit(1)
      .maybeSingle()

    if (error) throw new Error(error.message)
    if (!data) return null
    return normalizeBlogPostWithImages(data as BlogPostWithImages)
  },
  ["blog", "latest-published-post"],
  { tags: [BLOG_PUBLIC_CACHE_TAG] },
)

export const getPublishedPostBySlugPublic = (slug: string) =>
  unstable_cache(
    async (): Promise<BlogPostWithImages | null> => {
      const supabase = getSupabasePublicReadClient()

      const { data, error } = await supabase
        .from("blog_posts")
        .select(blogPostWithImagesSelect)
        .eq("status", "published")
        .eq("slug", slug)
        .not("published_at", "is", null)
        .maybeSingle()

      if (error) throw new Error(error.message)
      if (!data) return null
      return normalizeBlogPostWithImages(data as BlogPostWithImages)
    },
    ["blog", "post", slug],
    { tags: [BLOG_PUBLIC_CACHE_TAG] },
  )()

