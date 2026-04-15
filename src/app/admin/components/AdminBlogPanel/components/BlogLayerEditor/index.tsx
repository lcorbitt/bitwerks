"use client"

import * as React from "react"
import Link from "next/link"

import { BlogAttachmentThumbnail } from "@/lib/blog/blog-attachment-thumbnail"
import type { BlogFaqPair } from "@/lib/blog/blog-seo"
import { splitListInput } from "@/lib/blog/blog-seo"
import type { BlogPostWithImages } from "@/types/blog"
import { getEmptyBlogDocument } from "@/lib/blog/document"

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
}

const listToInput = (values: string[]) => values.join(", ")

export const BlogLayerEditor = ({ post, onPostChange }: BlogLayerEditorProps) => {
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
  const [coverUploading, setCoverUploading] = React.useState(false)
  const [errorMessage, setErrorMessage] = React.useState<string | null>(null)

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
    }
  }, [post])

  const onSave = async () => {
    setIsSaving(true)
    setErrorMessage(null)
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
      setErrorMessage(message)
    } finally {
      setIsSaving(false)
    }
  }

  const onCoverFile = async (files: FileList | null) => {
    const file = files?.[0]
    if (!file) return
    setCoverUploading(true)
    setErrorMessage(null)
    try {
      const formData = new FormData()
      formData.set("postId", post.id)
      formData.set("file", file)
      const nextPost = await uploadBlogCoverImageAction(formData)
      onPostChange(nextPost)
    } catch (error) {
      const message = error instanceof Error ? error.message : "Cover upload failed."
      setErrorMessage(message)
    } finally {
      setCoverUploading(false)
    }
  }

  return (
    <div className="grid gap-8">
      <div className="flex flex-wrap items-start justify-between gap-6">
        <div>
          <div className="text-sm font-semibold">Article</div>
          <div className="mt-1 text-xs text-muted-foreground">
            {post.status === "published" && post.slug ? `/blog/${post.slug}` : "Draft"}
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
          One image for the post header and blog cards. Replacing it overwrites the previous file. Article images belong in
          the editor (Insert image).
        </p>
        <div className="flex flex-wrap items-center gap-4">
          {post.cover_image_url ? (
            <BlogAttachmentThumbnail
              src={post.cover_image_url}
              alt="Cover preview"
              size="md"
              className="ring-2 ring-brand/30"
            />
          ) : (
            <div
              className="flex h-16 w-24 shrink-0 items-center justify-center rounded-lg border border-dashed text-[10px] text-muted-foreground"
              aria-hidden
            >
              No cover
            </div>
          )}
          <div className="flex min-w-0 flex-1 flex-col gap-2">
            <label className="w-fit cursor-pointer text-xs font-medium text-brand underline underline-offset-4">
              {coverUploading ? "Uploading…" : post.cover_image_url ? "Replace cover image…" : "Choose cover image…"}
              <input
                className="sr-only"
                type="file"
                accept="image/*"
                disabled={coverUploading}
                onChange={(e) => onCoverFile(e.target.files)}
              />
            </label>
            <button
              type="button"
              className="h-9 w-fit rounded-lg border bg-background px-3 text-xs disabled:opacity-50"
              disabled={!post.cover_image_url || coverUploading}
              onClick={async () => {
                const nextPost = await clearBlogCoverImageAction({ postId: post.id })
                onPostChange(nextPost)
              }}
            >
              Remove cover
            </button>
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

      {errorMessage ? <div className="text-sm text-red-600">{errorMessage}</div> : null}
    </div>
  )
}
