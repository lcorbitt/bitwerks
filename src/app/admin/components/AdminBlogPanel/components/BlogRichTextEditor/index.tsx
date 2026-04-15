"use client"

import * as React from "react"
import type { Editor } from "@tiptap/core"
import { EditorContent, useEditor, useEditorState } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"
import { DragHandle } from "@tiptap/extension-drag-handle-react"
import { NodeRange } from "@tiptap/extension-node-range"
import { GripVertical, Heading2, Heading3, Link2, List, ListOrdered, Pilcrow, Quote } from "lucide-react"

import { Button } from "@/app/components/Button"
import { BlogInsertImageMenu } from "../BlogInsertImageMenu"
import { BlogAttachmentImage } from "@/lib/blog/blog-attachment-image-extension"
import { blogDocumentToTiptapJson, tiptapJsonToBlogDocument } from "@/lib/blog/blog-tiptap"
import { BlogEditorImagesContext } from "@/lib/blog/blog-editor-images-context"
import { getEmptyBlogDocument, type BlogDocument } from "@/lib/blog/document"
import { parseBlogDocument } from "@/lib/blog/validate"
import type { BlogPostImageRow, BlogPostWithImages } from "@/types/blog"

interface BlogRichTextEditorProps {
  value: unknown
  onChange: (value: unknown) => void
  postId: string
  attachmentImages: BlogPostImageRow[]
  onAttachmentPostUpdated: (post: BlogPostWithImages) => void
}

const baseExtensions = [
  NodeRange,
  StarterKit.configure({
    bold: false,
    italic: false,
    strike: false,
    code: false,
    codeBlock: false,
    horizontalRule: false,
    hardBreak: false,
    underline: false,
    trailingNode: false,
    heading: { levels: [2, 3] },
    link: {
      openOnClick: false,
      autolink: true,
      HTMLAttributes: { rel: "noopener noreferrer", target: "_blank" },
    },
  }),
  BlogAttachmentImage,
]

const parseToBlogDocument = (input: unknown): BlogDocument => {
  try {
    return parseBlogDocument(input)
  } catch {
    return getEmptyBlogDocument()
  }
}

const documentsAreEqual = (a: BlogDocument, b: BlogDocument) => JSON.stringify(a) === JSON.stringify(b)

interface BlogEditorToolbarProps {
  editor: Editor
  onOpenLinkPanel: () => void
  postId: string
  attachmentImages: BlogPostImageRow[]
  onAttachmentPostUpdated: (post: BlogPostWithImages) => void
}

const BlogEditorToolbar = ({
  editor,
  onOpenLinkPanel,
  postId,
  attachmentImages,
  onAttachmentPostUpdated,
}: BlogEditorToolbarProps) => {
  const { isH2, isH3, isBullet, isOrdered, isQuote, isLink } = useEditorState({
    editor,
    selector: ({ editor: ed }) => ({
      isH2: ed.isActive("heading", { level: 2 }),
      isH3: ed.isActive("heading", { level: 3 }),
      isBullet: ed.isActive("bulletList"),
      isOrdered: ed.isActive("orderedList"),
      isQuote: ed.isActive("blockquote"),
      isLink: ed.isActive("link"),
    }),
  })

  return (
    <div className="flex flex-wrap gap-1 border-b bg-muted/30 px-2 py-1.5">
      <Button
        type="button"
        variant={isH2 ? "default" : "outline"}
        className="h-8 gap-1 px-2 py-1 text-xs md:text-sm"
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        aria-pressed={isH2}
      >
        <Heading2 className="size-3.5 shrink-0" aria-hidden />
        <span className="text-xs">H2</span>
      </Button>
      <Button
        type="button"
        variant={isH3 ? "default" : "outline"}
        className="h-8 gap-1 px-2 py-1 text-xs md:text-sm"
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        aria-pressed={isH3}
      >
        <Heading3 className="size-3.5 shrink-0" aria-hidden />
        <span className="text-xs">H3</span>
      </Button>
      <Button
        type="button"
        variant="outline"
        className="h-8 gap-1 px-2 py-1 text-xs md:text-sm"
        onClick={() => editor.chain().focus().setParagraph().run()}
      >
        <Pilcrow className="size-3.5 shrink-0" aria-hidden />
        <span className="text-xs">Body</span>
      </Button>
      <Button
        type="button"
        variant={isBullet ? "default" : "outline"}
        className="h-8 gap-1 px-2 py-1 text-xs md:text-sm"
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        aria-pressed={isBullet}
      >
        <List className="size-3.5 shrink-0" aria-hidden />
        <span className="text-xs">List</span>
      </Button>
      <Button
        type="button"
        variant={isOrdered ? "default" : "outline"}
        className="h-8 gap-1 px-2 py-1 text-xs md:text-sm"
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        aria-pressed={isOrdered}
      >
        <ListOrdered className="size-3.5 shrink-0" aria-hidden />
        <span className="text-xs">Ordered</span>
      </Button>
      <Button
        type="button"
        variant={isQuote ? "default" : "outline"}
        className="h-8 gap-1 px-2 py-1 text-xs md:text-sm"
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        aria-pressed={isQuote}
      >
        <Quote className="size-3.5 shrink-0" aria-hidden />
        <span className="text-xs">Quote</span>
      </Button>
      <Button
        type="button"
        variant={isLink ? "default" : "outline"}
        className="h-8 gap-1 px-2 py-1 text-xs md:text-sm"
        onClick={onOpenLinkPanel}
        aria-pressed={isLink}
      >
        <Link2 className="size-3.5 shrink-0" aria-hidden />
        <span className="text-xs">Link</span>
      </Button>
      <BlogInsertImageMenu
        editor={editor}
        postId={postId}
        images={attachmentImages}
        onAttachmentPostUpdated={onAttachmentPostUpdated}
      />
    </div>
  )
}

