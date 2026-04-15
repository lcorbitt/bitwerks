"use client"

import * as React from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"

import type { BlogPostWithImages } from "@/types/blog"

import { BlogLayerEditor } from "@/app/admin/components/AdminBlogPanel/components/BlogLayerEditor"
import { ConfirmModal } from "@/components/confirm-modal"

interface AdminBlogEditorClientProps {
  initialPost: BlogPostWithImages
}

export const AdminBlogEditorClient = ({ initialPost }: AdminBlogEditorClientProps) => {
  const router = useRouter()
  const [post, setPost] = React.useState(initialPost)
  const [hasUnsavedChanges, setHasUnsavedChanges] = React.useState(false)
  const [leaveConfirmOpen, setLeaveConfirmOpen] = React.useState(false)
  const pendingHrefRef = React.useRef<string | null>(null)

  const onDirtyChange = React.useCallback((dirty: boolean) => {
    setHasUnsavedChanges(dirty)
  }, [])

  React.useEffect(() => {
    setPost(initialPost)
  }, [initialPost])

  React.useEffect(() => {
    if (!hasUnsavedChanges) return
    const onBeforeUnload = (e: BeforeUnloadEvent) => {
      e.preventDefault()
      e.returnValue = ""
    }
    window.addEventListener("beforeunload", onBeforeUnload)
    return () => window.removeEventListener("beforeunload", onBeforeUnload)
  }, [hasUnsavedChanges])

  React.useEffect(() => {
    if (!hasUnsavedChanges) return

    const onDocumentClickCapture = (event: MouseEvent) => {
      if (event.defaultPrevented) return
      if (event.button !== 0) return
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return

      const target = event.target as HTMLElement | null
      const anchor = target?.closest?.("a[href]")
      if (!anchor) return
      const a = anchor as HTMLAnchorElement
      if (a.target === "_blank" || a.download) return

      const hrefAttr = a.getAttribute("href")
      if (!hrefAttr || hrefAttr.startsWith("#") || hrefAttr.startsWith("javascript:")) return
      if (hrefAttr.startsWith("mailto:") || hrefAttr.startsWith("tel:")) return

      let url: URL
      try {
        url = new URL(hrefAttr, window.location.origin)
      } catch {
        return
      }
      if (url.origin !== window.location.origin) return

      const here = new URL(window.location.href)
      if (url.pathname === here.pathname && url.search === here.search) return

      event.preventDefault()
      event.stopPropagation()
      pendingHrefRef.current = `${url.pathname}${url.search}${url.hash}`
      setLeaveConfirmOpen(true)
    }

    document.addEventListener("click", onDocumentClickCapture, true)
    return () => document.removeEventListener("click", onDocumentClickCapture, true)
  }, [hasUnsavedChanges])

  const onConfirmLeave = () => {
    const href = pendingHrefRef.current
    pendingHrefRef.current = null
    if (href) router.push(href)
  }

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-background">
      <ConfirmModal
        open={leaveConfirmOpen}
        onOpenChange={(open) => {
          setLeaveConfirmOpen(open)
          if (!open) pendingHrefRef.current = null
        }}
        title="Leave without saving?"
        description="You have unsaved changes. If you leave now, edits in this tab may be lost. Save first, or leave to continue."
        cancelLabel="Stay on editor"
        confirmLabel="Leave anyway"
        hideCloseButton
        onConfirm={onConfirmLeave}
      />

      <div className="border-b bg-muted/20">
        <div className="container flex flex-wrap items-center justify-between gap-4 py-4">
          <div className="flex flex-wrap items-center gap-4">
            <Link href="/admin" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              ← Admin
            </Link>
            <div className="h-4 w-px bg-border" aria-hidden />
            <h1 className="text-lg font-semibold tracking-tight">Blog editor</h1>
          </div>
          <div className="flex flex-wrap items-center gap-3 text-sm">
            <Link
              href={`/blog-preview/${post.id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand underline underline-offset-4"
            >
              Layout preview
            </Link>
            {post.status === "published" && post.slug ? (
              <Link href={`/blog/${post.slug}`} target="_blank" rel="noopener noreferrer" className="text-muted-foreground underline underline-offset-4">
                Live post
              </Link>
            ) : null}
          </div>
        </div>
      </div>

      <div className="container max-w-6xl py-8 md:py-10">
        <BlogLayerEditor key={post.id} post={post} onPostChange={setPost} onDirtyChange={onDirtyChange} />
      </div>
    </div>
  )
}
