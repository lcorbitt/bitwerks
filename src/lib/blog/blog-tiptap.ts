import type { JSONContent } from "@tiptap/core"

import { DEFAULT_BLOG_IMAGE_LAYOUT, parseBlogImageLayout, type BlogImageLayout } from "./blog-image-layout"
import type { BlogDocument, BlogDocumentImageNode, BlogDocumentInlineSpan, BlogDocumentNode } from "./document"

const emptyTextSpan = (): BlogDocumentInlineSpan => ({ type: "text", text: "" })

const mergeAdjacentTextSpans = (spans: BlogDocumentInlineSpan[]): BlogDocumentInlineSpan[] => {
  const out: BlogDocumentInlineSpan[] = []
  for (const span of spans) {
    const prev = out[out.length - 1]
    if (span.type === "text" && prev?.type === "text") prev.text += span.text
    else out.push(span.type === "text" ? { type: "text", text: span.text } : { ...span })
  }
  return out.length ? out : [emptyTextSpan()]
}

const tiptapInlineToSpans = (content: JSONContent[] | undefined): BlogDocumentInlineSpan[] => {
  if (!content?.length) return [emptyTextSpan()]

  const spans: BlogDocumentInlineSpan[] = []

  for (const node of content) {
    if (node.type === "text") {
      const text = node.text ?? ""
      const linkMark = node.marks?.find((m) => m.type === "link")
      const href = linkMark?.attrs && typeof linkMark.attrs.href === "string" ? linkMark.attrs.href : ""
      if (href) spans.push({ type: "link", text, href })
      else spans.push({ type: "text", text })
      continue
    }

    if (node.type === "hardBreak") {
      spans.push({ type: "text", text: "\n" })
    }
  }

  return mergeAdjacentTextSpans(spans)
}

const spansToTiptapContent = (spans: BlogDocumentInlineSpan[]): JSONContent[] => {
  const out: JSONContent[] = []
  for (const span of spans) {
    if (span.type === "text") {
      if (span.text) out.push({ type: "text", text: span.text })
      else out.push({ type: "text", text: "" })
      continue
    }
    out.push({
      type: "text",
      text: span.text,
      marks: [{ type: "link", attrs: { href: span.href } }],
    })
  }
  return out.length ? out : [{ type: "text", text: "" }]
}

const listItemToSpans = (item: JSONContent | undefined): BlogDocumentInlineSpan[] => {
  if (!item || item.type !== "listItem" || !item.content?.length) return [emptyTextSpan()]
  const first = item.content[0]
  if (first.type === "paragraph") return tiptapInlineToSpans(first.content)
  if (first.type === "heading") return tiptapInlineToSpans(first.content)
  return [emptyTextSpan()]
}

const blockquoteToQuoteSpans = (node: JSONContent): BlogDocumentInlineSpan[] => {
  const parts: BlogDocumentInlineSpan[] = []
  const inner = node.content ?? []
  let isFirst = true
  for (const block of inner) {
    if (block.type === "paragraph") {
      if (!isFirst) parts.push({ type: "text", text: "\n\n" })
      parts.push(...tiptapInlineToSpans(block.content))
      isFirst = false
    }
  }
  return mergeAdjacentTextSpans(parts)
}

const tiptapBlockToNodes = (node: JSONContent): BlogDocumentNode[] => {
  if (!node.type) return []

  if (node.type === "paragraph")
    return [{ type: "p", spans: tiptapInlineToSpans(node.content) }]

  if (node.type === "heading") {
    const level = node.attrs?.level
    const spans = tiptapInlineToSpans(node.content)
    if (level === 3) return [{ type: "h3", spans }]
    return [{ type: "h2", spans }]
  }

  if (node.type === "bulletList") {
    const items = (node.content ?? []).map((li) => listItemToSpans(li))
    return items.length ? [{ type: "ul", items }] : []
  }

  if (node.type === "orderedList") {
    const items = (node.content ?? []).map((li) => listItemToSpans(li))
    return items.length ? [{ type: "ol", items }] : []
  }

  if (node.type === "blockquote") return [{ type: "quote", spans: blockquoteToQuoteSpans(node) }]

  if (node.type === "blogAttachmentImage") {
    const imageId = node.attrs && typeof node.attrs.imageId === "string" ? node.attrs.imageId : ""
    if (!imageId) return []
    const layout: BlogImageLayout = parseBlogImageLayout(node.attrs?.layout)
    const next: BlogDocumentImageNode = { type: "image", imageId, layout }
    return [next]
  }

  return []
}

export const blogDocumentToTiptapJson = (document: BlogDocument): JSONContent => ({
  type: "doc",
  content: document.nodes.flatMap((n) => blogNodeToTiptapBlocks(n)),
})

const blogNodeToTiptapBlocks = (node: BlogDocumentNode): JSONContent[] => {
  if (node.type === "p")
    return [{ type: "paragraph", content: spansToTiptapContent(node.spans) }]

  if (node.type === "h2" || node.type === "h3") {
    const level = node.type === "h3" ? 3 : 2
    return [
      {
        type: "heading",
        attrs: { level },
        content: spansToTiptapContent(node.spans),
      },
    ]
  }

  if (node.type === "ul") {
    return [
      {
        type: "bulletList",
        content: node.items.map((spans) => ({
          type: "listItem",
          content: [{ type: "paragraph", content: spansToTiptapContent(spans) }],
        })),
      },
    ]
  }

  if (node.type === "ol") {
    return [
      {
        type: "orderedList",
        content: node.items.map((spans) => ({
          type: "listItem",
          content: [{ type: "paragraph", content: spansToTiptapContent(spans) }],
        })),
      },
    ]
  }

  if (node.type === "quote") {
    return [
      {
        type: "blockquote",
        content: [{ type: "paragraph", content: spansToTiptapContent(node.spans) }],
      },
    ]
  }

  if (node.type === "image")
    return [
      {
        type: "blogAttachmentImage",
        attrs: { imageId: node.imageId, layout: node.layout ?? DEFAULT_BLOG_IMAGE_LAYOUT },
      },
    ]

  return []
}

export const tiptapJsonToBlogDocument = (json: JSONContent): BlogDocument => {
  const blocks = json.content ?? []
  const nodes: BlogDocumentNode[] = []

  for (const block of blocks) {
    nodes.push(...tiptapBlockToNodes(block))
  }

  if (!nodes.length) return { version: 1, nodes: [{ type: "p", spans: [emptyTextSpan()] }] }

  return { version: 1, nodes }
}
