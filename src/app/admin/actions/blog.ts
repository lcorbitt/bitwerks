"use server"

import { revalidatePath, revalidateTag } from "next/cache"

import type { BlogFaqPair } from "@/lib/blog/blog-seo"
import { normalizeCanonicalUrl, normalizeOptionalUrl, parseBlogFaqSchema } from "@/lib/blog/blog-seo"
import { BLOG_PUBLIC_CACHE_TAG } from "@/lib/blog/constants"
import { getEmptyBlogDocument, toSanitizedBlogHtml } from "@/lib/blog/document"
import { normalizeBlogPostWithImages } from "@/lib/blog/normalize-blog-post"
import { blogPostWithImagesSelect } from "@/lib/blog/post-select-fragment"
import { normalizePostSlug } from "@/lib/blog/slug"
import { parseBlogDocument } from "@/lib/blog/validate"
import { sendInsightPublishedToLeads } from "@/lib/email"
import { createClient } from "@/lib/supabase/server"
import type { BlogPostWithImages } from "@/types/blog"

const revalidateBlogPreviewPath = (postId: string) => {
  revalidatePath(`/blog-preview/${postId}`)
}

const revalidateAdminBlogEditorPath = (postId: string) => {
  revalidatePath(`/admin/blog/${postId}`)
}

interface DeletePostActionInput {
  postId: string
}

export const listAdminPostsAction = async (): Promise<BlogPostWithImages[]> => {
  const supabase = createClient()
  const { data, error } = await supabase.from("blog_posts").select(blogPostWithImagesSelect).order("updated_at", { ascending: false })

  if (error) throw new Error(error.message)
  return (data ?? []).map((row) => normalizeBlogPostWithImages(row as BlogPostWithImages))
}

export const deletePostAction = async ({ postId }: DeletePostActionInput) => {
  const supabase = createClient()

  const { data: existingPost, error: existingPostError } = await supabase
    .from("blog_posts")
    .select("slug")
    .eq("id", postId)
    .maybeSingle()
  if (existingPostError) throw new Error(existingPostError.message)

  const { data: images, error: listImagesError } = await supabase
    .from("blog_post_images")
    .select("storage_path, public_url")
    .eq("post_id", postId)

  if (listImagesError) throw new Error(listImagesError.message)

  if (images?.length) {
    await supabase.storage.from("blog-images").remove(images.map((i) => i.storage_path))
  }

  revalidateBlogPreviewPath(postId)
  revalidateAdminBlogEditorPath(postId)

  const { error } = await supabase.from("blog_posts").delete().eq("id", postId)
  if (error) throw new Error(error.message)

  revalidateTag(BLOG_PUBLIC_CACHE_TAG)
  revalidatePath("/insights")
  revalidatePath("/admin")
  if (existingPost?.slug) revalidatePath(`/insights/${existingPost.slug}`)
}

export const createEmptyDraftAction = async (): Promise<BlogPostWithImages> => {
  const supabase = createClient()

  const document = getEmptyBlogDocument()
  const html = toSanitizedBlogHtml(document)

  const { data, error } = await supabase
    .from("blog_posts")
    .insert({
      title: "Untitled draft",
      slug: "",
      status: "draft",
      published_at: null,
      excerpt: null,
      cover_image_url: null,
      content_document: document,
      content_html: html,
    })
    .select(blogPostWithImagesSelect)
    .single()

  if (error) throw new Error(error.message)

  revalidatePath("/admin")
  revalidateBlogPreviewPath(data.id)
  revalidateAdminBlogEditorPath(data.id)
  return normalizeBlogPostWithImages(data as BlogPostWithImages)
}

interface SavePostActionInput {
  postId: string
  title: string
  slug: string
  excerpt: string | null
  status: "draft" | "published"
  contentDocument: unknown
  metaTitle: string | null
  metaDescription: string | null
  canonicalUrl: string | null
  ogImageUrl: string | null
  seoKeywords: string[]
  tags: string[]
  faqSchema: BlogFaqPair[]
}