export const BlogRichTextEditor = ({
  value,
  onChange,
  postId,
  attachmentImages,
  onAttachmentPostUpdated,
}: BlogRichTextEditorProps) => {
  const [linkPanelOpen, setLinkPanelOpen] = React.useState(false)
  const [linkHref, setLinkHref] = React.useState("")

  const onChangeRef = React.useRef(onChange)
  React.useEffect(() => {
    onChangeRef.current = onChange
  }, [onChange])

  const editor = useEditor(
    {
      immediatelyRender: false,
      extensions: baseExtensions,
      content: blogDocumentToTiptapJson(parseToBlogDocument(value)),
      editorProps: {
        attributes: {
          class:
            "prose prose-sm max-w-none dark:prose-invert focus:outline-none min-h-[280px] flow-root px-3 py-2 pl-10 prose-headings:font-semibold prose-a:text-brand prose-p:leading-relaxed [&_h2]:clear-both [&_h3]:clear-both",
        },
      },
      onUpdate: ({ editor: ed }) => {
        onChangeRef.current(tiptapJsonToBlogDocument(ed.getJSON()))
      },
    },
    [],
  )

  React.useEffect(() => {
    if (!editor) return
    const nextDoc = parseToBlogDocument(value)
    const currentDoc = tiptapJsonToBlogDocument(editor.getJSON())
    if (documentsAreEqual(currentDoc, nextDoc)) return
    editor.commands.setContent(blogDocumentToTiptapJson(nextDoc), { emitUpdate: false })
  }, [editor, value])

  const openLinkPanel = React.useCallback(() => {
    if (!editor) return
    const prior = editor.getAttributes("link").href as string | undefined
    setLinkHref(typeof prior === "string" ? prior : "https://")
    setLinkPanelOpen(true)
  }, [editor])

  const applyLink = React.useCallback(() => {
    if (!editor) return
    const trimmed = linkHref.trim()
    if (!trimmed) {
      editor.chain().focus().extendMarkRange("link").unsetLink().run()
    } else {
      editor.chain().focus().extendMarkRange("link").setLink({ href: trimmed }).run()
    }
    setLinkPanelOpen(false)
  }, [editor, linkHref])

  const removeLink = React.useCallback(() => {
    if (!editor) return
    editor.chain().focus().extendMarkRange("link").unsetLink().run()
    setLinkPanelOpen(false)
  }, [editor])

  return (
    <BlogEditorImagesContext.Provider value={attachmentImages}>
      <div className="grid gap-2">
        <div className="rounded-xl border bg-background">
          {!editor ? (
            <div className="min-h-[320px] overflow-hidden rounded-xl animate-pulse bg-muted/40" aria-hidden />
          ) : (
            <>
              <div className="relative z-20 rounded-t-xl">
                <BlogEditorToolbar
                  editor={editor}
                  onOpenLinkPanel={openLinkPanel}
                  postId={postId}
                  attachmentImages={attachmentImages}
                  onAttachmentPostUpdated={onAttachmentPostUpdated}
                />
              </div>
              {linkPanelOpen ? (
                <div className="flex flex-wrap items-center gap-2 border-b bg-muted/20 px-2 py-2">
                  <label className="grid flex-1 min-w-[160px] gap-0.5 text-xs text-muted-foreground">
                    URL
                    <input
                      className="rounded-md border bg-background px-2 py-1.5 text-sm text-foreground"
                      value={linkHref}
                      onChange={(e) => setLinkHref(e.target.value)}
                      placeholder="https://"
                      autoComplete="url"
                    />
                  </label>
                  <Button type="button" className="h-9 px-3 py-1 text-sm" onClick={applyLink}>
                    Apply
                  </Button>
                  <Button type="button" className="h-9 px-3 py-1 text-sm" variant="outline" onClick={removeLink}>
                    Remove link
                  </Button>
                  <Button type="button" className="h-9 px-3 py-1 text-sm" variant="ghost" onClick={() => setLinkPanelOpen(false)}>
                    Cancel
                  </Button>
                </div>
              ) : null}
              <div className="relative min-h-[280px] overflow-x-auto overflow-y-visible rounded-b-xl">
                <DragHandle editor={editor} className="z-[45]">
                  <button
                    type="button"
                    className="flex h-7 w-7 cursor-grab items-center justify-center rounded-md border border-border bg-background shadow-sm active:cursor-grabbing"
                    aria-label="Drag to reorder this block"
                  >
                    <GripVertical className="size-3.5 text-muted-foreground" aria-hidden />
                  </button>
                </DragHandle>
                <EditorContent editor={editor} />
              </div>
            </>
          )}
        </div>
        <p className="text-xs text-muted-foreground">
          Each block is a layer: use the grip beside a block to drag and reorder. For images, pick Wide (full width), Left
          (text wraps on the right), or Right (text wraps on the left). New headings clear floats like a magazine section
          break. Save to refresh the public preview.
        </p>
      </div>
    </BlogEditorImagesContext.Provider>
  )
}
