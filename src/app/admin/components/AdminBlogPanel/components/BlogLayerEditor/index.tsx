"use client"

import * as React from "react"
import Link from "next/link"

import { BlogAttachmentThumbnail } from "@/lib/blog/blog-attachment-thumbnail"
import type { BlogFaqPair } from "@/lib/blog/blog-seo"
import { splitListInput } from "@/lib/blog/blog-seo"
import type { BlogPostWithImages } from "@/types/blog"
import { getEmptyBlogDocument } from "@/lib/blog/document"
import { isBlogEditorDirty } from "@/lib/blog/blog-editor-dirty"

import {
  clearBlogCoverImageAction,
  savePostAction,
  uploadBlogCoverImageAction,
} from "@/app/admin/actions/blog"
import { BlogRichTextEditor } from "../BlogRichTextEditor"
import { BlogSeoSection } from "../BlogSeoSection"

interface BlogLayerEditorProps {
  post: BlogPostWithImages
  onPostChange: (post: BlogPostWithImages) => void
  onDirtyChange?: (dirty: boolean) => void
}

const listToInput = (values: string[]) => values.join(", ")

export const BlogLayerEditor = ({ post, onPostChange, onDirtyChange }: BlogLayerEditorProps) => {
  const [title, setTitle] = React.useState(post.title)
  const [slug, setSlug] = React.useState(post.slug)
  const [excerpt, setExcerpt] = React.useState(post.excerpt ?? "")
  const [status, setStatus] = React.useState<"draft" | "published">(post.status)
  const [contentDocument, setContentDocument] = React.useState<unknown>(post.content_document ?? getEmptyBlogDocument())

  const [metaTitle, setMetaTitle] = React.useState(post.meta_title ?? "")
  const [metaDescription, setMetaDescription] = React.useState(post.meta_description ?? "")
  const [canonicalUrl, setCanonicalUrl] = React.useState(post.canonical_url ?? "")
  const [ogImageUrl, setOgImageUrl] = React.useState(post.og_image_url ?? "")
  const [keywordsInput, setKeywordsInput] = React.useState(listToInput(post.seo_keywords))
  const [tagsInput, setTagsInput] = React.useState(listToInput(post.tags))
  const [faqItems, setFaqItems] = React.useState<BlogFaqPair[]>(() => [...post.faq_schema])

  const [isSaving, setIsSaving] = React.useState(false)
  const [saveError, setSaveError] = React.useState<string | null>(null)
  type CoverOp = "idle" | "uploading" | "removing"
  const [coverOp, setCoverOp] = React.useState<CoverOp>("idle")
  const [coverError, setCoverError] = React.useState<string | null>(null)

  const lastSyncedPostIdRef = React.useRef<string | null>(null)

  /** Full form reset only when switching to a different post — never overwrite editor body on image uploads etc. */
  React.useEffect(() => {
    if (lastSyncedPostIdRef.current !== post.id) {
      lastSyncedPostIdRef.current = post.id
      setTitle(post.title)
      setSlug(post.slug)
      setExcerpt(post.excerpt ?? "")
      setStatus(post.status)
      setContentDocument(post.content_document ?? getEmptyBlogDocument())
      setMetaTitle(post.meta_title ?? "")
      setMetaDescription(post.meta_description ?? "")
      setCanonicalUrl(post.canonical_url ?? "")
      setOgImageUrl(post.og_image_url ?? "")
      setKeywordsInput(listToInput(post.seo_keywords))
      setTagsInput(listToInput(post.tags))
      setFaqItems([...post.faq_schema])
      setSaveError(null)
      setCoverError(null)
      setCoverOp("idle")
    }
  }, [post])

  const isDirty = React.useMemo(
    () =>
      isBlogEditorDirty({
        title,
        slug,
        excerpt,
        status,
        contentDocument,
        metaTitle,
        metaDescription,
        canonicalUrl,
        ogImageUrl,
        keywordsInput,
        tagsInput,
        faqItems,
        post,
      }),
    [
      title,
      slug,
      excerpt,
      status,
      contentDocument,
      metaTitle,
      metaDescription,
      canonicalUrl,
      ogImageUrl,
      keywordsInput,
      tagsInput,
      faqItems,
      post,
    ]
  )

  React.useEffect(() => {
    onDirtyChange?.(isDirty)
  }, [isDirty, onDirtyChange])

  const onSave = async () => {
    setIsSaving(true)
    setSaveError(null)
    try {
      const saved = await savePostAction({
        postId: post.id,
        title,
        slug,
        excerpt: excerpt.trim() ? excerpt.trim() : null,
        status,
        contentDocument,
        metaTitle: metaTitle.trim() ? metaTitle.trim() : null,
        metaDescription: metaDescription.trim() ? metaDescription.trim() : null,
        canonicalUrl: canonicalUrl.trim() ? canonicalUrl.trim() : null,
        ogImageUrl: ogImageUrl.trim() ? ogImageUrl.trim() : null,
        seoKeywords: splitListInput(keywordsInput),
        tags: splitListInput(tagsInput),
        faqSchema: faqItems.filter((f) => f.question.trim() && f.answer.trim()),
      })

      onPostChange(saved)
      setContentDocument(saved.content_document ?? getEmptyBlogDocument())
    } catch (error) {
      const message = error instanceof Error ? error.message : "Save failed."
      setSaveError(message)
    } finally {
      setIsSaving(false)
    }
  }

  const onCoverInputChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    e.target.value = ""
    if (!file) return
    setCoverOp("uploading")
    setCoverError(null)
    try {
      const formData = new FormData()
      formData.set("postId", post.id)
      formData.set("file", file)
      const nextPost = await uploadBlogCoverImageAction(formData)
      onPostChange(nextPost)
    } catch (error) {
      const message = error instanceof Error ? error.message : "Cover upload failed. Try again or use a smaller file."
      setCoverError(message)
    } finally {
      setCoverOp("idle")
    }
  }

  return (
    <div className="grid gap-8">
      <div className="flex flex-wrap items-start justify-between gap-6">
        <div>
          <div className="text-sm font-semibold">Article</div>
          <div className="mt-1 text-xs text-muted-foreground">
            {post.status === "published" && post.slug ? `/insights/${post.slug}` : "Draft"}
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <label className="flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              checked={status === "published"}
              onChange={(e) => setStatus(e.target.checked ? "published" : "draft")}
            />
            Published
          </label>
          <button
            type="button"
            className="h-10 rounded-xl bg-brand px-4 text-sm font-medium text-white disabled:opacity-60"
            onClick={onSave}
            disabled={isSaving}
          >
            {isSaving ? "Saving…" : "Save"}
          </button>
        </div>
      </div>

      <div className="grid gap-3 md:grid-cols-2">
        <label className="grid gap-1.5">
          <span className="text-xs font-medium">Title</span>
          <input className="h-10 rounded-xl border bg-background px-3" value={title} onChange={(e) => setTitle(e.target.value)} />
        </label>
        <label className="grid gap-1.5">
          <span className="text-xs font-medium">Slug</span>
          <input className="h-10 rounded-xl border bg-background px-3" value={slug} onChange={(e) => setSlug(e.target.value)} />
        </label>
      </div>

      <label className="grid gap-1.5">
        <span className="text-xs font-medium">Excerpt</span>
        <textarea
          className="min-h-20 rounded-xl border bg-background px-3 py-2"
          value={excerpt}
          onChange={(e) => setExcerpt(e.target.value)}
        />
      </label>

      <BlogSeoSection
        metaTitle={metaTitle}
        metaDescription={metaDescription}
        canonicalUrl={canonicalUrl}
        ogImageUrl={ogImageUrl}
        keywordsInput={keywordsInput}
        tagsInput={tagsInput}
        faqItems={faqItems}
        onMetaTitleChange={setMetaTitle}
        onMetaDescriptionChange={setMetaDescription}
        onCanonicalUrlChange={setCanonicalUrl}
        onOgImageUrlChange={setOgImageUrl}
        onKeywordsInputChange={setKeywordsInput}
        onTagsInputChange={setTagsInput}
        onFaqItemsChange={setFaqItems}
      />

      <div className="grid gap-3 rounded-xl border bg-background/50 px-4 py-4">
        <div className="text-xs font-medium">Cover / hero image</div>
        <p className="text-xs text-muted-foreground">
          One image for the post header and insights cards. Replacing it overwrites the previous file. Article images belong in
          the editor (Insert image).
        </p>
        <div className="flex flex-wrap items-center gap-4">
          <div className="relative inline-block shrink-0">
            {post.cover_image_url ? (
              <BlogAttachmentThumbnail
                src={post.cover_image_url}
                alt="Cover preview"
                size="md"
                className={`ring-2 ring-brand/30 ${coverOp !== "idle" ? "opacity-60" : ""}`}
              />
            ) : (
              <div
                className={`flex h-16 w-24 shrink-0 items-center justify-center rounded-lg border border-dashed text-[10px] text-muted-foreground ${coverOp !== "idle" ? "opacity-60" : ""}`}
                aria-hidden
              >
                No cover
              </div>
            )}
            {coverOp !== "idle" ? (
              <div
                className="absolute inset-0 flex items-center justify-center rounded-lg bg-background/70 text-[10px] font-medium text-foreground"
                aria-live="polite"
              >
                {coverOp === "uploading" ? "Uploading…" : "Removing…"}
              </div>
            ) : null}
          </div>
          <div className="flex min-w-0 flex-1 flex-col gap-2">
            <label
              className={`w-fit text-xs font-medium underline underline-offset-4 ${coverOp !== "idle" ? "cursor-not-allowed text-muted-foreground no-underline" : "cursor-pointer text-brand"}`}
            >
              {coverOp === "uploading"
                ? "Uploading…"
                : post.cover_image_url
                  ? "Replace cover image…"
                  : "Choose cover image…"}
              <input
                className="sr-only"
                type="file"
                accept="image/*"
                disabled={coverOp !== "idle"}
                onChange={onCoverInputChange}
              />
            </label>
            <button
              type="button"
              className="h-9 w-fit rounded-lg border bg-background px-3 text-xs disabled:opacity-50"
              disabled={!post.cover_image_url || coverOp !== "idle"}
              onClick={async () => {
                setCoverOp("removing")
                setCoverError(null)
                try {
                  const nextPost = await clearBlogCoverImageAction({ postId: post.id })
                  onPostChange(nextPost)
                } catch (error) {
                  const message =
                    error instanceof Error ? error.message : "Could not remove the cover image. Try again."
                  setCoverError(message)
                } finally {
                  setCoverOp("idle")
                }
              }}
            >
              Remove cover
            </button>
            {coverOp === "uploading" ? (
              <p className="text-xs text-muted-foreground" aria-live="polite">
                Uploading your cover image. Keep this tab open until it finishes.
              </p>
            ) : null}
            {coverOp === "removing" ? (
              <p className="text-xs text-muted-foreground" aria-live="polite">
                Removing the cover image from storage and this post.
              </p>
            ) : null}
            {coverError ? (
              <div className="rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-xs text-red-800 dark:border-red-900/60 dark:bg-red-950/40 dark:text-red-200" role="alert">
                {coverError}
              </div>
            ) : null}
          </div>
        </div>
      </div>

      <div className="grid gap-2">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="text-xs font-medium">Content</div>
          <Link
            href={`/blog-preview/${post.id}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-medium text-brand underline underline-offset-4"
          >
            Open layout preview
          </Link>
        </div>
        <p className="text-xs text-muted-foreground">
          Preview uses the last saved version from the database. Use <strong>Insert image</strong> in the toolbar to add
          images inside the article; they stay in the editor until you save.
        </p>
        <BlogRichTextEditor
          key={post.id}
          value={contentDocument}
          onChange={setContentDocument}
          postId={post.id}
          attachmentImages={post.images ?? []}
          onAttachmentPostUpdated={onPostChange}
        />
      </div>

      {saveError ? (
        <div className="rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-800 dark:border-red-900/60 dark:bg-red-950/40 dark:text-red-200" role="alert">
          {saveError}
        </div>
      ) : null}
    </div>
  )
}