export const savePostAction = async (input: SavePostActionInput): Promise<BlogPostWithImages> => {
  const supabase = createClient()

  const normalizedSlug = normalizePostSlug(input.slug || input.title)
  const document = parseBlogDocument(input.contentDocument)

  const { data: postImages, error: postImagesError } = await supabase
    .from("blog_post_images")
    .select("id, public_url, alt")
    .eq("post_id", input.postId)

  if (postImagesError) throw new Error(postImagesError.message)

  const imageById = Object.fromEntries(
    (postImages ?? []).map((row) => [row.id, { public_url: row.public_url, alt: row.alt }]),
  )

  const contentHtml = toSanitizedBlogHtml(document, imageById)
  const faqSchema = parseBlogFaqSchema(input.faqSchema)

  const { data: existingPost, error: existingPostError } = await supabase
    .from("blog_posts")
    .select("published_at, status")
    .eq("id", input.postId)
    .single()
  if (existingPostError) throw new Error(existingPostError.message)

  const publishedAt =
    input.status === "published" ? existingPost.published_at ?? new Date().toISOString() : null

  const metaTitle = input.metaTitle?.trim() ? input.metaTitle.trim() : null
  const metaDescription = input.metaDescription?.trim() ? input.metaDescription.trim() : null

  const { error } = await supabase
    .from("blog_posts")
    .update({
      title: input.title,
      slug: normalizedSlug,
      excerpt: input.excerpt,
      status: input.status,
      published_at: publishedAt,
      content_document: document,
      content_html: contentHtml,
      meta_title: metaTitle,
      meta_description: metaDescription,
      canonical_url: normalizeCanonicalUrl(input.canonicalUrl ?? ""),
      og_image_url: normalizeOptionalUrl(input.ogImageUrl ?? ""),
      seo_keywords: input.seoKeywords,
      tags: input.tags,
      faq_schema: faqSchema,
    })
    .eq("id", input.postId)

  if (error) throw new Error(error.message)

  const { data: nextRow, error: reloadError } = await supabase
    .from("blog_posts")
    .select(blogPostWithImagesSelect)
    .eq("id", input.postId)
    .single()
  if (reloadError) throw new Error(reloadError.message)

  revalidateTag(BLOG_PUBLIC_CACHE_TAG)
  revalidatePath("/insights")
  revalidatePath("/admin")
  revalidateBlogPreviewPath(input.postId)
  revalidateAdminBlogEditorPath(input.postId)
  if (normalizedSlug) revalidatePath(`/insights/${normalizedSlug}`)

  const normalizedPost = normalizeBlogPostWithImages(nextRow as BlogPostWithImages)

  const shouldNotifySubscribers =
    input.status === "published" &&
    existingPost.status !== "published" &&
    Boolean(normalizedSlug)

  if (shouldNotifySubscribers) {
    void sendInsightPublishedToLeads({ supabase, post: normalizedPost }).catch((err) => {
      console.error("[email] Insight subscriber broadcast failed:", err)
    })
  }

  return normalizedPost
}

interface SetCoverImageActionInput {
  postId: string
  coverImageUrl: string | null
}

export const setCoverImageAction = async ({ postId, coverImageUrl }: SetCoverImageActionInput) => {
  const supabase = createClient()

  const { data: post, error: postError } = await supabase.from("blog_posts").select("slug").eq("id", postId).single()
  if (postError) throw new Error(postError.message)

  const { error } = await supabase.from("blog_posts").update({ cover_image_url: coverImageUrl }).eq("id", postId)
  if (error) throw new Error(error.message)

  revalidateTag(BLOG_PUBLIC_CACHE_TAG)
  revalidatePath("/insights")
  revalidatePath("/admin")
  revalidateBlogPreviewPath(postId)
  revalidateAdminBlogEditorPath(postId)
  if (post.slug) revalidatePath(`/insights/${post.slug}`)
}

/**
 * Matches both the legacy fixed cover filename (`cover.{ext}`) and the
 * cache-busting variant (`cover-{stamp}.{ext}`) so we can clean either up
 * regardless of when the post was first published.
 */
const isCoverFileName = (name: string): boolean =>
  /^cover(-[^.]+)?\.[^.]+$/i.test(name)

