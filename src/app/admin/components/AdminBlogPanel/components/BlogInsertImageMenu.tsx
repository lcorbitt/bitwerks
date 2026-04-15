"use client"

import * as React from "react"
import { flushSync } from "react-dom"
import type { Editor } from "@tiptap/core"
import { ImagePlus, Upload } from "lucide-react"

import { registerBlogPostImagesAction } from "@/app/admin/actions/blog"
import { Button } from "@/app/components/Button"
import { BlogAttachmentThumbnail } from "@/lib/blog/blog-attachment-thumbnail"
import type { BlogPostImageRow, BlogPostWithImages } from "@/types/blog"

interface BlogInsertImageMenuProps {
  editor: Editor
  postId: string
  images: BlogPostImageRow[]
  onAttachmentPostUpdated: (post: BlogPostWithImages) => void
}

export const BlogInsertImageMenu = ({
  editor,
  postId,
  images,
  onAttachmentPostUpdated,
}: BlogInsertImageMenuProps) => {
  const [open, setOpen] = React.useState(false)
  const [isUploading, setIsUploading] = React.useState(false)
  const [uploadError, setUploadError] = React.useState<string | null>(null)
  const rootRef = React.useRef<HTMLDivElement>(null)
  const fileInputRef = React.useRef<HTMLInputElement>(null)

  const sorted = React.useMemo(() => [...images].sort((a, b) => a.sort_order - b.sort_order), [images])

  React.useEffect(() => {
    if (!open) return
    const onPointerDown = (e: PointerEvent) => {
      const el = rootRef.current
      if (el && !el.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener("pointerdown", onPointerDown, true)
    return () => document.removeEventListener("pointerdown", onPointerDown, true)
  }, [open])

  const insert = (imageId: string) => {
    editor
      .chain()
      .focus()
      .insertContent({ type: "blogAttachmentImage", attrs: { imageId, layout: "center-wide" } })
      .run()
    setOpen(false)
  }

  const onPickFiles = async (files: FileList | null) => {
    if (!files?.length || !postId) return
    setUploadError(null)
    setIsUploading(true)
    const priorIds = new Set(images.map((i) => i.id))
    try {
      const formData = new FormData()
      formData.set("postId", postId)
      Array.from(files).forEach((file) => formData.append("files", file))

      const nextPost = await registerBlogPostImagesAction(formData)
      const newlyAdded = (nextPost.images ?? [])
        .filter((i) => !priorIds.has(i.id))
        .sort((a, b) => a.sort_order - b.sort_order)

      flushSync(() => {
        onAttachmentPostUpdated(nextPost)
      })

      if (files.length === 1 && newlyAdded.length === 1) insert(newlyAdded[0].id)
      else setOpen(true)
    } catch (e) {
      const message = e instanceof Error ? e.message : "Upload failed."
      setUploadError(message)
    } finally {
      setIsUploading(false)
      if (fileInputRef.current) fileInputRef.current.value = ""
    }
  }

  if (!postId) return null

  return (
    <div className="relative" ref={rootRef}>
      <Button
        type="button"
        variant="outline"
        className="h-8 gap-1.5 px-2 py-1 text-xs md:text-sm"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-haspopup="dialog"
      >
        <ImagePlus className="size-3.5 shrink-0" aria-hidden />
        <span className="hidden sm:inline">Insert image</span>
        <span className="sm:hidden">Image</span>
      </Button>
      {open ? (
        <div
          className="absolute left-0 top-full z-50 mt-1 w-[min(calc(100vw-2rem),300px)] rounded-xl border bg-popover p-2 shadow-md"
          role="dialog"
          aria-label="Insert or upload an image"
        >
          <label className="mb-2 flex cursor-pointer items-center justify-center gap-2 rounded-lg border border-dashed border-border bg-muted/30 px-3 py-2.5 text-xs font-medium text-foreground transition-colors hover:bg-muted/50">
            <Upload className="size-3.5 shrink-0 text-muted-foreground" aria-hidden />
            <span>{isUploading ? "Uploading…" : "Upload new image…"}</span>
            <input
              ref={fileInputRef}
              className="sr-only"
              type="file"
              accept="image/*"
              multiple
              disabled={isUploading}
              onChange={(e) => onPickFiles(e.target.files)}
            />
          </label>
          {uploadError ? <p className="mb-2 text-[11px] text-red-600">{uploadError}</p> : null}

          <div className="max-h-56 overflow-y-auto">
            {sorted.length ? (
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-3" role="grid">
                {sorted.map((img) => (
                  <button
                    key={img.id}
                    type="button"
                    className="flex flex-col items-stretch gap-1 rounded-lg border border-transparent p-1 text-left transition-colors hover:border-brand/40 hover:bg-muted/50"
                    onClick={() => insert(img.id)}
                    title={img.alt?.trim() || img.public_url}
                  >
                    <BlogAttachmentThumbnail src={img.public_url} alt={img.alt ?? ""} fullWidth />
                    <span className="line-clamp-2 px-0.5 text-[10px] leading-tight text-muted-foreground">
                      {img.alt?.trim() || `Image ${img.sort_order + 1}`}
                    </span>
                  </button>
                ))}
              </div>
            ) : (
              <p className="px-1 py-3 text-center text-[11px] text-muted-foreground">
                No article images yet. Use “Upload new image” to add one, then it appears here to insert.
              </p>
            )}
          </div>
        </div>
      ) : null}
    </div>
  )
}
