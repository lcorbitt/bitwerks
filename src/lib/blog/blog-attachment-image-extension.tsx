"use client"

import { Node, mergeAttributes } from "@tiptap/core"
import { NodeViewWrapper, ReactNodeViewRenderer, type NodeViewProps } from "@tiptap/react"

import { BlogAttachmentThumbnail } from "@/lib/blog/blog-attachment-thumbnail"
import {
  BLOG_IMAGE_LAYOUTS,
  DEFAULT_BLOG_IMAGE_LAYOUT,
  type BlogImageLayout,
  parseBlogImageLayout,
} from "@/lib/blog/blog-image-layout"
import { useBlogEditorImages } from "@/lib/blog/blog-editor-images-context"
import { cn } from "@/lib/utils"

const layoutLabels: Record<BlogImageLayout, { short: string; hint: string }> = {
  "center-wide": { short: "Wide", hint: "Full-width block (clears floats)" },
  "float-left": { short: "Left", hint: "Image left — text wraps on the right" },
  "float-right": { short: "Right", hint: "Image right — text wraps on the left" },
}

const editorFigureClass = (layout: BlogImageLayout) =>
  cn(
    "rounded-xl border bg-muted/20 ring-1 ring-border/40 transition-shadow",
    layout === "center-wide" &&
      "clear-both float-none my-5 w-full max-w-full px-3 py-3 shadow-sm",
    layout === "float-left" &&
      "float-left clear-none my-1 mr-4 mb-3 max-w-[min(45%,280px)] w-[min(45%,280px)] p-2 shadow-sm",
    layout === "float-right" &&
      "float-right clear-none my-1 ml-4 mb-3 max-w-[min(45%,280px)] w-[min(45%,280px)] p-2 shadow-sm",
  )

const BlogAttachmentImageView = (props: NodeViewProps) => {
  const images = useBlogEditorImages()
  const imageId = props.node.attrs.imageId as string | null | undefined
  const layout = parseBlogImageLayout(props.node.attrs.layout)
  const row = imageId ? images.find((i) => i.id === imageId) : undefined
  const selected = props.selected

  return (
    <NodeViewWrapper
      as="figure"
      className={cn(editorFigureClass(layout), selected && "ring-2 ring-brand/50")}
      data-blog-attachment-image=""
      data-image-id={imageId ?? ""}
      data-blog-img-layout={layout}
    >
      {row ? (
        /* Always column layout: row + w-full thumbnail collapsed image width to 0 in flex. */
        <div className="flex flex-col gap-3">
          <BlogAttachmentThumbnail
            src={row.public_url}
            alt={row.alt ?? ""}
            fullWidth={layout === "center-wide"}
            fullWidthEditor={layout === "center-wide"}
            size="md"
          />
          <div className="min-w-0 flex-1">
            <figcaption className="text-xs leading-snug text-muted-foreground">
              <div className="font-medium text-foreground">Article image</div>
              <p className="mt-1 line-clamp-3">{row.alt?.trim() || "No alt text yet — set it in Images above."}</p>
            </figcaption>
            <div className="mt-2 flex flex-wrap gap-1" role="group" aria-label="Image layout">
              {BLOG_IMAGE_LAYOUTS.map((key) => (
                <button
                  key={key}
                  type="button"
                  className={cn(
                    "rounded-md border px-2 py-1 text-[10px] font-medium transition-colors",
                    layout === key
                      ? "border-brand bg-brand text-white"
                      : "border-border bg-background text-muted-foreground hover:bg-muted",
                  )}
                  title={layoutLabels[key].hint}
                  onClick={() => props.updateAttributes({ layout: key })}
                >
                  {layoutLabels[key].short}
                </button>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="flex w-full items-center gap-3 px-2 py-4 text-sm text-muted-foreground">
          <div className="flex h-16 w-24 shrink-0 items-center justify-center rounded-lg border border-dashed text-[10px]">
            Missing
          </div>
          <p>Attachment not found. Upload an image in the list above, then insert it again.</p>
        </div>
      )}
    </NodeViewWrapper>
  )
}

export const BlogAttachmentImage = Node.create({
  name: "blogAttachmentImage",
  group: "block",
  atom: true,
  draggable: true,

  addAttributes() {
    return {
      imageId: {
        default: null,
        parseHTML: (element) => (element as HTMLElement).getAttribute("data-image-id"),
        renderHTML: (attrs) => {
          if (!attrs.imageId) return {}
          return { "data-image-id": attrs.imageId as string }
        },
      },
      layout: {
        default: DEFAULT_BLOG_IMAGE_LAYOUT,
        parseHTML: (element) =>
          parseBlogImageLayout((element as HTMLElement).getAttribute("data-blog-img-layout")),
        renderHTML: (attrs) => ({
          "data-blog-img-layout": (attrs.layout as BlogImageLayout) ?? DEFAULT_BLOG_IMAGE_LAYOUT,
        }),
      },
    }
  },

  parseHTML() {
    return [
      {
        tag: "figure[data-blog-attachment-image]",
        getAttrs: (element) => {
          const el = element as HTMLElement
          const id = el.getAttribute("data-image-id")
          if (!id) return false
          return {
            imageId: id,
            layout: parseBlogImageLayout(el.getAttribute("data-blog-img-layout")),
          }
        },
      },
    ]
  },

  renderHTML({ HTMLAttributes, node }) {
    const layout = parseBlogImageLayout(node.attrs.layout)
    return [
      "figure",
      mergeAttributes(HTMLAttributes, {
        "data-blog-attachment-image": "",
        "data-blog-img-layout": layout,
      }),
      0,
    ]
  },

  addNodeView() {
    return ReactNodeViewRenderer(BlogAttachmentImageView)
  },
})