/** Uploads a single file as the post cover/hero. Does not create `blog_post_images` rows. */
export const uploadBlogCoverImageAction = async (formData: FormData): Promise<BlogPostWithImages> => {
  const postId = String(formData.get("postId") ?? "")
  const file = formData.get("file")
  if (!postId) throw new Error("Missing postId.")
  if (!(file instanceof File)) throw new Error("No file provided.")

  const supabase = createClient()

  const { data: postRow, error: postErr } = await supabase.from("blog_posts").select("slug").eq("id", postId).single()
  if (postErr) throw new Error(postErr.message)

  const { data: listed, error: listErr } = await supabase.storage.from("blog-images").list(postId)
  if (!listErr && listed?.length) {
    const coverPaths = listed.filter((f) => isCoverFileName(f.name)).map((f) => `${postId}/${f.name}`)
    if (coverPaths.length) await supabase.storage.from("blog-images").remove(coverPaths)
  }

  const ext = (file.name.split(".").pop() || "bin").toLowerCase()
  // Stamp the filename so each upload produces a new public URL. Without this
  // the URL string is byte-identical across uploads, and the browser /
  // next/image optimizer caches keep serving the prior image.
  const storagePath = `${postId}/cover-${Date.now()}.${ext}`

  const { error: uploadError } = await supabase.storage.from("blog-images").upload(storagePath, file, {
    upsert: true,
    cacheControl: "3600",
    contentType: file.type || "application/octet-stream",
  })
  if (uploadError) throw new Error(uploadError.message)

  const { data: publicUrlData } = supabase.storage.from("blog-images").getPublicUrl(storagePath)
  const publicUrl = publicUrlData.publicUrl

  const { error: updErr } = await supabase.from("blog_posts").update({ cover_image_url: publicUrl }).eq("id", postId)
  if (updErr) throw new Error(updErr.message)

  const { data, error } = await supabase.from("blog_posts").select(blogPostWithImagesSelect).eq("id", postId).single()
  if (error) throw new Error(error.message)

  revalidateTag(BLOG_PUBLIC_CACHE_TAG)
  revalidatePath("/insights")
  revalidatePath("/admin")
  revalidateBlogPreviewPath(postId)
  revalidateAdminBlogEditorPath(postId)
  if (postRow.slug) revalidatePath(`/insights/${postRow.slug}`)

  return normalizeBlogPostWithImages(data as BlogPostWithImages)
}

/** Clears cover URL and removes any cover objects for this post from storage. */
export const clearBlogCoverImageAction = async ({ postId }: { postId: string }): Promise<BlogPostWithImages> => {
  const supabase = createClient()

  const { data: postRow, error: postErr } = await supabase.from("blog_posts").select("slug").eq("id", postId).single()
  if (postErr) throw new Error(postErr.message)

  const { data: listed, error: listErr } = await supabase.storage.from("blog-images").list(postId)
  if (!listErr && listed?.length) {
    const coverPaths = listed.filter((f) => isCoverFileName(f.name)).map((f) => `${postId}/${f.name}`)
    if (coverPaths.length) await supabase.storage.from("blog-images").remove(coverPaths)
  }

  const { error: updErr } = await supabase.from("blog_posts").update({ cover_image_url: null }).eq("id", postId)
  if (updErr) throw new Error(updErr.message)

  const { data, error } = await supabase.from("blog_posts").select(blogPostWithImagesSelect).eq("id", postId).single()
  if (error) throw new Error(error.message)

  revalidateTag(BLOG_PUBLIC_CACHE_TAG)
  revalidatePath("/insights")
  revalidatePath("/admin")
  revalidateBlogPreviewPath(postId)
  revalidateAdminBlogEditorPath(postId)
  if (postRow.slug) revalidatePath(`/insights/${postRow.slug}`)

  return normalizeBlogPostWithImages(data as BlogPostWithImages)
}

export const registerBlogPostImagesAction = async (formData: FormData): Promise<BlogPostWithImages> => {
  const postId = String(formData.get("postId") ?? "")
  const files = formData.getAll("files").filter((v): v is File => v instanceof File)

  if (!postId) throw new Error("Missing postId.")
  if (!files.length) throw new Error("No files provided.")

  const supabase = createClient()

  const { data: maxOrderRow, error: maxOrderError } = await supabase
    .from("blog_post_images")
    .select("sort_order")
    .eq("post_id", postId)
    .order("sort_order", { ascending: false })
    .limit(1)
    .maybeSingle()

  if (maxOrderError) throw new Error(maxOrderError.message)
  let nextSortOrder = (maxOrderRow?.sort_order ?? -1) + 1

  for (const file of files) {
    const ext = file.name.split(".").pop() || "bin"
    const storagePath = `${postId}/${crypto.randomUUID()}.${ext}`

    const { error: uploadError } = await supabase.storage.from("blog-images").upload(storagePath, file, {
      upsert: false,
      cacheControl: "3600",
      contentType: file.type || "application/octet-stream",
    })
    if (uploadError) throw new Error(uploadError.message)

    const { data: publicUrlData } = supabase.storage.from("blog-images").getPublicUrl(storagePath)
    const publicUrl = publicUrlData.publicUrl

    const { error: insertError } = await supabase.from("blog_post_images").insert({
      post_id: postId,
      storage_path: storagePath,
      public_url: publicUrl,
      alt: null,
      sort_order: nextSortOrder,
    })
    if (insertError) throw new Error(insertError.message)

    nextSortOrder += 1
  }

  const { data, error } = await supabase.from("blog_posts").select(blogPostWithImagesSelect).eq("id", postId).single()
  if (error) throw new Error(error.message)

  revalidateTag(BLOG_PUBLIC_CACHE_TAG)
  revalidatePath("/insights")
  revalidatePath("/admin")
  revalidateBlogPreviewPath(postId)
  revalidateAdminBlogEditorPath(postId)

  return normalizeBlogPostWithImages(data as BlogPostWithImages)
}

