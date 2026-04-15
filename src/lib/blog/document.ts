import type { BlogImageLayout } from "./blog-image-layout"
import { DEFAULT_BLOG_IMAGE_LAYOUT, parseBlogImageLayout } from "./blog-image-layout"
import { sanitizeBlogHtml } from "./sanitize"

export interface BlogDocumentTextSpan {
  type: "text"
  text: string
}

export interface BlogDocumentLinkSpan {
  type: "link"
  text: string
  href: string
}

export type BlogDocumentInlineSpan = BlogDocumentTextSpan | BlogDocumentLinkSpan

export interface BlogDocumentParagraphNode {
  type: "p"
  spans: BlogDocumentInlineSpan[]
}

export interface BlogDocumentHeadingNode {
  type: "h2" | "h3"
  spans: BlogDocumentInlineSpan[]
}

export interface BlogDocumentListNode {
  type: "ul" | "ol"
  items: BlogDocumentInlineSpan[][]
}

export interface BlogDocumentQuoteNode {
  type: "quote"
  spans: BlogDocumentInlineSpan[]
}

export interface BlogDocumentImageNode {
  type: "image"
  imageId: string
  layout: BlogImageLayout
}

export type BlogDocumentNode =
  | BlogDocumentParagraphNode
  | BlogDocumentHeadingNode
  | BlogDocumentListNode
  | BlogDocumentQuoteNode
  | BlogDocumentImageNode

export interface BlogDocument {
  version: 1
  nodes: BlogDocumentNode[]
}

const emptyTextSpan = (): BlogDocumentTextSpan => ({ type: "text", text: "" })

export const getEmptyBlogDocument = (): BlogDocument => ({
  version: 1,
  nodes: [{ type: "p", spans: [emptyTextSpan()] }],
})

const isRecord = (value: unknown): value is Record<string, unknown> =>
  typeof value === "object" && value !== null

const toTextSpans = (text: unknown): BlogDocumentInlineSpan[] => [
  { type: "text", text: typeof text === "string" ? text : "" },
]

/** Accepts legacy `{ text }` nodes and string list items; returns shape expected by Zod. */
export const upgradeBlogDocumentInput = (input: unknown): unknown => {
  if (!isRecord(input) || input.version !== 1 || !Array.isArray(input.nodes)) return input

  const nodes = input.nodes.map((raw): unknown => {
    if (!isRecord(raw) || typeof raw.type !== "string") return raw

    if (raw.type === "p") {
      if (Array.isArray(raw.spans)) return raw
      return { type: "p", spans: toTextSpans(raw.text) }
    }

    if (raw.type === "h2" || raw.type === "h3") {
      if (Array.isArray(raw.spans)) return raw
      return { type: raw.type, spans: toTextSpans(raw.text) }
    }

    if (raw.type === "quote") {
      if (Array.isArray(raw.spans)) return raw
      return { type: "quote", spans: toTextSpans(raw.text) }
    }

    if (raw.type === "ul" || raw.type === "ol") {
      if (!Array.isArray(raw.items)) return raw
      const items = raw.items.map((item): BlogDocumentInlineSpan[] => {
        if (typeof item === "string") return [{ type: "text", text: item }]
        if (Array.isArray(item)) return item as BlogDocumentInlineSpan[]
        return [{ type: "text", text: "" }]
      })
      return { type: raw.type, items }
    }

    if (raw.type === "image" && typeof raw.imageId === "string")
      return {
        type: "image",
        imageId: raw.imageId,
        layout: parseBlogImageLayout(raw.layout),
      }

    return raw
  })

  return { version: 1, nodes }
}

const escapeText = (value: string) =>
  value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;")

const escapeAttr = escapeText

const isAllowedBlogHref = (href: string): boolean => {
  const t = href.trim()
  if (!t) return false
  if (t.startsWith("#")) return true
  if (t.startsWith("mailto:")) return true
  if (t.startsWith("/") && !t.startsWith("//")) return true
  try {
    const u = new URL(t)
    return u.protocol === "http:" || u.protocol === "https:"
  } catch {
    return false
  }
}

const renderSpansToHtml = (spans: BlogDocumentInlineSpan[]) =>
  spans
    .map((span) => {
      if (span.type === "text") return escapeText(span.text)
      if (span.type === "link") {
        if (!isAllowedBlogHref(span.href)) return escapeText(span.text)
        return `<a href="${escapeAttr(span.href)}">${escapeText(span.text)}</a>`
      }
      return ""
    })
    .join("")

export interface BlogImageLookupRow {
  public_url: string
  alt: string | null
}

const renderNodeToHtml = (node: BlogDocumentNode, imageById?: Record<string, BlogImageLookupRow>) => {
  if (node.type === "p") return `<p>${renderSpansToHtml(node.spans)}</p>`
  if (node.type === "h2" || node.type === "h3")
    return `<${node.type}>${renderSpansToHtml(node.spans)}</${node.type}>`
  if (node.type === "quote") return `<blockquote><p>${renderSpansToHtml(node.spans)}</p></blockquote>`
  if (node.type === "ul" || node.type === "ol") {
    const lis = node.items
      .map((itemSpans) => `<li>${renderSpansToHtml(itemSpans)}</li>`)
      .join("")
    return `<${node.type}>${lis}</${node.type}>`
  }

  if (node.type === "image") {
    const row = imageById?.[node.imageId]
    if (!row?.public_url?.trim()) return ""
    const layout = node.layout ?? DEFAULT_BLOG_IMAGE_LAYOUT
    const alt = escapeAttr(row.alt?.trim() ? row.alt.trim() : "")
    const src = escapeAttr(row.public_url.trim())
    return `<figure data-blog-attachment-image="" data-image-id="${escapeAttr(node.imageId)}" data-blog-img-layout="${escapeAttr(layout)}"><img src="${src}" alt="${alt}" /></figure>`
  }

  return ""
}

export const blogDocumentToHtml = (document: BlogDocument, imageById?: Record<string, BlogImageLookupRow>) =>
  document.nodes.map((n) => renderNodeToHtml(n, imageById)).filter(Boolean).join("")

export const toSanitizedBlogHtml = (document: BlogDocument, imageById?: Record<string, BlogImageLookupRow>) =>
  sanitizeBlogHtml(blogDocumentToHtml(document, imageById))
