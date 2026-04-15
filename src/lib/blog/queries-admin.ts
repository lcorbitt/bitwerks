import { createClient } from "@/lib/supabase/server"
import type { BlogPostWithImages } from "@/types/blog"

import { normalizeBlogPostWithImages } from "./normalize-blog-post"
import { blogPostWithImagesSelect } from "./post-select-fragment"

export const getBlogPostByIdForAdmin = async (postId: string): Promise<BlogPostWithImages | null> => {
  const supabase = createClient()
  const { data, error } = await supabase.from("blog_posts").select(blogPostWithImagesSelect).eq("id", postId).maybeSingle()
  if (error) throw new Error(error.message)
  if (!data) return null
  return normalizeBlogPostWithImages(data as BlogPostWithImages)
}

export const listAllBlogPostsForAdmin = async (): Promise<BlogPostWithImages[]> => {
  const supabase = createClient()
  const { data, error } = await supabase
    .from("blog_posts")
    .select(blogPostWithImagesSelect)
    .order("updated_at", { ascending: false })

  if (error) throw new Error(error.message)
  return (data ?? []).map((row) => normalizeBlogPostWithImages(row as BlogPostWithImages))
}