interface RemoveBlogPostImageActionInput {
  imageId: string
}

export const removeBlogPostImageAction = async ({ imageId }: RemoveBlogPostImageActionInput): Promise<BlogPostWithImages> => {
  const supabase = createClient()

  const { data: image, error: imageError } = await supabase
    .from("blog_post_images")
    .select("id, post_id, storage_path")
    .eq("id", imageId)
    .single()

  if (imageError) throw new Error(imageError.message)

  await supabase.storage.from("blog-images").remove([image.storage_path])
  const { error: deleteError } = await supabase.from("blog_post_images").delete().eq("id", imageId)
  if (deleteError) throw new Error(deleteError.message)

  const { data, error } = await supabase.from("blog_posts").select(blogPostWithImagesSelect).eq("id", image.post_id).single()
  if (error) throw new Error(error.message)

  revalidateTag(BLOG_PUBLIC_CACHE_TAG)
  revalidatePath("/insights")
  revalidatePath("/admin")
  revalidateBlogPreviewPath(image.post_id)
  revalidateAdminBlogEditorPath(image.post_id)

  return normalizeBlogPostWithImages(data as BlogPostWithImages)
}

interface UpdateBlogPostImageAltActionInput {
  imageId: string
  alt: string | null
}

export const updateBlogPostImageAltAction = async ({
  imageId,
  alt,
}: UpdateBlogPostImageAltActionInput): Promise<BlogPostWithImages> => {
  const supabase = createClient()

  const { data: image, error: imageError } = await supabase
    .from("blog_post_images")
    .select("id, post_id")
    .eq("id", imageId)
    .single()

  if (imageError) throw new Error(imageError.message)

  const { error: updateError } = await supabase.from("blog_post_images").update({ alt }).eq("id", imageId)
  if (updateError) throw new Error(updateError.message)

  const { data, error } = await supabase.from("blog_posts").select(blogPostWithImagesSelect).eq("id", image.post_id).single()
  if (error) throw new Error(error.message)

  revalidateTag(BLOG_PUBLIC_CACHE_TAG)
  revalidatePath("/insights")
  revalidatePath("/admin")
  revalidateBlogPreviewPath(image.post_id)
  revalidateAdminBlogEditorPath(image.post_id)

  return normalizeBlogPostWithImages(data as BlogPostWithImages)
}

interface ReorderBlogPostImagesActionInput {
  postId: string
  orderedImageIds: string[]
}

export const reorderBlogPostImagesAction = async ({
  postId,
  orderedImageIds,
}: ReorderBlogPostImagesActionInput): Promise<BlogPostWithImages> => {
  const supabase = createClient()

  const updates = orderedImageIds.map((id, idx) => ({ id, post_id: postId, sort_order: idx }))

  const { error: upsertError } = await supabase.from("blog_post_images").upsert(updates, { onConflict: "id" })
  if (upsertError) throw new Error(upsertError.message)

  const { data, error } = await supabase.from("blog_posts").select(blogPostWithImagesSelect).eq("id", postId).single()
  if (error) throw new Error(error.message)

  revalidateTag(BLOG_PUBLIC_CACHE_TAG)
  revalidatePath("/insights")
  revalidatePath("/admin")
  revalidateBlogPreviewPath(postId)
  revalidateAdminBlogEditorPath(postId)

  return normalizeBlogPostWithImages(data as BlogPostWithImages)
}

