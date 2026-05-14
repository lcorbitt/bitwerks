"use client"

import Link from "next/link"

interface BlogEditorActionBarProps {
  status: "draft" | "published"
  onStatusChange: (status: "draft" | "published") => void
  isSaving: boolean
  saveError: string | null
  onSave: () => void
  previewHref: string
}

export const BlogEditorActionBar = ({
  status,
  onStatusChange,
  isSaving,
  saveError,
  onSave,
  previewHref,
}: BlogEditorActionBarProps) => (
  <div
    className="pointer-events-none fixed bottom-4 right-4 z-40 flex max-w-[calc(100vw-2rem)] flex-col items-end gap-2"
    aria-label="Blog editor actions"
  >
    {saveError ? (
      <div
        className="pointer-events-auto max-w-sm rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-xs text-red-800 shadow-sm dark:border-red-900/60 dark:bg-red-950/40 dark:text-red-200"
        role="alert"
      >
        {saveError}
      </div>
    ) : null}
    <div className="pointer-events-auto flex flex-wrap items-center gap-3 rounded-2xl border bg-background/95 px-4 py-3 shadow-lg backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <Link
        href={previewHref}
        target="_blank"
        rel="noopener noreferrer"
        className="text-xs font-medium text-brand underline underline-offset-4"
      >
        Layout preview
      </Link>
      <div className="h-5 w-px bg-border" aria-hidden />
      <label className="flex items-center gap-2 text-sm">
        <input
          type="checkbox"
          checked={status === "published"}
          onChange={(e) => onStatusChange(e.target.checked ? "published" : "draft")}
        />
        Published
      </label>
      <button
        type="button"
        className="h-9 rounded-xl bg-brand px-4 text-sm font-medium text-white disabled:opacity-60"
        onClick={onSave}
        disabled={isSaving}
      >
        {isSaving ? "Saving…" : "Save"}
      </button>
    </div>
  </div>
)
